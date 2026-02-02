import BubbleMenu from "@/components/BubbleMenu";
import { getGreeting } from "@/lib/greeting";

export default function App() {
  const greeting = getGreeting();

  return (
    <div>
      <BubbleMenu 
        logo={'cat_logo.svg'} 
        greeting={greeting}
      />
    </div>
  )
}