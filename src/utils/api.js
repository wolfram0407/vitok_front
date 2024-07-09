import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // ...(token && { Authorization: `Bearer ${token}` }),
  },
});
