'use client'

import BubbleMenu from "@/components/BubbleMenu";
import { Footer } from "@/components/footer/Footer";
import SnowBg from "@/components/SnowBg";
import { getGreeting } from "@/lib/greeting";

export default function App() {
  const greeting = getGreeting();

  return (
    <div className="min-h-screen flex flex-col">
      <SnowBg />
      <main className="flex-1">
        <BubbleMenu logo="cat_logo.svg" greeting={greeting} />
      </main>
      <Footer />
    </div>
  );
}
