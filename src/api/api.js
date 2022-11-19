import axios from "axios";

const BASE_URL = "localhost:27017";
export const api = axios.create({ baseURL: BASE_URL });

export function signUp(body) {
  return api.post("/sign-up", body);
}
