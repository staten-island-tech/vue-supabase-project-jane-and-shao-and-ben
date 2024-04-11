<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
async function test() {

  
let { data: accountinformation, error } = await supabase
  .from('accountinformation')
  .select('*')
          
          
  console.log(accountinformation) 
  if (error) {
  console.error(error)
}
}
test()
</script>

<template>
  <ul>
  </ul>
</template>
