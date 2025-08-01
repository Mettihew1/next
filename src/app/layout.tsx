import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopProgressBar from "@/components/TopProgressBar";

export const metadata = {
  title: "Dev News App",
  icons: {
    icon: "/favi.ico"
    // icon: "/favicon-react.ico"
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
 <TopProgressBar />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}

