import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center bg-gradient-to-b from-[#111625] to-[#0b0f19] border border-gray-800/60 rounded-3xl py-16 px-4 mb-12 shadow-xl">
        <span className="inline-block text-[11px] bg-indigo-950 text-indigo-300 border border-indigo-900/60 px-3 py-1 rounded-full mb-6 font-medium flex items-center gap-1.5 w-fit mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3.5 h-3.5 text-indigo-400 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.096.813ZM19.071 4.929l-.707 1.414-.707-1.414.707-.707.707.707ZM10.243 4.243l-.354.707-.353-.707.353-.354.354.354Z"
            />
          </svg>
          Introducing the Aura Series 5
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Minimal Hardware.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Exceptional Performance.
          </span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-8 font-light leading-relaxed">
          Experience the next generation of performance and design. Expertly
          curated technology with high-fidelity engineering, dark aesthetics,
          and world-class digital tools.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
          <span className="bg-[#121826]/90 px-4 py-2 rounded-xl border border-gray-800/80 flex items-center gap-1.5 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 text-indigo-400 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            Smartphones
          </span>

          <span className="bg-[#121826]/90 px-4 py-2 rounded-xl border border-gray-800/80 flex items-center gap-1.5 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 text-indigo-400 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            Computing
          </span>

          <span className="bg-[#121826]/90 px-4 py-2 rounded-xl border border-gray-800/80 flex items-center gap-1.5 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 text-indigo-400 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            Premium Audio
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="bg-[#121826]/40 border border-gray-800/80 p-5 rounded-2xl flex items-center gap-4">
          <div className="bg-indigo-950/50 p-3 rounded-xl text-indigo-400 shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.75a1.125 1.125 0 0 1-1.125-1.125V15h1.5m1.5 3.75a1.5 1.5 0 0 0 3 0m-3 0h6m3 0a1.5 1.5 0 0 0-3 0m3 0h1.5a1.125 1.125 0 0 0 1.125-1.125v-9.25m-12 6.5h12m-12 0H3.75A1.125 1.125 0 0 1 2.625 12V5.125C2.625 4.505 3.13 4 3.75 4h10.5a.75.75 0 0 1 .75.75v6.75m0 0h5.25a.75.75 0 0 1 .75.75v3.5m-5.25-5H15"
              />
            </svg>
          </div>{" "}
          <div>
            <h4 className="font-semibold text-sm text-white">
              Express Shipping
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Free overnight delivery inside Morocco on all premium hardware.
            </p>
          </div>
        </div>
        <div className="bg-[#121826]/40 border border-gray-800/80 p-5 rounded-2xl flex items-center gap-4">
          <div className="bg-indigo-950/50 p-3 rounded-xl text-indigo-400 shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z"
              />
            </svg>
          </div>{" "}
          <div>
            <h4 className="font-semibold text-sm text-white">
              2-Year Full Warranty
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Official corporate warranty certificates with swift support
              access.
            </p>
          </div>
        </div>
        <div className="bg-[#121826]/40 border border-gray-800/80 p-5 rounded-2xl flex items-center gap-4">
          <div className="bg-indigo-950/50 p-3 rounded-xl text-indigo-400 shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>{" "}
          <div>
            <h4 className="font-semibold text-sm text-white">Easy Returns</h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Hassle-free 30-day replacement window, no questions asked.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Premium Electronics
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Scroll through each handpicked authentic system to view technical
            highlights.
          </p>
        </div>
        <span className="text-xs bg-indigo-950 text-indigo-400 px-3 py-1.5 rounded-lg border border-indigo-900 font-medium">
          Showing 3 Exclusive Systems
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
