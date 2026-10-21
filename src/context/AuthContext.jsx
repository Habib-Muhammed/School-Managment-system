import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("sms_user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Verify stored session on initial mount
  useEffect(() => {
    const token = localStorage.getItem("sms_auth_token");
    if (token) {
      api
        .get("/auth/me")
        .then((res) => {
          if (res.data?.data) {
            setUser(res.data.data);
            localStorage.setItem("sms_user", JSON.stringify(res.data.data));
          }
        })
        .catch(() => {
          // Token expired or invalid
          logout();
        });
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/auth/login", { email, password });
      const payload = response.data?.data;

      if (!payload || !payload.token) {
        throw new Error(response.data?.message || "Invalid login response from server");
      }

      // Store token and user details
      localStorage.setItem("sms_auth_token", payload.token);
      localStorage.setItem("sms_user", JSON.stringify(payload));
      setUser(payload);
      setLoading(false);
      return { success: true, data: payload };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0] ||
        err.message ||
        "Login failed. Please check your credentials.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    }
  };

  const logout = () => {
    try {
      api.post("/auth/logout").catch(() => {});
    } finally {
      localStorage.removeItem("sms_auth_token");
      localStorage.removeItem("sms_user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role?.toLowerCase() === "admin",
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
