"use client"

import { useState } from "react"
import Card from "./Card"
import PeltChecklist from "./PeltChecklist"
import TrapperGarments from "./TrapperGarments"
import TrapperClothing from "./TrapperClothing"
import TrapperSaddles from "./TrapperSaddles"

type Section = "checklist" | "garments" | "clothing" | "saddles"

const sections: { id: Section; label: string }[] = [
  { id: "checklist", label: "Pelt Checklist" },
  { id: "garments", label: "Garments" },
  { id: "clothing", label: "Clothing" },
  { id: "saddles", label: "Saddles" },
]

export default function TrapperProgressHub() {
  const [section, setSection] = useState<Section>("checklist")

  const renderSection = () => {
    switch (section) {
      case "checklist":
        return <PeltChecklist />
      case "garments":
        return <TrapperGarments />
      case "clothing":
        return <TrapperClothing />
      case "saddles":
        return <TrapperSaddles />
    }
  }

  return (
    <Card
      title={
        <div className="section-pills">
          {sections.map(s => (
            <button
              key={s.id}
              className={`section-pill ${section === s.id ? "active" : ""}`}
              onClick={() => setSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      }
      className="card-wide"
    >
      {renderSection()}
    </Card>
  )
}
