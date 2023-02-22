import { createApp } from "vue";
import App from "./App.vue";
import Ripple from "../src/ripple";

const app = createApp(App);

app.directive("ripple", Ripple);
app.mount("#app");
