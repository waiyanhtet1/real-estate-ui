import axios from "axios";
import config from "../config";

const apiRequest = axios.create({
  baseURL: `${config.SERVER_URI}/api`,
  withCredentials: true,
});

export default apiRequest;
