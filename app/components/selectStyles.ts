import type { StylesConfig } from "react-select"

export const rdr2SelectStyles: StylesConfig<any, false> = {
  control: (base) => ({
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
}
