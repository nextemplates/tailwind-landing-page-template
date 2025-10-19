import { Logo } from "@/assets/icons/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={cn("bg-zinc-50/80 sticky top-0 backdrop-blur-md  border-zinc-100 z-50", scrolled && "border-b shadow shadow-zinc-100 duration-300")}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-14 flex justify-between items-center">
          <div className="basis-0 grow">
            <Link href="#">
              <Logo className="size-8 hover:scale-110 duration-300" />
            </Link>
          </div>
          <div className="basis-0 grow flex items-center justify-end gap-2">
            <Link
              href="#"
              className="px-4 py-1.5 hover:bg-zinc-100 focus:bg-zinc-100 hover:ring-4 focus:ring-4 ring-zinc-200 text-neutral-900 font-medium rounded-full text-sm duration-300"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="px-4 py-1.5 bg-blue-600 text-neutral-50 font-medium rounded-full text-sm hover:ring-4 focus:ring-4 ring-blue-200 duration-300 hover:bg-blue-600/80 focus:bg-blue-600/80"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
