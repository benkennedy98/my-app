interface CardProps {
  title: string
  children?: React.ReactNode
  className?: string
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  )
}
