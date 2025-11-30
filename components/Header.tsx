import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";

interface HeaderProps {
  logoSrc?: string;
  onSettingsClick?: () => void;
  settingsAriaLabel?: string;
}

export default function Header({
  onSettingsClick,
  settingsAriaLabel = "Open settings",
}: HeaderProps) {
  const handleSettingsClick = () => {
    if (onSettingsClick) return onSettingsClick();
    console.log("Settings Clicked");
  };
  return (
    <header className="p-4 flex items-center justify-between shadow-md bg-[#005239] text-[#F5F5F5]">
      <div className="flex items-center gap-3">
        <Image
          src="/logo/gmugoldv.svg"
          alt="Logo"
          width={144}
          height={48}
          priority
        />
        <h1 className="text-2xl font-bold"></h1>
      </div>
      <div className="flex items-center">
        <Link href="/" aria-label="Go to home" className="inline-block"></Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleSettingsClick}
          aria-label={settingsAriaLabel}
          className="p-2 rounded hover:bg-[#2A2A40] transition"
        >
          <FiSettings size={28} />
        </button>
      </div>
    </header>
  );
}
