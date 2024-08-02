<script setup>
import ExternalLinkButton from '../components/ExternalLinkButton.vue'
import emailjs from '@emailjs/browser'
</script>

<script>
export default {
  data() {
    return {
      from_name: '',
      from_email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          this.$refs.contactForm,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          }
        )
        .then(() => {
          console.log('Thank you for your email!')
        })
        .catch((error) => {
          console.log('Error sending email', error)
          alert('Failed to send message. Please try again later.')
        })
    }
  }
}
</script>

<template>
  <div class="my-8 mx-10" data-cy="contact">
    <p class="text-black pb-3 text-center">
      I'd love to hear from you if you have any feedback on this website or any opportunities
      available!
    </p>
    <form ref="contactForm" @submit.prevent="submitForm" class="flex flex-col justify-items-center">
      <div class="mb-4">
        <label for="from_name" class="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          v-model="from_name"
          id="from_name"
          name="from_name"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div class="mb-4">
        <label for="from_email" class="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          v-model="from_email"
          id="from_email"
          name="from_email"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="text-sm font-medium text-gray-700">Message</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md"
          rows="3"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white rounded-full px-2 shadow-block-dropdown ease-out hover:shadow-button-hover hover:-translate-y-px hover:translate-x-px transition-all"
      >
        Send
      </button>
    </form>
  </div>
</template>
