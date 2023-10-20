import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useWeatherStore = defineStore("WeatherStore", () => {
  const weatherInfo = ref("");
  const condition = ref("");
  const showModal = ref(false);
  const showModalInfo = () => {
    showModal.value = false;
  };

  const getInfo = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6288e47afa19211ac8a9dea80db1e55b&units=metric`;
    await axios
      .get(url)
      .then((responce) => {
        if (city.toLowerCase() === responce.data.name.toLowerCase()) {
          weatherInfo.value = responce.data;
          condition.value = weatherInfo.value.weather[0].main;
        }
      })
      .catch((er) => {
        if (er.code === "ERR_BAD_REQUEST") {
          showModal.value = true;
          weatherInfo.value = "";
        }
      });
  };
  return {
    weatherInfo,
    condition,
    showModal,
    getInfo,
    showModalInfo,
  };
});
