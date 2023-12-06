import './assets/main.css'

import { createApp } from 'vue'
//import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/styles/a11y-dark.css';
import hljs from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('sql', sql);

import App from './App.vue'

createApp(App).mount('#app')
