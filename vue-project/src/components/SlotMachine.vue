<template>
  <div class="slot-machine">
    <button @click="spin">Spin</button>
     <h2>{{ name }} a</h2>
    <img :src="data2[slot1].image">
    <img :src="data2[slot2].image">
    <img :src="data2[slot3].image">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      slot1: 0,
      slot2: 0,
      slot3: 0,
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
      this.slot1 = Math.floor(Math.random() * this.data.length);
      this.slot2 = Math.floor(Math.random() * this.data.length);
      this.slot3 = Math.floor(Math.random() * this.data.length);
    }
  }
}
</script>

<style scoped>

</style>
