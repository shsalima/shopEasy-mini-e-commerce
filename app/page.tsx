
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center bg-gradient-to-b from-[#111625] to-[#0b0f19] border border-gray-800/60 rounded-3xl py-16 px-4 mb-12 shadow-xl">
        <span className="inline-block text-xs bg-indigo-950 text-indigo-300 border border-indigo-800 px-3 py-1 rounded-full mb-6 font-medium">
          ✨ Introducing the Aura Series 5
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Minimal Hardware.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Exceptional Performance.
          </span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-8 font-light leading-relaxed">
          Experience the next generation of performance and design. Expertly curated technology with high-fidelity engineering, dark aesthetics, and world-class digital tools.
        </p>
        
        <div className="flex justify-center gap-3 text-xs text-gray-400">
          <span className="bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-800">📞 Smartphones</span>
          <span className="bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-800">💻 Computing</span>
          <span className="bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-800">🔊 Premium Audio</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="bg-[#121826]/40 border border-gray-800/80 p-5 rounded-2xl flex items-center gap-4">
          <div className="text-2xl bg-indigo-950/50 p-3 rounded-xl text-indigo-400">🚚</div>
          <div>
            <h4 className="font-semibold text-sm text-white">Express Shipping</h4>
            <p className="text-xs text-gray-400 mt-0.5">Free overnight delivery inside Morocco on all premium hardware.</p>
          </div>
        </div>
        <div className="bg-[#121826]/40 border border-gray-800/80 p-5 rounded-2xl flex items-center gap-4">
          <div className="text-2xl bg-indigo-950/50 p-3 rounded-xl text-indigo-400">🛡️</div>
          <div>
            <h4 className="font-semibold text-sm text-white">2-Year Full Warranty</h4>
            <p className="text-xs text-gray-400 mt-0.5">Official corporate warranty certificates with swift support access.</p>
          </div>
        </div>
        <div className="bg-[#121826]/40 border border-gray-800/80 p-5 rounded-2xl flex items-center gap-4">
          <div className="text-2xl bg-indigo-950/50 p-3 rounded-xl text-indigo-400">🔄</div>
          <div>
            <h4 className="font-semibold text-sm text-white">Easy Returns</h4>
            <p className="text-xs text-gray-400 mt-0.5">Hassle-free 30-day replacement window, no questions asked.</p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Premium Electronics</h2>
          <p className="text-xs text-gray-400 mt-1">Scroll through each handpicked authentic system to view technical highlights.</p>
        </div>
        <span className="text-xs bg-indigo-950 text-indigo-400 px-3 py-1.5 rounded-lg border border-indigo-900 font-medium">
          Showing 3 Exclusive Systems
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>

        ))}
      </div>
    </div>
  );
}
