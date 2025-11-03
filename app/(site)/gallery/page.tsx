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
          {photos.flatMap((photo) => {
            const rawImages = Array.isArray(photo.data.images)
              ? photo.data.images
              : photo.data.images
                ? [photo.data.images]
                : []
            const imageList =
              rawImages.length > 0
                ? rawImages
                : photo.data.image
                  ? [photo.data.image]
                  : []

            const fallbackCaption = (photo.data.description as string) ?? (photo.data.title as string)

            return imageList
              .map((image, index) => {
                const src = typeof image === 'string' ? image : image?.image
                if (!src) return null

                const perImageCaption =
                  typeof image === 'object' && image !== null && 'caption' in image ? (image.caption as string) : undefined
                const caption = perImageCaption ?? fallbackCaption
                const alt =
                  typeof image === 'object' && image !== null && 'alt' in image && image.alt
                    ? (image.alt as string)
                    : (photo.data.title as string) ??
                      (caption ? `Gallery image: ${caption}` : `Gallery image ${index + 1}`)

                return (
                  <figure
                    key={`${photo.slug}-${index}`}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
                  >
                    <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
                    {caption ? <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption> : null}
                  </figure>
                )
              })
              .filter(Boolean)
          })}
        </div>
      )}
    </section>
  )
}
