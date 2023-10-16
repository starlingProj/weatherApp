<script setup>
import { ref } from "vue";
const city = ref("");
const props = defineProps({
  getInfo: Function,
});
const setCity = () => {
  props.getInfo(city.value);
  city.value = "";
};
</script>

<template>
  <div class="weather_form">
    <input
      v-model="city"
      @keyup.enter="setCity"
      class="weather_form_input"
      type="text"
      placeholder="Enter the name of the city"
    />
    <input
      @click="setCity"
      class="weather_form_submit"
      type="submit"
      value="⎆"
    />
  </div>
</template>

<style scoped>
.weather_form {
  border-radius: 20%;
  display: flex;
  flex-direction: row;
  width: 75%;
  outline: none;
  text-decoration: none;
  height: 90px;
  margin-top: 30px;
}
.weather_form_input {
  background-color: #0a0a0a;
  color: rgb(214, 221, 241);
  border: none;
  font-size: 28px;
  width: 90%;
  border-radius: 100px 0px 0px 100px;
  padding-left: 2rem;
  font-family: Andale Mono, monospace;
}

.weather_form_input::placeholder {
  color: rgb(214, 221, 241);
  font-size: 24px;
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
  font-size: 70px;
  color: rgb(214, 221, 241);
  border: none;
  border-radius: 0px 100px 100px 0px;
  width: 10%;
  cursor: pointer;
}
.weather_form_submit:hover {
  color: #22a2c3;
}
</style>
