"use client";

import Link from 'next/link';
import React from 'react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { add } = useCart();

  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block">
        <img src={product.images[0]} alt={product.title} className="w-full h-44 object-cover" />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/shop/${product.slug}`} className="text-lg font-semibold mb-2 hover:underline">
          {product.title}
        </Link>
        <p className="text-sm text-white/60 mb-4 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="text-lg font-bold">${product.price}</div>
          <button
            onClick={() => add(product, 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            aria-label={`Add ${product.title} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
