import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHome, BiSearch, CoLibrary, CoPlus, BiArrowRightShort } from "oh-vue-icons/icons";

addIcons(CoHome, BiSearch, CoLibrary, CoPlus, BiArrowRightShort);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");