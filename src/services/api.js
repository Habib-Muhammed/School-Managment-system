import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5022/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Automatically inject JWT Bearer token if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sms_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for session expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear token on 401
      localStorage.removeItem('sms_auth_token');
      localStorage.removeItem('sms_user');
    }
    return Promise.reject(error);
  }
);

export default api;
