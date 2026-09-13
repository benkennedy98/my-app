"use client"

import { Fragment, useState } from "react"
import { isLegendaryPelt, isPerfectPelt, isFeather, stripPeltQualityPrefix } from "../data/trapperSets"
import { allTrapperCollections, getLegendaryPeltsAlreadyCrafted, getItemsNeedingPelt } from "../data/trapperCollections"
import { useCraftedItems, itemKey } from "../hooks/useCraftedItems"
import { usePeltInventory } from "../hooks/usePeltInventory"

type TypeFilter = "all" | "pelt" | "feather" | "legendary"

export default function PeltChecklist() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all")
  const [modalPelt, setModalPelt] = useState<string | null>(null)
  const { isCrafted } = useCraftedItems()
  const { getCollected, setCollected } = usePeltInventory()

  const legendaryAlreadyCrafted = getLegendaryPeltsAlreadyCrafted((setId, index) =>
    isCrafted(itemKey(setId, index))
  )

  const neededByPelt = new Map<string, number>()
  allTrapperCollections.forEach(set => {
    set.items.forEach((item, index) => {
      const crafted = isCrafted(itemKey(set.id, index))
      if (crafted) return
      item.requirements.forEach(req => {
        if (isLegendaryPelt(req.pelt)) {
          if (!legendaryAlreadyCrafted.has(req.pelt)) neededByPelt.set(req.pelt, 1)
        } else {
          neededByPelt.set(req.pelt, (neededByPelt.get(req.pelt) ?? 0) + req.count)
        }
      })
    })
  })
  const sortedPelts = Array.from(neededByPelt.entries())
    .filter(([pelt]) => {
      if (typeFilter === "legendary") return isLegendaryPelt(pelt)
      if (typeFilter === "pelt") return !isFeather(pelt) && !isLegendaryPelt(pelt)
      if (typeFilter === "feather") return isFeather(pelt)
      return true
    })
    .map(([pelt, needed]) => ({ pelt, needed, displayName: stripPeltQualityPrefix(pelt) }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName))

  return (
    <div className="pelt-tracker">
      <div className="filter-pills">
        <button
          className={`filter-pill ${typeFilter === "all" ? "active" : ""}`}
          onClick={() => setTypeFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-pill ${typeFilter === "pelt" ? "active" : ""}`}
          onClick={() => setTypeFilter("pelt")}
        >
          Pelts
        </button>
        <button
          className={`filter-pill ${typeFilter === "feather" ? "active" : ""}`}
          onClick={() => setTypeFilter("feather")}
        >
          Feathers
        </button>
        <button
          className={`filter-pill ${typeFilter === "legendary" ? "active" : ""}`}
          onClick={() => setTypeFilter("legendary")}
        >
          Legendary
        </button>
      </div>

      <div className="pelt-rows compact">
        {sortedPelts.map(({ pelt, needed, displayName }, index) => {
          const legendary = isLegendaryPelt(pelt)
          const collected = getCollected(pelt)
          const isComplete = collected >= needed
          const letter = displayName[0]?.toUpperCase() ?? "#"
          const prevLetter = index > 0 ? sortedPelts[index - 1].displayName[0]?.toUpperCase() ?? "#" : null
          const showHeader = letter !== prevLetter

          return (
            <Fragment key={pelt}>
              {showHeader && <div className="letter-header">{letter}</div>}
              <div className="pelt-row">
                <div className="pelt-info">
                  <div className="pelt-name-line">
                    <span className="pelt-animal">{displayName}</span>
                    {legendary && <span className="quality-badge legendary">Legendary</span>}
                    {isPerfectPelt(pelt) && <span className="quality-badge perfect">Perfect</span>}
                  </div>
                </div>

                <div className="pelt-controls">
                  <button className="needed-for-btn" onClick={() => setModalPelt(pelt)}>
                    Needed For
                  </button>
                  <button
                    className="stepper-btn"
                    onClick={() => setCollected(pelt, collected - 1)}
                    disabled={collected <= 0}
                  >
                    -
                  </button>
                  <span className={`pelt-count ${isComplete ? "complete" : ""}`}>
                    {collected} / {needed}
                  </span>
                  <button
                    className="stepper-btn"
                    onClick={() => setCollected(pelt, collected + 1)}
                    disabled={legendary && collected >= 1}
                  >
                    +
                  </button>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>

      {modalPelt && (
        <div className="modal-overlay" onClick={() => setModalPelt(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span>{stripPeltQualityPrefix(modalPelt)} needed for:</span>
              <button className="modal-close-btn" onClick={() => setModalPelt(null)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {getItemsNeedingPelt(modalPelt, (setId, index) => isCrafted(itemKey(setId, index))).map(
                (usage, index) => (
                  <div key={index} className="modal-usage-row">
                    <span className="modal-set-name">{usage.setName}</span>
                    <span className="modal-item-name">{usage.itemName}</span>
                    <span className="modal-pelt-amount">
                      {usage.count}x {stripPeltQualityPrefix(modalPelt)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
