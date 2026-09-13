"use client"

import { useState } from "react"
import Select from "react-select"
import { getAnimalByName, getAllAnimalNames } from "../data/animals"

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
          styles={{
            control: (base, state) => ({
              ...base,
              backgroundColor: "#000000",
              borderColor: "#000000",
              borderWidth: "2px",
              color: "#ffffff",
              fontFamily: "'Alfa Slab One', cursive",
              fontSize: "1.2rem",
              textTransform: "uppercase",
              padding: "0.25rem 2px",
              outline: "none !important",
              boxShadow: "none !important",
              minWidth: "auto",
              width: "auto",
              ":focus": {
                outline: "none !important",
                boxShadow: "none !important",
              },
              ":hover": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            }),
            input: (base) => ({
              ...base,
              color: "#ffffff",
              fontFamily: "'Alfa Slab One', cursive",
              textTransform: "uppercase",
              outline: "none",
              boxShadow: "none",
            }),
            placeholder: (base) => ({
              ...base,
              color: "#ffffff",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected ? "#000000" : state.isFocused ? "#333333" : "#000000",
              color: "#ffffff",
              fontFamily: "'Alfa Slab One', cursive",
              textTransform: "uppercase",
              fontSize: "1rem",
              cursor: "pointer",
            }),
            menuList: (base) => ({
              ...base,
              backgroundColor: "#000000",
              outline: "none !important",
              boxShadow: "none !important",
              border: "2px solid #000000",
            }),
            singleValue: (base) => ({
              ...base,
              color: "#ffffff",
              fontFamily: "'Alfa Slab One', cursive",
              textTransform: "uppercase",
            }),
            clearIndicator: (base) => ({
              ...base,
              color: "#ffffff",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: "#ffffff",
            }),
            indicatorSeparator: (base) => ({
              ...base,
              backgroundColor: "#ffffff",
            }),
          }}
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
