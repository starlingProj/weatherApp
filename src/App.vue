<script setup>
import { Icon } from "@iconify/vue";
import axios from "axios";
import { ref } from "vue";

const city = ref("");
const weatherInfo=ref('');
const condition=ref('');
const groupRain=['Drizzle','Thunderstorm','Rain'];

const getInfo = async ()=>{
  
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=6288e47afa19211ac8a9dea80db1e55b&units=metric`
  await axios.get(url)
  .then((responce)=>{
    if(city.value.toLowerCase()===responce.data.name.toLowerCase()){
    weatherInfo.value = responce.data
    condition.value= weatherInfo.value.weather[0].main
  }
    
    else{
    alert('Please, enter the valid name of the city')
    city.value=''
    weatherInfo.value=''
    
  }
  }
 
    )
  .catch((er)=>{
    if(er.code==="ERR_BAD_REQUEST"){
    alert('Please, enter the valid name of the city')
    city.value=''
    weatherInfo.value=''
    }
    else alert("Sorry, we have some problems")
  })
  
}




</script>
<template>
  <div class="weather">
    <h1 class="weater_logo_text">
      Weather in {{weatherInfo? weatherInfo.name : 'your city'}} <br>
    </h1>
    <h1 v-if="weatherInfo" class="contry"> Country:{{weatherInfo.sys.country}}</h1>
    <div class="weather_form">
      <input
        v-model="city"
        @keyup.enter="getInfo"
        class="weather_form_input"
        type="text"
        placeholder="Enter the name of the city"
      />
      <input @click="getInfo" class="weather_form_submit" type="submit" value="⎆" />
    </div>
    <Icon 
    v-if="weatherInfo&&condition=='Clouds'"
    class="icon_weather" 
    icon="clarity:cloud-line" /> 
    <Icon 
    v-else-if="weatherInfo&&groupRain.includes(condition)" 
    class="icon_weather" 
    icon="wpf:rain" />
    <Icon 
    v-else-if="weatherInfo&&condition=='Clear'" 
    class="icon_weather" 
    icon="system-uicons:sun" />
    <Icon 
    class="icon_weather"
    v-else-if="weatherInfo&&condition=='Snow'"  
    icon="mingcute:snow-line" />
  
    
    
    <ul v-if="weatherInfo" class="weather_info">
      <li class="weather_list">Temperature: {{weatherInfo.main.temp+'°'}}</li>
      <li class="weather_list">Feels Like: {{weatherInfo.main.feels_like+'°'}}</li>
      <li class="weather_list">Minimum Temperature: {{weatherInfo.main.temp_min+'°'}}</li>
      <li class="weather_list">Maximum temperature: {{weatherInfo.main.temp_max+'°'}}</li>
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
.weater_logo_text {
  padding-top: 50px;
  letter-spacing: 2px;
  font-size: 35px;
  font-weight: bold;
}
.contry{
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: bold;
}
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
.weather_list {
  margin-top: 40px;
  font-size: 20px;
  list-style-type: none;
}
.weather_list:first-child {
  margin-top: 20px;
}
</style>
