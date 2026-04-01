"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis integration with GSAP ScrollTrigger
    const lenis = new (require("lenis").default)();
    
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.08, // Slightly slower lerp for smoother feel
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Adjusted for better mobile response
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  );
}
