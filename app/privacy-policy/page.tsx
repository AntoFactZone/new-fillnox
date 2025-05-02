import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-red-900/20">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-300">
            <p>Last updated: May 3, 2025</p>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-red-400">1. Introduction</h2>
              <p>
                Welcome to Flinox. We respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-red-400">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: includes email address and telephone numbers.</li>
                <li>
                  Technical Data: includes internet protocol (IP) address, your login data, browser type and version,
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and
                  other technology on the devices you use to access this website.
                </li>
                <li>Usage Data: includes information about how you use our website, products and services.</li>
              </ul>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-red-400">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-red-400">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-red-400">5. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> business.flinox@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
