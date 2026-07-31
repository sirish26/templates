export type Project = {
  id: number;
  title: string;
  category: string;
  color: string;
  slug: string;
  description: string;
  bullets: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fintech App",
    category: "App",
    color: "#ff4400",
    slug: "fintech-app",
    description: "A fast, modern fintech platform built for trading and portfolio management.",
    bullets: [
      "Real-time market updates",
      "Secure authentication flow",
      "Responsive dashboard layout",
    ],
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Design",
    color: "#32CD32",
    slug: "brand-identity",
    description: "A bold visual identity system created for a new product launch.",
    bullets: [
      "Logo and typography system",
      "Marketing collateral templates",
      "Brand guidelines for scale",
    ],
  },
  {
    id: 3,
    title: "E-Commerce",
    category: "Web",
    color: "#4169E1",
    slug: "e-commerce",
    description: "A high-converting storefront focused on clean UX and fast checkout.",
    bullets: [
      "Product grid with filters",
      "Optimized checkout flow",
      "Mobile-first performance",
    ],
  },
  {
    id: 4,
    title: "Marketing Site",
    category: "Web",
    color: "#FFD700",
    slug: "marketing-site",
    description: "A landing page experience designed to convert visitors into subscribers.",
    bullets: [
      "Hero-driven layout",
      "Split-tested messaging",
      "Animated interaction details",
    ],
  },
  {
    id: 5,
    title: "AI Dashboard",
    category: "App",
    color: "#9370DB",
    slug: "ai-dashboard",
    description: "An analytics dashboard powered by AI insights and reporting.",
    bullets: [
      "Data visualization components",
      "Smart summary cards",
      "Custom alert system",
    ],
  },
  {
    id: 6,
    title: "Print Campaign",
    category: "Design",
    color: "#FF1493",
    slug: "print-campaign",
    description: "A tactile campaign layout crafted for high-impact print distribution.",
    bullets: [
      "Bold editorial typography",
      "Modular layout system",
      "On-brand color palette",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
