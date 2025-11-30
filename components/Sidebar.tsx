import Link from "next/link";
import { FiHome, FiUser, FiLogOut } from "react-icons/fi";

interface SidebarProps {
  width?: number;
}

export default function Sidebar({ width = 240 }: SidebarProps) {
  return (
    <aside
      className="h-full bg-[#333333] text-[#F5F5F5] flex flex-col justify-between shadow-lg"
      style={{ width }}
    >
      <div className="flex flex-col">
        <Link
          href="/"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiHome size={22} />
          <span className="text-md font-medium">홈</span>
        </Link>

        <Link
          href="/profile"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiUser size={22} />
          <span className="text-md font-medium">내 정보</span>
        </Link>
      </div>
      <div className="flex flex-col">
        <button
          className="p-4 flex items-center gap-3 hover:bg-[#3A1E1E] transition text-red-300"
          onClick={() => console.log("로그아웃 클릭")}
        >
          <FiLogOut size={22} />
          <span className="text-md font-medium">로그아웃</span>
        </button>
      </div>
    </aside>
  );
}
