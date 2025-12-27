"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ActivityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const element = document.getElementById("calendar-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, () => null);

  const eventDays = [3, 8, 12, 15, 20, 25]; // Example event days

  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );

  const monthName = currentDate.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <section id="calendar-section" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Kalender Kegiatan
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lihat jadwal lengkap acara dan kegiatan kami sepanjang bulan
        </p>

        <div
          className={`bg-card border border-border rounded-2xl p-4 sm:p-8 shadow-lg transform transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground capitalize">
              {monthName}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-muted-foreground py-2 sm:py-3 text-xs sm:text-sm"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {emptyDays.map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square"></div>
            ))}
            {days.map((day) => (
              <div
                key={day}
                className={`aspect-square flex items-center justify-center rounded-lg font-semibold transition-all transform hover:scale-105 text-sm sm:text-base ${
                  eventDays.includes(day)
                    ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span className="text-sm text-muted-foreground">
                Ada Kegiatan
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-muted rounded"></div>
              <span className="text-sm text-muted-foreground">
                Tidak Ada Kegiatan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
