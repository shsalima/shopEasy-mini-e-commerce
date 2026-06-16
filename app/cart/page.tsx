'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const getProductImage = (id: string) => {
    return products.find(p => p.id === id)?.image || '';
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      
      <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Configure Your Hardware order
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Review quantities, calculate technical overheads, and finalize checkout operations.
          </p>
        </div>
        
        {cart.length > 0 && (
          <button 
            onClick={clearCart}
            className="text-xs font-semibold text-red-400 border border-red-900/60 hover:bg-red-950/30 px-4 py-2 rounded-xl transition"
          >
            Clear All Items
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="bg-[#121826] border border-gray-800 rounded-2xl p-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Your dynamic cart is currently empty.</p>
          <Link href="/" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition">
            Browse Storefront
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#111625] border border-gray-800/80 rounded-2xl p-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-[#0b0f19] border border-gray-800 rounded-xl flex items-center justify-center p-2 relative shrink-0">
                  <Image 
                    src={getProductImage(item.id)} 
                    alt={item.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-bold bg-indigo-950 text-indigo-400 px-1.5 py-0.5 rounded">
                    Verified
                  </span>
                  <h3 className="font-bold text-white text-base mt-1">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Unit price: <span className="text-gray-300 font-medium">{item.price.toLocaleString()} DH</span>
                  </p>
                  <p className="text-xs text-indigo-400 mt-1 font-semibold">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 hover:text-red-400 p-2 border border-gray-800 hover:border-red-900/40 rounded-xl bg-[#0b0f19] transition"
                title="Remove item"
              >
                🗑️
              </button>
            </div>
          ))}

          <div className="bg-[#121826]/40 border border-gray-800/80 p-4 rounded-xl text-xs text-gray-400 flex items-center gap-2">
            <span className="text-indigo-400">❓</span>
            <p>Your dynamic cart items are persisted inside your local sandbox. You can return to the storefront to browse and add more systems anytime.</p>
          </div>

          <div className="bg-[#111625] border border-gray-800 p-6 rounded-2xl flex justify-between items-center mt-6">
            <span className="text-sm font-semibold text-gray-400">Total Order Amount:</span>
            <span className="text-2xl font-black text-indigo-400">
              {totalPrice.toLocaleString()} DH
            </span>
          </div>

        </div>
      )}
    </div>
  );
}