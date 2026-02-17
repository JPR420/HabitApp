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

export const checkRefreshToken = async (refreshToken) => {
  const response = await api.post("/auth/checkRefreshToken", {
    refreshToken,
  });
  return response.data;
}

export const refreshToken = async (refreshToken) => {
  const response = await api.post("/auth/refresh", {
    refreshToken,
  });
  return response.data;
}
