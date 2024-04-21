import axios from "axios";

const apiRequest = axios.create({
  // baseURL: `${config.SERVER_URI}/api`,
  baseURL: `https://real-estate-backend-8xxt.onrender.com/api`,
  withCredentials: true,
});

export default apiRequest;
