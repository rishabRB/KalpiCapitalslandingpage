"use client";

import { useTypewriter } from "@/lib/animations";
import { HERO_PHRASES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from "@/lib/animations";

export function Hero() {
  const { text, isTyping } = useTypewriter(HERO_PHRASES, 100, 50, 3000);
  const fadeInTop = useScrollFadeIn(0.1, 0, 0.6, "up");
  const fadeInBottom = useScrollFadeIn(0.1, 0.2, 0.6, "up");
  const fadeInCTA = useScrollFadeIn(0.1, 0.4, 0.6, "up");

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10 z-0" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDMwaC02VjQyaDZ2MTh6Ii8+PHBhdGggZD0iTTMwIDM2VjMwSDB2Nmgzem0zMCAwVjMwSDQydjZoMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat animate-[pulse_15s_ease-in-out_infinite]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={fadeInTop.ref} style={fadeInTop.style}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Precision Investing Through <br />
              Quantitative Excellence
            </h1>
          </div>

          <div 
            className="h-16 md:h-12 mb-8 flex items-center justify-center"
            ref={fadeInBottom.ref} 
            style={fadeInBottom.style}
          >
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              <span className="text-primary">{text}</span>
              <span className={`inline-block w-0.5 h-6 ml-1 bg-primary ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
            </h2>
          </div>

          <div ref={fadeInCTA.ref} style={fadeInCTA.style}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Our Solutions
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}