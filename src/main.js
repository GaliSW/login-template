import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./assets/scss/style.css";

createApp(App).use(createPinia).mount("#app");
