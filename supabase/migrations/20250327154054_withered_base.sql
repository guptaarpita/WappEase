/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting new contacts
    - Add policy for viewing contacts
*/

-- Create extension if it doesn't exist
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Wrap table creation in a DO block for better error handling
DO $$ 
BEGIN
  -- Create the contacts table if it doesn't exist
  CREATE TABLE IF NOT EXISTS contacts (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
  );

  -- Enable RLS
  ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

  -- Create policies if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contacts' AND policyname = 'Anyone can insert contacts'
  ) THEN
    CREATE POLICY "Anyone can insert contacts"
      ON contacts
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contacts' AND policyname = 'Only authenticated users can view contacts'
  ) THEN
    CREATE POLICY "Only authenticated users can view contacts"
      ON contacts
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;

EXCEPTION
  WHEN others THEN
    -- Log the error (Supabase will capture this in its logs)
    RAISE NOTICE 'Error creating contacts table: %', SQLERRM;
    -- Re-raise the error
    RAISE;
END $$;