"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Clock } from "lucide-react"

export default function HeroHome() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const prayerTimes = [
    { name: "Subuh", time: "05:30" },
    { name: "Dzuhur", time: "12:15" },
    { name: "Asar", time: "15:45" },
    { name: "Maghrib", time: "18:30" },
    { name: "Isya", time: "20:00" },
  ]

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-gradient-to-b from-primary/10 to-background overflow-hidden pt-20">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Masjid <span className="text-primary">Al-Hikmah</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Sebuah rumah ibadah yang menyambut semua dengan kehangatan, kasih sayang, dan komitmen untuk mendekatkan
            diri kepada Allah
          </p>
        </div>

        {/* Prayer Times Card */}
        <div
          className={`bg-card backdrop-blur-md border border-border rounded-2xl p-8 shadow-lg mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            Jadwal Salat Hari Ini
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {prayerTimes.map((prayer, index) => (
              <div
                key={prayer.name}
                className={`text-center p-4 rounded-lg bg-muted hover:bg-primary/10 transition-colors transform delay-${index * 100} ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-semibold text-foreground">{prayer.name}</p>
                <p className="text-2xl font-bold text-primary mt-2">{prayer.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/jadwal-kegiatan"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Lihat Jadwal Lengkap
            <ChevronDown className="w-5 h-5 rotate-90" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </div>
  )
}
