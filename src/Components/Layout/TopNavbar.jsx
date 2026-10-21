import { Bell, Search, CircleUserRound } from "lucide-react";

export default function TopNavbar() {
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
          className="rounded-full p-2 hover:bg-slate-100"
        >
          <Bell size={21} className="text-slate-600" />
        </button>

        <button
          type="button"
          aria-label="User profile"
          className="rounded-full p-2 hover:bg-slate-100"
        >
          <CircleUserRound size={27} className="text-teal-700" />
        </button>
      </div>
    </header>
  );
}