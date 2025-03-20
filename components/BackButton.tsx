"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackButton({ icon, className }: { icon: string; className?: string }) {
  const router = useRouter();
  const handleClick = () => router.back();

  return (
    <button onClick={handleClick} className={`app-btn app-btn--with-icon ${className}`}>
      <Image src={`/${icon}.svg`} alt="back" width={24} height={24} />
    </button>
  );
}
