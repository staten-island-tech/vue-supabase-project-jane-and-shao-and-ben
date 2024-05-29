<template>
  <div class="buttons">
    <button
      v-for="button in buttons"
      :key="button.id"
      :style="getButtonStyle(button.id)"
      @click="handleClick(button.id)"
    >
      {{ button.id }}
    </button>
  </div>
  <div v-if="result" class="result">
    <p v-if="userChoice === outCorner">You win! You chose the right corner!</p>
    <p v-else>You're safe! Corner {{ outCorner }} is out.</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Roulette",
  setup() {
    const buttons = ref([
      { id: 1, color: "black" },
      { id: 2, color: "red" },
      { id: 3, color: "black" },
      { id: 4, color: "red" },
    ]);
</script>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
button {
  padding: 20px 40px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.result {
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}
</style>
