import { defineStore } from "pinia";

export const useCityStore = defineStore("city", {
  state: () => {
    return {
      allCities: {},
      currentCity: {
        cityName: "广州",
      },
    };
  },
  actions: {},
});
