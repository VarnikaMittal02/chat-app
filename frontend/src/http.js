import axios from "axios";

const http = axios.create({
  baseURL: "https://chat-app-backend-oi52.onrender.com",
  // baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default http;