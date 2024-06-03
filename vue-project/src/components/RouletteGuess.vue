<template>
  <div>
    <div class="buttons">
      <button @click="reset">play</button>
      <button @click="guess(1)">1</button>
      <button @click="guess(2)">2</button>
      <button @click="guess(3)">3</button>
      <button @click="guess(4)">4</button>
    </div>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctCorner: null,
      message: "",
    };
  },
  methods: {
    reset() {
      this.correctCorner = Math.floor(Math.random() * 4) + 1;
      this.message = "";
    },
    guess(corner) {
      if (corner === this.correctCorner) {
        this.message = "Congratulations, you guessed the correct corner!";
      } else {
        this.message = "Sorry, wrong corner!";
      }
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style>
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons button {
  margin: 5px;
}

.message {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
