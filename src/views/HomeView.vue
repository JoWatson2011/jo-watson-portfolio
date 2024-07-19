<script>
export default {
  data() {
    return {
      icons: [
        'vi-file-type-js-official',
        'vi-file-type-python',
        'vi-file-type-pgsql',
        'vi-file-type-rproj'
      ]
    }
  }
}
</script>

<template>
  <main>
      <div class="flex justify-center p-2">
        <v-icon v-for="icon in icons" :name="icon" scale="2.5" />
      </div>
    <br />
    <p class="text-justify text-sm leading-tight px-8">
      <span class="font-semibold">
        I am a scientist turned software developer. My scientific background means I am curious,
        analytical and always pushing myself to learn new things, all of which feed into my work as
        a developer.
      </span>
      <br />
      <br />
      The most rewarding part of my scientific work was building my own pieces of software to
      automate my data analysis and sharing these tools with my colleagues. This led me to change my
      career and pursue software development. I have recently completed the Northcoders software
      development bootcamp and I am now actively looking for my first role in tech
    </p>
  </main>
</template>
