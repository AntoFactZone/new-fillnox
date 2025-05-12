"use client"

import { ArrowLeft, Download, Shield, Zap, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { AnimatedBackground } from "@/components/animated-background"

export default function OfficialAppPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInstall = () => {
    // Replace with your actual app download link
    window.location.href = "https://flinox.fun/download/app"
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="flex-1 relative z-10 pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-10" />

          <div className="container mx-auto relative z-20 py-16 px-4 md:py-24 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h1
                    className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300 transition-all duration-1000 ${
                      isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                  >
                    FLINOX OFFICIAL APP
                  </h1>
                </div>
                <p
                  className={`text-xl text-gray-300 transition-all duration-1000 delay-300 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  Experience premium streaming with our official app. Enjoy thousands of TV shows and movies in HD
                  quality with original audio.
                </p>
                <div
                  className={`transition-all duration-1000 delay-500 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <Button
                    onClick={handleInstall}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md text-lg font-medium flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  >
                    <Download className="w-5 h-5" />
                    INSTALL NOW
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
                  
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-md">OFFICIAL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-black to-red-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">App Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-12 w-12 text-red-500 mb-4" />,
                  title: "Fast Streaming",
                  description: "Enjoy buffer-free streaming with our optimized app performance.",
                },
                {
                  icon: <Shield className="h-12 w-12 text-red-500 mb-4" />,
                  title: "Secure Connection",
                  description: "Your data is protected with our secure streaming technology.",
                },
                {
                  icon: <Smartphone className="h-12 w-12 text-red-500 mb-4" />,
                  title: "Multi-Device Support",
                  description: "Use the app on multiple devices with the same account.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/30 p-6 rounded-lg text-center hover:bg-black/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Streaming?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Download our official app now and get access to thousands of movies and TV shows.
            </p>
            <Button
              onClick={handleInstall}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md text-lg font-medium flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.5)] mx-auto"
            >
              <Download className="w-5 h-5" />
              INSTALL OFFICIAL APP
            </Button>
          </div>
        </section>
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
