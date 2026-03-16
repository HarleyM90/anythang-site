"use client"

// =======================================================
// Imports
// =======================================================

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/ui/button"
import { Badge } from "@/ui/badge"

import {
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Star,
  Facebook,
  Instagram,
  Globe,
  Mail,
} from "lucide-react"

// =======================================================
// Brand Colors & Constants
// =======================================================

const ORANGE = "#FF6A13"
const BLACK = "#000000"

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61579394307733"

// =======================================================
// BrandIcon Component
// =======================================================

function BrandIcon({
  src,
  alt,
  fallback,
  className = "w-4 h-4",
}: {
  src: string
  alt: string
  fallback: React.ReactNode
  className?: string
}) {
  const [failed, setFailed] = React.useState(false)

  // If load failed -> render fallback icon
  if (failed) return <>{fallback}</>

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      style={{ display: "block" }}
    />
  )
}

// =======================================================
// SocialLinks Component
// =======================================================

function SocialLinks({
  compact = false,
  align = "start" as "start" | "end",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-offset-2"
  const size = compact ? "px-3 py-1.5 text-sm" : "px-3.5 py-2"

  return (
    <div className={`flex items-center gap-3 ${align === "end" ? "justify-end" : ""}`}>

      {/* Facebook */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${size} border-white/15 hover:bg-white/10`}
      >
        <BrandIcon
          src="/brands/facebook.svg"
          alt="Facebook"
          fallback={<Facebook className="w-4 h-4" />}
        />
        Facebook
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/anythang_contracting"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${size} border-white/15 hover:bg-white/10`}
      >
        <BrandIcon
          src="/brands/instagram.svg"
          alt="Instagram"
          fallback={<Instagram className="w-4 h-4" />}
        />
        Instagram
      </a>

      {/* Google Placeholder */}
      <span
        className={`${base} ${size} border-white/10 text-white/40 cursor-not-allowed`}
      >
        <BrandIcon
          src="/brands/google.svg"
          alt="Google"
          fallback={<Globe className="w-4 h-4" />}
        />
        Google
      </span>
    </div>
  )
}

// =======================================================
// Main Page Component
// =======================================================

export default function Page() {

  const reviews = [
    {
      text: "Brent with Anythang Septic & Grading is my go-to for septic needs. Very reliable, knowledgeable, and quick to respond while always putting the client's needs first.",
      author: "Bobby Lammert",
    },
    {
      text: "No regrets! I would definitely work with Michael & Brent again. They moved dirt, graded the yard, and installed a 90' tie wall surrounded by gravel. Extremely knowledgeable about septic and drainage.",
      author: "Daniel Robinson",
    },
  ]

  const [reviewIndex, setReviewIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: BLACK, color: "white" }}>

      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}

      <div className="border-b border-white/10" style={{ backgroundColor: "#0b0b0b" }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">

          <div className="flex flex-wrap items-center gap-4 opacity-90">

            <Image
              src="/logo.png"
              alt="Anythang logo"
              width={32}
              height={32}
              className="hidden md:block h-8 w-8 rounded-full object-cover"
              draggable={false}
              priority
            />

            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+17068616780">Michael: (770) 861-6780</a>
            </span>

            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+17069692568">Brent: (706) 969-2568</a>
            </span>

            <span className="hidden md:inline-flex items-center gap-2">
              <Clock className="w-4 h-4" /> Daytime & Emergency services
            </span>

            <span className="hidden md:inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dahlonega, GA</span>
              <strong>Serving North Georgia & South Carolina</strong>
            </span>

          </div>

          <div className="flex items-center gap-2">
            <Badge style={{ backgroundColor: "rgba(255,106,19,.18)", color: ORANGE }}>
              Free Appointments
            </Badge>

            <Badge style={{ backgroundColor: "rgba(255,255,255,.08)", color: "#ddd" }}>
              On-site assessment required
            </Badge>
          </div>

        </div>
      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <header className="relative overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% -200px, rgba(255,106,19,.18), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-4"
              style={{
                borderColor: "rgba(255,106,19,.3)",
                backgroundColor: "rgba(255,106,19,.10)",
                color: ORANGE,
              }}
            >
              <CheckCircle2 className="w-4 h-4" /> Local pros. Done right.
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Anythang <span style={{ color: ORANGE }}>Septic</span> & Grading
            </h1>

            <p className="mt-4 text-white/80 max-w-xl">
              Pump outs, repairs, installs, drainage and site work.
            </p>

            {/* CALL BUTTONS */}

            <div className="mt-6 flex flex-wrap gap-3">

              <Button
                size="lg"
                className="rounded-full px-7"
                style={{ backgroundColor: ORANGE }}
                onClick={() => (window.location.href = "tel:+17068616780")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Michael
              </Button>

              <Button
                size="lg"
                className="rounded-full px-7"
                style={{ backgroundColor: "white", color: "#000" }}
                onClick={() => (window.location.href = "tel:+17069692568")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Brent
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-7"
                style={{ backgroundColor: "rgba(255,255,255,.08)" }}
                onClick={() =>
                  (window.location.href = "mailto:anythangcontracting@gmail.com")
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>

            </div>

            {/* REVIEWS */}

            <div className="mt-8 max-w-xl">

              <div className="flex items-center gap-2 text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-white/80 text-sm ml-2">
                  5.0 Rating from Google Reviews
                </span>
              </div>

              <div className="relative h-[160px]">

                {reviews.map((review, index) => {

                  const isActive = reviewIndex === index

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute w-full"
                    >

                      <div
                        className="rounded-2xl border border-white/10 p-5 shadow-xl"
                        style={{
                          backgroundColor: "rgba(255,255,255,.04)",
                        }}
                      >
                        <p className="text-white/85 text-sm italic">
                          “{review.text}”
                        </p>

                        <span className="text-white/60 text-xs mt-2 block">
                          — {review.author}
                        </span>
                      </div>

                    </motion.div>
                  )
                })}

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE LOGO */}

          <div className="hidden md:flex flex-col items-end justify-center">

            <Image
              src="/logo.png"
              alt="Anythang logo"
              width={380}
              height={380}
              className="w-[320px] lg:w-[380px]"
              draggable={false}
              priority
            />

            <div className="mt-4">
              <SocialLinks align="end" />
            </div>

          </div>

        </div>

      </header>

    </div>
  )
}