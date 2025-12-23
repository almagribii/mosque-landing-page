import Navigation from "@/components/navigation"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import LocationMap from "@/components/contact/location-map"
import Footer from "@/components/footer"

export default function Kontak() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <Footer />
    </main>
  )
}
