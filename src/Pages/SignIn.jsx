import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { School, Lock, Mail, ArrowRight, AlertCircle, ArrowLeft, KeyRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("123456");
  const [localError, setLocalError] = useState("");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleFillAdmin = () => {
    setEmail("admin@admin.com");
    setPassword("123456");
    setLocalError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    const result = await login(email, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setLocalError(result.error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12">
      {/* Back to Home Link */}
      <div className="mb-6 w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-teal-600 transition"
        >
          <ArrowLeft size={16} />
          Back to School Website
        </Link>
      </div>

      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-2xl bg-teal-500/10 p-3 text-teal-600">
            <School size={36} />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Admin Portal Sign In</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in with your database-registered administrator credentials</p>
        </div>

        {/* Quick Admin Credential Hint Box */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-teal-200 bg-teal-50/60 p-3.5 text-xs text-teal-900">
          <div>
            <span className="font-bold flex items-center gap-1.5 text-teal-800">
              <KeyRound size={14} /> Default Seeded Admin:
            </span>
            <p className="mt-0.5 text-teal-700">admin@admin.com &bull; 123456</p>
          </div>
          <button
            type="button"
            onClick={handleFillAdmin}
            className="rounded-lg bg-teal-600 px-2.5 py-1 font-semibold text-white hover:bg-teal-700 transition"
          >
            Auto Fill
          </button>
        </div>

        {localError && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-700">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-rose-600" />
            <div>
              <p className="font-semibold">{localError}</p>
              <p className="mt-1 text-[11px] text-rose-600">
                Ensure your ASP.NET backend is running on <code>http://localhost:5022</code>.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@admin.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-bold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700 hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Verifying Credentials..." : "Sign In to Admin Dashboard"}
            <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Need a student account?{" "}
          <Link to="/register" className="font-bold text-teal-600 hover:text-teal-700">
            Register Student
          </Link>
        </p>
      </div>
    </div>
  );
}
