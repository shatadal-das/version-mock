"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MOCK_COMPANIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function SubmitPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Network Request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Experience Submitted", {
      description: "Thank you for contributing! Redirecting...",
    });

    setLoading(false);
    setTimeout(() => router.push("/"), 1000);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <Card className="border-slate-200 shadow-md">
        <CardHeader className="bg-slate-50/50 border-b pb-6">
          <CardTitle className="text-2xl">Contribute Experience</CardTitle>
          <p className="text-sm text-muted-foreground">
            Share your interview questions and help juniors.
          </p>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Selection */}
            <div className="space-y-2">
              <Label>Company</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent>
                  {MOCK_COMPANIES.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Round Type & Result */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>Round Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OT">Online Test (OT)</SelectItem>
                    <SelectItem value="TECHNICAL">
                      Technical Interview
                    </SelectItem>
                    <SelectItem value="HR">HR Interview</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Outcome</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Did you qualify?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="QUALIFIED">✅ Qualified</SelectItem>
                    <SelectItem value="NOT_QUALIFIED">
                      ❌ Not Qualified
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Visibility Option (New) */}
            <div className="space-y-2">
              <Label>Visibility</Label>
              <Select defaultValue="ANONYMOUS" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ANONYMOUS">🕵️ Post Anonymously</SelectItem>
                  <SelectItem value="PUBLIC">👨‍💻 Show My Name</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Anonymous posts will hide your name from juniors but keep it
                visible to admins.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                className="min-h-50 resize-y"
                placeholder="• What questions were asked?&#10;• Difficulty level?&#10;• Any tips?"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full text-md h-12"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Experience"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
