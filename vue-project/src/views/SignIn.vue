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
  <div class="inline-flex items-center">
    <label for="signin" class="text-sm text-gray-600 dark:text-gray-400 mr-1">Stay Signed In:</label>
    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="blue">
      <input type="checkbox"
        v-model="staysign"
        name="signin"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
        id="blue"  />
      <span
        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
          stroke="currentColor" stroke-width="1">
          <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
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