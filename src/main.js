import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";
import { createPinia } from "pinia";
// import axios from "axios";
import "./assets/styles/global.css";

createApp(App).use(createPinia()).use(router).mount("#app");
