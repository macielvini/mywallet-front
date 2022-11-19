import axios from "axios";

const BASE_URL = "http://localhost:5000";
export const api = axios.create({ baseURL: BASE_URL });
const TOKEN = localStorage.getItem("token");

api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function signUp(body) {
  return api.post("/sign-up", body);
}

export function signIn(body) {
  return api.post("/sign-in", body);
}

export function getUserStatement() {
  return api.get("/statement");
}

export function addRecordToStatement(body) {
  return api.post("/statement", body);
}
