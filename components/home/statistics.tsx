"use client";

import { useEffect, useState } from "react";

export default function Statistics() {
  const [counts, setCounts] = useState({
    jamaah: 0,
    activities: 0,
    volunteers: 0,
    years: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    const element = document.getElementById("statistics");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetCounts = {
      jamaah: 5200,
      activities: 48,
      volunteers: 150,
      years: 15,
    };
    const duration = 2000;
    const steps = 60;
    const increment = {
      jamaah: targetCounts.jamaah / steps,
      activities: targetCounts.activities / steps,
      volunteers: targetCounts.volunteers / steps,
      years: targetCounts.years / steps,
    };

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCounts({
        jamaah: Math.floor(increment.jamaah * step),
        activities: Math.floor(increment.activities * step),
        volunteers: Math.floor(increment.volunteers * step),
        years: Math.floor(increment.years * step),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    { label: "Jamaah Terdaftar", value: counts.jamaah, suffix: "+" },
    { label: "Kegiatan per Tahun", value: counts.activities, suffix: "" },
    { label: "Relawan Aktif", value: counts.volunteers, suffix: "+" },
    { label: "Tahun Melayani", value: counts.years, suffix: "" },
  ];

  return (
    <section
      id="statistics"
      className="py-20 bg-linear-to-r from-primary/10 via-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Pencapaian Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 sm:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 transform ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
