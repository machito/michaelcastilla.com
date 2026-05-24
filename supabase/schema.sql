-- projects table
create table if not exists projects (
  id          integer primary key,
  active      boolean not null default true,
  project     text    not null,
  brands      text,
  logo        text,
  highlights  text[],
  tags        text[],
  devices     text[],
  url         text,
  online      boolean not null default true,
  slug        text    not null unique
);

-- dashboard stats table
create table if not exists dashboard (
  id     integer primary key,
  active boolean not null default true,
  stat   text    not null,
  label  text    not null,
  title  text    not null
);

-- contact form submissions
create table if not exists contact (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  created_at timestamptz not null default now()
);

-- allow anonymous reads for projects and dashboard
alter table projects  enable row level security;
alter table dashboard enable row level security;
alter table contact   enable row level security;

create policy "public read projects"  on projects  for select using (true);
create policy "public read dashboard" on dashboard for select using (true);
create policy "public insert contact" on contact   for insert with check (true);
