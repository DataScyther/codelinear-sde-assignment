import React from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { footerNavItems } from "@/constants/navigation";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.04] bg-[#030014] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-[1px]">
                <div className="flex items-center justify-center w-full h-full bg-[#030014] rounded-[6px]">
                  <Hexagon className="w-4 h-4 text-[#06b6d4]" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-slate-100">
                Codelinear
              </span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
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
              <h4 className="text-sm font-medium text-white mb-4">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Codelinear. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerNavItems.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
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
