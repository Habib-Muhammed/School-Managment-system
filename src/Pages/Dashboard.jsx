import { useState, useEffect } from "react";
import {
  Users,
  GraduationCap,
  Building2,
  UserCheck,
} from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import api from "../services/api";

const defaultStats = [
  {
    title: "Total Students",
    value: "1,240",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Total Teachers",
    value: "86",
    icon: GraduationCap,
    color: "bg-teal-100 text-teal-700",
  },
  {
    title: "Departments",
    value: "12",
    icon: Building2,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Active Users",
    value: "1,180",
    icon: UserCheck,
    color: "bg-amber-100 text-amber-700",
  },
];

export default function Dashboard() {
  const [statsData, setStatsData] = useState(defaultStats);
  const [backendActivities, setBackendActivities] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Attempt to pull real statistics from SchoolBackend
    api
      .get("/Dashboard")
      .then((res) => {
        const d = res.data;
        if (d?.stats) {
          setConnected(true);
          setStatsData([
            {
              title: "Total Students",
              value: d.stats.totalStudents?.toLocaleString() || "0",
              icon: Users,
              color: "bg-blue-100 text-blue-700",
            },
            {
              title: "Total Teachers",
              value: d.stats.totalTeachers?.toLocaleString() || "0",
              icon: GraduationCap,
              color: "bg-teal-100 text-teal-700",
            },
            {
              title: "Departments",
              value: d.stats.totalDepartments?.toLocaleString() || "0",
              icon: Building2,
              color: "bg-purple-100 text-purple-700",
            },
            {
              title: "Active Users",
              value: d.stats.totalActiveUsers?.toLocaleString() || "0",
              icon: UserCheck,
              color: "bg-amber-100 text-amber-700",
            },
          ]);
        }
        if (d?.recentActivities?.length) {
          setBackendActivities(d.recentActivities);
        }
      })
      .catch(() => {
        // Fallback to sample preview data if backend is offline
        setConnected(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-slate-500">
            Real-time overview of institutional metrics and student records.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              connected
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${connected ? "bg-emerald-500" : "bg-slate-400"}`} />
            {connected ? "Database Connected" : "Local Preview Mode"}
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statsData.map(({ title, value, icon, color }) => (
          <StatCard
            key={title}
            title={title}
            value={value}
            icon={icon}
            color={color}
          />
        ))}
      </section>

      <RecentActivity customActivities={backendActivities} />
    </div>
  );
}