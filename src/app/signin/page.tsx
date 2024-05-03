"use client";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Ir Dashboard
      </button>
    </>
  );
}
