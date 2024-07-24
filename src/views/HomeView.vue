<script setup>
import PostIt from '../components/PostIt.vue'
import Bio from '../components/Bio.vue'
</script>
<script>
export default {
  inject: ['windowSize'],
  data() {
    return {
      icons: [
        'vi-file-type-js-official',
        'vi-file-type-python',
        'vi-file-type-pgsql',
        'vi-file-type-rproj'
      ],
      styling: ''
    }
  },
  mounted() {
    this.setStyle()
  },
  methods: {
    setStyle() {
      this.styling = this.windowSize === 'large' ? 'mr-5 ml-10' : 'max-w-[360px] m-auto'
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
  <main>
    <div class="flex justify-center p-2">
      <v-icon v-for="icon in icons" :name="icon" scale="2.5" />
    </div>
    <br />
    <div class="mx-3">
      <PostIt :class="styling">
        <Bio />
      </PostIt>
    </div>
  </main>
</template>
