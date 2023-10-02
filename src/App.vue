<script setup>
  import HomeSearch from './components/HomeSearch.vue'
  import YourLibrary from './components/YourLibrary.vue'
  import HomePage from './components/HomePage.vue';
  import MediaPlayer from './components/MediaPlayer.vue';
</script>

<template>
  <div class="flex">
    <div class="sidenav w-1/4">
      <HomeSearch />
      <YourLibrary />
    </div>
    <HomePage class="w-3/4" />
  </div>
  <MediaPlayer />
</template>

<style scoped>

</style>
