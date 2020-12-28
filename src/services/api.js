import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:3001",
  headers: {
    Authorization: "",
  },
});

export default api;