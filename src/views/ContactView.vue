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
    <p>this is the contact page</p>
  </main>
</template>
