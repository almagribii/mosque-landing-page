"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroHome from "@/components/home/hero-home"
import InfoCards from "@/components/home/info-cards"
import Statistics from "@/components/home/statistics"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <HeroHome />
      <InfoCards />
      <Statistics />
      <Footer />
    </main>
  )
}
