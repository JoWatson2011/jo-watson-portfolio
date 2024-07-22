<script setup>
import ExperienceItem from '../components/ExperienceItem.vue'
import experience from '../assets/experience.js'
</script>
<script>
export default {
  data() {
    return {
      experience
    }
  }
}
</script>

<template>
    <main class="justify-self-start">
      <ExperienceItem v-for="item in experience" :details="item" />
    </main>
</template>
