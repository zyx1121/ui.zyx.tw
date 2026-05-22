import { Button } from "@/registry/ui/button"

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-16">
        <h1 className="font-mono text-2xl font-semibold tracking-tight">
          ui.zyx.tw
        </h1>
        <p className="mt-2 text-sm text-foreground/60">
          Loki's component registry. Copy in, own outright.
        </p>
      </header>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">Button</h2>
          <code className="text-xs text-foreground/60">
            bunx shadcn@latest add @zyx1121/button
          </code>
        </div>

        <div className="rounded-xl bg-block p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="mt-6">
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
