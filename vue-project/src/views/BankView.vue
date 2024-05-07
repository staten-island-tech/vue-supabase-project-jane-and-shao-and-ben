<template>
    <div>
        <h1 class="flex justify-center underline font-bold text-4xl">Welcome to the Bank!</h1>
        <div class="">
            <h2 class=" justify-center items-center text-center mt-10 font-medium text-2xl underline ">Account</h2>
            <div class="dataarea justify-center m-auto mt-10 grid grid-cols-6 grid-rows-2 w-3/4">
                <h3 class="flex justify-center items-center">Last 4 digits of Account ID</h3>
                <h3 class="flex justify-center items-center">Balance</h3>
                <h3 class="flex justify-center items-center">Total Bet</h3>
                <h3 class="flex justify-center items-center">Total Winnings</h3>
                <h3 class="flex justify-center items-center">Total Losses</h3>
                <h3 class="flex justify-center items-center">Add Money</h3>
                <h4 class="flex justify-center items-center">{{ accid }}</h4>
                <h4 class="flex justify-center items-center">{{ bal }}</h4>
                <h4 class="flex justify-center items-center">{{ totalb }}</h4>
                <h4 class="flex justify-center items-center">{{ totalw }}</h4>
                <h4 class="flex justify-center items-center">{{ totall }}</h4>
                <div class="addmoney flex flex-row items-center	">
                    <div class="flex flex-col mr-3">
                        <label for="addmon">Amount</label>  
                    <input type="number" class="border-2 border-black w-[90%]" name="addmon">
                    </div>
                    <button class="border-2 border-black">Add Money!</button>
                </div>

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