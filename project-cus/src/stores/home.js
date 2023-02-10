import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouselist,
} from "@/services";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houselist: [],
  }),
  actions: {
    async getHomeHotSuggests() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage);
      this.houselist.push(...res.data);
      this.currentPage++;
    },
  },
});
