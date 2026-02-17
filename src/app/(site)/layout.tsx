'use client'

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import ".././globals.css";
import SnowBg from "@/components/SnowBg";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SnowBg />
      <Header />
      <PageTransition>{children}</PageTransition>
      <ScrollToTop />
      <Footer />
    </>
  );
}
