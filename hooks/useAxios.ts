import axios from "axios";

// Load baseUrl from .env file
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
