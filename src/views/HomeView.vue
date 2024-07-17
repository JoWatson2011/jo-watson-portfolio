<script setup>
import { containerStyle } from './general-styling'
</script>

<script>
export default {
  data() {
    return {
      containerStyle
    }
  }
}
</script>

<template>
  <main :class="containerStyle">
    <h1>This is the home page</h1>
  </main>
</template>
