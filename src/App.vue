<script setup>
import HeaderContent from './components/HeaderContent.vue'
import SocialsNavigation from './components/SocialsNavigation.vue'
import NavList from './components/NavList.vue'
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue'
</script>

<script>
export default {
  data() {
    return {
      windowSize: window.innerWidth < 750 ? 'small' : 'large',
      pageStyle: '',
      containerStyle: ''
    }
  },
  provide() {
    return {
      windowSize: computed(() => this.windowSize)
    }
  },

  methods: {
    onResize() {
      this.windowSize = window.innerWidth < 750 ? 'small' : 'large'
      this.setStyle()
    },
    setStyle() {
      const baseStyle =
        'flex justify-between z-0 px-4 pt-2 pb-4 text-gray-600  '
      const smallWindowStyle = 'flex-col'
      const largeWindowStyle =
        'w-[768px] h-[475px] bg-light-background absolute t-[50%] l-[50%] rounded-[30px] shadow-block-page'
      this.pageStyle =
        baseStyle + (this.windowSize === 'small' ? smallWindowStyle : largeWindowStyle)

      this.containerStyle =
        this.windowSize === 'small'
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
      <header class="flex flex-col justify-center justify-items-center">
        <HeaderContent />
        <NavList />
      </header>
      <RouterView v-if="windowSize === 'large'" />
      <div v-else class="bg-light-background rounded-[30px] shadow-block-page my-8 pb-4">
        <RouterView />
      </div>
      <SocialsNavigation />
    </div>
  </div>
</template>
