"use client"

import { useEffect, useState } from "react"
import { BookOpen, Users, Heart, GraduationCap, Home, Handshake } from "lucide-react"

export default function ProgramsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("programs-grid")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const programs = [
    {
      id: 1,
      icon: BookOpen,
      title: "Program Tahfiz Quran",
      shortDesc: "Hafal Al-Quran dengan metode terbaik",
      fullDesc:
        "Program menghafal Quran dengan bimbingan ustaz bersertifikat. Kami menyediakan program untuk anak-anak, pemula, dan advanced. Setiap peserta mendapat mentor personal dan target yang jelas.",
      color: "from-emerald-500 to-green-600",
      image: "/program-tahfiz-quran.jpg",
      features: ["Mentor Bersertifikat", "Kelas Fleksibel", "Evaluasi Berkala", "Sertifikat Resmi"],
    },
    {
      id: 2,
      icon: Users,
      title: "Komunitas Jamaah",
      shortDesc: "Jaringan ukhuwah yang kuat dan solid",
      fullDesc:
        "Membangun komunitas yang harmonis dengan kegiatan sosial rutin, gathering keluarga, dan program mentoring. Kami percaya ukhuwah Islamiah adalah fondasi masyarakat yang kuat.",
      color: "from-blue-500 to-cyan-600",
      image: "/program-komunitas.jpg",
      features: ["Grup WhatsApp", "Gathering Bulanan", "Kelompok Belajar", "Mutual Support"],
    },
    {
      id: 3,
      icon: Heart,
      title: "Program Sosial & Dakwah",
      shortDesc: "Berbagi berkah dan dakwah ke masyarakat",
      fullDesc:
        "Kami aktif memberikan santunan kepada yang membutuhkan, mengunjungi rumah sakit, dan melakukan dakwah ke berbagai lingkungan. Setiap bulan ada kegiatan sosial yang terstruktur.",
      color: "from-red-500 to-pink-600",
      image: "/program-sosial-dakwah.jpg",
      features: ["Santunan Rutin", "Kunjungan Sakit", "Dakwah Lapangan", "Zakat & Infaq"],
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Sekolah Islam Terpadu",
      shortDesc: "Pendidikan anak dengan nilai-nilai Islam",
      fullDesc:
        "Kami menyelenggarakan program pendidikan anak-anak dengan kurikulum yang mengintegrasikan ilmu umum dan agama Islam. Fasilitas modern dengan pendidik berpengalaman.",
      color: "from-purple-500 to-violet-600",
      image: "/program-sekolah-islam.jpg",
      features: ["Kurikulum Terintegrasi", "Guru Profesional", "Fasilitas Lengkap", "Beasiswa"],
    },
    {
      id: 5,
      icon: Home,
      title: "Jaminan Pernikahan Islami",
      shortDesc: "Memfasilitasi pernikahan sesuai syariat",
      fullDesc:
        "Layanan konsultasi pre-marriage, akad nikah di masjid, dan paket honeymoon halal. Kami membantu mewujudkan pernikahan islami yang berkah dan bermakna.",
      color: "from-pink-500 to-rose-600",
      image: "/program-pernikahan.jpg",
      features: ["Konsultasi Pre-Nikah", "Lokasi Akad", "Dokumentasi", "Paket Lengkap"],
    },
    {
      id: 6,
      icon: Handshake,
      title: "Layanan Konseling Islami",
      shortDesc: "Bimbingan jiwa dari counselor profesional",
      fullDesc:
        "Layanan konseling dengan pendekatan Islam untuk mengatasi masalah keluarga, karir, atau personal issues. Dijaga kerahasiaan dan ditangani oleh konselor berpengalaman.",
      color: "from-yellow-500 to-orange-600",
      image: "/program-konseling.jpg",
      features: ["Konselor Terlatih", "Privat & Rahasia", "Pendekatan Islami", "Hasil Nyata"],
    },
  ]

  return (
    <section id="programs-grid" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            const isExpanded = expandedCard === program.id

            return (
              <div
                key={program.id}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                }}
                onClick={() => setExpandedCard(isExpanded ? null : program.id)}
              >
                <div
                  className={`relative bg-card border border-border rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl ${
                    isExpanded ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-[280px]">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                    </div>

                    {isExpanded ? (
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.fullDesc}</p>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                            Fitur Unggulan
                          </p>
                          <ul className="space-y-1">
                            {program.features.map((feature) => (
                              <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-muted-foreground text-sm mb-4 flex-1">{program.shortDesc}</p>
                        <div className="text-xs text-primary font-semibold group-hover:underline">
                          Klik untuk selengkapnya →
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
