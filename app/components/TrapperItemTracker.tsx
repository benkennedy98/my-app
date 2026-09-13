"use client"

import { useState } from "react"
import Select from "react-select"
import { type TrapperSet, isLegendaryPelt } from "../data/trapperSets"
import { getLegendaryPeltsAlreadyCrafted } from "../data/trapperCollections"
import { useCraftedItems, itemKey } from "../hooks/useCraftedItems"
import { usePeltInventory } from "../hooks/usePeltInventory"
import { rdr2SelectStyles } from "./selectStyles"

interface SetOption {
  value: string
  label: string
}

interface TrapperItemTrackerProps {
  collections: TrapperSet[]
  selectLabel?: string
  searchPlaceholder?: string
  emptyStateText?: string
}

export default function TrapperItemTracker({
  collections,
  selectLabel,
  searchPlaceholder,
  emptyStateText,
}: TrapperItemTrackerProps) {
  const showSelector = collections.length > 1
  const setOptions: SetOption[] = collections.map(set => ({ value: set.id, label: set.name }))
  const [selectedSet, setSelectedSet] = useState<SetOption | null>(setOptions[0])
  const { isCrafted, toggleCrafted } = useCraftedItems()
  const { getCollected } = usePeltInventory()

  const activeSet = showSelector
    ? selectedSet
      ? collections.find(s => s.id === selectedSet.value)
      : undefined
    : collections[0]

  const legendaryAlreadyCrafted = getLegendaryPeltsAlreadyCrafted((setId, index) =>
    isCrafted(itemKey(setId, index))
  )

  const craftedCount = activeSet
    ? activeSet.items.filter((_, index) => isCrafted(itemKey(activeSet.id, index))).length
    : 0

  return (
    <div className="pelt-tracker">
      {showSelector && (
        <div className="search-section">
          <label htmlFor="set-select">{selectLabel}</label>
          <Select
            inputId="set-select"
            instanceId="trapper-item-tracker-select"
            className="trapper-select"
            options={setOptions}
            value={selectedSet}
            onChange={setSelectedSet}
            placeholder={searchPlaceholder}
            isClearable
            isSearchable
            classNamePrefix="react-select"
            styles={rdr2SelectStyles}
          />
        </div>
      )}

      {activeSet ? (
        <>
          <div className="outfit-progress">
            {craftedCount} / {activeSet.items.length} made
          </div>

          <div className="pelt-rows">
            {activeSet.items.map((item, index) => {
              const key = itemKey(activeSet.id, index)
              const crafted = isCrafted(key)

              return (
                <div key={key} className="pelt-row">
                  <div className="pelt-info">
                    <span className="pelt-animal">{item.name}</span>
                    <div className="item-requirements">
                      {item.requirements.map(req => {
                        const have =
                          isLegendaryPelt(req.pelt) &&
                          (getCollected(req.pelt) >= 1 || legendaryAlreadyCrafted.has(req.pelt))
                        return (
                          <span key={req.pelt} className={`requirement-chip ${have ? "have" : ""}`}>
                            {req.count}x {req.pelt}
                            {have && " ✓"}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  <label className="made-toggle">
                    <input type="checkbox" checked={crafted} onChange={() => toggleCrafted(key)} />
                    Made
                  </label>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <div className="empty-state">{emptyStateText}</div>
      )}
    </div>
  )
}
