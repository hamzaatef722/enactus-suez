"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - start) / 1100);
          setN(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  const text = n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const outside = /[\u0600-\u06FF]/.test(suffix);

  return (
    <b ref={ref} className={className}>
      <bdi dir="ltr">
        {prefix}
        {text}
        {outside ? "" : suffix}
      </bdi>
      {outside ? suffix : ""}
    </b>
  );
}
