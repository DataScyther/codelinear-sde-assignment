import type { NavItem } from "@/types";

export const headerNavItems: NavItem[] = [
  { title: "Features", href: "#features" },
  { title: "Dashboard", href: "#dashboard" },
  { title: "Pricing", href: "#pricing" },
];

export const footerNavItems = {
  product: [
    { title: "Features", href: "#features" },
    { title: "Integrations", href: "#" },
    { title: "Pricing", href: "#pricing" },
    { title: "Security", href: "#" },
  ] as NavItem[],
  resources: [
    { title: "Documentation", href: "#" },
    { title: "API Reference", href: "#" },
    { title: "Status", href: "#" },
  ] as NavItem[],
  company: [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Contact", href: "#" },
  ] as NavItem[],
  legal: [
    { title: "Privacy", href: "#" },
    { title: "Terms", href: "#" },
  ] as NavItem[],
};
