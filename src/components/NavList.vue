<script setup>
import { BiArchiveFill, IoDocumentText, BiEnvelopeOpenFill } from 'oh-vue-icons/icons'
</script>

<script>
export default {
  inject: ['windowSize'],
  data() {
    return { navStyle: '' }
  },
  mounted() {
    this.setStyle()
  },
  methods: {
    setStyle() {
      console.log('fired!', this.windowSize)
      this.navStyle =
        this.windowSize === 'large'
          ? 'grid grid-cols-1 mx-auto'
          : 'flex justify-around translate-y-3'
    }
  },
  watch: {
    windowSize(size) {
      this.setStyle()
    }
  }
}
</script>

<template>
  <nav :class="navStyle">
    <RouterLink
      to="/projects"
      class="hover:text-light-midBlue text-lg"
      activeClass="font-extrabold text-light-darkBlue"
      ><v-icon name="bi-archive-fill" scale="1.25" class="mr-3" />Projects</RouterLink
    >
    <RouterLink
      to="/experience"
      class="hover:text-light-midBlue text-lg"
      activeClass="font-extrabold text-light-darkBlue"
      ><v-icon name="io-document-text" scale="1.25" class="mr-3" />Experience</RouterLink
    >
    <RouterLink
      to="/contact"
      class="hover:text-light-midBlue text-lg"
      activeClass="font-extrabold text-light-darkBlue"
      ><v-icon name="bi-envelope-open-fill" scale="1.25" class="mr-3" />Contact</RouterLink
    >
  </nav>
</template>
