"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { notFound, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

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
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-400 mb-8 transition"
      >
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
              <span className="text-[10px] tracking-wide bg-emerald-950/80 text-emerald-400 border border-emerald-900/60 px-2.5 py-1 rounded flex items-center gap-1.5 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-emerald-400 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                In Stock & Ready
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
                {product.price.toLocaleString()}{" "}
                <span className="text-sm font-bold text-gray-400">DH</span>
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-indigo-400 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.987 8.987 0 0 1-3-6.75M12 21a8.987 8.987 0 0 0 3-6.75m-6 0a8.987 8.987 0 0 1 0-7.5M12 3a8.987 8.987 0 0 1 3 6.75m0 0a8.987 8.987 0 0 1-3 6.75M12 3a8.987 8.987 0 0 0-3 6.75m6 0H9"
                  />
                </svg>
                Product overview & features{" "}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="bg-[#0b0f19]/60 border border-gray-800/80 p-3.5 rounded-xl text-xs text-gray-400 flex items-center gap-2.5 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-indigo-400 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 111.056 1.056L12 12.75l-.25.5A.75.75 0 0111 13h1a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-.75zM12 16.75h.008v.008H12v-.008zM12 3a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>

              <p>
                Ships securely in ruggedized foam armor. Tax of 20% included
                dynamically.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
              })
            }
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-indigo-950/50 flex items-center justify-center gap-2.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            Add Device To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
