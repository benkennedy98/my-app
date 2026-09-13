import { trapperSets } from "../data/trapperSets"
import TrapperItemTracker from "./TrapperItemTracker"

export default function TrapperGarments() {
  return (
    <TrapperItemTracker
      collections={trapperSets}
      selectLabel="SELECT A TRAPPER SET:"
      searchPlaceholder="Search sets..."
      emptyStateText="Select a trapper set above to see its items."
    />
  )
}
