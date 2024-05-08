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
  login.changeY(  )
  console.log(login.login)
console.log(emails.value, pass.value, "help")
}
import { RouterLink, RouterView } from 'vue-router'
 







</script>


<template>
  <h1 class="flex justify-center m-auto text-4xl mt-10 mb-[-15%] underline">Sign Up</h1>
  <form action="" class="flex justify-center m-auto h-screen items-center mb-[-20%]">
    <label for="" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">Enter Email</label>
    <input type="text" v-model="emails" class="border-black border-2 mr-10">
    <label for="" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">Enter 6+ digit password</label>
    <input type="text" name="" id="" v-model="pass" class="border-black border-2 mr-10">
    <button type="submit" @click.prevent="sign" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
      <RouterLink to="/about" class="]">Sign Up</RouterLink>
    </button>
  </form>
  <div class="signin flex justify-center m-auto flex-col w-1/2 items-center">
    <h2 class="mb-2">Already Have an account?</h2>
    <button class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50 w-1/4"><RouterLink to="/signin" class="flex grow text-center justify-center m-auto">Sign In!</RouterLink></button>
  </div>
 
  <RouterView/>
</template>
