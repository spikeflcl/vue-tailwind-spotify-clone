<script setup>
import SearchBar from './SearchBar.vue';
</script>

<template>
<main class="bg-neutral-900 rounded-md mt-3 mr-3  text-gray-500 font-bold w-screen flex flex-row h-[84vh] gap-2">
  <v-icon name="md-keyboardarrowleft" class="mt-4 ml-4 mr-2 bg-black rounded-full" scale="1.5" />
  <v-icon name="md-keyboardarrowright" class="mt-4 bg-black rounded-full" scale="1.5" />
  <SearchBar />
</main>
</template>