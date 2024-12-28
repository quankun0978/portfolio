import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"

const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Quankun0978",
  description: "Portfolio with quankun0978",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar"> 
      <body
        className={font.className}
      >
        <div className="hidden md:block">
          <AnimatedCursor innerSize={8} outerSize={35} innerScale={2} outerScale={2} outerAlpha={0} innerStyle={{
            border: "3px solid white"
          }} outerStyle={{
            border: "3px solid white"
          }} />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
