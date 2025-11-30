import Image from "next/image";
import React from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "Header" }: HeaderProps) {
  return (
    <header className="p-4 flex justify-between items-center shadow-md bg-[#005239] text-[#F5F5F5]">
      <div className="flex items-center gap-3">
        <Image
          src="/logo/gmugoldv.svg"
          alt="logo"
          width={200}
          height={80}
          priority
        />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  );
}
