import * as React from "react"

import { cn } from "@/lib/utils"

export interface HeroProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
}

export function Hero({
  title,
  description,
  children,
  className,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn(
        "rounded-xl bg-block px-8 py-12 sm:px-12 sm:py-16",
        className,
      )}
      {...props}
    >
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-prose text-base text-foreground/70 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children ? (
        <div className="mt-8 flex flex-wrap gap-3">{children}</div>
      ) : null}
    </section>
  )
}
