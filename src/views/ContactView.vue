<script setup>
import ExternalLinkButton from '../components/ExternalLinkButton.vue'
</script>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {}
  }
}
</script>

<template>
  <div class="my-8 mx-10">
    <p class="text-black pb-3 text-center">
      I'd love to hear from you if you have any feedback on this website or any opportunities available!
    </p>
    <form @submit.prevent="submitForm" class = " flex flex-col justify-items-center">
      <div class="mb-4">
        <label for="name" class="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          v-model="name"
          id="name"
          class="mt-1 p-2  w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class=" text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="mt-1 p-2  w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="text-sm font-medium text-gray-700">Message</label>
        <textarea
          v-model="message"
          id="message"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
          rows="3"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class=" bg-blue-500 text-white rounded-full px-2 shadow-block-dropdown ease-out hover:shadow-button-hover hover:-translate-y-px hover:translate-x-px transition-all"
      >
        Send
      </button>
    </form>
  </div>
</template>
