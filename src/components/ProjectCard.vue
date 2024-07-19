<script setup>
import PostIt from './PostIt.vue'
</script>
<script>
export default {
  props: {
    Title: String,
    Image: String,
    description: String,
    frontEndURL: String,
    backEndURL: String,
    hostedURL: String,
    techStackIcons: Object
  }
}
</script>

<template>
  <PostIt>
    <p>{{ Title }}</p>
    <p>{{ description }}</p>
  </PostIt>
</template>
