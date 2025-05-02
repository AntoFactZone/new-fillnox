"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, Monitor, Smartphone, Tv } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleGoHome = () => {
    window.location.href = "https://flinox.fun"
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="flex-1 relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-10" />

          <div className="container mx-auto relative z-20 py-16 px-4 md:py-24 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h2
                    className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300 transition-all duration-1000 ${
                      isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                  >
                    Premium Streaming Experience
                  </h2>
                </div>
                <p
                  className={`text-xl text-gray-300 transition-all duration-1000 delay-300 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  Watch thousands of TV series and movies with original audio and HD video quality.
                </p>
                <div
                  className={`transition-all duration-1000 delay-500 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <Button
                    onClick={handleGoHome}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md text-lg font-medium flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  >
                    <Home className="w-5 h-5" />
                    GO TO HOME
                  </Button>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-700 ${
                  isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Streaming devices"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl border border-red-900/30 relative"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-md animate-bounce">
                    HD Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="bg-gradient-to-b from-black to-red-950 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Smartphone className="w-12 h-12 mx-auto mb-4 text-red-500" />, name: "ANDROID" },
                { icon: <Smartphone className="w-12 h-12 mx-auto mb-4 text-red-500" />, name: "iOS" },
                { icon: <Monitor className="w-12 h-12 mx-auto mb-4 text-red-500" />, name: "COMPUTER" },
                { icon: <Tv className="w-12 h-12 mx-auto mb-4 text-red-500" />, name: "ANDROID TV", isNew: true },
              ].map((platform, index) => (
                <div
                  key={platform.name}
                  className={`bg-black/50 p-6 rounded-lg border border-red-800/30 hover:border-red-500 transition-all hover:scale-105 cursor-pointer relative transform transition-all duration-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  {platform.icon}
                  <h3 className="text-lg font-medium">{platform.name}</h3>
                  {platform.isNew && (
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      NEW
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div
                className={`transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  PC Users Just click on Go To Home button for movies and series.
                </h2>
                <p className="text-red-400 mb-6">Use Google Chrome and Mozilla Firefox for better performance.</p>
                <Button
                  onClick={handleGoHome}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] transition-all"
                >
                  <Home className="w-5 h-5" />
                  GO TO HOME
                </Button>
              </div>
              <div
                className={`relative transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg" />
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Streaming devices"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-950 py-4 text-center text-sm relative z-10">
        <div className="container mx-auto px-4">
          <p>All Rights Reserved @2023</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-red-400 hover:text-red-300 underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
