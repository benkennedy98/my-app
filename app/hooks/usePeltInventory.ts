"use client"

import { useEffect, useState } from "react"

type InventoryMap = Record<string, number>

const STORAGE_KEY = "pelt-tracker:inventory"

export function usePeltInventory() {
  const [inventory, setInventory] = useState<InventoryMap>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setInventory(JSON.parse(raw))
    } catch {
      // ignore malformed/unavailable storage
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory))
    } catch {
      // ignore unavailable storage
    }
  }, [inventory, loaded])

  const getCollected = (pelt: string): number => inventory[pelt] ?? 0

  const setCollected = (pelt: string, collected: number) => {
    setInventory(prev => ({ ...prev, [pelt]: Math.max(0, collected) }))
  }

  return { getCollected, setCollected }
}
