// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  CoGithub,
  BiLinkedin,
  ViFileTypeJsOfficial,
  ViFileTypePython,
  ViFileTypeRproj,
  ViFileTypePgsql,
  ViFileTypeReactjs,
  ViFileTypeHtml,
  ViFileTypeTailwind,
  SiExpress,
  SiGnubash,
  CoSocketIo,
  BiArchiveFill,
  IoDocumentText,
  BiEnvelopeOpenFill,
  BiGlobe,
  RiArrowUpSLine,
  RiTestTubeLine,
  LaUniversitySolid
} from 'oh-vue-icons/icons'
import './assets/tailwind.css'

addIcons(
  CoGithub,
  BiLinkedin,
  ViFileTypeJsOfficial,
  ViFileTypePython,
  ViFileTypeRproj,
  ViFileTypePgsql,
  ViFileTypeReactjs,
  ViFileTypeHtml,
  ViFileTypeTailwind,
  SiExpress,
  SiGnubash,
  CoSocketIo,
  BiArchiveFill,
  IoDocumentText,
  BiEnvelopeOpenFill,
  BiGlobe,
  RiArrowUpSLine,
  RiTestTubeLine,
  LaUniversitySolid
)

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
