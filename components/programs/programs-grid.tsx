"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  Users,
  Heart,
  GraduationCap,
  Home,
  Handshake,
} from "lucide-react";

export default function ProgramsGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const element = document.getElementById("programs-grid");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      id: 1,
      icon: BookOpen,
      title: "Program Tahfiz Quran",
      shortDesc:
        "Program menghafal Al-Quran dengan metode terbaik dan bimbingan ustaz bersertifikat. Cocok untuk anak-anak, remaja, dan dewasa dengan jadwal fleksibel.",
      fullDesc:
        "Program menghafal Quran dengan bimbingan ustaz bersertifikat. Kami menyediakan program untuk anak-anak, pemula, dan advanced. Setiap peserta mendapat mentor personal dan target yang jelas. Metode pembelajaran disesuaikan dengan kemampuan individu untuk hasil maksimal.",
      color: "from-emerald-500 to-green-600",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop&q=80",
      features: [
        "Mentor Bersertifikat",
        "Kelas Fleksibel",
        "Evaluasi Berkala",
        "Sertifikat Resmi",
      ],
    },
    {
      id: 2,
      icon: Users,
      title: "Komunitas Jamaah",
      shortDesc:
        "Bergabunglah dengan jaringan ukhuwah yang kuat dan solid. Komunitas aktif dengan berbagai kegiatan sosial, gathering keluarga, dan program mentoring untuk saling mendukung.",
      fullDesc:
        "Membangun komunitas yang harmonis dengan kegiatan sosial rutin, gathering keluarga, dan program mentoring. Kami percaya ukhuwah Islamiah adalah fondasi masyarakat yang kuat. Dengan ribuan anggota aktif, kami menciptakan lingkungan yang mendukung pertumbuhan spiritual bersama.",
      color: "from-blue-500 to-cyan-600",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop&q=80",
      features: [
        "Grup WhatsApp",
        "Gathering Bulanan",
        "Kelompok Belajar",
        "Mutual Support",
      ],
    },
    {
      id: 3,
      icon: Heart,
      title: "Program Sosial & Dakwah",
      shortDesc:
        "Berbagi berkah dan dakwah ke masyarakat dengan memberikan santunan rutin, mengunjungi yang sakit, dan melakukan dakwah ke berbagai lingkungan sekitar.",
      fullDesc:
        "Kami aktif memberikan santunan kepada yang membutuhkan, mengunjungi rumah sakit, dan melakukan dakwah ke berbagai lingkungan. Setiap bulan ada kegiatan sosial yang terstruktur dengan melibatkan seluruh jamaah untuk berbagi kebaikan.",
      color: "from-red-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop&q=80",
      features: [
        "Santunan Rutin",
        "Kunjungan Sakit",
        "Dakwah Lapangan",
        "Zakat & Infaq",
      ],
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Sekolah Islam Terpadu",
      shortDesc:
        "Pendidikan berkualitas untuk anak dengan memadukan ilmu umum dan nilai-nilai Islam. Kurikulum terintegrasi dengan fasilitas modern dan pendidik profesional berpengalaman.",
      fullDesc:
        "Kami menyelenggarakan program pendidikan anak-anak dengan kurikulum yang mengintegrasikan ilmu umum dan agama Islam. Fasilitas modern dengan pendidik berpengalaman. Program beasiswa tersedia untuk siswa berprestasi dan kurang mampu.",
      color: "from-purple-500 to-violet-600",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
      features: [
        "Kurikulum Terintegrasi",
        "Guru Profesional",
        "Fasilitas Lengkap",
        "Beasiswa",
      ],
    },
    {
      id: 5,
      icon: Home,
      title: "Jaminan Pernikahan Islami",
      shortDesc:
        "Layanan lengkap untuk memfasilitasi pernikahan sesuai syariat Islam. Mulai dari konsultasi pre-marriage, akad nikah di masjid, hingga dokumentasi profesional.",
      fullDesc:
        "Layanan konsultasi pre-marriage, akad nikah di masjid, dan paket honeymoon halal. Kami membantu mewujudkan pernikahan islami yang berkah dan bermakna. Tim berpengalaman siap mendampingi Anda dari awal hingga hari bahagia.",
      color: "from-pink-500 to-rose-600",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80",
      features: [
        "Konsultasi Pre-Nikah",
        "Lokasi Akad",
        "Dokumentasi",
        "Paket Lengkap",
      ],
    },
    {
      id: 6,
      icon: Handshake,
      title: "Layanan Konseling Islami",
      shortDesc:
        "Bimbingan jiwa dengan pendekatan Islam untuk masalah keluarga, karir, dan kehidupan personal. Ditangani konselor profesional dengan menjaga kerahasiaan penuh.",
      fullDesc:
        "Layanan konseling dengan pendekatan Islam untuk mengatasi masalah keluarga, karir, atau personal issues. Dijaga kerahasiaan dan ditangani oleh konselor berpengalaman. Sesi privat dengan solusi praktis berdasarkan nilai-nilai Islam.",
      color: "from-yellow-500 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80",
      features: [
        "Konselor Terlatih",
        "Privat & Rahasia",
        "Pendekatan Islami",
        "Hasil Nyata",
      ],
    },
  ];

  return (
    <section id="programs-grid" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isExpanded = expandedCard === program.id;

            return (
              <div
                key={program.id}
                className={`group cursor-pointer transform transition-all duration-500  ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
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
                  <div className="relative h-40 sm:h-48 bg-linear-to-br from-muted to-muted/50 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col min-h-320px">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br ${program.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {program.title}
                      </h3>
                    </div>

                    {isExpanded ? (
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                          {program.fullDesc}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                            Fitur Unggulan
                          </p>
                          <ul className="space-y-1">
                            {program.features.map((feature) => (
                              <li
                                key={feature}
                                className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col">
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                          {program.shortDesc}
                        </p>
                        <div className="space-y-2 mb-4">
                          <ul className="space-y-1.5">
                            {program.features.slice(0, 3).map((feature) => (
                              <li
                                key={feature}
                                className="text-xs text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1 h-1 rounded-full bg-primary"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-xs text-primary font-semibold group-hover:underline mt-auto">
                          Klik untuk selengkapnya →
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
