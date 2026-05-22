import * as React from "react"

import { cn } from "@/lib/utils"

type Variant = "default" | "secondary" | "outline" | "destructive"

const variants: Record<Variant, string> = {
  default: "bg-foreground text-background",
  secondary: "bg-block text-foreground/80",
  outline: "border border-foreground/20 text-foreground",
  destructive: "bg-destructive text-white",
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
