// stores/counter.js
import { defineStore } from 'pinia'

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