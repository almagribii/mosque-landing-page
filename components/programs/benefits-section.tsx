"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const element = document.getElementById("benefits");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Akses ke semua program dan acara masjid sepanjang tahun",
    "Bimbingan spiritual dari ustaz dan ulama berpengalaman",
    "Jaringan ukhuwah dengan ribuan jamaah Muslim",
    "Fasilitas ibadah modern dengan standar kebersihan internasional",
    "Program keluarga dan aktivitas sosial yang teratur",
    "Dukungan dalam setiap fase kehidupan Anda",
    "Pembelajaran agama yang disesuaikan dengan usia dan kemampuan",
    "Akses ke perpustakaan Islam dan materi pembelajaran digital",
  ];

  return (
    <section
      id="benefits"
      className="py-20 bg-linear-to-b from-primary/5 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Manfaat Bergabung Dengan Kami
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Bergabunglah dengan komunitas Masjid Al-Hikmah dan rasakan
              perubahan positif dalam kehidupan spiritual dan sosial Anda. Kami
              berkomitmen untuk memberikan yang terbaik.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={`flex items-start gap-3 transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div
            className={`relative h-64 sm:h-80 lg:h-96 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-2xl opacity-10"></div>
            <div className="relative w-full h-full flex flex-col justify-center items-center">
              <img
                src="/islamic-community-gathering.jpg"
                alt="Komunitas"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
