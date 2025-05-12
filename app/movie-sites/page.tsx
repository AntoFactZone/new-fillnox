"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export default function MovieSites() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const movieSites = [
    { name: "flinox.site", url: "https://flinox.site", status: "Online" },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-red-900/20">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">
            Our Movies Sites
          </h1>

          <p className="text-gray-300 mb-8">
            Below is a list of our official movie streaming sites. Click on any of them to access our content.
          </p>

          <div className="grid gap-4">
            {movieSites.map((site, index) => (
              <div
                key={site.name}
                className={`bg-black/50 border border-red-900/30 rounded-lg p-4 flex items-center justify-between transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${site.status === "Online" ? "bg-green-500" : "bg-red-500"}`}
                  ></div>
                  <div>
                    <h2 className="text-xl font-semibold text-red-400">{site.name}</h2>
                    <p className="text-sm text-gray-400">
                      Status:{" "}
                      <span className={site.status === "Online" ? "text-green-400" : "text-red-400"}>
                        {site.status}
                      </span>
                    </p>
                  </div>
                </div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center text-sm transition-all hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                >
                  <span>Visit</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black/50 border border-red-900/30 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-red-400">Important Notice</h2>
            <p className="text-gray-300">
              Please be aware that only the sites listed above are our official streaming platforms. Any other website
              claiming to be affiliated with Flinox may be fraudulent. Always check the URL before entering your
              credentials.
            </p>
            <div className="mt-4 flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>All our official sites use secure HTTPS connections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
