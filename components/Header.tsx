import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            HMS
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/departments" className="text-gray-700 hover:text-gray-900">
              Departments
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-gray-900">
              Doctors
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-gray-900">
              Register
            </Link>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
