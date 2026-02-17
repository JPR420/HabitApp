//my-app\services\status.js
import api from "./api.js";

export const status = async () => {
  const response = await api.get("/status");
  return response.data;
};

export default status;