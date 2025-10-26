import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

type FrontMatter = Record<string, any>

type MarkdownResult = {
  data: FrontMatter
  html: string
}

export function readMarkdown(filePath: string): MarkdownResult {
  const full = path.join(process.cwd(), filePath)
  const raw = fs.readFileSync(full, 'utf8')
  const { data, content } = matter(raw)
  const html = marked.parse(content, { async: false }) as string
  return { data, html }
}

export function readCollection(dir: string) {
  const full = path.join(process.cwd(), dir)
  const files = fs.readdirSync(full).filter((file) => file.endsWith('.md'))

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const { data } = readMarkdown(path.join(dir, file))
      return { slug, data }
    })
    .sort((a, b) => {
      const dateA = new Date(a.data.date ?? 0).getTime()
      const dateB = new Date(b.data.date ?? 0).getTime()
      return dateB - dateA
    })
}
