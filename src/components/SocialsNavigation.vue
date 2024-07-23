<script setup>
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>
<script>
export default {
  inject: ['windowSize'],
  data() {
    return {
      appSize: this.windowSize,
      icons: [
        { iconName: 'co-github', url: 'https://github.com/JoWatson2011', text: 'Follow on Github' },
        {
          iconName: 'bi-linkedin',
          url: 'https://www.linkedin.com/in/jolwatson/',
          text: 'Connect on LinkedIn'
        }
      ],
      styling: ''
    }
  },
  mounted() {
    this.setStyle()
  },
  methods: {
    setStyle() {
      this.styling =
        this.appSize === 'large'
          ? 'absolute left-[25%] bottom-[-80px] flex justify-end'
          : 'flex justify-around mb-3'
    }
  },
  watch: {
    appSize(size) {
      this.setStyle()
    }
  }
}
</script>
<template>
  <nav :class="styling">
    <ExternalLinkButton
      v-for="icon in icons"
      :iconName="icon.iconName"
      :url="icon.url"
      :text="icon.text"
    />
  </nav>
</template>
