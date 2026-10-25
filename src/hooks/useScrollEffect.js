// src/hooks/useScrollEffect.js
import { useState, useEffect, useRef } from "react";

export const useScrollEffect = (sectionIds) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Last section whose top has passed the nav line wins
      const current = sectionIds.filter((id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 120;
      });
      setActiveSection(current.at(-1) ?? sectionIds[0]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return { scrolled, activeSection };
};

// Reveals an element once when it first enters the viewport
export const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Animates a number from `from` to `to` once the element enters the viewport
export const useCountUp = (from, to, duration = 1400) => {
  const { ref, isVisible } = useReveal();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, from, to, duration]);

  return { ref, value };
};
