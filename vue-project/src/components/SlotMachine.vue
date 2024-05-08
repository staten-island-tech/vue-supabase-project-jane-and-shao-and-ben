<template>
  <div class="slot-machine">
    <button class = "buttn" @click="spin">Spin</button>
     <h2>{{ name }} a</h2>
     <div class='reel'>
    <img :src="data2[slot1].image">
    <img :src="data2[slot2].image">
    <img :src="data2[slot3].image">
  </div>
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
      ]
    }
  },
  methods: {
    spin() {
      this.slot1 = Math.floor(Math.random() * this.data2.length);
      this.slot2 = Math.floor(Math.random() * this.data2.length);
      this.slot3 = Math.floor(Math.random() * this.data2.length);
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
</style>

