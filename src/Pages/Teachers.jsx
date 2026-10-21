import { useState } from "react";
import { GraduationCap, Plus, Search, Mail, BookOpen, Award } from "lucide-react";

const initialTeachers = [
  { id: "TCH-101", name: "Dr. Robert Vance", subject: "Advanced Algorithms", department: "Computer Science", email: "vance@school.edu", experience: "12 yrs", status: "Full-Time" },
  { id: "TCH-102", name: "Prof. Clara Hughes", subject: "Calculus & Linear Algebra", department: "Mathematics", email: "hughes@school.edu", experience: "9 yrs", status: "Full-Time" },
  { id: "TCH-103", name: "Dr. Samuel Green", subject: "Quantum Mechanics", department: "Physics", email: "green@school.edu", experience: "15 yrs", status: "Part-Time" },
  { id: "TCH-104", name: "Ms. Rebecca Taylor", subject: "World Literature", department: "Humanities", email: "taylor@school.edu", experience: "7 yrs", status: "Full-Time" },
];

export default function Teachers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = initialTeachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Faculty & Teachers</h1>
          <p className="mt-1 text-slate-500">View faculty directory, assigned subjects, and credentials</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
        >
          <Plus size={18} />
          Add Faculty Member
        </button>
      </div>

      <div className="relative">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          placeholder="Search teachers by name, subject, or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none shadow-sm focus:ring-2 focus:ring-teal-500/20"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{teacher.name}</h3>
                  <p className="text-xs font-semibold text-teal-600">{teacher.department}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {teacher.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-slate-400" />
                  <span>{teacher.subject}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{teacher.experience} Experience</span>
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4 flex justify-between text-xs text-slate-400">
              <span>ID: {teacher.id}</span>
              <button type="button" className="font-semibold text-teal-600 hover:text-teal-700">
                View Schedule →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
