export default function StatCard({ title, value, icon: Icon, color = "bg-blue-100 text-blue-700" }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        {Icon && (
          <div className={`rounded-xl p-3 ${color}`}>
            <Icon size={22} />
          </div>
        )}
      </div>

      <p className="mt-5 text-3xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}
