import Link from "next/link";
import { MOCK_COMPANIES, MOCK_EXPERIENCES } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";

// Update the type definition for params
type Props = {
  params: Promise<{ id: string }>;
};

export default async function CompanyPage({ params }: Props) {
  // 1. Await the params object (Critical for Next.js 15)
  const resolvedParams = await params;

  // 2. Use the resolved ID
  const company = MOCK_COMPANIES.find((c) => c.id === resolvedParams.id);
  const experiences = MOCK_EXPERIENCES.filter(
    (e) => e.companyId === resolvedParams.id,
  );

  if (!company) {
    return (
      <div className="container mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Company Not Found</h2>
        <p className="text-muted-foreground mt-2">ID: {resolvedParams.id}</p>
        <Link href="/" className="text-blue-600 hover:underline mt-4 block">
          Return Home
        </Link>
      </div>
    );
  }

  const rounds = {
    OT: experiences.filter((e) => e.type === "OT"),
    TECHNICAL: experiences.filter((e) => e.type === "TECHNICAL"),
    HR: experiences.filter((e) => e.type === "HR"),
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:text-blue-600 flex items-center gap-1 mb-6 transition-colors w-fit"
      >
        <ArrowLeft className="h-4 w-4" /> Back to All Companies
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-16 w-16 bg-white border shadow-sm rounded-2xl flex items-center justify-center text-3xl font-bold text-slate-700">
          {company.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-900">{company.name}</h1>
          <p className="text-muted-foreground">
            Detailed interview process breakdown
          </p>
        </div>
      </div>

      <Tabs defaultValue="OT" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-slate-100/50">
          <TabsTrigger
            value="OT"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Online Test ({rounds.OT.length})
          </TabsTrigger>
          <TabsTrigger
            value="TECHNICAL"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Technical ({rounds.TECHNICAL.length})
          </TabsTrigger>
          <TabsTrigger
            value="HR"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            HR Round ({rounds.HR.length})
          </TabsTrigger>
        </TabsList>

        {Object.entries(rounds).map(([key, exps]) => (
          <TabsContent
            key={key}
            value={key}
            className="space-y-4 animate-in fade-in-50"
          >
            {exps.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-slate-500">
                  No experiences shared for this round yet.
                </p>
              </div>
            ) : (
              exps.map((exp) => (
                <Card
                  key={exp.id}
                  className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`h-1.5 w-full ${exp.result === "QUALIFIED" ? "bg-emerald-500" : "bg-rose-500"}`}
                  />

                  <CardHeader className="pb-3 pt-5">
                    <div className="flex justify-between items-start">
                      <Badge
                        variant="outline"
                        className={`gap-1 pr-3 pl-2 py-1 ${
                          exp.result === "QUALIFIED"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                      >
                        {exp.result === "QUALIFIED" ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5" />
                        )}
                        {exp.result === "QUALIFIED"
                          ? "Qualified"
                          : "Not Qualified"}
                      </Badge>
                      <span className="text-xs text-slate-400 font-medium">
                        {exp.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap text-sm">
                      {exp.description}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
