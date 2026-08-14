import { products } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { CartProvider } from '../../context/CartContext';

export default function ShopPage() {
  return (
    <CartProvider>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Shop</h1>
        <p className="text-white/70 mb-8">Preview the demo template products included with this boilerplate.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
}
