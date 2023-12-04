import axios from "axios";

const api = axios.create({
  baseURL: "https://webp.haerin.app:3000",
  withCredentials: true,
});

export default api;
