import { type getProducts } from "./utils/supabase";

export type Product = Awaited<ReturnType<typeof getProducts>>[number];