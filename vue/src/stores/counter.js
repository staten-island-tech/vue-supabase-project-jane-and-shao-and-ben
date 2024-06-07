// stores/counter.js
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
export const isLogin = defineStore('login', {
  state: () => {
    return { login: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    changeY() {
        this.login = true
      },
      changeN() {
        this.login = false
    }
  },
})
export const whichthing = defineStore('place', {
  state: () => {
    return {
      bank: false,
      slots: false,
      roulette: false,
      blackjack: false,
      home: true,
    }
  }
})
export const balancefunc = defineStore('balance', {
  state: () => {
    return {
      bal: 0,
      winnigs: 0,
      losses: 0,
      bets:0,
    }
  },
  actions: {
    async bala() {
      const user = await supabase.auth.getUser() //pulls user instance
      let { data: accountinformation, error } = await supabase //calls table
            .from('accountinformation') //specifies table
            .select("*") //selects all rows
            .eq('id', user.data.user.id) //selects row that contains the user id
      this.bal = accountinformation[0].balance //updates variables
      this.winnigs = accountinformation[0].total_winnings
      this.losses = accountinformation[0].total_losses
      this.bets = accountinformation[0].total_bet
    }
  }
})