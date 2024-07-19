<template>
  <section
    class="relative  border border-amber-950 rounded rounded-br-[30px] bg-yellow-100 shadow-project-card"
  >
    <div class="relative h-[30px] w-full bg-yellow-200 rounded-t-lg mb-2">&nbsp;</div>
    <slot></slot>
    <div
      class="absolute bottom-0 right-0 w-[30px] h-[30px] bg-yellow-200 rounded-br-[30px] border-t border-l border-amber-950"
    ></div>
  </section>
</template>
