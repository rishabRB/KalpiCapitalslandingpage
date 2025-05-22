"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import { 
  BarChart, 
  Shield, 
  PieChart, 
  Search 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  BarChart: BarChart,
  Shield: Shield,
  PieChart: PieChart,
  Search: Search
};

export function Features() {
  const titleFade = useScrollFadeIn(0.1, 0, 0.5, "up");
  
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10 dark:from-background dark:via-background dark:to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" ref={titleFade.ref} style={titleFade.style}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Quantitative Approach</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data-driven investment strategies backed by robust quantitative models
            and systematic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((service, index) => {
            const fadeIn = useScrollFadeIn(0.1, 0.1 * (index + 1), 0.5, "up");
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={service.id}
                className="relative group"
                ref={fadeIn.ref} 
                style={fadeIn.style}
              >
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <Card className="relative bg-card border border-border h-full transform transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 p-2 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}