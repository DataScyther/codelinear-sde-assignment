"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { headerNavItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Menu, X, Hexagon } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3.5 border-b border-transparent",
        "transition-[background-color,border-color,box-shadow] duration-200 ease-out",
        isScrolled
          ? "bg-[#07060f]/95 border-white/[0.03] shadow-[0_1px_0_rgba(255,255,255,0.02)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-[1px]">
            <div className="flex items-center justify-center w-full h-full bg-[#07060f] rounded-[6px]">
              <Hexagon className="w-4 h-4 text-cyber-cyan" />
            </div>
          </div>
          <span className="font-heading font-bold text-base tracking-tight text-slate-100">
            Codelinear
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {headerNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-[13px] text-slate-400 hover:text-slate-200 transition-colors duration-150"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#features"
            className="px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-[13px] font-medium text-white transition-[background-color,border-color] duration-150"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-150"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </Container>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden absolute top-full left-0 right-0 bg-[#07060f]/98 border-b border-white/[0.02] py-3 px-4 flex flex-col gap-0.5">
          {headerNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-slate-300 hover:text-white p-3 rounded-lg hover:bg-white/[0.04] transition-colors duration-150"
              onClick={closeMobileMenu}
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-white/[0.02]">
            <Link
              href="#features"
              className="flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white text-sm font-medium"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
