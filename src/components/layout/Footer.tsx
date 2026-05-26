import React from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { footerNavItems } from "@/constants/navigation";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.04] bg-[#020010] pt-14 pb-8">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-6 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2 mb-2 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-3 w-fit">
              <div className="relative flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-[1px]">
                <div className="flex items-center justify-center w-full h-full bg-[#020010] rounded-[4px]">
                  <Hexagon className="w-3.5 h-3.5 text-[#06b6d4]" />
                </div>
              </div>
              <span className="font-heading font-semibold text-sm tracking-tight text-slate-200">
                Codelinear
              </span>
            </Link>
            <p className="text-slate-600 text-xs max-w-[240px] leading-relaxed">
              Modern financial infrastructure for high-performance institutions.
            </p>
          </div>

          {/* Link columns */}
          {[
            { title: "Product", items: footerNavItems.product },
            { title: "Resources", items: footerNavItems.resources },
            { title: "Company", items: footerNavItems.company },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-medium text-slate-300 mb-3 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-5 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} Codelinear. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerNavItems.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
