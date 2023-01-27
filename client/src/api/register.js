import axios from "./axios";

export const register = async (data) => {
  const res = await axios.post("/api/v1/register", data);
  return res.data.user;
};
