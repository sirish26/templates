import { products } from '../../../data/products';
import { notFound } from 'next/navigation';
import { useCart } from '../../../context/CartContext';

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  // This page mixes server and client behavior via a small client component for cart actions
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img src={product.images[0]} alt={product.title} className="w-full rounded-2xl object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-white/70 mb-6">{product.description}</p>
          <div className="text-2xl font-bold mb-6">${product.price}</div>
          <ClientAdd productId={product.id} />
        </div>
      </div>
    </div>
  );
}

function ClientAdd({ productId }: { productId: string }) {
  'use client';
  const { add } = useCart();
  const product = products.find((p) => p.id === productId)!;
  return (
    <div className="flex gap-3">
      <button onClick={() => add(product, 1)} className="px-6 py-3 bg-blue-500 rounded-lg">
        Add to cart
      </button>
    </div>
  );
}
