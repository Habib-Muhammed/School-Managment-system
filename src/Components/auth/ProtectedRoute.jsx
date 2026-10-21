import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ adminOnly = false }) {
  const { user, isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (adminOnly && !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md rounded-2xl border border-rose-200 bg-white p-8 text-center shadow-md">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold text-2xl">
            !
          </div>
          <h2 className="mt-4 text-xl font-bold text-slate-800">Admin Access Required</h2>
          <p className="mt-2 text-sm text-slate-500">
            You are signed in as <strong>{user?.email}</strong> with role <strong>{user?.role}</strong>, but this portal requires Administrator credentials.
          </p>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
