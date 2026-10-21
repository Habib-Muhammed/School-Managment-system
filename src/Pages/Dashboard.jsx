import {
  Users,
  GraduationCap,
  Building2,
  UserCheck,
} from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import RecentActivity from "../components/dashboard/RecentActivity";

const stats = [
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
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-slate-500">
          Here is an overview of your school.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ title, value, icon, color }) => (
          <StatCard
            key={title}
            title={title}
            value={value}
            icon={icon}
            color={color}
          />
        ))}
      </section>

      <RecentActivity />
    </div>
  );
}