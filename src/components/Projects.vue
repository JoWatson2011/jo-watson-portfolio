<script setup>
import projects from '../assets/projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<script>
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projects,
      selected: 'NC news',
      projectDetails: {}
    }
  },
  methods: {
    onSelect() {
      console.log(this.selected)
      this.projectDetails = this.projects.filter((project) => project.Title === this.selected)[0]
    }
  },
  mounted() {
    this.onSelect()
  }
}
</script>

<template>
  <div class="flex justify-center my-4">
    <label for="project-select" class="mr-5 text-black font-medium">Select a project: </label>
    <select
      name="project"
      id="project-select"
      v-model="selected"
      @change="onSelect"
      class="rounded-full shadow-block-dropdown"
    >
      <option v-for="project in projects" :value="project.Title">{{ project.Title }}</option>
    </select>
  </div>
  <ProjectCard
    :Title="projectDetails.Title"
    :description="projectDetails.description"
    :imageLocation="projectDetails.imageLocation"
    :frontEndURL="projectDetails.frontEndURL"
    :backEndURL="projectDetails.backEndURL"
    :hostedURL="projectDetails.hostedURL"
    :techStackIcons="projectDetails.techStackIcons"
  />
</template>
