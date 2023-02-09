import { getHomeHotSuggests } from "@/services";
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
  },
});
