<script setup>
import WeatherLogo from "./components/WeatherLogo.vue";
import WeatherForm from "./components/WeatherForm.vue";
import WeatherList from "./components/WeatherList.vue";
import ErrorModal from "./components/ErrorModal.vue";
import { Icon } from "@iconify/vue";
import axios from "axios";
import { ref } from "vue";
const weatherInfo = ref("");
const condition = ref("");
const groupRain = ["Drizzle", "Thunderstorm", "Rain"];
const showModal = ref(false);
const showModalInfo= ()=>{
  showModal.value=false
}

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
</script>
<template>
  <div id="weather" class="weather">
    <WeatherLogo :weatherInfo="weatherInfo" />
    <WeatherForm :getInfo="getInfo" />
    <ErrorModal v-if="showModal" :showModalInfo="showModalInfo" />
    <Icon
      v-if="weatherInfo && condition == 'Clouds'"
      class="icon_weather"
      icon="clarity:cloud-line"
    />
    <Icon
      v-else-if="weatherInfo && groupRain.includes(condition)"
      class="icon_weather"
      icon="wpf:rain"
    />
    <Icon
      v-else-if="weatherInfo && condition == 'Clear'"
      class="icon_weather"
      icon="system-uicons:sun"
    />
    <Icon
      class="icon_weather"
      v-else-if="weatherInfo && condition == 'Snow'"
      icon="mingcute:snow-line"
    />
    <ul v-if="weatherInfo" class="weather_info">
      <WeatherList :weatherInfo="weatherInfo" />
    </ul>
  </div>
</template>

<style scoped>
.weather {
  width: 1200px;
  height: 800px;
  background-color: rgb(14, 18, 27);
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(214, 221, 241);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 50px;
}

.weather_info {
  margin-top: 10px;
  width: 75%;
}
.icon_weather {
  margin-top: 40px;
  width: 100px;
  height: 100px;
  color: #22a2c3;
}
</style>
