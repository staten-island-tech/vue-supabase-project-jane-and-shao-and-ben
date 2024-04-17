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








</script>


<template>
  <form action="" @submit.prevent="sign">
    <label for="">Enter Email</label>
    <input type="text" v-model="emails">
    <label for="">Enter 6+ digit password</label>
    <input type="text" name="" id="" v-model="pass">
    <input type="submit" name="" id="">
  </form>
</template>
