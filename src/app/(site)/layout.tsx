'use client'

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import ".././globals.css";
import Snowfall from "react-snowfall";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Snowfall />
      <Header />
      <PageTransition>{children}</PageTransition>
      <ScrollToTop />
      <Footer />
    </>
  );
}
