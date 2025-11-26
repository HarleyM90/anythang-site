"use client"

// =======================================================
// Imports
// =======================================================

import React from "react"

// Next.js optimized image component
import Image from "next/image"

// Smooth entrance animations
import { motion } from "framer-motion"

// Your shadcn/ui components
import { Button } from "@/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Badge } from "@/ui/badge"

// Icons from lucide-react
import {
  Wrench,
  Droplets,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Star,
  MessageCircle,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react"

// =======================================================
// Brand Colors & Constants
// =======================================================

// Main brand orange
const ORANGE = "#FF6A13"

// Global background color
const BLACK = "#000000"

// Facebook page link
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579394307733"


// =======================================================
// BrandIcon Component (FIXED to eliminate ghosting)
// =======================================================

/**
 * Attempts to load an SVG from /public/brands/*.svg.
 * If loading fails (e.g. missing file, CDN delay, static export timing),
 * it falls back to a Lucide icon WITHOUT causing double-renders or flickering.
 */
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

  // If load failed → render fallback icon
  if (failed) return <>{fallback}</>

  // Otherwise render the image normally
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      style={{ display: "block" }} // prevents layout stacking
    />
  )
}


// =======================================================
// SocialLinks Component (FIXED & Annotated)
// =======================================================

/**
 * Displays social media links. Compact for mobile,
 * full-sized for desktop. Aligns left or right.
 */
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
        className={`${base} ${size} border-white/15 hover:bg-white/10 relative z-10`}
        aria-label="Facebook"
        title="Facebook"
      >
        <BrandIcon
          src="/brands/facebook.svg"
          alt="Facebook"
          fallback={<Facebook className="w-4 h-4" />}
        />
        <span className="relative z-10">Facebook</span>
      </a>

      {/* Instagram — now LIVE */}
      <a
        href="https://www.instagram.com/anythang_contracting?igsh=MWV2d2J4cDQ5cXVuZQ%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${size} border-white/15 hover:bg-white/10 relative z-10`}
        aria-label="Instagram"
        title="Instagram"
      >
        <BrandIcon
          src="/brands/instagram.svg"
          alt="Instagram"
          fallback={<Instagram className="w-4 h-4" />}
        />
        <span className="relative z-10">Instagram</span>
      </a>

      {/* Google Business — still a placeholder until link is ready */}
      <span
        className={`${base} ${size} border-white/10 text-white/40 cursor-not-allowed relative z-10`}
        title="Google Business link coming soon"
      >
        <BrandIcon
          src="/brands/google.svg"
          alt="Google"
          fallback={<Globe className="w-4 h-4" />}
        />
        <span className="relative z-10">Google</span>
      </span>

    </div>
  )
}

// =======================================================
// Main Page Component
// =======================================================

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BLACK, color: "white" }}>

      {/* =====================================================
          TOP CONTACT BAR
          Shows logo, phone numbers, service area
      ====================================================== */}
      <div className="border-b border-white/10" style={{ backgroundColor: "#0b0b0b" }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">

          {/* LEFT SIDE: LOGO + CONTACT INFO */}
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

            {/* Michael */}
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+17068616780" className="hover:underline">Michael: (770) 861-6780</a>
            </span>

            {/* Brent */}
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+17069692568" className="hover:underline">Brent: (706) 969-2568</a>
            </span>

            {/* Hours */}
            <span className="hidden md:inline-flex items-center gap-2">
              <Clock className="w-4 h-4" /> Daytime service (no late-night calls)
            </span>

            {/* Service Area */}
            <span className="hidden md:inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dahlonega, GA · </span>
              <strong className="whitespace-nowrap">Serving North Georgia & South Carolina</strong>
            </span>
          </div>

          {/* RIGHT SIDE BADGES */}
          <div className="flex items-center gap-2">
            <Badge className="border-white/20" style={{ backgroundColor: "rgba(255,106,19,.18)", color: ORANGE }}>
              Free Appointments
            </Badge>
            <Badge className="border-white/20" style={{ backgroundColor: "rgba(255,255,255,.08)", color: "#ddd" }}>
              On-site assessment required
            </Badge>
          </div>
        </div>
      </div>


      {/* =====================================================
          HERO SECTION
          Big headline, call buttons, branding glow
      ====================================================== */}
      <header className="relative overflow-hidden">

        {/* ORANGE GLOW BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(1200px 600px at 50% -200px, rgba(255,106,19,.18), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE CONTENT =============================== */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small tagline */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-4"
              style={{
                borderColor: "rgba(255,106,19,.3)",
                backgroundColor: "rgba(255,106,19,.10)",
                color: ORANGE,
              }}
            >
              <CheckCircle2 className="w-4 h-4" /> Local pros. Daytime service. Done right.
            </div>

            {/* Site title */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Anythang <span style={{ color: ORANGE }}>Septic</span> &{" "}
              <span className="text-white">Grading</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-white/80 max-w-xl">
              Pump outs, repairs, new installs, drainage and site work. Honest work, 
              fair pricing, and appointments set on your schedule.
            </p>

            {/* CALL BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">

              {/* Call Michael */}
              <Button
                size="lg"
                className="rounded-2xl"
                style={{ backgroundColor: ORANGE }}
                onClick={() => (window.location.href = "tel:+17068616780")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Michael
              </Button>

              {/* Call Brent */}
              <Button
                size="lg"
                className="rounded-2xl"
                style={{ backgroundColor: "white", color: "#000" }}
                onClick={() => (window.location.href = "tel:+17069692568")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Brent
              </Button>

              {/* Email */}
              <Button
                variant="secondary"
                size="lg"
                className="rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,.08)" }}
                onClick={() => (window.location.href = "mailto:anythangcontracting@gmail.com")}
              >
                anythangcontracting@gmail.com
              </Button>
            </div>

            {/* SOCIAL LINKS on MOBILE */}
            <div className="mt-4 md:hidden">
              <SocialLinks compact />
            </div>

            {/* STARS SECTION */}
            <div className="mt-6 flex items-center gap-2" style={{ color: "#FBBF24" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-white/70">
                Customer-first service across North Georgia & South Carolina
              </span>
            </div>
          </motion.div>


          {/* RIGHT SIDE: LOGO + SOCIALS (DESKTOP ONLY) */}
          <div className="hidden md:flex flex-col items-end justify-center">
            <Image
              src="/logo.png"
              alt="Anythang logo"
              width={380}
              height={380}
              className="w-[320px] lg:w-[380px] h-auto opacity-95 drop-shadow-[0_10px_40px_rgba(255,106,19,0.25)] select-none"
              draggable={false}
              priority
            />
            <div className="mt-4">
              <SocialLinks align="end" />
            </div>
          </div>

        </div>
      </header>


      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        {/* Section header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
          <p className="text-white/70 mt-2">
            Septic, plumbing, and site work for homes, rentals, and light commercial.
          </p>
        </div>

        {/* Grid of services */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <Card
              key={idx}
              className="border-white/10 rounded-2xl"
              style={{ backgroundColor: "rgba(255,255,255,.04)" }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-white">
                  <s.icon className="w-5 h-5" style={{ color: ORANGE }} />
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80 text-sm">
                  {s.items.map((it, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: ORANGE }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </section>


      {/* =====================================================
          STICKY TEXT BAR (bottom)
      ====================================================== */}
      <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="max-w-7xl mx-auto px-4 pb-4">
          <div
            className="rounded-2xl shadow-xl border border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-3 p-3 backdrop-blur"
            style={{ backgroundColor: "rgba(20,20,20,.9)" }}
          >
            {/* Left side text */}
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MessageCircle className="w-5 h-5" style={{ color: ORANGE }} />
              <span>Need help? Tap to text now.</span>
            </div>

            {/* Right side text buttons */}
            <div className="flex-1 flex flex-wrap justify-end gap-2">
              
              {/* Text Michael */}
              <Button
                className="rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,.10)" }}
                onClick={() =>
                  (window.location.href =
                    "sms:+17068616780?body=Hi%20Michael%2C%20I%27m%20reaching%20out%20about%20septic%2Fgrading%20help%20in%20North%20Georgia%20or%20South%20Carolina...")
                }
              >
                Text Michael
              </Button>

              {/* Text Brent */}
              <Button
                className="rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,.10)" }}
                onClick={() =>
                  (window.location.href =
                    "sms:+17069692568?body=Hi%20Brent%2C%20I%27m%20reaching%20out%20about%20septic%2Fgrading%20help%20in%20North%20Georgia%20or%20South%20Carolina...")
                }
              >
                Text Brent
              </Button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


// =======================================================
// Services List (bottom of file)
// =======================================================

const services = [
  {
    title: "Septic Services",
    icon: Droplets,
    items: [
      "Pump outs",
      "Septic repair",
      "New septic install",
      "Drain field install",
      "Inlet/Outlet pipe installs",
    ],
  },
  {
    title: "Plumbing & Site Work",
    icon: Wrench,
    items: [
      "Yard drainage repairs",
      "Land clearing",
      "Grading",
      "Demolition",
      "Free appointments",
    ],
  },
]
