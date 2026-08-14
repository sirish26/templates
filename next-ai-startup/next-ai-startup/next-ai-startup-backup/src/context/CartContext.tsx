"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '../data/products';

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  add: (_product: Product, _qty?: number) => void;
  remove: (_productId: string) => void;
  update: (_productId: string, _qty: number) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error('useCart must be used within CartProvider');
  return c;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('demo_cart');
      if (raw) setItems(JSON.parse(raw));
    } catch (e) { void e; }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('demo_cart', JSON.stringify(items));
    } catch (e) { void e; }
  }, [items]);

  const add = (product: Product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.product.id === product.id);
      if (found) return prev.map((p) => (p.product.id === product.id ? { ...p, quantity: p.quantity + qty } : p));
      return [...prev, { product, quantity: qty }];
    });
  };

  const remove = (productId: string) => setItems((prev) => prev.filter((p) => p.product.id !== productId));

  const update = (productId: string, qty: number) =>
    setItems((prev) => prev.map((p) => (p.product.id === productId ? { ...p, quantity: qty } : p)));

  const clear = () => setItems([]);

  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0);

  return <CartContext.Provider value={{ items, add, remove, update, clear, total }}>{children}</CartContext.Provider>;
};
