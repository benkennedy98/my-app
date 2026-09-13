interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "tab" | "stepper"
  active?: boolean
}

export default function Button({ variant = "tab", active = false, className = "", ...props }: ButtonProps) {
  const variantClass = variant === "tab" ? "outfit-tab" : "stepper-btn"

  return (
    <button
      className={`${variantClass} ${active ? "active" : ""} ${className}`.trim()}
      {...props}
    />
  )
}
