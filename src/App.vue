<script setup>
import HeaderContent from './components/HeaderContent.vue'
import SocialsNavigation from './components/SocialsNavigation.vue'
import NavList from './components/NavList.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      containerStyle: ''
    }
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      this.setStyle()
    },
    setStyle() {
      const baseStyle =
        'flex justify-center z-0 px-4 pt-2 pb-4 text-gray-600 min-w-[370px] max-w-[800px] '
      const smallWindowStyle = 'flex-wrap'
      const largeWindowStyle =
        ' bg-pink-50 absolute t-[50%] l-[50%]  border-t-4 border-l border-r-4 border-sky-500 rounded-[30px] shadow-block-page'
      this.containerStyle =
        baseStyle + (this.windowWidth < 750 ? smallWindowStyle : largeWindowStyle)
    }
  },
  mounted() {
    this.setStyle()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<template>
  <div
    id="parent-container"
    class="absolute flex justify-center items-center overflow-y-auto w-full h-full"
  >
    <div :class="containerStyle">
      <SocialsNavigation />
      <header class="flex flex-col">
        <HeaderContent />
        <NavList />
      </header>
      <RouterView />
    </div>
  </div>
</template>
