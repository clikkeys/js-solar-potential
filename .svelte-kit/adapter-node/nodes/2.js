import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.2jGYoP4y.js","_app/immutable/chunks/B7JNZKhQ.js","_app/immutable/chunks/D9tbz5hf.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/2.gmxyQmTy.css"];
export const fonts = [];
