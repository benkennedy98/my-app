"use client"

import { useEffect, useState } from "react"

type ProgressMap = Record<string, number>

const STORAGE_KEY = "pelt-tracker:progress"

export const progressKey = (outfitId: string, animal: string, type: string) =>
  `${outfitId}:${animal}:${type}`

export function usePeltProgress() {
  const [progress, setProgress] = useState<ProgressMap>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setProgress(JSON.parse(raw))
    } catch {
      // ignore malformed/unavailable storage
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // ignore unavailable storage
    }
  }, [progress, loaded])

  const getCollected = (key: string): number => progress[key] ?? 0

  const setCollected = (key: string, collected: number, max: number) => {
    const clamped = Math.max(0, Math.min(collected, max))
    setProgress(prev => ({ ...prev, [key]: clamped }))
  }

  return { getCollected, setCollected }
}
