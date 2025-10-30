import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Gallery images will be published soon.',
}

export default function GalleryPage() {
  return (
    <section className="section space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Gallery</p>
        <h1 className="text-3xl font-semibold text-slate-900">Gallery coming soon</h1>
      </header>
      <p className="text-slate-600">
        Visual highlights from Ajit Manochetana Trust will be added here after the next photoshoot and curation.
      </p>
    </section>
  )
}
