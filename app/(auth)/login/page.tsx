"use client";

import Input from "@/components/Input";
import PasswordInput from "@/components/Password";
import { checkEmail, checkPassword } from "@/utils";
import { supabase } from "@/utils/supabase";
import { useRef, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2 className="text-4xl m-8">Connexion</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);

            if (!checkEmail(e.target.value)) {
              e.target.classList.add("border-red-500");
              e.target.classList.remove("border-transparent");
            } else {
              e.target.classList.remove("border-red-500");
              e.target.classList.add("border-transparent");
            }
          }}
          placeholder="Adresse email*"
          required
        />
        <PasswordInput
          className="border border-transparent rounded-md"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);

            if (!checkPassword(e.target.value)) {
              e.target.classList.add("border-red-500");
              e.target.classList.remove("border-transparent");
            } else {
              e.target.classList.remove("border-red-500");
              e.target.classList.add("border-transparent");
            }
          }}
          placeholder="Mot de passe*"
          required
        />
        <button
          className=" bg-primary px-4 py-2 rounded-lg"
          onClick={async () => {
            const validEmail = checkEmail(email);
            const validPassword = checkPassword(password);

            if (validEmail && validPassword) {
              const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
              });

              if (error) {
                setError(error.message);
              } else {
                window.location.href = "/";
              }
            }
          }}
        >
          Se connecter
        </button>
        <a href="/register" className="text-slate-400">
          je n&apos;ai pas encore de compte
        </a>
        <span className="text-red-500">{error}</span>
      </div>
    </>
  );
}

export default Login;
