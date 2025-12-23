"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Users, Book, Heart, Music, GraduationCap, HandHelping } from "lucide-react"

interface Program {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Programs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const programs: Program[] = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Pengajian Rutin",
      description: "Program pengajian setiap hari dengan topik-topik keislaman yang relevan untuk semua kalangan",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Kelas Anak & Remaja",
      description:
        "Pendidikan Islam untuk anak-anak dan remaja dengan metode pembelajaran yang interaktif dan menyenangkan",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kegiatan Sosial",
      description: "Program sosial kemasyarakatan untuk membantu yang membutuhkan dan memperkuat ukhuwah Islamiyah",
    },
    {
      icon: <HandHelping className="w-8 h-8" />,
      title: "Program Zakat",
      description: "Layanan pengelolaan zakat, infaq, dan shadaqah untuk membantu mereka yang membutuhkan",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Acara Keluarga",
      description: "Perayaan hari besar Islam dan acara kebersamaan untuk mempererat silaturahmi umat",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Konsultasi Spiritual",
      description: "Layanan konsultasi masalah keagamaan dan kehidupan dengan tokoh agama berpengalaman",
    },
  ]

  return (
    <section ref={sectionRef} id="programs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Program & Layanan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai program dan layanan untuk mendukung spiritual dan komunitas Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 transform cursor-pointer group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-4 inline-block p-3 bg-linear-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <div className="text-primary group-hover:text-accent transition-colors">{program.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
