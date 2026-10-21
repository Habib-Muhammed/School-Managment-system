import { useState } from "react";
import { CalendarCheck, Check, X, Clock, Calendar } from "lucide-react";

const initialRecords = [
  { id: "STU-001", name: "Habib Muhammed", status: "Present", time: "08:05 AM" },
  { id: "STU-002", name: "Amina Yusuf", status: "Present", time: "08:10 AM" },
  { id: "STU-003", name: "David Kim", status: "Late", time: "08:42 AM" },
  { id: "STU-004", name: "Elena Rostova", status: "Present", time: "08:12 AM" },
  { id: "STU-005", name: "Marcus Chen", status: "Absent", time: "-" },
];

export default function Attendance() {
  const [date, setDate] = useState("2026-10-21");

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Attendance Tracker</h1>
          <p className="mt-1 text-slate-500">Record and review daily student and staff attendance</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-sm text-sm text-slate-700">
            <Calendar size={16} className="text-slate-500" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent outline-none text-sm font-medium"
            />
          </div>

          <button
            type="button"
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700"
          >
            Save Records
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Present Today</p>
          <p className="mt-2 text-2xl font-extrabold text-emerald-900">94.2%</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Late Arrivals</p>
          <p className="mt-2 text-2xl font-extrabold text-amber-900">3.4%</p>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">Absent</p>
          <p className="mt-2 text-2xl font-extrabold text-rose-900">2.4%</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-6 py-4">Student ID</th>
              <th className="px-6 py-4">Full Name</th>
              <th className="px-6 py-4">Check-in Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Quick Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {initialRecords.map((r) => (
              <tr key={r.id}>
                <td className="px-6 py-4 font-mono text-xs text-slate-500">{r.id}</td>
                <td className="px-6 py-4 font-semibold text-slate-900">{r.name}</td>
                <td className="px-6 py-4 text-xs text-slate-500">{r.time}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      r.status === "Present"
                        ? "bg-emerald-50 text-emerald-700"
                        : r.status === "Late"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="inline-flex gap-1.5">
                    <button type="button" className="rounded-lg p-1.5 hover:bg-emerald-50 text-emerald-600" title="Mark Present">
                      <Check size={16} />
                    </button>
                    <button type="button" className="rounded-lg p-1.5 hover:bg-amber-50 text-amber-600" title="Mark Late">
                      <Clock size={16} />
                    </button>
                    <button type="button" className="rounded-lg p-1.5 hover:bg-rose-50 text-rose-600" title="Mark Absent">
                      <X size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
