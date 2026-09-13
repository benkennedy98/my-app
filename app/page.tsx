import Link from "next/link"
import Card from "./components/Card"

export default function Home() {
  return (
    <Card title="RDR2" className="home-page">
      <div className="landing-links">
        <Link href="/hunting-guide" className="landing-link">
          Hunting Guide
        </Link>
        <Link href="/trapper-progress" className="landing-link">
          Trapper Progress
        </Link>
      </div>
    </Card>
  )
}
