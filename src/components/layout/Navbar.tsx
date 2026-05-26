"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerNavItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Menu, X, Hexagon } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-[#030014]/80 backdrop-blur-md border-white/[0.04] py-3"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-[1px]">
            <div className="flex items-center justify-center w-full h-full bg-[#030014] rounded-[6px]">
              <Hexagon className="w-4 h-4 text-[#06b6d4]" />
            </div>
          </div>
          <span className="font-heading font-bold text-base tracking-tight text-slate-100">
            Codelinear
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-6">
          {headerNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-[13px] text-slate-400 hover:text-slate-200 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#features"
            className="px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-[13px] font-medium text-white transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#030014]/95 backdrop-blur-xl border-b border-white/[0.04] py-3 px-4 flex flex-col gap-0.5">
          {headerNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-slate-300 hover:text-white p-3 rounded-lg hover:bg-white/[0.04] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-white/[0.04]">
            <Link
              href="#features"
              className="flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
