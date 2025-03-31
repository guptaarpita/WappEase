/*
  # Create enquiries table for business enquiries

  1. New Tables
    - `enquiries`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `contact_person` (text)
      - `email` (text)
      - `phone` (text)
      - `business_type` (text)
      - `package` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `enquiries` table
    - Add policy for inserting new enquiries
    - Add policy for viewing enquiries (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_type text NOT NULL,
  package text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can insert enquiries"
  ON enquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view enquiries"
  ON enquiries
  FOR SELECT
  TO authenticated
  USING (true);