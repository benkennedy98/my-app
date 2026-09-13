"use client"

import { useState } from "react"
import { trapperOutfits } from "../data/pelts"
import { usePeltProgress, progressKey } from "../hooks/usePeltProgress"
import Button from "./Button"

export default function PeltTracker() {
  const [activeOutfitId, setActiveOutfitId] = useState(trapperOutfits[0].id)
  const { getCollected, setCollected } = usePeltProgress()

  const activeOutfit = trapperOutfits.find(o => o.id === activeOutfitId)!

  const completeCount = activeOutfit.requirements.filter(
    req => getCollected(progressKey(activeOutfit.id, req.animal, req.type)) >= req.count
  ).length

  return (
    <div className="pelt-tracker">
      <div className="outfit-tabs">
        {trapperOutfits.map(outfit => (
          <Button
            key={outfit.id}
            variant="tab"
            active={outfit.id === activeOutfitId}
            onClick={() => setActiveOutfitId(outfit.id)}
          >
            {outfit.name}
          </Button>
        ))}
      </div>

      <div className="outfit-progress">
        {completeCount} / {activeOutfit.requirements.length} complete
      </div>

      <div className="pelt-rows">
        {activeOutfit.requirements.map(req => {
          const key = progressKey(activeOutfit.id, req.animal, req.type)
          const collected = getCollected(key)
          const isComplete = collected >= req.count

          return (
            <div key={key} className="pelt-row">
              <div className="pelt-info">
                <span className="pelt-animal">{req.animal}</span>
                <span className={`pelt-type pelt-type-${req.type}`}>{req.type}</span>
              </div>

              <div className="pelt-controls">
                <Button
                  variant="stepper"
                  onClick={() => setCollected(key, collected - 1, req.count)}
                  disabled={collected <= 0}
                >
                  -
                </Button>
                <span className={`pelt-count ${isComplete ? "complete" : ""}`}>
                  {collected} / {req.count}
                </span>
                <Button
                  variant="stepper"
                  onClick={() => setCollected(key, collected + 1, req.count)}
                  disabled={collected >= req.count}
                >
                  +
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
