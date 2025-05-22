"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export const useScrollFadeIn = (
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  direction = "up"
) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  
  let translateValue = "0";
  switch (direction) {
    case "up":
      translateValue = "translateY(20px)";
      break;
    case "down":
      translateValue = "translateY(-20px)";
      break;
    case "left":
      translateValue = "translateX(20px)";
      break;
    case "right":
      translateValue = "translateX(-20px)";
      break;
    default:
      translateValue = "translateY(20px)";
  }
  
  const style = {
    transform: inView ? "translate(0)" : translateValue,
    opacity: inView ? 1 : 0,
    transition: `transform ${duration}s ease-out ${delay}s, opacity ${duration}s ease-out ${delay}s`,
  };
  
  return { ref, style };
};

export function useTypewriter(
  texts: string[],
  typingSpeed = 150,
  deletingSpeed = 50,
  delayBetween = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const text = texts[loopNum % texts.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        setTypingDelay(typingSpeed);
        
        if (displayText.length === text.length) {
          setTimeout(() => {
            setIsDeleting(true);
            setTypingDelay(deletingSpeed);
          }, delayBetween);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, typingDelay);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, delayBetween]);
  
  return { text: displayText, isTyping: !isDeleting && displayText.length > 0 };
}

export const useBackgroundChange = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    ["hsl(var(--background))", "hsl(var(--secondary))", "hsl(var(--background))", "hsl(var(--secondary))", "hsl(var(--background))"]
  );
  return backgroundColor;
};