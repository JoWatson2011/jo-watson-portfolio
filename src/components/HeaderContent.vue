<template>
  <div class="flex flex-col items-center justify-center pt-8 pb-8">
    <RouterLink to="/">
      <img
        alt="stardew-valley-avatar"
        class="rounded-full mr-[10px] shadow-block-image"
        src="@/assets/avatar.png"
        width="125"
        height="125"
      />
    </RouterLink>
    <div>
      <RouterLink to="/">
        <h1 class="text-[2rem] font-semibold whitespace-nowrap text-center text-black">
          Jo Watson
        </h1>
      </RouterLink>
      <h2 class="text-[1.5rem] whitespace-nowrap text=center text-black">
        Junior Software Developer
      </h2>
    </div>
  </div>
</template>

<style scoped></style>
