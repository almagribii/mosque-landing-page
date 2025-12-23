"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden bg-linear-to-b from-background via-background to-muted"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Masjid Al-Hikmah
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8 leading-relaxed">
            Pusat ibadah dan komunitas Muslim yang menghadirkan program rohani berkualitas, jadwal salat yang teratur,
            dan layanan terbaik untuk umat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Jadwal Salat
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Prayer Times Preview */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 transform transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {[
            { name: "Subuh", time: "05:30" },
            { name: "Dzuhur", time: "12:15" },
            { name: "Ashar", time: "15:45" },
            { name: "Maghrib", time: "18:20" },
            { name: "Isya", time: "19:45" },
          ].map((prayer, index) => (
            <div
              key={prayer.name}
              className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow stagger-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm text-muted-foreground mb-1">{prayer.name}</p>
              <p className="text-xl font-bold text-primary">{prayer.time}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex justify-center animate-bounce transform transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronDown className="text-muted-foreground" size={28} />
        </div>
      </div>
    </section>
  )
}
