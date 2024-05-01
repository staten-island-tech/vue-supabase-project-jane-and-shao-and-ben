<template>
  <div>
    <div class="wrapper flex flex-row justify-center m-auto w-full mt-20">
      <nav class="flex justify-center m-auto">
        <button v-if="login.login===true" class="bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/bank" class="]">Bank</RouterLink>
        </button>
      </nav>
    </div>
  </div>
  <button v-if="login.login===true" class="absolute top-5 right-5" @click="signout">
   <RouterLink to="/">Sign Out!</RouterLink>
  </button>
  <RouterView/>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { isLogin } from './stores/counter';
import { supabase } from './lib/supabaseClient';
const login = isLogin()
async function signout() {
  await supabase.auth.signOut()
  login.changeN()
  console.log(login.login)
}
</script>


<style lang="scss" scoped>


</style>
