import { trapperSaddleGroups } from "../data/trapperSaddles"
import TrapperItemTracker from "./TrapperItemTracker"

export default function TrapperSaddles() {
  return <TrapperItemTracker collections={trapperSaddleGroups} />
}
