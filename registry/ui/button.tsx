import * as React from "react"

import { cn } from "@/lib/utils"

type Variant = "default" | "outline" | "ghost"
type Size = "default" | "sm" | "lg"

const variants: Record<Variant, string> = {
  default: "bg-foreground text-background hover:bg-foreground/90",
  outline: "border border-foreground/20 hover:bg-foreground/5",
  ghost: "hover:bg-foreground/5",
}

const sizes: Record<Size, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3 text-xs",
  lg: "h-10 px-6",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
