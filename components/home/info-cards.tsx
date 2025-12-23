"use client"

import { useEffect, useState } from "react"
import { Users, Heart, BookOpen, Building2 } from "lucide-react"

export default function InfoCards() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("info-cards")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Users,
      title: "Komunitas Aktif",
      description: "Bergabunglah dengan ribuan jamaah yang saling mendukung dan belajar bersama dalam iman",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Pelayanan Sosial",
      description: "Kami berkomitmen untuk membantu masyarakat melalui berbagai program sosial dan kemanusiaan",
      color: "from-red-500 to-red-600",
    },
    {
      icon: BookOpen,
      title: "Pendidikan Islami",
      description: "Program pembelajaran Quran, hadis, dan ilmu fiqih untuk semua kalangan usia",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Building2,
      title: "Fasilitas Lengkap",
      description: "Masjid modern dengan berbagai fasilitas untuk kenyamanan beribadah seluruh keluarga",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section id="info-cards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Mengapa Memilih Kami</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Kami menawarkan pengalaman spiritual yang mendalam dengan komunitas yang ramah dan inklusif
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
