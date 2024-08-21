import { use, useEffect, useState } from "react";
import { getProducts, supabase } from "./supabase";
import { User } from "@supabase/supabase-js";
import { Product } from "@/types";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return user;
}

export function useProduct() {
  const user = useUser();
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    if (user) {
      getProducts().then((products) => {
        setData(products);
      });
    }
  }, [user]);

  return user ? (data as Product[]) : null;
}
