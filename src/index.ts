import { createApp } from "vue";
import { createPinia } from "pinia";

// Routes
import Router from "@/router";

// Main app
import Main from "@/main.vue";

const App = createApp(Main);  // Create the app
const Pinia = createPinia();  // Create the store

App.use(Router);    // Use pinia store
App.use(Pinia);     // Use vue router
App.mount("#app");  // Mount the app
