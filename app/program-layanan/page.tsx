import Navigation from "@/components/navigation"
import ProgramsHero from "@/components/programs/programs-hero"
import ProgramsGrid from "@/components/programs/programs-grid"
import BenefitsSection from "@/components/programs/benefits-section"
import Footer from "@/components/footer"

export default function ProgramLayanan() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProgramsHero />
      <ProgramsGrid />
      <BenefitsSection />
      <Footer />
    </main>
  )
}
