"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Globe, User, Home, Activity, Film, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div
            className={`transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-red-500" />
              <span className="text-xl font-bold">FLINOX</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { name: "HOME", icon: <Home className="w-4 h-4" />, href: "/", active: true },
              {
                name: "SERVERS STATUS",
                icon: <Activity className="w-4 h-4" />,
                href: "http://status.flinox.site/",
                target: "_blank",
              },
              { name: "OUR OFFICIAL SITES", icon: <Film className="w-4 h-4" />, href: "/movie-sites" },
              { name: "PRIVACY POLICY", icon: <Zap className="w-4 h-4" />, href: "/privacy-policy" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target || "_self"}
                className={`group relative px-4 py-2 transition-all duration-300 ${
                  isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                } ${item.active ? "text-red-500" : "text-white hover:text-red-400"}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.active && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* User Info */}
            <div
              className={`flex items-center bg-black/50 rounded-md px-3 py-1 transition-all duration-700 ${
                isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center">
                  <span className="text-xs font-bold"></span>
                </div>
                
              </div>
            </div>

           

            
          </div>
        </div>
      </div>
    </header>
  )
}