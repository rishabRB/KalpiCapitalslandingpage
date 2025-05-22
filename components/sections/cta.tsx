"use client";

import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from "@/lib/animations";

export function CTA() {
  const fadeIn = useScrollFadeIn(0.1, 0, 0.5, "up");
  
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center"
          ref={fadeIn.ref} 
          style={fadeIn.style}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to optimize your investment strategy?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our quantitative experts to learn how
            our systematic approach can enhance your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}