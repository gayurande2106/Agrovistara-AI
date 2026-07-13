import axios from "axios";

const API = axios.create({
  baseURL: "https://agrovistara-ai.onrender.com",
});

export default API;