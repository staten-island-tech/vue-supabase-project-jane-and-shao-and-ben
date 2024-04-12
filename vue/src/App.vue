<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
async function fetch() {
let { data: accountinformation, error } = await supabase
  .from('accountinformation')
  .select('')
  console.log(accountinformation) 
  if (error) {
  console.error(error)
}}
fetch()
const email = ref("twin")
const pass = ref("sies")


const { data, error } = await supabase.auth.signUp({
  email: 'exampleadsfsdf@email.com',
  password: 'example-password',
})



</script>

<template>
  <form action=""></form>

</template>