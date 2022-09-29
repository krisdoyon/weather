// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2mNKm":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
var _lunarphaseJsJs = require("./node_modules/lunarphase-js/dist/esm/lunarphase-js.js");
"use strict";
/////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL VARIABLES
let todayIndex, openData, meteoData, todayISO, moonData, today;
let isSearchOpen = false;
const locale = navigator.language;
const weekdays = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
];
const weatherCodeMap = new Map([
    [
        0,
        {
            label: "Clear Sky",
            icon: "01d"
        }
    ],
    [
        1,
        {
            label: "Mainly Clear",
            icon: "01d"
        }
    ],
    [
        2,
        {
            label: "Partly Cloudy",
            icon: "02d"
        }
    ],
    [
        3,
        {
            label: "Overcast",
            icon: "03d"
        }
    ],
    [
        45,
        {
            label: "Fog",
            icon: "50d"
        }
    ],
    [
        48,
        {
            label: "Fog",
            icon: "50d"
        }
    ],
    [
        51,
        {
            label: "Light Drizzle",
            icon: "09d"
        }
    ],
    [
        53,
        {
            label: "Moderate Drizzle",
            icon: "09d"
        }
    ],
    [
        55,
        {
            label: "Heavy Drizzle",
            icon: "09d"
        }
    ],
    [
        56,
        {
            label: "Freezing Drizzle",
            icon: "09d"
        }
    ],
    [
        57,
        {
            label: "Freezing Drizzle",
            icon: "096"
        }
    ],
    [
        61,
        {
            label: "Slight Rain",
            icon: "10d"
        }
    ],
    [
        63,
        {
            label: "Moderate Rain",
            icon: "09d"
        }
    ],
    [
        65,
        {
            label: "Heavy Rain",
            icon: "09d"
        }
    ],
    [
        66,
        {
            label: "Light Freezing Rain",
            icon: "09d"
        }
    ],
    [
        67,
        {
            label: "Heavy Freezing Rain",
            icon: "09d"
        }
    ],
    [
        71,
        {
            label: "Light Snow",
            icon: "13d"
        }
    ],
    [
        73,
        {
            label: "Moderate Snow",
            icon: "13d"
        }
    ],
    [
        75,
        {
            label: "Heavy Snow",
            icon: "13d"
        }
    ],
    [
        77,
        {
            label: "Snow Grains",
            icon: "13d"
        }
    ],
    [
        80,
        {
            label: "Light Rain Showers",
            icon: "10d"
        }
    ],
    [
        81,
        {
            label: "Moderate Rain Showers",
            icon: "09d"
        }
    ],
    [
        82,
        {
            label: "Heavy Rain Showers",
            icon: "09d"
        }
    ],
    [
        85,
        {
            label: "Slight Snow Showers",
            icon: "13d"
        }
    ],
    [
        86,
        {
            label: "Heavy Snow Showers",
            icon: "13d"
        }
    ],
    [
        95,
        {
            label: "Thunderstorms",
            icon: "11d"
        }
    ],
    [
        96,
        {
            label: "Thunderstorms",
            icon: "11d"
        }
    ],
    [
        99,
        {
            label: "Thunderstorms",
            icon: "11d"
        }
    ], 
]);
const moonIconMap = new Map([
    [
        "New"
    ],
    [
        "First Quarter"
    ]
]);
/////////////////////////////////////////////////////////////////////////////////////////////////
// DOM ELEMENTS
const body = document.querySelector("body");
const main = document.querySelector("main");
const btnSearch = document.querySelector(".btn-search");
const containerSearch = document.querySelector(".container-search");
const inputSearch = document.querySelector("#input-search");
const btnLocation = document.querySelector(".btn-location");
const labelLocation = document.querySelector(".label-location");
const labelTime = document.querySelector(".label-time");
const labelTimeUTC = document.querySelector(".label-time-utc");
const todayLabel = document.querySelector(".today");
const cardCurrent = document.querySelector(".card-current");
const cardForecast = document.querySelector(".card-forecast");
const cardDetails = document.querySelector(".card-details");
const cardAst = document.querySelector(".card-ast");
const cardSearch = document.querySelector(".card-search");
/////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
// API CALLS
const getMeteoData = async function(lat, lon) {
    const meteoResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&daily=precipitation_sum,temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
    if (!meteoResponse.ok) throw new Error("Problem getting current weather data from OpenMeteo");
    meteoData = await meteoResponse.json();
    console.log(`METEO DATA---------------`);
    console.log(meteoData);
};
const getOpenData = async function(lat, lon) {
    const openResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2365b77577087dbfc79d7061d3559704&units=imperial`);
    if (!openResponse.ok) throw new Error("Problem getting weather data from OpenWeatherMap");
    openData = await openResponse.json();
    console.log(`OPEN DATA---------------`);
    console.log(openData);
};
const getMoonData = async function(lat, lon) {
    const moonResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/${todayISO}/?key=G2KTKKSDX2CA79SJTJAYA52LU&include=days&elements=moonrise,moonset&timezone=${meteoData.timezone}`);
    if (!moonResponse.ok) throw new Error("Problem getting moon data");
    moonData = await moonResponse.json();
    console.log(`MOON DATA---------------`);
    console.log(moonData);
};
const getWeatherData = async function(lat, lon) {
    console.log("GETTING WEATHER DATA");
    try {
        await Promise.all([
            getMeteoData(lat, lon),
            getOpenData(lat, lon)
        ]);
        setDate();
        todayIndex = meteoData.daily.time.findIndex((date)=>date === todayISO);
        await getMoonData(lat, lon);
        displayWeather();
    } catch (err) {
        console.error(err);
    }
};
const getSearchResults = async function(query) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const data = await response.json();
    return data;
};
// DATE AND LOCATION FUNCTIONS
const setDate = function() {
    const now = new Date();
    todayISO = new Intl.DateTimeFormat("en-CA", {
        timeZone: `${meteoData.timezone}`
    }).format(now);
    const today = new Intl.DateTimeFormat(locale, {
        timeZone: `${meteoData.timezone}`,
        month: "long",
        day: "2-digit"
    }).format(now);
    todayLabel.textContent = today;
};
const getCurrentPosition = async function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
const handleLocationClick = async function() {
    try {
        const position = await getCurrentPosition();
        const { latitude: lat , longitude: lon  } = position.coords;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const data = await response.json();
        labelLocation.textContent = data.display_name;
        getWeatherData(lat, lon);
    } catch (err) {
        alert("Could not get your location.");
    }
};
// DISPLAY FUNCTIONS
const displayWeather = function() {
    displayCurrent();
    displayForecast();
    displayDetails();
    displayAst();
    main.style.transform = "translateY(0%)";
    main.style.opacity = "1";
    main.style.visibility = "visible";
    body.style.overflow = "auto";
};
const displayCurrent = function() {
    const html = `<div class="card-column">
    <img
      class="weather-icon"
      src="https://openweathermap.org/img/wn/${weatherCodeMap.get(meteoData.current_weather.weathercode).icon}@2x.png"
      /><span class="current-conditions">${weatherCodeMap.get(meteoData.current_weather.weathercode).label}
      </span>
      <span class="temp-range">${Math.round(meteoData.daily.temperature_2m_max[todayIndex])} / ${Math.round(meteoData.daily.temperature_2m_min[todayIndex])} &deg;F</span>
    </div>
      <div class="card-column">
      <span class="current-temp"
      >${Math.round(openData.main.temp)}<span class="current-temp-unit"> &deg;F</span></span
    ><span class="feels-like">Feels like: ${Math.round(openData.main.feels_like)} &deg;F</span>
  </div>`;
    cardCurrent.innerHTML = html;
};
const displayForecast = function() {
    const forecastDates = meteoData.daily.time.slice(todayIndex + 1, todayIndex + 6);
    const htmlArr = forecastDates.map((date, i)=>{
        const html = `<div class="card-forecast__day">
    <strong>${weekdays[new Date(`${date} 00:00:00`).getDay()]}</strong>
    <span>${date.split("-").slice(1, 3).join("/")}</span>
    <img
      class="weather-icon"
      src="https://openweathermap.org/img/wn/${weatherCodeMap.get(meteoData.daily.weathercode[todayIndex + i + 1]).icon}@2x.png"
    />
    <span>${weatherCodeMap.get(meteoData.daily.weathercode[todayIndex + i + 1]).label}</span>
    <span>${Math.round(meteoData.daily.temperature_2m_max[todayIndex + i + 1])} / ${Math.round(meteoData.daily.temperature_2m_min[todayIndex + i + 1])} &deg;F</span>
  </div>`;
        return html;
    });
    cardForecast.innerHTML = "";
    htmlArr.forEach((html)=>cardForecast.insertAdjacentHTML("beforeend", html));
};
const displayDetails = function() {
    const html = `<div class="detail">
    <span class="material-symbols-outlined detail__icon">
      water_drop
    </span>
    <div class="detail__label">HUMIDITY</div>
    <div class="detail__value">${openData.main.humidity}%</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> air </span>
    <div class="detail__label">WIND</div>
    <div class="detail__value">${Math.round(openData.wind.speed)} mph</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> cloud </span>
    <div class="detail__label">CLOUD COVER</div>
    <div class="detail__value">${openData.clouds.all}%</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> rainy </span>
    <div class="detail__label">PRECIPITATION</div>
    <div class="detail__value">${meteoData.daily.precipitation_sum[todayIndex]} in</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> visibility </span>
    <div class="detail__label">VISIBILITY</div>
    <div class="detail__value">${Math.round(openData.visibility / 1000 / 1.6)} mi</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> compress </span>
    <div class="detail__label">PRESSURE</div>
    <div class="detail__value">${Math.round(openData.main.pressure * 0.0295 * 100) / 100} in</div>
  </div>`;
    cardDetails.innerHTML = html;
};
const displayAst = function() {
    const dayLength = (openData.sys.sunset - openData.sys.sunrise) / 60 / 60;
    const html = `
  <h3 class="heading-ast">SUN</h3>
    <h3 class="heading-ast">MOON</h3>
    <span class="icon-ast icon-sun">☀️</span>
    <span class="icon-ast icon-moon">${(0, _lunarphaseJsJs.Moon).lunarPhaseEmoji()}</span>
    <div class="flex-column">
      <strong>Daylight</strong>
      <span class="ast-info"> ${Math.trunc(dayLength)} hr, ${Math.round(dayLength % Math.trunc(dayLength) * 60)} min</span>
    </div>
    <div class="flex-column">
      <strong>Phase</strong>
      <span class="ast-info">${(0, _lunarphaseJsJs.Moon).lunarPhase()}</span>
    </div>
    <div class="flex-column">
      <span class="ast-info"><strong>Rise:</strong> ${new Intl.DateTimeFormat(locale, {
        timeZone: `${meteoData.timezone}`,
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }).format(new Date(openData.sys.sunrise * 1000))}</span>
      <span class="ast-info"><strong>Set:</strong> ${new Intl.DateTimeFormat(locale, {
        timeZone: `${meteoData.timezone}`,
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }).format(new Date(openData.sys.sunset * 1000))}</span>
    </div>
    <div class="flex-column">
      <span class="ast-info"><strong>Rise: </strong>${convertTo12Hr(moonData.days[0].moonrise)}</span>
      <span class="ast-info"><strong>Set: </strong>${convertTo12Hr(moonData.days[0].moonset)}</span>
    </div>`;
    cardAst.innerHTML = html;
};
const displaySearchCard = function() {
    cardSearch.style.height = "25rem";
    cardSearch.style.visibility = "visible";
    cardSearch.style.opacity = "1";
};
const hideSearchCard = function() {
    cardSearch.innerHTML = "";
    cardSearch.style.height = "0rem";
    cardSearch.style.visibility = "hidden";
    cardSearch.style.opacity = "0";
};
const renderSearchResults = function(query) {
    cardSearch.innerHTML = "";
    getSearchResults(query).then((data)=>{
        if (!data.length) {
            const html = `<div class="no-results">No matching results. <br/> Please try again.</div>`;
            cardSearch.insertAdjacentHTML("beforeend", html);
            return;
        }
        data.forEach((result)=>{
            const html = `<button class="btn btn-search-result" data-lat="${result.lat}" data-lon="${result.lon}" data-label="${result.display_name}">
        ${result.display_name}</button>
      `;
            cardSearch.insertAdjacentHTML("beforeend", html);
        });
    });
};
const convertTo12Hr = function(time) {
    const timeArr = time.slice(0, -3).split(":");
    let [hour, min] = timeArr;
    const suffix = hour > 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}:${min} ${suffix}`;
};
/////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT HANDLERS
document.addEventListener("click", function(e) {
    !e.target.classList.contains("card-search") && !e.target.closest(".container-search") && hideSearchCard();
});
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") btnSearch.click();
});
containerSearch.addEventListener("click", function(e) {
    if (e.target.closest(".btn-location")) {
        handleLocationClick();
        hideSearchCard();
    } else if (e.target.classList.contains("btn-search")) {
        inputSearch.value || alert("Please enter a search term");
        if (!inputSearch.value) return;
        renderSearchResults(inputSearch.value);
        displaySearchCard();
        isSearchOpen = true;
    } else return;
});
cardSearch.addEventListener("click", function(e) {
    const clicked = e.target.closest(".btn-search-result");
    if (!clicked) return;
    getWeatherData(clicked.dataset.lat, clicked.dataset.lon);
    labelLocation.textContent = clicked.dataset.label;
    hideSearchCard();
    inputSearch.value = "";
});

},{"./node_modules/lunarphase-js/dist/esm/lunarphase-js.js":"9JXUA"}],"9JXUA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hemisphere", ()=>Hemisphere);
parcelHelpers.export(exports, "JulianDay", ()=>JulianDay);
parcelHelpers.export(exports, "LunarEmoji", ()=>LunarEmoji);
parcelHelpers.export(exports, "LunarMonth", ()=>LunarMonth);
parcelHelpers.export(exports, "LunarPhase", ()=>LunarPhase);
parcelHelpers.export(exports, "Moon", ()=>Moon);
parcelHelpers.export(exports, "Time", ()=>Time);
parcelHelpers.export(exports, "Unit", ()=>Unit);
/**
 * Earth's hemispheres.
 *
 * @typedef {string} Hemisphere
 * @enum {Hemisphere}
 */ const Hemisphere = {
    NORTHERN: "Northern",
    SOUTHERN: "Southern"
};
/**
 * Enumeration of lunar phases as emoji
 *
 * @typedef {string} LunarEmoji
 */ const LunarEmoji = {
    /**
   * Enumeration of lunar phases as emoji for the Northern Hemisphere.
   * @num {LunarPhase}
   */ NorthernHemisphere: {
        NEW: "\uD83C\uDF11",
        WAXING_CRESCENT: "\uD83C\uDF12",
        FIRST_QUARTER: "\uD83C\uDF13",
        WAXING_GIBBOUS: "\uD83C\uDF14",
        FULL: "\uD83C\uDF15",
        WANING_GIBBOUS: "\uD83C\uDF16",
        LAST_QUARTER: "\uD83C\uDF17",
        WANING_CRESCENT: "\uD83C\uDF18"
    },
    /**
   * Enumeration of lunar phases as emoji for the Southern Hemisphere.
   * @num {LunarPhase}
   */ SouthernHemisphere: {
        NEW: "\uD83C\uDF11",
        WAXING_CRESCENT: "\uD83C\uDF18",
        FIRST_QUARTER: "\uD83C\uDF17",
        WAXING_GIBBOUS: "\uD83C\uDF16",
        FULL: "\uD83C\uDF15",
        WANING_GIBBOUS: "\uD83C\uDF14",
        LAST_QUARTER: "\uD83C\uDF13",
        WANING_CRESCENT: "\uD83C\uDF12"
    }
};
/**
 * Lunar month, time between two successive syzygies of the
 * same type: new moons or full moons
 *
 * @typedef {string} LunarMonth
 * @enum {LunarMonth}
 */ const LunarMonth = {
    ANOMALISTIC: "Anomalistic",
    DRACONIC: "Draconic",
    SIDEREAL: "Sidereal",
    SYNODIC: "Synodic",
    TROPICAL: "Tropical"
};
/**
 * Enumeration of lunar phases
 *
 * @typedef {string} LunarPhase
 * @enum {LunarPhase}
 */ const LunarPhase = {
    NEW: "New",
    WAXING_CRESCENT: "Waxing Crescent",
    FIRST_QUARTER: "First Quarter",
    WAXING_GIBBOUS: "Waxing Gibbous",
    FULL: "Full",
    WANING_GIBBOUS: "Waning Gibbous",
    LAST_QUARTER: "Last Quarter",
    WANING_CRESCENT: "Waning Crescent"
};
/**
 * Units of measure
 *
 * @typedef {string} Unit
 * @enum {Unit}
 */ const Unit = {
    EARTH_RADII: "Earth Radii",
    KILOMETERS: "km",
    MILES: "m"
};
/**
 * Timestamp epoch, January 1, 1970, in Julian Days.
 * @type {number}
 */ const EPOCH = 2440587.5;
/**
 * Lunation 1 as the first new moon of 1923 at approximately
 * 02:41 UTC, January 17, 1923 per Ernest William Brown's lunar theory.
 * @type {number}
 */ const LUNATION_BASE_JULIAN_DAY = 2423436.6115277777;
/**
 * Length of one phase (1/8 of a synodic month) in Earth days.
 * @type {number}
 */ const PHASE_LENGTH = 3.69132346322;
/**
 * Orbital period of the Moon from perigee to apogee and back to perigee
 * @type {number}
 */ const ANOMALISTIC_MONTH = 27.55454988;
/**
 * Length of one synodic month - lunation, or days for the phases to complete a cycle.
 * Time between two identical syzygies, equivalent of 29.53059 Earth days.
 *
 * Based on Mean Synodic Month, 2000 AD mean solar days.
 * @type {number}
 */ const SYNODIC_MONTH = 29.53058770576;
var Time = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    EPOCH: EPOCH,
    LUNATION_BASE_JULIAN_DAY: LUNATION_BASE_JULIAN_DAY,
    PHASE_LENGTH: PHASE_LENGTH,
    ANOMALISTIC_MONTH: ANOMALISTIC_MONTH,
    SYNODIC_MONTH: SYNODIC_MONTH
});
/**
 * Normalization utility for percentage calculations.
 *
 * @param {number} value Percent value.
 * @returns {number} Normalized value
 */ const normalize = (value)=>{
    value -= Math.floor(value);
    if (value < 0) value += 1;
    return value;
};
/**
 * Julian day from Gregorian date.
 * @param {Date} date Gregorian date to convert to Julian day.
 * @returns {number} Julian Day
 */ const fromDate = (date = new Date())=>{
    const time = date.getTime();
    return time / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH;
};
/**
 * Gregorian date from Julian day
 * @param {number} julian Julian dat to convert to Gregorian date
 * @returns {Date} Gregorian date
 */ const toDate = (julian)=>{
    let date = new Date();
    date.setTime((julian - EPOCH + date.getTimezoneOffset() / 1440) * 86400000);
    return date;
};
var JulianDay = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    fromDate: fromDate,
    toDate: toDate
});
/**
 * Moon's age, or Earth days since the last new moon.
 *
 * @param {Date} date Date used for calculation.
 * @returns {number} Age of the moon, normalized within a 29.53059 Earth days calendar.
 */ const lunarAge = (date = new Date())=>{
    const percent = lunarAgePercent(date);
    return percent * SYNODIC_MONTH;
};
/**
 * Percentage through the lunar synodic month.
 *
 * @param {Date} date Date used for calculation.
 * @returns {number} Percentage through the lunar month.
 */ const lunarAgePercent = (date = new Date())=>{
    return normalize((fromDate(date) - 2451550.1) / SYNODIC_MONTH);
};
/**
 * Brown Lunation Number (BLN), per Ernest William Brown's lunar theory,
 * defining Lunation 1 as the first new moon of 1923 at
 * approximately 02:41 UTC, January 17, 1923.
 *
 * @param {Date} date Date used for calculation.
 * @returns {number} Lunation Number
 */ const lunationNumber = (date = new Date())=>{
    return Math.round((fromDate(date) - LUNATION_BASE_JULIAN_DAY) / SYNODIC_MONTH) + 1;
};
/**
 * Distance to the moon measured in units of Earth radii, with
 * perigee at 56 and apogee at 63.8.
 *
 * @param {Date} date Date used for calculation
 * @returns {number} Distance to the moon in Earth radii
 */ const lunarDistance = (date = new Date())=>{
    const julian = fromDate(date);
    const agePercent = lunarAgePercent(date);
    const radians = agePercent * 2 * Math.PI;
    const percent = 2 * Math.PI * normalize((julian - 2451562.2) / ANOMALISTIC_MONTH);
    return 60.4 - 3.3 * Math.cos(percent) - 0.6 * Math.cos(2 * radians - percent) - 0.5 * Math.cos(2 * radians);
};
/**
 * Name of the lunar phase per date submitted.
 *
 * @param {Date} date Date used to calculate lunar phase.
 * @returns {string} Name as string of the current lunar phase.
 */ const lunarPhase = (date = new Date())=>{
    const age = lunarAge(date);
    if (age < 1.84566173161) return LunarPhase.NEW;
    else if (age < 5.53698519483) return LunarPhase.WAXING_CRESCENT;
    else if (age < 9.22830865805) return LunarPhase.FIRST_QUARTER;
    else if (age < 12.91963212127) return LunarPhase.WAXING_GIBBOUS;
    else if (age < 16.61095558449) return LunarPhase.FULL;
    else if (age < 20.30227904771) return LunarPhase.WANING_GIBBOUS;
    else if (age < 23.99360251093) return LunarPhase.LAST_QUARTER;
    else if (age < 27.68492597415) return LunarPhase.WANING_CRESCENT;
    return LunarPhase.NEW;
};
/**
 * Emoji of the lunar phase per date submitted.
 *
 * @param {Date} date Date used to calculate lunar phase.
 * @param {Hemisphere} hemisphere Northern or Southern Hemisphere.
 * @returns Emoji of the current lunar phase.
 */ const lunarPhaseEmoji = (date = new Date(), hemisphere = Hemisphere.NORTHERN)=>{
    const phase = lunarPhase(date);
    return emojiForLunarPhase(phase, hemisphere);
};
/**
 * Emoji for specified lunar phase.
 *
 * @param {LunarPhase} phase Lunar phase, per the LunarPhase enum
 * @param {Hemisphere} hemisphere Northern or Southern Hemisphere.
 * @returns {string} Emoji of the current lunar phase.
 */ const emojiForLunarPhase = (phase, hemisphere = Hemisphere.NORTHERN)=>{
    let emoji;
    if (hemisphere === Hemisphere.SOUTHERN) emoji = LunarEmoji.SouthernHemisphere;
    else emoji = LunarEmoji.NorthernHemisphere;
    switch(phase){
        case LunarPhase.WANING_CRESCENT:
            return emoji["WANING_CRESCENT"];
        case LunarPhase.LAST_QUARTER:
            return emoji["LAST_QUARTER"];
        case LunarPhase.WANING_GIBBOUS:
            return emoji["WANING_GIBBOUS"];
        case LunarPhase.FULL:
            return emoji["FULL"];
        case LunarPhase.WAXING_GIBBOUS:
            return emoji["WAXING_GIBBOUS"];
        case LunarPhase.FIRST_QUARTER:
            return emoji["FIRST_QUARTER"];
        case LunarPhase.WAXING_CRESCENT:
            return emoji["WAXING_CRESCENT"];
        default:
        case LunarPhase.NEW:
            return emoji["NEW"];
    }
};
/**
 * Whether the moon is currently waxing (growing).
 *
 * @param {Date} date Date used for calculation.
 * @returns {boolean} True if moon is waxing.
 */ const isWaxing = (date = new Date())=>{
    const age = lunarAge(date);
    return age <= 14.765;
};
/**
 * Whether the moon is currently waning (shrinking).
 *
 * @param {Date} date Date used for calculation.
 * @returns {boolean} True if moon is waning.
 */ const isWaning = (date = new Date())=>{
    const age = lunarAge(date);
    return age > 14.765;
};
var Moon = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    lunarAge: lunarAge,
    lunarAgePercent: lunarAgePercent,
    lunationNumber: lunationNumber,
    lunarDistance: lunarDistance,
    lunarPhase: lunarPhase,
    lunarPhaseEmoji: lunarPhaseEmoji,
    emojiForLunarPhase: emojiForLunarPhase,
    isWaxing: isWaxing,
    isWaning: isWaning
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2mNKm","6rimH"], "6rimH", "parcelRequire8fb7")

//# sourceMappingURL=index.8cfc62b9.js.map
