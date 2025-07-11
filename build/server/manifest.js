const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.wU13lET2.js",app:"_app/immutable/entry/app.sr8LaOKe.js",imports:["_app/immutable/entry/start.wU13lET2.js","_app/immutable/chunks/B9ffKQAm.js","_app/immutable/chunks/D9tbz5hf.js","_app/immutable/entry/app.sr8LaOKe.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/D9tbz5hf.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C9CklfIX.js')),
			__memo(() => import('./chunks/1-DxqsE-7F.js'))
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

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
