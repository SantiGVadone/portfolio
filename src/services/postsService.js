import { isSupabaseMode, supabase } from '../lib/supabase'

const LOCAL_STORAGE_KEY = 'vadonedev-blog-posts'

const SEED_POSTS = [
  {
    id: 'seed-1',
    author_name: 'Santiago Vadone',
    author_email: 'santiagogabrielvadone@outlook.com',
    relation: 'Otro',
    title: '¡Bienvenido al blog!',
    content:
      'Este es el blog de VadoneDev. Dejá tu comentario o contame qué te gustaría ver por acá. Logueate con Google para publicar.',
    created_at: '2026-08-01T12:00:00.000Z',
  },
]

const readLocalPosts = () => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const writeLocalPosts = (posts) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts))
}

export const fetchPosts = async () => {
  if (isSupabaseMode) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    return { data: data ?? [], error }
  }

  return { data: [...SEED_POSTS, ...readLocalPosts()], error: null }
}

export const createPost = async ({ authorName, authorEmail, relation, title, content }) => {
  if (isSupabaseMode) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        author_name: authorName.trim(),
        author_email: authorEmail,
        relation,
        title: title.trim(),
        content: content.trim(),
      })
      .select()
      .single()

    return { data, error }
  }

  const post = {
    id: crypto.randomUUID(),
    author_name: authorName.trim(),
    author_email: authorEmail,
    relation,
    title: title.trim(),
    content: content.trim(),
    created_at: new Date().toISOString(),
  }

  const posts = [post, ...readLocalPosts()]
  writeLocalPosts(posts)

  return { data: post, error: null }
}