import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo stories will be added soon.',
}

export default function GalleryPage() {
  return (
    <section className="section space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Gallery</p>
        <h1 className="text-3xl font-semibold text-slate-900">Visual memories coming soon</h1>
      </header>
      <p className="text-slate-600">
        We are curating photographs from health camps, Vikas School classrooms, and community programmes. Please check back soon or contact the trust office to request specific visuals for CSR and awareness needs.
      </p>
    </section>
  )
}
