import { Header } from "@/components/header/Header";
import PageTransition from "@/components/PageTransition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
