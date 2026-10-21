import { useState } from "react";
import { Users, Plus, Search, Filter, MoreVertical, Mail, Phone } from "lucide-react";

const initialStudents = [
  { id: "STU-001", name: "Habib Muhammed", email: "habib@example.com", phone: "+1 234 567 890", department: "Computer Science", grade: "A", status: "Active" },
  { id: "STU-002", name: "Amina Yusuf", email: "amina@example.com", phone: "+1 234 567 891", department: "Mathematics", grade: "A+", status: "Active" },
  { id: "STU-003", name: "David Kim", email: "david@example.com", phone: "+1 234 567 892", department: "Physics", grade: "B+", status: "Inactive" },
  { id: "STU-004", name: "Elena Rostova", email: "elena@example.com", phone: "+1 234 567 893", department: "Literature", grade: "A", status: "Active" },
  { id: "STU-005", name: "Marcus Chen", email: "marcus@example.com", phone: "+1 234 567 894", department: "Chemistry", grade: "A-", status: "Active" },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [students] = useState(initialStudents);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Students</h1>
          <p className="mt-1 text-slate-500">Manage student profiles, enrollment, and academic records</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
        >
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search students by name, ID, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-teal-500/20"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50/75 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Grade</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="transition hover:bg-slate-50/60">
                  <td className="px-6 py-4 font-semibold text-slate-900">{student.name}</td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">{student.id}</td>
                  <td className="px-6 py-4">{student.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-0.5 text-xs">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Mail size={13} className="text-slate-400" />
                        {student.email}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Phone size={13} className="text-slate-400" />
                        {student.phone}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-800">{student.grade}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                        student.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button type="button" className="rounded-lg p-1 text-slate-400 hover:text-slate-600">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
