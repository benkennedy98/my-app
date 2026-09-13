import { trapperClothingGroups } from "../data/trapperClothing"
import TrapperItemTracker from "./TrapperItemTracker"

export default function TrapperClothing() {
  return (
    <TrapperItemTracker
      collections={trapperClothingGroups}
      selectLabel="SELECT A CLOTHING TYPE:"
      searchPlaceholder="Search clothing..."
      emptyStateText="Select a clothing type above to see its items."
    />
  )
}
