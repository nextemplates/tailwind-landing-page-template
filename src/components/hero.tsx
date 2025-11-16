import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <section className="py-12 sm:py-20">
        <div className="max-w-sm md:max-w-2xl mx-auto flex flex-col justify-center text-center">
          <div className="text-sm px-4 py-1 text-blue-500 border-blue-300 bg-blue-600/5 shadow shadow-blue-100 border rounded-full w-fit mx-auto flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
            </svg>
            New: Our AI integraion just landed
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-medium text-pretty text-neutral-900">
            AI agents that talk like your best team member
          </h1>
          <p className="mt-6 text-base sm:text-xl text-pretty text-neutral-600">
            Build, train, and deploy custom AI support bots that actually understand your customers - without writing a single line of code.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="#"
              className="px-5 py-2 text-neutral-50 font-semibold rounded-full hover:ring-4 focus:ring-4 ring-blue-200 bg-blue-600 hover:bg-blue-600/80 focus:bg-blue-600/80 duration-300"
            >
              Start for free
            </Link>
            <Link
              href="#"
              className="px-5 py-2 text-blue-600 font-semibold rounded-full duration-300 hover:bg-blue-50 focus:bg-blue-50 hover:ring-4 focus:ring-4 ring-blue-100"
            >
              See it in action
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-12 sm:mt-20">
        <div className="group relative px-4 sm:px-20 pt-4 sm:pt-20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 transition-opacity duration-300 opacity-0 sm:opacity-100 sm:group-hover:opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-300 transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"></div>
          <Image
            priority
            src="/hero.png"
            width={2967}
            height={1643}
            alt="Hero"
            className="relative rounded-t-lg sm:group-hover:scale-110 duration-300"
          />
          <div className="hidden sm:block absolute -bottom-16 group-hover:bottom-5 left-1/2 duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 hover:ring-4 ring-red-400/50 px-5 py-2.5 bg-red-700 hover:bg-red-700/80 text-white rounded-full duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Watch video</span>
            </button>
          </div>
        </div>
        <div className="block sm:hidden mx-auto mt-6 w-fit">
        <button
              onClick={() => setOpen(true)}
              className="px-5 py-2.5 flex items-center gap-2 hover:ring-4 focus:ring-4 ring-red-400/50 bg-red-700 hover:bg-red-700/80 focus:bg-red-700/80 text-white rounded-full duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Watch video</span>
            </button>
            </div>
        </div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false} className="p-4 border-none rounded-2xl aspect-video !max-w-3xl bg-transparent shadow-none">
          <DialogHeader hidden>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>

          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
}
