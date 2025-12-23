"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock } from "lucide-react"

interface ScheduleItem {
  day: string
  date: string
  activities: { time: string; name: string }[]
}

export default function Schedule() {
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

  const schedules: ScheduleItem[] = [
    {
      day: "Senin - Jumat",
      date: "Hari Kerja",
      activities: [
        { time: "05:30", name: "Subuh & Pengajian" },
        { time: "12:15", name: "Dzuhur" },
        { time: "15:45", name: "Ashar" },
        { time: "18:20", name: "Maghrib" },
        { time: "19:45", name: "Isya & Tarawih" },
      ],
    },
    {
      day: "Sabtu - Minggu",
      date: "Akhir Pekan",
      activities: [
        { time: "05:30", name: "Subuh" },
        { time: "08:00", name: "Kelas Anak - Anak" },
        { time: "12:15", name: "Dzuhur" },
        { time: "15:45", name: "Ashar" },
        { time: "18:20", name: "Maghrib" },
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="schedule" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="text-primary" size={28} />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Jadwal Kegiatan</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ikuti jadwal kegiatan ibadah dan program komunitas kami setiap hari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schedules.map((schedule, scheduleIndex) => (
            <div
              key={schedule.day}
              className={`bg-card rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${scheduleIndex * 150}ms`,
              }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{schedule.day}</h3>
              <p className="text-muted-foreground mb-6">{schedule.date}</p>

              <div className="space-y-4">
                {schedule.activities.map((activity, actIndex) => (
                  <div
                    key={activity.time}
                    className="flex items-center gap-4 pb-4 border-b border-border last:border-b-0 hover:translate-x-2 transition-transform"
                    style={{
                      animationDelay: `${actIndex * 50}ms`,
                    }}
                  >
                    <div className="shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{activity.name}</p>
                    </div>
                    <div className="text-primary font-bold text-lg">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
