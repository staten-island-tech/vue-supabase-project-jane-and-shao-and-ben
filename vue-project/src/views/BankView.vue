<template>
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Bank</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Check Balance, Winnigs, Losses, Bets, and Add Money!</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Account Id (Four Digits)</h2>
          <p class="leading-relaxed text-base mb-4">{{ accid }}</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Account Balance</h2>
          <p class="leading-relaxed text-base mb-4">${{bal}}</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Total Bets</h2>
          <p class="leading-relaxed text-base mb-4">${{ totalb }}</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Total Winnings</h2>
          <p class="leading-relaxed text-base mb-4">${{ totalw }}</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Total Losses</h2>
          <p class="leading-relaxed text-base mb-4">${{ totall }}</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Add Money</h2>
          <div class="test flex flex-row">
          <input class="leading-relaxed text-base border-2 border-black rounded-lg text-center" type="number" v-model="money"></input>
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="addmoney">Button</button>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import { balancefunc } from '@/stores/counter';
const bal = ref()
const balance = balancefunc()
const accid = ref()
const totalb = ref()
const totalw = ref()
const totall = ref()
const money = ref()
async function test() {
    const user = await supabase.auth.getUser() //pulls user instance
    let { data: accountinformation, error } = await supabase //calls table
        .from('accountinformation') //specifies table
        .select("*") //selects all rows
        .eq('id', user.data.user.id) //selects row that contains the user id
    bal.value = accountinformation[0].balance //updates variables
    const test = user.data.user.id.toString() //updates variables
    accid.value = test.slice(-4) //updates variables
    totalb.value = accountinformation[0].total_bet //updates variables
    totalw.value = accountinformation[0].total_winnings //updates variables
    totall.value = accountinformation[0].total_losses //updates variables
}
test()
async function addmoney() {
    const user = await supabase.auth.getUser() //pulls user instance
    const rlmoney = ref(money.value + bal.value) //adds values 
    let { data: accountinformation, error } = await supabase //calls table
        .from('accountinformation') //specifies table
        .update({ balance: rlmoney.value }) //updates balance table with sum of values
        .eq('id', user.data.user.id) //selects which row
        .select() //returns the value
  test() //updates table
    balance.bala()
}
</script>
<style lang="scss" scoped>
</style>