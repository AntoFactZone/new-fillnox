"use client"

import { Monitor, Smartphone, Tv } from "lucide-react"
import Link from "next/link"

export default function PlatformsSection() {
  return (
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
  )
}
