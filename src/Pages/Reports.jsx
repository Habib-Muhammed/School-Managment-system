import { BarChart3, TrendingUp, Download, FileText } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic & Financial Reports</h1>
          <p className="mt-1 text-slate-500">Generate, download, and analyze institutional metrics</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700"
        >
          <Download size={18} />
          Export All Reports
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Enrollment Growth</h3>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <TrendingUp size={14} /> +12.4% this term
            </span>
          </div>
          <div className="mt-6 flex h-48 items-end gap-3 border-b border-slate-100 pb-2">
            {[45, 62, 78, 55, 89, 95, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-teal-500/80 hover:bg-teal-600 transition"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-slate-400">M{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold text-slate-900">Available Document Downloads</h3>
          <div className="mt-4 space-y-3">
            {[
              { name: "Term 1 Academic Performance Summary.pdf", size: "2.4 MB" },
              { name: "Faculty Staffing & Department Allocations.xlsx", size: "1.1 MB" },
              { name: "Annual Tuition & Fee Collection Audit.pdf", size: "4.8 MB" },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between rounded-xl border border-slate-100 p-3 hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-teal-600" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{doc.name}</p>
                    <p className="text-[10px] text-slate-400">{doc.size}</p>
                  </div>
                </div>
                <button type="button" className="text-xs font-semibold text-teal-600 hover:text-teal-700">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
