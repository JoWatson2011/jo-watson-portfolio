<script>
export default {
  data() {
    return {
      tabStyle:
        'tab-button mr-1 z-10 text-sm px-3 text-gray-600 border-t-4 border-l border-r-4 hover:border-r-[2px] hover:border-t-[2px] ease-out hover:translate-y+1 hover:translate-pb+3 border-sky-500 rounded-tl-xl rounded-tr-lg bg-pink-100 shadow-block-tab'
    }
  }
}
</script>

<template>
  <div class="relative flex flex-col justify-center place-items-center m-6">
    
      <RouterView />

    <nav class="flex justify-center items-stretch">
      <RouterLink to="/" :class="tabStyle">About</RouterLink>
      <RouterLink to="/projects" :class="tabStyle">Projects</RouterLink>
      <RouterLink to="/experience" :class="tabStyle">Experience</RouterLink>
      <RouterLink to="/contact" :class="tabStyle">Contact</RouterLink>
    </nav>
  </div>
</template>