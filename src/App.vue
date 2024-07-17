<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderContent from './components/HeaderContent.vue'
import SocialsNavigation from './components/SocialsNavigation.vue'
import TabButtonNavigation from './components/TabButtonNavigation.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <SocialsNavigation />
      <HeaderContent />
    </div>
  </header>

  <TabButtonNavigation />
</template>

<style scoped></style>
