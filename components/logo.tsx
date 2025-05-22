import { TrendingUp } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
      <div className="relative bg-primary/10 rounded-full p-2 border border-primary/20">
        <TrendingUp className="h-4 w-4 text-primary" />
      </div>
    </div>
  );
}