<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script> -->

<template>
  <div class="flex items-center justify-center pt-8 pb-8">
    <img
      alt="stardew-valley-avatar"
      class="rounded-full mr-10"
      src="@/assets/avatar.png"
      width="125"
      height="125"
    />
    <div>
      <h1 class="text-6xl">Jo Watson</h1>
      <h2 class="text-2xl">Junior Software Developer</h2>
    </div>
  </div>
  <h3 class="text-justify ml-48 text-xs font-black">About</h3>
  <p class="text-justify text-sm mr-48 ml-48 pb-5 leading-tight">I am a scientist turned software developer. I spent the first part of my career as an academic researcher analysing biological datasets using python (pandas, numpy, matplotlib) and R (tidyverse). 
    The most rewarding part of my scientific work was building my own pieces of software to automate my data analysis and sharing these tools with my colleagues. This led me to change my career and pursue software development.
    I have recently completed the Northcoders software development bootcamp which gave me strong skills in JavaScript programming and industry-relevent tech.
    As a former scientist, I am curious, analytical and always pushing myself to learn new things, all of which feed into my work as a software developer.
     </p>
</template>

<style scoped></style>
