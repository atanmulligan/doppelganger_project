# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be set up

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy your Project URL and anon/public key
3. Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 3. Create Database Tables

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create user_ids table
CREATE TABLE user_ids (
  id SERIAL PRIMARY KEY,
  prolific_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create consent_logs table
CREATE TABLE consent_logs (
  id SERIAL PRIMARY KEY,
  prolific_id TEXT,
  consent_status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create survey_responses table (for future use)
CREATE TABLE survey_responses (
  id SERIAL PRIMARY KEY,
  prolific_id TEXT NOT NULL,
  response_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE user_ids ENABLE ROW LEVEL SECURITY;
ALTER TABLE consent_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create policies for public read/write access
CREATE POLICY "Allow public read access" ON user_ids FOR SELECT USING (true);
CREATE POLICY "Allow public insert access" ON user_ids FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access" ON consent_logs FOR SELECT USING (true);
CREATE POLICY "Allow public insert access" ON consent_logs FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access" ON survey_responses FOR SELECT USING (true);
CREATE POLICY "Allow public insert access" ON survey_responses FOR INSERT WITH CHECK (true);
```

## 4. Deploy to Vercel

1. Add your environment variables in Vercel dashboard
2. Deploy your project 