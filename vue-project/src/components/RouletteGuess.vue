<template>
  <div class="buttons">
    <button
      v-for="button in buttons"
      :key="button.id"
      :style="getButtonStyle(button.id)"
      @click="guess(button.id)"
    >
      {{ button.id }}
    </button>
  </div>
  <div v-if="result" class="result">
    <p v-if="userChoice === correctCorner">
      You win! You chose the right corner!
    </p>
    <p v-else>You lose! Corner {{ correctCorner }} is correct.</p>
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

    const userChoice = ref(null);
    const correctCorner = ref(null);
    const result = ref(false);

    const guess = (id) => {
      userChoice.value = id;
      correctCorner.value = Math.ceil(Math.random() * 4);
      result.value = true;
      console.log(`Corner ${correctCorner.value} is out`);
    };

    const getButtonStyle = (id) => {
      if (id === userChoice.value) {
        return { backgroundColor: "green" }; // User's choice
      }
      if (id === correctCorner.value) {
        x;
        return { backgroundColor: "gray" }; // Out corner
      }
      return {
        backgroundColor: buttons.value.find((button) => button.id === id).color,
      };
    };

    return {
      buttons,
      guess,
      userChoice,
      correctCorner,
      result,
      getButtonStyle,
    };
  },
};
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
