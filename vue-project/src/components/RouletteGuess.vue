<template>
  <div>
    <div class="buttons">
      <button id="one" @click="guess(1)" v-if="balaalala >= 100">1</button>
      <button id="two" @click="guess(2)" v-if="balaalala >= 100">2</button>
      <button id="three"@click="guess(3)" v-if="balaalala >= 100">3</button>
      <button id="four"@click="guess(4)" v-if="balaalala >= 100">4</button>
      <button class="buttn" v-if="balaalala < 100">
        <router-link to="/bank">Can't Afford, Add More Money In Bank</router-link>
      </button>
    </div>
    <div v-if="message" class="message">{{ message }}</div>
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
      correctSquare: null,
      message: "",
      balaalala: 0, 
      gameOver: false, 
    };
  },
  methods: {
    async reset() {
      this.correctSquare = Math.floor(Math.random() * 4) + 1;
      this.message = "";
      this.gameOver = false;
    },
    async guess(Square) {
      if (this.gameOver) {
        this.reset();
        return;
      }
      if (Square === this.correctSquare) {
        this.message = "Congratulations, you win $100!";
      } else {
        this.message = "Sorry, wrong Square! -$100";
      }
      this.gameOver = true; 
    
    const bal = ref();
      const user = await supabase.auth.getUser(); //pulls user instance
      const balance = balancefunc();
      const reduce = ref(100);
      let { data: accountinfo2, err } = await supabase //calls table
        .from("accountinformation") //specifies table
        .select("*") //selects all rows
        .eq("id", user.data.user.id); //selects row that contains the user id
      bal.value = accountinfo2[0].balance; //updates variables
      const rlmoney = ref(); //reduce values
      const bets = ref(accountinfo2[0].total_bet + reduce.value);
      
      
      console.log(this.balaalala);
      if (Square === this.correctSquare) {
        const winValue = 100;
        rlmoney.value = accountinfo2[0].balance + winValue;
        console.log(rlmoney.value);
        const wins = ref(accountinfo2[0].total_winnings + winValue);
        console.log(wins.value);
        let { data: accountinformation3, error } = await supabase //calls table
          .from("accountinformation") //specifies table
          .update({ balance: rlmoney.value, total_winnings: wins.value,total_bet: bets.value, }) //updates balance table with sum of values
          .eq("id", user.data.user.id) //selects which row
          .select(); //returns the value
        console.log(accountinformation3[0]);
        this.balaalala = accountinformation3[0].balance;
        console.log(this.balaalala);
      } else {
        this.message = "Sorry, wrong Square! -$100";
        rlmoney.value = bal.value - 100; //reduce values
        console.log(rlmoney.value)
        let { data: accountinformation, error } = await supabase //calls table
          .from("accountinformation") //specifies table
          .update({balance: rlmoney.value ,total_bet: bets.value,total_losses: bets.value, }) //updates balance table with sum of values
          .select("*") //returns the value
          .eq("id", user.data.user.id) //selects which row
  
          console.log(accountinformation[0])
          this.balaalala = accountinformation[0].balance;
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
</script>

<style>
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.buttons button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.buttn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  background-color: #f44336;
  color: white;
}

.buttn:hover {
  background-color: #d32f2f;
  transform: scale(1.05);
}

.buttn a {
  color: white;
  text-decoration: none;
}

#one{
  background-color: #f44336;
}

#two{
  background-color: black;
color: aliceblue;
}
#three{
  background-color: #f44336;
}
#four{
  background-color: black;
color: aliceblue;
}
.message {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  align-items: center;
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.balance {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

</style>
