"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokasi",
      value: "Jl. Al-Hikmah No. 123, Jakarta Selatan",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      value: "(021) 1234-5678",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@masjidalkhikmah.id",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Kontak Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau pertanyaan apapun
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`bg-card rounded-xl p-6 sm:p-8 text-center border border-border hover:border-primary transition-all transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-linear-to-br from-primary/10 to-accent/10 rounded-lg text-primary">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
              <p className="text-muted-foreground">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={`bg-card rounded-xl p-8 sm:p-12 border border-border shadow-lg max-w-2xl mx-auto transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Kirim Pesan</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Pesan Anda
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tuliskan pesan Anda di sini"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={20} />
              {isSubmitted ? "Pesan Terkirim!" : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
