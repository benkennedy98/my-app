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
        Home
      </Link>
      <Link
        href="/rdr2"
        style={{ color: mounted && pathname === "/rdr2" ? "var(--white)" : "var(--black)" }}
      >
        RDR2
      </Link>
    </nav>
  )
}
