<script setup>
import HeaderContent from './components/HeaderContent.vue'
import SocialsNavigation from './components/SocialsNavigation.vue'
import TabButtonNavigation from './components/TabButtonNavigation.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    class="absolute m-auto z-0 top-[20px] px-4 pt-2 pb-4 text-gray-600 border-t-4 border-l border-r-4 border-sky-500 rounded-tr-md rounded-b-lg bg-pink-50 min-w-[370px] max-w-[950px] shadow-block-page"
  >
    <header class="flex flex-col">
      <SocialsNavigation />
      <HeaderContent />
    </header>
    <TabButtonNavigation />
  </div>
</template>

<style scoped></style>
