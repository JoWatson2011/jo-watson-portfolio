<script setup>
import PostIt from './PostIt.vue'
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>
<script>
export default {
  props: {
    Title: String,
    imageLocation: String,
    description: String,
    frontEndURL: String,
    backEndURL: String,
    hostedURL: String,
    techStackIcons: Object
  },
  data() {
    return {
      imgAltText: this.Title
    }
  }
}
</script>

<template>
  <PostIt class="mr-1 ml-5 object-contain">
    <div class="mx-1 ">
      <div class="flex items-center justify-between">
        <h3 class="px-4 text-[25px] font-bold">{{ Title }}</h3>
        <div class="flex justify-center p-2">
          <v-icon
            v-for="icon in techStackIcons"
            :name="icon.name"
            scale="2"
            class="bg-white border border-gray-500 rounded-full p-1 mx-1"
          />
        </div>
      </div>
      <img
        :alt="imgAltText"
        :src="imageLocation"
        class="bg-white rounded-lg border h-[200px] m-auto"
      />
      <p class="px-4 py-2 text-md text-black text-center">{{ description }}</p>
      <div class="flex justify-center">
        <ExternalLinkButton v-if="hostedURL" iconName="bi-globe" :url="hostedURL" text="Hosted" />
        <ExternalLinkButton v-if="frontEndURL" iconName="co-github" :url="frontEndURL" text="App" />
        <ExternalLinkButton
          v-if="backEndURL"
          iconName="co-github"
          :url="backEndURL"
          text="Server"
        />
      </div>
    </div>
  </PostIt>
</template>
