import { useWatchParam } from "@/hooks/useWatchParam";
import { useRouter } from "next/router";
import React from "react";

export default function IdPage() {
  const router = useRouter();

  const id = useWatchParam("/remote/[id]");

  const goToRandom = () => {
    const randomId = (Math.random() * 100).toFixed();
    router.push(`/remote/${randomId}`);
  };

  return (
    <main>
      <h3>Selected Game from host: {id}</h3>
      <br />
    </main>
  );
}
