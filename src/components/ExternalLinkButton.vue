<script>
export default {
  props: {
    iconName: String,
    url: String,
    text: String
  }
}
</script>

<template>
  <button
    :name="text"
    class="bg-white rounded-full px-2 shadow-block-dropdown m-2 ease-out hover:shadow-button-hover hover:-translate-y-px hover:translate-x-px transition-all"
  >
    <a :href="url">
      <v-icon :name="iconName" />
      {{ text }}
    </a>
  </button>
</template>
