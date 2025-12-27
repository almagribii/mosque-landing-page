"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";

export default function ScheduleGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const element = document.getElementById("schedule-grid");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      id: 1,
      title: "Pengajian Subuh Bersama",
      day: "Senin - Jum'at",
      time: "05:30 - 06:30",
      location: "Ruang Utama Masjid",
      participants: "150-200 orang",
      description:
        "Pengajian rutin sebelum salat subuh dengan ustaz berpengalaman",
      color: "from-blue-500 to-blue-600",
      image: "/islamic-morning-study-circle.jpg",
    },
    {
      id: 2,
      title: "Kelas Quran Tahfiz",
      day: "Sabtu & Minggu",
      time: "14:00 - 16:00",
      location: "Ruang Belajar 1",
      participants: "50-80 orang",
      description:
        "Program menghafal Quran untuk anak-anak dan dewasa dengan metode modern",
      color: "from-green-500 to-green-600",
      image: "/quran-memorization-class.jpg",
    },
    {
      id: 3,
      title: "Fiqih Praktis Mingguan",
      day: "Rabu",
      time: "19:30 - 21:00",
      location: "Aula Masjid",
      participants: "200-300 orang",
      description:
        "Pembahasan masalah fiqih kontemporer yang relevan dengan kehidupan sehari-hari",
      color: "from-purple-500 to-purple-600",
      image: "/islamic-jurisprudence-lecture.jpg",
    },
    {
      id: 4,
      title: "Jum'at Berkah",
      day: "Jumat",
      time: "11:00 - 13:00",
      location: "Lapangan Utama",
      participants: "500+ orang",
      description:
        "Shalat Jum'at dengan khutbah bermakna dan pembagian katering gratis",
      color: "from-red-500 to-red-600",
      image: "/friday-prayer-congregation.jpg",
    },
    {
      id: 5,
      title: "Program Mentoring Muda",
      day: "Minggu",
      time: "15:00 - 17:00",
      location: "Ruang Remaja",
      participants: "40-60 orang",
      description:
        "Bimbingan dakwah dan pengembangan karakter untuk generasi muda Muslim",
      color: "from-yellow-500 to-yellow-600",
      image: "/youth-mentoring-program.jpg",
    },
    {
      id: 6,
      title: "Silaturahmi Keluarga",
      day: "Setiap Bulan",
      time: "17:00 - 20:00",
      location: "Halaman Masjid",
      participants: "300-400 orang",
      description:
        "Acara berkumpul keluarga besar jamaah dengan berbagai aktivitas kebersamaan",
      color: "from-pink-500 to-pink-600",
      image: "/family-gathering-event.jpg",
    },
  ];

  return (
    <section id="schedule-grid" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Program Kegiatan Kami
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Berbagai program menarik dan bermanfaat untuk pengembangan spiritual
          dan sosial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {activity.day}
                      </div>
                      <div>{activity.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{activity.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>{activity.participants}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {activity.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
