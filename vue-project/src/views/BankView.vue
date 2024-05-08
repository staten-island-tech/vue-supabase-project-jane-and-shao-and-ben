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
                    <input type="number" class="border-2 border-black w-[90%]" name="addmon" v-model="money">
                    </div>
                    <button class="border-2 border-black" @click="addmoney">Add Money!</button>
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
const money = ref()
async function test() {
    const user = await supabase.auth.getUser() //pulls user instance
    let { data: accountinformation, error } = await supabase //calls table
        .from('accountinformation') //specifies table
        .select("*") //selects all rows
        .eq('id', user.data.user.id) //selects row that contains the user id
    bal.value = accountinformation[0].balance //updates variables
    const test = user.data.user.id.toString() //updates variables
    accid.value = test.slice(-4) //updates variables
    totalb.value = accountinformation[0].total_bet //updates variables
    totalw.value = accountinformation[0].total_winnings //updates variables
    totall.value = accountinformation[0].total_losses //updates variables
}
test()
async function addmoney() {
    const user = await supabase.auth.getUser() //pulls user instance
    const rlmoney = ref(money.value + bal.value) //adds values 
    let { data: accountinformation, error } = await supabase //calls table
        .from('accountinformation') //specifies table
        .update({ balance: rlmoney.value }) //updates balance table with sum of values
        .eq('id', user.data.user.id) //selects which row
        .select() //returns the value
    test() //updates table
}
</script>
<style lang="scss" scoped>
</style>