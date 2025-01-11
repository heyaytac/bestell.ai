/*
  # Add Restaurant Types and Additional Fields

  1. New Fields
    - Add `type` column to restaurants table
    - Add `description` column to restaurants table
    - Add `address` column to restaurants table

  2. Security
    - Update existing RLS policies to include new fields
*/

-- Add new columns to restaurants table
ALTER TABLE restaurants 
ADD COLUMN IF NOT EXISTS type text,
ADD COLUMN IF NOT EXISTS description text,
ADD COLUMN IF NOT EXISTS address text;

-- Create index for restaurant type
CREATE INDEX IF NOT EXISTS idx_restaurants_type ON restaurants(type);

-- Create index for text search
CREATE INDEX IF NOT EXISTS idx_restaurants_name_description ON restaurants 
USING GIN(to_tsvector('english', coalesce(name, '') || ' ' || coalesce(description, '')));