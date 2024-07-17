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

  </main>
</template>
