import { Building2, Users, BookOpen, Plus } from "lucide-react";

const departments = [
  { id: 1, name: "Computer Science & Engineering", head: "Dr. Robert Vance", students: 340, faculty: 18, courses: 24 },
  { id: 2, name: "Mathematics & Statistics", head: "Prof. Clara Hughes", students: 280, faculty: 14, courses: 18 },
  { id: 3, name: "Physics & Astronomy", head: "Dr. Samuel Green", students: 210, faculty: 12, courses: 16 },
  { id: 4, name: "Humanities & Social Sciences", head: "Ms. Rebecca Taylor", students: 250, faculty: 16, courses: 20 },
  { id: 5, name: "Biological Sciences", head: "Dr. Alan Grant", students: 160, faculty: 10, courses: 12 },
];

export default function Departments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Departments</h1>
          <p className="mt-1 text-slate-500">Manage school faculties, department heads, and course capacities</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
        >
          <Plus size={18} />
          New Department
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-700">
                <Building2 size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{dept.name}</h3>
                <p className="text-xs text-slate-400">Head: {dept.head}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center">
              <div>
                <p className="text-xs text-slate-500">Students</p>
                <p className="mt-1 font-bold text-slate-800">{dept.students}</p>
              </div>
              <div className="border-x border-slate-200">
                <p className="text-xs text-slate-500">Faculty</p>
                <p className="mt-1 font-bold text-slate-800">{dept.faculty}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Courses</p>
                <p className="mt-1 font-bold text-slate-800">{dept.courses}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
