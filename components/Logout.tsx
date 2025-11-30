import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST", credentials: "include" });
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <button
        className="p-4 flex items-center gap-3 hover:bg-[#3A1E1E] transition text-red-300"
        onClick={() => setOpen(true)}
      >
        <FiLogOut size={22} />
        <span className="text-md font-medium">Log Out</span>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          <div className="bg-[#1E1E2F] p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4 text-white">
              Log Out from System?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition text-white"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition text-white"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
