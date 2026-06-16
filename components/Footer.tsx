export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#070a12] mt-20 px-6 py-8 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold text-gray-400">
            AURA<span className="text-indigo-500">STORE</span> PREMIUM RETAIL
          </p>
          <p className="mt-1">
            Security SSL Encrypted checkout. Expertly curated technology for
            professionals.
          </p>
        </div>
        <div className="flex gap-4 text-gray-400">
          <span className="text-emerald-500 flex items-center gap-1.5 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-emerald-500 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            Secured SSL Checkout
          </span>{" "}
          <span>|</span>
          <p>
            &copy; {new Date().getFullYear()} AuraStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
