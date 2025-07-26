import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Dev News App",
  icons: {
    icon: "/favi.ico"
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="max-w-2xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
