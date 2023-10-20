<script setup>
import { useWeatherStore } from "../stores/WeatherStore";
const weatherStore = useWeatherStore();
</script>
<template>
  <li class="weather_list">
    Temperature: {{ weatherStore.weatherInfo.main.temp + "°" }}
  </li>
  <li class="weather_list">
    Feels Like: {{ weatherStore.weatherInfo.main.feels_like + "°" }}
  </li>
  <li class="weather_list">
    Minimum Temperature: {{ weatherStore.weatherInfo.main.temp_min + "°" }}
  </li>
  <li class="weather_list">
    Maximum temperature: {{ weatherStore.weatherInfo.main.temp_max + "°" }}
  </li>
</template>

<style scoped>
.weather_list {
  margin-top: 40px;
  font-size: 20px;
  list-style-type: none;
}
.weather_list:first-child {
  margin-top: 20px;
}
</style>
