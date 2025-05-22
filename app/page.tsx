'use client'

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{
          scaleX: useSpring(useScroll().scrollYProgress)
        }}
      />
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}