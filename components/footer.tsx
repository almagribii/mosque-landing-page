"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/95 text-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🕌</span>
              Masjid Al-Hikmah
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Pusat ibadah dan komunitas Muslim yang berkomitmen memberikan layanan terbaik
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/jadwal-kegiatan" className="text-background/80 hover:text-background transition-colors">
                  Jadwal Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/program-layanan" className="text-background/80 hover:text-background transition-colors">
                  Program & Layanan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-background/80 hover:text-background transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/80">
                <Phone size={16} />
                (021) 1234-5678
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail size={16} />
                info@masjidalkhikmah.id
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Jl. Al-Hikmah No. 123, Jakarta Selatan
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background/20 hover:bg-background/40 rounded-lg transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 bg-background/20 hover:bg-background/40 rounded-lg transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 bg-background/20 hover:bg-background/40 rounded-lg transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; {currentYear} Masjid Al-Hikmah. Semua Hak Dilindungi.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-background transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Syarat Penggunaan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
