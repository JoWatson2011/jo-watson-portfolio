<script setup>
import { BiArchiveFill, IoDocumentText, BiEnvelopeOpenFill } from 'oh-vue-icons/icons'
</script>

<template>
  <div class="">
    <nav class="flex flex-col justify-center items-stretch">
      <RouterLink
        to="/projects"
        class="hover:text-light-midBlue text-lg"
        activeClass="font-extrabold text-light-darkBlue"
        ><v-icon
          name="bi-archive-fill"
          scale="1.25"
        />
        Projects</RouterLink
      >
      <RouterLink
        to="/experience"
        class="hover:text-light-midBlue text-lg"
        activeClass="font-extrabold text-light-darkBlue"
        ><v-icon
          name="io-document-text"
          scale="1.25"
        />Experience</RouterLink
      >
      <RouterLink
        to="/contact"
        class="hover:text-light-midBlue text-lg"
        activeClass="font-extrabold text-light-darkBlue"
        ><v-icon
          name="bi-envelope-open-fill"
          scale="1.25"
        />Contact</RouterLink
      >
    </nav>
  </div>
</template>
