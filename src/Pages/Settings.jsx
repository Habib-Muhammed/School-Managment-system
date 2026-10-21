import { useState } from "react";
import { Settings as SettingsIcon, Bell, Shield, User, School, Save } from "lucide-react";

export default function Settings() {
  const [schoolName, setSchoolName] = useState("Bright Future School & College");
  const [adminEmail, setAdminEmail] = useState("admin@brightfuture.edu");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
        <p className="mt-1 text-slate-500">Configure institutional preferences, user permissions, and notifications</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <School size={18} className="text-teal-600" />
            Institutional Details
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">Basic identity information displayed across all official documents</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">School Name</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Administrative Email</label>
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <Bell size={18} className="text-teal-600" />
            Notification Preferences
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-700">Email alerts for new enrollments</p>
              <p className="text-xs text-slate-400">Receive an email immediately when a student registers online</p>
            </div>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`h-6 w-11 rounded-full p-0.5 transition ${notifications ? "bg-teal-600" : "bg-slate-300"}`}
            >
              <div className={`h-5 w-5 rounded-full bg-white transition ${notifications ? "translate-x-5" : "translate-x-0"}`} />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
