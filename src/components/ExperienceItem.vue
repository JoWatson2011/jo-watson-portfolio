<script>
export default {
  props: ['details']
}
</script>

<template>
  <section class="flex items-center my-2 bg-light-lightBlue/20 rounded-lg p-1 ">
    <div class="border border-white rounded-full bg-white mx-3">
      <v-icon :name="details.iconName" scale="2" :class="details.iconColour" />
    </div>
    <div class="flex flex-col">
      <div class="flex flex-wrap justify-between">
        <h3 class="font-bold text-[16px]">
          {{ details.heading }}
        </h3>
        <p class="text-sm">
          {{ details.dates }}
        </p>
      </div>
      <p>
        {{ details.subtitle }}
      </p>
      <p class="text-sm italic">
        {{ details.description }}
      </p>
    </div>
  </section>
</template>
