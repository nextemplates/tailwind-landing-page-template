import { Dropbox } from "@/assets/icons/dropbox";
import { Firebase } from "@/assets/icons/firebase";
import { GoDaddy } from "@/assets/icons/godaddy";
import { Google } from "@/assets/icons/google";
import { Primevideo } from "@/assets/icons/primevideo";

export default function Comapnies() {
  return (
    <section className="py-12 sm:py-20 bg-zinc-100">
      <div className="text-center">
        <p className="font-semibold text-lg text-neutral-600">
          Trusted by teams at
        </p>
        <div className="mt-8 flex items-center justify-center gap-12 flex-col md:flex-row">
          <div className="flex items-center flex-row gap-8 md:gap-12">
            <Primevideo className="h-10" />

            <Dropbox className="h-10" />
          </div>

          <div className="flex items-center flex-row gap-8 md:gap-12">
            <Google className="h-10" />

            <Firebase className="h-10" />
          </div>

          <div className="flex items-center flex-row gap-8 md:gap-10">
            <GoDaddy className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
