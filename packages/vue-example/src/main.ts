import { createApp } from "vue";
import App from "./App.vue";

import {
  applyPolyfills,
  defineCustomElements,
} from "@web-components-demo/components/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("web-components-demo-");

app.mount("#app");
