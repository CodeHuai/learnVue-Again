import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
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

export default useCityStore;
