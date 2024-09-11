/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import KDMIcon from "./components/KDMIcon.vue";
import KDMImage from "./components/KDMImage.vue";
import ToolTip from './components/ToolTip.vue';

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import "./assets/cerceis.css";

const app = createApp(App)

app.component("KDMIcon", KDMIcon);
app.component("KDMImage", KDMImage); 
app.component("ToolTip", ToolTip);

registerPlugins(app)

app.mount('#app')
