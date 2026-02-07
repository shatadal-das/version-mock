import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Interview<span className="text-blue-600">Archives</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/submit"
            className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors hidden md:block"
          >
            Contribute
          </Link>

          <Link href="/login">
            <Button size="sm" className="font-semibold shadow-sm">
              Senior Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
