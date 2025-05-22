"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export function Stats() {
  const fadeIn = useScrollFadeIn(0.1, 0, 0.5, "up");
  
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4" ref={fadeIn.ref} style={fadeIn.style}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}