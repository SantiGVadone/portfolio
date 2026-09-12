import { supabase, isSupabaseMode } from '../lib/supabase'

const DEMO_USER_KEY = 'vadonedev-blog-demo-user'

const readDemoUser = () => {
  try {
    const raw = localStorage.getItem(DEMO_USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const writeDemoUser = (user) => {
  localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user))
}

const clearDemoUser = () => {
  localStorage.removeItem(DEMO_USER_KEY)
}

const createDemoUser = () => {
  return {
    id: 'demo-user',
    email: 'demo@vadonedev.ar',
    user_metadata: {
      full_name: 'Usuario Demo',
      avatar_url: null,
    },
  }
}

export const getUserFullName = (user) => {
  if (!user) return ''
  return (
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split('@')[0] ||
    ''
  )
}

export const getUserAvatar = (user) => user?.user_metadata?.avatar_url || null

export const getCurrentUser = async () => {
  if (!isSupabaseMode) return readDemoUser()

  const { data, error } = await supabase.auth.getUser()
  if (error) return null
  return data.user
}

export const signInWithGoogle = async () => {
  if (!isSupabaseMode) {
    const demoUser = createDemoUser()
    writeDemoUser(demoUser)
    return { error: null, user: demoUser }
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/blog`,
    },
  })

  return { error, user: data?.user ?? null }
}

export const signOut = async () => {
  if (!isSupabaseMode) {
    clearDemoUser()
    return { error: null }
  }
  return supabase.auth.signOut()
}

export const subscribeToAuth = (callback) => {
  if (!isSupabaseMode) return () => {}

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null)
  })

  return () => subscription.unsubscribe()
}