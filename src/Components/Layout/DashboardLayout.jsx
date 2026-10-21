import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <TopNavbar />

        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}