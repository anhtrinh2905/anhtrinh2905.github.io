import Link from "next/link";
import { IoIosHeart } from "react-icons/io";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-white/80">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="flex items-center gap-2">
            Made with <IoIosHeart className="text-red-400" aria-hidden="true" /> by{" "}
            <span className="text-white/90 font-semibold">Lan Anh.</span>
          </p>

          <p className="text-sm">
            © {new Date().getFullYear()} ·{" "}
            <Link
              href="https://github.com/anhtrinh2905/anhtrinh2905.github.io"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white transition"
            >
              anhtrinh2905 repo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
