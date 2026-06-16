import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'AuraStore - Premium Hardware',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between bg-[#0b0f19]">
        <CartProvider>
          <div>
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}