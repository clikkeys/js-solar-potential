import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
import "@googlemaps/js-api-loader";
import "geotiff-geokeys-to-proj4";
import "proj4";
import "google-charts";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `   <div class="flex flex-row h-full"> <div class="w-full"${add_attribute()}></div>  <aside class="flex-none md:w-96 w-80 p-2 pt-3 overflow-auto"><div class="flex flex-col space-y-2 h-full">${``} <div class="p-4 surface-variant outline-text rounded-lg space-y-3" data-svelte-h="svelte-18jpnqr"><p><a class="primary-text" href="https://developers.google.com/maps/documentation/solar/overview?hl=en" target="_blank">Two distinct endpoints of the <b>Solar API</b> <md-icon class="text-sm">open_in_new</md-icon></a>
          offer many benefits to solar marketplace websites, solar installers, and solar SaaS designers.</p> <p><b>Click on an area below</b>
          to see what type of information the Solar API can provide.</p></div> ${``} <div class="grow"></div> <div class="flex flex-col items-center w-full" data-svelte-h="svelte-1h9sw2y"><md-text-button href="https://github.com/googlemaps-samples/js-solar-potential" target="_blank">View code on GitHub
          <img slot="icon" src="github-mark.svg" alt="GitHub" width="16" height="16"></md-text-button></div> <span class="pb-4 text-center outline-text label-small" data-svelte-h="svelte-rbs5ep">This is not an officially supported Google product.</span></div></aside></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
