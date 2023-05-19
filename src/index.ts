import { createApp } from "vue";
import { createPinia } from "pinia";

// Routes
import Router from "@/router.ts";
// Main app
import Main from "@/main.vue";

// Create the app
const App = createApp(Main);
// Create the store
const Pinia = createPinia();

// Use pinia store
App.use(Router);
// Use vue router
App.use(Pinia);
// Mount the app
App.mount("#app");
