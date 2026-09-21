import Card from "../components/Card"

const FONTS: { family: string; weight?: number; style?: string; note: string }[] = [
  { family: "RDRLino", note: "Currently used site-wide (nav, titles, buttons)" },
  { family: "Redemption", note: "RDR2 logo-style script font" },
  { family: "Chalet", note: "Clean condensed sans" },
  { family: "HapnaSlabSerif", note: "Slab serif" },
  { family: "HelveticaNowText", note: "Body text sans" },
  { family: "HelveticaNowText", weight: 700, note: "Body text sans, bold" },
  { family: "HelveticaNowDisplay", weight: 700, note: "Display sans, bold" },
  { family: "NeueHelveticaPaneuropean", note: "Neue Helvetica" },
  { family: "NeueHelveticaPaneuropean", weight: 700, style: "italic", note: "Neue Helvetica, bold italic" },
  { family: "UniversCondensed", note: "Univers, condensed" },
  { family: "UniversCondensed", style: "italic", note: "Univers, condensed italic" },
  { family: "UniversBoldCondensed", note: "Univers, bold condensed" },
  { family: "UniversBoldCondensed", style: "italic", note: "Univers, bold condensed italic" },
]

export default function FontPreviewPage() {
  return (
    <Card title="Font Preview" className="card-wide">
      <div className="font-preview-list">
        {FONTS.map((f, i) => (
          <div className="font-preview-row" key={`${f.family}-${f.weight ?? 400}-${f.style ?? "normal"}-${i}`}>
            <div className="font-preview-meta">
              <span className="font-preview-name">{f.family}</span>
              <span className="font-preview-sub">
                weight {f.weight ?? 400}
                {f.style ? `, ${f.style}` : ""} &mdash; {f.note}
              </span>
            </div>
            <div
              className="font-preview-sample"
              style={{
                fontFamily: `'${f.family}', sans-serif`,
                fontWeight: f.weight ?? 400,
                fontStyle: f.style ?? "normal",
              }}
            >
              The Quick Brown Fox 0123456789
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
