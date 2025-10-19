"use client";

import Comapnies from "@/components/companies";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Comapnies />
      <Highlights />
      <CTA />
      <Footer />
    </>
  );
}
