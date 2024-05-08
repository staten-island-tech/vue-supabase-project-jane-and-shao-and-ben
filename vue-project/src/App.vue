<template>
  <div>
    <div class="wrapper flex flex-row justify-center m-auto w-full mt-20">
      <nav class="flex justify-center m-auto">
        <button v-if="login.login===true" @click="bank()" class="bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/bank" class="]">Bank</RouterLink>
        </button>
        <button class="ml-10 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/slots" class="]"> Slots</RouterLink>
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
import { isLogin, whichthing } from './stores/counter';
import { supabase } from './lib/supabaseClient';
const login = isLogin()
const where = whichthing()
async function signout() {
  await supabase.auth.signOut()
  login.changeN()
  console.log(login.login)
}
function bank() {
  where.bank = true
  console.log(where.bank)
}
</script>


<style lang="scss" scoped>


</style>
