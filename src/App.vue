<script setup>
import WeatherLogo from "./components/WeatherLogo.vue";
import WeatherForm from "./components/WeatherForm.vue";
import WeatherList from "./components/WeatherList.vue";
import ErrorModal from "./components/ErrorModal.vue";
import { Icon } from "@iconify/vue";
import { useWeatherStore } from "./stores/WeatherStore";
const weatherStore = useWeatherStore();
const groupRain = ["Drizzle", "Thunderstorm", "Rain"];
</script>
<template>
  <div id="weather" class="weather">
    <WeatherLogo />
    <WeatherForm  />
    <ErrorModal v-if="weatherStore.showModal" />
    <Icon
      v-if="weatherStore.weatherInfo && weatherStore.condition == 'Clouds'"
      class="icon_weather"
      icon="clarity:cloud-line"
    />
    <Icon
      v-else-if="
        weatherStore.weatherInfo && groupRain.includes(weatherStore.condition)
      "
      class="icon_weather"
      icon="wpf:rain"
    />
    <Icon
      v-else-if="weatherStore.weatherInfo && weatherStore.condition == 'Clear'"
      class="icon_weather"
      icon="system-uicons:sun"
    />
    <Icon
      class="icon_weather"
      v-else-if="weatherStore.weatherInfo && weatherStore.condition == 'Snow'"
      icon="mingcute:snow-line"
    />
    <ul v-if="weatherStore.weatherInfo" class="weather_info">
      <WeatherList />
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
