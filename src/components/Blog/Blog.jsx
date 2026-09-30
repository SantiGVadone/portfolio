import { useEffect, useState } from 'react'
import {
  getUserAvatar,
  getUserFullName,
  getCurrentUser,
  signInWithGoogle,
  signOut,
  subscribeToAuth,
} from '../../services/authService'
import { fetchPosts, createPost } from '../../services/postsService'
import { isSupabaseMode } from '../../lib/supabase'
import './Blog.css'

const RELATIONS = ['Colleague', 'Client', 'Recruiter', 'Friend / Acquaintance', 'Other']

const EMPTY_FORM = { fullName: '', relation: '', postTitle: '', postContent: '' }

const GoogleIcon = () => (
  <svg viewBox='0 0 48 48' className='google-icon' aria-hidden='true'>
    <path
      fill='#EA4335'
      d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
    />
    <path
      fill='#4285F4'
      d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
    />
    <path
      fill='#FBBC05'
      d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
    />
    <path
      fill='#34A853'
      d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
    />
  </svg>
)

const formatDate = (iso) => {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

const getInitials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

export const Blog = () => {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [postsLoading, setPostsLoading] = useState(true)
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    let active = true

    const loadAuth = async () => {
      const currentUser = await getCurrentUser()
      if (!active) return
      setUser(currentUser)
      setAuthLoading(false)
    }

    const unsubscribe = subscribeToAuth((nextUser) => {
      if (active) setUser(nextUser)
    })

    loadAuth()

    return () => {
      active = false
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    let active = true

    const loadPosts = async () => {
      const { data, error: loadError } = await fetchPosts()
      if (!active) return
      if (loadError) {
        setError('Could not load posts. Please try again in a moment.')
      } else {
        setPosts(data)
      }
      setPostsLoading(false)
    }

    loadPosts()

    return () => {
      active = false
    }
  }, [])

  const handleGoogleSignIn = async () => {
    setSigningIn(true)
    setError(null)
    const { error: signInError, user: demoUser } = await signInWithGoogle()
    setSigningIn(false)

    if (signInError) {
      setError('Could not sign in with Google. Please try again.')
      return
    }

    if (!isSupabaseMode && demoUser) {
      setUser(demoUser)
    }
  }

  const handleSignOut = async () => {
    setError(null)
    await signOut()
    setUser(null)
    setForm(EMPTY_FORM)
  }

  const handleInputChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const resolvedFullName = form.fullName.trim() || getUserFullName(user)

  const canPublish =
    user &&
    resolvedFullName &&
    form.relation &&
    form.postTitle.trim() &&
    form.postContent.trim()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setSuccess(null)

    if (!user) {
      setError('Sign in with Google to publish.')
      return
    }

    setSubmitting(true)
    const { error: createError } = await createPost({
      authorName: resolvedFullName,
      authorEmail: user.email,
      relation: form.relation,
      title: form.postTitle,
      content: form.postContent,
    })
    setSubmitting(false)

    if (createError) {
      setError('Could not publish post. Please try again.')
      return
    }

    const { data, error: reloadError } = await fetchPosts()
    if (!reloadError) setPosts(data)

    setForm({ ...EMPTY_FORM, fullName: getUserFullName(user) })
    setSuccess('¡Publicado! Gracias por participar.')
  }

  const avatar = user ? getUserAvatar(user) : null
  const initials = user ? getInitials(getUserFullName(user)) : ''

  return (
    <main className='blog'>
      <section className='blog-section'>
        <header className='blog-hero'>
          <span className='blog-eyebrow'>Blog de VadoneDev</span>
          <h1 className='blog-title'>Comentarios y novedades</h1>
          <p className='blog-intro'>
            Leave a comment, share your experience, or suggest topics. Sign in with
            Google and publish your post.
          </p>
        </header>

        {!isSupabaseMode && (
          <p className='blog-demo-note'>
            Demo mode: posts are stored in your browser. Configure Supabase (see{' '}
            <code>.env.example</code> and <code>supabase/schema.sql</code>) to share them.
          </p>
        )}

        <section className='blog-card' aria-labelledby='publish-title'>
          <h2 id='publish-title' className='blog-card-title'>
            Publicar
          </h2>

          {error && (
            <div className='blog-alert blog-alert-error' role='alert'>
              {error}
            </div>
          )}
          {success && (
            <div className='blog-alert blog-alert-success' role='status'>
              {success}
            </div>
          )}

          {!user && (
            <div className='blog-login'>
              <p className='blog-login-text'>
                {authLoading
                  ? 'Loading session…'
                  : 'You need to sign in with your Google account to publish.'}
              </p>
              <button
                type='button'
                className='btn-google'
                onClick={handleGoogleSignIn}
                disabled={authLoading || signingIn}
              >
                <GoogleIcon />
                {signingIn ? 'Signing in…' : 'Sign in with Google'}
              </button>
            </div>
          )}

          {user && (
            <div className='blog-user'>
              {avatar ? (
                <img className='blog-user-avatar' src={avatar} alt='' />
              ) : (
                <span className='blog-user-avatar blog-user-avatar-fallback' aria-hidden='true'>
                  {initials}
                </span>
              )}
              <div className='blog-user-info'>
                <span className='blog-user-name'>{getUserFullName(user)}</span>
                <span className='blog-user-email'>{user.email}</span>
              </div>
              <button type='button' className='btn-signout' onClick={handleSignOut}>
                Sign out
              </button>
            </div>
          )}

          <form className='blog-form' onSubmit={handleSubmit}>
            <div className='blog-form-grid'>
              <div className='blog-field'>
                <label className='blog-label' htmlFor='blog-fullname'>
                  Full name
                </label>
                <input
                  id='blog-fullname'
                  className='blog-input'
                  type='text'
                  value={resolvedFullName}
                  onChange={handleInputChange('fullName')}
                  placeholder='Tu nombre y apellido'
                  disabled={!user}
                  required
                />
              </div>

              <div className='blog-field'>
                <label className='blog-label' htmlFor='blog-relation'>
                  Relation to VadoneDev
                </label>
                <select
                  id='blog-relation'
                  className='blog-input'
                  value={form.relation}
                  onChange={handleInputChange('relation')}
                  disabled={!user}
                  required
                >
                  <option value='' disabled>
                    Select an option
                  </option>
                  {RELATIONS.map((relation) => (
                    <option key={relation} value={relation}>
                      {relation}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='blog-field'>
              <label className='blog-label' htmlFor='blog-post-title'>
                Title
              </label>
              <input
                id='blog-post-title'
                className='blog-input'
                type='text'
                value={form.postTitle}
                onChange={handleInputChange('postTitle')}
                placeholder='Title of your post'
                disabled={!user}
                required
              />
            </div>

            <div className='blog-field'>
              <label className='blog-label' htmlFor='blog-post-content'>
                Description / Comment
              </label>
              <textarea
                id='blog-post-content'
                className='blog-input blog-textarea'
                value={form.postContent}
                onChange={handleInputChange('postContent')}
                placeholder='Tell us whatever you want'
                rows='5'
                disabled={!user}
                required
              />
            </div>

            <button
              type='submit'
              className='btn-submit'
              disabled={!canPublish || submitting}
            >
              {submitting ? 'Publishing…' : 'Publish'}
            </button>
          </form>
        </section>

        <section className='blog-posts' aria-labelledby='posts-title'>
          <h2 id='posts-title' className='blog-card-title'>
            Comentarios
          </h2>

          {postsLoading && <p className='blog-empty'>Loading posts…</p>}

          {!postsLoading && posts.length === 0 && (
            <p className='blog-empty'>No posts yet. Be the first to comment!</p>
          )}

          {!postsLoading && posts.length > 0 && (
            <div className='blog-posts-list'>
              {posts.map((post) => (
                <article key={post.id} className='post-card'>
                  <header className='post-header'>
                    <h3 className='post-title'>{post.title}</h3>
                    <span className='post-relation'>{post.relation}</span>
                  </header>
                  <div className='post-meta'>
                    <span className='post-author'>{post.author_name}</span>
                    <span className='post-date'>{formatDate(post.created_at)}</span>
                  </div>
                  <p className='post-content'>{post.content}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}