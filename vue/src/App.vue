<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabaseClient'

const accounts = ref([])

async function getAccount() {
  const { data } = await supabase.from('account_infomation').select()
  accounts.value = data
}

onMounted(() => {
  getAccount()
})
</script>

<template>
  <ul>
    <li v-for="account in accounts" :key="account.id">{{ account.balance }}</li>
  </ul>
</template>
