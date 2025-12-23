"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface NavigationProps {
  isScrolled?: boolean;
}

export default function Navigation({ isScrolled = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Jadwal Kegiatan", href: "/jadwal-kegiatan" },
    { label: "Program & Layanan", href: "/program-layanan" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-2xl ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                🕌
              </span>
            </div>
            <span className="font-bold text-primary">Masjid Al-Hikmah</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
          
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-background border-b border-border animate-slide-in-down">
            <div className="flex flex-col gap-0 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
                <button
                  onClick={() => {
                    setTheme(isDark ? "light" : "dark");
                    setIsOpen(false);
                  }}
                  className="px-4 py-3 flex items-center gap-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
