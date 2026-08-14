export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  tags?: string[];
};

export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'ai-powered-notebook',
    title: 'AI-Powered Notebook',
    price: 49,
    description:
      'A beautiful notebook UI theme for AI product landing pages. Includes components for features, pricing, and integrations.',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop',
    ],
    tags: ['landing', 'saas', 'marketing'],
  },
  {
    id: 'prod_002',
    slug: 'startup-starter-kit',
    title: 'Startup Starter Kit',
    price: 79,
    description:
      'Complete starter kit for AI startups: dashboard, auth, billing UI and marketing pages. Easy to customize and ship.',
    images: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&q=80&auto=format&fit=crop',
    ],
    tags: ['dashboard', 'admin'],
  },
  {
    id: 'prod_003',
    slug: 'components-pack',
    title: 'Premium Components Pack',
    price: 29,
    description:
      'A curated set of responsive components and patterns for Next.js + Tailwind — modals, forms, pricing tables and more.',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop',
    ],
    tags: ['components', 'ui'],
  },
];
