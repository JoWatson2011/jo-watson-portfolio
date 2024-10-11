<script setup>
import PostIt from './PostIt.vue'
import ExternalLinkButton from './ExternalLinkButton.vue'
</script>
<script>
export default {
  inject: ['windowSize'],
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
      cardStyle: '',
      postItPadding: '',
      buttonLabel: this.frontEndURL ? 'Server' : 'Repo'
    }
  },
  methods: {
    getImageUrl() {
      return new URL(`../assets/project-card-images/${this.imageLocation}`, import.meta.url)
    },
    getImageAlt() {
      return `${this.Title} screenshot`
    },
    setStyle() {
      this.cardStyle = this.windowSize === 'large' ? ' ml-5' : ' m-auto max-w-[437px]'
      this.postItPadding = this.windowSize === 'large' ? '' : 'pb-7 m-3'
    }
  },
  mounted() {
    this.setStyle()
  },
  watch: {
    windowSize(size) {
      this.setStyle()
    }
  }
}
</script>

<template>
  <div :class="cardStyle">
    <PostIt :class="postItPadding">
      <div class="mx-1">
        <div class="flex items-center justify-between">
          <h3 class="px-4 text-[25px] font-bold">{{ Title }}</h3>
          <div class="flex flex-wrap justify-center p-2">
            <v-icon
              v-for="icon in techStackIcons"
              :name="icon.name"
              scale="2"
              class="bg-white border border-gray-500 rounded-full p-1 mx-1"
            />
          </div>
        </div>
        <img
          :src="getImageUrl()"
          :alt="getImageAlt()"
          class="bg-white rounded-lg border max-h-[200px] m-auto"
        />
        <p class="px-4 py-2 text-md text-black text-center">{{ description }}</p>
        <div class="flex justify-center">
          <ExternalLinkButton v-if="hostedURL" iconName="bi-globe" :url="hostedURL" text="Hosted" />
          <ExternalLinkButton
            v-if="frontEndURL"
            iconName="co-github"
            :url="frontEndURL"
            text="App"
          />
          <ExternalLinkButton
            v-if="backEndURL"
            iconName="co-github"
            :url="backEndURL"
            :text="buttonLabel"
          />
        </div>
      </div>
    </PostIt>
  </div>
</template>
