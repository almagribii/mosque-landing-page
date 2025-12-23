"use client"

import { useEffect, useState } from "react"
import { Calendar, ArrowRight } from "lucide-react"

export default function ScheduleHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full min-h-[500px] bg-gradient-to-br from-primary/20 via-background to-accent/10 pt-32 pb-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-semibold">Jadwal Kegiatan</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Rencana Kegiatan <span className="text-primary">Mingguan & Bulanan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Ikuti berbagai acara religius, pendidikan, dan sosial yang kami selenggarakan setiap minggu untuk
              memperkuat silaturahmi dan pemahaman Islam
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#activities"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:translate-x-1"
              >
                Lihat Jadwal Lengkap
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 relative h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-10"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-primary mb-2">48+</div>
                  <p className="text-sm text-muted-foreground">Acara per Tahun</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-accent mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Program Utama</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all col-span-2">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Peserta Setiap Bulan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
