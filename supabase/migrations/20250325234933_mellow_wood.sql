/*
  # Add brand voice column to revived content

  1. Changes
    - Add brand_voice_id column to revived_content table
    - Add foreign key constraint to brand_voice_profiles table
    - Add index for better query performance
*/

-- Add brand_voice_id column
ALTER TABLE revived_content 
ADD COLUMN IF NOT EXISTS brand_voice_id UUID REFERENCES brand_voice_profiles(id);

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_revived_content_brand_voice 
ON revived_content(brand_voice_id);

-- Add brand_voice jsonb column for storing brand voice details
ALTER TABLE revived_content
ADD COLUMN IF NOT EXISTS brand_voice jsonb;

-- Create index for brand_voice jsonb column
CREATE INDEX IF NOT EXISTS idx_revived_content_brand_voice_gin 
ON revived_content USING gin(brand_voice);