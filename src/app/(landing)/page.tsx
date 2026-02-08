import BubbleMenu from "@/components/BubbleMenu";
import { Footer } from "@/components/footer/Footer";
import { getGreeting } from "@/lib/greeting";

export default function App() {
  const greeting = getGreeting();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <BubbleMenu logo="cat_logo.svg" greeting={greeting} />
      </main>
      <Footer />
    </div>
  );
}
