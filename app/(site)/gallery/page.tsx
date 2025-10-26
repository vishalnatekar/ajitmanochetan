import type { Metadata } from 'next'

const albums = [
  {
    title: 'Classroom Moments',
    description: 'Learning stations, therapy sessions, and classroom collaborations.',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1698765432/sample.jpg',
      'https://res.cloudinary.com/demo/image/upload/v1698765433/bike.jpg',
      'https://res.cloudinary.com/demo/image/upload/v1698765434/flower.jpg',
    ],
  },
  {
    title: 'Community & Events',
    description: 'Celebrations, awareness walks, and volunteer engagement.',
    images: [
      'https://res.cloudinary.com/demo/image/upload/v1698765435/balloons.jpg',
      'https://res.cloudinary.com/demo/image/upload/v1698765436/smiling.jpg',
      'https://res.cloudinary.com/demo/image/upload/v1698765437/dog.jpg',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo highlights from Ajita Manochetana programmes, events, and daily life.',
}

export default function GalleryPage() {
  return (
    <section className="section space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Gallery</p>
        <h1 className="text-3xl font-semibold text-slate-900">Snapshots from our classrooms and community</h1>
        <p className="text-slate-600">
          Albums will soon sync with the CMS. For now, explore sample photos hosted on Cloudinary.
        </p>
      </header>
      <div className="space-y-12">
        {albums.map((album) => (
          <article key={album.title} className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">{album.title}</h2>
              <p className="max-w-2xl text-sm text-slate-600">{album.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {album.images.map((image, index) => (
                <figure key={image} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <img src={image} alt={`${album.title} ${index + 1}`} loading="lazy" className="h-48 w-full object-cover" />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
