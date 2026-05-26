import React from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { footerNavItems } from "@/constants/navigation";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#030014] pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-2 group mb-6 w-fit"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-[1px]">
                <div className="flex items-center justify-center w-full h-full bg-[#030014] rounded-lg">
                  <Hexagon className="w-5 h-5 text-[#06b6d4]" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-slate-100">
                Codelinear
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-6">
              Modern financial infrastructure for high-performance institutions.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold">Product</h4>
            <ul className="flex flex-col gap-4">
              {footerNavItems.product.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-[#06b6d4] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="flex flex-col gap-4">
              {footerNavItems.resources.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-[#06b6d4] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="flex flex-col gap-4">
              {footerNavItems.company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-[#06b6d4] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Codelinear. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            {footerNavItems.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
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
