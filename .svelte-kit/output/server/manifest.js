export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","github-mark.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.spi_dTaT.js",app:"_app/immutable/entry/app.ibAyfYLq.js",imports:["_app/immutable/entry/start.spi_dTaT.js","_app/immutable/chunks/BSBMfQIu.js","_app/immutable/chunks/D9tbz5hf.js","_app/immutable/entry/app.ibAyfYLq.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/D9tbz5hf.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
