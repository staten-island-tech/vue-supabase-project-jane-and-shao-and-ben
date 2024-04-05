<script setup>
import { supabase } from './stores/counter';

let { data: account_information, error } = await supabase
  .from('account_information')
  .select('*')
console.log(account_information)
</script>

<template>


</template>

<style scoped></style>
