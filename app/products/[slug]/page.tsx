'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { notFound, useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-400 mb-8 transition">
        <span>←</span> Back to Catalog
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#111625] border border-gray-800/80 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        <div className="relative w-full h-[400px] rounded-2xl bg-[#0b0f19] border border-gray-800/40 flex items-center justify-center p-8">
          <Image 
            src={product.image} 
            alt={product.name}
            width={350}
            height={350}
            className="object-contain max-h-full"
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-wider font-bold bg-indigo-600 text-white px-2.5 py-1 rounded">
                {product.category}
              </span>
              <span className="text-[10px] tracking-wide bg-emerald-950/80 text-emerald-400 border border-emerald-900/60 px-2.5 py-1 rounded flex items-center gap-1 font-medium">
                ✨ In Stock & Ready
              </span>
            </div>
            
            <h1 className="text-4xl font-black text-white tracking-tight mb-6">
              {product.name}
            </h1>
            
            <div className="bg-[#0b0f19] border border-gray-800 p-4 rounded-xl inline-block mb-6 min-w-[200px]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 block mb-1">
                Direct Price
              </span>
              <span className="text-2xl font-black text-white">
                {product.price.toLocaleString()} <span className="text-sm font-bold text-gray-400">DH</span>
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <span className="text-indigo-400">🌐</span> Product overview & features
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="bg-[#0b0f19]/60 border border-gray-800/80 p-3.5 rounded-xl text-xs text-gray-400 flex items-center gap-2 mb-6">
              <span className="text-indigo-400">ℹ️</span>
              <p>Ships securely in ruggedized foam armor. Tax of 20% included dynamically.</p>
            </div>
          </div>

          <button 
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price })}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-indigo-950/50 flex items-center justify-center gap-2"
          >
            📥 Add Device To Cart
          </button>
        </div>

      </div>
    </div>
  );
}