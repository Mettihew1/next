import "./globals.css";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: "Dev News App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-yellow p-4 flex gap-6">
          <Link href="/" className="text-white-600 font-bold hover:underline">Home</Link>
          <Link href="/about" className="text-yellow-600 font-bold hover:underline">About</Link>
        </header>
                <Header />
        <main className="max-w-2xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
