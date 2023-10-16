<script setup>
const props = defineProps({
  modelValue: Boolean,
});
const emits = defineEmits(["update:modelValue"]);
const setShowModal = () => {
  emits("update:modelValue", false);
};
</script>

<template>
  <div class="modal">
    <div class="modalForm">
      <h1>Please, enter the valid name of the city</h1>
      <button @click="setShowModal">Try Again</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: black;
  opacity: 1;
  inset: 0;
}
.modalForm {
  background-color: rgb(228, 113, 122);
  opacity: 0.85;
  max-width: 900px;
  max-height: 400px;
  margin-bottom: 300px;
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 10px 0px rgba(153, 16, 16, 0.75);
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1 {
  margin-top: 100px;
  font-size: 35px;
  font-weight: bold;
}
button {
  margin-top: 50px;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  background-color: rgb(214, 221, 241);
  box-shadow: 5px 5px 10px 0px rgba(153, 16, 16, 0.75);
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
}
button:hover {
  background-color: rgba(209, 101, 101, 0.75);
  cursor: pointer;
}
</style>
