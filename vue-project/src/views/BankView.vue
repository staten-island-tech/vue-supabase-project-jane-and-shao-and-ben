<template>
    <div>
        <h1 class="flex justify-center underline font-bold text-4xl">Welcome to the Bank!</h1>
        <div class="">
            <h2 class=" justify-center items-center text-center mt-10 font-medium text-2xl underline ">Account</h2>
            <div class="dataarea justify-center m-auto mt-10 grid grid-cols-5 grid-rows-2 w-2/3">
                <h3 class="">Last 4 digits of Account ID</h3>
                <h3>Balance</h3>
                <h3>Total Bet</h3>
                <h3>Total Winnings</h3>
                <h3>Total Losses</h3>
                <h4>{{ accid }}</h4>
                <h4>{{ bal }}</h4>
                <h4>{{ totalb }}</h4>
                <h4>{{ totalw }}</h4>
                <h4>{{ totall }}</h4>
            </div>
        </div>
</div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
const bal = ref()
const accid = ref()
const totalb = ref()
const totalw = ref()
const totall = ref()
async function test() {
    const user = await supabase.auth.getUser()
console.log(user.data.user.id)
let { data: accountinformation, error } = await supabase
    .from('accountinformation')
    .select("*")
    .eq('id', user.data.user.id)
console.log(accountinformation)
    bal.value = accountinformation[0].balance
    const test = user.data.user.id.toString()
    accid.value = test.slice(-4)
    console.log(accid.value)
    console.log(bal.value)
    totalb.value = accountinformation[0].total_bet
    totalw.value = accountinformation[0].total_winnings
    totall.value = accountinformation[0].total_losses

}
test()

</script>

<style lang="scss" scoped>

</style>