import { createApp } from "vue";
import App from "./App.vue";
import { ripple } from "../src/ripple";

const app = createApp(App);

app.directive("ripple", ripple);
app.mount("#app");
