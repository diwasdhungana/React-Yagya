"use client";
import { useState } from "react";
import MainInputSection from "./(collective)/MainInputSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const [mianInput, setMainInput] = useState("");
  const router = useRouter();

  const onSubmit = (input: string) => {
    console.log("something must be done here.", input);
    setMainInput(input);
    router.push("/chat");
  };

  return (
    <main className="flex-grow">
      <MainInputSection onSubmit={onSubmit} />
    </main>
  );
}
