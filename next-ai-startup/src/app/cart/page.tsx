"use client";

import React from 'react';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { items, total, update, remove, clear } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {items.length === 0 ? (
        <p className="text-white/70">Your cart is empty. Browse the <a className="underline" href="/shop">shop</a>.</p>
      ) : (
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.product.id} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
              <img src={it.product.images[0]} alt={it.product.title} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-1">
                <div className="font-semibold">{it.product.title}</div>
                <div className="text-sm text-white/60">${it.product.price} each</div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={it.quantity}
                  onChange={(e) => update(it.product.id, Math.max(1, Number(e.target.value) || 1))}
                  className="w-16 p-1 rounded-md text-black"
                />
                <div className="w-24 text-right font-bold">${it.product.price * it.quantity}</div>
                <button onClick={() => remove(it.product.id)} className="text-sm text-red-400">Remove</button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="text-lg font-semibold">Total</div>
            <div className="text-2xl font-bold">${total}</div>
          </div>

          <div className="flex gap-3 justify-end">
            <button onClick={() => clear()} className="px-4 py-2 rounded bg-white/5">Clear</button>
            <button className="px-6 py-3 rounded bg-green-500">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
