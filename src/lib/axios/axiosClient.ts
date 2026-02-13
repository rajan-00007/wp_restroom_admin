import axios from "axios";
import { BASE_URL } from "./config";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data);
    console.error("Status:", error.response.status);
  } else if (error.request) {
    console.error("No Response:", error.request);
  } else {
    console.error("Error:", error.message);
  }
  return Promise.reject(error);
});

export default axiosClient;
