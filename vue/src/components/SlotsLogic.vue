<template>
    <div class="slot-machine">
      <button > </button>
      <img src={{ data[slot1].image }}>
      <img src={{ data[slot2].image }}>
      <img src={{ data[slot3].image }}>

    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
    /* export default {
        props: {
            list: {
                type: Array,
                default: () =>
                [

                ],
            },
        },

    }, */
let slot1 = 0
let slot2 = 0
let slot3 = 0

 data: [
        {
          name: "Lemon",
          value: 5,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Lemon-512.png"
        },
        {
          name: "Melon",
          value: 10,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png"
        },
        {
          name: "Grapes",
          value: 15,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png"
        },
        {
          name: "Cherry",
          value: 25,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png"
        },
        {
          name: "Bar",
          value: 50,
          image:
            "https://cdn4.iconfinder.com/data/icons/casino-games/512/bar-512.png"
        }
      ],

</script>

<style scoped>

</style>