"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import { Hero } from "@/registry/blocks/hero"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const trigger = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
  }

  return (
    <main className="mx-auto max-w-2xl space-y-16 px-6 py-24">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="font-mono text-2xl font-semibold tracking-tight">
            ui.zyx.tw
          </h1>
          <p className="mt-2 text-sm text-foreground/60">
            Loki's component registry. Copy in, own outright.
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </header>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">Button</h2>
          <code className="text-xs text-foreground/60">
            bunx shadcn@latest add @zyx1121/button
          </code>
        </div>

        <div className="space-y-6 rounded-xl bg-block p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button loading={loading} onClick={trigger}>
              Trigger async
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">Badge</h2>
          <code className="text-xs text-foreground/60">
            bunx shadcn@latest add @zyx1121/badge
          </code>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-xl bg-block p-8">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">Hero</h2>
          <code className="text-xs text-foreground/60">
            bunx shadcn@latest add @zyx1121/hero
          </code>
        </div>

        <Hero
          title="Copy in, own outright."
          description="A small registry of pieces I actually ship. Pill buttons, soft blocks, dark mode that just works."
        >
          <Button>Get started</Button>
          <Button variant="outline">Read source</Button>
        </Hero>
      </section>
    </main>
  )
}
