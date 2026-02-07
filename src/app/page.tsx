import Link from "next/link";
import { MOCK_COMPANIES, MOCK_EXPERIENCES } from "@/lib/mockData";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Plus, TrendingUp } from "lucide-react";

export default function Home() {
  // Calculate total experiences dynamically based on the actual data array
  const totalExperiences = MOCK_EXPERIENCES.length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero / Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b pb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
            Interview Archives
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A centralized collection of interview experiences from your seniors.
            Prepare smarter with real insights.
          </p>
        </div>
        <Link href="/submit">
          <Button
            size="lg"
            className="gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Plus className="h-5 w-5" /> Share Experience
          </Button>
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <div>
            <p className="font-bold text-2xl text-blue-900">
              {totalExperiences}
            </p>
            <p className="text-sm text-blue-700">Total Experiences</p>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <h2 className="text-2xl font-bold mb-6">Browse by Company</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_COMPANIES.map((company) => {
          // Dynamic Count: Filter experiences for this specific company
          const experienceCount = MOCK_EXPERIENCES.filter(
            (e) => e.companyId === company.id,
          ).length;

          return (
            <Link key={company.id} href={`/company/${company.id}`}>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer border-slate-200 group h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <CardDescription className="mt-1 font-medium">
                      {experienceCount} submissions
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
