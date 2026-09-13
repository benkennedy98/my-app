import { trapperSets } from "../data/trapperSets"
import TrapperItemTracker from "./TrapperItemTracker"

export default function TrapperProgress() {
  return (
    <TrapperItemTracker
      collections={trapperSets}
      selectLabel="SELECT A TRAPPER SET:"
      searchPlaceholder="Search sets..."
      emptyStateText="Select a trapper set above to see its items."
    />
  )
}
