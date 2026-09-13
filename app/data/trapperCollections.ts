import { trapperSets, isLegendaryPelt, type TrapperSet } from "./trapperSets"
import { trapperClothingGroups } from "./trapperClothing"
import { trapperSaddleGroups } from "./trapperSaddles"

export const allTrapperCollections: TrapperSet[] = [
  ...trapperSets,
  ...trapperClothingGroups,
  ...trapperSaddleGroups,
]

export function getLegendaryPeltsAlreadyCrafted(
  isItemCrafted: (setId: string, index: number) => boolean
): Set<string> {
  const used = new Set<string>()
  allTrapperCollections.forEach(set => {
    set.items.forEach((item, index) => {
      if (!isItemCrafted(set.id, index)) return
      item.requirements.forEach(req => {
        if (isLegendaryPelt(req.pelt)) used.add(req.pelt)
      })
    })
  })
  return used
}

export interface PeltUsage {
  setName: string
  itemName: string
  count: number
}

export function getItemsNeedingPelt(
  pelt: string,
  isItemCrafted: (setId: string, index: number) => boolean
): PeltUsage[] {
  const usages: PeltUsage[] = []
  allTrapperCollections.forEach(set => {
    set.items.forEach((item, index) => {
      if (isItemCrafted(set.id, index)) return
      item.requirements.forEach(req => {
        if (req.pelt === pelt) usages.push({ setName: set.name, itemName: item.name, count: req.count })
      })
    })
  })
  return usages
}
