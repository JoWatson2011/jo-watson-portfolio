<script>
export default {
  data() {
    return {
      icons: [
        { iconName: 'co-github', url: 'https://github.com/JoWatson2011' },
        { iconName: 'bi-linkedin', url: 'https://www.linkedin.com/in/jolwatson/' }
      ],
      buttonStyle: ''
    }
  }
}
</script>
<template>
  <nav class="flex justify-end">
    <div
      v-for="icon in icons"
      :key="icon.iconName"
      class="rounded-full hover:opacity-100 p-1 mt-1 mr-1 opacity-50"
    >
      <a :href="icon.url"><v-icon :name="icon.iconName" scale="1.5" /></a>
    </div>
  </nav>
</template>
