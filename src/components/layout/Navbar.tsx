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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-[#030014]/80 backdrop-blur-md border-white/5 py-4 shadow-[var(--shadow-glass)]"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform hover:scale-105"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-[1px]">
            <div className="flex items-center justify-center w-full h-full bg-[#030014] rounded-lg">
              <Hexagon className="w-5 h-5 text-[#06b6d4] group-hover:text-[#a855f7] transition-colors" />
            </div>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-slate-100">
            Codelinear
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {headerNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#06b6d4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/get-started"
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:shadow-[var(--shadow-glow-cyan)] hover:border-[#a855f7]/50 text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#030014]/95 backdrop-blur-xl border-b border-white/5 py-4 px-4 flex flex-col gap-4 shadow-2xl">
          {headerNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-base font-medium text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5">
            <Link
              href="/get-started"
              className="flex items-center justify-center w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-medium transition-all shadow-[var(--shadow-glow-cyan)]"
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
