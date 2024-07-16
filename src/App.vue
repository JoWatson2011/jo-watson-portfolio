<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderContent from './components/HeaderContent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderContent />

      <nav class="flex justify-center">
        <RouterLink to="/projects" class="pr-36">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
