import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  CalendarCheck,
  BarChart3,
  Settings,
  LogOut,
  School,
  ArrowLeft,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Students", path: "/students", icon: Users },
  { label: "Teachers", path: "/teachers", icon: GraduationCap },
  { label: "Departments", path: "/departments", icon: Building2 },
  { label: "Attendance", path: "/attendance", icon: CalendarCheck },
  { label: "Reports", path: "/reports", icon: BarChart3 },
  { label: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-950 p-5 text-white">
      <div className="mb-9 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <School className="text-teal-400" size={30} />
          <span className="text-xl font-bold">SchoolHub</span>
        </div>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Main menu
      </p>

      <nav className="flex-1 space-y-2">
        {menuItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                isActive
                  ? "bg-teal-500 text-slate-950 font-semibold shadow-sm shadow-teal-500/20"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={19} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800 pt-4 space-y-2">
        {user && (
          <div className="px-3 py-2 text-xs text-slate-400">
            <p className="font-semibold text-slate-200 truncate">{user.username || user.email}</p>
            <span className="inline-block mt-0.5 rounded bg-teal-900/60 text-teal-300 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              {user.role || "Admin"}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-xs text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition"
        >
          <ArrowLeft size={16} />
          School Website
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-rose-300 hover:bg-rose-950/40 hover:text-rose-200 transition"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </div>
    </aside>
  );
}