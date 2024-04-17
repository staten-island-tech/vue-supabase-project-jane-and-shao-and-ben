<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient';
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
console.log(emails.value, pass.value)
}
import { RouterLink, RouterView } from 'vue-router'








</script>


<template>
  <form action="" class="flex justify-center m-auto h-screen items-center">
    <label for="" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">Enter Email</label>
    <input type="text" v-model="emails" class="border-black border-2 mr-10">
    <label for="" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">Enter 6+ digit password</label>
    <input type="text" name="" id="" v-model="pass" class="border-black border-2 mr-10">
    <button type="submit" @click="sign" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
      <RouterLink to="/about" class="]"> Graph 1</RouterLink>
    </button>
  </form>
  <RouterView/>
</template>
