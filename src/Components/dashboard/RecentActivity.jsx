import { Clock, CheckCircle2, UserPlus, AlertCircle } from "lucide-react";

const defaultActivities = [
  {
    id: 1,
    title: "New student enrolled: Sarah Jenkins",
    department: "Computer Science",
    time: "10 mins ago",
    icon: UserPlus,
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: 2,
    title: "Mid-term exam attendance report finalized",
    department: "Mathematics",
    time: "1 hour ago",
    icon: CheckCircle2,
    color: "text-teal-600 bg-teal-50",
  },
  {
    id: 3,
    title: "Faculty meeting scheduled for tomorrow at 10:00 AM",
    department: "Administration",
    time: "3 hours ago",
    icon: Clock,
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: 4,
    title: "Fee payment reminder sent to 12 students",
    department: "Finance",
    time: "5 hours ago",
    icon: AlertCircle,
    color: "text-amber-600 bg-amber-50",
  },
];

export default function RecentActivity({ customActivities }) {
  const displayList = customActivities && customActivities.length > 0
    ? customActivities.map((act, index) => ({
        id: act.id || index,
        title: act.activityTitle || act.title || act.description || "Activity recorded",
        department: act.department || act.module || "General",
        time: act.timestamp || act.time || "Recently",
        icon: UserPlus,
        color: "text-teal-600 bg-teal-50",
      }))
    : defaultActivities;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Recent Activity
          </h2>
          <p className="text-sm text-slate-500">
            Latest student registrations, staff updates, and announcements
          </p>
        </div>
      </div>

      <div className="mt-4 divide-y divide-slate-100">
        {displayList.map(({ id, title, department, time, icon: Icon, color }) => (
          <div key={id} className="flex items-center justify-between py-3.5">
            <div className="flex items-center gap-3">
              <div className={`rounded-xl p-2.5 ${color}`}>
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{title}</p>
                <p className="text-xs text-slate-400">{department}</p>
              </div>
            </div>
            <span className="text-xs text-slate-400">{time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
