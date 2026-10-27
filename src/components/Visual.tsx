import type { LucideIcon } from "lucide-react"

export type VisualTone = "violet" | "mint" | "gold" | "coral"

type VisualProps = {
  icon: LucideIcon
  tone?: VisualTone
  size?: "sm" | "md" | "lg"
}

// Stand-in illustration (gradient scene with a large icon) used until real photos are available
export function Visual({ icon: Icon, tone = "violet", size = "md" }: VisualProps) {
  return (
    <div className={`visual visual--${tone} visual--${size}`} aria-hidden="true">
      <span className="visual-ring visual-ring--a" />
      <span className="visual-ring visual-ring--b" />
      <span className="visual-dots" />
      <span className="visual-tile"><Icon strokeWidth={1.5} /></span>
    </div>
  )
}

export const tones: VisualTone[] = ["violet", "mint", "gold", "coral"]
