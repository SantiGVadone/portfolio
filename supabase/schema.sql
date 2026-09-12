-- ============================================================
-- Blog de VadoneDev — Esquema para Supabase
-- Corré este script en: Supabase Dashboard → SQL Editor
-- ============================================================

-- Publicaciones / comentarios del blog
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_email text not null,
  relation text not null
    check (relation in ('Colega / Compañero', 'Cliente', 'Reclutador/a', 'Amigo / Conocido/a', 'Otro')),
  title text not null,
  content text not null,
  created_at timestamptz not null default now()
);

comment on table public.blog_posts is 'Posts y comentarios publicados en el blog de VadoneDev';

-- Índice para listar por fecha (más recientes primero)
create index if not exists blog_posts_created_at_idx
  on public.blog_posts (created_at desc);

-- Seguridad a nivel de fila (RLS)
alter table public.blog_posts enable row level security;

-- Cualquiera puede leer los posts publicados
create policy "blog_posts_read_public"
  on public.blog_posts
  for select
  to anon, authenticated
  using (true);

-- Solo usuarios autenticados pueden publicar, y solo con su propio email
-- (el email proviene del usuario autenticado vía Google, no del cliente)
create policy "blog_posts_insert_authenticated"
  on public.blog_posts
  for insert
  to authenticated
  with check (author_email = auth.jwt() ->> 'email');

-- ============================================================
-- (Opcional) DATOS DE EJEMPLO
-- Descomentá si querés un post de muestra para probar la lectura.
-- ============================================================
-- insert into public.blog_posts (author_name, author_email, relation, title, content)
-- values
--   ('Santiago Vadone', 'santiagogabrielvadone@outlook.com', 'Otro', '¡Bienvenido al blog!',
--    'Este es el primer post de prueba. Cuando estés listo, publicá el tuyo logueándote con Google.');