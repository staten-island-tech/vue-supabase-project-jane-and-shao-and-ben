<template>
    <h1>Bank</h1>
    <div>
        <div class="balance">
            <h2>Balance</h2>
            <h3>{{ accountinformation[0].balance }}</h3>
        </div>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
const user = await supabase.auth.getUser()
console.log(user.data.user.id)
let { data: accountinformation, error } = await supabase
    .from('accountinformation')
    .select("*")
    .eq('id', user.data.user.id)
console.log(accountinformation)
let balance = accountinformation[0].balance
console.log(balance)
</script>

<style lang="scss" scoped>

</style>