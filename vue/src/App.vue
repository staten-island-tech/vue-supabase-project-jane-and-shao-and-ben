<<<<<<< Updated upstream
<script setup></script>

<template></template>
=======
<script setup>
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://svdpqaqmcotuflvhbqim.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
let { data: account_information, error } = await supabase
  .from('account_information')
  .select('*')
console.log(account_information)
</script>

<template>


</template>
>>>>>>> Stashed changes

<style scoped></style>
