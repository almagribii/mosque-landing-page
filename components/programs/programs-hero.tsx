"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export default function ProgramsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full min-h-[500px] bg-gradient-to-br from-accent/20 via-background to-primary/10 pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <span className="text-accent font-semibold">Program & Layanan</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Layanan Terpadu Untuk <span className="text-accent">Semua Kebutuhan Spiritual</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Kami menyediakan berbagai program dan layanan komprehensif untuk mendukung perjalanan spiritual Anda dan
            keluarga dengan fasilitas modern dan tenaga profesional
          </p>
        </div>
      </div>
    </div>
  )
}
