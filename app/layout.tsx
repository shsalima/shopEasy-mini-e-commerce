import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "AuraStore - Minimal Hardware",
  description: "Premium Electronics Storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body className="flex flex-col min-h-screen justify-between">
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
