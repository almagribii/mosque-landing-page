import Navigation from "@/components/navigation"
import ScheduleHero from "@/components/schedule/schedule-hero"
import ActivityCalendar from "@/components/schedule/activity-calendar"
import ScheduleGrid from "@/components/schedule/schedule-grid"
import Footer from "@/components/footer"

export default function JadwalKegiatan() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ScheduleHero />
      <ActivityCalendar />
      <ScheduleGrid />
      <Footer />
    </main>
  )
}
