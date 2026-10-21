import axios from 'axios';

const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  // Guard against outdated 7123 port in memory cache
  if (!envUrl || envUrl.includes('7123')) {
    return 'http://localhost:5022/api';
  }
  return envUrl;
};

const api = axios.create({
  baseURL: getBaseUrl(),
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
      localStorage.removeItem('sms_auth_token');
      localStorage.removeItem('sms_user');
    }
    return Promise.reject(error);
  }
);

export default api;
