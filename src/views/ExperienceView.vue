<script setup>
import ExperienceItem from '../components/ExperienceItem.vue'
import experience from '../assets/experience.js'
</script>
<script>
export default {
  inject: ['windowSize'],
  data() {
    return {
      appSize: this.windowSize,
      experience,
      scrollContainer: ''
    }
  },
  methods: {
    setScrollContainer() {
      this.scrollContainer =
        this.appSize === 'large'
          ? 'overflow-scroll scroll-smooth bg-light-lightBlue/10 ml-5 my-5 p-2 border rounded-lg border-gray-900'
          : ''
    }
  },
  mounted() {
    this.setScrollContainer()
  },
  watch: {
    appSize(size) {
      this.setScrollContainer()
    }
  }
}
</script>

<template>
  <div
    :class="scrollContainer"
  >
    <main class="justify-self-start">
      <ExperienceItem v-for="item in experience" :details="item" />
    </main>
  </div>
</template>
