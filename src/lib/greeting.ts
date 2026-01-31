import { DayPeriod } from "@/types/dayPeriod";

export function getDayPeriod(date = new Date()): DayPeriod {
  const hour = date.getHours();

  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 14) return "noon";
  if (hour >= 14 && hour < 18) return "afternoon";
  return "evening";
}

export function getGreeting(name?: string) {
  const period = getDayPeriod();
  const who = name ? `, ${name}` : "";

  switch (period) {
    case "morning":
      return `Good morning${who}! Wishing you a fresh and productive day ☀️`;
    case "noon":
      return `Good afternoon${who}! Hope you’re having a great lunch break 🍽️`;
    case "afternoon":
      return `Good afternoon${who}! Keep going, you’re doing great 💪`;
    case "evening":
    default:
      return `Good evening${who}! Time to relax and recharge 🌙`;
  }
}
