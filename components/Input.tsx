import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...args }: InputProps) {
  return (
    <input
      className="border border-transparent rounded-md"
      type="password"
      {...args}
    />
  );
}
