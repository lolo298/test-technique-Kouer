import { useState, type InputHTMLAttributes } from "react";
import Input from "./Input";
import Image from "next/image";

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput({ ...args }: PasswordProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="flex justify-between">
      <Input {...args} type={visible ? "text" : "password"} />
      <button className="" onClick={() => setVisible((prev) => !prev)}>
        <Image
          src={visible ? "/eye.svg" : "/eyeClosed.svg"}
          alt="eye"
          width={24}
          height={24}
        />
      </button>
    </span>
  );
}
