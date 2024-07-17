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
    <p class="text-justify text-sm leading-tight p-8">
      I am a scientist turned software developer. I spent the first part of my career as an academic
      researcher analysing biological datasets using python (pandas, numpy, matplotlib) and R
      (tidyverse). The most rewarding part of my scientific work was building my own pieces of
      software to automate my data analysis and sharing these tools with my colleagues. This led me
      to change my career and pursue software development. I have recently completed the Northcoders
      software development bootcamp which gave me strong skills in JavaScript programming and
      industry-relevent tech. As a former scientist, I am curious, analytical and always pushing
      myself to learn new things, all of which feed into my work as a software developer.
    </p>
  </main>
</template>
