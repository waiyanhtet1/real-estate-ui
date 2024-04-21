import axios from "axios";

const apiRequest = axios.create({
  baseURL: `${config.SERVER_URI}/api`,
  // baseURL: `https://real-estate-backend-vwr6.onrender.com/api`,
  withCredentials: true,
});

export default apiRequest;
