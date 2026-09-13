"use client"

import { useState } from "react"
import Select from "react-select"
import { getAnimalByName, getAllAnimalNames } from "../data/animals"
import { rdr2SelectStyles } from "./selectStyles"

interface SelectOption {
  value: string
  label: string
}

export default function HuntingGuide() {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null)
  const allAnimals = getAllAnimalNames()

  const options: SelectOption[] = allAnimals.map(animal => ({
    value: animal,
    label: animal,
  }))

  const selectedAnimalData = selectedOption ? getAnimalByName(selectedOption.value) : null

  return (
    <div className="hunting-guide">
      <div className="search-section">
        <label htmlFor="animal-select">SEARCH FOR AN ANIMAL:</label>
        <Select
          inputId="animal-select"
          instanceId="hunting-guide-select"
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder="Type animal name..."
          isClearable
          isSearchable
          classNamePrefix="react-select"
          styles={rdr2SelectStyles}
        />
      </div>

      {selectedAnimalData && (
        <div className="weapons-section">
          <h3>WEAPONS FOR {selectedOption?.label.toUpperCase()}:</h3>
          <div className="weapons-list">
            {selectedAnimalData.weapons.map((weapon, index) => (
              <div key={index} className="weapon-item">
                {weapon}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
