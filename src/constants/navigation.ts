import type { NavItem } from "@/types";

export const headerNavItems: NavItem[] = [
  { title: "Features", href: "#features" },
  { title: "Dashboard", href: "#dashboard" },
];

export const footerNavItems = {
  product: [
    { title: "Features", href: "#features" },
    { title: "Integrations", href: "/integrations" },
    { title: "Security", href: "/security" },
  ] as NavItem[],
  resources: [
    { title: "Documentation", href: "/docs" },
    { title: "API Reference", href: "/api" },
    { title: "Status", href: "/status" },
  ] as NavItem[],
  company: [
    { title: "About", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
  legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ] as NavItem[],
};
