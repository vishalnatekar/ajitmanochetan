import type { Metadata } from 'next'
import { readCollection } from '../../components/md'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Snapshots from Ajit Manochetana Trust events and impact materials.',
}

export default function GalleryPage() {
  const photos = readCollection('content/gallery')

  return (
    <section className="section space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Gallery</p>
        <h1 className="text-3xl font-semibold text-slate-900">Highlights from the trust&apos;s journey</h1>
        <p className="text-slate-600">
          Visual memories from programmes, therapy camps, and community celebrations will appear as entries are published.
        </p>
      </header>
      {photos.length === 0 ? (
        <p className="text-slate-600">
          No gallery entries yet. Use the admin panel to upload images with captions and they will be displayed here automatically.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {photos.map((photo) => (
            <figure
              key={photo.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              {photo.data.image ? (
                <img
                  src={photo.data.image as string}
                  alt={(photo.data.title as string) ?? 'Gallery image'}
                  loading="lazy"
                  className="h-auto w-full"
                />
              ) : null}
              {(photo.data.description || photo.data.title) && (
                <figcaption className="px-4 py-3 text-sm text-slate-600">
                  {(photo.data.description as string) ?? (photo.data.title as string)}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}
