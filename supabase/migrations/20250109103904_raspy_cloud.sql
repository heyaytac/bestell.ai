/*
  # Initial Schema Setup for Restaurant Order Management

  1. New Tables
    - `restaurants`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `owner_id` (uuid, references auth.users)
      - `created_at` (timestamp with timezone)
    - `orders`
      - `id` (uuid, primary key)
      - `restaurant_id` (uuid, references restaurants)
      - `items` (jsonb, required)
      - `total` (numeric, required)
      - `status` (text, required)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on all tables
    - Add policies for restaurant owners to manage their restaurants
    - Add policies for restaurant owners to manage their orders
*/

-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  owner_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id uuid REFERENCES restaurants NOT NULL,
  items jsonb NOT NULL,
  total numeric NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policies for restaurants
CREATE POLICY "Users can create their own restaurants"
  ON restaurants
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can view their own restaurants"
  ON restaurants
  FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id);

CREATE POLICY "Users can update their own restaurants"
  ON restaurants
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id);

-- Policies for orders
CREATE POLICY "Restaurant owners can view their orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM restaurants
    WHERE restaurants.id = orders.restaurant_id
    AND restaurants.owner_id = auth.uid()
  ));

CREATE POLICY "Restaurant owners can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM restaurants
    WHERE restaurants.id = orders.restaurant_id
    AND restaurants.owner_id = auth.uid()
  ));

CREATE POLICY "Restaurant owners can update their orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM restaurants
    WHERE restaurants.id = orders.restaurant_id
    AND restaurants.owner_id = auth.uid()
  ));