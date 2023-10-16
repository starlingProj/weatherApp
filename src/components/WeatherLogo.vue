<script setup>
const props = defineProps({
  weatherInfo: Object,
});
</script>

<template>
  <h1 class="weater_logo_text">
    Weather in {{ weatherInfo ? weatherInfo.name : "your city" }} <br />
  </h1>
  <h1 v-if="weatherInfo" class="contry">
    Country:{{ weatherInfo.sys.country }}
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
