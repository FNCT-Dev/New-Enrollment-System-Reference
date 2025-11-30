import Link from "next/link";
import {
  FiFolder,
  FiCalendar,
  FiBookmark,
  FiSearch,
  FiArchive,
  FiBook,
} from "react-icons/fi";
import LogoutButton from "./Logout";

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
          <FiFolder size={22} />
          <span className="text-md font-medium">Prepare for Registration</span>
        </Link>

        <Link
          href="/register"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiCalendar size={22} />
          <span className="text-md font-medium">Register for Classes</span>
        </Link>

        <Link
          href="/"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiBookmark size={22} />
          <span className="text-md font-medium">Plan Ahead</span>
        </Link>

        <Link
          href="/"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiSearch size={22} />
          <span className="text-md font-medium">Browse Classes</span>
        </Link>

        <Link
          href="/"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiArchive size={22} />
          <span className="text-md font-medium">
            View Registration Information
          </span>
        </Link>

        <Link
          href="/"
          className="p-4 flex items-center gap-3 hover:bg-[#2A2A40] transition"
        >
          <FiBook size={22} />
          <span className="text-md font-medium">Browse Course Catalog</span>
        </Link>
      </div>
      <div className="flex flex-col">
        <LogoutButton />
      </div>
    </aside>
  );
}
