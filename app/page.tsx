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
    window.location.href = "https://flinox.fun/movie-sites"
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
                    Premium Streaming Experience For Free
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Image
                    src="https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-1280x720.jpg"
                    alt="Streaming devices"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-2xl border border-red-900/30 relative"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-md animate-bounce">
                    4k Quality
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
            {
              icon: <Smartphone className="w-12 h-12 mx-auto mb-4 text-red-500" />,
              name: "ANDROID",
              isNew: true,
              href: "/platforms/android",
            },
            {
              icon: <Smartphone className="w-12 h-12 mx-auto mb-4 text-red-500" />,
              name: "iOS",
              isNew: true,
              href: "/platforms/ios",
            },
            {
              icon: <Monitor className="w-12 h-12 mx-auto mb-4 text-red-500" />,
              name: "COMPUTER",
              href: "/platforms/computer",
            },
            {
              icon: <Tv className="w-12 h-12 mx-auto mb-4 text-red-500" />,
              name: "ANDROID TV",
              isNew: true,
              href: "/platforms/android-tv",
            },
          ].map((platform, index) => (
            <Link
              key={index}
              href={platform.href}
              className="relative p-6 bg-black/30 rounded-lg transition-transform hover:scale-105 hover:bg-black/50"
            >
              {platform.icon}
              <h3 className="text-white font-bold">{platform.name}</h3>
              {platform.isNew && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">NEW</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>


        

       {/* CTA Section */}
       
       </main>

      {/* Footer */}
      <footer className="bg-red-950 py-4 text-center text-sm relative z-10">
        <div className="container mx-auto px-4">
          <p>All Rights Reserved @2025</p>
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