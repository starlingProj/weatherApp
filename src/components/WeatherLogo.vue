<script setup>
import { useWeatherStore } from "../stores/WeatherStore";
const weatherStore = useWeatherStore();
</script>

<template>
  <h1 class="weater_logo_text">
    Weather in
    {{
      weatherStore.weatherInfo ? weatherStore.weatherInfo.name : "your city"
    }}
    <br />
  </h1>
  <h1 v-if="weatherStore.weatherInfo" class="contry">
    Country:{{ weatherStore.weatherInfo.sys.country }}
  </h1>
</template>

<style scoped>
.weater_logo_text {
  padding-top: 50px;
  letter-spacing: 2px;
  font-size: 35px;
  font-weight: bold;
}
.contry {
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: bold;
}
</style>
