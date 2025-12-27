"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      value: "(021) 1234-5678",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      color: "from-green-500 to-cyan-600",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Jakarta Selatan",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Buka 24 Jam",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div className="relative w-full min-h-[500px] bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hubungi <span className="text-primary">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami siap menjawab pertanyaan Anda dan mendengarkan masukan. Hubungi
            kami melalui berbagai saluran komunikasi yang tersedia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className={`bg-card border border-border rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {method.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
