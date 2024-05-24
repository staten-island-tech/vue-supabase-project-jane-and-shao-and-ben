<template>
    <div>
  <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                <p class="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
            </div>
            <div class="m-7">
                <form action="">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input v-model="emails" type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?(not setup)</a>
                        </div>
                        <input v-model="passwords" type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
  
                    <div class="mb-6">
                        <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" @click.prevent="signInWithEmail()">
                          Sign In
                        </button>
                    </div>
                    <p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                      <RouterLink to="/">Sign Up</RouterLink>
                    </a>.</p>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { isLogin } from '@/stores/counter';
const login = isLogin()
const emails = ref("")
const passwords = ref("")
const staysign = ref(false)
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emails.value,
    password: passwords.value,
  })
  if (error) {
    alert("Account not found!")
  } 
  else {
    login.changeY()
    console.log(login.login)
    router.push({path:'/about'})    
    console.log(staysign.value)
  }
}

</script>

<style lang="" scoped>

</style>