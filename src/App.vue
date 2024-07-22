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
      pageStyle: '',
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
        ' bg-light-background absolute t-[50%] l-[50%] rounded-[30px] shadow-block-page'
      this.pageStyle = baseStyle + (this.windowWidth < 750 ? smallWindowStyle : largeWindowStyle)

      this.containerStyle =
        this.windowWidth < 750
          ? ''
          : 'absolute flex justify-center items-center overflow-y-auto w-full h-full'
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
  <div id="container" :class="containerStyle">
    <div :class="pageStyle">
      <SocialsNavigation />
      <header class="flex flex-col">
        <HeaderContent />
        <NavList />
      </header>
      <RouterView v-if="windowWidth >= 750" />
      <div v-else class="bg-light-background rounded-[30px] shadow-block-page my-8 pb-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
