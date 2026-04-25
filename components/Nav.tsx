"use client";

import { useState, useEffect } from "react";
import { profile } from "@/lib/data";

const links = [
  { label: "Skills", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F5F7]/80 backdrop-blur-2xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
          {profile.name}
        </span>
        <ul className="hidden sm:flex gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#6E6E73] hover:text-[#007AFF] transition-colors px-3 py-1.5 rounded-full hover:bg-[#007AFF]/8"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
