// services/auth.service.js
import api from "./api.js";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post("/auth/register", {email, password,name   });
  return response.data;
};
