<script>
export default {
  data() {
    return {
        linkStyle: ""
    }
  }
}
</script>

<template>
  <div class="">
    <nav class="flex flex-col justify-center items-stretch">
      <RouterLink to="/projects" :class="linkStyle">Projects</RouterLink>
      <RouterLink to="/experience" :class="linkStyle">Experience</RouterLink>
      <RouterLink to="/contact" :class="linkStyle">Contact</RouterLink>
    </nav>
  </div>
</template>
