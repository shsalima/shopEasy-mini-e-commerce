export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#070a12] mt-20 px-6 py-8 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold text-gray-400">AURA<span className="text-indigo-500">STORE</span> PREMIUM RETAIL</p>
          <p className="mt-1">Security SSL Encrypted checkout. Expertly curated technology for professionals.</p>
        </div>
        <div className="flex gap-4 text-gray-400">
          <span className="text-emerald-500 flex items-center gap-1">🛡️ Secured SSL Checkout</span>
          <span>|</span>
          <p>&copy; {new Date().getFullYear()} AuraStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}