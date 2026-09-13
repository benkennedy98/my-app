"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav>
      <Link
        href="/"
        style={{ color: mounted && pathname === "/" ? "var(--white)" : "var(--black)" }}
      >
        RDR2
      </Link>
      <Link
        href="/hunting-guide"
        style={{ color: mounted && pathname === "/hunting-guide" ? "var(--white)" : "var(--black)" }}
      >
        Hunting Guide
      </Link>
      <Link
        href="/pelt-tracker"
        style={{ color: mounted && pathname === "/pelt-tracker" ? "var(--white)" : "var(--black)" }}
      >
        Pelt Tracker
      </Link>
    </nav>
  )
}
