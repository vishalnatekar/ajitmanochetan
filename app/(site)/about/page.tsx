import type { Metadata } from 'next'
import { readMarkdown } from '../../components/md'

const markdown = readMarkdown('content/pages/about.md')

export const metadata: Metadata = {
  title: markdown.data.title ?? 'About',
  description:
    'Discover the story, mission, and impact of Ajita Manochetana in delivering holistic special education and therapy since 1997.',
}

export default function AboutPage() {
  return (
    <article className="section space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">About</p>
        <h1 className="text-3xl font-semibold text-slate-900">{markdown.data.title}</h1>
      </header>
      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </article>
  )
}
