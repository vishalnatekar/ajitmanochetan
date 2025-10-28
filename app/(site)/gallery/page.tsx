import type { Metadata } from 'next'

const photos = [
  {
    src: '/gallery/cover-25-years.png',
    alt: 'Collage highlighting 25 fruitful years of Ajit Manochetana Trust',
    caption: '25 fruitful years of service in the fields of mental health and education of special children.',
  },
  {
    src: '/gallery/governing-council.png',
    alt: 'Governing council and community supporters of Ajit Manochetana Trust',
    caption: 'Trust leadership, well-wishers, and community programmes supporting families in Sirsi.',
  },
]

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Snapshots from Ajit Manochetana Trust events and impact materials.',
}

export default function GalleryPage() {
  return (
    <section className="section space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Gallery</p>
        <h1 className="text-3xl font-semibold text-slate-900">Highlights from the trust&apos;s journey</h1>
        <p className="text-slate-600">
          Explore milestone visuals celebrating learners, caregivers, and the well-wishers who have nurtured Ajit Manochetana Trust.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" className="h-auto w-full" />
            <figcaption className="px-4 py-3 text-sm text-slate-600">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
