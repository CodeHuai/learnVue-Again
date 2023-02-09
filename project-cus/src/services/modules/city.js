import fetchInstance from "../request/index";

export const getCityAll = () => {
  return fetchInstance.get({ url: "/city/all" });
};
