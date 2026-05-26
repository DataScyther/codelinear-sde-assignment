export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const headerNavItems: NavItem[] = [
  {
    title: "Solutions",
    href: "#solutions",
  },
  {
    title: "Liquidity",
    href: "#liquidity",
  },
  {
    title: "Dashboard",
    href: "#dashboard",
  },
  {
    title: "Analytics",
    href: "#analytics",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

export const footerNavItems = {
  product: [
    { title: "Features", href: "#features" },
    { title: "Integrations", href: "#integrations" },
    { title: "Enterprise Pricing", href: "#pricing" },
    { title: "Security Protocols", href: "/security" },
  ] as NavItem[],
  resources: [
    { title: "System Documentation", href: "https://docs.antigravity.finance", external: true },
    { title: "API Reference", href: "/docs/api" },
    { title: "Developer Sandbox", href: "/sandbox" },
    { title: "Status Dashboard", href: "/status" },
  ] as NavItem[],
  company: [
    { title: "About Systems", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Press Kit", href: "/press" },
    { title: "Contact Sales", href: "/contact" },
  ] as NavItem[],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "SLA Commitments", href: "/sla" },
  ] as NavItem[],
};
