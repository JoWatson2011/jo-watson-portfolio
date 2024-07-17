<script setup>
import HeaderContent from './components/HeaderContent.vue'
import SocialsNavigation from './components/SocialsNavigation.vue'
import TabButtonNavigation from './components/TabButtonNavigation.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="ml-5 mr-5">
    <div>
      <SocialsNavigation />
      <HeaderContent />
    </div>
  </header>

  <TabButtonNavigation />
</template>

<style scoped></style>
