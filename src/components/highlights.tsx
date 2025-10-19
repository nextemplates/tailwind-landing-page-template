import Image from "next/image";

export default function Highlights() {
  const cards = [
    {
      title: "Tailored for Modern LLMs",
      description:
        "Optimized for advanced models to deliver fast and accurate responses.",
      img: "/highlight1.png",
    },
    {
      title: "Build with No Code",
      description:
        "Design complex conversation flows visually. No engineers required.",
      img: "/highlight2.png",
    },
    {
      title: "Enterprise-grade Security",
      description:
        "Your data stays yours. SOC 2 ready and fully encrypted end-to-end.",
      img: "/highlight3.png",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center mx-auto">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 font-medium text-sm border bg-purple-100 border-purple-200 text-purple-500">
            Highlights
          </div>

          <h2 className="font-medium text-4xl text-neutral-900 text-pretty tracking-tight lg:text-5xl">
            The complete platform for AI support agents
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 text-pretty ">
            Chatbase is designed for building AI support agents that solve your
            customers hardest problems while improving business outcomes.
          </p>
        </div>

        <div className="grid gap-6 pt-8 lg:grid-cols-3 md:grid-cols-2">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all hover:border-zinc-300"
            >
              <div className="overflow-hidden">
                <Image
                  alt={card?.title}
                  loading="lazy"
                  width={784}
                  height={800}
                  src={card?.img}
                  style={{ color: "transparent" }}
                  className="group-hover:scale-110 duration-300"
                />
              </div>
              <div className="space-y-2 px-6 pb-6">
                <h3 className="font-semibold text-xl text-neutral-900">
                  {card?.title}
                </h3>
                <p className="text-base text-neutral-600">
                  {card?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
