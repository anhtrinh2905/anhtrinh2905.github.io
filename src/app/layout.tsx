import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#4C6FAF] to-[#1E2B57]">
        {children}
      </body>
    </html>
  );
}
