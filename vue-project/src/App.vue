<template>
  <header class="text-gray-600 body-font" v-if="login.login===true">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logo.png"  class=" w-20 h-20 text-white p-2  rounded-full as" viewBox="0 0 24 24">
       <span class="ml-3 text-xl">-insert casino name-</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-xl justify-center">
      <a class="mr-5 hover:text-gray-900"  @click="bank()">     
        <RouterLink to="/bank" class="]">Bank</RouterLink>
      </a>
      <h3 class="mr-5">Balance: {{ balance.bal }}</h3>
      <a class="mr-5 hover:text-gray-900">
        <RouterLink to="/slots" class="]">Slots</RouterLink>
      </a>
      <a class="mr-5 hover:text-gray-900">Roulette</a>
      <a class="mr-5 hover:text-gray-900">
        <RouterLink to="/BJ">Blackjack</RouterLink>
      </a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xl mt-4 md:mt-0"  @click="signout">
      Sign Out
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  
  <RouterView/>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { isLogin, whichthing,balancefunc } from './stores/counter';
import { supabase } from './lib/supabaseClient';
import router from './router';
import { ref } from 'vue';
const login = isLogin()
const where = whichthing()
const balance = balancefunc()
const d = new Date();
let day = d.getDate();  
let realday = ''
if (day.toString().length < 2) {
  realday = day.toString()
  realday = '0'+realday
}
else {
  realday = day.toString()
}
console.log(realday)
async function signout() {
  await supabase.auth.signOut()
  login.changeN()
  console.log(login.login)
  router.push({path:'/'})
}
function bank() {
  where.bank = true
  console.log(where.bank)
}
balance.bala()
/* if (login.login !== true) {
  router.push({path:'/'})
} */
async function test() {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    console.log(user)
    let date = user.last_sign_in_at.slice(8, 10)
    console.log(date)
    if (date !== realday) {
      await supabase.auth.signOut()
      router.push({path: '/'})
    }
    else {
      login.changeY()
    }
  }
  else {
    router.push({path: '/'})
    login.changeN()
  }
}
test()

</script>


<style lang="scss" scoped>


</style>
