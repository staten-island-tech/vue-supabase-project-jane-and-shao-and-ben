<template>
    <div>
        <form action="" class="flex justify-center m-auto h-screen items-center">
    <label for="" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">Enter Email</label>
    <input type="text" v-model="emails" class="border-black border-2 mr-10">
    <label for="" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">Enter Password</label>
    <input type="text" name="" id="" v-model="passwords" class="border-black border-2 mr-10">
    <button type="submit" @click.prevent="signInWithEmail" class="mr-2 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
      <RouterLink to="/about" class="]">Sign In</RouterLink>

    </button>
  </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { isLogin } from '@/stores/counter';
const login = isLogin()
const emails = ref("")
const passwords = ref("")
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emails.value,
    password: passwords.value,
  })
  login.changeY()
  console.log(login.login)
  if (error) {
    alert("Account not found!")
  }
}

</script>

<style lang="" scoped>

</style>