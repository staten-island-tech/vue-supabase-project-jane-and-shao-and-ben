<template>
  <div>
    <div class="wrapper flex flex-row justify-center m-auto w-full">
      <nav class="flex justify-center m-auto">
        <button class="mr-10 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/" class=" ">Signup</RouterLink>
        </button>
        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/about" class="]"> Graph 1</RouterLink>
        </button>
        <button class="ml-10 bg-slate-300 border-2 border-black hover:bg-slate-600 hover:text-gray-50">
          <RouterLink to="/slots" class="]"> Slots</RouterLink>
        </button>
      </nav>
    </div>
  </div>
  <RouterView/>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>


<style lang="scss" scoped>


</style>
