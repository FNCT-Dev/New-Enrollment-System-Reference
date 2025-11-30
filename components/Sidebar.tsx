export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4 flex flex-col justify-between">
      <div>
        <a href="/" className="block mb-2">
          Home
        </a>
        <a href="/dashboard" className="block mb-2">
          Dashboard
        </a>
      </div>
      <div>
        <p>User Info</p>
        <button className="mt-2 bg-red-500 text-white px-2 py-1 rounded">
          Logout
        </button>
      </div>
    </aside>
  );
}
