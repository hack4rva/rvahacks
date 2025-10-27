-- Create email_signups table
CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  interest TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (public signup form)
CREATE POLICY "Anyone can sign up"
ON public.email_signups
FOR INSERT
WITH CHECK (true);

-- Only allow viewing own signup (optional, for future features)
CREATE POLICY "Users can view all signups"
ON public.email_signups
FOR SELECT
USING (true);

-- Create index for email lookups
CREATE INDEX idx_email_signups_email ON public.email_signups(email);
CREATE INDEX idx_email_signups_created_at ON public.email_signups(created_at DESC);