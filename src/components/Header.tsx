
import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">SaaS MVP</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#" className="hover:text-gray-300" prefetch={false}>
          Features
        </Link>
        <Link href="#" className="hover:text-gray-300" prefetch={false}>
          Pricing
        </Link>
        <Link href="#" className="hover:text-gray-300" prefetch={false}>
          Dashboard
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-transparent border border-white text-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-colors"
          prefetch={false}
        >
          Sign In
        </Link>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-colors"
          prefetch={false}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
