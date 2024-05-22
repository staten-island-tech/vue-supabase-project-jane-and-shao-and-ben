<template>
  <div class="slot-machine">
    <button class="buttn" @click="spin" v-if="balaalala >= 100">
      Spin: $100
    </button>
    <button class="buttn" v-if="balaalala < 100">
      <RouterLink to="/bank">Can't Afford, Add More Money In Bank</RouterLink>
    </button>
    <div class="reel">
      <img :src="data2[slot1].image" />
      <img :src="data2[slot2].image" />
      <img :src="data2[slot3].image" />
    </div>
    <div v-if="winningMessage">{{ winningMessage }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { balancefunc } from "@/stores/counter";
import { supabase } from "@/lib/supabaseClient";
import router from "@/router";
export default {
  data() {
    return {
      slot1: 0,
      slot2: 0,
      slot3: 1,
      data2: [
        {
          name: "Lemon",
          value: 50,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Lemon-512.png",
        },
        {
          name: "Melon",
          value: 100,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png",
        },
        {
          name: "Grapes",
          value: 150,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png",
        },
        {
          name: "Cherry",
          value: 250,
          image:
            "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png",
        },
        {
          name: "Bar",
          value: 500,
          image:
            "https://cdn4.iconfinder.com/data/icons/casino-games/512/bar-512.png",
        },
      ],
      winningMessage: "",
      balaalala: 1,
    };
  },
  methods: {
    async spin() {
      this.slot1 = Math.floor(Math.random() * this.data2.length);
      this.slot2 = Math.floor(Math.random() * this.data2.length);
      this.slot3 = Math.floor(Math.random() * this.data2.length);
      const bal = ref();
      const user = await supabase.auth.getUser(); //pulls user instance
      const balance = balancefunc();
      const reduce = ref(100);
      let { data: accountinfo2, err } = await supabase //calls table
        .from("accountinformation") //specifies table
        .select("*") //selects all rows
        .eq("id", user.data.user.id); //selects row that contains the user id
      bal.value = accountinfo2[0].balance; //updates variables
      const rlmoney = ref(bal.value - reduce.value); //reduce values
      const bets = ref(accountinfo2[0].total_bet + reduce.value);
      let { data: accountinformation, error } = await supabase //calls table
        .from("accountinformation") //specifies table
        .update({
          balance: rlmoney.value,
          total_bet: bets.value,
          total_losses: bets.value,
        }) //updates balance table with sum of values
        .eq("id", user.data.user.id) //selects which row
        .select(); //returns the value
      console.log(accountinformation[0].balance);
      this.balaalala = accountinformation[0].balance;
      console.log(this.balaalala);
      if (this.slot1 === this.slot2 && this.slot2 === this.slot3) {
        const winValue = this.data2[this.slot1].value;
        this.winningMessage = `You win $${winValue}!`;
        rlmoney.value = accountinformation[0].balance + winValue;
        console.log(rlmoney.value);
        const wins = ref(accountinfo2[0].total_wins + winValue);
        let { data: accountinformations, error } = await supabase //calls table
          .from("accountinformation") //specifies table
          .update({ balance: rlmoney.value, total_wins: wins.value }) //updates balance table with sum of values
          .eq("id", user.data.user.id) //selects which row
          .select(); //returns the value
        this.balaalala = accountinformations[0].balance;
        console.log(this.balaalala);
      } else {
        this.winningMessage = "";
      }
      balance.bala();
    },
    test() {
      const balance = balancefunc();
      this.balaalala = balance.bal;
      console.log(this.balaalala);
    },
    move() {
      console.log("what");
      router.push({ path: "/bank" });
    },
  },
  mounted() {
    this.test();
  },
};
/* function value() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  let randomValue = array[Math.floor(Math.random() * array.length)];
  return { randomValue };
}

const numbers = [
  {
    value: 1,
    color: "red",
    even: false,
  },
  {
    value: 2,
    color: "black",
    even: true,
  },
  {
    value: 3,
    color: "red",
    even: false,
  },
  {
    value: 4,
    color: "black",
    even: true,
  },
  {
    value: 5,
    color: "red",
    even: false,
  },
  {
    value: 6,
    color: "black",
    even: true,
  },
  {
    value: 7,
    color: "red",
    even: false,
  },
  {
    value: 8,
    color: "black",
    even: true,
  },
  {
    value: 9,
    color: "red",
    even: false,
  },
  {
    value: 10,
    color: "black",
    even: true,
  },
];


//if randomvalue=betnumbers.value, add value to bank and display
//else, subtract bet number value from bank
//if selected red/black, add red/black number selected value to bank
//if selected odd/even, add odd/even number selected value to bank
//if selected single/multi digit number, add single/multi digit number to bank */
</script>

<style lang="scss" scoped></style>
