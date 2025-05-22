"use client";

import { useRef } from "react";
import { useScrollFadeIn } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

export function Testimonials() {
  const titleFade = useScrollFadeIn(0.1, 0, 0.5, "up");
  const carouselFade = useScrollFadeIn(0.1, 0.2, 0.5, "up");
  
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={titleFade.ref} style={titleFade.style}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by institutional investors and funds around the world
          </p>
        </div>
        
        <div ref={carouselFade.ref} style={carouselFade.style}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 p-4">
                  <Card className="border bg-card/50 backdrop-blur-sm">
                    <CardContent className="pt-6 px-6">
                      <QuoteIcon className="h-10 w-10 text-primary/20 mb-4" />
                      <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="border-t border-border p-6">
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}