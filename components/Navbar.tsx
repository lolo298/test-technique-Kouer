"use client";
import { useUser } from "@/utils/hooks";
import { supabase } from "@/utils/supabase";
import Image from "next/image";

function Navbar() {
  const user = useUser();

  return (
    <nav className="h-1/6 flex gap-64  justify-between items-center  p-4">
      <div className="flex-1 h-full relative">
        <Image src="/logo.svg" alt="logo" fill />
      </div>

      <div className="flex flex-[2] justify-between bg-white h-16 p-4 rounded-lg border-slate-800 border">
        <input
          type="text"
          placeholder="Quel produit recherchez-vous ?"
          className=" placeholder:text-primary w-full"
        />
        <Image src="/search.svg" alt="search" width={32} height={32} />
      </div>

      {!user ? (
        <a className="flex flex-1 gap-4 items-center h-full" href="/login">
          <span className="relative h-1/2 flex-1">
            <Image src="/user.svg" alt="user" fill />
          </span>
          <span className="flex-[5]">Identifiez-vous</span>
        </a>
      ) : (
        <button
          className="flex flex-1 gap-4 items-center h-full"
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.href = "/login";
          }}
        >
          <span className="relative h-1/2 flex-1">
            <Image src="/user.svg" alt="user" fill />
          </span>
          <span className="flex-[5]">Se déconnecter</span>
        </button>
      )}
    </nav>
  );
}

export default Navbar;
