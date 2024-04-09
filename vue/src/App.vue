<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
async function test() {

  let { data, error } = await supabase
  .from('account_information')
  .select('*')
          
console.log(data) 
}
test()
</script>

<template>
  <ul>
  </ul>
</template>