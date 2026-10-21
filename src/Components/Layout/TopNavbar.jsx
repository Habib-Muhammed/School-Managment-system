import { Bell, Search, CircleUserRound } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function TopNavbar() {
  const { user } = useAuth();

  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">
          School Management
        </h2>
        <p className="text-sm text-slate-500">
          Manage your school in one place
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 md:flex">
          <Search size={18} className="text-slate-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-36 bg-transparent text-sm outline-none"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full p-2 hover:bg-slate-100 text-slate-600 transition"
        >
          <Bell size={21} />
        </button>

        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div className="hidden sm:block text-right text-xs">
            <p className="font-bold text-slate-800">{user?.username || "Administrator"}</p>
            <p className="text-[11px] text-teal-600 font-medium">{user?.email || "admin@admin.com"}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
            <CircleUserRound size={26} />
          </div>
        </div>
      </div>
    </header>
  );
}