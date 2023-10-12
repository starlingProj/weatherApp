<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="weather">
    <h1 class="weater_logo_text">Weather in your city</h1>
    <div class="weather_form">
      <input
        class="weather_form_input"
        type="text"
        placeholder="Enter the name of the city"
      />
      <input class="weather_form_submit" type="submit" value="⎆" />
    </div>
    <Icon class="icon_weather" icon="system-uicons:sun" />
    <!-- <Icon class="icon_weather" icon="wpf:rain" />
    <Icon class="icon_weather" icon="clarity:cloud-line" /> -->
    <ul class="weather_info">
      <li class="weather_list">Temperature: 5°</li>
      <li class="weather_list">Feels Like: 5°</li>
      <li class="weather_list">Minimum Temperature: 5°</li>
      <li class="weather_list">Maximum temperature: 5°</li>
    </ul>
  </div>
</template>

<style scoped>
.weather {
  width: 900px;
  height: 670px;
  background-color: rgb(14, 18, 27);
  opacity: 0.98;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(214, 221, 241);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 50px;
}
.weater_logo_text {
  padding-top: 30px;
}
.weather_form {
  border-radius: 20%;

  display: flex;
  flex-direction: row;
  width: 65%;
  outline: none;
  text-decoration: none;
  height: 50px;
  margin-top: 30px;
}
.weather_form_input {
  background-color: #0a0a0a;
  color: rgb(214, 221, 241);
  border: none;
  font-size: 20px;
  width: 90%;
  border-radius: 100px 0px 0px 100px;
  padding-left: 1rem;
  font-family: Andale Mono, monospace;
}
.weather_form_input::placeholder {
  color: rgb(214, 221, 241);
  font-size: 18px;
  font-family: Andale Mono, monospace;
}
:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}
.weather_form_submit {
  background-color: #0a0a0a;
  font-size: 40px;
  color: rgb(214, 221, 241);
  border: none;
  border-radius: 0px 100px 100px 0px;
  width: 10%;
  cursor: pointer;
}
.weather_info {
  margin-top: 10px;

  width: 70%;
}
.icon_weather {
  margin-top: 30px;
  width: 100px;
  height: 100px;
}
.weather_list {
  margin-top: 30px;
  font-size: 20px;
  list-style-type: none;
}
</style>
