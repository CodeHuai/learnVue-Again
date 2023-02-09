import fetchInstance from "../request/index";

export function getHomeHotSuggests() {
  return fetchInstance.get({
    url: "/home/hotSuggests",
  });
}

export function getHomeCategories() {
  return fetchInstance.get({
    url: "/home/categories",
  });
}

export function getHomeHouselist(currentPage) {
  return fetchInstance.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
