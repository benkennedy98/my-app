"use client"

import { useEffect, useState } from "react"

type CraftedMap = Record<string, boolean>

const STORAGE_KEY = "pelt-tracker:crafted"

export const itemKey = (setId: string, itemIndex: number) => `${setId}:${itemIndex}`

export function useCraftedItems() {
  const [crafted, setCrafted] = useState<CraftedMap>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setCrafted(JSON.parse(raw))
    } catch {
      // ignore malformed/unavailable storage
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(crafted))
    } catch {
      // ignore unavailable storage
    }
  }, [crafted, loaded])

  const isCrafted = (key: string): boolean => crafted[key] ?? false

  const toggleCrafted = (key: string) => {
    setCrafted(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return { isCrafted, toggleCrafted }
}
