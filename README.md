# vue3-ripple

This package provide directive for ripple effect on click

## Installation

    npm install vue3-ripple

## Basic usage

```js
import { createApp } from "vue";
import App from "./App.vue";
import { ripple } from "../src/ripple";

const app = createApp(App);

app.directive("ripple", ripple);
app.mount("#app");
```

```js
<button class="btn" v-ripple>
  click
</button>
```

Default color rgba(226, 237, 255, 0.5)

## Modify color

```js
<button class="btn" v-ripple="{color: 'rgba(0, 0, 0, 0.5)'}">
  click
</button>
```
