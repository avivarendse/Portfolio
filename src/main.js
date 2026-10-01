import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import scrollReveal from './directives/scrollReveal'

createApp(App).directive('reveal', scrollReveal).mount('#app')
