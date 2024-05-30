<template>
  <div class="slot-machine">
    <button class="buttn" @click="spin" v-if="balaalala>=100">Spin: $100</button>
    <button class="buttn" v-if="balaalala<100" ><RouterLink to="/bank">Can't Afford, Add More Money In Bank</RouterLink> </button>
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
import { balancefunc } from '@/stores/counter';
import { supabase } from '@/lib/supabaseClient';
import router from '@/router';
export default {
  data() {
    return {
      clickamt: 0,
      slot1: 0,
      slot2: 0,
      slot3: 1,
      data2: [
        {
          name: "Lemon",
          value: 50,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Lemon-512.png"
        },
        {
          name: "Melon",
          value: 100,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png"
        },
        {
          name: "Grapes",
          value: 150,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png"
        },
        {
          name: "Cherry",
          value: 250,
          image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png"
        },
        {
          name: "Bar",
          value: 500,
          image: "https://cdn4.iconfinder.com/data/icons/casino-games/512/bar-512.png"
        }
      ],
      winningMessage: "",
      balaalala: 1

    }
  },
  methods: {
    async spin() {
      this.clickamt++;
      console.log(this.clickamt)
      if (this.clickamt >= 10) {
        let chance = Math.floor(Math.random()*6)
        console.log(chance)
        if (chance === 5||chance===4) {
          let theslot = Math.floor(Math.random() * this.data2.length);
          this.slot1 = theslot
          this.slot2 = theslot
          this.slot2 = theslot
          this.clickamt=0
        } else {
          this.slot1 = Math.floor(Math.random() * this.data2.length);
      this.slot2 = Math.floor(Math.random() * this.data2.length);
      this.slot3 = Math.floor(Math.random() * this.data2.length);
        }
        
    
      }
      else {
        this.slot1 = Math.floor(Math.random() * this.data2.length);
      this.slot2 = Math.floor(Math.random() * this.data2.length);
      this.slot3 = Math.floor(Math.random() * this.data2.length);
      }


      
      const bal = ref()
      const user = await supabase.auth.getUser() //pulls user instance
      const balance = balancefunc()
      const reduce = ref(100)
      let { data: accountinfo2, err } = await supabase //calls table
        .from('accountinformation') //specifies table
        .select("*") //selects all rows
        .eq('id', user.data.user.id) //selects row that contains the user id 
        bal.value = accountinfo2[0].balance //updates variables
      const rlmoney = ref(bal.value - reduce.value) //reduce values 
      const bets = ref(accountinfo2[0].total_bet+reduce.value)
    let { data: accountinformation, error } = await supabase //calls table
        .from('accountinformation') //specifies table
      .update({ balance: rlmoney.value, total_bet: bets.value, total_losses: bets.value }) //updates balance table with sum of values
        .eq('id', user.data.user.id) //selects which row
        .select() //returns the value
        console.log(accountinformation[0])
      console.log(accountinformation[0].balance)
      this.balaalala = accountinformation[0].balance
        console.log(this.balaalala)
      if (this.slot1 === this.slot2 && this.slot2 === this.slot3) {
        const winValue = this.data2[this.slot1].value;
        this.winningMessage = `You win $${winValue}!`;
        rlmoney.value = accountinformation[0].balance + winValue
        console.log(rlmoney.value)
        const wins = ref(accountinfo2[0].total_winnings + winValue)
        console.log(wins.value)
        let { data: accountinformation3, error } = await supabase //calls table
        .from('accountinformation') //specifies table
        .update({ balance: rlmoney.value, total_winnings: wins.value }) //updates balance table with sum of values
        .eq('id', user.data.user.id) //selects which row
        .select() //returns the value
        console.log(accountinformation3[0])
       this.balaalala = accountinformation3[0].balance
        console.log(this.balaalala)

      } else {
        this.winningMessage = "";
      }
      balance.bala()
    },
    test(){
      const balance = balancefunc()
      this.balaalala = balance.bal
      console.log(this.balaalala)
    },
    move() {
      console.log("what")
      router.push({path:'/bank'})    
    }
  },
  mounted() {
    this.test()
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
  background-color: rgb(99 102 241);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
.buttn:hover {
  background-color: rgb(111, 113, 197) ;
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


