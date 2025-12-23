"use client"

import { useEffect, useState } from "react"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"

export default function LocationMap() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("location-map")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const locationDetails = [
    {
      title: "Lokasi Masjid",
      address: "Jl. Al-Hikmah No. 123",
      city: "Jakarta Selatan 12345",
      country: "Indonesia",
    },
    {
      title: "Area Layanan",
      area: "Kami melayani area Jabodetabek",
      coverage: "Dengan jangkauan online untuk seluruh Indonesia",
    },
  ]

  return (
    <section id="location-map" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div
              className={`transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Kunjungi Kami</h2>
              <p className="text-muted-foreground mb-8">
                Masjid Al-Hikmah terletak di lokasi strategis dan mudah diakses dari berbagai area. Kami terbuka untuk
                semua orang yang ingin beribadah dan belajar.
              </p>
            </div>

            {/* Location Info */}
            <div
              className={`bg-card border border-border rounded-xl p-6 space-y-4 transform transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                  <p className="text-muted-foreground text-sm">
                    Jl. Al-Hikmah No. 123, Jakarta Selatan 12345, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Navigation className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Koordinat GPS</h3>
                  <p className="text-muted-foreground text-sm">-6.2548°, 106.8040°</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold hover:underline mt-1 inline-block"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`bg-card border border-border rounded-xl p-6 space-y-4 transform transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                  <a href="tel:+6212345678" className="text-muted-foreground text-sm hover:text-primary">
                    +62 (21) 1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@masjidalkhikmah.id" className="text-muted-foreground text-sm hover:text-primary">
                    info@masjidalkhikmah.id
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`lg:col-span-2 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full h-96 lg:h-96 rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6223191847466!2d106.80400000000001!3d-6.254800000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c7d7d7d7d7%3A0x7d7d7d7d7d7d7d7d!2sJakarta!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Jam Operasional */}
            <div
              className={`bg-card border border-border rounded-xl p-6 mt-6 transform transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-bold text-foreground mb-4">Jam Operasional</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Senin - Jum'at</p>
                  <p className="font-semibold text-foreground">24 Jam</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Sabtu - Minggu</p>
                  <p className="font-semibold text-foreground">24 Jam</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Masjid kami buka 24 jam untuk memudahkan jamaah beribadah kapan saja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
