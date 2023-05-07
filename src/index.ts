/* 
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
*/

const app = document.getElementById("app") as HTMLDivElement;
const addContent = app.innerHTML = "I want to be here";
console.log("I am testing");