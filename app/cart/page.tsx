"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const getProductImage = (id: string) => {
    return products.find((p) => p.id === id)?.image || "";
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Configure Your Hardware order
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Review quantities, calculate technical overheads, and finalize
            checkout operations.
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
          <p className="text-gray-400 text-sm mb-4">
            Your dynamic cart is currently empty.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition"
          >
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
                  <h3 className="font-bold text-white text-base mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Unit price:{" "}
                    <span className="text-gray-300 font-medium">
                      {item.price.toLocaleString()} DH
                    </span>
                  </p>
                  <p className="text-xs text-indigo-400 mt-1 font-semibold">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-400 p-2.5 border border-gray-800 hover:border-red-900/50 rounded-xl bg-[#0b0f19] transition flex items-center justify-center"
                title="Remove item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}

          <div className="bg-[#121826]/40 border border-gray-800/80 p-4 rounded-xl text-xs text-gray-400 flex items-start gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>

            <p className="leading-relaxed">
              Your dynamic cart items are persisted inside your local sandbox.
              You can return to the storefront to browse and add more systems
              anytime.
            </p>
          </div>

          <div className="bg-[#111625] border border-gray-800 p-6 rounded-2xl flex justify-between items-center mt-6">
            <span className="text-sm font-semibold text-gray-400">
              Total Order Amount:
            </span>
            <span className="text-2xl font-black text-indigo-400">
              {totalPrice.toLocaleString()} DH
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
