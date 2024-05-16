<template>
  <div class="slot-machine">
    <h2>SLOTS</h2>
    <h3>each spin is $.50</h3>
    <button class="buttn" @click="spin">Spin</button>
    <div class='reel'>
      <img :src="data2[slot1].image">
      <img :src="data2[slot2].image">
      <img :src="data2[slot3].image">
    </div>
    <div v-if="winningMessage">{{ winningMessage }}</div>
  </div>
</template>


<script>
import { ref } from 'vue'


export default {
  data() {
    return {
      slot1: 0,
      slot2: 0,
      slot3: 1,
      data2: [
        {
          name: "Lemon",
          value: 5,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Lemon-512.png"
        },
        {
          name: "Melon",
          value: 10,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png"
        },
        {
          name: "Grapes",
          value: 15,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png"
        },
        {
          name: "Cherry",
          value: 25,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png"
        },
        {
          name: "Bar",
          value: 50,
          image: "https://cdn4.iconfinder.com/data/icons/casino-games/512/bar-512.png"
        }
      ],
      winningMessage: ""
    }
  },
  methods: {
    spin() {
      this.slot1 = Math.floor(Math.random() * this.data2.length);
      this.slot2 = Math.floor(Math.random() * this.data2.length);
      this.slot3 = Math.floor(Math.random() * this.data2.length);
      
      if (this.slot1 === this.slot2 && this.slot2 === this.slot3) {
        const winValue = this.data2[this.slot1].value;
        this.winningMessage = `You win $${winValue}!`;
      } else {
        this.winningMessage = "";
      }
    }
  }
}
</script>


<style scoped>
.reel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 15px;
  width: 200px;
  height: 150px;
}
.slot-machine {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.buttn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
.buttn:hover {
  background-color: #45a049;
}
h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
h3 {
  font-size: 15px;
  margin-bottom: 10px;
}
</style>


