if (!self.define) {
    let e, i = {};
    const s = (s, n) => (s = new URL(s + ".js",n).href,
    i[s] || new Promise((i => {
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = s,
            e.onload = i,
            document.head.appendChild(e)
        } else
            e = s,
            importScripts(s),
            i()
    }
    )).then(( () => {
        let e = i[s];
        if (!e)
            throw new Error(`Module ${s} didn’t register its module`);
        return e
    }
    )));
    self.define = (n, o) => {
        const d = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (i[d])
            return;
        let r = {};
        const l = e => s(e, d)
          , t = {
            module: {
                uri: d
            },
            exports: r,
            require: l
        };
        i[d] = Promise.all(n.map((e => t[e] || l(e)))).then((e => (o(...e),
        r)))
    }
}
define(["workbox-3e911b1d"], (function(e) {
    "use strict";
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([{
        url: "android.html",
        revision: "7e0d2b49372de816f70baa51d81a8c7d"
    }, {
        url: "assets/index-QwwXb8x8.js",
        revision: null
    }, {
        url: "assets/index-Yy3R-v4s.css",
        revision: null
    }, {
        url: "index.html",
        revision: "6072eb26761b027eb01ea8e16019b509"
    }, {
        url: "images/logo64.png",
        revision: "a6f2fb303832d9763dff57ac188c8d75"
    }, {
        url: "images/logo192.png",
        revision: "a3db5dbcefc4969d7d94ed5a1a8109cf"
    }, {
        url: "images/logo512.png",
        revision: "3bd6cbc0e58276c279e0ca0758301fef"
    }, {
        url: "images/logo192_maskable.png",
        revision: "c3bedd0d9bad8871fd7b0d3dfe00ebc6"
    }, {
        url: "images/logo512_maskable.png",
        revision: "3b507a70e2a78cc0f28b4e7b77cb1da0"
    }, {
        url: "manifest.webmanifest",
        revision: "a0040a3069bf91cdfd95b189ad696079"
    }], {}),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{
        allowlist: [/^\/$/]
    }))
}
));
