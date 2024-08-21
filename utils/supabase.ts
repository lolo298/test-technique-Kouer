import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }

  return data;
}
