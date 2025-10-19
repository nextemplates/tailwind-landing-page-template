import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative group min-h-96 rounded-2xl flex flex-col sm:flex-row items-center p-6 sm:p-10 bg-gradient-to-r from-zinc-100 to-zinc-200 overflow-hidden">
          <div className="flex flex-col items-center sm:items-start gap-6 max-w-md text-center sm:text-start">
            <h1 className="text-3xl font-semibold text-pretty text-neutral-900">
              Ready to build your first AI agent?
            </h1>
            <p className="text-base text-pretty text-neutral-600">
              Build, train, and deploy custom AI support bots that actually understand your customers - without writing a single line of code.
            </p>
            <Link
              href="#"
              className="px-5 py-2 text-neutral-50 font-semibold rounded-full hover:ring-4 focus:ring-4 ring-blue-200 bg-blue-600 hover:bg-blue-600/80 focus:bg-blue-600/80 duration-300"
            >
              Start for free
            </Link>
          </div>
          <div className="mt-6 sm:mt-0 relative sm:absolute sm:-right-28 sm:-bottom-5 sm:h-80 aspect-video sm:rotate-2 p-2 rounded-2xl sm:group-hover:scale-110 duration-300 sm:overflow-hidden">
            <div className="hidden sm:block absolute inset-0 bg-zinc-200 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="hidden sm:block absolute inset-0 bg-zinc-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <Image
              width={2967}
              height={1643}
              src="/hero.png"
              alt="Call to action"
              className="relative rounded-lg border-4 sm:border-none border-zinc-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
