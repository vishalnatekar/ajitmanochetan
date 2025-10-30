import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { readCollection, readMarkdown } from '../../../components/md'

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return readCollection('content/news').map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  try {
    const post = readMarkdown(`content/news/${params.slug}.md`)
    return {
      title: post.data.title as string,
      description:
        (post.data.summary as string) ??
        'Updates from Ajit Manochetana Trust supporting inclusive education and mental health services.',
    }
  } catch (error) {
    return {
      title: 'News',
    }
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  let post
  try {
    post = readMarkdown(`content/news/${params.slug}.md`)
  } catch (error) {
    notFound()
  }

  if (!post) {
    notFound()
  }

  const date = post.data.date
    ? new Date(post.data.date as string).toLocaleDateString('en-IN', { dateStyle: 'long' })
    : undefined

  return (
    <article className="section space-y-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/news" className="text-brand-700">
          ← Back to news
        </Link>
      </nav>
      <header className="space-y-2">
        {date ? <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{date}</p> : null}
        <h1 className="text-3xl font-semibold text-slate-900">{post.data.title as string}</h1>
        {post.data.summary ? <p className="text-slate-600">{post.data.summary as string}</p> : null}
      </header>
      {post.data.cover ? (
        <img
          src={post.data.cover as string}
          alt={`Cover image for ${post.data.title}`}
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-sm"
        />
      ) : null}
      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
