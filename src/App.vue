<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderContent from './components/HeaderContent.vue'
import SocialsNavigation from './components/SocialsNavigation.vue'
</script>
<script>
export default {
  data() {
    return {
      tabStyle:
        'tab-button z-1 px-4 py-2 text-gray-600 border-t-8 border-l border-r-8 hover:border-r-[6px] hover:border-t-[6px] border-sky-500 rounded-tl-xl rounded-tr-lg bg-pink-100 mr-4 ml-1 ease-out hover:translate-y+1 shadow'
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <SocialsNavigation/>
      <HeaderContent />

      <nav class="flex justify-center">
        <RouterLink to="/projects" :class="tabStyle">Projects</RouterLink>
        <RouterLink to="/experience" :class="tabStyle">Experience</RouterLink>
        <RouterLink to="/contact" :class="tabStyle">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
