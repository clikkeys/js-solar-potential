import { c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
import "@material/web/button/elevated-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/text-button.js";
import "@material/web/dialog/dialog.js";
import "@material/web/divider/divider.js";
import "@material/web/icon/icon.js";
import "@material/web/iconbutton/filled-icon-button.js";
import "@material/web/iconbutton/icon-button.js";
import "@material/web/progress/circular-progress.js";
import "@material/web/progress/linear-progress.js";
import "@material/web/ripple/ripple.js";
import "@material/web/slider/slider.js";
import "@material/web/switch/switch.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/textfield/outlined-text-field.js";
import { u as updated } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_updated;
  $$unsubscribe_updated = subscribe(updated, (value) => value);
  $$unsubscribe_updated();
  return `  ${$$result.head += `<!-- HEAD_svelte-1tsa0qn_START -->${$$result.title = `<title>Solar API demo</title>`, ""}<meta name="description" content="Solar API demo"><!-- HEAD_svelte-1tsa0qn_END -->`, ""} <main class="surface on-surface-text body-medium flex flex-col w-screen h-screen">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
