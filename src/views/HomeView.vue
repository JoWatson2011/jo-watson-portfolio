<script setup>
import { containerStyle } from './general-styling'
</script>

<script>
export default {
  data() {
    return {
      icons: [
        'vi-file-type-js-official',
        'vi-file-type-python',
        'vi-file-type-pgsql',
        'vi-file-type-rproj'
      ],
      containerStyle
    }
  }
}
</script>

<template>
  <main :class="containerStyle">
    <h3 class="px-8 pt-4 font-bold">Tech Stack</h3>
    <div class="flex justify-center p-2">
      <v-icon v-for="icon in icons" :name="icon" scale="2.5" />
    </div>

    <h3 class="px-8 pt-4 font-bold">Bio</h3>
    <p class="text-justify text-sm leading-tight px-8">
      I am a scientist turned software developer. My scientific background means I am curious,
      analytical and always pushing myself to learn new things, all of which feed into my work as a
      software developer.
      <br />
      <br />
      I spent the first part of my career as an academic researcher analysing biological datasets
      using python (pandas, numpy, matplotlib) and R (tidyverse). The most rewarding part of my
      scientific work was building my own pieces of software to automate my data analysis and
      sharing these tools with my colleagues. This led me to change my career and pursue software
      development.
      <br />
      <br />
      I have recently completed the Northcoders software development bootcamp which gave me strong
      skills in JavaScript programming for front-end and back-end development, as well as
      methodolgies including TDD, paired programming, Agile/SCRUM.
    </p>
  </main>
</template>
