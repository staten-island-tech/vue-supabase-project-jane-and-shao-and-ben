<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient';
import { isLogin } from '@/stores/counter';
const login = isLogin()
async function fetch() {
let { data: accountinformation, error } = await supabase
  .from('accountinformation')
  .select('')
  console.log(accountinformation)
  if (error) {
  console.error(error)
}}
fetch()
const emails = ref("")
const pass = ref("")


async function sign() {
  const { data, error } = await supabase.auth.signUp({
  email: emails.value,
    password: pass.value,
  })
  if (!error) {
    login.changeY()
    router.push({path:'/signin'})    
  }
  console.log(login.login)
console.log(emails.value, pass.value, "help")
}
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router';
 







</script>


<template>
  <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-[50%]">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Email Password</label>
        <input v-model="emails" type="email" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
        <input v-model="pass" type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click.prevent="sign">
        Sign Up
      </button>
      <p class="text-xs text-gray-500 mt-3 justify-center m-auto mb-2">Already have an account?</p>
      <button class="text-white bg-indigo-500 border-0 py-1 px-6 justify-center m-auto focus:outline-none hover:bg-indigo-600 rounded text-lg w-1/2" @click.prevent="sign">
        <RouterLink to="/signin" class="]">Sign In</RouterLink>
      </button>

    </div>
  <RouterView/>
</template>
