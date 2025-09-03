"use client";

import { Home } from "lucide-react";
import Link from "next/link";

const nav = [
  { label: "Rent", href: "#" },
  { label: "Buy", href: "#" },
  { label: "Sell", href: "#" },
  { label: "Manage Property", href: "#" },
  { label: "Resources", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 py-3">
  <Link href="/" className="flex items-center" style={{ gap: '10px' }}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Home className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Estatery</span>
        </Link>

  <nav className="hidden items-center text-sm text-gray-700 md:flex" style={{ gap: '10px' }}>
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-gray-900 px-6 py-3 rounded-md transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

  <div className="flex items-center" style={{ gap: '10px' }}>
          <Link
            href="#"
            className="hidden rounded-lg border border-gray-300 px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 md:inline-block"
          >
            Login
          </Link>
          <Link
            href="#"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-primary hover:bg-primary/90"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
