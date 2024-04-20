import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ requests, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
