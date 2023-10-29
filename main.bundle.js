"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove default margin.
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Correct \`block\` display not defined for any HTML5 element in IE 8/9.
 * Correct \`block\` display not defined for \`details\` or \`summary\` in IE 10/11
 * and Firefox.
 * Correct \`block\` display not defined for \`main\` in IE 11.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

/**
 * 1. Correct \`inline-block\` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of \`progress\` in Chrome, Firefox, and Opera.
 */

audio,
canvas,
progress,
video {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Prevent modern browsers from displaying \`audio\` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address \`[hidden]\` styling not present in IE 8/9/10.
 * Hide the \`template\` element in IE 8/9/11, Safari, and Firefox < 22.
 */

[hidden],
template {
  display: none;
}

/* Links
   ========================================================================== */

/**
 * Remove the gray background color from active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */

abbr[title] {
  border-bottom: 1px dotted;
}

/**
 * Address style set to \`bolder\` in Firefox 4+, Safari, and Chrome.
 */

b,
strong {
  font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */

dfn {
  font-style: italic;
}

/**
 * Address variable \`h1\` font-size and margin within \`section\` and \`article\`
 * contexts in Firefox 4+, Safari, and Chrome.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */

mark {
  background: #ff0;
  color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` affecting \`line-height\` in all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove border when inside \`a\` element in IE 8/9/10.
 */

img {
  border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * Address margin not present in IE 8/9 and Safari.
 */

figure {
  margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

/**
 * Contain overflow in all browsers.
 */

pre {
  overflow: auto;
}

/**
 * Address odd \`em\`-unit font size rendering in all browsers.
 */

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
   ========================================================================== */

/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of \`select\`, unless a \`border\` property is set.
 */

/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */

button,
input,
optgroup,
select,
textarea {
  color: inherit; /* 1 */
  font: inherit; /* 2 */
  margin: 0; /* 3 */
}

/**
 * Address \`overflow\` set to \`hidden\` in IE 8/9/10/11.
 */

button {
  overflow: visible;
}

/**
 * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
 * All other form control elements do not inherit \`text-transform\` values.
 * Correct \`button\` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct \`select\` style inheritance in Firefox.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \`audio\`
 *    and \`video\` controls.
 * 2. Correct inability to style clickable \`input\` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    \`input\` and others.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * Address Firefox 4+ setting \`line-height\` on \`input\` using \`!important\` in
 * the UA stylesheet.
 */

input {
  line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to \`content-box\` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * \`font-size\` values of the \`input\`, it causes the cursor style of the
 * decrement button to change from \`default\` to \`text\`.
 */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Address \`appearance\` set to \`searchfield\` in Safari and Chrome.
 * 2. Address \`box-sizing\` set to \`border-box\` in Safari and Chrome
 *    (include \`-moz\` to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and \`textfield\` appearance).
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct \`color\` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */

textarea {
  overflow: auto;
}

/**
 * Don't inherit the \`font-weight\` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */

optgroup {
  font-weight: bold;
}

/* Tables
   ========================================================================== */

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}`, "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2DAA2D;;AAE3D;;;;EAIE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,0BAA0B,EAAE,MAAM;EAClC,8BAA8B,EAAE,MAAM;AACxC;;AAEA;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;+EAC+E;;AAE/E;;;;;EAKE;;AAEF;;;;;;;;;;;;;EAaE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;;;EAIE,qBAAqB,EAAE,MAAM;EAC7B,wBAAwB,EAAE,MAAM;AAClC;;AAEA;;;EAGE;;AAEF;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE;;AAEF;;EAEE,aAAa;AACf;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;EAEE;;AAEF;;EAEE,UAAU;AACZ;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;AAC3B;;AAEA;;EAEE;;AAEF;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;;;EAIE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE;;AAEF;;;;;EAKE,cAAc,EAAE,MAAM;EACtB,aAAa,EAAE,MAAM;EACrB,SAAS,EAAE,MAAM;AACnB;;AAEA;;EAEE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;;;;;EAKE;;AAEF;;EAEE,oBAAoB;AACtB;;AAEA;;;;;;EAME;;AAEF;;;;EAIE,0BAA0B,EAAE,MAAM;EAClC,eAAe,EAAE,MAAM;AACzB;;AAEA;;EAEE;;AAEF;;EAEE,eAAe;AACjB;;AAEA;;EAEE;;AAEF;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB;AACrB;;AAEA;;;;;;EAME;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;;;EAIE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;;EAIE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,4BAA4B;EAC5B,+BAA+B,EAAE,MAAM;EACvC,uBAAuB;AACzB;;AAEA;;;;EAIE;;AAEF;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE;;AAEF;EACE,SAAS,EAAE,MAAM;EACjB,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;AACZ","sourcesContent":["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/skeleton.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
* Skeleton V2.0.4
* Copyright 2014, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 12/29/2014
*/


/* Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––
- Grid
- Base Styles
- Typography
- Links
- Buttons
- Forms
- Lists
- Code
- Tables
- Spacing
- Utilities
- Clearing
- Media Queries
*/


/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; }
.column,
.columns {
  width: 100%;
  float: left;
  box-sizing: border-box; }

/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0; }
}

/* For devices larger than 550px */
@media (min-width: 550px) {
  .container {
    width: 80%; }
  .column,
  .columns {
    margin-left: 4%; }
  .column:first-child,
  .columns:first-child {
    margin-left: 0; }

  .one.column,
  .one.columns                    { width: 4.66666666667%; }
  .two.columns                    { width: 13.3333333333%; }
  .three.columns                  { width: 22%;            }
  .four.columns                   { width: 30.6666666667%; }
  .five.columns                   { width: 39.3333333333%; }
  .six.columns                    { width: 48%;            }
  .seven.columns                  { width: 56.6666666667%; }
  .eight.columns                  { width: 65.3333333333%; }
  .nine.columns                   { width: 74.0%;          }
  .ten.columns                    { width: 82.6666666667%; }
  .eleven.columns                 { width: 91.3333333333%; }
  .twelve.columns                 { width: 100%; margin-left: 0; }

  .one-third.column               { width: 30.6666666667%; }
  .two-thirds.column              { width: 65.3333333333%; }

  .one-half.column                { width: 48%; }

  /* Offsets */
  .offset-by-one.column,
  .offset-by-one.columns          { margin-left: 8.66666666667%; }
  .offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
  .offset-by-three.column,
  .offset-by-three.columns        { margin-left: 26%;            }
  .offset-by-four.column,
  .offset-by-four.columns         { margin-left: 34.6666666667%; }
  .offset-by-five.column,
  .offset-by-five.columns         { margin-left: 43.3333333333%; }
  .offset-by-six.column,
  .offset-by-six.columns          { margin-left: 52%;            }
  .offset-by-seven.column,
  .offset-by-seven.columns        { margin-left: 60.6666666667%; }
  .offset-by-eight.column,
  .offset-by-eight.columns        { margin-left: 69.3333333333%; }
  .offset-by-nine.column,
  .offset-by-nine.columns         { margin-left: 78.0%;          }
  .offset-by-ten.column,
  .offset-by-ten.columns          { margin-left: 86.6666666667%; }
  .offset-by-eleven.column,
  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }

  .offset-by-one-third.column,
  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }

  .offset-by-one-half.column,
  .offset-by-one-half.columns     { margin-left: 52%; }

}


/* Base Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* NOTE
html is set to 62.5% so that all the REM measurements throughout Skeleton
are based on 10px sizing. So basically 1.5rem = 15px :) */
html {
  font-size: 62.5%; }
body {
  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #222; }


/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

/* Larger than phablet */
@media (min-width: 550px) {
  h1 { font-size: 5.0rem; }
  h2 { font-size: 4.2rem; }
  h3 { font-size: 3.6rem; }
  h4 { font-size: 3.0rem; }
  h5 { font-size: 2.4rem; }
  h6 { font-size: 1.5rem; }
}

p {
  margin-top: 0; }


/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a {
  color: #1EAEDB; }
a:hover {
  color: #0FA0CE; }


/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box; }
.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  color: #333;
  border-color: #888;
  outline: 0; }
.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: #FFF;
  background-color: #33C3F0;
  border-color: #33C3F0; }
.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: #FFF;
  background-color: #1EAEDB;
  border-color: #1EAEDB; }


/* Forms
–––––––––––––––––––––––––––––––––––––––––––––––––– */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box; }
/* Removes awkward default styles on some inputs for iOS */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
textarea {
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px; }
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
  border: 1px solid #33C3F0;
  outline: 0; }
label,
legend {
  display: block;
  margin-bottom: .5rem;
  font-weight: 600; }
fieldset {
  padding: 0;
  border-width: 0; }
input[type="checkbox"],
input[type="radio"] {
  display: inline; }
label > .label-body {
  display: inline-block;
  margin-left: .5rem;
  font-weight: normal; }


/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */
ul {
  list-style: circle inside; }
ol {
  list-style: decimal inside; }
ol, ul {
  padding-left: 0;
  margin-top: 0; }
ul ul,
ul ol,
ol ol,
ol ul {
  margin: 1.5rem 0 1.5rem 3rem;
  font-size: 90%; }
li {
  margin-bottom: 1rem; }


/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px; }
pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre; }


/* Tables
–––––––––––––––––––––––––––––––––––––––––––––––––– */
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1; }
th:first-child,
td:first-child {
  padding-left: 0; }
th:last-child,
td:last-child {
  padding-right: 0; }


/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
button,
.button {
  margin-bottom: 1rem; }
input,
textarea,
select,
fieldset {
  margin-bottom: 1.5rem; }
pre,
blockquote,
dl,
figure,
table,
p,
ul,
ol,
form {
  margin-bottom: 2.5rem; }


/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.u-full-width {
  width: 100%;
  box-sizing: border-box; }
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box; }
.u-pull-right {
  float: right; }
.u-pull-left {
  float: left; }


/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid #E1E1E1; }


/* Clearing
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Self Clearing Goodness */
.container:after,
.row:after,
.u-cf {
  content: "";
  display: table;
  clear: both; }


/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
Note: The best way to structure the use of media queries is to create the queries
near the relevant code. For example, if you wanted to change the styles for buttons
on small devices, paste the mobile query code up in the buttons section and style it
there.
*/


/* Larger than mobile */
@media (min-width: 400px) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {}

/* Larger than tablet */
@media (min-width: 750px) {}

/* Larger than desktop */
@media (min-width: 1000px) {}

/* Larger than Desktop HD */
@media (min-width: 1200px) {}
`, "",{"version":3,"sources":["webpack://./src/skeleton.css"],"names":[],"mappings":"AAAA;;;;;;;CAOC;;;AAGD;;;;;;;;;;;;;;;CAeC;;;AAGD;oDACoD;AACpD;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,sBAAsB,EAAE;AAC1B;;EAEE,WAAW;EACX,WAAW;EACX,sBAAsB,EAAE;;AAE1B,kCAAkC;AAClC;EACE;IACE,UAAU;IACV,UAAU,EAAE;AAChB;;AAEA,kCAAkC;AAClC;EACE;IACE,UAAU,EAAE;EACd;;IAEE,eAAe,EAAE;EACnB;;IAEE,cAAc,EAAE;;EAElB;oCACkC,qBAAqB,EAAE;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,UAAU,aAAa;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,UAAU,aAAa;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,YAAY,WAAW;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,WAAW,EAAE,cAAc,EAAE;;EAE/D,kCAAkC,qBAAqB,EAAE;EACzD,kCAAkC,qBAAqB,EAAE;;EAEzD,kCAAkC,UAAU,EAAE;;EAE9C,YAAY;EACZ;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,gBAAgB,aAAa;EAC/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,gBAAgB,aAAa;EAC/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,kBAAkB,WAAW;EAC/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,2BAA2B,EAAE;;EAE/D;oCACkC,2BAA2B,EAAE;EAC/D;oCACkC,2BAA2B,EAAE;;EAE/D;oCACkC,gBAAgB,EAAE;;AAEtD;;;AAGA;oDACoD;AACpD;;yDAEyD;AACzD;EACE,gBAAgB,EAAE;AACpB;EACE,gBAAgB,EAAE,wEAAwE;EAC1F,gBAAgB;EAChB,gBAAgB;EAChB,uFAAuF;EACvF,WAAW,EAAE;;;AAGf;oDACoD;AACpD;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB,EAAE;AACpB,KAAK,iBAAiB,EAAE,gBAAgB,GAAG,sBAAsB,CAAC;AAClE,KAAK,iBAAiB,EAAE,iBAAiB,EAAE,sBAAsB,EAAE;AACnE,KAAK,iBAAiB,EAAE,gBAAgB,GAAG,sBAAsB,EAAE;AACnE,KAAK,iBAAiB,EAAE,iBAAiB,EAAE,uBAAuB,EAAE;AACpE,KAAK,iBAAiB,EAAE,gBAAgB,GAAG,uBAAuB,EAAE;AACpE,KAAK,iBAAiB,EAAE,gBAAgB,GAAG,iBAAiB,EAAE;;AAE9D,wBAAwB;AACxB;EACE,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;EACxB,KAAK,iBAAiB,EAAE;AAC1B;;AAEA;EACE,aAAa,EAAE;;;AAGjB;oDACoD;AACpD;EACE,cAAc,EAAE;AAClB;EACE,cAAc,EAAE;;;AAGlB;oDACoD;AACpD;;;;;EAKE,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,sBAAsB,EAAE;AAC1B;;;;;;;;;;EAUE,WAAW;EACX,kBAAkB;EAClB,UAAU,EAAE;AACd;;;;;EAKE,WAAW;EACX,yBAAyB;EACzB,qBAAqB,EAAE;AACzB;;;;;;;;;;EAUE,WAAW;EACX,yBAAyB;EACzB,qBAAqB,EAAE;;;AAGzB;oDACoD;AACpD;;;;;;;;;EASE,YAAY;EACZ,iBAAiB,EAAE,6DAA6D;EAChF,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB,EAAE;AAC1B,0DAA0D;AAC1D;;;;;;;;EAQE,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB,EAAE;AAC5B;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB,EAAE;AACvB;;;;;;;;;EASE,yBAAyB;EACzB,UAAU,EAAE;AACd;;EAEE,cAAc;EACd,oBAAoB;EACpB,gBAAgB,EAAE;AACpB;EACE,UAAU;EACV,eAAe,EAAE;AACnB;;EAEE,eAAe,EAAE;AACnB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB,EAAE;;;AAGvB;oDACoD;AACpD;EACE,yBAAyB,EAAE;AAC7B;EACE,0BAA0B,EAAE;AAC9B;EACE,eAAe;EACf,aAAa,EAAE;AACjB;;;;EAIE,4BAA4B;EAC5B,cAAc,EAAE;AAClB;EACE,mBAAmB,EAAE;;;AAGvB;oDACoD;AACpD;EACE,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB,EAAE;AACtB;EACE,cAAc;EACd,oBAAoB;EACpB,gBAAgB,EAAE;;;AAGpB;oDACoD;AACpD;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC,EAAE;AACpC;;EAEE,eAAe,EAAE;AACnB;;EAEE,gBAAgB,EAAE;;;AAGpB;oDACoD;AACpD;;EAEE,mBAAmB,EAAE;AACvB;;;;EAIE,qBAAqB,EAAE;AACzB;;;;;;;;;EASE,qBAAqB,EAAE;;;AAGzB;oDACoD;AACpD;EACE,WAAW;EACX,sBAAsB,EAAE;AAC1B;EACE,eAAe;EACf,sBAAsB,EAAE;AAC1B;EACE,YAAY,EAAE;AAChB;EACE,WAAW,EAAE;;;AAGf;oDACoD;AACpD;EACE,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;EACf,6BAA6B,EAAE;;;AAGjC;oDACoD;;AAEpD,2BAA2B;AAC3B;;;EAGE,WAAW;EACX,cAAc;EACd,WAAW,EAAE;;;AAGf;oDACoD;AACpD;;;;;CAKC;;;AAGD,uBAAuB;AACvB,2BAA2B;;AAE3B,8DAA8D;AAC9D,2BAA2B;;AAE3B,uBAAuB;AACvB,2BAA2B;;AAE3B,wBAAwB;AACxB,4BAA4B;;AAE5B,2BAA2B;AAC3B,4BAA4B","sourcesContent":["/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    background-color: transparent;
    /* border: 1px solid blueviolet; */
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: aliceblue;
    user-select: none;
}

:root {
    font-size: medium;
    --grey: gray;
    --transparent-light-light: rgba(0,0,0,0.2);
    --transparent-light: rgba(0,0,0,0.4);
    --transparent-med: rgba(0,0,0,0.6);
    --transparent-dark: rgba(0,0,0,0.7);
    --font-white: aliceblue;
    --transition-fast: 0.1s;
    --transition-med: 0.15s;
    --transition-slow: 0.2s;
}


body, html {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
    /* overflow: hidden; */
}

body {
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;
    background-size: 100% 100%;
}

button, input {
    border: 0;
}

button:focus, input:focus {
    border: 0;
    outline: none;
}

#main-left {
    display: flex;
    flex-flow: column;
    overflow: auto; /* auto, hidden works */
}

#main-right {
    overflow: auto;
}

#navbar {
    display: flex;
    justify-content: start;
    gap: 15px;
    align-items: center;
    padding: 10px 20px;
}

#toggle-temp-container {
    height: 40px;
    background-color: var(--transparent-light-light);
    border-radius: 20px;
    padding: 0 8px;
    display: flex;
    gap: 3px;
    justify-content: center;
    align-items: baseline;
    overflow: clip;
}

#toggle-temp-container > * {
    color: var(--grey);
    transition: color var(--transition-med) ease-in-out;
}

#toggle-temp-container > label {
    cursor: pointer;
}

#toggle-temp-container > label > input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    /* Not removed via appearance */
    margin: 0;
}

#toggle-temp-container > label:has(input[type='radio']:checked) {
    color: aliceblue;
    cursor: default;
}

#search-form {
    width: 360px;
    height: 40px;
    border-radius: 25px;
    overflow: clip;
    display: flex;
    align-items: center;
    padding: 8px;
    padding-left: 1rem;
    margin: 0;
    background-color: var(--transparent-light-light);
}

#search-icon {
    filter: invert(96%) sepia(47%) saturate(7073%) hue-rotate(179deg) brightness(110%) contrast(106%);
}

#search-input {
    height: 100%;
    border-bottom: 1px solid var(--font-white);
    flex: 1;
    /* margin-left: 15px; */
    padding-bottom: 3px;
    margin: 0;
}

#search-button {
    width: 40px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#search-button > img {
    width: 30px;
}

#content-container {
    width: 100%;
    height: 100%;
    padding: 10px;
}

#content {
    width: 100%;
    height: 100%;
    background-color: var(--transparent-med);
    display: flex;
    flex-flow: column;
    border-radius: 20px;
    overflow: clip;
}

#content-top {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: start;
}

#main-icon {
}

#location-info {
    display: flex;
    flex-flow: column;
}

#location-name {
    font-size: xx-large;
}

#location-country {
    font-size: medium;
    flex: 1;
    margin-top: -10px;
}

#main-temperature {
    font-size: 64px;
    margin-left: auto;
    margin-right: 15px;
    margin-top: -10px;
    transition: all var(--transition-slow) ease;
}

#content-bottom {
    height: 200px;
    display: flex;
    flex-flow: column;
}


#horz-scroll-tabs {
    height: 40px;
    display: flex;
}

.tab-button {
    height: 100%;
    color: var(--font-white);
    margin: 0;
    padding: 0 10px;
    border-radius: 10px 10px 0 0;
    transition: background-color var(--transition-med) ease;
}

.tab-button:hover {
    color: var(--font-white);
    background-color: var(--transparent-light-light);
}

/* .tab-button:active {
    color: var(--font-white);
    background-color: var(--transparent-light-lightlight);
} */

.tab-button:focus {
    color: var(--font-white);
    background-color: var(--transparent-light);
}

#horz-scroll {
    width: 100%;
    flex: 1;
    display: grid;
    grid-auto-flow: column;
    align-items: stretch;
    overflow-x: auto;
}

.hour-card {
    width: 120px;
    background-color: var(--transparent-light);
}

/* Right side */
.card-container {
    display: flex;
    flex-flow: column;
    padding: 10px;
    gap: 10px;
    overflow-y: auto;
}

.card {
    height: 120px;
    position: relative;
    background-color: transparent; 
    justify-content: space-between;
    border-radius: 20px;
    padding: 10px;
    overflow: clip;
    display: flex;
    flex: 1;
    overflow: hidden;
    background-color: var(--transparent-light);
    -webkit-transition: all var(--transition-fast) ease;
    -moz-transition: all var(--transition-fast) ease;
    -o-transition: all var(--transition-fast) ease;
    -ms-transition: all var(--transition-fast) ease;
    transition: all var(--transition-fast) ease-in-out;
}

.card, .card > * {
}

.card:hover {
    background-color: var(--transparent-med);
}

.card:active, .card.selected {
    background-color: var(--transparent-dark);
}

.notification {
    position: fixed;
    left: calc(50% - 200px);
    top: 10px;
    transform: translate(-50%,0);
    background-color: var(--transparent-light);
    width: min(80%, 400px);
    text-align: center;
}

.temperature, .weekday {
    white-space: pre-line;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
}

.hidden{
    opacity: 0;
}

@keyframes slide-in-out {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    15% {
        opacity: 1;
        transform: translateY(0);
    }
    70% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(30px);
    }
}

@media (max-width: 900px) {
    /* /* Your CSS styles for screens with a width less than 600px go here */
    body {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
    }
    
    #main-right {
        display: grid;
    }

    #main-right, #main-left {
        width: 100%;
    }
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import './normalize.css';\n@import './skeleton.css';\n\n* {\n    background-color: transparent;\n    /* border: 1px solid blueviolet; */\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    color: aliceblue;\n    user-select: none;\n}\n\n:root {\n    font-size: medium;\n    --grey: gray;\n    --transparent-light-light: rgba(0,0,0,0.2);\n    --transparent-light: rgba(0,0,0,0.4);\n    --transparent-med: rgba(0,0,0,0.6);\n    --transparent-dark: rgba(0,0,0,0.7);\n    --font-white: aliceblue;\n    --transition-fast: 0.1s;\n    --transition-med: 0.15s;\n    --transition-slow: 0.2s;\n}\n\n\nbody, html {\n    width: 100%;\n    height: 100%;\n    background-color: antiquewhite;\n    /* overflow: hidden; */\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    position: relative;\n    background-size: 100% 100%;\n}\n\nbutton, input {\n    border: 0;\n}\n\nbutton:focus, input:focus {\n    border: 0;\n    outline: none;\n}\n\n#main-left {\n    display: flex;\n    flex-flow: column;\n    overflow: auto; /* auto, hidden works */\n}\n\n#main-right {\n    overflow: auto;\n}\n\n#navbar {\n    display: flex;\n    justify-content: start;\n    gap: 15px;\n    align-items: center;\n    padding: 10px 20px;\n}\n\n#toggle-temp-container {\n    height: 40px;\n    background-color: var(--transparent-light-light);\n    border-radius: 20px;\n    padding: 0 8px;\n    display: flex;\n    gap: 3px;\n    justify-content: center;\n    align-items: baseline;\n    overflow: clip;\n}\n\n#toggle-temp-container > * {\n    color: var(--grey);\n    transition: color var(--transition-med) ease-in-out;\n}\n\n#toggle-temp-container > label {\n    cursor: pointer;\n}\n\n#toggle-temp-container > label > input[type=\"radio\"] {\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    /* For iOS < 15 to remove gradient background */\n    /* Not removed via appearance */\n    margin: 0;\n}\n\n#toggle-temp-container > label:has(input[type='radio']:checked) {\n    color: aliceblue;\n    cursor: default;\n}\n\n#search-form {\n    width: 360px;\n    height: 40px;\n    border-radius: 25px;\n    overflow: clip;\n    display: flex;\n    align-items: center;\n    padding: 8px;\n    padding-left: 1rem;\n    margin: 0;\n    background-color: var(--transparent-light-light);\n}\n\n#search-icon {\n    filter: invert(96%) sepia(47%) saturate(7073%) hue-rotate(179deg) brightness(110%) contrast(106%);\n}\n\n#search-input {\n    height: 100%;\n    border-bottom: 1px solid var(--font-white);\n    flex: 1;\n    /* margin-left: 15px; */\n    padding-bottom: 3px;\n    margin: 0;\n}\n\n#search-button {\n    width: 40px;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#search-button > img {\n    width: 30px;\n}\n\n#content-container {\n    width: 100%;\n    height: 100%;\n    padding: 10px;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    background-color: var(--transparent-med);\n    display: flex;\n    flex-flow: column;\n    border-radius: 20px;\n    overflow: clip;\n}\n\n#content-top {\n    flex: 1;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: start;\n}\n\n#main-icon {\n}\n\n#location-info {\n    display: flex;\n    flex-flow: column;\n}\n\n#location-name {\n    font-size: xx-large;\n}\n\n#location-country {\n    font-size: medium;\n    flex: 1;\n    margin-top: -10px;\n}\n\n#main-temperature {\n    font-size: 64px;\n    margin-left: auto;\n    margin-right: 15px;\n    margin-top: -10px;\n    transition: all var(--transition-slow) ease;\n}\n\n#content-bottom {\n    height: 200px;\n    display: flex;\n    flex-flow: column;\n}\n\n\n#horz-scroll-tabs {\n    height: 40px;\n    display: flex;\n}\n\n.tab-button {\n    height: 100%;\n    color: var(--font-white);\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 10px 10px 0 0;\n    transition: background-color var(--transition-med) ease;\n}\n\n.tab-button:hover {\n    color: var(--font-white);\n    background-color: var(--transparent-light-light);\n}\n\n/* .tab-button:active {\n    color: var(--font-white);\n    background-color: var(--transparent-light-lightlight);\n} */\n\n.tab-button:focus {\n    color: var(--font-white);\n    background-color: var(--transparent-light);\n}\n\n#horz-scroll {\n    width: 100%;\n    flex: 1;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: stretch;\n    overflow-x: auto;\n}\n\n.hour-card {\n    width: 120px;\n    background-color: var(--transparent-light);\n}\n\n/* Right side */\n.card-container {\n    display: flex;\n    flex-flow: column;\n    padding: 10px;\n    gap: 10px;\n    overflow-y: auto;\n}\n\n.card {\n    height: 120px;\n    position: relative;\n    background-color: transparent; \n    justify-content: space-between;\n    border-radius: 20px;\n    padding: 10px;\n    overflow: clip;\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n    background-color: var(--transparent-light);\n    -webkit-transition: all var(--transition-fast) ease;\n    -moz-transition: all var(--transition-fast) ease;\n    -o-transition: all var(--transition-fast) ease;\n    -ms-transition: all var(--transition-fast) ease;\n    transition: all var(--transition-fast) ease-in-out;\n}\n\n.card, .card > * {\n}\n\n.card:hover {\n    background-color: var(--transparent-med);\n}\n\n.card:active, .card.selected {\n    background-color: var(--transparent-dark);\n}\n\n.notification {\n    position: fixed;\n    left: calc(50% - 200px);\n    top: 10px;\n    transform: translate(-50%,0);\n    background-color: var(--transparent-light);\n    width: min(80%, 400px);\n    text-align: center;\n}\n\n.temperature, .weekday {\n    white-space: pre-line;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n}\n\n.hidden{\n    opacity: 0;\n}\n\n@keyframes slide-in-out {\n    0% {\n        opacity: 0;\n        transform: translateY(-30px);\n    }\n    15% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    70% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        transform: translateY(30px);\n    }\n}\n\n@media (max-width: 900px) {\n    /* /* Your CSS styles for screens with a width less than 600px go here */\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 2fr 1fr;\n    }\n    \n    #main-right {\n        display: grid;\n    }\n\n    #main-right, #main-left {\n        width: 100%;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Day.js":
/*!********************!*\
  !*** ./src/Day.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Day)
/* harmony export */ });
class Day {
    constructor(object, location, element) {
        this.location = location
        this.data = object
        this.element = element
        this.tempDiv = element.getElementsByClassName('temperature')[0]
        this.dayDiv = element.getElementsByClassName('weekday')[0]
        this.selected = false
    }

    displayTempF() {
        const maxf = Math.round(this.data.day.maxtemp_f)
        const minf = Math.round(this.data.day.mintemp_f)
        this.tempDiv.textContent = `High: ${maxf} \r\n Low: ${minf}`

        if (this.selected) {
            document.getElementById('main-temperature').textContent = `${maxf}˚`
        }
    }

    displayTempC() {
        const maxc = Math.round(this.data.day.maxtemp_c)
        const minc = Math.round(this.data.day.mintemp_c)
        this.tempDiv.textContent = `High: ${maxc} \r\n Low: ${minc}`

        if (this.selected) {
            document.getElementById('main-temperature').textContent = `${maxc}˚` 
        }
    }

    displayDayLong() {
        this.dayDiv.textContent = this.data.weekdayLong
        return this.dayDiv
    }

    displayDayShort() {
        this.dayDiv.textContent = this.data.weekdayShort
        return this.dayDiv
    }
}

/***/ }),

/***/ "./src/dom/card.js":
/*!*************************!*\
  !*** ./src/dom/card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCards: () => (/* binding */ clearCards),
/* harmony export */   createCard: () => (/* binding */ createCard)
/* harmony export */ });
const createCard = (parentDiv) => {
    const element = document.createElement('div')
    element.classList.add('card')
    const weekday = document.createElement('div')
    weekday.className = 'weekday'
    const temperature = document.createElement('div')
    temperature.className = 'temperature'

    element.appendChild(weekday)
    element.appendChild(temperature)
    parentDiv.appendChild(element)
    return element
}

const clearCards = (parentDiv) => {
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
}


/***/ }),

/***/ "./src/dom/content.js":
/*!****************************!*\
  !*** ./src/dom/content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initContainers: () => (/* binding */ initContainers)
/* harmony export */ });
const initContainers = (parentDiv) => {
    const containerContainer = document.createElement('div')
    containerContainer.id = 'content-container'
    const contentContainer = document.createElement('div')
    contentContainer.id = "content"

    const topDiv = document.createElement('div')
    topDiv.id = "content-top"

    const mainIconContainer = document.createElement('div')
    mainIconContainer.id = "main-icon-container"
    const mainIcon = document.createElement('img') 
    mainIcon.id = 'main-icon'

    const locationInfoDiv = document.createElement('div')
    const locationName = document.createElement('div')
    locationName.id = 'location-name'
    const locationCountry = document.createElement('div')
    locationCountry.id = 'location-country'
    locationInfoDiv.id = 'location-info'

    const mainTemperature = document.createElement('div')
    mainTemperature.id = 'main-temperature'

    const bottomDiv = document.createElement('div')
    bottomDiv.id = "content-bottom"
    const tabDiv = document.createElement('div')
    tabDiv.id = "horz-scroll-tabs"

    const temperatureButton = document.createElement('button')
    temperatureButton.textContent = "Temperature"
    temperatureButton.classList.add('tab-button')
    const windButton = document.createElement('button')
    windButton.textContent = "Wind Speed"
    windButton.classList.add('tab-button')
    const precipitationButton = document.createElement('button')
    precipitationButton.textContent = "Precipitation"
    precipitationButton.classList.add('tab-button')
    
    const horzScrollDiv = document.createElement('div')
    horzScrollDiv.id = "horz-scroll"

    // add cards
    for (let i = 0; i < 24; i += 1) {
        let hourCard = document.createElement('div')
        hourCard.classList.add('hour-card')
        hourCard.textContent = i 
        horzScrollDiv.appendChild(hourCard)
    }

    locationInfoDiv.appendChild(locationName)
    locationInfoDiv.appendChild(locationCountry)
    topDiv.appendChild(mainIcon)
    topDiv.appendChild(locationInfoDiv)
    topDiv.appendChild(mainTemperature)
    tabDiv.appendChild(temperatureButton)
    tabDiv.appendChild(windButton)
    tabDiv.appendChild(precipitationButton)
    bottomDiv.appendChild(tabDiv)
    bottomDiv.appendChild(horzScrollDiv)
    contentContainer.appendChild(topDiv)
    contentContainer.appendChild(bottomDiv)
    containerContainer.appendChild(contentContainer)
    parentDiv.appendChild(containerContainer)
    return 
}

 

/***/ }),

/***/ "./src/dom/displayWallpaper.js":
/*!*************************************!*\
  !*** ./src/dom/displayWallpaper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wallpapers_sunny01_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wallpapers/sunny01.jpg */ "./src/wallpapers/sunny01.jpg");
/* harmony import */ var _wallpapers_sunny02_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wallpapers/sunny02.jpg */ "./src/wallpapers/sunny02.jpg");
/* harmony import */ var _wallpapers_sunny03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wallpapers/sunny03.jpg */ "./src/wallpapers/sunny03.jpg");
/* harmony import */ var _wallpapers_sunny04_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wallpapers/sunny04.jpg */ "./src/wallpapers/sunny04.jpg");
/* harmony import */ var _wallpapers_snowy01_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wallpapers/snowy01.jpg */ "./src/wallpapers/snowy01.jpg");
/* harmony import */ var _wallpapers_snowy02_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wallpapers/snowy02.jpg */ "./src/wallpapers/snowy02.jpg");
/* harmony import */ var _wallpapers_snowy03_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wallpapers/snowy03.jpg */ "./src/wallpapers/snowy03.jpg");
/* harmony import */ var _wallpapers_snowy04_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wallpapers/snowy04.jpg */ "./src/wallpapers/snowy04.jpg");
/* harmony import */ var _wallpapers_rainy01_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wallpapers/rainy01.jpg */ "./src/wallpapers/rainy01.jpg");
/* harmony import */ var _wallpapers_rainy02_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wallpapers/rainy02.jpg */ "./src/wallpapers/rainy02.jpg");
/* harmony import */ var _wallpapers_rainy03_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wallpapers/rainy03.jpg */ "./src/wallpapers/rainy03.jpg");
/* harmony import */ var _wallpapers_rainy04_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wallpapers/rainy04.jpg */ "./src/wallpapers/rainy04.jpg");
/* harmony import */ var _wallpapers_cloudy01_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wallpapers/cloudy01.jpg */ "./src/wallpapers/cloudy01.jpg");
/* harmony import */ var _wallpapers_cloudy02_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../wallpapers/cloudy02.jpg */ "./src/wallpapers/cloudy02.jpg");
/* harmony import */ var _wallpapers_cloudy03_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../wallpapers/cloudy03.jpg */ "./src/wallpapers/cloudy03.jpg");
/* harmony import */ var _wallpapers_cloudy04_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../wallpapers/cloudy04.jpg */ "./src/wallpapers/cloudy04.jpg");

















const sunnyPics = [_wallpapers_sunny01_jpg__WEBPACK_IMPORTED_MODULE_0__, _wallpapers_sunny02_jpg__WEBPACK_IMPORTED_MODULE_1__, _wallpapers_sunny03_jpg__WEBPACK_IMPORTED_MODULE_2__, _wallpapers_sunny04_jpg__WEBPACK_IMPORTED_MODULE_3__]
const snowyPics = [_wallpapers_snowy01_jpg__WEBPACK_IMPORTED_MODULE_4__, _wallpapers_snowy02_jpg__WEBPACK_IMPORTED_MODULE_5__, _wallpapers_snowy03_jpg__WEBPACK_IMPORTED_MODULE_6__, _wallpapers_snowy04_jpg__WEBPACK_IMPORTED_MODULE_7__]
const cloudyPics = [_wallpapers_cloudy01_jpg__WEBPACK_IMPORTED_MODULE_12__, _wallpapers_cloudy02_jpg__WEBPACK_IMPORTED_MODULE_13__, _wallpapers_cloudy03_jpg__WEBPACK_IMPORTED_MODULE_14__, _wallpapers_cloudy04_jpg__WEBPACK_IMPORTED_MODULE_15__]
const rainyPics = [_wallpapers_rainy01_jpg__WEBPACK_IMPORTED_MODULE_8__, _wallpapers_rainy02_jpg__WEBPACK_IMPORTED_MODULE_9__, _wallpapers_rainy03_jpg__WEBPACK_IMPORTED_MODULE_10__, _wallpapers_rainy04_jpg__WEBPACK_IMPORTED_MODULE_11__]

const displayWallpaper = (day,parentDiv) => {
    const weatherCode = day.data.day.condition.code
    const weatherPics = determineWallpaper(weatherCode) 

    try {
        const number = getRandNum()
        parentDiv.style.backgroundImage = `url(${weatherPics[number]})`
        parentDiv.style['background-size'] = 'cover'
    } catch (error) {
        console.log(error)
    }
    return
}

const determineWallpaper = (condition) => {
    // const sunnyarray = [1000, 1003]
    const rainyarray = [1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189,
                        1192, 1195, 1198, 1201, 1240, 1243, 1246, 1249,
                        1273, 1276]
    const cloudyarray = [1006, 1009, 1030, 1063, 1066, 1069, 1072, 1087,
                        1135]
    const snowyarray = [1114, 1117, 1147, 1204, 1207, 1210, 1213, 1216, 1219,
                        1222, 1225, 1237, 1252, 1255, 1258, 1261, 1264, 1279,
                        1282]
    if (rainyarray.includes(condition)) { // rainy 
        // console.log('rainy')
        return rainyPics
    } else if (cloudyarray.includes(condition)) { // cloudy
        // console.log('cloudy')
        return cloudyPics
    } else if (snowyarray.includes(condition)) { // snowy
        // console.log('snowy')
        return snowyPics
    } else { // sunny
        // console.log('sunny or default')
        return sunnyPics 
    }     
}

const getRandNum = () => {
    return Math.floor(Math.random()*4)
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWallpaper); 


/***/ }),

/***/ "./src/dom/main.js":
/*!*************************!*\
  !*** ./src/dom/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mainDom = (parentDiv) => {
    const left = document.createElement('div')
    left.id = 'main-left'
    const right = document.createElement('div')
    right.className = 'card-container'
    right.id = 'main-right'

    parentDiv.appendChild(left)
    parentDiv.appendChild(right)
    return [left,right]
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainDom);

/***/ }),

/***/ "./src/dom/nav.js":
/*!************************!*\
  !*** ./src/dom/nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initNavbar: () => (/* binding */ initNavbar),
/* harmony export */   navForm: () => (/* binding */ navForm),
/* harmony export */   navToggleTemp: () => (/* binding */ navToggleTemp)
/* harmony export */ });
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/search.svg */ "./src/icons/search.svg");


const initNavbar = (parentDiv) => {
    const element = document.createElement('div')
    element.id = 'navbar'
    parentDiv.appendChild(element)
    return element 
}

const navForm = (parentDiv) => {
    const form = document.createElement('form')
    form.id = 'search-form'
    const input = document.createElement('input')
    input.id = 'search-input'
    input.autocomplete = 'off'
    const button = document.createElement('button')
    button.id = "search-button"
    const image = new Image()
    image.src = _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__ 
    image.id = 'search-icon'

    button.appendChild(image)
    form.appendChild(input)
    form.appendChild(button)

    parentDiv.appendChild(form)
    return form 
}

const navToggleTemp = (parentDiv) => {
    const toggleTempLabelF = document.createElement('label')
    const toggleTempRadioF = document.createElement('input')
    toggleTempRadioF.type = 'radio'
    toggleTempRadioF.name = 'toggleTemp'
    toggleTempLabelF.textContent = 'F˚'
    toggleTempRadioF.checked = true
    toggleTempLabelF.appendChild(toggleTempRadioF)

    const toggleTempLabelC = document.createElement('label')
    const toggleTempRadioC = document.createElement('input')
    toggleTempRadioC.type = 'radio'
    toggleTempRadioC.name = 'toggleTemp'
    toggleTempLabelC.textContent = 'C˚'
    toggleTempLabelC.appendChild(toggleTempRadioC)

    const toggleTempDiv = document.createElement('div')
    toggleTempDiv.id = 'toggle-temp-container'

    const toggleTempDivider = document.createElement('div')
    toggleTempDivider.innerText = '|'

    toggleTempDiv.appendChild(toggleTempLabelC)
    toggleTempDiv.appendChild(toggleTempDivider)
    toggleTempDiv.appendChild(toggleTempLabelF)
    parentDiv.appendChild(toggleTempDiv)
    return [toggleTempRadioC, toggleTempRadioF] 
}


 

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi */ "./src/weatherapi.js");

// import { unsplashApi, unsplashSecretApi } from "./unsplashapi"

const getWeatherData = async (location) => {
    const string = `https://api.weatherapi.com/v1/forecast.json?key=${(0,_weatherapi__WEBPACK_IMPORTED_MODULE_0__["default"])()}&q=${location}&days=7`
    try {
        const response = await fetch(string)
        const data = await response.json()
        if (data.error && data.error.code === 1006) {
            throw data.error
        }
        return data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

// const getUnsplashData = async (weather) => {
//     const string = `${unsplashApi()}`

// }

// export {getWeatherData, getUnsplashData }


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/nav */ "./src/dom/nav.js");
/* harmony import */ var _setInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setInformation */ "./src/setInformation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/main */ "./src/dom/main.js");
/* harmony import */ var _searchLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchLocation */ "./src/searchLocation.js");
/* harmony import */ var _setMainInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setMainInformation */ "./src/setMainInformation.js");
/* harmony import */ var _dom_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/content */ "./src/dom/content.js");








// Setup main page
const [leftmain, rightmain] = (0,_dom_main__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body)

// Navbar with search and toggle temperature measurement option
const navbar = _dom_nav__WEBPACK_IMPORTED_MODULE_0__.initNavbar(leftmain)
const form = _dom_nav__WEBPACK_IMPORTED_MODULE_0__.navForm(navbar)
const forminput = document.getElementById('search-input')
const [radioC, radioF] = _dom_nav__WEBPACK_IMPORTED_MODULE_0__.navToggleTemp(navbar)
;(0,_dom_content__WEBPACK_IMPORTED_MODULE_6__.initContainers)(leftmain)
const mainTemp = document.getElementById('main-temperature')
let selectedDay;
const dayArray = []

// New location
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const formValue = forminput.value
  dayArray.length = 0
  try {
    const arr = await (0,_searchLocation__WEBPACK_IMPORTED_MODULE_4__["default"])(formValue, rightmain, radioF)
    arr.map( (element) => dayArray.push(element))
    // Initialize first day as selected date
    selectedDay = (0,_setMainInformation__WEBPACK_IMPORTED_MODULE_5__["default"])(dayArray[0])
  } catch (error) {
    console.log(error)
  } finally {
    forminput.value = ''
  }
})

// initialize
const arr = await (0,_searchLocation__WEBPACK_IMPORTED_MODULE_4__["default"])("Los Angeles", rightmain, radioF)
arr.map( (element) => dayArray.push(element))
// Initialize first day as selected date
selectedDay = (0,_setMainInformation__WEBPACK_IMPORTED_MODULE_5__["default"])(dayArray[0])



radioC.onclick = () => {
 dayArray.map((dayObj) => (0,_setInformation__WEBPACK_IMPORTED_MODULE_1__.setDOM)(dayObj.tempDiv, _setInformation__WEBPACK_IMPORTED_MODULE_1__.setTemp, [dayObj, radioF]))
 ;(0,_setInformation__WEBPACK_IMPORTED_MODULE_1__.setDOM)(mainTemp, _setInformation__WEBPACK_IMPORTED_MODULE_1__.setTemp, [selectedDay, radioF])
}

radioF.onclick = () => {
 dayArray.map((dayObj) => (0,_setInformation__WEBPACK_IMPORTED_MODULE_1__.setDOM)(dayObj.tempDiv, _setInformation__WEBPACK_IMPORTED_MODULE_1__.setTemp, [dayObj, radioF]))
 ;(0,_setInformation__WEBPACK_IMPORTED_MODULE_1__.setDOM)(mainTemp, _setInformation__WEBPACK_IMPORTED_MODULE_1__.setTemp, [selectedDay, radioF])
}
// display main page
// 1. select day
// 2. access day data
// 3. get day data
// 4. output day data in dom

// a. add units to setinformation 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/makeDays.js":
/*!*************************!*\
  !*** ./src/makeDays.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/src/luxon.js");



const getDays = async (location) => {
    try {
        const resolve = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location)
        const zone = resolve.location.tz_id
        const daysForecast = resolve.forecast.forecastday
        const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
        daysForecast.forEach( (element) => {
            const dateStr = element.date 
            const match = dateStr.match(regex);
            const year = parseInt(match[1], 10);
            const month = parseInt(match[2], 10);
            const day = parseInt(match[3], 10);
            const dateTime = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromObject({
                year: year,
                month: month,
                day: day
            }, {
                zone: zone, // Replace with your desired time zone
            });
            if (!element.weekday) {
                element.weekday = dateTime.weekday
            }
            if (!element.weekdayLong) {
                element.weekdayLong = dateTime.weekdayLong
            }
            if (!element.weekdayShort) {
                element.weekdayShort = dateTime.weekdayShort
            }
        })
    return [resolve, daysForecast]
    } catch(error) {
        throw error
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDays);

/***/ }),

/***/ "./src/searchLocation.js":
/*!*******************************!*\
  !*** ./src/searchLocation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/card */ "./src/dom/card.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Day */ "./src/Day.js");
/* harmony import */ var _makeDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeDays */ "./src/makeDays.js");
/* harmony import */ var _setInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setInformation */ "./src/setInformation.js");
/* harmony import */ var _showNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showNotification */ "./src/showNotification.js");
/* harmony import */ var _dom_displayWallpaper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/displayWallpaper */ "./src/dom/displayWallpaper.js");







const searchLocation = async (formValue, cardContainer, radioF) => {
  const dayArray = []
  try {
    const resolve = await (0,_makeDays__WEBPACK_IMPORTED_MODULE_2__["default"])(formValue)
    // Clear Prior
    ;(0,_dom_card__WEBPACK_IMPORTED_MODULE_0__.clearCards)(cardContainer)

    console.log(resolve)
    const daysdata = resolve[1]
    
    for (let i = 0; i< daysdata.length; i += 1) {
      dayArray.push(new _Day__WEBPACK_IMPORTED_MODULE_1__["default"](daysdata[i], resolve[0].location, (0,_dom_card__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardContainer)))
    }

    dayArray.map((dayObj) => {
      (0,_setInformation__WEBPACK_IMPORTED_MODULE_3__.setDOM)(dayObj.element, _setInformation__WEBPACK_IMPORTED_MODULE_3__.setDayIcon, [dayObj])
      ;(0,_setInformation__WEBPACK_IMPORTED_MODULE_3__.setDOM)(dayObj.tempDiv, _setInformation__WEBPACK_IMPORTED_MODULE_3__.setTemp, [dayObj, radioF])
      ;(0,_setInformation__WEBPACK_IMPORTED_MODULE_3__.setDOM)(dayObj.dayDiv, _setInformation__WEBPACK_IMPORTED_MODULE_3__.setDay, [dayObj])
    })

    ;(0,_dom_displayWallpaper__WEBPACK_IMPORTED_MODULE_5__["default"])(dayArray[0],document.body)
    console.log(dayArray)
  } catch(error) {
    if (error.code && error.code === 1006) {
      (0,_showNotification__WEBPACK_IMPORTED_MODULE_4__["default"])('Location not found')
    }
    console.log(error)
  }
  return dayArray
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchLocation);

/***/ }),

/***/ "./src/setInformation.js":
/*!*******************************!*\
  !*** ./src/setInformation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setContent: () => (/* binding */ setContent),
/* harmony export */   setDOM: () => (/* binding */ setDOM),
/* harmony export */   setDay: () => (/* binding */ setDay),
/* harmony export */   setDayIcon: () => (/* binding */ setDayIcon),
/* harmony export */   setTemp: () => (/* binding */ setTemp)
/* harmony export */ });
const setDOM = (element, func, argsArray) => {
    const elementRef = element 
    elementRef.classList.add('hidden')
    setTimeout(() => {
        func.apply(null, argsArray)
        elementRef.classList.remove('hidden')
    }, 200);
}

const setDay = (day) => {
    if (true) {
        day.displayDayLong()
    } else {}
}

const setTemp = (day, radioF) => {
    if (radioF.checked) {
        day.displayTempF()
    } else {
        day.displayTempC()
    }
} 

const setDayIcon = (day) => {
    day.element.style.backgroundImage = `url(http:${day.data.day.condition.icon})`
    day.element.style.backgroundPosition = "center"
    day.element.style.backgroundRepeat = "no-repeat"
}

const setContent = (day) => {
    // set icon
}

const setTab = (day) => {
    // displays temp / precipitation / wind hourly
}



/***/ }),

/***/ "./src/setMainInformation.js":
/*!***********************************!*\
  !*** ./src/setMainInformation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setDay = (dayObj) => {
    dayObj.element.classList.add('selected')
    dayObj.selected = true

    // Weather Icon
    const mainIcon = document.getElementById('main-icon')
    mainIcon.src = dayObj.data.day.condition.icon
    // Location
    const locationData = dayObj.location
    let locationString = `${locationData.name}`
    if (locationData.region !== '') {
        locationString += `, ${locationData.region}`
    }
    document.getElementById('location-name').textContent = locationString
    document.getElementById('location-country').textContent = `${locationData.country}`

    return dayObj
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDay); 

/***/ }),

/***/ "./src/showNotification.js":
/*!*********************************!*\
  !*** ./src/showNotification.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const noLocation = (text) => {
    const notification = document.createElement('div')
    notification.classList.add('notification');
    notification.textContent = text
    document.body.appendChild(notification)
    notification.style.animation = 'slide-in-out 2.5s ease forwards'
    setTimeout(() => {
        notification.remove()
    }, 2510);
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noLocation);

/***/ }),

/***/ "./src/weatherapi.js":
/*!***************************!*\
  !*** ./src/weatherapi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherapi = () => {
    return '655e45178aca4b8f979144458232110'
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherapi);

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7956140b5ed78a262263.svg";

/***/ }),

/***/ "./src/wallpapers/cloudy01.jpg":
/*!*************************************!*\
  !*** ./src/wallpapers/cloudy01.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc7af5a93001e3954044.jpg";

/***/ }),

/***/ "./src/wallpapers/cloudy02.jpg":
/*!*************************************!*\
  !*** ./src/wallpapers/cloudy02.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56601f70eff40336a895.jpg";

/***/ }),

/***/ "./src/wallpapers/cloudy03.jpg":
/*!*************************************!*\
  !*** ./src/wallpapers/cloudy03.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9559e4fb7e12226895f5.jpg";

/***/ }),

/***/ "./src/wallpapers/cloudy04.jpg":
/*!*************************************!*\
  !*** ./src/wallpapers/cloudy04.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dda0ba10268c62139fb9.jpg";

/***/ }),

/***/ "./src/wallpapers/rainy01.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/rainy01.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38b411ec1f17b5882d7f.jpg";

/***/ }),

/***/ "./src/wallpapers/rainy02.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/rainy02.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d08547bdba23f4081916.jpg";

/***/ }),

/***/ "./src/wallpapers/rainy03.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/rainy03.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "829bc151f074d1704b6a.jpg";

/***/ }),

/***/ "./src/wallpapers/rainy04.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/rainy04.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "022ec07f5f68d22c77c2.jpg";

/***/ }),

/***/ "./src/wallpapers/snowy01.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/snowy01.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a4c65b100ff5bf40fa3.jpg";

/***/ }),

/***/ "./src/wallpapers/snowy02.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/snowy02.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a52551b7e7c3fdbffa38.jpg";

/***/ }),

/***/ "./src/wallpapers/snowy03.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/snowy03.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "896a13fbb03926f04e52.jpg";

/***/ }),

/***/ "./src/wallpapers/snowy04.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/snowy04.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03b732b7e9758fdd2fdc.jpg";

/***/ }),

/***/ "./src/wallpapers/sunny01.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/sunny01.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "905df66c2eeb4baffbb2.jpg";

/***/ }),

/***/ "./src/wallpapers/sunny02.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/sunny02.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "963f6e59ddbcc61fb591.jpg";

/***/ }),

/***/ "./src/wallpapers/sunny03.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/sunny03.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d588316222bf8e918b2a.jpg";

/***/ }),

/***/ "./src/wallpapers/sunny04.jpg":
/*!************************************!*\
  !*** ./src/wallpapers/sunny04.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c049911129c925891aba.jpg";

/***/ }),

/***/ "./node_modules/luxon/src/datetime.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/datetime.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime),
/* harmony export */   friendlyDateTime: () => (/* binding */ friendlyDateTime)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_diff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./impl/diff.js */ "./node_modules/luxon/src/impl/diff.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./impl/tokenParser.js */ "./node_modules/luxon/src/impl/tokenParser.js");
/* harmony import */ var _impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./impl/conversions.js */ "./node_modules/luxon/src/impl/conversions.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");

















const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unsupported zone", `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = {
      ...inst.c,
      year,
      month,
      day:
        Math.min(inst.c.day, (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    },
    millisToAdd = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if ((parsed && Object.keys(parsed).length !== 0) || parsedZone) {
    const interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset,
      });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(_impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create("en-US"), {
        allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone
) {
  let c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.hour);
  if (extended) {
    c += ":";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
    if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
  }

  if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

// Units in the supported calendars, sorted by bigness
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];

  if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
    loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts),
    tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now();

  let ts, o;

  // assume we have the higher-order units
  if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj.year)) {
    for (const u of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(obj) || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({ ts, zone, loc, o });
}

function diffRelative(start, end, opts) {
  const round = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.round) ? true : opts.round,
    format = (c, unit) => {
      c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.roundTo)(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone;

    let invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(config.ts) ? _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now() : config.ts;

    let c = null,
      o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isDate)(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(milliseconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(seconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now(),
      offsetProvis = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(obj, normalizeUnit),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidWeekData)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidOrdinalData)(normalized)
        : (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(normalized),
      invalid = higherOrderInvalid || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)(normalized)
        : normalized,
      [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc,
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }

    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseISODate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseRFC2822Date)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseHTTPDate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(text) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(fmt)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromFormat requires an input string and a format");
    }

    const { locale = null, numberingSystem = null } = opts,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      }),
      [vals, parsedZone, specificOffset, invalid] = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.parseFromTokens)(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseSQL)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.formatOptsToTokens)(formatOpts, _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join("");
  }

  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.expandMacroTokens)(_impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseFormat(fmt), _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }

  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c).ordinal : NaN;
  }

  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("short", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("long", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return (
        this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset
      );
    }
  }

  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed) {
      return [this];
    }
    const dayMs = 86400000;
    const minuteMs = 60000;
    const localTS = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(this.c);
    const oEarlier = this.zone.offset(localTS - dayMs);
    const oLater = this.zone.offset(localTS + dayMs);

    const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
    const o2 = this.zone.offset(localTS - oLater * minuteMs);
    if (o1 === o2) {
      return [this];
    }
    const ts1 = localTS - o1 * minuteMs;
    const ts2 = localTS - o2 * minuteMs;
    const c1 = tsToObj(ts1, o1);
    const c2 = tsToObj(ts2, o2);
    if (
      c1.hour === c2.hour &&
      c1.minute === c2.minute &&
      c1.second === c2.second &&
      c1.millisecond === c2.millisecond
    ) {
      return [clone(this, { ts: ts1 }), clone(this, { ts: ts2 })];
    }
    return [this];
  }

  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isLeapYear)(this.year);
  }

  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(this.year, this.month);
  }

  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInYear)(this.year) : NaN;
  }

  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.weeksInWeekYear)(this.weekYear) : NaN;
  }

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(_zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;

    const normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(values, normalizeUnit),
      settingWeekStuff =
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekYear) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekNumber) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekday),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(this.c), ...normalized });
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal)) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day)) {
        mixed.day = Math.min((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {},
      normalizedUnit = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
          .startOf(unit)
          .minus(1)
      : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === "extended";

    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended",
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    let c = includePrefix ? "T" : "";
    return (
      c +
      toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      )
    );
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].invalid("created by diffing an invalid DateTime");
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.maybeArray)(unit).map(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = (0,_impl_diff_js__WEBPACK_IMPORTED_MODULE_9__["default"])(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? _interval_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
      padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit,
    });
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true,
    });
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      });
    return (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.explainFromTokens)(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
 * @private
 */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/duration.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/duration.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accurateMatrix: () => (/* binding */ accurateMatrix),
/* harmony export */   casualMatrix: () => (/* binding */ casualMatrix),
/* harmony export */   daysInMonthAccurate: () => (/* binding */ daysInMonthAccurate),
/* harmony export */   daysInYearAccurate: () => (/* binding */ daysInYearAccurate),
/* harmony export */   "default": () => (/* binding */ Duration),
/* harmony export */   lowOrderMatrix: () => (/* binding */ lowOrderMatrix)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");









const INVALID = "Invalid Duration";

// unit conversion constants
const lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
    minutes: { seconds: 60, milliseconds: 60 * 1000 },
    seconds: { milliseconds: 1000 },
  },
  casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000,
    },

    ...lowOrderMatrix,
  },
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: (daysInYearAccurate * 24) / 4,
      minutes: (daysInYearAccurate * 24 * 60) / 4,
      seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
      milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
    },
    ...lowOrderMatrix,
  };

// units ordered by size
const orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

const reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix,
  };
  return new Duration(conf);
}

function durationToMillis(matrix, vals) {
  let sum = vals.milliseconds ?? 0;
  for (const unit of reverseUnits.slice(1)) {
    if (vals[unit]) {
      sum += vals[unit] * matrix[unit]["milliseconds"];
    }
  }
  return sum;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  // the logic below assumes the overall value of the duration is positive
  // if this is not the case, factor is used to make it so
  const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;

  orderedUnits.reduceRight((previous, current) => {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(vals[current])) {
      if (previous) {
        const previousVal = vals[previous] * factor;
        const conv = matrix[current][previous];

        // if (previousVal < 0):
        // lower order unit is negative (e.g. { years: 2, days: -2 })
        // normalize this by reducing the higher order unit by the appropriate amount
        // and increasing the lower order unit
        // this can never make the higher order unit negative, because this function only operates
        // on positive durations, so the amount of time represented by the lower order unit cannot
        // be larger than the higher order unit
        // else:
        // lower order unit is positive (e.g. { years: 2, days: 450 } or { years: -2, days: 450 })
        // in this case we attempt to convert as much as possible from the lower order unit into
        // the higher order one
        //
        // Math.floor takes care of both of these cases, rounding away from 0
        // if previousVal < 0 it makes the absolute value larger
        // if previousVal >= it makes the absolute value smaller
        const rollUp = Math.floor(previousVal / conv);
        vals[current] += rollUp * factor;
        vals[previous] -= rollUp * conv * factor;
      }
      return current;
    } else {
      return previous;
    }
  }, null);

  // try to convert any decimals into smaller units if possible
  // for example for { years: 2.5, days: 0, seconds: 0 } we want to get { years: 2, days: 182, hours: 12 }
  orderedUnits.reduce((previous, current) => {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(vals[current])) {
      if (previous) {
        const fraction = vals[previous] % 1;
        vals[previous] -= fraction;
        vals[current] += fraction * matrix[previous][current];
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;

    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
      );
    }

    return new Duration({
      values: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(obj, Duration.normalizeUnit),
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix,
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISODuration)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISOTimeOnly)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidUnitError(unit);

    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    if (!this.isValid) return INVALID;

    const l = orderedUnits
      .map((unit) => {
        const val = this.values[unit];
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
      .format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.roundTo)(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
      includeOffset: false,
    };

    const dateTime = _datetime_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromMillis(millis, { zone: "UTC" });
    return dateTime.toISOTime(opts);
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    if (!this.isValid) return NaN;

    return durationToMillis(this.matrix, this.values);
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration),
      result = {};

    for (const k of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(dur.values, k) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, { values: result }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.asNumber)(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(values, Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see second example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }

  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone(this, { values: vals }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {},
      accumulated = {},
      vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
          own += vals[k];
        }

        // only keep the integer part for now in the hopes of putting any decimal part
        // into a smaller unit later
        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // otherwise, keep it in the wings to boil it later
      } else if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    normalizeValues(this.matrix, built);
    return clone(this, { values: built }, true);
  }

  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    if (!this.isValid) return this;
    return this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    );
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/errors.js":
/*!******************************************!*\
  !*** ./node_modules/luxon/src/errors.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConflictingSpecificationError: () => (/* binding */ ConflictingSpecificationError),
/* harmony export */   InvalidArgumentError: () => (/* binding */ InvalidArgumentError),
/* harmony export */   InvalidDateTimeError: () => (/* binding */ InvalidDateTimeError),
/* harmony export */   InvalidDurationError: () => (/* binding */ InvalidDurationError),
/* harmony export */   InvalidIntervalError: () => (/* binding */ InvalidIntervalError),
/* harmony export */   InvalidUnitError: () => (/* binding */ InvalidUnitError),
/* harmony export */   ZoneIsAbstractError: () => (/* binding */ ZoneIsAbstractError)
/* harmony export */ });
// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/conversions.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/conversions.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gregorianToOrdinal: () => (/* binding */ gregorianToOrdinal),
/* harmony export */   gregorianToWeek: () => (/* binding */ gregorianToWeek),
/* harmony export */   hasInvalidGregorianData: () => (/* binding */ hasInvalidGregorianData),
/* harmony export */   hasInvalidOrdinalData: () => (/* binding */ hasInvalidOrdinalData),
/* harmony export */   hasInvalidTimeData: () => (/* binding */ hasInvalidTimeData),
/* harmony export */   hasInvalidWeekData: () => (/* binding */ hasInvalidWeekData),
/* harmony export */   ordinalToGregorian: () => (/* binding */ ordinalToGregorian),
/* harmony export */   weekToGregorian: () => (/* binding */ weekToGregorian)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _invalid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid.js */ "./node_modules/luxon/src/impl/invalid.js");



const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new _invalid_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex((i) => i < ordinal),
    day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(weekYear);
  } else if (weekNumber > (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return { weekYear, weekNumber, weekday, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregObj) };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(weekData) };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(ordinalData) };
}

function hasInvalidWeekData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.weekYear),
    validWeek = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekNumber, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(obj.weekYear)),
    validWeekday = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validOrdinal = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.ordinal, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validMonth = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.month, 1, 12),
    validDay = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.day, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInMonth)(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour =
      (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(minute, 0, 59),
    validSecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(second, 0, 59),
    validMillisecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/diff.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration.js */ "./node_modules/luxon/src/duration.js");


function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];

  const results = {};
  const earlier = cursor;
  let lowestOrder, highWater;

  /* This loop tries to diff using larger units first.
     If we overshoot, we backtrack and try the next smaller unit.
     "cursor" starts out at the earlier timestamp and moves closer and closer to "later"
     as we use smaller and smaller units.
     highWater keeps track of where we would be if we added one more of the smallest unit,
     this is used later to potentially convert any difference smaller than the smallest higher order unit
     into a fraction of that smallest higher order unit
  */
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);

      if (highWater > later) {
        // we overshot the end point, backtrack cursor by 1
        results[unit]--;
        cursor = earlier.plus(results);

        // if we are still overshooting now, we need to backtrack again
        // this happens in certain situations when diffing times in different zones,
        // because this calculation ignores time zones
        if (cursor > later) {
          // keep the "overshot by 1" around as highWater
          highWater = cursor;
          // backtrack cursor by 1
          results[unit]--;
          cursor = earlier.plus(results);
        }
      } else {
        cursor = highWater;
      }
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/digits.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/digits.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   digitRegex: () => (/* binding */ digitRegex),
/* harmony export */   parseDigits: () => (/* binding */ parseDigits)
/* harmony export */ });
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/english.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/english.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eraForDateTime: () => (/* binding */ eraForDateTime),
/* harmony export */   eras: () => (/* binding */ eras),
/* harmony export */   erasLong: () => (/* binding */ erasLong),
/* harmony export */   erasNarrow: () => (/* binding */ erasNarrow),
/* harmony export */   erasShort: () => (/* binding */ erasShort),
/* harmony export */   formatRelativeTime: () => (/* binding */ formatRelativeTime),
/* harmony export */   formatString: () => (/* binding */ formatString),
/* harmony export */   meridiemForDateTime: () => (/* binding */ meridiemForDateTime),
/* harmony export */   meridiems: () => (/* binding */ meridiems),
/* harmony export */   monthForDateTime: () => (/* binding */ monthForDateTime),
/* harmony export */   months: () => (/* binding */ months),
/* harmony export */   monthsLong: () => (/* binding */ monthsLong),
/* harmony export */   monthsNarrow: () => (/* binding */ monthsNarrow),
/* harmony export */   monthsShort: () => (/* binding */ monthsShort),
/* harmony export */   weekdayForDateTime: () => (/* binding */ weekdayForDateTime),
/* harmony export */   weekdays: () => (/* binding */ weekdays),
/* harmony export */   weekdaysLong: () => (/* binding */ weekdaysLong),
/* harmony export */   weekdaysNarrow: () => (/* binding */ weekdaysNarrow),
/* harmony export */   weekdaysShort: () => (/* binding */ weekdaysShort)
/* harmony export */ });
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");



function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}

const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}

const meridiems = ["AM", "PM"];

const erasLong = ["Before Christ", "Anno Domini"];

const erasShort = ["BC", "AD"];

const erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };

  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default: // fall through
    }
  }

  const isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  const filtered = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.pick)(knownFormat, [
      "weekday",
      "era",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "timeZoneName",
      "hourCycle",
    ]),
    key = stringify(filtered),
    dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
  switch (key) {
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_SHORT):
      return "M/d/yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED):
      return "LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_FULL):
      return "LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_HUGE):
      return "EEEE, LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_SIMPLE):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SECONDS):
      return "h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SHORT_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_LONG_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_SIMPLE):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SECONDS):
      return "HH:mm:ss";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED):
      return "LLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return dateTimeHuge;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/formats.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/formats.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATETIME_FULL: () => (/* binding */ DATETIME_FULL),
/* harmony export */   DATETIME_FULL_WITH_SECONDS: () => (/* binding */ DATETIME_FULL_WITH_SECONDS),
/* harmony export */   DATETIME_HUGE: () => (/* binding */ DATETIME_HUGE),
/* harmony export */   DATETIME_HUGE_WITH_SECONDS: () => (/* binding */ DATETIME_HUGE_WITH_SECONDS),
/* harmony export */   DATETIME_MED: () => (/* binding */ DATETIME_MED),
/* harmony export */   DATETIME_MED_WITH_SECONDS: () => (/* binding */ DATETIME_MED_WITH_SECONDS),
/* harmony export */   DATETIME_MED_WITH_WEEKDAY: () => (/* binding */ DATETIME_MED_WITH_WEEKDAY),
/* harmony export */   DATETIME_SHORT: () => (/* binding */ DATETIME_SHORT),
/* harmony export */   DATETIME_SHORT_WITH_SECONDS: () => (/* binding */ DATETIME_SHORT_WITH_SECONDS),
/* harmony export */   DATE_FULL: () => (/* binding */ DATE_FULL),
/* harmony export */   DATE_HUGE: () => (/* binding */ DATE_HUGE),
/* harmony export */   DATE_MED: () => (/* binding */ DATE_MED),
/* harmony export */   DATE_MED_WITH_WEEKDAY: () => (/* binding */ DATE_MED_WITH_WEEKDAY),
/* harmony export */   DATE_SHORT: () => (/* binding */ DATE_SHORT),
/* harmony export */   TIME_24_SIMPLE: () => (/* binding */ TIME_24_SIMPLE),
/* harmony export */   TIME_24_WITH_LONG_OFFSET: () => (/* binding */ TIME_24_WITH_LONG_OFFSET),
/* harmony export */   TIME_24_WITH_SECONDS: () => (/* binding */ TIME_24_WITH_SECONDS),
/* harmony export */   TIME_24_WITH_SHORT_OFFSET: () => (/* binding */ TIME_24_WITH_SHORT_OFFSET),
/* harmony export */   TIME_SIMPLE: () => (/* binding */ TIME_SIMPLE),
/* harmony export */   TIME_WITH_LONG_OFFSET: () => (/* binding */ TIME_WITH_LONG_OFFSET),
/* harmony export */   TIME_WITH_SECONDS: () => (/* binding */ TIME_WITH_SECONDS),
/* harmony export */   TIME_WITH_SHORT_OFFSET: () => (/* binding */ TIME_WITH_SHORT_OFFSET)
/* harmony export */ });
/**
 * @private
 */

const n = "numeric",
  s = "short",
  l = "long";

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};


/***/ }),

/***/ "./node_modules/luxon/src/impl/formatter.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/impl/formatter.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Formatter)
/* harmony export */ });
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");




function stringifyTokens(splits, tokenToString) {
  let s = "";
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_SHORT,
  DD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_MED,
  DDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FULL,
  DDDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_HUGE,
  t: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_SIMPLE,
  tt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SECONDS,
  ttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SHORT_OFFSET,
  tttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_LONG_OFFSET,
  T: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_SIMPLE,
  TT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SECONDS,
  TTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SHORT_OFFSET,
  TTTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_LONG_OFFSET,
  f: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT,
  ff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED,
  fff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL,
  ffff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE,
  F: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT_WITH_SECONDS,
  FF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED_WITH_SECONDS,
  FFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL_WITH_SECONDS,
  FFFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE_WITH_SECONDS,
};

/**
 * @private
 */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    // white-space is always considered a literal in user-provided formats
    // the " " token has a special meaning (see unitForToken)

    let current = null,
      currentFull = "",
      bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  dtFormatter(dt, opts = {}) {
    return this.loc.dtFormatter(dt, { ...this.opts, ...opts });
  }

  formatDateTime(dt, opts) {
    return this.dtFormatter(dt, opts).format();
  }

  formatDateTimeParts(dt, opts) {
    return this.dtFormatter(dt, opts).formatToParts();
  }

  formatInterval(interval, opts) {
    const df = this.dtFormatter(interval.start, opts);
    return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
  }

  resolvedOptions(dt, opts) {
    return this.dtFormatter(dt, opts).resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = (opts, extract) => this.loc.extract(dt, opts, extract),
      formatOffset = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = () =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.meridiemForDateTime(dt)
          : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      month = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.monthForDateTime(dt, length)
          : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
      weekday = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.weekdayForDateTime(dt, length)
          : string(
              standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
              "weekday"
            ),
      maybeMacro = (token) => {
        const formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = (length) =>
        knownEnglish ? _english_js__WEBPACK_IMPORTED_MODULE_0__.eraForDateTime(dt, length) : string({ era: length }, "era"),
      tokenToString = (token) => {
        // Where possible: https://cldr.unicode.org/translation/date-time/date-time-symbols
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            // like +06:00
            return formatOffset({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            // like +0600
            return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric", day: "numeric" }, "month")
              : this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string({ month: "2-digit", day: "numeric" }, "month")
              : this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric" }, "month")
              : this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string({ month: "2-digit" }, "month")
              : this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string({ year: "2-digit" }, "year")
              : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return this.num(dt.quarter);
          case "qq":
            // like 01
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1000));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(
        (found, { literal, val }) => (literal ? found : found.concat(val)),
        []
      ),
      collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/invalid.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/invalid.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invalid)
/* harmony export */ });
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/locale.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Locale)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");






// todo - remap caching

let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  // private subtags and unicode subtags have ordering requirements,
  // and we're not properly parsing this, so just strip out the
  // private ones if they exist.
  const xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }

  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    let selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      const smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }

    const { numberingSystem, calendar } = options;
    return [selectedStr, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2009, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, englishFn, intlFn) {
  const mode = loc.listingMode();

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
    );
  }
}

/**
 * @private
 */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      const fixed = this.floor ? Math.floor(i) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.roundTo)(i, 3);
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.padStart)(fixed, this.padTo);
    }
  }
}

/**
 * @private
 */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    this.originalZone = undefined;

    let z = undefined;
    if (this.opts.timeZone) {
      // Don't apply any workarounds if a timeZone is explicitly provided in opts
      this.dt = dt;
    } else if (dt.zone.type === "fixed") {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
        // we manually apply the offset and substitute the zone as needed.
        z = "UTC";
        this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
        this.originalZone = dt.zone;
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else if (dt.zone.type === "iana") {
      this.dt = dt;
      z = dt.zone.name;
    } else {
      // Custom zones can have any offset / offsetName so we just manually
      // apply the offset and substitute the zone as needed.
      z = "UTC";
      this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
      this.originalZone = dt.zone;
    }

    const intlOpts = { ...this.opts };
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    if (this.originalZone) {
      // If we have to substitute in the actual zone name, we have to use
      // formatToParts so that the timezone can be replaced.
      return this.formatToParts()
        .map(({ value }) => value)
        .join("");
    }
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    const parts = this.dtf.formatToParts(this.dt.toJSDate());
    if (this.originalZone) {
      return parts.map((part) => {
        if (part.type === "timeZoneName") {
          const offsetName = this.originalZone.offsetName(this.dt.ts, {
            locale: this.dt.locale,
            format: this.opts.timeZoneName,
          });
          return {
            ...part,
            value: offsetName,
          };
        } else {
          return part;
        }
      });
    }
    return parts;
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
 * @private
 */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasRelative)()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return _english_js__WEBPACK_IMPORTED_MODULE_1__.formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}

/**
 * @private
 */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultNumberingSystem;
    const outputCalendarR = outputCalendar || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false) {
    return listStuff(this, length, _english_js__WEBPACK_IMPORTED_MODULE_1__.months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length },
        formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false) {
    return listStuff(this, length, _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdays, () => {
      const intl = format
          ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
          : { weekday: length },
        formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
          this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems() {
    return listStuff(
      this,
      undefined,
      () => _english_js__WEBPACK_IMPORTED_MODULE_1__.meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 9), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }

        return this.meridiemCache;
      }
    );
  }

  eras(length) {
    return listStuff(this, length, _english_js__WEBPACK_IMPORTED_MODULE_1__.eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(-40, 1, 1), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2017, 1, 1)].map((dt) =>
          this.extract(dt, intl, "era")
        );
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    );
  }

  equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/regexParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/regexParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseHTTPDate: () => (/* binding */ parseHTTPDate),
/* harmony export */   parseISODate: () => (/* binding */ parseISODate),
/* harmony export */   parseISODuration: () => (/* binding */ parseISODuration),
/* harmony export */   parseISOTimeOnly: () => (/* binding */ parseISOTimeOnly),
/* harmony export */   parseRFC2822Date: () => (/* binding */ parseRFC2822Date),
/* harmony export */   parseSQL: () => (/* binding */ parseSQL)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");





/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) =>
    extractors
      .reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, zone || mergedZone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(m) ? fallback : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1],
    fullOffset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration =
  /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
    match;

  const hasNegativePrefix = s[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";

  const maybeNegate = (num, force = false) =>
    num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

  return [
    {
      years: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(yearStr)),
      months: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(monthStr)),
      weeks: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(weekStr)),
      days: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(dayStr)),
      hours: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(hourStr)),
      minutes: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(minuteStr)),
      seconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr)) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr),
    month: _english_js__WEBPACK_IMPORTED_MODULE_1__.monthsShort.indexOf(monthStr) + 1,
    day: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(dayStr),
    hour: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(hourStr),
    minute: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(minuteStr),
  };

  if (secondStr) result.second = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(secondStr);
  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysLong.indexOf(weekdayStr) + 1
        : _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr,
    ] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(offHourStr, offMinuteStr);
  }

  return [result, new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}

// http date

const rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

/*
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/tokenParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/tokenParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expandMacroTokens: () => (/* binding */ expandMacroTokens),
/* harmony export */   explainFromTokens: () => (/* binding */ explainFromTokens),
/* harmony export */   formatOptsToTokens: () => (/* binding */ formatOptsToTokens),
/* harmony export */   parseFromTokens: () => (/* binding */ parseFromTokens)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _digits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digits.js */ "./node_modules/luxon/src/impl/digits.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");








const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post((0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.parseDigits)(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s]) =>
        strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
    };
  }
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

/**
 * @param token
 * @param {Locale} loc
 */
function unitForToken(token, loc) {
  const one = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc),
    two = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2}"),
    three = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{3}"),
    four = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4}"),
    six = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{6}"),
    oneOrTwo = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,2}"),
    oneToThree = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,3}"),
    oneToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,6}"),
    oneToNine = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,9}"),
    twoToFour = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2,4}"),
    fourToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4,6}"),
    literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
    unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short"), 0);
        case "GG":
          return oneOf(loc.eras("long"), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true), 1);
        case "MMMM":
          return oneOf(loc.months("long", true), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal(t);
      }
    };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh",
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ",
  },
};

function tokenForPart(part, formatOpts, resolvedOpts) {
  const { type, value } = part;

  if (type === "literal") {
    const isSpace = /^\s+$/.test(value);
    return {
      literal: !isSpace,
      val: isSpace ? " " : value,
    };
  }

  const style = formatOpts[type];

  // The user might have explicitly specified hour12 or hourCycle
  // if so, respect their decision
  // if not, refer back to the resolvedOpts, which are based on the locale
  let actualType = type;
  if (type === "hour") {
    if (formatOpts.hour12 != null) {
      actualType = formatOpts.hour12 ? "hour12" : "hour24";
    } else if (formatOpts.hourCycle != null) {
      if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
        actualType = "hour12";
      } else {
        actualType = "hour24";
      }
    } else {
      // tokens only differentiate between 24 hours or not,
      // so we do not need to check hourCycle here, which is less supported anyways
      actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
    }
  }
  let val = partTypeStyleToTokenVal[actualType];
  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(handlers, i)) {
        const h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.z)) {
    zone = _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(matches.z);
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.Z)) {
    if (!zone) {
      zone = new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.u)) {
    matches.S = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = _datetime_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseFormat(format), locale),
    units = tokens.map((t) => unitForToken(t, locale)),
    disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units),
      regex = RegExp(regexString, "i"),
      [rawMatches, matches] = match(input, regex, handlers),
      [result, zone, specificOffset] = matches
        ? dateTimeFromMatches(matches)
        : [null, null, undefined];
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "a") && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "H")) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}

function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(locale, formatOpts);
  const df = formatter.dtFormatter(getDummyDateTime());
  const parts = df.formatToParts();
  const resolvedOpts = df.resolvedOptions();
  return parts.map((p) => tokenForPart(p, formatOpts, resolvedOpts));
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/util.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/util.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asNumber: () => (/* binding */ asNumber),
/* harmony export */   bestBy: () => (/* binding */ bestBy),
/* harmony export */   daysInMonth: () => (/* binding */ daysInMonth),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   floorMod: () => (/* binding */ floorMod),
/* harmony export */   formatOffset: () => (/* binding */ formatOffset),
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   hasRelative: () => (/* binding */ hasRelative),
/* harmony export */   integerBetween: () => (/* binding */ integerBetween),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isLeapYear: () => (/* binding */ isLeapYear),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   maybeArray: () => (/* binding */ maybeArray),
/* harmony export */   normalizeObject: () => (/* binding */ normalizeObject),
/* harmony export */   objToLocalTS: () => (/* binding */ objToLocalTS),
/* harmony export */   padStart: () => (/* binding */ padStart),
/* harmony export */   parseFloating: () => (/* binding */ parseFloating),
/* harmony export */   parseInteger: () => (/* binding */ parseInteger),
/* harmony export */   parseMillis: () => (/* binding */ parseMillis),
/* harmony export */   parseZoneInfo: () => (/* binding */ parseZoneInfo),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   roundTo: () => (/* binding */ roundTo),
/* harmony export */   signedOffset: () => (/* binding */ signedOffset),
/* harmony export */   timeObject: () => (/* binding */ timeObject),
/* harmony export */   untruncateYear: () => (/* binding */ untruncateYear),
/* harmony export */   weeksInWeekYear: () => (/* binding */ weeksInWeekYear)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/




/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    const f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits,
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// convert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
    // so if obj.year is in 99, but obj.day makes it roll over into year 100,
    // the calculations done by Date.UTC are using year 2000 - which is incorrect
    d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].twoDigitCutoffYear ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/zoneUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/luxon/src/impl/zoneUtil.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeZone: () => (/* binding */ normalizeZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/**
 * @private
 */









function normalizeZone(input, defaultZone) {
  let offset;
  if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(input) || input === null) {
    return defaultZone;
  } else if (input instanceof _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return input;
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;
    else if (lowered === "local" || lowered === "system") return _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
    else if (lowered === "utc" || lowered === "gmt") return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance;
    else return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].parseSpecifier(lowered) || _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(input);
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isNumber)(input)) {
    return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(input);
  } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__["default"](input);
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/info.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/info.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");








/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone) {
    const proto = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__.normalizeZone)(input, _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasRelative)() };
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/interval.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/interval.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interval)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");








const INVALID = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
class Interval {
  /**
   * @private
   */
  constructor(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start),
      builtEnd = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s, e] = (text || "").split("/", 2);
    if (s && e) {
      let start, startIsValid;
      try {
        start = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end, endIsValid;
      try {
        end = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
        .map(_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)
        .filter((d) => this.contains(d))
        .sort(),
      results = [];
    let { s } = this,
      i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    let { s } = this,
      idx = 1,
      next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null,
      currentCount = 0;
    const results = [],
      ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" },
      ]),
      flattened = Array.prototype.concat(...ends),
      arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_6__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(this.s.loc.clone(opts), formatOpts).formatInterval(this)
      : INVALID;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid) return INVALID;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/luxon.js":
/*!*****************************************!*\
  !*** ./node_modules/luxon/src/luxon.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTime: () => (/* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Duration: () => (/* reexport safe */ _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   FixedOffsetZone: () => (/* reexport safe */ _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   IANAZone: () => (/* reexport safe */ _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Info: () => (/* reexport safe */ _info_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Interval: () => (/* reexport safe */ _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   InvalidZone: () => (/* reexport safe */ _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Settings: () => (/* reexport safe */ _settings_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   SystemZone: () => (/* reexport safe */ _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   Zone: () => (/* reexport safe */ _zone_js__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");











const VERSION = "3.4.3";




/***/ }),

/***/ "./node_modules/luxon/src/settings.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/settings.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");






let now = () => Date.now(),
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  twoDigitCutoffYear = 60,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__.normalizeZone)(defaultZone, _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__["default"].instance);
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return twoDigitCutoffYear;
  }

  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(cutoffYear) {
    twoDigitCutoffYear = cutoffYear % 100;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetCache();
    _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCache();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zone.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/zone.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zone)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");


/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/IANAZone.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/zones/IANAZone.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IANAZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.objToLocalTS)({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/
  get isValid() {
    return this.valid;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/fixedOffsetZone.js":
/*!*********************************************************!*\
  !*** ./node_modules/luxon/src/zones/fixedOffsetZone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixedOffsetZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
class FixedOffsetZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private **/
    this.fixed = offset;
  }

  /** @override **/
  get type() {
    return "fixed";
  }

  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, "narrow")}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(-this.fixed, "narrow")}`;
    }
  }

  /** @override **/
  offsetName() {
    return this.name;
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, format);
  }

  /** @override **/
  get isUniversal() {
    return true;
  }

  /** @override **/
  offset() {
    return this.fixed;
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/invalidZone.js":
/*!*****************************************************!*\
  !*** ./node_modules/luxon/src/zones/invalidZone.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");


/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
class InvalidZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override **/
  get type() {
    return "invalid";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName() {
    return null;
  }

  /** @override **/
  formatOffset() {
    return "";
  }

  /** @override **/
  offset() {
    return NaN;
  }

  /** @override **/
  equals() {
    return false;
  }

  /** @override **/
  get isValid() {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/systemZone.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/zones/systemZone.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SystemZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton === null) {
      singleton = new SystemZone();
    }
    return singleton;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQiw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FB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QTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLDBCQUEwQix5RUFBa0I7QUFDNUM7O0FBRUE7QUFD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RDtBQUNBLG1CQUFtQixrRUFBaUM7QUFDcEQ7QUFDQSxtQkFBbUIsbUVBQWtDO0FBQ3JEO0FBQ0EsbUJBQW1CLG1FQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4T0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsV0FBVyxnRUFBYSxjQUFjLDREQUFVO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLElBQUksdURBQU07QUFDVixJQUFJLDBEQUFRO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ka0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxjQUFjLDJEQUFtQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGNB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QTs7QUFFQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkMsV0FBVyw0REFBYTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsV0FBVywyREFBWTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9za2VsZXRvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS9jYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS9jb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS9kaXNwbGF5V2FsbHBhcGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS9tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS9uYXYuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWtlRGF5cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2hMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXRJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXRNYWluSW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2hvd05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9kYXRldGltZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9kaWZmLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2RpZ2l0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9lbmdsaXNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZm9ybWF0dGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2ludmFsaWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvbG9jYWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3JlZ2V4UGFyc2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3Rva2VuUGFyc2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvem9uZVV0aWwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9sdXhvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL0lBTkFab25lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9maXhlZE9mZnNldFpvbmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL2ludmFsaWRab25lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9zeXN0ZW1ab25lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cblxuLyoqXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXG4gKiAgICB1c2VyIHpvb20uXG4gKi9cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIENvcnJlY3QgXFxgYmxvY2tcXGAgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxuICogQ29ycmVjdCBcXGBibG9ja1xcYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBcXGBkZXRhaWxzXFxgIG9yIFxcYHN1bW1hcnlcXGAgaW4gSUUgMTAvMTFcbiAqIGFuZCBGaXJlZm94LlxuICogQ29ycmVjdCBcXGBibG9ja1xcYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBcXGBtYWluXFxgIGluIElFIDExLlxuICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWFpbixcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgXFxgaW5saW5lLWJsb2NrXFxgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBcXGBwcm9ncmVzc1xcYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXG59XG5cbi8qKlxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIFxcYGF1ZGlvXFxgIHdpdGhvdXQgY29udHJvbHMuXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICovXG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIFxcYFtoaWRkZW5dXFxgIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxuICogSGlkZSB0aGUgXFxgdGVtcGxhdGVcXGAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cbiAqL1xuXG5baGlkZGVuXSxcbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTGlua3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gXFxgYm9sZGVyXFxgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuICovXG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyoqXG4gKiBBZGRyZXNzIHZhcmlhYmxlIFxcYGgxXFxgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZCBcXGBhcnRpY2xlXFxgXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxuICovXG5cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgYWZmZWN0aW5nIFxcYGxpbmUtaGVpZ2h0XFxgIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgXFxgYVxcYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXI6IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG4gKi9cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuICovXG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8qKlxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxuICovXG5cbmhyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiBBZGRyZXNzIG9kZCBcXGBlbVxcYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbiAqIHN0eWxpbmcgb2YgXFxgc2VsZWN0XFxgLCB1bmxlc3MgYSBcXGBib3JkZXJcXGAgcHJvcGVydHkgaXMgc2V0LlxuICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xuICBtYXJnaW46IDA7IC8qIDMgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIFxcYG92ZXJmbG93XFxgIHNldCB0byBcXGBoaWRkZW5cXGAgaW4gSUUgOC85LzEwLzExLlxuICovXG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IFxcYHRleHQtdHJhbnNmb3JtXFxgIGluaGVyaXRhbmNlIGZvciBcXGBidXR0b25cXGAgYW5kIFxcYHNlbGVjdFxcYC5cbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgXFxgdGV4dC10cmFuc2Zvcm1cXGAgdmFsdWVzLlxuICogQ29ycmVjdCBcXGBidXR0b25cXGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXG4gKiBDb3JyZWN0IFxcYHNlbGVjdFxcYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBcXGBhdWRpb1xcYFxuICogICAgYW5kIFxcYHZpZGVvXFxgIGNvbnRyb2xzLlxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIFxcYGlucHV0XFxgIHR5cGVzIGluIGlPUy5cbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4gKiAgICBcXGBpbnB1dFxcYCBhbmQgb3RoZXJzLlxuICovXG5cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLyogMSAqL1xuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xufVxuXG4vKipcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4gKi9cblxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBcXGBsaW5lLWhlaWdodFxcYCBvbiBcXGBpbnB1dFxcYCB1c2luZyBcXGAhaW1wb3J0YW50XFxgIGluXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cbiAqL1xuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbiAqXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIFxcYGNvbnRlbnQtYm94XFxgIGluIElFIDgvOS8xMC5cbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXG4gKi9cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cbiAqIFxcYGZvbnQtc2l6ZVxcYCB2YWx1ZXMgb2YgdGhlIFxcYGlucHV0XFxgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gXFxgZGVmYXVsdFxcYCB0byBcXGB0ZXh0XFxgLlxuICovXG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZHJlc3MgXFxgYXBwZWFyYW5jZVxcYCBzZXQgdG8gXFxgc2VhcmNoZmllbGRcXGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4gKiAyLiBBZGRyZXNzIFxcYGJveC1zaXppbmdcXGAgc2V0IHRvIFxcYGJvcmRlci1ib3hcXGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIFxcYC1tb3pcXGAgdG8gZnV0dXJlLXByb29mKS5cbiAqL1xuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcbiAqIHBhZGRpbmcgKGFuZCBcXGB0ZXh0ZmllbGRcXGAgYXBwZWFyYW5jZSkuXG4gKi9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuICovXG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgXFxgY29sb3JcXGAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm9yZGVyOiAwOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogRG9uJ3QgaW5oZXJpdCB0aGUgXFxgZm9udC13ZWlnaHRcXGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxuICovXG5cbm9wdGdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIFRhYmxlc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4gKi9cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyREFBMkQ7O0FBRTNEOzs7O0VBSUU7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7OztFQUtFOztBQUVGOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7Ozs7RUFJRSxxQkFBcUIsRUFBRSxNQUFNO0VBQzdCLHdCQUF3QixFQUFFLE1BQU07QUFDbEM7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsYUFBYTtBQUNmOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsVUFBVTtBQUNaOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFOztBQUVGOzs7OztFQUtFLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGFBQWEsRUFBRSxNQUFNO0VBQ3JCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOztFQUVFOztBQUVGO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFOztBQUVGOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGVBQWUsRUFBRSxNQUFNO0FBQ3pCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7OztFQU1FOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsNEJBQTRCO0VBQzVCLCtCQUErQixFQUFFLE1BQU07RUFDdkMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7O0VBSUU7O0FBRUY7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsU0FBUyxFQUFFLE1BQU07RUFDakIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuKiBTa2VsZXRvbiBWMi4wLjRcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxuKiB3d3cuZ2V0c2tlbGV0b24uY29tXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiogMTIvMjkvMjAxNFxuKi9cblxuXG4vKiBUYWJsZSBvZiBjb250ZW50c1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXG4tIEdyaWRcbi0gQmFzZSBTdHlsZXNcbi0gVHlwb2dyYXBoeVxuLSBMaW5rc1xuLSBCdXR0b25zXG4tIEZvcm1zXG4tIExpc3RzXG4tIENvZGVcbi0gVGFibGVzXG4tIFNwYWNpbmdcbi0gVXRpbGl0aWVzXG4tIENsZWFyaW5nXG4tIE1lZGlhIFF1ZXJpZXNcbiovXG5cblxuLyogR3JpZFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuLmNvbHVtbixcbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBwYWRkaW5nOiAwOyB9XG59XG5cbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTsgfVxuICAuY29sdW1uLFxuICAuY29sdW1ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQlOyB9XG4gIC5jb2x1bW46Zmlyc3QtY2hpbGQsXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuXG4gIC5vbmUuY29sdW1uLFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XG4gIC50d28uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTMuMzMzMzMzMzMzMyU7IH1cbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XG4gIC5maXZlLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzkuMzMzMzMzMzMzMyU7IH1cbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XG4gIC5laWdodC5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNjUuMzMzMzMzMzMzMyU7IH1cbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XG4gIC5lbGV2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgeyB3aWR0aDogOTEuMzMzMzMzMzMzMyU7IH1cbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxuXG4gIC5vbmUtdGhpcmQuY29sdW1uICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxuXG4gIC5vbmUtaGFsZi5jb2x1bW4gICAgICAgICAgICAgICAgeyB3aWR0aDogNDglOyB9XG5cbiAgLyogT2Zmc2V0cyAqL1xuICAub2Zmc2V0LWJ5LW9uZS5jb2x1bW4sXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDE3LjMzMzMzMzMzMzMlOyB9XG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW4sXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA0My4zMzMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW4sXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxuICAub2Zmc2V0LWJ5LXRlbi5jb2x1bW4sXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW5zICAgICAgIHsgbWFyZ2luLWxlZnQ6IDk1LjMzMzMzMzMzMzMlOyB9XG5cbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW5zICAgIHsgbWFyZ2luLWxlZnQ6IDM0LjY2NjY2NjY2NjclOyB9XG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cblxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cblxufVxuXG5cbi8qIEJhc2UgU3R5bGVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi8qIE5PVEVcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlOyB9XG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjVlbTsgLyogY3VycmVudGx5IGVtcyBjYXVzZSBjaHJvbWUgYnVnIG1pc2ludGVycHJldGluZyByZW1zIG9uIGJvZHkgZWxlbWVudCAqL1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyOyB9XG5cblxuLyogVHlwb2dyYXBoeVxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cbmgzIHsgZm9udC1zaXplOiAzLjByZW07IGxpbmUtaGVpZ2h0OiAxLjM7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxuaDYgeyBmb250LXNpemU6IDEuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgIGxldHRlci1zcGFjaW5nOiAwOyB9XG5cbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cbiAgaDMgeyBmb250LXNpemU6IDMuNnJlbTsgfVxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cbiAgaDYgeyBmb250LXNpemU6IDEuNXJlbTsgfVxufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG5cbi8qIExpbmtzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmEge1xuICBjb2xvcjogIzFFQUVEQjsgfVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMEZBMENFOyB9XG5cblxuLyogQnV0dG9uc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4uYnV0dG9uLFxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzhweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBjb2xvcjogIzU1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4uYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmhvdmVyLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcbmlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcbmlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXG4uYnV0dG9uOmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJyZXNldFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJidXR0b25cIl06Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xuICBvdXRsaW5lOiAwOyB9XG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnkge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcbiAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwOyB9XG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcbiAgYm9yZGVyLWNvbG9yOiAjMUVBRURCOyB9XG5cblxuLyogRm9ybXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJ0ZWxcIl0sXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbi8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInRlbFwiXSxcbmlucHV0W3R5cGU9XCJ1cmxcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cbnRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDsgfVxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJ0ZWxcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwidXJsXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xuICBvdXRsaW5lOiAwOyB9XG5sYWJlbCxcbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItd2lkdGg6IDA7IH1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGRpc3BsYXk6IGlubGluZTsgfVxubGFiZWwgPiAubGFiZWwtYm9keSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cblxuLyogTGlzdHNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xudWwge1xuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyB9XG5vbCB7XG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XG5vbCwgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7IH1cbnVsIHVsLFxudWwgb2wsXG5vbCBvbCxcbm9sIHVsIHtcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcbiAgZm9udC1zaXplOiA5MCU7IH1cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuXG5cbi8qIENvZGVcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuY29kZSB7XG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xuICBtYXJnaW46IDAgLjJyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cbnByZSA+IGNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7IH1cblxuXG4vKiBUYWJsZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xudGgsXG50ZCB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cbnRoOmZpcnN0LWNoaWxkLFxudGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDA7IH1cbnRoOmxhc3QtY2hpbGQsXG50ZDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMDsgfVxuXG5cbi8qIFNwYWNpbmdcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuYnV0dG9uLFxuLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5maWVsZHNldCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxucHJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZmlndXJlLFxudGFibGUsXG5wLFxudWwsXG5vbCxcbmZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH1cblxuXG4vKiBVdGlsaXRpZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLnUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4udS1tYXgtZnVsbC13aWR0aCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuLnUtcHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDsgfVxuLnUtcHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuXG4vKiBNaXNjXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmhyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxOyB9XG5cblxuLyogQ2xlYXJpbmdcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuXG4vKiBTZWxmIENsZWFyaW5nIEdvb2RuZXNzICovXG4uY29udGFpbmVyOmFmdGVyLFxuLnJvdzphZnRlcixcbi51LWNmIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoOyB9XG5cblxuLyogTWVkaWEgUXVlcmllc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4vKlxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xub24gc21hbGwgZGV2aWNlcywgcGFzdGUgdGhlIG1vYmlsZSBxdWVyeSBjb2RlIHVwIGluIHRoZSBidXR0b25zIHNlY3Rpb24gYW5kIHN0eWxlIGl0XG50aGVyZS5cbiovXG5cblxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHt9XG5cbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7fVxuXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge31cblxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge31cblxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NrZWxldG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztDQU9DOzs7QUFHRDs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7OztBQUdEO29EQUNvRDtBQUNwRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCLEVBQUU7QUFDMUI7O0VBRUUsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0IsRUFBRTs7QUFFMUIsa0NBQWtDO0FBQ2xDO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsVUFBVSxFQUFFO0FBQ2hCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFO0lBQ0UsVUFBVSxFQUFFO0VBQ2Q7O0lBRUUsZUFBZSxFQUFFO0VBQ25COztJQUVFLGNBQWMsRUFBRTs7RUFFbEI7b0NBQ2tDLHFCQUFxQixFQUFFO0VBQ3pELGtDQUFrQyxxQkFBcUIsRUFBRTtFQUN6RCxrQ0FBa0MsVUFBVSxhQUFhO0VBQ3pELGtDQUFrQyxxQkFBcUIsRUFBRTtFQUN6RCxrQ0FBa0MscUJBQXFCLEVBQUU7RUFDekQsa0NBQWtDLFVBQVUsYUFBYTtFQUN6RCxrQ0FBa0MscUJBQXFCLEVBQUU7RUFDekQsa0NBQWtDLHFCQUFxQixFQUFFO0VBQ3pELGtDQUFrQyxZQUFZLFdBQVc7RUFDekQsa0NBQWtDLHFCQUFxQixFQUFFO0VBQ3pELGtDQUFrQyxxQkFBcUIsRUFBRTtFQUN6RCxrQ0FBa0MsV0FBVyxFQUFFLGNBQWMsRUFBRTs7RUFFL0Qsa0NBQWtDLHFCQUFxQixFQUFFO0VBQ3pELGtDQUFrQyxx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M0I7OztFQUdFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVyxFQUFFOzs7QUFHZjtvREFDb0Q7QUFDcEQ7Ozs7O0NBS0M7OztBQUdELHVCQUF1QjtBQUN2QiwyQkFBMkI7O0FBRTNCLDhEQUE4RDtBQUM5RCwyQkFBMkI7O0FBRTNCLHVCQUF1QjtBQUN2QiwyQkFBMkI7O0FBRTNCLHdCQUF3QjtBQUN4Qiw0QkFBNEI7O0FBRTVCLDJCQUEyQjtBQUMzQiw0QkFBNEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4qIFNrZWxldG9uIFYyLjAuNFxcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxcbiogd3d3LmdldHNrZWxldG9uLmNvbVxcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcXG4qIDEyLzI5LzIwMTRcXG4qL1xcblxcblxcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxuLSBHcmlkXFxuLSBCYXNlIFN0eWxlc1xcbi0gVHlwb2dyYXBoeVxcbi0gTGlua3NcXG4tIEJ1dHRvbnNcXG4tIEZvcm1zXFxuLSBMaXN0c1xcbi0gQ29kZVxcbi0gVGFibGVzXFxuLSBTcGFjaW5nXFxuLSBVdGlsaXRpZXNcXG4tIENsZWFyaW5nXFxuLSBNZWRpYSBRdWVyaWVzXFxuKi9cXG5cXG5cXG4vKiBHcmlkXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4uY29sdW1uLFxcbi5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxufVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLmNvbHVtbixcXG4gIC5jb2x1bW5zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyB9XFxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS5jb2x1bW4sXFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XFxuICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XFxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XFxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XFxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XFxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XFxuICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XFxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XFxuICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XFxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxcblxcbiAgLyogT2Zmc2V0cyAqL1xcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cXG5cXG59XFxuXFxuXFxuLyogQmFzZSBTdHlsZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4vKiBOT1RFXFxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxcbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYU5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyMjI7IH1cXG5cXG5cXG4vKiBUeXBvZ3JhcGh5XFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5oMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XFxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcbmg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxcbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxcbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cXG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cXG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cXG4gIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cXG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuXFxuLyogTGlua3NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5hIHtcXG4gIGNvbG9yOiAjMUVBRURCOyB9XFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzBGQTBDRTsgfVxcblxcblxcbi8qIEJ1dHRvbnNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4uYnV0dG9uLFxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmJ1dHRvbjpob3ZlcixcXG5idXR0b246aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcixcXG4uYnV0dG9uOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmZvY3VzIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLWNvbG9yOiAjODg4O1xcbiAgb3V0bGluZTogMDsgfVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnksXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnksXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnkge1xcbiAgY29sb3I6ICNGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDM0YwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNDM0YwOyB9XFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpob3ZlcixcXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQUVEQjtcXG4gIGJvcmRlci1jb2xvcjogIzFFQUVEQjsgfVxcblxcblxcbi8qIEZvcm1zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogNnB4IDEwcHg7IC8qIFRoZSA2cHggdmVydGljYWxseSBjZW50ZXJzIHRleHQgb24gRkYsIGlnbm9yZWQgYnkgV2Via2l0ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLyogUmVtb3ZlcyBhd2t3YXJkIGRlZmF1bHQgc3R5bGVzIG9uIHNvbWUgaW5wdXRzIGZvciBpT1MgKi9cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgfVxcbnRleHRhcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDZweDsgfVxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzM0MzRjA7XFxuICBvdXRsaW5lOiAwOyB9XFxubGFiZWwsXFxubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwOyB9XFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci13aWR0aDogMDsgfVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7IH1cXG5sYWJlbCA+IC5sYWJlbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG5cXG4vKiBMaXN0c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cXG5vbCB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxcbm9sLCB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxudWwgdWwsXFxudWwgb2wsXFxub2wgb2wsXFxub2wgdWwge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIGZvbnQtc2l6ZTogOTAlOyB9XFxubGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcblxcbi8qIENvZGVcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5jb2RlIHtcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgbWFyZ2luOiAwIC4ycmVtO1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5wcmUgPiBjb2RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlOyB9XFxuXFxuXFxuLyogVGFibGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxudGgsXFxudGQge1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxudGg6Zmlyc3QtY2hpbGQsXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxudGg6bGFzdC1jaGlsZCxcXG50ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG5cXG4vKiBTcGFjaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYnV0dG9uLFxcbi5idXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5maWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXG5wcmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5maWd1cmUsXFxudGFibGUsXFxucCxcXG51bCxcXG5vbCxcXG5mb3JtIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfVxcblxcblxcbi8qIFV0aWxpdGllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi51LWZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuLnUtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuXFxuLyogTWlzY1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmhyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxcblxcblxcbi8qIENsZWFyaW5nXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcbi5jb250YWluZXI6YWZ0ZXIsXFxuLnJvdzphZnRlcixcXG4udS1jZiB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cXG5cXG4vKiBNZWRpYSBRdWVyaWVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLypcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcbnRoZXJlLlxcbiovXFxuXFxuXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDsgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAtLWdyZXk6IGdyYXk7XG4gICAgLS10cmFuc3BhcmVudC1saWdodC1saWdodDogcmdiYSgwLDAsMCwwLjIpO1xuICAgIC0tdHJhbnNwYXJlbnQtbGlnaHQ6IHJnYmEoMCwwLDAsMC40KTtcbiAgICAtLXRyYW5zcGFyZW50LW1lZDogcmdiYSgwLDAsMCwwLjYpO1xuICAgIC0tdHJhbnNwYXJlbnQtZGFyazogcmdiYSgwLDAsMCwwLjcpO1xuICAgIC0tZm9udC13aGl0ZTogYWxpY2VibHVlO1xuICAgIC0tdHJhbnNpdGlvbi1mYXN0OiAwLjFzO1xuICAgIC0tdHJhbnNpdGlvbi1tZWQ6IDAuMTVzO1xuICAgIC0tdHJhbnNpdGlvbi1zbG93OiAwLjJzO1xufVxuXG5cbmJvZHksIGh0bWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG5idXR0b24sIGlucHV0IHtcbiAgICBib3JkZXI6IDA7XG59XG5cbmJ1dHRvbjpmb2N1cywgaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jbWFpbi1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBhdXRvLCBoaWRkZW4gd29ya3MgKi9cbn1cblxuI21haW4tcmlnaHQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4jdG9nZ2xlLXRlbXAtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQtbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbiN0b2dnbGUtdGVtcC1jb250YWluZXIgPiAqIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1tZWQpIGVhc2UtaW4tb3V0O1xufVxuXG4jdG9nZ2xlLXRlbXAtY29udGFpbmVyID4gbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RvZ2dsZS10ZW1wLWNvbnRhaW5lciA+IGxhYmVsID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xuICAgIC8qIE5vdCByZW1vdmVkIHZpYSBhcHBlYXJhbmNlICovXG4gICAgbWFyZ2luOiAwO1xufVxuXG4jdG9nZ2xlLXRlbXAtY29udGFpbmVyID4gbGFiZWw6aGFzKGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCkge1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jc2VhcmNoLWZvcm0ge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQtbGlnaHQpO1xufVxuXG4jc2VhcmNoLWljb24ge1xuICAgIGZpbHRlcjogaW52ZXJ0KDk2JSkgc2VwaWEoNDclKSBzYXR1cmF0ZSg3MDczJSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA2JSk7XG59XG5cbiNzZWFyY2gtaW5wdXQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC13aGl0ZSk7XG4gICAgZmxleDogMTtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTVweDsgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuI3NlYXJjaC1idXR0b24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzZWFyY2gtYnV0dG9uID4gaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuI2NvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1tZWQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbn1cblxuI2NvbnRlbnQtdG9wIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbiNtYWluLWljb24ge1xufVxuXG4jbG9jYXRpb24taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuI2xvY2F0aW9uLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbiNsb2NhdGlvbi1jb3VudHJ5IHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4jbWFpbi10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zbG93KSBlYXNlO1xufVxuXG4jY29udGVudC1ib3R0b20ge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cblxuXG4jaG9yei1zY3JvbGwtdGFicyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWItYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tbWVkKSBlYXNlO1xufVxuXG4udGFiLWJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWxpZ2h0LWxpZ2h0KTtcbn1cblxuLyogLnRhYi1idXR0b246YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQtbGlnaHRsaWdodCk7XG59ICovXG5cbi50YWItYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQpO1xufVxuXG4jaG9yei1zY3JvbGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5ob3VyLWNhcmQge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1saWdodCk7XG59XG5cbi8qIFJpZ2h0IHNpZGUgKi9cbi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogMTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2FyZCB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCkgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCkgZWFzZTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCkgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSBlYXNlLWluLW91dDtcbn1cblxuLmNhcmQsIC5jYXJkID4gKiB7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1tZWQpO1xufVxuXG4uY2FyZDphY3RpdmUsIC5jYXJkLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrKTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xuICAgIHRvcDogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWxpZ2h0KTtcbiAgICB3aWR0aDogbWluKDgwJSwgNDAwcHgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlbXBlcmF0dXJlLCAud2Vla2RheSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmhpZGRlbntcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLW91dCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgIH1cbiAgICAxNSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC8qIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3Igc2NyZWVucyB3aXRoIGEgd2lkdGggbGVzcyB0aGFuIDYwMHB4IGdvIGhlcmUgKi9cbiAgICBib2R5IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcbiAgICB9XG4gICAgXG4gICAgI21haW4tcmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgIH1cblxuICAgICNtYWluLXJpZ2h0LCAjbWFpbi1sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsdUJBQXVCO0FBQzNDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpR0FBaUc7QUFDckc7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnREFBZ0Q7QUFDcEQ7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksd0JBQXdCO0lBQ3hCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxtREFBbUQ7SUFDbkQsZ0RBQWdEO0lBQ2hELDhDQUE4QztJQUM5QywrQ0FBK0M7SUFDL0Msa0RBQWtEO0FBQ3REOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtBQUNKOztBQUVBO0lBQ0ksd0VBQXdFO0lBQ3hFO1FBQ0ksMEJBQTBCO1FBQzFCLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL25vcm1hbGl6ZS5jc3MnO1xcbkBpbXBvcnQgJy4vc2tlbGV0b24uY3NzJztcXG5cXG4qIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7ICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIC0tZ3JleTogZ3JheTtcXG4gICAgLS10cmFuc3BhcmVudC1saWdodC1saWdodDogcmdiYSgwLDAsMCwwLjIpO1xcbiAgICAtLXRyYW5zcGFyZW50LWxpZ2h0OiByZ2JhKDAsMCwwLDAuNCk7XFxuICAgIC0tdHJhbnNwYXJlbnQtbWVkOiByZ2JhKDAsMCwwLDAuNik7XFxuICAgIC0tdHJhbnNwYXJlbnQtZGFyazogcmdiYSgwLDAsMCwwLjcpO1xcbiAgICAtLWZvbnQtd2hpdGU6IGFsaWNlYmx1ZTtcXG4gICAgLS10cmFuc2l0aW9uLWZhc3Q6IDAuMXM7XFxuICAgIC0tdHJhbnNpdGlvbi1tZWQ6IDAuMTVzO1xcbiAgICAtLXRyYW5zaXRpb24tc2xvdzogMC4ycztcXG59XFxuXFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dCB7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI21haW4tbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogYXV0bywgaGlkZGVuIHdvcmtzICovXFxufVxcblxcbiNtYWluLXJpZ2h0IHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNuYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI3RvZ2dsZS10ZW1wLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQtbGlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4jdG9nZ2xlLXRlbXAtY29udGFpbmVyID4gKiB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1tZWQpIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdG9nZ2xlLXRlbXAtY29udGFpbmVyID4gbGFiZWwge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2dnbGUtdGVtcC1jb250YWluZXIgPiBsYWJlbCA+IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN0b2dnbGUtdGVtcC1jb250YWluZXIgPiBsYWJlbDpoYXMoaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkKSB7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1saWdodC1saWdodCk7XFxufVxcblxcbiNzZWFyY2gtaWNvbiB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk2JSkgc2VwaWEoNDclKSBzYXR1cmF0ZSg3MDczJSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LXdoaXRlKTtcXG4gICAgZmxleDogMTtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDE1cHg7ICovXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3NlYXJjaC1idXR0b24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1idXR0b24gPiBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1tZWQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbiNjb250ZW50LXRvcCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI21haW4taWNvbiB7XFxufVxcblxcbiNsb2NhdGlvbi1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiNsb2NhdGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuI2xvY2F0aW9uLWNvdW50cnkge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbiNtYWluLXRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc2xvdykgZWFzZTtcXG59XFxuXFxuI2NvbnRlbnQtYm90dG9tIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcblxcbiNob3J6LXNjcm9sbC10YWJzIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFiLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciB2YXIoLS10cmFuc2l0aW9uLW1lZCkgZWFzZTtcXG59XFxuXFxuLnRhYi1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWxpZ2h0LWxpZ2h0KTtcXG59XFxuXFxuLyogLnRhYi1idXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1saWdodC1saWdodGxpZ2h0KTtcXG59ICovXFxuXFxuLnRhYi1idXR0b246Zm9jdXMge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWxpZ2h0KTtcXG59XFxuXFxuI2hvcnotc2Nyb2xsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG4uaG91ci1jYXJkIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1saWdodCk7XFxufVxcblxcbi8qIFJpZ2h0IHNpZGUgKi9cXG4uY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1saWdodCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCkgZWFzZTtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSBlYXNlO1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSBlYXNlO1xcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCkgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCkgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJkLCAuY2FyZCA+ICoge1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LW1lZCk7XFxufVxcblxcbi5jYXJkOmFjdGl2ZSwgLmNhcmQuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrKTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XFxuICAgIHRvcDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQpO1xcbiAgICB3aWR0aDogbWluKDgwJSwgNDAwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wZXJhdHVyZSwgLndlZWtkYXkge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4tb3V0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XFxuICAgIH1cXG4gICAgMTUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG4gICAgNzAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAvKiAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHNjcmVlbnMgd2l0aCBhIHdpZHRoIGxlc3MgdGhhbiA2MDBweCBnbyBoZXJlICovXFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIH1cXG4gICAgXFxuICAgICNtYWluLXJpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG5cXG4gICAgI21haW4tcmlnaHQsICNtYWluLWxlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIGxvY2F0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgICAgICB0aGlzLmRhdGEgPSBvYmplY3RcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgICAgICB0aGlzLnRlbXBEaXYgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBlcmF0dXJlJylbMF1cbiAgICAgICAgdGhpcy5kYXlEaXYgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlZWtkYXknKVswXVxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBkaXNwbGF5VGVtcEYoKSB7XG4gICAgICAgIGNvbnN0IG1heGYgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5kYXkubWF4dGVtcF9mKVxuICAgICAgICBjb25zdCBtaW5mID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuZGF5Lm1pbnRlbXBfZilcbiAgICAgICAgdGhpcy50ZW1wRGl2LnRleHRDb250ZW50ID0gYEhpZ2g6ICR7bWF4Zn0gXFxyXFxuIExvdzogJHttaW5mfWBcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGVtcGVyYXR1cmUnKS50ZXh0Q29udGVudCA9IGAke21heGZ9y5pgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5VGVtcEMoKSB7XG4gICAgICAgIGNvbnN0IG1heGMgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5kYXkubWF4dGVtcF9jKVxuICAgICAgICBjb25zdCBtaW5jID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuZGF5Lm1pbnRlbXBfYylcbiAgICAgICAgdGhpcy50ZW1wRGl2LnRleHRDb250ZW50ID0gYEhpZ2g6ICR7bWF4Y30gXFxyXFxuIExvdzogJHttaW5jfWBcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGVtcGVyYXR1cmUnKS50ZXh0Q29udGVudCA9IGAke21heGN9y5pgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheURheUxvbmcoKSB7XG4gICAgICAgIHRoaXMuZGF5RGl2LnRleHRDb250ZW50ID0gdGhpcy5kYXRhLndlZWtkYXlMb25nXG4gICAgICAgIHJldHVybiB0aGlzLmRheURpdlxuICAgIH1cblxuICAgIGRpc3BsYXlEYXlTaG9ydCgpIHtcbiAgICAgICAgdGhpcy5kYXlEaXYudGV4dENvbnRlbnQgPSB0aGlzLmRhdGEud2Vla2RheVNob3J0XG4gICAgICAgIHJldHVybiB0aGlzLmRheURpdlxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgY3JlYXRlQ2FyZCA9IChwYXJlbnREaXYpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNvbnN0IHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdlZWtkYXkuY2xhc3NOYW1lID0gJ3dlZWtkYXknXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSdcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQod2Vla2RheSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKVxuICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBjbGVhckNhcmRzID0gKHBhcmVudERpdikgPT4ge1xuICAgIHdoaWxlIChwYXJlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnREaXYucmVtb3ZlQ2hpbGQocGFyZW50RGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuIiwiY29uc3QgaW5pdENvbnRhaW5lcnMgPSAocGFyZW50RGl2KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXJDb250YWluZXIuaWQgPSAnY29udGVudC1jb250YWluZXInXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudENvbnRhaW5lci5pZCA9IFwiY29udGVudFwiXG5cbiAgICBjb25zdCB0b3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvcERpdi5pZCA9IFwiY29udGVudC10b3BcIlxuXG4gICAgY29uc3QgbWFpbkljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5JY29uQ29udGFpbmVyLmlkID0gXCJtYWluLWljb24tY29udGFpbmVyXCJcbiAgICBjb25zdCBtYWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIFxuICAgIG1haW5JY29uLmlkID0gJ21haW4taWNvbidcblxuICAgIGNvbnN0IGxvY2F0aW9uSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2NhdGlvbk5hbWUuaWQgPSAnbG9jYXRpb24tbmFtZSdcbiAgICBjb25zdCBsb2NhdGlvbkNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvY2F0aW9uQ291bnRyeS5pZCA9ICdsb2NhdGlvbi1jb3VudHJ5J1xuICAgIGxvY2F0aW9uSW5mb0Rpdi5pZCA9ICdsb2NhdGlvbi1pbmZvJ1xuXG4gICAgY29uc3QgbWFpblRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluVGVtcGVyYXR1cmUuaWQgPSAnbWFpbi10ZW1wZXJhdHVyZSdcblxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm90dG9tRGl2LmlkID0gXCJjb250ZW50LWJvdHRvbVwiXG4gICAgY29uc3QgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWJEaXYuaWQgPSBcImhvcnotc2Nyb2xsLXRhYnNcIlxuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRlbXBlcmF0dXJlQnV0dG9uLnRleHRDb250ZW50ID0gXCJUZW1wZXJhdHVyZVwiXG4gICAgdGVtcGVyYXR1cmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiLWJ1dHRvbicpXG4gICAgY29uc3Qgd2luZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgd2luZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZFwiXG4gICAgd2luZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYnV0dG9uJylcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcmVjaXBpdGF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJQcmVjaXBpdGF0aW9uXCJcbiAgICBwcmVjaXBpdGF0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1idXR0b24nKVxuICAgIFxuICAgIGNvbnN0IGhvcnpTY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvcnpTY3JvbGxEaXYuaWQgPSBcImhvcnotc2Nyb2xsXCJcblxuICAgIC8vIGFkZCBjYXJkc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xuICAgICAgICBsZXQgaG91ckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBob3VyQ2FyZC5jbGFzc0xpc3QuYWRkKCdob3VyLWNhcmQnKVxuICAgICAgICBob3VyQ2FyZC50ZXh0Q29udGVudCA9IGkgXG4gICAgICAgIGhvcnpTY3JvbGxEaXYuYXBwZW5kQ2hpbGQoaG91ckNhcmQpXG4gICAgfVxuXG4gICAgbG9jYXRpb25JbmZvRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZSlcbiAgICBsb2NhdGlvbkluZm9EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25Db3VudHJ5KVxuICAgIHRvcERpdi5hcHBlbmRDaGlsZChtYWluSWNvbilcbiAgICB0b3BEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvRGl2KVxuICAgIHRvcERpdi5hcHBlbmRDaGlsZChtYWluVGVtcGVyYXR1cmUpXG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlQnV0dG9uKVxuICAgIHRhYkRpdi5hcHBlbmRDaGlsZCh3aW5kQnV0dG9uKVxuICAgIHRhYkRpdi5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uQnV0dG9uKVxuICAgIGJvdHRvbURpdi5hcHBlbmRDaGlsZCh0YWJEaXYpXG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGhvcnpTY3JvbGxEaXYpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BEaXYpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21EaXYpXG4gICAgY29udGFpbmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckNvbnRhaW5lcilcbiAgICByZXR1cm4gXG59XG5cbmV4cG9ydCB7aW5pdENvbnRhaW5lcnN9ICIsImltcG9ydCBTdW5ueTEgZnJvbSAnLi4vd2FsbHBhcGVycy9zdW5ueTAxLmpwZydcbmltcG9ydCBTdW5ueTIgZnJvbSAnLi4vd2FsbHBhcGVycy9zdW5ueTAyLmpwZydcbmltcG9ydCBTdW5ueTMgZnJvbSAnLi4vd2FsbHBhcGVycy9zdW5ueTAzLmpwZydcbmltcG9ydCBTdW5ueTQgZnJvbSAnLi4vd2FsbHBhcGVycy9zdW5ueTA0LmpwZydcbmltcG9ydCBTbm93eTEgZnJvbSAnLi4vd2FsbHBhcGVycy9zbm93eTAxLmpwZydcbmltcG9ydCBTbm93eTIgZnJvbSAnLi4vd2FsbHBhcGVycy9zbm93eTAyLmpwZydcbmltcG9ydCBTbm93eTMgZnJvbSAnLi4vd2FsbHBhcGVycy9zbm93eTAzLmpwZydcbmltcG9ydCBTbm93eTQgZnJvbSAnLi4vd2FsbHBhcGVycy9zbm93eTA0LmpwZydcbmltcG9ydCBSYWlueTEgZnJvbSAnLi4vd2FsbHBhcGVycy9yYWlueTAxLmpwZydcbmltcG9ydCBSYWlueTIgZnJvbSAnLi4vd2FsbHBhcGVycy9yYWlueTAyLmpwZydcbmltcG9ydCBSYWlueTMgZnJvbSAnLi4vd2FsbHBhcGVycy9yYWlueTAzLmpwZydcbmltcG9ydCBSYWlueTQgZnJvbSAnLi4vd2FsbHBhcGVycy9yYWlueTA0LmpwZydcbmltcG9ydCBDbG91ZHkxIGZyb20gJy4uL3dhbGxwYXBlcnMvY2xvdWR5MDEuanBnJ1xuaW1wb3J0IENsb3VkeTIgZnJvbSAnLi4vd2FsbHBhcGVycy9jbG91ZHkwMi5qcGcnXG5pbXBvcnQgQ2xvdWR5MyBmcm9tICcuLi93YWxscGFwZXJzL2Nsb3VkeTAzLmpwZydcbmltcG9ydCBDbG91ZHk0IGZyb20gJy4uL3dhbGxwYXBlcnMvY2xvdWR5MDQuanBnJ1xuXG5jb25zdCBzdW5ueVBpY3MgPSBbU3VubnkxLCBTdW5ueTIsIFN1bm55MywgU3Vubnk0XVxuY29uc3Qgc25vd3lQaWNzID0gW1Nub3d5MSwgU25vd3kyLCBTbm93eTMsIFNub3d5NF1cbmNvbnN0IGNsb3VkeVBpY3MgPSBbQ2xvdWR5MSwgQ2xvdWR5MiwgQ2xvdWR5MywgQ2xvdWR5NF1cbmNvbnN0IHJhaW55UGljcyA9IFtSYWlueTEsIFJhaW55MiwgUmFpbnkzLCBSYWlueTRdXG5cbmNvbnN0IGRpc3BsYXlXYWxscGFwZXIgPSAoZGF5LHBhcmVudERpdikgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJDb2RlID0gZGF5LmRhdGEuZGF5LmNvbmRpdGlvbi5jb2RlXG4gICAgY29uc3Qgd2VhdGhlclBpY3MgPSBkZXRlcm1pbmVXYWxscGFwZXIod2VhdGhlckNvZGUpIFxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZ2V0UmFuZE51bSgpXG4gICAgICAgIHBhcmVudERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7d2VhdGhlclBpY3NbbnVtYmVyXX0pYFxuICAgICAgICBwYXJlbnREaXYuc3R5bGVbJ2JhY2tncm91bmQtc2l6ZSddID0gJ2NvdmVyJ1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgICByZXR1cm5cbn1cblxuY29uc3QgZGV0ZXJtaW5lV2FsbHBhcGVyID0gKGNvbmRpdGlvbikgPT4ge1xuICAgIC8vIGNvbnN0IHN1bm55YXJyYXkgPSBbMTAwMCwgMTAwM11cbiAgICBjb25zdCByYWlueWFycmF5ID0gWzExNTAsIDExNTMsIDExNjgsIDExNzEsIDExODAsIDExODMsIDExODYsIDExODksXG4gICAgICAgICAgICAgICAgICAgICAgICAxMTkyLCAxMTk1LCAxMTk4LCAxMjAxLCAxMjQwLCAxMjQzLCAxMjQ2LCAxMjQ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTI3MywgMTI3Nl1cbiAgICBjb25zdCBjbG91ZHlhcnJheSA9IFsxMDA2LCAxMDA5LCAxMDMwLCAxMDYzLCAxMDY2LCAxMDY5LCAxMDcyLCAxMDg3LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTEzNV1cbiAgICBjb25zdCBzbm93eWFycmF5ID0gWzExMTQsIDExMTcsIDExNDcsIDEyMDQsIDEyMDcsIDEyMTAsIDEyMTMsIDEyMTYsIDEyMTksXG4gICAgICAgICAgICAgICAgICAgICAgICAxMjIyLCAxMjI1LCAxMjM3LCAxMjUyLCAxMjU1LCAxMjU4LCAxMjYxLCAxMjY0LCAxMjc5LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTI4Ml1cbiAgICBpZiAocmFpbnlhcnJheS5pbmNsdWRlcyhjb25kaXRpb24pKSB7IC8vIHJhaW55IFxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmFpbnknKVxuICAgICAgICByZXR1cm4gcmFpbnlQaWNzXG4gICAgfSBlbHNlIGlmIChjbG91ZHlhcnJheS5pbmNsdWRlcyhjb25kaXRpb24pKSB7IC8vIGNsb3VkeVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xvdWR5JylcbiAgICAgICAgcmV0dXJuIGNsb3VkeVBpY3NcbiAgICB9IGVsc2UgaWYgKHNub3d5YXJyYXkuaW5jbHVkZXMoY29uZGl0aW9uKSkgeyAvLyBzbm93eVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc25vd3knKVxuICAgICAgICByZXR1cm4gc25vd3lQaWNzXG4gICAgfSBlbHNlIHsgLy8gc3VubnlcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1bm55IG9yIGRlZmF1bHQnKVxuICAgICAgICByZXR1cm4gc3VubnlQaWNzIFxuICAgIH0gICAgIFxufVxuXG5jb25zdCBnZXRSYW5kTnVtID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNClcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXYWxscGFwZXIgXG4iLCJjb25zdCBtYWluRG9tID0gKHBhcmVudERpdikgPT4ge1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxlZnQuaWQgPSAnbWFpbi1sZWZ0J1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByaWdodC5jbGFzc05hbWUgPSAnY2FyZC1jb250YWluZXInXG4gICAgcmlnaHQuaWQgPSAnbWFpbi1yaWdodCdcblxuICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChsZWZ0KVxuICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChyaWdodClcbiAgICByZXR1cm4gW2xlZnQscmlnaHRdXG59XG5leHBvcnQgZGVmYXVsdCBtYWluRG9tIiwiaW1wb3J0IHNlYXJjaEljb24gZnJvbSBcIi4uL2ljb25zL3NlYXJjaC5zdmdcIlxuXG5jb25zdCBpbml0TmF2YmFyID0gKHBhcmVudERpdikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVsZW1lbnQuaWQgPSAnbmF2YmFyJ1xuICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIHJldHVybiBlbGVtZW50IFxufVxuXG5jb25zdCBuYXZGb3JtID0gKHBhcmVudERpdikgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gJ3NlYXJjaC1mb3JtJ1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCdcbiAgICBpbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmlkID0gXCJzZWFyY2gtYnV0dG9uXCJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uuc3JjID0gc2VhcmNoSWNvbiBcbiAgICBpbWFnZS5pZCA9ICdzZWFyY2gtaWNvbidcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGZvcm0pXG4gICAgcmV0dXJuIGZvcm0gXG59XG5cbmNvbnN0IG5hdlRvZ2dsZVRlbXAgPSAocGFyZW50RGl2KSA9PiB7XG4gICAgY29uc3QgdG9nZ2xlVGVtcExhYmVsRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCB0b2dnbGVUZW1wUmFkaW9GID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZ2dsZVRlbXBSYWRpb0YudHlwZSA9ICdyYWRpbydcbiAgICB0b2dnbGVUZW1wUmFkaW9GLm5hbWUgPSAndG9nZ2xlVGVtcCdcbiAgICB0b2dnbGVUZW1wTGFiZWxGLnRleHRDb250ZW50ID0gJ0bLmidcbiAgICB0b2dnbGVUZW1wUmFkaW9GLmNoZWNrZWQgPSB0cnVlXG4gICAgdG9nZ2xlVGVtcExhYmVsRi5hcHBlbmRDaGlsZCh0b2dnbGVUZW1wUmFkaW9GKVxuXG4gICAgY29uc3QgdG9nZ2xlVGVtcExhYmVsQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCB0b2dnbGVUZW1wUmFkaW9DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRvZ2dsZVRlbXBSYWRpb0MudHlwZSA9ICdyYWRpbydcbiAgICB0b2dnbGVUZW1wUmFkaW9DLm5hbWUgPSAndG9nZ2xlVGVtcCdcbiAgICB0b2dnbGVUZW1wTGFiZWxDLnRleHRDb250ZW50ID0gJ0PLmidcbiAgICB0b2dnbGVUZW1wTGFiZWxDLmFwcGVuZENoaWxkKHRvZ2dsZVRlbXBSYWRpb0MpXG5cbiAgICBjb25zdCB0b2dnbGVUZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2dnbGVUZW1wRGl2LmlkID0gJ3RvZ2dsZS10ZW1wLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IHRvZ2dsZVRlbXBEaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2dnbGVUZW1wRGl2aWRlci5pbm5lclRleHQgPSAnfCdcblxuICAgIHRvZ2dsZVRlbXBEaXYuYXBwZW5kQ2hpbGQodG9nZ2xlVGVtcExhYmVsQylcbiAgICB0b2dnbGVUZW1wRGl2LmFwcGVuZENoaWxkKHRvZ2dsZVRlbXBEaXZpZGVyKVxuICAgIHRvZ2dsZVRlbXBEaXYuYXBwZW5kQ2hpbGQodG9nZ2xlVGVtcExhYmVsRilcbiAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQodG9nZ2xlVGVtcERpdilcbiAgICByZXR1cm4gW3RvZ2dsZVRlbXBSYWRpb0MsIHRvZ2dsZVRlbXBSYWRpb0ZdIFxufVxuXG5cbmV4cG9ydCB7aW5pdE5hdmJhciwgbmF2Rm9ybSwgbmF2VG9nZ2xlVGVtcH0gIiwiaW1wb3J0IHdlYXRoZXJhcGkgZnJvbSBcIi4vd2VhdGhlcmFwaVwiXG4vLyBpbXBvcnQgeyB1bnNwbGFzaEFwaSwgdW5zcGxhc2hTZWNyZXRBcGkgfSBmcm9tIFwiLi91bnNwbGFzaGFwaVwiXG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5nID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7d2VhdGhlcmFwaSgpfSZxPSR7bG9jYXRpb259JmRheXM9N2BcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHN0cmluZylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBpZiAoZGF0YS5lcnJvciAmJiBkYXRhLmVycm9yLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgICAgICAgIHRocm93IGRhdGEuZXJyb3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgfVxufVxuXG4vLyBjb25zdCBnZXRVbnNwbGFzaERhdGEgPSBhc3luYyAod2VhdGhlcikgPT4ge1xuLy8gICAgIGNvbnN0IHN0cmluZyA9IGAke3Vuc3BsYXNoQXBpKCl9YFxuXG4vLyB9XG5cbi8vIGV4cG9ydCB7Z2V0V2VhdGhlckRhdGEsIGdldFVuc3BsYXNoRGF0YSB9XG5leHBvcnQge2dldFdlYXRoZXJEYXRhfSIsImltcG9ydCAqIGFzIG5hdiBmcm9tICcuL2RvbS9uYXYnXG5pbXBvcnQge3NldERPTSwgc2V0VGVtcH0gZnJvbSAnLi9zZXRJbmZvcm1hdGlvbidcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbWFpbkRvbSBmcm9tICcuL2RvbS9tYWluJ1xuaW1wb3J0IHNlYXJjaExvY2F0aW9uIGZyb20gJy4vc2VhcmNoTG9jYXRpb24nXG5pbXBvcnQgc2V0RGF5IGZyb20gJy4vc2V0TWFpbkluZm9ybWF0aW9uJ1xuaW1wb3J0IHsgaW5pdENvbnRhaW5lcnMgfSBmcm9tICcuL2RvbS9jb250ZW50J1xuXG4vLyBTZXR1cCBtYWluIHBhZ2VcbmNvbnN0IFtsZWZ0bWFpbiwgcmlnaHRtYWluXSA9IG1haW5Eb20oZG9jdW1lbnQuYm9keSlcblxuLy8gTmF2YmFyIHdpdGggc2VhcmNoIGFuZCB0b2dnbGUgdGVtcGVyYXR1cmUgbWVhc3VyZW1lbnQgb3B0aW9uXG5jb25zdCBuYXZiYXIgPSBuYXYuaW5pdE5hdmJhcihsZWZ0bWFpbilcbmNvbnN0IGZvcm0gPSBuYXYubmF2Rm9ybShuYXZiYXIpXG5jb25zdCBmb3JtaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JylcbmNvbnN0IFtyYWRpb0MsIHJhZGlvRl0gPSBuYXYubmF2VG9nZ2xlVGVtcChuYXZiYXIpXG5pbml0Q29udGFpbmVycyhsZWZ0bWFpbilcbmNvbnN0IG1haW5UZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGVtcGVyYXR1cmUnKVxubGV0IHNlbGVjdGVkRGF5O1xuY29uc3QgZGF5QXJyYXkgPSBbXVxuXG4vLyBOZXcgbG9jYXRpb25cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgZm9ybVZhbHVlID0gZm9ybWlucHV0LnZhbHVlXG4gIGRheUFycmF5Lmxlbmd0aCA9IDBcbiAgdHJ5IHtcbiAgICBjb25zdCBhcnIgPSBhd2FpdCBzZWFyY2hMb2NhdGlvbihmb3JtVmFsdWUsIHJpZ2h0bWFpbiwgcmFkaW9GKVxuICAgIGFyci5tYXAoIChlbGVtZW50KSA9PiBkYXlBcnJheS5wdXNoKGVsZW1lbnQpKVxuICAgIC8vIEluaXRpYWxpemUgZmlyc3QgZGF5IGFzIHNlbGVjdGVkIGRhdGVcbiAgICBzZWxlY3RlZERheSA9IHNldERheShkYXlBcnJheVswXSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfSBmaW5hbGx5IHtcbiAgICBmb3JtaW5wdXQudmFsdWUgPSAnJ1xuICB9XG59KVxuXG4vLyBpbml0aWFsaXplXG5jb25zdCBhcnIgPSBhd2FpdCBzZWFyY2hMb2NhdGlvbihcIkxvcyBBbmdlbGVzXCIsIHJpZ2h0bWFpbiwgcmFkaW9GKVxuYXJyLm1hcCggKGVsZW1lbnQpID0+IGRheUFycmF5LnB1c2goZWxlbWVudCkpXG4vLyBJbml0aWFsaXplIGZpcnN0IGRheSBhcyBzZWxlY3RlZCBkYXRlXG5zZWxlY3RlZERheSA9IHNldERheShkYXlBcnJheVswXSlcblxuXG5cbnJhZGlvQy5vbmNsaWNrID0gKCkgPT4ge1xuIGRheUFycmF5Lm1hcCgoZGF5T2JqKSA9PiBzZXRET00oZGF5T2JqLnRlbXBEaXYsIHNldFRlbXAsIFtkYXlPYmosIHJhZGlvRl0pKVxuIHNldERPTShtYWluVGVtcCwgc2V0VGVtcCwgW3NlbGVjdGVkRGF5LCByYWRpb0ZdKVxufVxuXG5yYWRpb0Yub25jbGljayA9ICgpID0+IHtcbiBkYXlBcnJheS5tYXAoKGRheU9iaikgPT4gc2V0RE9NKGRheU9iai50ZW1wRGl2LCBzZXRUZW1wLCBbZGF5T2JqLCByYWRpb0ZdKSlcbiBzZXRET00obWFpblRlbXAsIHNldFRlbXAsIFtzZWxlY3RlZERheSwgcmFkaW9GXSlcbn1cbi8vIGRpc3BsYXkgbWFpbiBwYWdlXG4vLyAxLiBzZWxlY3QgZGF5XG4vLyAyLiBhY2Nlc3MgZGF5IGRhdGFcbi8vIDMuIGdldCBkYXkgZGF0YVxuLy8gNC4gb3V0cHV0IGRheSBkYXRhIGluIGRvbVxuXG4vLyBhLiBhZGQgdW5pdHMgdG8gc2V0aW5mb3JtYXRpb24gXG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2dldERhdGFcIlxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbidcblxuY29uc3QgZ2V0RGF5cyA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmUgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbilcbiAgICAgICAgY29uc3Qgem9uZSA9IHJlc29sdmUubG9jYXRpb24udHpfaWRcbiAgICAgICAgY29uc3QgZGF5c0ZvcmVjYXN0ID0gcmVzb2x2ZS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBjb25zdCByZWdleCA9IC9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkkLztcbiAgICAgICAgZGF5c0ZvcmVjYXN0LmZvckVhY2goIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZWxlbWVudC5kYXRlIFxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBkYXRlU3RyLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChtYXRjaFsyXSwgMTApO1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VJbnQobWF0Y2hbM10sIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gRGF0ZVRpbWUuZnJvbU9iamVjdCh7XG4gICAgICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICAgICAgZGF5OiBkYXlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB6b25lOiB6b25lLCAvLyBSZXBsYWNlIHdpdGggeW91ciBkZXNpcmVkIHRpbWUgem9uZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQud2Vla2RheSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQud2Vla2RheSA9IGRhdGVUaW1lLndlZWtkYXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWxlbWVudC53ZWVrZGF5TG9uZykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQud2Vla2RheUxvbmcgPSBkYXRlVGltZS53ZWVrZGF5TG9uZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LndlZWtkYXlTaG9ydCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQud2Vla2RheVNob3J0ID0gZGF0ZVRpbWUud2Vla2RheVNob3J0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgcmV0dXJuIFtyZXNvbHZlLCBkYXlzRm9yZWNhc3RdXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5cyIsImltcG9ydCB7Y3JlYXRlQ2FyZCwgY2xlYXJDYXJkcyB9IGZyb20gJy4vZG9tL2NhcmQnXG5pbXBvcnQgRGF5IGZyb20gJy4vRGF5J1xuaW1wb3J0IG1ha2VEYXlzIGZyb20gJy4vbWFrZURheXMnXG5pbXBvcnQge3NldERPTSwgc2V0RGF5LCBzZXREYXlJY29uLCBzZXRUZW1wfSBmcm9tICcuL3NldEluZm9ybWF0aW9uJ1xuaW1wb3J0IHNob3dOb3RpZmljYXRpb24gZnJvbSAnLi9zaG93Tm90aWZpY2F0aW9uJ1xuaW1wb3J0IGRpc3BsYXlXYWxscGFwZXIgZnJvbSAnLi9kb20vZGlzcGxheVdhbGxwYXBlcidcblxuY29uc3Qgc2VhcmNoTG9jYXRpb24gPSBhc3luYyAoZm9ybVZhbHVlLCBjYXJkQ29udGFpbmVyLCByYWRpb0YpID0+IHtcbiAgY29uc3QgZGF5QXJyYXkgPSBbXVxuICB0cnkge1xuICAgIGNvbnN0IHJlc29sdmUgPSBhd2FpdCBtYWtlRGF5cyhmb3JtVmFsdWUpXG4gICAgLy8gQ2xlYXIgUHJpb3JcbiAgICBjbGVhckNhcmRzKGNhcmRDb250YWluZXIpXG5cbiAgICBjb25zb2xlLmxvZyhyZXNvbHZlKVxuICAgIGNvbnN0IGRheXNkYXRhID0gcmVzb2x2ZVsxXVxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpPCBkYXlzZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZGF5QXJyYXkucHVzaChuZXcgRGF5KGRheXNkYXRhW2ldLCByZXNvbHZlWzBdLmxvY2F0aW9uLCBjcmVhdGVDYXJkKGNhcmRDb250YWluZXIpKSlcbiAgICB9XG5cbiAgICBkYXlBcnJheS5tYXAoKGRheU9iaikgPT4ge1xuICAgICAgc2V0RE9NKGRheU9iai5lbGVtZW50LCBzZXREYXlJY29uLCBbZGF5T2JqXSlcbiAgICAgIHNldERPTShkYXlPYmoudGVtcERpdiwgc2V0VGVtcCwgW2RheU9iaiwgcmFkaW9GXSlcbiAgICAgIHNldERPTShkYXlPYmouZGF5RGl2LCBzZXREYXksIFtkYXlPYmpdKVxuICAgIH0pXG5cbiAgICBkaXNwbGF5V2FsbHBhcGVyKGRheUFycmF5WzBdLGRvY3VtZW50LmJvZHkpXG4gICAgY29uc29sZS5sb2coZGF5QXJyYXkpXG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSAxMDA2KSB7XG4gICAgICBzaG93Tm90aWZpY2F0aW9uKCdMb2NhdGlvbiBub3QgZm91bmQnKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZGF5QXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoTG9jYXRpb24iLCJjb25zdCBzZXRET00gPSAoZWxlbWVudCwgZnVuYywgYXJnc0FycmF5KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudFJlZiA9IGVsZW1lbnQgXG4gICAgZWxlbWVudFJlZi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3NBcnJheSlcbiAgICAgICAgZWxlbWVudFJlZi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH0sIDIwMCk7XG59XG5cbmNvbnN0IHNldERheSA9IChkYXkpID0+IHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBkYXkuZGlzcGxheURheUxvbmcoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRheS5kaXNwbGF5RGF5U2hvcnQoKVxuICAgIH1cbn1cblxuY29uc3Qgc2V0VGVtcCA9IChkYXksIHJhZGlvRikgPT4ge1xuICAgIGlmIChyYWRpb0YuY2hlY2tlZCkge1xuICAgICAgICBkYXkuZGlzcGxheVRlbXBGKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXkuZGlzcGxheVRlbXBDKClcbiAgICB9XG59IFxuXG5jb25zdCBzZXREYXlJY29uID0gKGRheSkgPT4ge1xuICAgIGRheS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cDoke2RheS5kYXRhLmRheS5jb25kaXRpb24uaWNvbn0pYFxuICAgIGRheS5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCJcbiAgICBkYXkuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIlxufVxuXG5jb25zdCBzZXRDb250ZW50ID0gKGRheSkgPT4ge1xuICAgIC8vIHNldCBpY29uXG59XG5cbmNvbnN0IHNldFRhYiA9IChkYXkpID0+IHtcbiAgICAvLyBkaXNwbGF5cyB0ZW1wIC8gcHJlY2lwaXRhdGlvbiAvIHdpbmQgaG91cmx5XG59XG5cbmV4cG9ydCB7c2V0RE9NLCBzZXREYXksIHNldFRlbXAsIHNldERheUljb24sIHNldENvbnRlbnR9IiwiY29uc3Qgc2V0RGF5ID0gKGRheU9iaikgPT4ge1xuICAgIGRheU9iai5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICBkYXlPYmouc2VsZWN0ZWQgPSB0cnVlXG5cbiAgICAvLyBXZWF0aGVyIEljb25cbiAgICBjb25zdCBtYWluSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWljb24nKVxuICAgIG1haW5JY29uLnNyYyA9IGRheU9iai5kYXRhLmRheS5jb25kaXRpb24uaWNvblxuICAgIC8vIExvY2F0aW9uXG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gZGF5T2JqLmxvY2F0aW9uXG4gICAgbGV0IGxvY2F0aW9uU3RyaW5nID0gYCR7bG9jYXRpb25EYXRhLm5hbWV9YFxuICAgIGlmIChsb2NhdGlvbkRhdGEucmVnaW9uICE9PSAnJykge1xuICAgICAgICBsb2NhdGlvblN0cmluZyArPSBgLCAke2xvY2F0aW9uRGF0YS5yZWdpb259YFxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24tbmFtZScpLnRleHRDb250ZW50ID0gbG9jYXRpb25TdHJpbmdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24tY291bnRyeScpLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25EYXRhLmNvdW50cnl9YFxuXG4gICAgcmV0dXJuIGRheU9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXREYXkgIiwiY29uc3Qgbm9Mb2NhdGlvbiA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uJyk7XG4gICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKVxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5hbmltYXRpb24gPSAnc2xpZGUtaW4tb3V0IDIuNXMgZWFzZSBmb3J3YXJkcydcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpXG4gICAgfSwgMjUxMCk7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBub0xvY2F0aW9uIiwiY29uc3Qgd2VhdGhlcmFwaSA9ICgpID0+IHtcbiAgICByZXR1cm4gJzY1NWU0NTE3OGFjYTRiOGY5NzkxNDQ0NTgyMzIxMTAnXG59XG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyYXBpIiwiaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7XG4gIGlzVW5kZWZpbmVkLFxuICBtYXliZUFycmF5LFxuICBpc0RhdGUsXG4gIGlzTnVtYmVyLFxuICBiZXN0QnksXG4gIGRheXNJbk1vbnRoLFxuICBkYXlzSW5ZZWFyLFxuICBpc0xlYXBZZWFyLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbiAgb2JqVG9Mb2NhbFRTLFxuICBwYWRTdGFydCxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuaW1wb3J0IGRpZmYgZnJvbSBcIi4vaW1wbC9kaWZmLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVJGQzI4MjJEYXRlLCBwYXJzZUlTT0RhdGUsIHBhcnNlSFRUUERhdGUsIHBhcnNlU1FMIH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgcGFyc2VGcm9tVG9rZW5zLFxuICBleHBsYWluRnJvbVRva2VucyxcbiAgZm9ybWF0T3B0c1RvVG9rZW5zLFxuICBleHBhbmRNYWNyb1Rva2Vucyxcbn0gZnJvbSBcIi4vaW1wbC90b2tlblBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgZ3JlZ29yaWFuVG9XZWVrLFxuICB3ZWVrVG9HcmVnb3JpYW4sXG4gIGdyZWdvcmlhblRvT3JkaW5hbCxcbiAgb3JkaW5hbFRvR3JlZ29yaWFuLFxuICBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YSxcbiAgaGFzSW52YWxpZFdlZWtEYXRhLFxuICBoYXNJbnZhbGlkT3JkaW5hbERhdGEsXG4gIGhhc0ludmFsaWRUaW1lRGF0YSxcbn0gZnJvbSBcIi4vaW1wbC9jb252ZXJzaW9ucy5qc1wiO1xuaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9pbXBsL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7XG4gIEludmFsaWRBcmd1bWVudEVycm9yLFxuICBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcixcbiAgSW52YWxpZFVuaXRFcnJvcixcbiAgSW52YWxpZERhdGVUaW1lRXJyb3IsXG59IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5cbmNvbnN0IElOVkFMSUQgPSBcIkludmFsaWQgRGF0ZVRpbWVcIjtcbmNvbnN0IE1BWF9EQVRFID0gOC42NGUxNTtcblxuZnVuY3Rpb24gdW5zdXBwb3J0ZWRab25lKHpvbmUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5zdXBwb3J0ZWQgem9uZVwiLCBgdGhlIHpvbmUgXCIke3pvbmUubmFtZX1cIiBpcyBub3Qgc3VwcG9ydGVkYCk7XG59XG5cbi8vIHdlIGNhY2hlIHdlZWsgZGF0YSBvbiB0aGUgRFQgb2JqZWN0IGFuZCB0aGlzIGludGVybWVkaWF0ZXMgdGhlIGNhY2hlXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xuICB9XG4gIHJldHVybiBkdC53ZWVrRGF0YTtcbn1cblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zLCBcIm1ha2UgYSBuZXcgb2JqZWN0IHdpdGggdGhlc2UgbW9kaWZpY2F0aW9uc1wiLiBhbGwgXCJzZXR0ZXJzXCIgcmVhbGx5IHVzZSB0aGlzXG4vLyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHdoaWxlIG9ubHkgY2hhbmdpbmcgc29tZSBvZiB0aGUgcHJvcGVydGllc1xuZnVuY3Rpb24gY2xvbmUoaW5zdCwgYWx0cykge1xuICBjb25zdCBjdXJyZW50ID0ge1xuICAgIHRzOiBpbnN0LnRzLFxuICAgIHpvbmU6IGluc3Quem9uZSxcbiAgICBjOiBpbnN0LmMsXG4gICAgbzogaW5zdC5vLFxuICAgIGxvYzogaW5zdC5sb2MsXG4gICAgaW52YWxpZDogaW5zdC5pbnZhbGlkLFxuICB9O1xuICByZXR1cm4gbmV3IERhdGVUaW1lKHsgLi4uY3VycmVudCwgLi4uYWx0cywgb2xkOiBjdXJyZW50IH0pO1xufVxuXG4vLyBmaW5kIHRoZSByaWdodCBvZmZzZXQgYSBnaXZlbiBsb2NhbCB0aW1lLiBUaGUgbyBpbnB1dCBpcyBvdXIgZ3Vlc3MsIHdoaWNoIGRldGVybWluZXMgd2hpY2hcbi8vIG9mZnNldCB3ZSdsbCBwaWNrIGluIGFtYmlndW91cyBjYXNlcyAoZS5nLiB0aGVyZSBhcmUgdHdvIDMgQU1zIGIvYyBGYWxsYmFjayBEU1QpXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXG4gIGxldCB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwO1xuXG4gIC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcbiAgY29uc3QgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuXG4gIC8vIElmIHNvLCBvZmZzZXQgZGlkbid0IGNoYW5nZSBhbmQgd2UncmUgZG9uZVxuICBpZiAobyA9PT0gbzIpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcbiAgfVxuXG4gIC8vIElmIG5vdCwgY2hhbmdlIHRoZSB0cyBieSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgb2Zmc2V0XG4gIHV0Y0d1ZXNzIC09IChvMiAtIG8pICogNjAgKiAxMDAwO1xuXG4gIC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxuICBjb25zdCBvMyA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG4gIGlmIChvMiA9PT0gbzMpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvMl07XG4gIH1cblxuICAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXG4gIHJldHVybiBbbG9jYWxUUyAtIE1hdGgubWluKG8yLCBvMykgKiA2MCAqIDEwMDAsIE1hdGgubWF4KG8yLCBvMyldO1xufVxuXG4vLyBjb252ZXJ0IGFuIGVwb2NoIHRpbWVzdGFtcCBpbnRvIGEgY2FsZW5kYXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIG9mZnNldFxuZnVuY3Rpb24gdHNUb09iaih0cywgb2Zmc2V0KSB7XG4gIHRzICs9IG9mZnNldCAqIDYwICogMTAwMDtcblxuICBjb25zdCBkID0gbmV3IERhdGUodHMpO1xuXG4gIHJldHVybiB7XG4gICAgeWVhcjogZC5nZXRVVENGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBkLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgIGRheTogZC5nZXRVVENEYXRlKCksXG4gICAgaG91cjogZC5nZXRVVENIb3VycygpLFxuICAgIG1pbnV0ZTogZC5nZXRVVENNaW51dGVzKCksXG4gICAgc2Vjb25kOiBkLmdldFVUQ1NlY29uZHMoKSxcbiAgICBtaWxsaXNlY29uZDogZC5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgfTtcbn1cblxuLy8gY29udmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGVwb2NoIHRpbWVzdGFtcFxuZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkge1xuICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpO1xufVxuXG4vLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUc1xuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcbiAgY29uc3Qgb1ByZSA9IGluc3QubyxcbiAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgbW9udGggPSBpbnN0LmMubW9udGggKyBNYXRoLnRydW5jKGR1ci5tb250aHMpICsgTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpICogMyxcbiAgICBjID0ge1xuICAgICAgLi4uaW5zdC5jLFxuICAgICAgeWVhcixcbiAgICAgIG1vbnRoLFxuICAgICAgZGF5OlxuICAgICAgICBNYXRoLm1pbihpbnN0LmMuZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICtcbiAgICAgICAgTWF0aC50cnVuYyhkdXIuZGF5cykgK1xuICAgICAgICBNYXRoLnRydW5jKGR1ci53ZWVrcykgKiA3LFxuICAgIH0sXG4gICAgbWlsbGlzVG9BZGQgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtcbiAgICAgIHllYXJzOiBkdXIueWVhcnMgLSBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgICBxdWFydGVyczogZHVyLnF1YXJ0ZXJzIC0gTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpLFxuICAgICAgbW9udGhzOiBkdXIubW9udGhzIC0gTWF0aC50cnVuYyhkdXIubW9udGhzKSxcbiAgICAgIHdlZWtzOiBkdXIud2Vla3MgLSBNYXRoLnRydW5jKGR1ci53ZWVrcyksXG4gICAgICBkYXlzOiBkdXIuZGF5cyAtIE1hdGgudHJ1bmMoZHVyLmRheXMpLFxuICAgICAgaG91cnM6IGR1ci5ob3VycyxcbiAgICAgIG1pbnV0ZXM6IGR1ci5taW51dGVzLFxuICAgICAgc2Vjb25kczogZHVyLnNlY29uZHMsXG4gICAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHMsXG4gICAgfSkuYXMoXCJtaWxsaXNlY29uZHNcIiksXG4gICAgbG9jYWxUUyA9IG9ialRvTG9jYWxUUyhjKTtcblxuICBsZXQgW3RzLCBvXSA9IGZpeE9mZnNldChsb2NhbFRTLCBvUHJlLCBpbnN0LnpvbmUpO1xuXG4gIGlmIChtaWxsaXNUb0FkZCAhPT0gMCkge1xuICAgIHRzICs9IG1pbGxpc1RvQWRkO1xuICAgIC8vIHRoYXQgY291bGQgaGF2ZSBjaGFuZ2VkIHRoZSBvZmZzZXQgYnkgZ29pbmcgb3ZlciBhIERTVCwgYnV0IHdlIHdhbnQgdG8ga2VlcCB0aGUgdHMgdGhlIHNhbWVcbiAgICBvID0gaW5zdC56b25lLm9mZnNldCh0cyk7XG4gIH1cblxuICByZXR1cm4geyB0cywgbyB9O1xufVxuXG4vLyBoZWxwZXIgdXNlZnVsIGluIHR1cm5pbmcgdGhlIHJlc3VsdHMgb2YgcGFyc2luZyBpbnRvIHJlYWwgZGF0ZXNcbi8vIGJ5IGhhbmRsaW5nIHRoZSB6b25lIG9wdGlvbnNcbmZ1bmN0aW9uIHBhcnNlRGF0YVRvRGF0ZVRpbWUocGFyc2VkLCBwYXJzZWRab25lLCBvcHRzLCBmb3JtYXQsIHRleHQsIHNwZWNpZmljT2Zmc2V0KSB7XG4gIGNvbnN0IHsgc2V0Wm9uZSwgem9uZSB9ID0gb3B0cztcbiAgaWYgKChwYXJzZWQgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggIT09IDApIHx8IHBhcnNlZFpvbmUpIHtcbiAgICBjb25zdCBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmUsXG4gICAgICBpbnN0ID0gRGF0ZVRpbWUuZnJvbU9iamVjdChwYXJzZWQsIHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxuICAgICAgICBzcGVjaWZpY09mZnNldCxcbiAgICAgIH0pO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcbiAgICAgIG5ldyBJbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyAke2Zvcm1hdH1gKVxuICAgICk7XG4gIH1cbn1cblxuLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyXG4vLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHNcbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1ogPSB0cnVlKSB7XG4gIHJldHVybiBkdC5pc1ZhbGlkXG4gICAgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoXCJlbi1VU1wiKSwge1xuICAgICAgICBhbGxvd1osXG4gICAgICAgIGZvcmNlU2ltcGxlOiB0cnVlLFxuICAgICAgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpXG4gICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB0b0lTT0RhdGUobywgZXh0ZW5kZWQpIHtcbiAgY29uc3QgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XG4gIGxldCBjID0gXCJcIjtcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSBcIitcIjtcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcblxuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHRvSVNPVGltZShcbiAgbyxcbiAgZXh0ZW5kZWQsXG4gIHN1cHByZXNzU2Vjb25kcyxcbiAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gIGluY2x1ZGVPZmZzZXQsXG4gIGV4dGVuZGVkWm9uZVxuKSB7XG4gIGxldCBjID0gcGFkU3RhcnQoby5jLmhvdXIpO1xuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiOlwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gICAgaWYgKG8uYy5taWxsaXNlY29uZCAhPT0gMCB8fCBvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gIH1cblxuICBpZiAoby5jLm1pbGxpc2Vjb25kICE9PSAwIHx8IG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLnNlY29uZCk7XG5cbiAgICBpZiAoby5jLm1pbGxpc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc01pbGxpc2Vjb25kcykge1xuICAgICAgYyArPSBcIi5cIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbGxpc2Vjb25kLCAzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgIGlmIChvLmlzT2Zmc2V0Rml4ZWQgJiYgby5vZmZzZXQgPT09IDAgJiYgIWV4dGVuZGVkWm9uZSkge1xuICAgICAgYyArPSBcIlpcIjtcbiAgICB9IGVsc2UgaWYgKG8ubyA8IDApIHtcbiAgICAgIGMgKz0gXCItXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAvIDYwKSk7XG4gICAgICBjICs9IFwiOlwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gJSA2MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjICs9IFwiK1wiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAvIDYwKSk7XG4gICAgICBjICs9IFwiOlwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAlIDYwKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGV4dGVuZGVkWm9uZSkge1xuICAgIGMgKz0gXCJbXCIgKyBvLnpvbmUuaWFuYU5hbWUgKyBcIl1cIjtcbiAgfVxuICByZXR1cm4gYztcbn1cblxuLy8gZGVmYXVsdHMgZm9yIHVuc3BlY2lmaWVkIHVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzXG5jb25zdCBkZWZhdWx0VW5pdFZhbHVlcyA9IHtcbiAgICBtb250aDogMSxcbiAgICBkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9LFxuICBkZWZhdWx0V2Vla1VuaXRWYWx1ZXMgPSB7XG4gICAgd2Vla051bWJlcjogMSxcbiAgICB3ZWVrZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbiAgfSxcbiAgZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzID0ge1xuICAgIG9yZGluYWw6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9O1xuXG4vLyBVbml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFycywgc29ydGVkIGJ5IGJpZ25lc3NcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFtcInllYXJcIiwgXCJtb250aFwiLCBcImRheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgb3JkZXJlZFdlZWtVbml0cyA9IFtcbiAgICBcIndlZWtZZWFyXCIsXG4gICAgXCJ3ZWVrTnVtYmVyXCIsXG4gICAgXCJ3ZWVrZGF5XCIsXG4gICAgXCJob3VyXCIsXG4gICAgXCJtaW51dGVcIixcbiAgICBcInNlY29uZFwiLFxuICAgIFwibWlsbGlzZWNvbmRcIixcbiAgXSxcbiAgb3JkZXJlZE9yZGluYWxVbml0cyA9IFtcInllYXJcIiwgXCJvcmRpbmFsXCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdO1xuXG4vLyBzdGFuZGFyZGl6ZSBjYXNlIGFuZCBwbHVyYWxpdHkgaW4gdW5pdHNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICBjb25zdCBub3JtYWxpemVkID0ge1xuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIGRheTogXCJkYXlcIixcbiAgICBkYXlzOiBcImRheVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmQ6IFwibWlsbGlzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZHM6IFwibWlsbGlzZWNvbmRcIixcbiAgICB3ZWVrZGF5OiBcIndlZWtkYXlcIixcbiAgICB3ZWVrZGF5czogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3NudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtudW1iZXJzOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVreWVhcjogXCJ3ZWVrWWVhclwiLFxuICAgIHdlZWt5ZWFyczogXCJ3ZWVrWWVhclwiLFxuICAgIG9yZGluYWw6IFwib3JkaW5hbFwiLFxuICB9W3VuaXQudG9Mb3dlckNhc2UoKV07XG5cbiAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cblxuLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxuZnVuY3Rpb24gcXVpY2tEVChvYmosIG9wdHMpIHtcbiAgY29uc3Qgem9uZSA9IG5vcm1hbGl6ZVpvbmUob3B0cy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXG4gICAgdHNOb3cgPSBTZXR0aW5ncy5ub3coKTtcblxuICBsZXQgdHMsIG87XG5cbiAgLy8gYXNzdW1lIHdlIGhhdmUgdGhlIGhpZ2hlci1vcmRlciB1bml0c1xuICBpZiAoIWlzVW5kZWZpbmVkKG9iai55ZWFyKSkge1xuICAgIGZvciAoY29uc3QgdSBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmIChpc1VuZGVmaW5lZChvYmpbdV0pKSB7XG4gICAgICAgIG9ialt1XSA9IGRlZmF1bHRVbml0VmFsdWVzW3VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHx8IGhhc0ludmFsaWRUaW1lRGF0YShvYmopO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRQcm92aXMgPSB6b25lLm9mZnNldCh0c05vdyk7XG4gICAgW3RzLCBvXSA9IG9ialRvVFMob2JqLCBvZmZzZXRQcm92aXMsIHpvbmUpO1xuICB9IGVsc2Uge1xuICAgIHRzID0gdHNOb3c7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGVUaW1lKHsgdHMsIHpvbmUsIGxvYywgbyB9KTtcbn1cblxuZnVuY3Rpb24gZGlmZlJlbGF0aXZlKHN0YXJ0LCBlbmQsIG9wdHMpIHtcbiAgY29uc3Qgcm91bmQgPSBpc1VuZGVmaW5lZChvcHRzLnJvdW5kKSA/IHRydWUgOiBvcHRzLnJvdW5kLFxuICAgIGZvcm1hdCA9IChjLCB1bml0KSA9PiB7XG4gICAgICBjID0gcm91bmRUbyhjLCByb3VuZCB8fCBvcHRzLmNhbGVuZGFyeSA/IDAgOiAyLCB0cnVlKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IGVuZC5sb2MuY2xvbmUob3B0cykucmVsRm9ybWF0dGVyKG9wdHMpO1xuICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYywgdW5pdCk7XG4gICAgfSxcbiAgICBkaWZmZXIgPSAodW5pdCkgPT4ge1xuICAgICAgaWYgKG9wdHMuY2FsZW5kYXJ5KSB7XG4gICAgICAgIGlmICghZW5kLmhhc1NhbWUoc3RhcnQsIHVuaXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGVuZC5zdGFydE9mKHVuaXQpLmRpZmYoc3RhcnQuc3RhcnRPZih1bml0KSwgdW5pdCkuZ2V0KHVuaXQpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGlmIChvcHRzLnVuaXQpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRpZmZlcihvcHRzLnVuaXQpLCBvcHRzLnVuaXQpO1xuICB9XG5cbiAgZm9yIChjb25zdCB1bml0IG9mIG9wdHMudW5pdHMpIHtcbiAgICBjb25zdCBjb3VudCA9IGRpZmZlcih1bml0KTtcbiAgICBpZiAoTWF0aC5hYnMoY291bnQpID49IDEpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHN0YXJ0ID4gZW5kID8gLTAgOiAwLCBvcHRzLnVuaXRzW29wdHMudW5pdHMubGVuZ3RoIC0gMV0pO1xufVxuXG5mdW5jdGlvbiBsYXN0T3B0cyhhcmdMaXN0KSB7XG4gIGxldCBvcHRzID0ge30sXG4gICAgYXJncztcbiAgaWYgKGFyZ0xpc3QubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgb3B0cyA9IGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXTtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KS5zbGljZSgwLCBhcmdMaXN0Lmxlbmd0aCAtIDEpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpO1xuICB9XG4gIHJldHVybiBbb3B0cywgYXJnc107XG59XG5cbi8qKlxuICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOlxuICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC5cbiAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLlxuICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOlxuICpcbiAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBEYXRlVGltZS5sb2NhbH0sIHtAbGluayBEYXRlVGltZS51dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBEYXRlVGltZS5mcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tSVNPfSwge0BsaW5rIERhdGVUaW1lLmZyb21IVFRQfSwgYW5kIHtAbGluayBEYXRlVGltZS5mcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lLmZyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tSlNEYXRlfS5cbiAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayBEYXRlVGltZSN5ZWFyfSwge0BsaW5rIERhdGVUaW1lI21vbnRofSxcbiAqIHtAbGluayBEYXRlVGltZSNkYXl9LCB7QGxpbmsgRGF0ZVRpbWUjaG91cn0sIHtAbGluayBEYXRlVGltZSNtaW51dGV9LCB7QGxpbmsgRGF0ZVRpbWUjc2Vjb25kfSwge0BsaW5rIERhdGVUaW1lI21pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuXG4gKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjd2Vla1llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjd2Vla2RheX0gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBEYXRlVGltZSNsb2NhbGV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBEYXRlVGltZSNzZXR9LCB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0sIHtAbGluayBEYXRlVGltZSNzZXRMb2NhbGV9LCB7QGxpbmsgRGF0ZVRpbWUucGx1c30sIHtAbGluayBEYXRlVGltZSNtaW51c30sIHtAbGluayBEYXRlVGltZSNlbmRPZn0sIHtAbGluayBEYXRlVGltZSNzdGFydE9mfSwge0BsaW5rIERhdGVUaW1lI3RvVVRDfSwgYW5kIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfS5cbiAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlfSwge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmVDYWxlbmRhcn0sIHtAbGluayBEYXRlVGltZSN0b0pTT059LCB7QGxpbmsgRGF0ZVRpbWUjdG9JU099LCB7QGxpbmsgRGF0ZVRpbWUjdG9IVFRQfSwge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSwge0BsaW5rIERhdGVUaW1lI3RvUkZDMjgyMn0sIHtAbGluayBEYXRlVGltZSN0b1N0cmluZ30sIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30sIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0sIHtAbGluayBEYXRlVGltZSN0b01pbGxpc30gYW5kIHtAbGluayBEYXRlVGltZSN0b0pTRGF0ZX0uXG4gKlxuICogVGhlcmUncyBwbGVudHkgb3RoZXJzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uLCB0aW1lIHpvbmVzLCBhbHRlcm5hdGl2ZSBjYWxlbmRhcnMsIHZhbGlkaXR5LCBhbmQgc28gb24sIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWUge1xuICAvKipcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25zdCB6b25lID0gY29uZmlnLnpvbmUgfHwgU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG5cbiAgICBsZXQgaW52YWxpZCA9XG4gICAgICBjb25maWcuaW52YWxpZCB8fFxuICAgICAgKE51bWJlci5pc05hTihjb25maWcudHMpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbCkgfHxcbiAgICAgICghem9uZS5pc1ZhbGlkID8gdW5zdXBwb3J0ZWRab25lKHpvbmUpIDogbnVsbCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50cyA9IGlzVW5kZWZpbmVkKGNvbmZpZy50cykgPyBTZXR0aW5ncy5ub3coKSA6IGNvbmZpZy50cztcblxuICAgIGxldCBjID0gbnVsbCxcbiAgICAgIG8gPSBudWxsO1xuICAgIGlmICghaW52YWxpZCkge1xuICAgICAgY29uc3QgdW5jaGFuZ2VkID0gY29uZmlnLm9sZCAmJiBjb25maWcub2xkLnRzID09PSB0aGlzLnRzICYmIGNvbmZpZy5vbGQuem9uZS5lcXVhbHMoem9uZSk7XG5cbiAgICAgIGlmICh1bmNoYW5nZWQpIHtcbiAgICAgICAgW2MsIG9dID0gW2NvbmZpZy5vbGQuYywgY29uZmlnLm9sZC5vXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG90ID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGMgPSB0c1RvT2JqKHRoaXMudHMsIG90KTtcbiAgICAgICAgaW52YWxpZCA9IE51bWJlci5pc05hTihjLnllYXIpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbDtcbiAgICAgICAgYyA9IGludmFsaWQgPyBudWxsIDogYztcbiAgICAgICAgbyA9IGludmFsaWQgPyBudWxsIDogb3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fem9uZSA9IHpvbmU7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBpbnZhbGlkO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMud2Vla0RhdGEgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuYyA9IGM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5vID0gbztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EYXRlVGltZSA9IHRydWU7XG4gIH1cblxuICAvLyBDT05TVFJVQ1RcblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZm9yIHRoZSBjdXJyZW50IGluc3RhbnQsIGluIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUuXG4gICAqXG4gICAqIFVzZSBTZXR0aW5ncyB0byBvdmVycmlkZSB0aGVzZSBkZWZhdWx0IHZhbHVlcyBpZiBuZWVkZWQuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy9+PiBub3cgaW4gdGhlIElTTyBmb3JtYXRcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe30pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxvY2FsIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYGxvY2FsKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCh7IHpvbmU6IFwiQW1lcmljYS9OZXdfWW9ya1wiIH0pICAgICAgLy9+PiBub3csIGluIFVTIGVhc3QgY29hc3QgdGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgeyBsb2NhbGU6IFwiZnJcIiB9KSAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwLCB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgeyB6b25lOiBcInV0Y1wiIH0pICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwLCBpbiBVVENcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGxvY2FsKCkge1xuICAgIGNvbnN0IFtvcHRzLCBhcmdzXSA9IGxhc3RPcHRzKGFyZ3VtZW50cyksXG4gICAgICBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXSA9IGFyZ3M7XG4gICAgcmV0dXJuIHF1aWNrRFQoeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgaW4gVVRDXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYHV0YygpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1WiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyB1dGMoKSB7XG4gICAgY29uc3QgW29wdHMsIGFyZ3NdID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgIFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdID0gYXJncztcblxuICAgIG9wdHMuem9uZSA9IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtcbiAgICByZXR1cm4gcXVpY2tEVCh7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdC4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0cyA9IGlzRGF0ZShkYXRlKSA/IGRhdGUudmFsdWVPZigpIDogTmFOO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odHMpKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcImludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICB0czogdHMsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgLSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbU1pbGxpcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNOdW1iZXIobWlsbGlzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgZnJvbU1pbGxpcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dCwgYnV0IHJlY2VpdmVkIGEgJHt0eXBlb2YgbWlsbGlzZWNvbmRzfSB3aXRoIHZhbHVlICR7bWlsbGlzZWNvbmRzfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAtTUFYX0RBVEUgfHwgbWlsbGlzZWNvbmRzID4gTUFYX0RBVEUpIHtcbiAgICAgIC8vIHRoaXMgaXNuJ3QgcGVyZmVjdCBiZWNhdXNlIGJlY2F1c2Ugd2UgY2FuIHN0aWxsIGVuZCB1cCBvdXQgb2YgcmFuZ2UgYmVjYXVzZSBvZiBhZGRpdGlvbmFsIHNoaWZ0aW5nLCBidXQgaXQncyBhIHN0YXJ0XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcIlRpbWVzdGFtcCBvdXQgb2YgcmFuZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogbWlsbGlzZWNvbmRzLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVNlY29uZHMoc2Vjb25kcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFpc051bWJlcihzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbVNlY29uZHMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogc2Vjb25kcyAqIDEwMDAsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFyJyBhbmQgJ2hvdXInIHdpdGggcmVhc29uYWJsZSBkZWZhdWx0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhciAtIGEgeWVhciwgc3VjaCBhcyAxOTg3XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGggLSBhIG1vbnRoLCAxLTEyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5IC0gYSBkYXkgb2YgdGhlIG1vbnRoLCAxLTMxLCBkZXBlbmRpbmcgb24gdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoub3JkaW5hbCAtIGRheSBvZiB0aGUgeWVhciwgMS0zNjUgb3IgMzY2XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla1llYXIgLSBhbiBJU08gd2VlayB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla051bWJlciAtIGFuIElTTyB3ZWVrIG51bWJlciwgYmV0d2VlbiAxIGFuZCA1MiBvciA1MywgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla2RheSAtIGFuIElTTyB3ZWVrZGF5LCAxLTcsIHdoZXJlIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXIgLSBob3VyIG9mIHRoZSBkYXksIDAtMjNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGUgLSBtaW51dGUgb2YgdGhlIGhvdXIsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmQgLSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kIC0gbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgMC05OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyLCBtb250aDogNSwgZGF5OiAyNX0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0pIC8vfj4gdG9kYXkgYXQgMTA6MjY6MDZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAndXRjJyB9KSxcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnbG9jYWwnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB3ZWVrWWVhcjogMjAxNiwgd2Vla051bWJlcjogMiwgd2Vla2RheTogMyB9KS50b0lTT0RhdGUoKSAvLz0+ICcyMDE2LTAxLTEzJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaiwgb3B0cyA9IHt9KSB7XG4gICAgb2JqID0gb2JqIHx8IHt9O1xuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0cy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHRzTm93ID0gU2V0dGluZ3Mubm93KCksXG4gICAgICBvZmZzZXRQcm92aXMgPSAhaXNVbmRlZmluZWQob3B0cy5zcGVjaWZpY09mZnNldClcbiAgICAgICAgPyBvcHRzLnNwZWNpZmljT2Zmc2V0XG4gICAgICAgIDogem9uZVRvVXNlLm9mZnNldCh0c05vdyksXG4gICAgICBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplVW5pdCksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyLFxuICAgICAgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob3B0cyk7XG5cbiAgICAvLyBjYXNlczpcbiAgICAvLyBqdXN0IGEgd2Vla2RheSAtPiB0aGlzIHdlZWsncyBpbnN0YW5jZSBvZiB0aGF0IHdlZWtkYXksIG5vIHdvcnJpZXNcbiAgICAvLyAoZ3JlZ29yaWFuIGRhdGEgb3Igb3JkaW5hbCkgKyAod2Vla1llYXIgb3Igd2Vla051bWJlcikgLT4gZXJyb3JcbiAgICAvLyAoZ3JlZ29yaWFuIG1vbnRoIG9yIGRheSkgKyBvcmRpbmFsIC0+IGVycm9yXG4gICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXNlIHdlZWtzIG9yIG9yZGluYWxzIG9yIGdyZWdvcmlhbiwgZGVwZW5kaW5nIG9uIHdoYXQncyBzcGVjaWZpZWRcblxuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcbiAgICAgICAgXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VXZWVrRGF0YSA9IGRlZmluaXRlV2Vla0RlZiB8fCAobm9ybWFsaXplZC53ZWVrZGF5ICYmICFjb250YWluc0dyZWdvcik7XG5cbiAgICAvLyBjb25maWd1cmUgb3Vyc2VsdmVzIHRvIGRlYWwgd2l0aCBncmVnb3JpYW4gZGF0ZXMgb3Igd2VlayBzdHVmZlxuICAgIGxldCB1bml0cyxcbiAgICAgIGRlZmF1bHRWYWx1ZXMsXG4gICAgICBvYmpOb3cgPSB0c1RvT2JqKHRzTm93LCBvZmZzZXRQcm92aXMpO1xuICAgIGlmICh1c2VXZWVrRGF0YSkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkV2Vla1VuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRXZWVrVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvV2VlayhvYmpOb3cpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRPcmRpbmFsVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9PcmRpbmFsKG9iak5vdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRVbml0VmFsdWVzO1xuICAgIH1cblxuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBmb3IgbWlzc2luZyBzdHVmZlxuICAgIGxldCBmb3VuZEZpcnN0ID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XG4gICAgICBjb25zdCB2ID0gbm9ybWFsaXplZFt1XTtcbiAgICAgIGlmICghaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kRmlyc3QpIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IGRlZmF1bHRWYWx1ZXNbdV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gb2JqTm93W3VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIHdlIGhhdmUgYXJlIGluIHJhbmdlXG4gICAgY29uc3QgaGlnaGVyT3JkZXJJbnZhbGlkID0gdXNlV2Vla0RhdGFcbiAgICAgICAgPyBoYXNJbnZhbGlkV2Vla0RhdGEobm9ybWFsaXplZClcbiAgICAgICAgOiBjb250YWluc09yZGluYWxcbiAgICAgICAgPyBoYXNJbnZhbGlkT3JkaW5hbERhdGEobm9ybWFsaXplZClcbiAgICAgICAgOiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShub3JtYWxpemVkKSxcbiAgICAgIGludmFsaWQgPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpO1xuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH1cblxuICAgIC8vIGNvbXB1dGUgdGhlIGFjdHVhbCB0aW1lXG4gICAgY29uc3QgZ3JlZ29yaWFuID0gdXNlV2Vla0RhdGFcbiAgICAgICAgPyB3ZWVrVG9HcmVnb3JpYW4obm9ybWFsaXplZClcbiAgICAgICAgOiBjb250YWluc09yZGluYWxcbiAgICAgICAgPyBvcmRpbmFsVG9HcmVnb3JpYW4obm9ybWFsaXplZClcbiAgICAgICAgOiBub3JtYWxpemVkLFxuICAgICAgW3RzRmluYWwsIG9mZnNldEZpbmFsXSA9IG9ialRvVFMoZ3JlZ29yaWFuLCBvZmZzZXRQcm92aXMsIHpvbmVUb1VzZSksXG4gICAgICBpbnN0ID0gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHRzRmluYWwsXG4gICAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgICAgbzogb2Zmc2V0RmluYWwsXG4gICAgICAgIGxvYyxcbiAgICAgIH0pO1xuXG4gICAgLy8gZ3JlZ29yaWFuIGRhdGEgKyB3ZWVrZGF5IHNlcnZlcyBvbmx5IHRvIHZhbGlkYXRlXG4gICAgaWYgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiBjb250YWluc0dyZWdvciAmJiBvYmoud2Vla2RheSAhPT0gaW5zdC53ZWVrZGF5KSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcbiAgICAgICAgXCJtaXNtYXRjaGVkIHdlZWtkYXlcIixcbiAgICAgICAgYHlvdSBjYW4ndCBzcGVjaWZ5IGJvdGggYSB3ZWVrZGF5IG9mICR7bm9ybWFsaXplZC53ZWVrZGF5fSBhbmQgYSBkYXRlIG9mICR7aW5zdC50b0lTTygpfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcsIHtzZXRab25lOiB0cnVlfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnLCB7em9uZTogJ3V0Yyd9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LVcwNS00JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUlTT0RhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJJU08gODYwMVwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSB0aGUgb2Zmc2V0IGlzIGFsd2F5cyBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMzoxMiBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignRnJpLCAyNSBOb3YgMjAxNiAxMzoyMzoxMiArMDYwMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMyBaJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJGQzI4MjIodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VSRkMyODIyRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlJGQyAyODIyXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgSFRUUCBkYXRlcyBhcmUgYWx3YXlzIGluIFVUQywgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggdGhlIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nLiBGb3IgSFRUUCBkYXRlcywgdGhpcyBpcyBhbHdheXMgVVRDLCBzbyB0aGlzIG9wdGlvbiBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGB6b25lYCBvcHRpb24gdG8gJ3V0YycsIGJ1dCB0aGlzIG9wdGlvbiBpcyBpbmNsdWRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBzaW1pbGFyIG1ldGhvZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4sIDA2IE5vdiAxOTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW5kYXksIDA2LU5vdi05NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuIE5vdiAgNiAwODo0OTozNyAxOTk0JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUhUVFAodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VIVFRQRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIkhUVFBcIiwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBpbnB1dCBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmcuXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvcGFyc2luZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIHRoZSBsaW5rIGJlbG93IGZvciB0aGUgZm9ybWF0cylcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh0ZXh0KSB8fCBpc1VuZGVmaW5lZChmbXQpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tRm9ybWF0IHJlcXVpcmVzIGFuIGlucHV0IHN0cmluZyBhbmQgYSBmb3JtYXRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRzLFxuICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgZGVmYXVsdFRvRU46IHRydWUsXG4gICAgICB9KSxcbiAgICAgIFt2YWxzLCBwYXJzZWRab25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZF0gPSBwYXJzZUZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBgZm9ybWF0ICR7Zm10fWAsIHRleHQsIHNwZWNpZmljT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXQgaW5zdGVhZFxuICAgKi9cbiAgc3RhdGljIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBTUUwgZGF0ZSwgdGltZSwgb3IgZGF0ZXRpbWVcbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycsIHsgc2V0Wm9uZTogdHJ1ZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicsIHsgem9uZTogJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzA5OjEyOjM0LjM0MicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21TUUwodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VTUUwodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJTUUxcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIERhdGVUaW1lIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEYXRlVGltZShvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkRhdGVUaW1lKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIHRoZSBmb3JtYXQgc3RyaW5nIGZvciBhIHNldCBvZiBvcHRpb25zXG4gICAqIEBwYXJhbSBmb3JtYXRPcHRzXG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VGb3JtYXRGb3JPcHRzKGZvcm1hdE9wdHMsIGxvY2FsZU9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHRva2VuTGlzdCA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuICF0b2tlbkxpc3QgPyBudWxsIDogdG9rZW5MaXN0Lm1hcCgodCkgPT4gKHQgPyB0LnZhbCA6IG51bGwpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgdGhlIHRoZSBmdWxseSBleHBhbmRlZCBmb3JtYXQgdG9rZW4gZm9yIHRoZSBsb2NhbGVcbiAgICogRG9lcyBOT1QgcXVvdGUgY2hhcmFjdGVycywgc28gcXVvdGVkIHRva2VucyB3aWxsIG5vdCByb3VuZCB0cmlwIGNvcnJlY3RseVxuICAgKiBAcGFyYW0gZm10XG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZXhwYW5kRm9ybWF0KGZtdCwgbG9jYWxlT3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgTG9jYWxlLmZyb21PYmplY3QobG9jYWxlT3B0cykpO1xuICAgIHJldHVybiBleHBhbmRlZC5tYXAoKHQpID0+IHQudmFsKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgLy8gSU5GT1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdtb250aCcpOyAvLz0+IDdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdkYXknKTsgLy89PiA0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyB2YWxpZC4gSW52YWxpZCBEYXRlVGltZXMgb2NjdXIgd2hlbjpcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgZnJvbSBpbnZhbGlkIGNhbGVuZGFyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSAxM3RoIG1vbnRoIG9yIEZlYnJ1YXJ5IDMwXG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGJ5IGFuIG9wZXJhdGlvbiBvbiBhbm90aGVyIGludmFsaWQgZGF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIERhdGVUaW1lIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxvY2FsZSBvZiBhIERhdGVUaW1lLCBzdWNoICdlbi1HQicuIFRoZSBsb2NhbGUgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIERhdGVUaW1lLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG91dHB1dENhbGVuZGFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0aW1lIHpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEB0eXBlIHtab25lfVxuICAgKi9cbiAgZ2V0IHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSB0aW1lIHpvbmUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgem9uZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5uYW1lIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnllYXIgLy89PiAyMDE3XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHF1YXJ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm1vbnRoIC8vPT4gNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1vbnRoKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubW9udGggOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoICgxLTMwaXNoKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLmRheSAvLz0+IDI1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91ciBvZiB0aGUgZGF5ICgwLTIzKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzApLm1pbnV0ZSAvLz0+IDMwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWludXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWludXRlIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyKS5zZWNvbmQgLy89PiA1MlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQgKDAtOTk5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbGxpc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrIHllYXJcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDEyLCAzMSkud2Vla1llYXIgLy89PiAyMDE1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrIG51bWJlciBvZiB0aGUgd2VlayB5ZWFyICgxLTUyaXNoKS5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS53ZWVrTnVtYmVyIC8vPT4gMjFcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtOdW1iZXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsuXG4gICAqIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrZGF5IC8vPT4gNFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla2RheSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9yZGluYWwgKG1lYW5pbmcgdGhlIGRheSBvZiB0aGUgeWVhcilcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm9yZGluYWwgLy89PiAxNDVcbiAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cbiAgICovXG4gIGdldCBvcmRpbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0Jy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhTaG9ydCAvLz0+IE9jdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1vbnRoU2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKFwic2hvcnRcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aExvbmcgLy89PiBPY3RvYmVyXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9udGhMb25nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcImxvbmdcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCB3ZWVrZGF5LCBzdWNoIGFzICdNb24nLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB3ZWVrZGF5U2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJzaG9ydFwiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyB3ZWVrZGF5LCBzdWNoIGFzICdNb25kYXknLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5TG9uZyAvLz0+IE1vbmRheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXlMb25nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKFwibG9uZ1wiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkub2Zmc2V0IC8vPT4gLTI0MFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvZmZzZXROYW1lU2hvcnQoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9uZyBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVhc3Rlcm4gU3RhbmRhcmQgVGltZVwiIG9yIFwiRWFzdGVybiBEYXlsaWdodCBUaW1lXCIuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG9mZnNldE5hbWVMb25nKCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoaXMgem9uZSdzIG9mZnNldCBldmVyIGNoYW5nZXMsIGFzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc09mZnNldEZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUuaXNVbml2ZXJzYWwgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNJbkRTVCgpIHtcbiAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogMSwgZGF5OiAxIH0pLm9mZnNldCB8fFxuICAgICAgICB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDUgfSkub2Zmc2V0XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhvc2UgRGF0ZVRpbWVzIHdoaWNoIGhhdmUgdGhlIHNhbWUgbG9jYWwgdGltZSBhcyB0aGlzIERhdGVUaW1lLCBidXQgYSBkaWZmZXJlbnQgb2Zmc2V0IGZyb20gVVRDXG4gICAqIGluIHRoaXMgRGF0ZVRpbWUncyB6b25lLiBEdXJpbmcgRFNUIGNoYW5nZXMgbG9jYWwgdGltZSBjYW4gYmUgYW1iaWd1b3VzLCBmb3IgZXhhbXBsZVxuICAgKiBgMjAyMy0xMC0yOVQwMjozMDowMGAgaW4gYEV1cm9wZS9CZXJsaW5gIGNhbiBoYXZlIG9mZnNldCBgKzAxOjAwYCBvciBgKzAyOjAwYC5cbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYm90aCBwb3NzaWJsZSBEYXRlVGltZXMgaWYgdGhpcyBEYXRlVGltZSdzIGxvY2FsIHRpbWUgaXMgYW1iaWd1b3VzLlxuICAgKiBAcmV0dXJucyB7RGF0ZVRpbWVbXX1cbiAgICovXG4gIGdldFBvc3NpYmxlT2Zmc2V0cygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCB0aGlzLmlzT2Zmc2V0Rml4ZWQpIHtcbiAgICAgIHJldHVybiBbdGhpc107XG4gICAgfVxuICAgIGNvbnN0IGRheU1zID0gODY0MDAwMDA7XG4gICAgY29uc3QgbWludXRlTXMgPSA2MDAwMDtcbiAgICBjb25zdCBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKHRoaXMuYyk7XG4gICAgY29uc3Qgb0VhcmxpZXIgPSB0aGlzLnpvbmUub2Zmc2V0KGxvY2FsVFMgLSBkYXlNcyk7XG4gICAgY29uc3Qgb0xhdGVyID0gdGhpcy56b25lLm9mZnNldChsb2NhbFRTICsgZGF5TXMpO1xuXG4gICAgY29uc3QgbzEgPSB0aGlzLnpvbmUub2Zmc2V0KGxvY2FsVFMgLSBvRWFybGllciAqIG1pbnV0ZU1zKTtcbiAgICBjb25zdCBvMiA9IHRoaXMuem9uZS5vZmZzZXQobG9jYWxUUyAtIG9MYXRlciAqIG1pbnV0ZU1zKTtcbiAgICBpZiAobzEgPT09IG8yKSB7XG4gICAgICByZXR1cm4gW3RoaXNdO1xuICAgIH1cbiAgICBjb25zdCB0czEgPSBsb2NhbFRTIC0gbzEgKiBtaW51dGVNcztcbiAgICBjb25zdCB0czIgPSBsb2NhbFRTIC0gbzIgKiBtaW51dGVNcztcbiAgICBjb25zdCBjMSA9IHRzVG9PYmoodHMxLCBvMSk7XG4gICAgY29uc3QgYzIgPSB0c1RvT2JqKHRzMiwgbzIpO1xuICAgIGlmIChcbiAgICAgIGMxLmhvdXIgPT09IGMyLmhvdXIgJiZcbiAgICAgIGMxLm1pbnV0ZSA9PT0gYzIubWludXRlICYmXG4gICAgICBjMS5zZWNvbmQgPT09IGMyLnNlY29uZCAmJlxuICAgICAgYzEubWlsbGlzZWNvbmQgPT09IGMyLm1pbGxpc2Vjb25kXG4gICAgKSB7XG4gICAgICByZXR1cm4gW2Nsb25lKHRoaXMsIHsgdHM6IHRzMSB9KSwgY2xvbmUodGhpcywgeyB0czogdHMyIH0pXTtcbiAgICB9XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuaXNJbkxlYXBZZWFyIC8vPT4gZmFsc2VcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNJbkxlYXBZZWFyKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIG1vbnRoXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDIpLmRheXNJbk1vbnRoIC8vPT4gMjlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXNJbk1vbnRoKCkge1xuICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmRheXNJblllYXIgLy89PiAzNjZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuZGF5c0luWWVhciAvLz0+IDM2NVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXNJblllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMDQpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla3NJbldlZWtZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgSW50bCBvcHRpb25zIGZvciB0aGlzIERhdGVUaW1lLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiB1bmRlcnN0YW5kaW5nIHRoZSBiZWhhdmlvciBvZiBmb3JtYXR0aW5nIG1ldGhvZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSB0aGUgc2FtZSBvcHRpb25zIGFzIHRvTG9jYWxlU3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHJlc29sdmVkTG9jYWxlT3B0aW9ucyhvcHRzID0ge30pIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gRm9ybWF0dGVyLmNyZWF0ZShcbiAgICAgIHRoaXMubG9jLmNsb25lKG9wdHMpLFxuICAgICAgb3B0c1xuICAgICkucmVzb2x2ZWRPcHRpb25zKHRoaXMpO1xuICAgIHJldHVybiB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcjogY2FsZW5kYXIgfTtcbiAgfVxuXG4gIC8vIFRSQU5TRk9STVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gVVRDLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8ge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9KCd1dGMnKVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldD0wXSAtIG9wdGlvbmFsbHksIGFuIG9mZnNldCBmcm9tIFVUQyBpbiBtaW51dGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV0gLSBvcHRpb25zIHRvIHBhc3MgdG8gYHNldFpvbmUoKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICB0b1VUQyhvZmZzZXQgPSAwLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgdG9Mb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gc3BlY2lmaWVkIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHNldHRlciBrZWVwcyB0aGUgdW5kZXJseWluZyB0aW1lIHRoZSBzYW1lIChhcyBpbiwgdGhlIHNhbWUgdGltZXN0YW1wKSwgYnV0IHRoZSBuZXcgaW5zdGFuY2Ugd2lsbCByZXBvcnQgZGlmZmVyZW50IGxvY2FsIHRpbWVzIGFuZCBjb25zaWRlciBEU1RzIHdoZW4gbWFraW5nIGNvbXB1dGF0aW9ucywgYXMgd2l0aCB7QGxpbmsgRGF0ZVRpbWUjcGx1c30uIFlvdSBtYXkgd2lzaCB0byB1c2Uge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9IHdoaWNoIHByb3ZpZGUgc2ltcGxlIGNvbnZlbmllbmNlIHdyYXBwZXJzIGZvciBjb21tb25seSB1c2VkIHpvbmVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIGEgem9uZSBpZGVudGlmaWVyLiBBcyBhIHN0cmluZywgdGhhdCBjYW4gYmUgYW55IElBTkEgem9uZSBzdXBwb3J0ZWQgYnkgdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZml4ZWQtb2Zmc2V0IG5hbWUgb2YgdGhlIGZvcm0gJ1VUQyszJywgb3IgdGhlIHN0cmluZ3MgJ2xvY2FsJyBvciAndXRjJy4gWW91IG1heSBhbHNvIHN1cHBseSBhbiBpbnN0YW5jZSBvZiBhIHtAbGluayBEYXRlVGltZSNab25lfSBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMua2VlcExvY2FsVGltZT1mYWxzZV0gLSBJZiB0cnVlLCBhZGp1c3QgdGhlIHVuZGVybHlpbmcgdGltZSBzbyB0aGF0IHRoZSBsb2NhbCB0aW1lIHN0YXlzIHRoZSBzYW1lLCBidXQgaW4gdGhlIHRhcmdldCB6b25lLiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRoaXMuXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0Wm9uZSh6b25lLCB7IGtlZXBMb2NhbFRpbWUgPSBmYWxzZSwga2VlcENhbGVuZGFyVGltZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHpvbmUgPSBub3JtYWxpemVab25lKHpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoem9uZS5lcXVhbHModGhpcy56b25lKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmICghem9uZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VFMgPSB0aGlzLnRzO1xuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xuICAgICAgICBjb25zdCBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjb25zdCBhc09iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgW25ld1RTXSA9IG9ialRvVFMoYXNPYmosIG9mZnNldEd1ZXNzLCB6b25lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzOiBuZXdUUywgem9uZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG9yIG91dHB1dENhbGVuZGFyLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHJlY29uZmlndXJlKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xuICAgIGNvbnN0IGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IGxvYyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogSnVzdCBhIGNvbnZlbmllbnQgYWxpYXMgZm9yIHJlY29uZmlndXJlKHsgbG9jYWxlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5zZXRMb2NhbGUoJ2VuLUdCJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoeyBsb2NhbGUgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBEYXRlVGltZSNzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgbm9ybWFsaXplVW5pdCksXG4gICAgICBzZXR0aW5nV2Vla1N0dWZmID1cbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla1llYXIpIHx8XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtOdW1iZXIpIHx8XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtkYXkpLFxuICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcjtcblxuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcbiAgICAgICAgXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcbiAgICB9XG5cbiAgICBsZXQgbWl4ZWQ7XG4gICAgaWYgKHNldHRpbmdXZWVrU3R1ZmYpIHtcbiAgICAgIG1peGVkID0gd2Vla1RvR3JlZ29yaWFuKHsgLi4uZ3JlZ29yaWFuVG9XZWVrKHRoaXMuYyksIC4uLm5vcm1hbGl6ZWQgfSk7XG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSkge1xuICAgICAgbWl4ZWQgPSBvcmRpbmFsVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWl4ZWQgPSB7IC4uLnRoaXMudG9PYmplY3QoKSwgLi4ubm9ybWFsaXplZCB9O1xuXG4gICAgICAvLyBpZiB3ZSBkaWRuJ3Qgc2V0IHRoZSBkYXkgYnV0IHdlIGVuZGVkIHVwIG9uIGFuIG92ZXJmbG93IGRhdGUsXG4gICAgICAvLyB1c2UgdGhlIGxhc3QgZGF5IG9mIHRoZSByaWdodCBtb250aFxuICAgICAgaWYgKGlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSkge1xuICAgICAgICBtaXhlZC5kYXkgPSBNYXRoLm1pbihkYXlzSW5Nb250aChtaXhlZC55ZWFyLCBtaXhlZC5tb250aCksIG1peGVkLmRheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW3RzLCBvXSA9IG9ialRvVFMobWl4ZWQsIHRoaXMubywgdGhpcy56b25lKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB0cywgbyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKlxuICAgKiBBZGRpbmcgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG9yIG1pbGxpc2Vjb25kcyBpbmNyZWFzZXMgdGhlIHRpbWVzdGFtcCBieSB0aGUgcmlnaHQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy4gQWRkaW5nIGRheXMsIG1vbnRocywgb3IgeWVhcnMgc2hpZnRzIHRoZSBjYWxlbmRhciwgYWNjb3VudGluZyBmb3IgRFNUcyBhbmQgbGVhcCB5ZWFycyBhbG9uZyB0aGUgd2F5LiBUaHVzLCBgZHQucGx1cyh7IGhvdXJzOiAyNCB9KWAgbWF5IHJlc3VsdCBpbiBhIGRpZmZlcmVudCB0aW1lIHRoYW4gYGR0LnBsdXMoeyBkYXlzOiAxIH0pYCBpZiB0aGVyZSdzIGEgRFNUIHNoaWZ0IGluIGJldHdlZW4uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cygxMjMpIC8vfj4gaW4gMTIzIG1pbGxpc2Vjb25kc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgbWludXRlczogMTUgfSkgLy9+PiBpbiAxNSBtaW51dGVzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pIC8vfj4gdGhpcyB0aW1lIHRvbW9ycm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAtMSB9KSAvL34+IHRoaXMgdGltZSB5ZXN0ZXJkYXlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMywgbWludXRlczogMTMgfSkpIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgcGx1cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c31cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIG1pbnVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLm5lZ2F0ZSgpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgYmVnaW5uaW5nIG9mIGEgdW5pdCBvZiB0aW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBiZWdpbm5pbmcgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ21vbnRoJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3llYXInKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMS0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignd2VlaycpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAzJywgd2Vla3MgYWx3YXlzIHN0YXJ0IG9uIE1vbmRheXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2RheScpLnRvSVNPVGltZSgpOyAvLz0+ICcwMDowMC4wMDAtMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdob3VyJykudG9JU09UaW1lKCk7IC8vPT4gJzA1OjAwOjAwLjAwMC0wNTowMCdcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGFydE9mKHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgbyA9IHt9LFxuICAgICAgbm9ybWFsaXplZFVuaXQgPSBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpO1xuICAgIHN3aXRjaCAobm9ybWFsaXplZFVuaXQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyc1wiOlxuICAgICAgICBvLm1vbnRoID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJxdWFydGVyc1wiOlxuICAgICAgY2FzZSBcIm1vbnRoc1wiOlxuICAgICAgICBvLmRheSA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwid2Vla3NcIjpcbiAgICAgIGNhc2UgXCJkYXlzXCI6XG4gICAgICAgIG8uaG91ciA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwiaG91cnNcIjpcbiAgICAgICAgby5taW51dGUgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcIm1pbnV0ZXNcIjpcbiAgICAgICAgby5zZWNvbmQgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInNlY29uZHNcIjpcbiAgICAgICAgby5taWxsaXNlY29uZCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pbGxpc2Vjb25kc1wiOlxuICAgICAgICBicmVhaztcbiAgICAgIC8vIG5vIGRlZmF1bHQsIGludmFsaWQgdW5pdHMgdGhyb3cgaW4gbm9ybWFsaXplVW5pdCgpXG4gICAgfVxuXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSBcIndlZWtzXCIpIHtcbiAgICAgIG8ud2Vla2RheSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSBcInF1YXJ0ZXJzXCIpIHtcbiAgICAgIGNvbnN0IHEgPSBNYXRoLmNlaWwodGhpcy5tb250aCAvIDMpO1xuICAgICAgby5tb250aCA9IChxIC0gMSkgKiAzICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXQobyk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBlbmQgKG1lYW5pbmcgdGhlIGxhc3QgbWlsbGlzZWNvbmQpIG9mIGEgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGVuZCBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ21vbnRoJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd5ZWFyJykudG9JU08oKTsgLy89PiAnMjAxNC0xMi0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd3ZWVrJykudG9JU08oKTsgLy8gPT4gJzIwMTQtMDMtMDlUMjM6NTk6NTkuOTk5LTA1OjAwJywgd2Vla3Mgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2RheScpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2hvdXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDA1OjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBlbmRPZih1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyB0aGlzLnBsdXMoeyBbdW5pdF06IDEgfSlcbiAgICAgICAgICAuc3RhcnRPZih1bml0KVxuICAgICAgICAgIC5taW51cygxKVxuICAgICAgOiB0aGlzO1xuICB9XG5cbiAgLy8gT1VUUFVUXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZSBmb3JtYXR0aW5nIHRvb2wuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL2Zvcm1hdHRpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IEFwciAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJywgeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KFwiSEggJ2hvdXJzIGFuZCcgbW0gJ21pbnV0ZXMnXCIpIC8vPT4gJzIwIGhvdXJzIGFuZCA1NSBtaW51dGVzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKG9wdHMpKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcywgZm10KVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhbGl6ZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGlzIGRhdGUuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGUgSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhcyBgRGF0ZVRpbWUuREFURV9GVUxMYCBvciBgRGF0ZVRpbWUuVElNRV9TSU1QTEVgLlxuICAgKiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2QgaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb25cbiAgICogb2YgdGhlIERhdGVUaW1lIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSBmb3JtYXRPcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zIGFuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDQvMjAvMjAxN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2VuLWdiJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAnMjAvMDQvMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiAnQXByaWwgMjAsIDIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCwgeyBsb2NhbGU6ICdmcicgfSk7IC8vPT4gJzI4IGFvw7t0IDIwMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsgLy89PiAnNC8yMC8yMDE3LCAxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHVyc2RheSwgQXByaWwgMjAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHUsIEFwciAyMCwgMTE6MjcgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JywgaG91ckN5Y2xlOiAnaDIzJyB9KTsgLy89PiAnMTE6MzInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvTG9jYWxlU3RyaW5nKGZvcm1hdE9wdHMgPSBGb3JtYXRzLkRBVEVfU0hPUlQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcylcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZvcm1hdCBcInBhcnRzXCIsIG1lYW5pbmcgaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0c1xuICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG4gIHRvTG9jYWxlUGFydHMob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT1mYWxzZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MywgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPKHtcbiAgICBmb3JtYXQgPSBcImV4dGVuZGVkXCIsXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgICBleHRlbmRlZFpvbmUgPSBmYWxzZSxcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dCA9IGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiO1xuXG4gICAgbGV0IGMgPSB0b0lTT0RhdGUodGhpcywgZXh0KTtcbiAgICBjICs9IFwiVFwiO1xuICAgIGMgKz0gdG9JU09UaW1lKHRoaXMsIGV4dCwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCwgZXh0ZW5kZWRab25lKTtcbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIGRhdGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxOTgyMDUyNSdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09EYXRlKHsgZm9ybWF0ID0gXCJleHRlbmRlZFwiIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1dlZWtEYXRlKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJra2trLSdXJ1dXLWNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB0aW1lIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5leHRlbmRlZFpvbmU9dHJ1ZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUoe1xuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXG4gICAgaW5jbHVkZVByZWZpeCA9IGZhbHNlLFxuICAgIGV4dGVuZGVkWm9uZSA9IGZhbHNlLFxuICAgIGZvcm1hdCA9IFwiZXh0ZW5kZWRcIixcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjID0gaW5jbHVkZVByZWZpeCA/IFwiVFwiIDogXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgYyArXG4gICAgICB0b0lTT1RpbWUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiLFxuICAgICAgICBzdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgICBpbmNsdWRlT2Zmc2V0LFxuICAgICAgICBleHRlbmRlZFpvbmVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gUkZDIDI4MjItY29tcGF0aWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgKzAwMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIC0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1JGQzI4MjIoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgWlpaXCIsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBIVFRQIGhlYWRlcnMuIFRoZSBvdXRwdXQgaXMgYWx3YXlzIGV4cHJlc3NlZCBpbiBHTVQuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHN0cmluZyBjb25mb3JtcyB0byBSRkMgMTEyMy5cbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIEdNVCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzLCAxOSkudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAxOTowMDowMCBHTVQnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSFRUUCgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMudG9VVEMoKSwgXCJFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzICdHTVQnXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUxEYXRlKCkgLy89PiAnMjAxNC0wNy0xMydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUxEYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRvSVNPRGF0ZSh0aGlzLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0U3BhY2U9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0aW1lIGFuZCB0aGUgb2Zmc2V0LCBzdWNoIGFzICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1IEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU1FMVGltZSh7IGluY2x1ZGVPZmZzZXQgPSB0cnVlLCBpbmNsdWRlWm9uZSA9IGZhbHNlLCBpbmNsdWRlT2Zmc2V0U3BhY2UgPSB0cnVlIH0gPSB7fSkge1xuICAgIGxldCBmbXQgPSBcIkhIOm1tOnNzLlNTU1wiO1xuXG4gICAgaWYgKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgIGlmIChpbmNsdWRlT2Zmc2V0U3BhY2UpIHtcbiAgICAgICAgZm10ICs9IFwiIFwiO1xuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVab25lKSB7XG4gICAgICAgIGZtdCArPSBcInpcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgICAgICBmbXQgKz0gXCJaWlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVab25lOiB0cnVlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU1FMKG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy50b1NRTERhdGUoKX0gJHt0aGlzLnRvU1FMVGltZShvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvSVNPKCkgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLiBBbGlhcyBvZiB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgKGFzIGEgd2hvbGUgbnVtYmVyKSBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b1VuaXhJbnRlZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmZsb29yKHRoaXMudHMgLyAxMDAwKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQlNPTiBzZXJpYWxpemFibGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgdG9CU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSlNEYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3Qob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIGNvbnN0IGJhc2UgPSB7IC4uLnRoaXMuYyB9O1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfVxuXG4gIC8vIENPTVBBUkVcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxuICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XG4gICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxuICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwiY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyT3B0cyA9IHsgbG9jYWxlOiB0aGlzLmxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgLi4ub3B0cyB9O1xuXG4gICAgY29uc3QgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCksXG4gICAgICBlYXJsaWVyID0gb3RoZXJJc0xhdGVyID8gdGhpcyA6IG90aGVyRGF0ZVRpbWUsXG4gICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgZGlmZmVkID0gZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjZGlmZn1cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmZOb3codW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubm93KCksIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgdW50aWwob3RoZXJEYXRlVGltZSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZSBhcyBhbm90aGVyIERhdGVUaW1lLlxuICAgKiBIaWdoZXItb3JkZXIgdW5pdHMgbXVzdCBhbHNvIGJlIGlkZW50aWNhbCBmb3IgdGhpcyBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgLlxuICAgKiBOb3RlIHRoYXQgdGltZSB6b25lcyBhcmUgKippZ25vcmVkKiogaW4gdGhpcyBjb21wYXJpc29uLCB3aGljaCBjb21wYXJlcyB0aGUgKipsb2NhbCoqIGNhbGVuZGFyIHRpbWUuIFVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0gdG8gY29udmVydCBvbmUgb2YgdGhlIGRhdGVzIGlmIG5lZWRlZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBvdGhlckRUIGlzIGluIHRoZSBzYW1lIGN1cnJlbnQgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgIGNvbnN0IGFkanVzdGVkVG9ab25lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pO1xuICAgIHJldHVybiBhZGp1c3RlZFRvWm9uZS5zdGFydE9mKHVuaXQpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBhZGp1c3RlZFRvWm9uZS5lbmRPZih1bml0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZiBhbmQgb25seSBpZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxuICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVmFsaWQgJiZcbiAgICAgIG90aGVyLmlzVmFsaWQgJiZcbiAgICAgIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKCkgJiZcbiAgICAgIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiZcbiAgICAgIHRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdGhpcyB0aW1lIHJlbGF0aXZlIHRvIG5vdywgc3VjaCBhcyBcImluIHR3byBkYXlzXCIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91clxuICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0IG9yIGFycmF5IG9mIHVuaXRzOyBpZiBvbWl0dGVkLCBvciBhbiBhcnJheSwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIGJlc3QgdW5pdC4gVXNlIGFuIGFycmF5IG9yIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyAodGhpcyA8IGJhc2UgPyAtb3B0aW9ucy5wYWRkaW5nIDogb3B0aW9ucy5wYWRkaW5nKSA6IDA7XG4gICAgbGV0IHVuaXRzID0gW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXTtcbiAgICBsZXQgdW5pdCA9IG9wdGlvbnMudW5pdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnVuaXQpKSB7XG4gICAgICB1bml0cyA9IG9wdGlvbnMudW5pdDtcbiAgICAgIHVuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzLFxuICAgICAgdW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyBcInllc3RlcmRheVwiIG9yIFwibmV4dCBtb250aFwiLlxuICAgKiBPbmx5IGludGVybmF0aW9uYWxpemVzIG9uIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIG9yIFwiZGF5c1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcInRvbW9ycm93XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJcIm1hw7FhbmFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGVtYWluXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICovXG4gIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSwgdGhpcywge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG51bWVyaWM6IFwiYXV0b1wiLFxuICAgICAgdW5pdHM6IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiXSxcbiAgICAgIGNhbGVuZGFyeTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1pbiBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWluaW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1pbiBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWluKC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1heCBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWF4aW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1heCBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWF4KC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWF4KTtcbiAgfVxuXG4gIC8vIE1JU0NcblxuICAvKipcbiAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0aW9ucyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX1NIT1JUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfU0hPUlQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX01FRCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX01FRDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIE9jdCAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9NRURfV0lUSF9XRUVLREFZKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0ZVTEwoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9GVUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfSFVHRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX0hVR0U7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9TSU1QTEUoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX0xPTkdfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1NJTVBMRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1NJTVBMRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfU0hPUlQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRUQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9GVUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9IVUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICBgVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogJHtkYXRlVGltZWlzaH0sIG9mIHR5cGUgJHt0eXBlb2YgZGF0ZVRpbWVpc2h9YFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yLCBJbnZhbGlkRHVyYXRpb25FcnJvciwgSW52YWxpZFVuaXRFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUlTT0R1cmF0aW9uLCBwYXJzZUlTT1RpbWVPbmx5IH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgYXNOdW1iZXIsXG4gIGhhc093blByb3BlcnR5LFxuICBpc051bWJlcixcbiAgaXNVbmRlZmluZWQsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIER1cmF0aW9uXCI7XG5cbi8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBsb3dPcmRlck1hdHJpeCA9IHtcbiAgICB3ZWVrczoge1xuICAgICAgZGF5czogNyxcbiAgICAgIGhvdXJzOiA3ICogMjQsXG4gICAgICBtaW51dGVzOiA3ICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgZGF5czoge1xuICAgICAgaG91cnM6IDI0LFxuICAgICAgbWludXRlczogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIGhvdXJzOiB7IG1pbnV0ZXM6IDYwLCBzZWNvbmRzOiA2MCAqIDYwLCBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwIH0sXG4gICAgbWludXRlczogeyBzZWNvbmRzOiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDEwMDAgfSxcbiAgICBzZWNvbmRzOiB7IG1pbGxpc2Vjb25kczogMTAwMCB9LFxuICB9LFxuICBjYXN1YWxNYXRyaXggPSB7XG4gICAgeWVhcnM6IHtcbiAgICAgIHF1YXJ0ZXJzOiA0LFxuICAgICAgbW9udGhzOiAxMixcbiAgICAgIHdlZWtzOiA1MixcbiAgICAgIGRheXM6IDM2NSxcbiAgICAgIGhvdXJzOiAzNjUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDM2NSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IDEzLFxuICAgICAgZGF5czogOTEsXG4gICAgICBob3VyczogOTEgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDkxICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiA0LFxuICAgICAgZGF5czogMzAsXG4gICAgICBob3VyczogMzAgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDMwICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcblxuICAgIC4uLmxvd09yZGVyTWF0cml4LFxuICB9LFxuICBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMCxcbiAgZGF5c0luTW9udGhBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDgwMCxcbiAgYWNjdXJhdGVNYXRyaXggPSB7XG4gICAgeWVhcnM6IHtcbiAgICAgIHF1YXJ0ZXJzOiA0LFxuICAgICAgbW9udGhzOiAxMixcbiAgICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA3LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlLFxuICAgICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHF1YXJ0ZXJzOiB7XG4gICAgICBtb250aHM6IDMsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gMjgsXG4gICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA0LFxuICAgICAgaG91cnM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCkgLyA0LFxuICAgICAgbWludXRlczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjApIC8gNCxcbiAgICAgIHNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjApIC8gNCxcbiAgICAgIG1pbGxpc2Vjb25kczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApIC8gNCxcbiAgICB9LFxuICAgIG1vbnRoczoge1xuICAgICAgd2Vla3M6IGRheXNJbk1vbnRoQWNjdXJhdGUgLyA3LFxuICAgICAgZGF5czogZGF5c0luTW9udGhBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQsXG4gICAgICBtaW51dGVzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgLi4ubG93T3JkZXJNYXRyaXgsXG4gIH07XG5cbi8vIHVuaXRzIG9yZGVyZWQgYnkgc2l6ZVxuY29uc3Qgb3JkZXJlZFVuaXRzID0gW1xuICBcInllYXJzXCIsXG4gIFwicXVhcnRlcnNcIixcbiAgXCJtb250aHNcIixcbiAgXCJ3ZWVrc1wiLFxuICBcImRheXNcIixcbiAgXCJob3Vyc1wiLFxuICBcIm1pbnV0ZXNcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwibWlsbGlzZWNvbmRzXCIsXG5dO1xuXG5jb25zdCByZXZlcnNlVW5pdHMgPSBvcmRlcmVkVW5pdHMuc2xpY2UoMCkucmV2ZXJzZSgpO1xuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMgXCJjcmVhdGUgYW5vdGhlciBpbnN0YW5jZSBqdXN0IGxpa2UgdGhpcyBvbmUsIGJ1dCB3aXRoIHRoZXNlIGNoYW5nZXNcIlxuZnVuY3Rpb24gY2xvbmUoZHVyLCBhbHRzLCBjbGVhciA9IGZhbHNlKSB7XG4gIC8vIGRlZXAgbWVyZ2UgZm9yIHZhbHNcbiAgY29uc3QgY29uZiA9IHtcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiB7IC4uLmR1ci52YWx1ZXMsIC4uLihhbHRzLnZhbHVlcyB8fCB7fSkgfSxcbiAgICBsb2M6IGR1ci5sb2MuY2xvbmUoYWx0cy5sb2MpLFxuICAgIGNvbnZlcnNpb25BY2N1cmFjeTogYWx0cy5jb252ZXJzaW9uQWNjdXJhY3kgfHwgZHVyLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICBtYXRyaXg6IGFsdHMubWF0cml4IHx8IGR1ci5tYXRyaXgsXG4gIH07XG4gIHJldHVybiBuZXcgRHVyYXRpb24oY29uZik7XG59XG5cbmZ1bmN0aW9uIGR1cmF0aW9uVG9NaWxsaXMobWF0cml4LCB2YWxzKSB7XG4gIGxldCBzdW0gPSB2YWxzLm1pbGxpc2Vjb25kcyA/PyAwO1xuICBmb3IgKGNvbnN0IHVuaXQgb2YgcmV2ZXJzZVVuaXRzLnNsaWNlKDEpKSB7XG4gICAgaWYgKHZhbHNbdW5pdF0pIHtcbiAgICAgIHN1bSArPSB2YWxzW3VuaXRdICogbWF0cml4W3VuaXRdW1wibWlsbGlzZWNvbmRzXCJdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIC8vIHRoZSBsb2dpYyBiZWxvdyBhc3N1bWVzIHRoZSBvdmVyYWxsIHZhbHVlIG9mIHRoZSBkdXJhdGlvbiBpcyBwb3NpdGl2ZVxuICAvLyBpZiB0aGlzIGlzIG5vdCB0aGUgY2FzZSwgZmFjdG9yIGlzIHVzZWQgdG8gbWFrZSBpdCBzb1xuICBjb25zdCBmYWN0b3IgPSBkdXJhdGlvblRvTWlsbGlzKG1hdHJpeCwgdmFscykgPCAwID8gLTEgOiAxO1xuXG4gIG9yZGVyZWRVbml0cy5yZWR1Y2VSaWdodCgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWwgPSB2YWxzW3ByZXZpb3VzXSAqIGZhY3RvcjtcbiAgICAgICAgY29uc3QgY29udiA9IG1hdHJpeFtjdXJyZW50XVtwcmV2aW91c107XG5cbiAgICAgICAgLy8gaWYgKHByZXZpb3VzVmFsIDwgMCk6XG4gICAgICAgIC8vIGxvd2VyIG9yZGVyIHVuaXQgaXMgbmVnYXRpdmUgKGUuZy4geyB5ZWFyczogMiwgZGF5czogLTIgfSlcbiAgICAgICAgLy8gbm9ybWFsaXplIHRoaXMgYnkgcmVkdWNpbmcgdGhlIGhpZ2hlciBvcmRlciB1bml0IGJ5IHRoZSBhcHByb3ByaWF0ZSBhbW91bnRcbiAgICAgICAgLy8gYW5kIGluY3JlYXNpbmcgdGhlIGxvd2VyIG9yZGVyIHVuaXRcbiAgICAgICAgLy8gdGhpcyBjYW4gbmV2ZXIgbWFrZSB0aGUgaGlnaGVyIG9yZGVyIHVuaXQgbmVnYXRpdmUsIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBvbmx5IG9wZXJhdGVzXG4gICAgICAgIC8vIG9uIHBvc2l0aXZlIGR1cmF0aW9ucywgc28gdGhlIGFtb3VudCBvZiB0aW1lIHJlcHJlc2VudGVkIGJ5IHRoZSBsb3dlciBvcmRlciB1bml0IGNhbm5vdFxuICAgICAgICAvLyBiZSBsYXJnZXIgdGhhbiB0aGUgaGlnaGVyIG9yZGVyIHVuaXRcbiAgICAgICAgLy8gZWxzZTpcbiAgICAgICAgLy8gbG93ZXIgb3JkZXIgdW5pdCBpcyBwb3NpdGl2ZSAoZS5nLiB7IHllYXJzOiAyLCBkYXlzOiA0NTAgfSBvciB7IHllYXJzOiAtMiwgZGF5czogNDUwIH0pXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSBhdHRlbXB0IHRvIGNvbnZlcnQgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBsb3dlciBvcmRlciB1bml0IGludG9cbiAgICAgICAgLy8gdGhlIGhpZ2hlciBvcmRlciBvbmVcbiAgICAgICAgLy9cbiAgICAgICAgLy8gTWF0aC5mbG9vciB0YWtlcyBjYXJlIG9mIGJvdGggb2YgdGhlc2UgY2FzZXMsIHJvdW5kaW5nIGF3YXkgZnJvbSAwXG4gICAgICAgIC8vIGlmIHByZXZpb3VzVmFsIDwgMCBpdCBtYWtlcyB0aGUgYWJzb2x1dGUgdmFsdWUgbGFyZ2VyXG4gICAgICAgIC8vIGlmIHByZXZpb3VzVmFsID49IGl0IG1ha2VzIHRoZSBhYnNvbHV0ZSB2YWx1ZSBzbWFsbGVyXG4gICAgICAgIGNvbnN0IHJvbGxVcCA9IE1hdGguZmxvb3IocHJldmlvdXNWYWwgLyBjb252KTtcbiAgICAgICAgdmFsc1tjdXJyZW50XSArPSByb2xsVXAgKiBmYWN0b3I7XG4gICAgICAgIHZhbHNbcHJldmlvdXNdIC09IHJvbGxVcCAqIGNvbnYgKiBmYWN0b3I7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG5cbiAgLy8gdHJ5IHRvIGNvbnZlcnQgYW55IGRlY2ltYWxzIGludG8gc21hbGxlciB1bml0cyBpZiBwb3NzaWJsZVxuICAvLyBmb3IgZXhhbXBsZSBmb3IgeyB5ZWFyczogMi41LCBkYXlzOiAwLCBzZWNvbmRzOiAwIH0gd2Ugd2FudCB0byBnZXQgeyB5ZWFyczogMiwgZGF5czogMTgyLCBob3VyczogMTIgfVxuICBvcmRlcmVkVW5pdHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuICAgIGlmICghaXNVbmRlZmluZWQodmFsc1tjdXJyZW50XSkpIHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBmcmFjdGlvbiA9IHZhbHNbcHJldmlvdXNdICUgMTtcbiAgICAgICAgdmFsc1twcmV2aW91c10gLT0gZnJhY3Rpb247XG4gICAgICAgIHZhbHNbY3VycmVudF0gKz0gZnJhY3Rpb24gKiBtYXRyaXhbcHJldmlvdXNdW2N1cnJlbnRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9XG4gIH0sIG51bGwpO1xufVxuXG4vLyBSZW1vdmUgYWxsIHByb3BlcnRpZXMgd2l0aCBhIHZhbHVlIG9mIDAgZnJvbSBhbiBvYmplY3RcbmZ1bmN0aW9uIHJlbW92ZVplcm9lcyh2YWxzKSB7XG4gIGNvbnN0IG5ld1ZhbHMgPSB7fTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModmFscykpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIG5ld1ZhbHNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3VmFscztcbn1cblxuLyoqXG4gKiBBIER1cmF0aW9uIG9iamVjdCByZXByZXNlbnRzIGEgcGVyaW9kIG9mIHRpbWUsIGxpa2UgXCIyIG1vbnRoc1wiIG9yIFwiMSBkYXksIDEgaG91clwiLiBDb25jZXB0dWFsbHksIGl0J3MganVzdCBhIG1hcCBvZiB1bml0cyB0byB0aGVpciBxdWFudGl0aWVzLCBhY2NvbXBhbmllZCBieSBzb21lIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBhbmQgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS4gVGhleSBjYW4gYmUgdXNlZCBvbiB0aGVpciBvd24gb3IgaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBMdXhvbiB0eXBlczsgZm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHtAbGluayBEYXRlVGltZSNwbHVzfSB0byBhZGQgYSBEdXJhdGlvbiBvYmplY3QgdG8gYSBEYXRlVGltZSwgcHJvZHVjaW5nIGFub3RoZXIgRGF0ZVRpbWUuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBEdXJhdGlvbjpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYSBEdXJhdGlvbiwgdXNlIHtAbGluayBEdXJhdGlvbi5mcm9tTWlsbGlzfSwge0BsaW5rIER1cmF0aW9uLmZyb21PYmplY3R9LCBvciB7QGxpbmsgRHVyYXRpb24uZnJvbUlTT30uXG4gKiAqICoqVW5pdCB2YWx1ZXMqKiBTZWUgdGhlIHtAbGluayBEdXJhdGlvbiN5ZWFyc30sIHtAbGluayBEdXJhdGlvbiNtb250aHN9LCB7QGxpbmsgRHVyYXRpb24jd2Vla3N9LCB7QGxpbmsgRHVyYXRpb24jZGF5c30sIHtAbGluayBEdXJhdGlvbiNob3Vyc30sIHtAbGluayBEdXJhdGlvbiNtaW51dGVzfSwge0BsaW5rIER1cmF0aW9uI3NlY29uZHN9LCB7QGxpbmsgRHVyYXRpb24jbWlsbGlzZWNvbmRzfSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSAge0BsaW5rIER1cmF0aW9uI2xvY2FsZX0gYW5kIHtAbGluayBEdXJhdGlvbiNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBuZXcgRHVyYXRpb25zIG91dCBvZiBvbGQgb25lcyB1c2Uge0BsaW5rIER1cmF0aW9uI3BsdXN9LCB7QGxpbmsgRHVyYXRpb24jbWludXN9LCB7QGxpbmsgRHVyYXRpb24jbm9ybWFsaXplfSwge0BsaW5rIER1cmF0aW9uI3NldH0sIHtAbGluayBEdXJhdGlvbiNyZWNvbmZpZ3VyZX0sIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSwgYW5kIHtAbGluayBEdXJhdGlvbiNuZWdhdGV9LlxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIER1cmF0aW9uIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIER1cmF0aW9uI2FzfSwge0BsaW5rIER1cmF0aW9uI3RvSVNPfSwge0BsaW5rIER1cmF0aW9uI3RvRm9ybWF0fSwgYW5kIHtAbGluayBEdXJhdGlvbiN0b0pTT059XG4gKlxuICogVGhlcmUncyBhcmUgbW9yZSBtZXRob2RzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uIGFuZCB2YWxpZGl0eSwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdXJhdGlvbiB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uc3QgYWNjdXJhdGUgPSBjb25maWcuY29udmVyc2lvbkFjY3VyYWN5ID09PSBcImxvbmd0ZXJtXCIgfHwgZmFsc2U7XG4gICAgbGV0IG1hdHJpeCA9IGFjY3VyYXRlID8gYWNjdXJhdGVNYXRyaXggOiBjYXN1YWxNYXRyaXg7XG5cbiAgICBpZiAoY29uZmlnLm1hdHJpeCkge1xuICAgICAgbWF0cml4ID0gY29uZmlnLm1hdHJpeDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlcyA9IGNvbmZpZy52YWx1ZXM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGFjY3VyYXRlID8gXCJsb25ndGVybVwiIDogXCJjYXN1YWxcIjtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkR1cmF0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgRHVyYXRpb24gZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBvZiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21NaWxsaXMoY291bnQsIG9wdHMpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogY291bnQgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXG4gICAqIElmIHRoaXMgb2JqZWN0IGlzIGVtcHR5IHRoZW4gYSB6ZXJvIG1pbGxpc2Vjb25kcyBkdXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5xdWFydGVyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5c1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPVtdXSAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBjdXN0b20gY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21PYmplY3Qob2JqLCBvcHRzID0ge30pIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgRHVyYXRpb24uZnJvbU9iamVjdDogYXJndW1lbnQgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0LCBnb3QgJHtcbiAgICAgICAgICBvYmogPT09IG51bGwgPyBcIm51bGxcIiA6IHR5cGVvZiBvYmpcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XG4gICAgICB2YWx1ZXM6IG5vcm1hbGl6ZU9iamVjdChvYmosIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRzKSxcbiAgICAgIGNvbnZlcnNpb25BY2N1cmFjeTogb3B0cy5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgICBtYXRyaXg6IG9wdHMubWF0cml4LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gRHVyYXRpb25MaWtlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdCB8IG51bWJlciB8IER1cmF0aW9ufSBkdXJhdGlvbkxpa2VcbiAgICogT25lIG9mOlxuICAgKiAtIG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiAtIG51bWJlciByZXByZXNlbnRpbmcgbWlsbGlzZWNvbmRzXG4gICAqIC0gRHVyYXRpb24gaW5zdGFuY2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbkxpa2UpIHtcbiAgICBpZiAoaXNOdW1iZXIoZHVyYXRpb25MaWtlKSkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMoZHVyYXRpb25MaWtlKTtcbiAgICB9IGVsc2UgaWYgKER1cmF0aW9uLmlzRHVyYXRpb24oZHVyYXRpb25MaWtlKSkge1xuICAgICAgcmV0dXJuIGR1cmF0aW9uTGlrZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbkxpa2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYFVua25vd24gZHVyYXRpb24gYXJndW1lbnQgJHtkdXJhdGlvbkxpa2V9IG9mIHR5cGUgJHt0eXBlb2YgZHVyYXRpb25MaWtlfWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgZHVyYXRpb24gc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubWF0cml4PU9iamVjdF0gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQM1k2TTFXNERUMTJIMzBNNVMnKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMywgbW9udGhzOiA2LCB3ZWVrczogMSwgZGF5czogNCwgaG91cnM6IDEyLCBtaW51dGVzOiAzMCwgc2Vjb25kczogNSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1BUMjNIJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDIzIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDVZM00nKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogNSwgbW9udGhzOiAzIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgY29uc3QgW3BhcnNlZF0gPSBwYXJzZUlTT0R1cmF0aW9uKHRleHQpO1xuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIHRpbWUgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubWF0cml4PU9iamVjdF0gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjIyOjMzLjQ0NCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMjIsIHNlY29uZHM6IDMzLCBtaWxsaXNlY29uZHM6IDQ0NCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21JU09UaW1lKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPVGltZU9ubHkodGV4dCk7XG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBkYXRldGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIER1cmF0aW9uIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREdXJhdGlvbkVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IER1cmF0aW9uKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0ge1xuICAgICAgeWVhcjogXCJ5ZWFyc1wiLFxuICAgICAgeWVhcnM6IFwieWVhcnNcIixcbiAgICAgIHF1YXJ0ZXI6IFwicXVhcnRlcnNcIixcbiAgICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJzXCIsXG4gICAgICBtb250aDogXCJtb250aHNcIixcbiAgICAgIG1vbnRoczogXCJtb250aHNcIixcbiAgICAgIHdlZWs6IFwid2Vla3NcIixcbiAgICAgIHdlZWtzOiBcIndlZWtzXCIsXG4gICAgICBkYXk6IFwiZGF5c1wiLFxuICAgICAgZGF5czogXCJkYXlzXCIsXG4gICAgICBob3VyOiBcImhvdXJzXCIsXG4gICAgICBob3VyczogXCJob3Vyc1wiLFxuICAgICAgbWludXRlOiBcIm1pbnV0ZXNcIixcbiAgICAgIG1pbnV0ZXM6IFwibWludXRlc1wiLFxuICAgICAgc2Vjb25kOiBcInNlY29uZHNcIixcbiAgICAgIHNlY29uZHM6IFwic2Vjb25kc1wiLFxuICAgICAgbWlsbGlzZWNvbmQ6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZHM6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgfVt1bml0ID8gdW5pdC50b0xvd2VyQ2FzZSgpIDogdW5pdF07XG5cbiAgICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgRHVyYXRpb24uIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0R1cmF0aW9uKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRHVyYXRpb24pIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCAgdGhlIGxvY2FsZSBvZiBhIER1cmF0aW9uLCBzdWNoICdlbi1HQidcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRHVyYXRpb25cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLiBZb3UgbWF5IHVzZSB0aGVzZSB0b2tlbnM6XG4gICAqICogYFNgIGZvciBtaWxsaXNlY29uZHNcbiAgICogKiBgc2AgZm9yIHNlY29uZHNcbiAgICogKiBgbWAgZm9yIG1pbnV0ZXNcbiAgICogKiBgaGAgZm9yIGhvdXJzXG4gICAqICogYGRgIGZvciBkYXlzXG4gICAqICogYHdgIGZvciB3ZWVrc1xuICAgKiAqIGBNYCBmb3IgbW9udGhzXG4gICAqICogYHlgIGZvciB5ZWFyc1xuICAgKiBOb3RlczpcbiAgICogKiBBZGQgcGFkZGluZyBieSByZXBlYXRpbmcgdGhlIHRva2VuLCBlLmcuIFwieXlcIiBwYWRzIHRoZSB5ZWFycyB0byB0d28gZGlnaXRzLCBcImhoaGhcIiBwYWRzIHRoZSBob3VycyBvdXQgdG8gZm91ciBkaWdpdHNcbiAgICogKiBUb2tlbnMgY2FuIGJlIGVzY2FwZWQgYnkgd3JhcHBpbmcgd2l0aCBzaW5nbGUgcXVvdGVzLlxuICAgKiAqIFRoZSBkdXJhdGlvbiB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgc2V0IG9mIHVuaXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSBhbmQgdGhlIER1cmF0aW9ucydzIGNvbnZlcnNpb24gYWNjdXJhY3kgc2V0dGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsb29yPXRydWVdIC0gZmxvb3IgbnVtZXJpY2FsIHZhbHVlc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5IGQgc1wiKSAvLz0+IFwiMSA2IDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5eSBkZCBzc3NcIikgLy89PiBcIjAxIDA2IDAwMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcIk0gU1wiKSAvLz0+IFwiMTIgNTE4NDAyMDAwXCJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Gb3JtYXQoZm10LCBvcHRzID0ge30pIHtcbiAgICAvLyByZXZlcnNlLWNvbXBhdCBzaW5jZSAxLjI7IHdlIGFsd2F5cyByb3VuZCBkb3duIG5vdywgbmV2ZXIgdXAsIGFuZCB3ZSBkbyBpdCBieSBkZWZhdWx0XG4gICAgY29uc3QgZm10T3B0cyA9IHtcbiAgICAgIC4uLm9wdHMsXG4gICAgICBmbG9vcjogb3B0cy5yb3VuZCAhPT0gZmFsc2UgJiYgb3B0cy5mbG9vciAhPT0gZmFsc2UsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MsIGZtdE9wdHMpLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIER1cmF0aW9uIHdpdGggYWxsIHVuaXRzIGluY2x1ZGVkLlxuICAgKiBUbyBtb2RpZnkgaXRzIGJlaGF2aW9yIHVzZSB0aGUgYGxpc3RTdHlsZWAgYW5kIGFueSBJbnRsLk51bWJlckZvcm1hdCBvcHRpb24sIHRob3VnaCBgdW5pdERpc3BsYXlgIGlzIGVzcGVjaWFsbHkgcmVsZXZhbnQuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9OdW1iZXJGb3JtYXRcbiAgICogQHBhcmFtIG9wdHMgLSBPbiBvcHRpb24gb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBmb3JtYXR0aW5nLiBBY2NlcHRzIHRoZSBzYW1lIGtleXMgYXMgdGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9mIHRoZSBuYXRpdmUgYEludC5OdW1iZXJGb3JtYXRgIGNvbnN0cnVjdG9yLCBhcyB3ZWxsIGFzIGBsaXN0U3R5bGVgLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiB2YXIgZHVyID0gRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDEsIGhvdXJzOiA1LCBtaW51dGVzOiA2IH0pXG4gICAqIGR1ci50b0h1bWFuKCkgLy89PiAnMSBkYXksIDUgaG91cnMsIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyBsaXN0U3R5bGU6IFwibG9uZ1wiIH0pIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCBhbmQgNiBtaW51dGVzJ1xuICAgKiBkdXIudG9IdW1hbih7IHVuaXREaXNwbGF5OiBcInNob3J0XCIgfSkgLy89PiAnMSBkYXksIDUgaHIsIDYgbWluJ1xuICAgKiBgYGBcbiAgICovXG4gIHRvSHVtYW4ob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuXG4gICAgY29uc3QgbCA9IG9yZGVyZWRVbml0c1xuICAgICAgLm1hcCgodW5pdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlc1t1bml0XTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2NcbiAgICAgICAgICAubnVtYmVyRm9ybWF0dGVyKHsgc3R5bGU6IFwidW5pdFwiLCB1bml0RGlzcGxheTogXCJsb25nXCIsIC4uLm9wdHMsIHVuaXQ6IHVuaXQuc2xpY2UoMCwgLTEpIH0pXG4gICAgICAgICAgLmZvcm1hdCh2YWwpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKG4pID0+IG4pO1xuXG4gICAgcmV0dXJuIHRoaXMubG9jXG4gICAgICAubGlzdEZvcm1hdHRlcih7IHR5cGU6IFwiY29uanVuY3Rpb25cIiwgc3R5bGU6IG9wdHMubGlzdFN0eWxlIHx8IFwibmFycm93XCIsIC4uLm9wdHMgfSlcbiAgICAgIC5mb3JtYXQobCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3QoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcbiAgICByZXR1cm4geyAuLi50aGlzLnZhbHVlcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDYgfSkudG9JU08oKSAvLz0+ICdQVDAuMDA2UydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08oKSB7XG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBzID0gXCJQXCI7XG4gICAgaWYgKHRoaXMueWVhcnMgIT09IDApIHMgKz0gdGhpcy55ZWFycyArIFwiWVwiO1xuICAgIGlmICh0aGlzLm1vbnRocyAhPT0gMCB8fCB0aGlzLnF1YXJ0ZXJzICE9PSAwKSBzICs9IHRoaXMubW9udGhzICsgdGhpcy5xdWFydGVycyAqIDMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy53ZWVrcyAhPT0gMCkgcyArPSB0aGlzLndlZWtzICsgXCJXXCI7XG4gICAgaWYgKHRoaXMuZGF5cyAhPT0gMCkgcyArPSB0aGlzLmRheXMgKyBcIkRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCB8fCB0aGlzLm1pbnV0ZXMgIT09IDAgfHwgdGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgcyArPSBcIlRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgXCJIXCI7XG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSB0aGlzLm1pbnV0ZXMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgLy8gdGhpcyB3aWxsIGhhbmRsZSBcImZsb2F0aW5nIHBvaW50IG1hZG5lc3NcIiBieSByZW1vdmluZyBleHRyYSBkZWNpbWFsIHBsYWNlc1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTg4MDA0L2lzLWZsb2F0aW5nLXBvaW50LW1hdGgtYnJva2VuXG4gICAgICBzICs9IHJvdW5kVG8odGhpcy5zZWNvbmRzICsgdGhpcy5taWxsaXNlY29uZHMgLyAxMDAwLCAzKSArIFwiU1wiO1xuICAgIGlmIChzID09PSBcIlBcIikgcyArPSBcIlQwU1wiO1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS5cbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbWlsbGlzID0gdGhpcy50b01pbGxpcygpO1xuICAgIGlmIChtaWxsaXMgPCAwIHx8IG1pbGxpcyA+PSA4NjQwMDAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICBvcHRzID0ge1xuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHM6IGZhbHNlLFxuICAgICAgc3VwcHJlc3NTZWNvbmRzOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVQcmVmaXg6IGZhbHNlLFxuICAgICAgZm9ybWF0OiBcImV4dGVuZGVkXCIsXG4gICAgICAuLi5vcHRzLFxuICAgICAgaW5jbHVkZU9mZnNldDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGVUaW1lID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhtaWxsaXMsIHsgem9uZTogXCJVVENcIiB9KTtcbiAgICByZXR1cm4gZGF0ZVRpbWUudG9JU09UaW1lKG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcblxuICAgIHJldHVybiBkdXJhdGlvblRvTWlsbGlzKHRoaXMubWF0cml4LCB0aGlzLnZhbHVlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3Vyc1wiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBtYXBVbml0cyhmbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ3llYXJzJykgLy89PiAyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdtb250aHMnKSAvLz0+IDBcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ2RheXMnKSAvLz0+IDNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG1peGVkID0geyAuLi50aGlzLnZhbHVlcywgLi4ubm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkgfTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IG1peGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjb252ZXJzaW9uQWNjdXJhY3ksIG1hdHJpeCB9ID0ge30pIHtcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xuICAgIGNvbnN0IG9wdHMgPSB7IGxvYywgbWF0cml4LCBjb252ZXJzaW9uQWNjdXJhY3kgfTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYXModW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEFzc3VtaW5nIHRoZSBvdmVyYWxsIHZhbHVlIG9mIHRoZSBEdXJhdGlvbiBpcyBwb3NpdGl2ZSwgdGhpcyBtZWFuczpcbiAgICogLSBleGNlc3NpdmUgdmFsdWVzIGZvciBsb3dlci1vcmRlciB1bml0cyBhcmUgY29udmVydGVkIHRvIGhpZ2hlci1vcmRlciB1bml0cyAoaWYgcG9zc2libGUsIHNlZSBmaXJzdCBhbmQgc2Vjb25kIGV4YW1wbGUpXG4gICAqIC0gbmVnYXRpdmUgbG93ZXItb3JkZXIgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBoaWdoZXIgb3JkZXIgdW5pdHMgKHRoZXJlIG11c3QgYmUgc3VjaCBhIGhpZ2hlciBvcmRlciB1bml0LCBvdGhlcndpc2VcbiAgICogICB0aGUgb3ZlcmFsbCB2YWx1ZSB3b3VsZCBiZSBuZWdhdGl2ZSwgc2VlIHNlY29uZCBleGFtcGxlKVxuICAgKiAtIGZyYWN0aW9uYWwgdmFsdWVzIGZvciBoaWdoZXItb3JkZXIgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBsb3dlci1vcmRlciB1bml0cyAoaWYgcG9zc2libGUsIHNlZSBmb3VydGggZXhhbXBsZSlcbiAgICpcbiAgICogSWYgdGhlIG92ZXJhbGwgdmFsdWUgaXMgbmVnYXRpdmUsIHRoZSByZXN1bHQgb2YgdGhpcyBtZXRob2QgaXMgZXF1aXZhbGVudCB0byBgdGhpcy5uZWdhdGUoKS5ub3JtYWxpemUoKS5uZWdhdGUoKWAuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGRheXM6IDUwMDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEyLCBtaW51dGVzOiAtNDUgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAxNSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMi41LCBkYXlzOiAwLCBob3VyczogMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMiwgZGF5czogMTgyLCBob3VyczogMTIgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG5vcm1hbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNjYWxlIHVuaXRzIHRvIGl0cyBsYXJnZXN0IHJlcHJlc2VudGF0aW9uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDkwMDAwIH0pLnJlc2NhbGUoKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiAxLCBzZWNvbmRzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgcmVzY2FsZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdmFscyA9IHJlbW92ZVplcm9lcyh0aGlzLm5vcm1hbGl6ZSgpLnNoaWZ0VG9BbGwoKS50b09iamVjdCgpKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHZhbHMgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGlzIER1cmF0aW9uIGludG8gaXRzIHJlcHJlc2VudGF0aW9uIGluIGEgZGlmZmVyZW50IHNldCBvZiB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5zaGlmdFRvKCdtaW51dGVzJywgJ21pbGxpc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDYwLCBtaWxsaXNlY29uZHM6IDMwMDAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzaGlmdFRvKC4uLnVuaXRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5pdHMgPSB1bml0cy5tYXAoKHUpID0+IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodSkpO1xuXG4gICAgY29uc3QgYnVpbHQgPSB7fSxcbiAgICAgIGFjY3VtdWxhdGVkID0ge30sXG4gICAgICB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIGxldCBsYXN0VW5pdDtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xuXG4gICAgICAgIGxldCBvd24gPSAwO1xuXG4gICAgICAgIC8vIGFueXRoaW5nIHdlIGhhdmVuJ3QgYm9pbGVkIGRvd24geWV0IHNob3VsZCBnZXQgYm9pbGVkIHRvIHRoaXMgdW5pdFxuICAgICAgICBmb3IgKGNvbnN0IGFrIGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcbiAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgICAgb3duICs9IHZhbHNba107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IGtlZXAgdGhlIGludGVnZXIgcGFydCBmb3Igbm93IGluIHRoZSBob3BlcyBvZiBwdXR0aW5nIGFueSBkZWNpbWFsIHBhcnRcbiAgICAgICAgLy8gaW50byBhIHNtYWxsZXIgdW5pdCBsYXRlclxuICAgICAgICBjb25zdCBpID0gTWF0aC50cnVuYyhvd24pO1xuICAgICAgICBidWlsdFtrXSA9IGk7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gKG93biAqIDEwMDAgLSBpICogMTAwMCkgLyAxMDAwO1xuXG4gICAgICAgIC8vIG90aGVyd2lzZSwga2VlcCBpdCBpbiB0aGUgd2luZ3MgdG8gYm9pbCBpdCBsYXRlclxuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IHZhbHNba107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY2N1bXVsYXRlZCkge1xuICAgICAgaWYgKGFjY3VtdWxhdGVkW2tleV0gIT09IDApIHtcbiAgICAgICAgYnVpbHRbbGFzdFVuaXRdICs9XG4gICAgICAgICAga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCBidWlsdCk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBidWlsdCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGlmdCB0aGlzIER1cmF0aW9uIHRvIGFsbCBhdmFpbGFibGUgdW5pdHMuXG4gICAqIFNhbWUgYXMgc2hpZnRUbyhcInllYXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNoaWZ0VG9BbGwoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiB0aGlzLnNoaWZ0VG8oXG4gICAgICBcInllYXJzXCIsXG4gICAgICBcIm1vbnRoc1wiLFxuICAgICAgXCJ3ZWVrc1wiLFxuICAgICAgXCJkYXlzXCIsXG4gICAgICBcImhvdXJzXCIsXG4gICAgICBcIm1pbnV0ZXNcIixcbiAgICAgIFwic2Vjb25kc1wiLFxuICAgICAgXCJtaWxsaXNlY29uZHNcIlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZWdhdGl2ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLm5lZ2F0ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAtMSwgc2Vjb25kczogLTMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBuZWdhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IG5lZ2F0ZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XG4gICAgICBuZWdhdGVkW2tdID0gdGhpcy52YWx1ZXNba10gPT09IDAgPyAwIDogLXRoaXMudmFsdWVzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IG5lZ2F0ZWQgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB5ZWFycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMueWVhcnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHF1YXJ0ZXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHF1YXJ0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5xdWFydGVycyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9udGhzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1vbnRocygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubW9udGhzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrc1xuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy53ZWVrcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5cy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5kYXlzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBob3Vycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBob3VycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuaG91cnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbnV0ZXMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWludXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWludXRlcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2Vjb25kcy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnNlY29uZHMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kcy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbGxpc2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWlsbGlzZWNvbmRzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkLiBJbnZhbGlkIGR1cmF0aW9ucyBhcmUgcmV0dXJuZWQgYnkgZGlmZiBvcGVyYXRpb25zXG4gICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRHVyYXRpb25zIGFyZSBlcXVhbCBpZmYgdGhleSBoYXZlIHRoZSBzYW1lIHVuaXRzIGFuZCB0aGUgc2FtZSB2YWx1ZXMgZm9yIGVhY2ggdW5pdC5cbiAgICogQHBhcmFtIHtEdXJhdGlvbn0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVxKHYxLCB2Mikge1xuICAgICAgLy8gQ29uc2lkZXIgMCBhbmQgdW5kZWZpbmVkIGFzIGVxdWFsXG4gICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCB8fCB2MSA9PT0gMCkgcmV0dXJuIHYyID09PSB1bmRlZmluZWQgfHwgdjIgPT09IDA7XG4gICAgICByZXR1cm4gdjEgPT09IHYyO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdSBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmICghZXEodGhpcy52YWx1ZXNbdV0sIG90aGVyLnZhbHVlc1t1XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLy8gdGhlc2UgYXJlbid0IHJlYWxseSBwcml2YXRlLCBidXQgbm9yIGFyZSB0aGV5IHJlYWxseSB1c2VmdWwgdG8gZG9jdW1lbnRcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBMdXhvbkVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZERhdGVUaW1lRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRGF0ZVRpbWU6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWRJbnRlcnZhbEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIEludGVydmFsOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkRHVyYXRpb25FcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBEdXJhdGlvbjogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWRVbml0RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IodW5pdCkge1xuICAgIHN1cGVyKGBJbnZhbGlkIHVuaXQgJHt1bml0fWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBab25lSXNBYnN0cmFjdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiWm9uZSBpcyBhbiBhYnN0cmFjdCBjbGFzc1wiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaW50ZWdlckJldHdlZW4sXG4gIGlzTGVhcFllYXIsXG4gIHRpbWVPYmplY3QsXG4gIGRheXNJblllYXIsXG4gIGRheXNJbk1vbnRoLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIGlzSW50ZWdlcixcbn0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW52YWxpZC5qc1wiO1xuXG5jb25zdCBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgbGVhcExhZGRlciA9IFswLCAzMSwgNjAsIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNV07XG5cbmZ1bmN0aW9uIHVuaXRPdXRPZlJhbmdlKHVuaXQsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcbiAgICBcInVuaXQgb3V0IG9mIHJhbmdlXCIsXG4gICAgYHlvdSBzcGVjaWZpZWQgJHt2YWx1ZX0gKG9mIHR5cGUgJHt0eXBlb2YgdmFsdWV9KSBhcyBhICR7dW5pdH0sIHdoaWNoIGlzIGludmFsaWRgXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpO1xuXG4gIGlmICh5ZWFyIDwgMTAwICYmIHllYXIgPj0gMCkge1xuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XG4gIH1cblxuICBjb25zdCBqcyA9IGQuZ2V0VVRDRGF5KCk7XG5cbiAgcmV0dXJuIGpzID09PSAwID8gNyA6IGpzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIHJldHVybiBkYXkgKyAoaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyKVttb250aCAtIDFdO1xufVxuXG5mdW5jdGlvbiB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpIHtcbiAgY29uc3QgdGFibGUgPSBpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIsXG4gICAgbW9udGgwID0gdGFibGUuZmluZEluZGV4KChpKSA9PiBpIDwgb3JkaW5hbCksXG4gICAgZGF5ID0gb3JkaW5hbCAtIHRhYmxlW21vbnRoMF07XG4gIHJldHVybiB7IG1vbnRoOiBtb250aDAgKyAxLCBkYXkgfTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBncmVnb3JpYW5Ub1dlZWsoZ3JlZ09iaikge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdyZWdPYmosXG4gICAgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpLFxuICAgIHdlZWtkYXkgPSBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSk7XG5cbiAgbGV0IHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKChvcmRpbmFsIC0gd2Vla2RheSArIDEwKSAvIDcpLFxuICAgIHdlZWtZZWFyO1xuXG4gIGlmICh3ZWVrTnVtYmVyIDwgMSkge1xuICAgIHdlZWtZZWFyID0geWVhciAtIDE7XG4gICAgd2Vla051bWJlciA9IHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcik7XG4gIH0gZWxzZSBpZiAod2Vla051bWJlciA+IHdlZWtzSW5XZWVrWWVhcih5ZWFyKSkge1xuICAgIHdlZWtZZWFyID0geWVhciArIDE7XG4gICAgd2Vla051bWJlciA9IDE7XG4gIH0gZWxzZSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyO1xuICB9XG5cbiAgcmV0dXJuIHsgd2Vla1llYXIsIHdlZWtOdW1iZXIsIHdlZWtkYXksIC4uLnRpbWVPYmplY3QoZ3JlZ09iaikgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtUb0dyZWdvcmlhbih3ZWVrRGF0YSkge1xuICBjb25zdCB7IHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5IH0gPSB3ZWVrRGF0YSxcbiAgICB3ZWVrZGF5T2ZKYW40ID0gZGF5T2ZXZWVrKHdlZWtZZWFyLCAxLCA0KSxcbiAgICB5ZWFySW5EYXlzID0gZGF5c0luWWVhcih3ZWVrWWVhcik7XG5cbiAgbGV0IG9yZGluYWwgPSB3ZWVrTnVtYmVyICogNyArIHdlZWtkYXkgLSB3ZWVrZGF5T2ZKYW40IC0gMyxcbiAgICB5ZWFyO1xuXG4gIGlmIChvcmRpbmFsIDwgMSkge1xuICAgIHllYXIgPSB3ZWVrWWVhciAtIDE7XG4gICAgb3JkaW5hbCArPSBkYXlzSW5ZZWFyKHllYXIpO1xuICB9IGVsc2UgaWYgKG9yZGluYWwgPiB5ZWFySW5EYXlzKSB7XG4gICAgeWVhciA9IHdlZWtZZWFyICsgMTtcbiAgICBvcmRpbmFsIC09IGRheXNJblllYXIod2Vla1llYXIpO1xuICB9IGVsc2Uge1xuICAgIHllYXIgPSB3ZWVrWWVhcjtcbiAgfVxuXG4gIGNvbnN0IHsgbW9udGgsIGRheSB9ID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKTtcbiAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSwgLi4udGltZU9iamVjdCh3ZWVrRGF0YSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWdvcmlhblRvT3JkaW5hbChncmVnRGF0YSkge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdyZWdEYXRhO1xuICBjb25zdCBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7XG4gIHJldHVybiB7IHllYXIsIG9yZGluYWwsIC4uLnRpbWVPYmplY3QoZ3JlZ0RhdGEpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsVG9HcmVnb3JpYW4ob3JkaW5hbERhdGEpIHtcbiAgY29uc3QgeyB5ZWFyLCBvcmRpbmFsIH0gPSBvcmRpbmFsRGF0YTtcbiAgY29uc3QgeyBtb250aCwgZGF5IH0gPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpO1xuICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF5LCAuLi50aW1lT2JqZWN0KG9yZGluYWxEYXRhKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZFdlZWtEYXRhKG9iaikge1xuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLndlZWtZZWFyKSxcbiAgICB2YWxpZFdlZWsgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla051bWJlciwgMSwgd2Vla3NJbldlZWtZZWFyKG9iai53ZWVrWWVhcikpLFxuICAgIHZhbGlkV2Vla2RheSA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrZGF5LCAxLCA3KTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtZZWFyXCIsIG9iai53ZWVrWWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vlaykge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtcIiwgb2JqLndlZWspO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWtkYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrZGF5XCIsIG9iai53ZWVrZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRPcmRpbmFsRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE9yZGluYWwgPSBpbnRlZ2VyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkT3JkaW5hbCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm9yZGluYWxcIiwgb2JqLm9yZGluYWwpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgdmFsaWRNb250aCA9IGludGVnZXJCZXR3ZWVuKG9iai5tb250aCwgMSwgMTIpLFxuICAgIHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTW9udGgpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtb250aFwiLCBvYmoubW9udGgpO1xuICB9IGVsc2UgaWYgKCF2YWxpZERheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImRheVwiLCBvYmouZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcbiAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQgfSA9IG9iajtcbiAgY29uc3QgdmFsaWRIb3VyID1cbiAgICAgIGludGVnZXJCZXR3ZWVuKGhvdXIsIDAsIDIzKSB8fFxuICAgICAgKGhvdXIgPT09IDI0ICYmIG1pbnV0ZSA9PT0gMCAmJiBzZWNvbmQgPT09IDAgJiYgbWlsbGlzZWNvbmQgPT09IDApLFxuICAgIHZhbGlkTWludXRlID0gaW50ZWdlckJldHdlZW4obWludXRlLCAwLCA1OSksXG4gICAgdmFsaWRTZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihzZWNvbmQsIDAsIDU5KSxcbiAgICB2YWxpZE1pbGxpc2Vjb25kID0gaW50ZWdlckJldHdlZW4obWlsbGlzZWNvbmQsIDAsIDk5OSk7XG5cbiAgaWYgKCF2YWxpZEhvdXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJob3VyXCIsIGhvdXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbnV0ZSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbnV0ZVwiLCBtaW51dGUpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInNlY29uZFwiLCBzZWNvbmQpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbGxpc2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuLi9kdXJhdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBkYXlEaWZmKGVhcmxpZXIsIGxhdGVyKSB7XG4gIGNvbnN0IHV0Y0RheVN0YXJ0ID0gKGR0KSA9PiBkdC50b1VUQygwLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkuc3RhcnRPZihcImRheVwiKS52YWx1ZU9mKCksXG4gICAgbXMgPSB1dGNEYXlTdGFydChsYXRlcikgLSB1dGNEYXlTdGFydChlYXJsaWVyKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRHVyYXRpb24uZnJvbU1pbGxpcyhtcykuYXMoXCJkYXlzXCIpKTtcbn1cblxuZnVuY3Rpb24gaGlnaE9yZGVyRGlmZnMoY3Vyc29yLCBsYXRlciwgdW5pdHMpIHtcbiAgY29uc3QgZGlmZmVycyA9IFtcbiAgICBbXCJ5ZWFyc1wiLCAoYSwgYikgPT4gYi55ZWFyIC0gYS55ZWFyXSxcbiAgICBbXCJxdWFydGVyc1wiLCAoYSwgYikgPT4gYi5xdWFydGVyIC0gYS5xdWFydGVyICsgKGIueWVhciAtIGEueWVhcikgKiA0XSxcbiAgICBbXCJtb250aHNcIiwgKGEsIGIpID0+IGIubW9udGggLSBhLm1vbnRoICsgKGIueWVhciAtIGEueWVhcikgKiAxMl0sXG4gICAgW1xuICAgICAgXCJ3ZWVrc1wiLFxuICAgICAgKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF5cyA9IGRheURpZmYoYSwgYik7XG4gICAgICAgIHJldHVybiAoZGF5cyAtIChkYXlzICUgNykpIC8gNztcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJkYXlzXCIsIGRheURpZmZdLFxuICBdO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB7fTtcbiAgY29uc3QgZWFybGllciA9IGN1cnNvcjtcbiAgbGV0IGxvd2VzdE9yZGVyLCBoaWdoV2F0ZXI7XG5cbiAgLyogVGhpcyBsb29wIHRyaWVzIHRvIGRpZmYgdXNpbmcgbGFyZ2VyIHVuaXRzIGZpcnN0LlxuICAgICBJZiB3ZSBvdmVyc2hvb3QsIHdlIGJhY2t0cmFjayBhbmQgdHJ5IHRoZSBuZXh0IHNtYWxsZXIgdW5pdC5cbiAgICAgXCJjdXJzb3JcIiBzdGFydHMgb3V0IGF0IHRoZSBlYXJsaWVyIHRpbWVzdGFtcCBhbmQgbW92ZXMgY2xvc2VyIGFuZCBjbG9zZXIgdG8gXCJsYXRlclwiXG4gICAgIGFzIHdlIHVzZSBzbWFsbGVyIGFuZCBzbWFsbGVyIHVuaXRzLlxuICAgICBoaWdoV2F0ZXIga2VlcHMgdHJhY2sgb2Ygd2hlcmUgd2Ugd291bGQgYmUgaWYgd2UgYWRkZWQgb25lIG1vcmUgb2YgdGhlIHNtYWxsZXN0IHVuaXQsXG4gICAgIHRoaXMgaXMgdXNlZCBsYXRlciB0byBwb3RlbnRpYWxseSBjb252ZXJ0IGFueSBkaWZmZXJlbmNlIHNtYWxsZXIgdGhhbiB0aGUgc21hbGxlc3QgaGlnaGVyIG9yZGVyIHVuaXRcbiAgICAgaW50byBhIGZyYWN0aW9uIG9mIHRoYXQgc21hbGxlc3QgaGlnaGVyIG9yZGVyIHVuaXRcbiAgKi9cbiAgZm9yIChjb25zdCBbdW5pdCwgZGlmZmVyXSBvZiBkaWZmZXJzKSB7XG4gICAgaWYgKHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMCkge1xuICAgICAgbG93ZXN0T3JkZXIgPSB1bml0O1xuXG4gICAgICByZXN1bHRzW3VuaXRdID0gZGlmZmVyKGN1cnNvciwgbGF0ZXIpO1xuICAgICAgaGlnaFdhdGVyID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuXG4gICAgICBpZiAoaGlnaFdhdGVyID4gbGF0ZXIpIHtcbiAgICAgICAgLy8gd2Ugb3ZlcnNob3QgdGhlIGVuZCBwb2ludCwgYmFja3RyYWNrIGN1cnNvciBieSAxXG4gICAgICAgIHJlc3VsdHNbdW5pdF0tLTtcbiAgICAgICAgY3Vyc29yID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuXG4gICAgICAgIC8vIGlmIHdlIGFyZSBzdGlsbCBvdmVyc2hvb3Rpbmcgbm93LCB3ZSBuZWVkIHRvIGJhY2t0cmFjayBhZ2FpblxuICAgICAgICAvLyB0aGlzIGhhcHBlbnMgaW4gY2VydGFpbiBzaXR1YXRpb25zIHdoZW4gZGlmZmluZyB0aW1lcyBpbiBkaWZmZXJlbnQgem9uZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhpcyBjYWxjdWxhdGlvbiBpZ25vcmVzIHRpbWUgem9uZXNcbiAgICAgICAgaWYgKGN1cnNvciA+IGxhdGVyKSB7XG4gICAgICAgICAgLy8ga2VlcCB0aGUgXCJvdmVyc2hvdCBieSAxXCIgYXJvdW5kIGFzIGhpZ2hXYXRlclxuICAgICAgICAgIGhpZ2hXYXRlciA9IGN1cnNvcjtcbiAgICAgICAgICAvLyBiYWNrdHJhY2sgY3Vyc29yIGJ5IDFcbiAgICAgICAgICByZXN1bHRzW3VuaXRdLS07XG4gICAgICAgICAgY3Vyc29yID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSBoaWdoV2F0ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBvcHRzKSB7XG4gIGxldCBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXSA9IGhpZ2hPcmRlckRpZmZzKGVhcmxpZXIsIGxhdGVyLCB1bml0cyk7XG5cbiAgY29uc3QgcmVtYWluaW5nTWlsbGlzID0gbGF0ZXIgLSBjdXJzb3I7XG5cbiAgY29uc3QgbG93ZXJPcmRlclVuaXRzID0gdW5pdHMuZmlsdGVyKFxuICAgICh1KSA9PiBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdLmluZGV4T2YodSkgPj0gMFxuICApO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGhpZ2hXYXRlciA8IGxhdGVyKSB7XG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cyh7IFtsb3dlc3RPcmRlcl06IDEgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7XG4gICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChyZXN1bHRzLCBvcHRzKTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhyZW1haW5pbmdNaWxsaXMsIG9wdHMpXG4gICAgICAuc2hpZnRUbyguLi5sb3dlck9yZGVyVW5pdHMpXG4gICAgICAucGx1cyhkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG59XG4iLCJjb25zdCBudW1iZXJpbmdTeXN0ZW1zID0ge1xuICBhcmFiOiBcIltcXHUwNjYwLVxcdTA2NjldXCIsXG4gIGFyYWJleHQ6IFwiW1xcdTA2RjAtXFx1MDZGOV1cIixcbiAgYmFsaTogXCJbXFx1MUI1MC1cXHUxQjU5XVwiLFxuICBiZW5nOiBcIltcXHUwOUU2LVxcdTA5RUZdXCIsXG4gIGRldmE6IFwiW1xcdTA5NjYtXFx1MDk2Rl1cIixcbiAgZnVsbHdpZGU6IFwiW1xcdUZGMTAtXFx1RkYxOV1cIixcbiAgZ3VqcjogXCJbXFx1MEFFNi1cXHUwQUVGXVwiLFxuICBoYW5pZGVjOiBcIlvjgId85LiAfOS6jHzkuIl85ZubfOS6lHzlha185LiDfOWFq3zkuZ1dXCIsXG4gIGtobXI6IFwiW1xcdTE3RTAtXFx1MTdFOV1cIixcbiAga25kYTogXCJbXFx1MENFNi1cXHUwQ0VGXVwiLFxuICBsYW9vOiBcIltcXHUwRUQwLVxcdTBFRDldXCIsXG4gIGxpbWI6IFwiW1xcdTE5NDYtXFx1MTk0Rl1cIixcbiAgbWx5bTogXCJbXFx1MEQ2Ni1cXHUwRDZGXVwiLFxuICBtb25nOiBcIltcXHUxODEwLVxcdTE4MTldXCIsXG4gIG15bXI6IFwiW1xcdTEwNDAtXFx1MTA0OV1cIixcbiAgb3J5YTogXCJbXFx1MEI2Ni1cXHUwQjZGXVwiLFxuICB0YW1sZGVjOiBcIltcXHUwQkU2LVxcdTBCRUZdXCIsXG4gIHRlbHU6IFwiW1xcdTBDNjYtXFx1MEM2Rl1cIixcbiAgdGhhaTogXCJbXFx1MEU1MC1cXHUwRTU5XVwiLFxuICB0aWJ0OiBcIltcXHUwRjIwLVxcdTBGMjldXCIsXG4gIGxhdG46IFwiXFxcXGRcIixcbn07XG5cbmNvbnN0IG51bWJlcmluZ1N5c3RlbXNVVEYxNiA9IHtcbiAgYXJhYjogWzE2MzIsIDE2NDFdLFxuICBhcmFiZXh0OiBbMTc3NiwgMTc4NV0sXG4gIGJhbGk6IFs2OTkyLCA3MDAxXSxcbiAgYmVuZzogWzI1MzQsIDI1NDNdLFxuICBkZXZhOiBbMjQwNiwgMjQxNV0sXG4gIGZ1bGx3aWRlOiBbNjUyOTYsIDY1MzAzXSxcbiAgZ3VqcjogWzI3OTAsIDI3OTldLFxuICBraG1yOiBbNjExMiwgNjEyMV0sXG4gIGtuZGE6IFszMzAyLCAzMzExXSxcbiAgbGFvbzogWzM3OTIsIDM4MDFdLFxuICBsaW1iOiBbNjQ3MCwgNjQ3OV0sXG4gIG1seW06IFszNDMwLCAzNDM5XSxcbiAgbW9uZzogWzYxNjAsIDYxNjldLFxuICBteW1yOiBbNDE2MCwgNDE2OV0sXG4gIG9yeWE6IFsyOTE4LCAyOTI3XSxcbiAgdGFtbGRlYzogWzMwNDYsIDMwNTVdLFxuICB0ZWx1OiBbMzE3NCwgMzE4M10sXG4gIHRoYWk6IFszNjY0LCAzNjczXSxcbiAgdGlidDogWzM4NzIsIDM4ODFdLFxufTtcblxuY29uc3QgaGFuaWRlY0NoYXJzID0gbnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjLnJlcGxhY2UoL1tcXFt8XFxdXS9nLCBcIlwiKS5zcGxpdChcIlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGlnaXRzKHN0cikge1xuICBsZXQgdmFsdWUgPSBwYXJzZUludChzdHIsIDEwKTtcbiAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgIHZhbHVlID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICBpZiAoc3RyW2ldLnNlYXJjaChudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSArPSBoYW5pZGVjQ2hhcnMuaW5kZXhPZihzdHJbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbnVtYmVyaW5nU3lzdGVtc1VURjE2KSB7XG4gICAgICAgICAgY29uc3QgW21pbiwgbWF4XSA9IG51bWJlcmluZ1N5c3RlbXNVVEYxNltrZXldO1xuICAgICAgICAgIGlmIChjb2RlID49IG1pbiAmJiBjb2RlIDw9IG1heCkge1xuICAgICAgICAgICAgdmFsdWUgKz0gY29kZSAtIG1pbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWdpdFJlZ2V4KHsgbnVtYmVyaW5nU3lzdGVtIH0sIGFwcGVuZCA9IFwiXCIpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7bnVtYmVyaW5nU3lzdGVtc1tudW1iZXJpbmdTeXN0ZW0gfHwgXCJsYXRuXCJdfSR7YXBwZW5kfWApO1xufVxuIiwiaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9mb3JtYXRzLmpzXCI7XG5pbXBvcnQgeyBwaWNrIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIE9iamVjdC5rZXlzKG9iaikuc29ydCgpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBjb25zdCBtb250aHNMb25nID0gW1xuICBcIkphbnVhcnlcIixcbiAgXCJGZWJydWFyeVwiLFxuICBcIk1hcmNoXCIsXG4gIFwiQXByaWxcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5lXCIsXG4gIFwiSnVseVwiLFxuICBcIkF1Z3VzdFwiLFxuICBcIlNlcHRlbWJlclwiLFxuICBcIk9jdG9iZXJcIixcbiAgXCJOb3ZlbWJlclwiLFxuICBcIkRlY2VtYmVyXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgbW9udGhzU2hvcnQgPSBbXG4gIFwiSmFuXCIsXG4gIFwiRmViXCIsXG4gIFwiTWFyXCIsXG4gIFwiQXByXCIsXG4gIFwiTWF5XCIsXG4gIFwiSnVuXCIsXG4gIFwiSnVsXCIsXG4gIFwiQXVnXCIsXG4gIFwiU2VwXCIsXG4gIFwiT2N0XCIsXG4gIFwiTm92XCIsXG4gIFwiRGVjXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgbW9udGhzTmFycm93ID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzU2hvcnRdO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gWy4uLm1vbnRoc0xvbmddO1xuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCJdO1xuICAgIGNhc2UgXCIyLWRpZ2l0XCI6XG4gICAgICByZXR1cm4gW1wiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLCBcIjA5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNMb25nID0gW1xuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG4gIFwiU3VuZGF5XCIsXG5dO1xuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNTaG9ydCA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzTmFycm93ID0gW1wiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCIsIFwiU1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c0xvbmddO1xuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lcmlkaWVtcyA9IFtcIkFNXCIsIFwiUE1cIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzTG9uZyA9IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNTaG9ydCA9IFtcIkJDXCIsIFwiQURcIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzTmFycm93ID0gW1wiQlwiLCBcIkFcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBlcmFzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc05hcnJvd107XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gWy4uLmVyYXNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc0xvbmddO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkge1xuICByZXR1cm4gbWVyaWRpZW1zW2R0LmhvdXIgPCAxMiA/IDAgOiAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gbW9udGhzKGxlbmd0aClbZHQubW9udGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGVyYXMobGVuZ3RoKVtkdC55ZWFyIDwgMCA/IDAgOiAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYyA9IFwiYWx3YXlzXCIsIG5hcnJvdyA9IGZhbHNlKSB7XG4gIGNvbnN0IHVuaXRzID0ge1xuICAgIHllYXJzOiBbXCJ5ZWFyXCIsIFwieXIuXCJdLFxuICAgIHF1YXJ0ZXJzOiBbXCJxdWFydGVyXCIsIFwicXRyLlwiXSxcbiAgICBtb250aHM6IFtcIm1vbnRoXCIsIFwibW8uXCJdLFxuICAgIHdlZWtzOiBbXCJ3ZWVrXCIsIFwid2suXCJdLFxuICAgIGRheXM6IFtcImRheVwiLCBcImRheVwiLCBcImRheXNcIl0sXG4gICAgaG91cnM6IFtcImhvdXJcIiwgXCJoci5cIl0sXG4gICAgbWludXRlczogW1wibWludXRlXCIsIFwibWluLlwiXSxcbiAgICBzZWNvbmRzOiBbXCJzZWNvbmRcIiwgXCJzZWMuXCJdLFxuICB9O1xuXG4gIGNvbnN0IGxhc3RhYmxlID0gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXS5pbmRleE9mKHVuaXQpID09PSAtMTtcblxuICBpZiAobnVtZXJpYyA9PT0gXCJhdXRvXCIgJiYgbGFzdGFibGUpIHtcbiAgICBjb25zdCBpc0RheSA9IHVuaXQgPT09IFwiZGF5c1wiO1xuICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b21vcnJvd1wiIDogYG5leHQgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ5ZXN0ZXJkYXlcIiA6IGBsYXN0ICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b2RheVwiIDogYHRoaXMgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgZGVmYXVsdDogLy8gZmFsbCB0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXNJblBhc3QgPSBPYmplY3QuaXMoY291bnQsIC0wKSB8fCBjb3VudCA8IDAsXG4gICAgZm10VmFsdWUgPSBNYXRoLmFicyhjb3VudCksXG4gICAgc2luZ3VsYXIgPSBmbXRWYWx1ZSA9PT0gMSxcbiAgICBsaWxVbml0cyA9IHVuaXRzW3VuaXRdLFxuICAgIGZtdFVuaXQgPSBuYXJyb3dcbiAgICAgID8gc2luZ3VsYXJcbiAgICAgICAgPyBsaWxVbml0c1sxXVxuICAgICAgICA6IGxpbFVuaXRzWzJdIHx8IGxpbFVuaXRzWzFdXG4gICAgICA6IHNpbmd1bGFyXG4gICAgICA/IHVuaXRzW3VuaXRdWzBdXG4gICAgICA6IHVuaXQ7XG4gIHJldHVybiBpc0luUGFzdCA/IGAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9IGFnb2AgOiBgaW4gJHtmbXRWYWx1ZX0gJHtmbXRVbml0fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTdHJpbmcoa25vd25Gb3JtYXQpIHtcbiAgLy8gdGhlc2UgYWxsIGhhdmUgdGhlIG9mZnNldHMgcmVtb3ZlZCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYWNjZXNzIHRvIHRoZW1cbiAgLy8gd2l0aG91dCBhbGwgdGhlIGludGwgc3R1ZmYgdGhpcyBpcyBiYWNrZmlsbGluZ1xuICBjb25zdCBmaWx0ZXJlZCA9IHBpY2soa25vd25Gb3JtYXQsIFtcbiAgICAgIFwid2Vla2RheVwiLFxuICAgICAgXCJlcmFcIixcbiAgICAgIFwieWVhclwiLFxuICAgICAgXCJtb250aFwiLFxuICAgICAgXCJkYXlcIixcbiAgICAgIFwiaG91clwiLFxuICAgICAgXCJtaW51dGVcIixcbiAgICAgIFwic2Vjb25kXCIsXG4gICAgICBcInRpbWVab25lTmFtZVwiLFxuICAgICAgXCJob3VyQ3ljbGVcIixcbiAgICBdKSxcbiAgICBrZXkgPSBzdHJpbmdpZnkoZmlsdGVyZWQpLFxuICAgIGRhdGVUaW1lSHVnZSA9IFwiRUVFRSwgTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9IVUdFKTpcbiAgICAgIHJldHVybiBcIkVFRUUsIExMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1NJTVBMRSk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiSEg6bW06c3NcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0ZVTEwpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0hVR0UpOlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBkIExMTCB5eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0ZVRpbWVIdWdlO1xuICB9XG59XG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3QgbiA9IFwibnVtZXJpY1wiLFxuICBzID0gXCJzaG9ydFwiLFxuICBsID0gXCJsb25nXCI7XG5cbmV4cG9ydCBjb25zdCBEQVRFX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG4iLCJpbXBvcnQgKiBhcyBFbmdsaXNoIGZyb20gXCIuL2VuZ2xpc2guanNcIjtcbmltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vZm9ybWF0cy5qc1wiO1xuaW1wb3J0IHsgcGFkU3RhcnQgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVRva2VucyhzcGxpdHMsIHRva2VuVG9TdHJpbmcpIHtcbiAgbGV0IHMgPSBcIlwiO1xuICBmb3IgKGNvbnN0IHRva2VuIG9mIHNwbGl0cykge1xuICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICBzICs9IHRva2VuLnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcyArPSB0b2tlblRvU3RyaW5nKHRva2VuLnZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzO1xufVxuXG5jb25zdCBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0ge1xuICBEOiBGb3JtYXRzLkRBVEVfU0hPUlQsXG4gIEREOiBGb3JtYXRzLkRBVEVfTUVELFxuICBEREQ6IEZvcm1hdHMuREFURV9GVUxMLFxuICBEREREOiBGb3JtYXRzLkRBVEVfSFVHRSxcbiAgdDogRm9ybWF0cy5USU1FX1NJTVBMRSxcbiAgdHQ6IEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFMsXG4gIHR0dDogRm9ybWF0cy5USU1FX1dJVEhfU0hPUlRfT0ZGU0VULFxuICB0dHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVCxcbiAgVDogRm9ybWF0cy5USU1FXzI0X1NJTVBMRSxcbiAgVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX1NFQ09ORFMsXG4gIFRUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VULFxuICBUVFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCxcbiAgZjogRm9ybWF0cy5EQVRFVElNRV9TSE9SVCxcbiAgZmY6IEZvcm1hdHMuREFURVRJTUVfTUVELFxuICBmZmY6IEZvcm1hdHMuREFURVRJTUVfRlVMTCxcbiAgZmZmZjogRm9ybWF0cy5EQVRFVElNRV9IVUdFLFxuICBGOiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyxcbiAgRkY6IEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyxcbiAgRkZGOiBGb3JtYXRzLkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTLFxuICBGRkZGOiBGb3JtYXRzLkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTLFxufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1hdHRlciB7XG4gIHN0YXRpYyBjcmVhdGUobG9jYWxlLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRm9ybWF0KGZtdCkge1xuICAgIC8vIHdoaXRlLXNwYWNlIGlzIGFsd2F5cyBjb25zaWRlcmVkIGEgbGl0ZXJhbCBpbiB1c2VyLXByb3ZpZGVkIGZvcm1hdHNcbiAgICAvLyB0aGUgXCIgXCIgdG9rZW4gaGFzIGEgc3BlY2lhbCBtZWFuaW5nIChzZWUgdW5pdEZvclRva2VuKVxuXG4gICAgbGV0IGN1cnJlbnQgPSBudWxsLFxuICAgICAgY3VycmVudEZ1bGwgPSBcIlwiLFxuICAgICAgYnJhY2tldGVkID0gZmFsc2U7XG4gICAgY29uc3Qgc3BsaXRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBmbXQuY2hhckF0KGkpO1xuICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQgfHwgL15cXHMrJC8udGVzdChjdXJyZW50RnVsbCksIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRGdWxsID0gXCJcIjtcbiAgICAgICAgYnJhY2tldGVkID0gIWJyYWNrZXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldGVkKSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2UgaWYgKGMgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RnVsbCA9IGM7XG4gICAgICAgIGN1cnJlbnQgPSBjO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCB8fCAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xuICB9XG5cbiAgc3RhdGljIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHtcbiAgICByZXR1cm4gbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBmb3JtYXRPcHRzO1xuICAgIHRoaXMubG9jID0gbG9jYWxlO1xuICAgIHRoaXMuc3lzdGVtTG9jID0gbnVsbDtcbiAgfVxuXG4gIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XG4gICAgfVxuICAgIGNvbnN0IGRmID0gdGhpcy5zeXN0ZW1Mb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfVxuXG4gIGR0Rm9ybWF0dGVyKGR0LCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5kdEZvcm1hdHRlcihkdCwgb3B0cykuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRGb3JtYXR0ZXIoZHQsIG9wdHMpLmZvcm1hdFRvUGFydHMoKTtcbiAgfVxuXG4gIGZvcm1hdEludGVydmFsKGludGVydmFsLCBvcHRzKSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGludGVydmFsLnN0YXJ0LCBvcHRzKTtcbiAgICByZXR1cm4gZGYuZHRmLmZvcm1hdFJhbmdlKGludGVydmFsLnN0YXJ0LnRvSlNEYXRlKCksIGludGVydmFsLmVuZC50b0pTRGF0ZSgpKTtcbiAgfVxuXG4gIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBvcHRzKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfVxuXG4gIG51bShuLCBwID0gMCkge1xuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0geyAuLi50aGlzLm9wdHMgfTtcblxuICAgIGlmIChwID4gMCkge1xuICAgICAgb3B0cy5wYWRUbyA9IHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9jLm51bWJlckZvcm1hdHRlcihvcHRzKS5mb3JtYXQobik7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xuICAgIGNvbnN0IGtub3duRW5nbGlzaCA9IHRoaXMubG9jLmxpc3RpbmdNb2RlKCkgPT09IFwiZW5cIixcbiAgICAgIHVzZURhdGVUaW1lRm9ybWF0dGVyID0gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgJiYgdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgIT09IFwiZ3JlZ29yeVwiLFxuICAgICAgc3RyaW5nID0gKG9wdHMsIGV4dHJhY3QpID0+IHRoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpLFxuICAgICAgZm9ybWF0T2Zmc2V0ID0gKG9wdHMpID0+IHtcbiAgICAgICAgaWYgKGR0LmlzT2Zmc2V0Rml4ZWQgJiYgZHQub2Zmc2V0ID09PSAwICYmIG9wdHMuYWxsb3daKSB7XG4gICAgICAgICAgcmV0dXJuIFwiWlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGR0LmlzVmFsaWQgPyBkdC56b25lLmZvcm1hdE9mZnNldChkdC50cywgb3B0cy5mb3JtYXQpIDogXCJcIjtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbSA9ICgpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC5tZXJpZGllbUZvckRhdGVUaW1lKGR0KVxuICAgICAgICAgIDogc3RyaW5nKHsgaG91cjogXCJudW1lcmljXCIsIGhvdXJDeWNsZTogXCJoMTJcIiB9LCBcImRheXBlcmlvZFwiKSxcbiAgICAgIG1vbnRoID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLm1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcbiAgICAgICAgICA6IHN0cmluZyhzdGFuZGFsb25lID8geyBtb250aDogbGVuZ3RoIH0gOiB7IG1vbnRoOiBsZW5ndGgsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKSxcbiAgICAgIHdlZWtkYXkgPSAobGVuZ3RoLCBzdGFuZGFsb25lKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gud2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXG4gICAgICAgICAgOiBzdHJpbmcoXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmUgPyB7IHdlZWtkYXk6IGxlbmd0aCB9IDogeyB3ZWVrZGF5OiBsZW5ndGgsIG1vbnRoOiBcImxvbmdcIiwgZGF5OiBcIm51bWVyaWNcIiB9LFxuICAgICAgICAgICAgICBcIndlZWtkYXlcIlxuICAgICAgICAgICAgKSxcbiAgICAgIG1heWJlTWFjcm8gPSAodG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKTtcbiAgICAgICAgaWYgKGZvcm1hdE9wdHMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgZm9ybWF0T3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJhID0gKGxlbmd0aCkgPT5cbiAgICAgICAga25vd25FbmdsaXNoID8gRW5nbGlzaC5lcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7IGVyYTogbGVuZ3RoIH0sIFwiZXJhXCIpLFxuICAgICAgdG9rZW5Ub1N0cmluZyA9ICh0b2tlbikgPT4ge1xuICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZTogaHR0cHM6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS9kYXRlLXRpbWUtc3ltYm9sc1xuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgLy8gbXNcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQsIDMpO1xuICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgICAvLyBmcmFjdGlvbmFsIHNlY29uZHNcbiAgICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTApLCAyKTtcbiAgICAgICAgICBjYXNlIFwidXV1XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwMCkpO1xuICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbnV0ZSk7XG4gICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlLCAyKTtcbiAgICAgICAgICAvLyBob3Vyc1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIpO1xuICAgICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAgIC8vIG9mZnNldFxuICAgICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICs2XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcIm5hcnJvd1wiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjowMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJzaG9ydFwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArMDYwMFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJ0ZWNoaWVcIiwgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVTVFxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6IFwic2hvcnRcIiwgbG9jYWxlOiB0aGlzLmxvYy5sb2NhbGUgfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEVhc3Rlcm4gU3RhbmRhcmQgVGltZVxuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6IFwibG9uZ1wiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICAvLyB6b25lXG4gICAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICAgICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xuICAgICAgICAgIC8vIG1lcmlkaWVtc1xuICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICByZXR1cm4gbWVyaWRpZW0oKTtcbiAgICAgICAgICAvLyBkYXRlc1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyBkYXk6IFwibnVtZXJpY1wiIH0sIFwiZGF5XCIpIDogdGhpcy5udW0oZHQuZGF5KTtcbiAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCIyLWRpZ2l0XCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXksIDIpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gc3RhbmRhbG9uZVxuICAgICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcbiAgICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcImxvbmdcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwibnVtZXJpY1wiLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICAgIHJldHVybiBtb250aChcImxvbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgICAvLyBtb250aHMgLSBmb3JtYXRcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIjItZGlnaXRcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgsIDIpO1xuICAgICAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgICAgLy8geWVhcnNcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIikgOiB0aGlzLm51bShkdC55ZWFyKTtcbiAgICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwiMi1kaWdpdFwiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDQpO1xuICAgICAgICAgIGNhc2UgXCJ5eXl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLCA2KTtcbiAgICAgICAgICAvLyBlcmFzXG4gICAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQURcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJzaG9ydFwiKTtcbiAgICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgQW5ubyBEb21pbmlcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJsb25nXCIpO1xuICAgICAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICAgICAgcmV0dXJuIGVyYShcIm5hcnJvd1wiKTtcbiAgICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyKTtcbiAgICAgICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwpO1xuICAgICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsLCAzKTtcbiAgICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlcik7XG4gICAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlciwgMik7XG4gICAgICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0LnRzIC8gMTAwMCkpO1xuICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQudHMpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbWF5YmVNYWNybyh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfVxuXG4gIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkge1xuICAgIGNvbnN0IHRva2VuVG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJkYXlcIjtcbiAgICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwid2Vla1wiO1xuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtb250aFwiO1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5Ub1N0cmluZyA9IChsaWxkdXIpID0+ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKFxuICAgICAgICAoZm91bmQsIHsgbGl0ZXJhbCwgdmFsIH0pID0+IChsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKSksXG4gICAgICAgIFtdXG4gICAgICApLFxuICAgICAgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8oLi4ucmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoKHQpID0+IHQpKTtcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZCB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLmV4cGxhbmF0aW9uID0gZXhwbGFuYXRpb247XG4gIH1cblxuICB0b01lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnJlYXNvbn06ICR7dGhpcy5leHBsYW5hdGlvbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYWRTdGFydCwgcm91bmRUbywgaGFzUmVsYXRpdmUsIGZvcm1hdE9mZnNldCB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuXG4vLyB0b2RvIC0gcmVtYXAgY2FjaGluZ1xuXG5sZXQgaW50bExGQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZExGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGR0ZiA9IGludGxMRkNhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuTGlzdEZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxMRkNhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxubGV0IGludGxEVENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWREVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgZHRmID0gaW50bERUQ2FjaGVba2V5XTtcbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxubGV0IGludGxOdW1DYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkSU5GKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGluZiA9IGludGxOdW1DYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBpbnRsUmVsQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZFJURihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCB7IGJhc2UsIC4uLmNhY2hlS2V5T3B0cyB9ID0gb3B0czsgLy8gZXhjbHVkZSBgYmFzZWAgZnJvbSB0aGUgb3B0aW9uc1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgbGV0IGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxSZWxDYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGVTdHIpIHtcbiAgLy8gSSByZWFsbHkgd2FudCB0byBhdm9pZCB3cml0aW5nIGEgQkNQIDQ3IHBhcnNlclxuICAvLyBzZWUsIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9iY3AtNDdcbiAgLy8gSW5zdGVhZCwgd2UnbGwgZG8gdGhpczpcblxuICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lXG4gIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZ1xuICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXVcblxuICAvLyBwcml2YXRlIHN1YnRhZ3MgYW5kIHVuaWNvZGUgc3VidGFncyBoYXZlIG9yZGVyaW5nIHJlcXVpcmVtZW50cyxcbiAgLy8gYW5kIHdlJ3JlIG5vdCBwcm9wZXJseSBwYXJzaW5nIHRoaXMsIHNvIGp1c3Qgc3RyaXAgb3V0IHRoZVxuICAvLyBwcml2YXRlIG9uZXMgaWYgdGhleSBleGlzdC5cbiAgY29uc3QgeEluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCIteC1cIik7XG4gIGlmICh4SW5kZXggIT09IC0xKSB7XG4gICAgbG9jYWxlU3RyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB4SW5kZXgpO1xuICB9XG5cbiAgY29uc3QgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCItdS1cIik7XG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIGxldCBvcHRpb25zO1xuICAgIGxldCBzZWxlY3RlZFN0cjtcbiAgICB0cnkge1xuICAgICAgb3B0aW9ucyA9IGdldENhY2hlZERURihsb2NhbGVTdHIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgc2VsZWN0ZWRTdHIgPSBsb2NhbGVTdHI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3Qgc21hbGxlciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgdUluZGV4KTtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYoc21hbGxlcikucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgICBzZWxlY3RlZFN0ciA9IHNtYWxsZXI7XG4gICAgfVxuXG4gICAgY29uc3QgeyBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiBbc2VsZWN0ZWRTdHIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBpZiAoIWxvY2FsZVN0ci5pbmNsdWRlcyhcIi11LVwiKSkge1xuICAgICAgbG9jYWxlU3RyICs9IFwiLXVcIjtcbiAgICB9XG5cbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgIGxvY2FsZVN0ciArPSBgLWNhLSR7b3V0cHV0Q2FsZW5kYXJ9YDtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gYC1udS0ke251bWJlcmluZ1N5c3RlbX1gO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsb2NhbGVTdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgIGNvbnN0IGR0ID0gRGF0ZVRpbWUudXRjKDIwMDksIGksIDEpO1xuICAgIG1zLnB1c2goZihkdCkpO1xuICB9XG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xuICBjb25zdCBtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMgKyBpKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZW5nbGlzaEZuLCBpbnRsRm4pIHtcbiAgY29uc3QgbW9kZSA9IGxvYy5saXN0aW5nTW9kZSgpO1xuXG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBsb2MubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIiB8fFxuICAgICAgIWxvYy5sb2NhbGUgfHxcbiAgICAgIGxvYy5sb2NhbGUuc3RhcnRzV2l0aChcImVuXCIpIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2MuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIlxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlOdW1iZXJGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IHBhZFRvLCBmbG9vciwgLi4ub3RoZXJPcHRzIH0gPSBvcHRzO1xuXG4gICAgaWYgKCFmb3JjZVNpbXBsZSB8fCBPYmplY3Qua2V5cyhvdGhlck9wdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGludGxPcHRzID0geyB1c2VHcm91cGluZzogZmFsc2UsIC4uLm9wdHMgfTtcbiAgICAgIGlmIChvcHRzLnBhZFRvID4gMCkgaW50bE9wdHMubWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRzLnBhZFRvO1xuICAgICAgdGhpcy5pbmYgPSBnZXRDYWNoZWRJTkYoaW50bCwgaW50bE9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogaTtcbiAgICAgIHJldHVybiB0aGlzLmluZi5mb3JtYXQoZml4ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0byBtYXRjaCB0aGUgYnJvd3NlcidzIG51bWJlcmZvcm1hdHRlciBkZWZhdWx0c1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG4gICAgICByZXR1cm4gcGFkU3RhcnQoZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgUG9seURhdGVGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkdCwgaW50bCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5vcmlnaW5hbFpvbmUgPSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgeiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVab25lKSB7XG4gICAgICAvLyBEb24ndCBhcHBseSBhbnkgd29ya2Fyb3VuZHMgaWYgYSB0aW1lWm9uZSBpcyBleHBsaWNpdGx5IHByb3ZpZGVkIGluIG9wdHNcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAvLyBVVEMtOCBvciBFdGMvVVRDLTggYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YSwgb25seSBFdGMvR01UKzggYW5kIHRoZSBsaWtlLlxuICAgICAgLy8gVGhhdCBpcyB3aHkgZml4ZWQtb2Zmc2V0IFRaIGlzIHNldCB0byB0aGF0IHVubGVzcyBpdCBpczpcbiAgICAgIC8vIDEuIFJlcHJlc2VudGluZyBvZmZzZXQgMCB3aGVuIFVUQyBpcyB1c2VkIHRvIG1haW50YWluIHByZXZpb3VzIGJlaGF2aW9yIGFuZCBkb2VzIG5vdCBiZWNvbWUgR01ULlxuICAgICAgLy8gMi4gVW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXI6XG4gICAgICAvLyAgICAtIHNvbWUgZG8gbm90IHN1cHBvcnQgRXRjL1xuICAgICAgLy8gICAgLSA8IEV0Yy9HTVQtMTQsID4gRXRjL0dNVCsxMiwgYW5kIDMwLW1pbnV0ZSBvciA0NS1taW51dGUgb2Zmc2V0cyBhcmUgbm90IHBhcnQgb2YgdHpkYXRhXG4gICAgICBjb25zdCBnbXRPZmZzZXQgPSAtMSAqIChkdC5vZmZzZXQgLyA2MCk7XG4gICAgICBjb25zdCBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyBgRXRjL0dNVCske2dtdE9mZnNldH1gIDogYEV0Yy9HTVQke2dtdE9mZnNldH1gO1xuICAgICAgaWYgKGR0Lm9mZnNldCAhPT0gMCAmJiBJQU5BWm9uZS5jcmVhdGUob2Zmc2V0WikudmFsaWQpIHtcbiAgICAgICAgeiA9IG9mZnNldFo7XG4gICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBhbGwgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjLys0OjMwIGFyZSBwcmVzZW50IGluIHR6ZGF0YSBzb1xuICAgICAgICAvLyB3ZSBtYW51YWxseSBhcHBseSB0aGUgb2Zmc2V0IGFuZCBzdWJzdGl0dXRlIHRoZSB6b25lIGFzIG5lZWRlZC5cbiAgICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICAgIHRoaXMuZHQgPSBkdC5vZmZzZXQgPT09IDAgPyBkdCA6IGR0LnNldFpvbmUoXCJVVENcIikucGx1cyh7IG1pbnV0ZXM6IGR0Lm9mZnNldCB9KTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFpvbmUgPSBkdC56b25lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSBcInN5c3RlbVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwiaWFuYVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDdXN0b20gem9uZXMgY2FuIGhhdmUgYW55IG9mZnNldCAvIG9mZnNldE5hbWUgc28gd2UganVzdCBtYW51YWxseVxuICAgICAgLy8gYXBwbHkgdGhlIG9mZnNldCBhbmQgc3Vic3RpdHV0ZSB0aGUgem9uZSBhcyBuZWVkZWQuXG4gICAgICB6ID0gXCJVVENcIjtcbiAgICAgIHRoaXMuZHQgPSBkdC5zZXRab25lKFwiVVRDXCIpLnBsdXMoeyBtaW51dGVzOiBkdC5vZmZzZXQgfSk7XG4gICAgICB0aGlzLm9yaWdpbmFsWm9uZSA9IGR0LnpvbmU7XG4gICAgfVxuXG4gICAgY29uc3QgaW50bE9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xuICAgIGludGxPcHRzLnRpbWVab25lID0gaW50bE9wdHMudGltZVpvbmUgfHwgejtcbiAgICB0aGlzLmR0ZiA9IGdldENhY2hlZERURihpbnRsLCBpbnRsT3B0cyk7XG4gIH1cblxuICBmb3JtYXQoKSB7XG4gICAgaWYgKHRoaXMub3JpZ2luYWxab25lKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIHRvIHN1YnN0aXR1dGUgaW4gdGhlIGFjdHVhbCB6b25lIG5hbWUsIHdlIGhhdmUgdG8gdXNlXG4gICAgICAvLyBmb3JtYXRUb1BhcnRzIHNvIHRoYXQgdGhlIHRpbWV6b25lIGNhbiBiZSByZXBsYWNlZC5cbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRvUGFydHMoKVxuICAgICAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdCh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICB9XG5cbiAgZm9ybWF0VG9QYXJ0cygpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZHRmLmZvcm1hdFRvUGFydHModGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgICBpZiAodGhpcy5vcmlnaW5hbFpvbmUpIHtcbiAgICAgIHJldHVybiBwYXJ0cy5tYXAoKHBhcnQpID0+IHtcbiAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gXCJ0aW1lWm9uZU5hbWVcIikge1xuICAgICAgICAgIGNvbnN0IG9mZnNldE5hbWUgPSB0aGlzLm9yaWdpbmFsWm9uZS5vZmZzZXROYW1lKHRoaXMuZHQudHMsIHtcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5kdC5sb2NhbGUsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMub3B0cy50aW1lWm9uZU5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnBhcnQsXG4gICAgICAgICAgICB2YWx1ZTogb2Zmc2V0TmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFBvbHlSZWxGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBpc0VuZ2xpc2gsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSB7IHN0eWxlOiBcImxvbmdcIiwgLi4ub3B0cyB9O1xuICAgIGlmICghaXNFbmdsaXNoICYmIGhhc1JlbGF0aXZlKCkpIHtcbiAgICAgIHRoaXMucnRmID0gZ2V0Q2FjaGVkUlRGKGludGwsIG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChjb3VudCwgdW5pdCkge1xuICAgIGlmICh0aGlzLnJ0Zikge1xuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFbmdsaXNoLmZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxlIHtcbiAgc3RhdGljIGZyb21PcHRzKG9wdHMpIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShvcHRzLmxvY2FsZSwgb3B0cy5udW1iZXJpbmdTeXN0ZW0sIG9wdHMub3V0cHV0Q2FsZW5kYXIsIG9wdHMuZGVmYXVsdFRvRU4pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOID0gZmFsc2UpIHtcbiAgICBjb25zdCBzcGVjaWZpZWRMb2NhbGUgPSBsb2NhbGUgfHwgU2V0dGluZ3MuZGVmYXVsdExvY2FsZTtcbiAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgIGNvbnN0IGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpO1xuICAgIGNvbnN0IG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICBjb25zdCBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuICAgIGludGxEVENhY2hlID0ge307XG4gICAgaW50bE51bUNhY2hlID0ge307XG4gICAgaW50bFJlbENhY2hlID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdCh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICBjb25zdCBbcGFyc2VkTG9jYWxlLCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0sIHBhcnNlZE91dHB1dENhbGVuZGFyXSA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSk7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XG5cbiAgICB0aGlzLndlZWtkYXlzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcblxuICAgIHRoaXMuc3BlY2lmaWVkTG9jYWxlID0gc3BlY2lmaWVkTG9jYWxlO1xuICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGZhc3ROdW1iZXJzKCkge1xuICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICB9XG5cbiAgbGlzdGluZ01vZGUoKSB7XG4gICAgY29uc3QgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKTtcbiAgICBjb25zdCBoYXNOb1dlaXJkbmVzcyA9XG4gICAgICAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiKSAmJlxuICAgICAgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuICAgIHJldHVybiBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MgPyBcImVuXCIgOiBcImludGxcIjtcbiAgfVxuXG4gIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoXG4gICAgICAgIGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLFxuICAgICAgICBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlZGVmYXVsdFRvRU4oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlZGVmYXVsdFRvU3lzdGVtKGFsdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IGZhbHNlIH0pO1xuICB9XG5cbiAgbW9udGhzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgRW5nbGlzaC5tb250aHMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXQgPyB7IG1vbnRoOiBsZW5ndGgsIGRheTogXCJudW1lcmljXCIgfSA6IHsgbW9udGg6IGxlbmd0aCB9LFxuICAgICAgICBmb3JtYXRTdHIgPSBmb3JtYXQgPyBcImZvcm1hdFwiIDogXCJzdGFuZGFsb25lXCI7XG4gICAgICBpZiAoIXRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwTW9udGhzKChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIm1vbnRoXCIpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIHdlZWtkYXlzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgRW5nbGlzaC53ZWVrZGF5cywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdFxuICAgICAgICAgID8geyB3ZWVrZGF5OiBsZW5ndGgsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfVxuICAgICAgICAgIDogeyB3ZWVrZGF5OiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cygoZHQpID0+XG4gICAgICAgICAgdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIndlZWtkYXlcIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyaWRpZW1zKCkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYoXG4gICAgICB0aGlzLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgKCkgPT4gRW5nbGlzaC5tZXJpZGllbXMsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXG4gICAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci5cbiAgICAgICAgaWYgKCF0aGlzLm1lcmlkaWVtQ2FjaGUpIHtcbiAgICAgICAgICBjb25zdCBpbnRsID0geyBob3VyOiBcIm51bWVyaWNcIiwgaG91ckN5Y2xlOiBcImgxMlwiIH07XG4gICAgICAgICAgdGhpcy5tZXJpZGllbUNhY2hlID0gW0RhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDkpLCBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCAxOSldLm1hcChcbiAgICAgICAgICAgIChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcImRheXBlcmlvZFwiKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tZXJpZGllbUNhY2hlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBlcmFzKGxlbmd0aCkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBFbmdsaXNoLmVyYXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSB7IGVyYTogbGVuZ3RoIH07XG5cbiAgICAgIC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cbiAgICAgIGlmICghdGhpcy5lcmFDYWNoZVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoKGR0KSA9PlxuICAgICAgICAgIHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJlcmFcIilcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4dHJhY3QoZHQsIGludGxPcHRzLCBmaWVsZCkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5kdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpLFxuICAgICAgcmVzdWx0cyA9IGRmLmZvcm1hdFRvUGFydHMoKSxcbiAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZmllbGQpO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIG51bWJlckZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICAvLyB0aGlzIGZvcmNlc2ltcGxlIG9wdGlvbiBpcyBuZXZlciB1c2VkICh0aGUgb25seSBjYWxsZXIgc2hvcnQtY2lyY3VpdHMgb24gaXQsIGJ1dCBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSlcbiAgICAvLyAoaW4gY29udHJhc3QsIHRoZSByZXN0IG9mIHRoZSBjb25kaXRpb24gaXMgdXNlZCBoZWF2aWx5KVxuICAgIHJldHVybiBuZXcgUG9seU51bWJlckZvcm1hdHRlcih0aGlzLmludGwsIG9wdHMuZm9yY2VTaW1wbGUgfHwgdGhpcy5mYXN0TnVtYmVycywgb3B0cyk7XG4gIH1cblxuICBkdEZvcm1hdHRlcihkdCwgaW50bE9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seURhdGVGb3JtYXR0ZXIoZHQsIHRoaXMuaW50bCwgaW50bE9wdHMpO1xuICB9XG5cbiAgcmVsRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seVJlbEZvcm1hdHRlcih0aGlzLmludGwsIHRoaXMuaXNFbmdsaXNoKCksIG9wdHMpO1xuICB9XG5cbiAgbGlzdEZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICByZXR1cm4gZ2V0Q2FjaGVkTEYodGhpcy5pbnRsLCBvcHRzKTtcbiAgfVxuXG4gIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fFxuICAgICAgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbi11c1wiIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmludGwpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZS5zdGFydHNXaXRoKFwiZW4tdXNcIilcbiAgICApO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBvdGhlci5sb2NhbGUgJiZcbiAgICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiZcbiAgICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG90aGVyLm91dHB1dENhbGVuZGFyXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdW50cnVuY2F0ZVllYXIsXG4gIHNpZ25lZE9mZnNldCxcbiAgcGFyc2VJbnRlZ2VyLFxuICBwYXJzZU1pbGxpcyxcbiAgaXNVbmRlZmluZWQsXG4gIHBhcnNlRmxvYXRpbmcsXG59IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4uL3pvbmVzL0lBTkFab25lLmpzXCI7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZvciB3ZWxsLXNwZWNpZmllZCBmb3JtYXRzLiBIZXJlJ3MgaG93IGl0IHdvcmtzOlxuICogVHdvIHRoaW5ncyBnbyBpbnRvIHBhcnNpbmc6IGEgcmVnZXggdG8gbWF0Y2ggd2l0aCBhbmQgYW4gZXh0cmFjdG9yIHRvIHRha2UgYXBhcnQgdGhlIGdyb3VwcyBpbiB0aGUgbWF0Y2guXG4gKiBBbiBleHRyYWN0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZWdleCBtYXRjaCBhcnJheSBhbmQgcmV0dXJucyBhIHsgeWVhcjogLi4uLCBtb250aDogLi4uIH0gb2JqZWN0XG4gKiBwYXJzZSgpIGRvZXMgdGhlIHdvcmsgb2YgZXhlY3V0aW5nIHRoZSByZWdleCBhbmQgYXBwbHlpbmcgdGhlIGV4dHJhY3Rvci4gSXQgdGFrZXMgbXVsdGlwbGUgcmVnZXgvZXh0cmFjdG9yIHBhaXJzIHRvIHRyeSBpbiBzZXF1ZW5jZS5cbiAqIEV4dHJhY3RvcnMgY2FuIHRha2UgYSBcImN1cnNvclwiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLlxuICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy5cbiAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLlxuICovXG5cbmNvbnN0IGlhbmFSZWdleCA9IC9bQS1aYS16XystXXsxLDI1Nn0oPzo6P1xcL1tBLVphLXowLTlfKy1dezEsMjU2fSg/OlxcL1tBLVphLXowLTlfKy1dezEsMjU2fSk/KT8vO1xuXG5mdW5jdGlvbiBjb21iaW5lUmVnZXhlcyguLi5yZWdleGVzKSB7XG4gIGNvbnN0IGZ1bGwgPSByZWdleGVzLnJlZHVjZSgoZiwgcikgPT4gZiArIHIuc291cmNlLCBcIlwiKTtcbiAgcmV0dXJuIFJlZ0V4cChgXiR7ZnVsbH0kYCk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVFeHRyYWN0b3JzKC4uLmV4dHJhY3RvcnMpIHtcbiAgcmV0dXJuIChtKSA9PlxuICAgIGV4dHJhY3RvcnNcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChbbWVyZ2VkVmFscywgbWVyZ2VkWm9uZSwgY3Vyc29yXSwgZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBbdmFsLCB6b25lLCBuZXh0XSA9IGV4KG0sIGN1cnNvcik7XG4gICAgICAgICAgcmV0dXJuIFt7IC4uLm1lcmdlZFZhbHMsIC4uLnZhbCB9LCB6b25lIHx8IG1lcmdlZFpvbmUsIG5leHRdO1xuICAgICAgICB9LFxuICAgICAgICBbe30sIG51bGwsIDFdXG4gICAgICApXG4gICAgICAuc2xpY2UoMCwgMik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHMsIC4uLnBhdHRlcm5zKSB7XG4gIGlmIChzID09IG51bGwpIHtcbiAgICByZXR1cm4gW251bGwsIG51bGxdO1xuICB9XG5cbiAgZm9yIChjb25zdCBbcmVnZXgsIGV4dHJhY3Rvcl0gb2YgcGF0dGVybnMpIHtcbiAgICBjb25zdCBtID0gcmVnZXguZXhlYyhzKTtcbiAgICBpZiAobSkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RvcihtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtudWxsLCBudWxsXTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlUGFyc2UoLi4ua2V5cykge1xuICByZXR1cm4gKG1hdGNoLCBjdXJzb3IpID0+IHtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXRba2V5c1tpXV0gPSBwYXJzZUludGVnZXIobWF0Y2hbY3Vyc29yICsgaV0pO1xuICAgIH1cbiAgICByZXR1cm4gW3JldCwgbnVsbCwgY3Vyc29yICsgaV07XG4gIH07XG59XG5cbi8vIElTTyBhbmQgU1FMIHBhcnNpbmdcbmNvbnN0IG9mZnNldFJlZ2V4ID0gLyg/OihaKXwoWystXVxcZFxcZCkoPzo6PyhcXGRcXGQpKT8pLztcbmNvbnN0IGlzb0V4dGVuZGVkWm9uZSA9IGAoPzoke29mZnNldFJlZ2V4LnNvdXJjZX0/KD86XFxcXFsoJHtpYW5hUmVnZXguc291cmNlfSlcXFxcXSk/KT9gO1xuY29uc3QgaXNvVGltZUJhc2VSZWdleCA9IC8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Wy4sXShcXGR7MSwzMH0pKT8pPyk/LztcbmNvbnN0IGlzb1RpbWVSZWdleCA9IFJlZ0V4cChgJHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0ke2lzb0V4dGVuZGVkWm9uZX1gKTtcbmNvbnN0IGlzb1RpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86VCR7aXNvVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xuY29uc3QgaXNvWW1kUmVnZXggPSAvKFsrLV1cXGR7Nn18XFxkezR9KSg/Oi0/KFxcZFxcZCkoPzotPyhcXGRcXGQpKT8pPy87XG5jb25zdCBpc29XZWVrUmVnZXggPSAvKFxcZHs0fSktP1coXFxkXFxkKSg/Oi0/KFxcZCkpPy87XG5jb25zdCBpc29PcmRpbmFsUmVnZXggPSAvKFxcZHs0fSktPyhcXGR7M30pLztcbmNvbnN0IGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKFwid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla0RheVwiKTtcbmNvbnN0IGV4dHJhY3RJU09PcmRpbmFsRGF0YSA9IHNpbXBsZVBhcnNlKFwieWVhclwiLCBcIm9yZGluYWxcIik7XG5jb25zdCBzcWxZbWRSZWdleCA9IC8oXFxkezR9KS0oXFxkXFxkKS0oXFxkXFxkKS87IC8vIGR1bWJlZC1kb3duIHZlcnNpb24gb2YgdGhlIElTTyBvbmVcbmNvbnN0IHNxbFRpbWVSZWdleCA9IFJlZ0V4cChcbiAgYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9ID8oPzoke29mZnNldFJlZ2V4LnNvdXJjZX18KCR7aWFuYVJlZ2V4LnNvdXJjZX0pKT9gXG4pO1xuY29uc3Qgc3FsVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKGAoPzogJHtzcWxUaW1lUmVnZXguc291cmNlfSk/YCk7XG5cbmZ1bmN0aW9uIGludChtYXRjaCwgcG9zLCBmYWxsYmFjaykge1xuICBjb25zdCBtID0gbWF0Y2hbcG9zXTtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKG0pID8gZmFsbGJhY2sgOiBwYXJzZUludGVnZXIobSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09ZbWQobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBpdGVtID0ge1xuICAgIHllYXI6IGludChtYXRjaCwgY3Vyc29yKSxcbiAgICBtb250aDogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAxKSxcbiAgICBkYXk6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMSksXG4gIH07XG5cbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1RpbWUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBpdGVtID0ge1xuICAgIGhvdXJzOiBpbnQobWF0Y2gsIGN1cnNvciwgMCksXG4gICAgbWludXRlczogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAwKSxcbiAgICBzZWNvbmRzOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLFxuICAgIG1pbGxpc2Vjb25kczogcGFyc2VNaWxsaXMobWF0Y2hbY3Vyc29yICsgM10pLFxuICB9O1xuXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgNF07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09PZmZzZXQobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBsb2NhbCA9ICFtYXRjaFtjdXJzb3JdICYmICFtYXRjaFtjdXJzb3IgKyAxXSxcbiAgICBmdWxsT2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG1hdGNoW2N1cnNvciArIDFdLCBtYXRjaFtjdXJzb3IgKyAyXSksXG4gICAgem9uZSA9IGxvY2FsID8gbnVsbCA6IEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShmdWxsT2Zmc2V0KTtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgM107XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJQU5BWm9uZShtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IHpvbmUgPSBtYXRjaFtjdXJzb3JdID8gSUFOQVpvbmUuY3JlYXRlKG1hdGNoW2N1cnNvcl0pIDogbnVsbDtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgMV07XG59XG5cbi8vIElTTyB0aW1lIHBhcnNpbmdcblxuY29uc3QgaXNvVGltZU9ubHkgPSBSZWdFeHAoYF5UPyR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JGApO1xuXG4vLyBJU08gZHVyYXRpb24gcGFyc2luZ1xuXG5jb25zdCBpc29EdXJhdGlvbiA9XG4gIC9eLT9QKD86KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pWSk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pTSk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pVyk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pRCk/KD86VCg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUgpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSkoPzpbLixdKC0/XFxkezEsMjB9KSk/Uyk/KT8pJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09EdXJhdGlvbihtYXRjaCkge1xuICBjb25zdCBbcywgeWVhclN0ciwgbW9udGhTdHIsIHdlZWtTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIsIG1pbGxpc2Vjb25kc1N0cl0gPVxuICAgIG1hdGNoO1xuXG4gIGNvbnN0IGhhc05lZ2F0aXZlUHJlZml4ID0gc1swXSA9PT0gXCItXCI7XG4gIGNvbnN0IG5lZ2F0aXZlU2Vjb25kcyA9IHNlY29uZFN0ciAmJiBzZWNvbmRTdHJbMF0gPT09IFwiLVwiO1xuXG4gIGNvbnN0IG1heWJlTmVnYXRlID0gKG51bSwgZm9yY2UgPSBmYWxzZSkgPT5cbiAgICBudW0gIT09IHVuZGVmaW5lZCAmJiAoZm9yY2UgfHwgKG51bSAmJiBoYXNOZWdhdGl2ZVByZWZpeCkpID8gLW51bSA6IG51bTtcblxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHllYXJzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHllYXJTdHIpKSxcbiAgICAgIG1vbnRoczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtb250aFN0cikpLFxuICAgICAgd2Vla3M6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcod2Vla1N0cikpLFxuICAgICAgZGF5czogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhkYXlTdHIpKSxcbiAgICAgIGhvdXJzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGhvdXJTdHIpKSxcbiAgICAgIG1pbnV0ZXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobWludXRlU3RyKSksXG4gICAgICBzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHNlY29uZFN0ciksIHNlY29uZFN0ciA9PT0gXCItMFwiKSxcbiAgICAgIG1pbGxpc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VNaWxsaXMobWlsbGlzZWNvbmRzU3RyKSwgbmVnYXRpdmVTZWNvbmRzKSxcbiAgICB9LFxuICBdO1xufVxuXG4vLyBUaGVzZSBhcmUgYSBsaXR0bGUgYnJhaW5kZWFkLiBFRFQgKnNob3VsZCogdGVsbCB1cyB0aGF0IHdlJ3JlIGluLCBzYXksIEFtZXJpY2EvTmV3X1lvcmtcbi8vIGFuZCBub3QganVzdCB0aGF0IHdlJ3JlIGluIC0yNDAgKnJpZ2h0IG5vdyouIEJ1dCBzaW5jZSBJIGRvbid0IHRoaW5rIHRoZXNlIGFyZSB1c2VkIHRoYXQgb2Z0ZW5cbi8vIEknbSBqdXN0IGdvaW5nIHRvIGlnbm9yZSB0aGF0XG5jb25zdCBvYnNPZmZzZXRzID0ge1xuICBHTVQ6IDAsXG4gIEVEVDogLTQgKiA2MCxcbiAgRVNUOiAtNSAqIDYwLFxuICBDRFQ6IC01ICogNjAsXG4gIENTVDogLTYgKiA2MCxcbiAgTURUOiAtNiAqIDYwLFxuICBNU1Q6IC03ICogNjAsXG4gIFBEVDogLTcgKiA2MCxcbiAgUFNUOiAtOCAqIDYwLFxufTtcblxuZnVuY3Rpb24gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHllYXI6IHllYXJTdHIubGVuZ3RoID09PSAyID8gdW50cnVuY2F0ZVllYXIocGFyc2VJbnRlZ2VyKHllYXJTdHIpKSA6IHBhcnNlSW50ZWdlcih5ZWFyU3RyKSxcbiAgICBtb250aDogRW5nbGlzaC5tb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSArIDEsXG4gICAgZGF5OiBwYXJzZUludGVnZXIoZGF5U3RyKSxcbiAgICBob3VyOiBwYXJzZUludGVnZXIoaG91clN0ciksXG4gICAgbWludXRlOiBwYXJzZUludGVnZXIobWludXRlU3RyKSxcbiAgfTtcblxuICBpZiAoc2Vjb25kU3RyKSByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnRlZ2VyKHNlY29uZFN0cik7XG4gIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgcmVzdWx0LndlZWtkYXkgPVxuICAgICAgd2Vla2RheVN0ci5sZW5ndGggPiAzXG4gICAgICAgID8gRW5nbGlzaC53ZWVrZGF5c0xvbmcuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDFcbiAgICAgICAgOiBFbmdsaXNoLndlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDE7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBSRkMgMjgyMi81MzIyXG5jb25zdCByZmMyODIyID1cbiAgL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSxcXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KD86KFsrLV1cXGRcXGQpKFxcZFxcZCkpKSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0UkZDMjgyMihtYXRjaCkge1xuICBjb25zdCBbXG4gICAgICAsXG4gICAgICB3ZWVrZGF5U3RyLFxuICAgICAgZGF5U3RyLFxuICAgICAgbW9udGhTdHIsXG4gICAgICB5ZWFyU3RyLFxuICAgICAgaG91clN0cixcbiAgICAgIG1pbnV0ZVN0cixcbiAgICAgIHNlY29uZFN0cixcbiAgICAgIG9ic09mZnNldCxcbiAgICAgIG1pbE9mZnNldCxcbiAgICAgIG9mZkhvdXJTdHIsXG4gICAgICBvZmZNaW51dGVTdHIsXG4gICAgXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcblxuICBsZXQgb2Zmc2V0O1xuICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICB9IGVsc2UgaWYgKG1pbE9mZnNldCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7XG4gIH1cblxuICByZXR1cm4gW3Jlc3VsdCwgbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpXTtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXChbXigpXSpcXCl8W1xcblxcdF0vZywgXCIgXCIpXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCBcIiBcIilcbiAgICAudHJpbSgpO1xufVxuXG4vLyBodHRwIGRhdGVcblxuY29uc3QgcmZjMTEyMyA9XG4gICAgL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgcmZjODUwID1cbiAgICAvXihNb25kYXl8VHVlc2RheXxXZWRuZXNkYXl8VGh1cnNkYXl8RnJpZGF5fFNhdHVyZGF5fFN1bmRheSksIChcXGRcXGQpLShKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYyktKFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIGFzY2lpID1cbiAgICAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBcXGR8XFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSAoXFxkezR9KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0UkZDMTEyM09yODUwKG1hdGNoKSB7XG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIGRheVN0ciwgbW9udGhTdHIsIHllYXJTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkge1xuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgeWVhclN0cl0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5jb25zdCBpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvWW1kUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29UaW1lUmVnZXgpO1xuXG5jb25zdCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPWW1kLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuY29uc3QgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09XZWVrRGF0YSxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT09yZGluYWxEYXRhLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuY29uc3QgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcblxuLypcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXG4gICAgW2lzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXRdLFxuICAgIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZV0sXG4gICAgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUkZDMjgyMkRhdGUocykge1xuICByZXR1cm4gcGFyc2UocHJlcHJvY2Vzc1JGQzI4MjIocyksIFtyZmMyODIyLCBleHRyYWN0UkZDMjgyMl0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVFRQRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSxcbiAgICBbcmZjODUwLCBleHRyYWN0UkZDMTEyM09yODUwXSxcbiAgICBbYXNjaWksIGV4dHJhY3RBU0NJSV1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPRHVyYXRpb24ocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb0R1cmF0aW9uLCBleHRyYWN0SVNPRHVyYXRpb25dKTtcbn1cblxuY29uc3QgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09UaW1lT25seShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvVGltZU9ubHksIGV4dHJhY3RJU09UaW1lT25seV0pO1xufVxuXG5jb25zdCBzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XG5cbmNvbnN0IGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSxcbiAgICBbc3FsVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmVdXG4gICk7XG59XG4iLCJpbXBvcnQgeyBwYXJzZU1pbGxpcywgaXNVbmRlZmluZWQsIHVudHJ1bmNhdGVZZWFyLCBzaWduZWRPZmZzZXQsIGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IHsgZGlnaXRSZWdleCwgcGFyc2VEaWdpdHMgfSBmcm9tIFwiLi9kaWdpdHMuanNcIjtcbmltcG9ydCB7IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuXG5jb25zdCBNSVNTSU5HX0ZUUCA9IFwibWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydFwiO1xuXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0ID0gKGkpID0+IGkpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBwb3N0KHBhcnNlRGlnaXRzKHMpKSB9O1xufVxuXG5jb25zdCBOQlNQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuY29uc3Qgc3BhY2VPck5CU1AgPSBgWyAke05CU1B9XWA7XG5jb25zdCBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsIFwiZ1wiKTtcblxuZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHtcbiAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsXG4gIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGVcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csIFwiXFxcXC4/XCIpLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIHNwYWNlT3JOQlNQKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcbiAgICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiAoW3NdKSA9PlxuICAgICAgICBzdHJpbmdzLmZpbmRJbmRleCgoaSkgPT4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpKSArIHN0YXJ0SW5kZXgsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbLCBoLCBtXSkgPT4gc2lnbmVkT2Zmc2V0KGgsIG0pLCBncm91cHMgfTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcyB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlblxuICogQHBhcmFtIHtMb2NhbGV9IGxvY1xuICovXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICBjb25zdCBvbmUgPSBkaWdpdFJlZ2V4KGxvYyksXG4gICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezN9XCIpLFxuICAgIGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NH1cIiksXG4gICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsIFwiezEsMn1cIiksXG4gICAgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDN9XCIpLFxuICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsIFwiezEsOX1cIiksXG4gICAgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezIsNH1cIiksXG4gICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgbGl0ZXJhbCA9ICh0KSA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pLFxuICAgIHVuaXRhdGUgPSAodCkgPT4ge1xuICAgICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHQudmFsKSB7XG4gICAgICAgIC8vIGVyYVxuICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcInNob3J0XCIpLCAwKTtcbiAgICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwibG9uZ1wiKSwgMCk7XG4gICAgICAgIC8vIHllYXJzXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XG4gICAgICAgIC8vIG1vbnRoc1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSksIDEpO1xuICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCB0cnVlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBkYXRlc1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gb3JkaW5hbHNcbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgICAgLy8gdGltZVxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVUb05pbmUpO1xuICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIC8vIG1lcmlkaWVtXG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XG4gICAgICAgIC8vIHdlZWtZZWFyIChrKVxuICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgLy8gd2Vla051bWJlciAoVylcbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIHdlZWtkYXlzXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcbiAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgdHJ1ZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUpLCAxKTtcbiAgICAgICAgLy8gb2Zmc2V0L3pvbmVcbiAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoPzo6KCR7dHdvLnNvdXJjZX0pKT9gKSwgMik7XG4gICAgICAgIGNhc2UgXCJaWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSgke3R3by5zb3VyY2V9KT9gKSwgMik7XG4gICAgICAgIC8vIHdlIGRvbid0IHN1cHBvcnQgWlpaWiAoUFNUKSBvciBaWlpaWiAoUGFjaWZpYyBTdGFuZGFyZCBUaW1lKSBpbiBwYXJzaW5nXG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZVxuICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUoL1thLXpfKy0vXXsxLDI1Nn0/L2kpO1xuICAgICAgICAvLyB0aGlzIHNwZWNpYWwtY2FzZSBcInRva2VuXCIgcmVwcmVzZW50cyBhIHBsYWNlIHdoZXJlIGEgbWFjcm8tdG9rZW4gZXhwYW5kZWQgaW50byBhIHdoaXRlLXNwYWNlIGxpdGVyYWxcbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHdlIGFjY2VwdCBhbnkgbm9uLW5ld2xpbmUgd2hpdGUtc3BhY2VcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bXlxcU1xcblxccl0vKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFAsXG4gIH07XG5cbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuXG4gIHJldHVybiB1bml0O1xufVxuXG5jb25zdCBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiLFxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCIsXG4gIH0sXG4gIGRheToge1xuICAgIG51bWVyaWM6IFwiZFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImRkXCIsXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIixcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjEyOiB7XG4gICAgbnVtZXJpYzogXCJoXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiaGhcIixcbiAgfSxcbiAgaG91cjI0OiB7XG4gICAgbnVtZXJpYzogXCJIXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiSEhcIixcbiAgfSxcbiAgbWludXRlOiB7XG4gICAgbnVtZXJpYzogXCJtXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwibW1cIixcbiAgfSxcbiAgc2Vjb25kOiB7XG4gICAgbnVtZXJpYzogXCJzXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwic3NcIixcbiAgfSxcbiAgdGltZVpvbmVOYW1lOiB7XG4gICAgbG9uZzogXCJaWlpaWlwiLFxuICAgIHNob3J0OiBcIlpaWlwiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGZvcm1hdE9wdHMsIHJlc29sdmVkT3B0cykge1xuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBwYXJ0O1xuXG4gIGlmICh0eXBlID09PSBcImxpdGVyYWxcIikge1xuICAgIGNvbnN0IGlzU3BhY2UgPSAvXlxccyskLy50ZXN0KHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogIWlzU3BhY2UsXG4gICAgICB2YWw6IGlzU3BhY2UgPyBcIiBcIiA6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07XG5cbiAgLy8gVGhlIHVzZXIgbWlnaHQgaGF2ZSBleHBsaWNpdGx5IHNwZWNpZmllZCBob3VyMTIgb3IgaG91ckN5Y2xlXG4gIC8vIGlmIHNvLCByZXNwZWN0IHRoZWlyIGRlY2lzaW9uXG4gIC8vIGlmIG5vdCwgcmVmZXIgYmFjayB0byB0aGUgcmVzb2x2ZWRPcHRzLCB3aGljaCBhcmUgYmFzZWQgb24gdGhlIGxvY2FsZVxuICBsZXQgYWN0dWFsVHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlID09PSBcImhvdXJcIikge1xuICAgIGlmIChmb3JtYXRPcHRzLmhvdXIxMiAhPSBudWxsKSB7XG4gICAgICBhY3R1YWxUeXBlID0gZm9ybWF0T3B0cy5ob3VyMTIgPyBcImhvdXIxMlwiIDogXCJob3VyMjRcIjtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdE9wdHMuaG91ckN5Y2xlICE9IG51bGwpIHtcbiAgICAgIGlmIChmb3JtYXRPcHRzLmhvdXJDeWNsZSA9PT0gXCJoMTFcIiB8fCBmb3JtYXRPcHRzLmhvdXJDeWNsZSA9PT0gXCJoMTJcIikge1xuICAgICAgICBhY3R1YWxUeXBlID0gXCJob3VyMTJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdHVhbFR5cGUgPSBcImhvdXIyNFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0b2tlbnMgb25seSBkaWZmZXJlbnRpYXRlIGJldHdlZW4gMjQgaG91cnMgb3Igbm90LFxuICAgICAgLy8gc28gd2UgZG8gbm90IG5lZWQgdG8gY2hlY2sgaG91ckN5Y2xlIGhlcmUsIHdoaWNoIGlzIGxlc3Mgc3VwcG9ydGVkIGFueXdheXNcbiAgICAgIGFjdHVhbFR5cGUgPSByZXNvbHZlZE9wdHMuaG91cjEyID8gXCJob3VyMTJcIiA6IFwiaG91cjI0XCI7XG4gICAgfVxuICB9XG4gIGxldCB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFthY3R1YWxUeXBlXTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG5cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xuICBjb25zdCByZSA9IHVuaXRzLm1hcCgodSkgPT4gdS5yZWdleCkucmVkdWNlKChmLCByKSA9PiBgJHtmfSgke3Iuc291cmNlfSlgLCBcIlwiKTtcbiAgcmV0dXJuIFtgXiR7cmV9JGAsIHVuaXRzXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgY29uc3QgYWxsID0ge307XG4gICAgbGV0IG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAoY29uc3QgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICBjb25zdCBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgY29uc3QgdG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla051bWJlclwiO1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla1llYXJcIjtcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBsZXQgem9uZSA9IG51bGw7XG4gIGxldCBzcGVjaWZpY09mZnNldDtcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnopKSB7XG4gICAgem9uZSA9IElBTkFab25lLmNyZWF0ZShtYXRjaGVzLnopO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICB6b25lID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZShtYXRjaGVzLlopO1xuICAgIH1cbiAgICBzcGVjaWZpY09mZnNldCA9IG1hdGNoZXMuWjtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5yZWR1Y2UoKHIsIGspID0+IHtcbiAgICBjb25zdCBmID0gdG9GaWVsZChrKTtcbiAgICBpZiAoZikge1xuICAgICAgcltmXSA9IG1hdGNoZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gW3ZhbHMsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XTtcbn1cblxubGV0IGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcbiAgfVxuXG4gIHJldHVybiBkdW1teURhdGVUaW1lQ2FjaGU7XG59XG5cbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpO1xuXG4gIGlmICh0b2tlbnMgPT0gbnVsbCB8fCB0b2tlbnMuaW5jbHVkZXModW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRNYWNyb1Rva2Vucyh0b2tlbnMsIGxvY2FsZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi50b2tlbnMubWFwKCh0KSA9PiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKSkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICB1bml0cyA9IHRva2Vucy5tYXAoKHQpID0+IHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpKSxcbiAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoKHQpID0+IHQuaW52YWxpZFJlYXNvbik7XG5cbiAgaWYgKGRpc3F1YWxpZnlpbmdVbml0KSB7XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgaW52YWxpZFJlYXNvbjogZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvbiB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFtyZWdleFN0cmluZywgaGFuZGxlcnNdID0gYnVpbGRSZWdleCh1bml0cyksXG4gICAgICByZWdleCA9IFJlZ0V4cChyZWdleFN0cmluZywgXCJpXCIpLFxuICAgICAgW3Jhd01hdGNoZXMsIG1hdGNoZXNdID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyksXG4gICAgICBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldF0gPSBtYXRjaGVzXG4gICAgICAgID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKVxuICAgICAgICA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdO1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgcmVnZXgsIHJhd01hdGNoZXMsIG1hdGNoZXMsIHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB7IHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb24gfSA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCk7XG4gIHJldHVybiBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZFJlYXNvbl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgbG9jYWxlKSB7XG4gIGlmICghZm9ybWF0T3B0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICBjb25zdCBkZiA9IGZvcm1hdHRlci5kdEZvcm1hdHRlcihnZXREdW1teURhdGVUaW1lKCkpO1xuICBjb25zdCBwYXJ0cyA9IGRmLmZvcm1hdFRvUGFydHMoKTtcbiAgY29uc3QgcmVzb2x2ZWRPcHRzID0gZGYucmVzb2x2ZWRPcHRpb25zKCk7XG4gIHJldHVybiBwYXJ0cy5tYXAoKHApID0+IHRva2VuRm9yUGFydChwLCBmb3JtYXRPcHRzLCByZXNvbHZlZE9wdHMpKTtcbn1cbiIsIi8qXG4gIFRoaXMgaXMganVzdCBhIGp1bmsgZHJhd2VyLCBjb250YWluaW5nIGFueXRoaW5nIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNsYXNzZXMuXG4gIEJlY2F1c2UgTHV4b24gaXMgc21hbGwoaXNoKSwgdGhpcyBzaG91bGQgc3RheSBzbWFsbCBhbmQgd2Ugd29uJ3Qgd29ycnkgYWJvdXQgc3BsaXR0aW5nXG4gIGl0IHVwIGludG8sIHNheSwgcGFyc2luZ1V0aWwuanMgYW5kIGJhc2ljVXRpbC5qcyBhbmQgc28gb24uIEJ1dCB0aGV5IGFyZSBkaXZpZGVkIHVwIGJ5IGZlYXR1cmUgYXJlYS5cbiovXG5cbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5ncy5qc1wiO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuLy8gVFlQRVNcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInVuZGVmaW5lZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCIgJiYgbyAlIDEgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZShvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBEYXRlXVwiO1xufVxuXG4vLyBDQVBBQklMSVRJRVNcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1JlbGF0aXZlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB0eXBlb2YgSW50bCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhIUludGwuUmVsYXRpdmVUaW1lRm9ybWF0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIE9CSkVDVFMgQU5EIEFSUkFZU1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVBcnJheSh0aGluZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGluZykgPyB0aGluZyA6IFt0aGluZ107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiZXN0QnkoYXJyLCBieSwgY29tcGFyZSkge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGJlc3QsIG5leHQpID0+IHtcbiAgICBjb25zdCBwYWlyID0gW2J5KG5leHQpLCBuZXh0XTtcbiAgICBpZiAoIWJlc3QpIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyZShiZXN0WzBdLCBwYWlyWzBdKSA9PT0gYmVzdFswXSkge1xuICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH1cbiAgfSwgbnVsbClbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKGEsIGspID0+IHtcbiAgICBhW2tdID0gb2JqW2tdO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG4vLyBOVU1CRVJTIEFORCBTVFJJTkdTXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlZ2VyQmV0d2Vlbih0aGluZywgYm90dG9tLCB0b3ApIHtcbiAgcmV0dXJuIGlzSW50ZWdlcih0aGluZykgJiYgdGhpbmcgPj0gYm90dG9tICYmIHRoaW5nIDw9IHRvcDtcbn1cblxuLy8geCAlIG4gYnV0IHRha2VzIHRoZSBzaWduIG9mIG4gaW5zdGVhZCBvZiB4XG5leHBvcnQgZnVuY3Rpb24gZmxvb3JNb2QoeCwgbikge1xuICByZXR1cm4geCAtIG4gKiBNYXRoLmZsb29yKHggLyBuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0YXJ0KGlucHV0LCBuID0gMikge1xuICBjb25zdCBpc05lZyA9IGlucHV0IDwgMDtcbiAgbGV0IHBhZGRlZDtcbiAgaWYgKGlzTmVnKSB7XG4gICAgcGFkZGVkID0gXCItXCIgKyAoXCJcIiArIC1pbnB1dCkucGFkU3RhcnQobiwgXCIwXCIpO1xuICB9IGVsc2Uge1xuICAgIHBhZGRlZCA9IChcIlwiICsgaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfVxuICByZXR1cm4gcGFkZGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLCAxMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmxvYXRpbmcoc3RyaW5nKSB7XG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XG4gIC8vIFJldHVybiB1bmRlZmluZWQgKGluc3RlYWQgb2YgMCkgaW4gdGhlc2UgY2FzZXMsIHdoZXJlIGZyYWN0aW9uIGlzIG5vdCBzZXRcbiAgaWYgKGlzVW5kZWZpbmVkKGZyYWN0aW9uKSB8fCBmcmFjdGlvbiA9PT0gbnVsbCB8fCBmcmFjdGlvbiA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZiA9IHBhcnNlRmxvYXQoXCIwLlwiICsgZnJhY3Rpb24pICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihmKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUbyhudW1iZXIsIGRpZ2l0cywgdG93YXJkWmVybyA9IGZhbHNlKSB7XG4gIGNvbnN0IGZhY3RvciA9IDEwICoqIGRpZ2l0cyxcbiAgICByb3VuZGVyID0gdG93YXJkWmVybyA/IE1hdGgudHJ1bmMgOiBNYXRoLnJvdW5kO1xuICByZXR1cm4gcm91bmRlcihudW1iZXIgKiBmYWN0b3IpIC8gZmFjdG9yO1xufVxuXG4vLyBEQVRFIEJBU0lDU1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gIGNvbnN0IG1vZE1vbnRoID0gZmxvb3JNb2QobW9udGggLSAxLCAxMikgKyAxLFxuICAgIG1vZFllYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XG5cbiAgaWYgKG1vZE1vbnRoID09PSAyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIobW9kWWVhcikgPyAyOSA6IDI4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb2RNb250aCAtIDFdO1xuICB9XG59XG5cbi8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuZXhwb3J0IGZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcbiAgbGV0IGQgPSBEYXRlLlVUQyhcbiAgICBvYmoueWVhcixcbiAgICBvYmoubW9udGggLSAxLFxuICAgIG9iai5kYXksXG4gICAgb2JqLmhvdXIsXG4gICAgb2JqLm1pbnV0ZSxcbiAgICBvYmouc2Vjb25kLFxuICAgIG9iai5taWxsaXNlY29uZFxuICApO1xuXG4gIC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcbiAgICBkID0gbmV3IERhdGUoZCk7XG4gICAgLy8gc2V0IHRoZSBtb250aCBhbmQgZGF5IGFnYWluLCB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHllYXIgMjAwMCBpcyBhIGxlYXAgeWVhciwgYnV0IHllYXIgMTAwIGlzIG5vdFxuICAgIC8vIHNvIGlmIG9iai55ZWFyIGlzIGluIDk5LCBidXQgb2JqLmRheSBtYWtlcyBpdCByb2xsIG92ZXIgaW50byB5ZWFyIDEwMCxcbiAgICAvLyB0aGUgY2FsY3VsYXRpb25zIGRvbmUgYnkgRGF0ZS5VVEMgYXJlIHVzaW5nIHllYXIgMjAwMCAtIHdoaWNoIGlzIGluY29ycmVjdFxuICAgIGQuc2V0VVRDRnVsbFllYXIob2JqLnllYXIsIG9iai5tb250aCAtIDEsIG9iai5kYXkpO1xuICB9XG4gIHJldHVybiArZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcikge1xuICBjb25zdCBwMSA9XG4gICAgICAod2Vla1llYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKSAlXG4gICAgICA3LFxuICAgIGxhc3QgPSB3ZWVrWWVhciAtIDEsXG4gICAgcDIgPSAobGFzdCArIE1hdGguZmxvb3IobGFzdCAvIDQpIC0gTWF0aC5mbG9vcihsYXN0IC8gMTAwKSArIE1hdGguZmxvb3IobGFzdCAvIDQwMCkpICUgNztcbiAgcmV0dXJuIHAxID09PSA0IHx8IHAyID09PSAzID8gNTMgOiA1Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXIpIHtcbiAgaWYgKHllYXIgPiA5OSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2UgcmV0dXJuIHllYXIgPiBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xufVxuXG4vLyBQQVJTSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUgPSBudWxsKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgaW50bE9wdHMgPSB7XG4gICAgICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfTtcblxuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG5cbiAgY29uc3QgbW9kaWZpZWQgPSB7IHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0LCAuLi5pbnRsT3B0cyB9O1xuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCIpO1xuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIGxldCBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xuXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuXG4gIGNvbnN0IG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59XG5cbi8vIENPRVJDSU9OXG5cbmV4cG9ydCBmdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICBjb25zdCBub3JtYWxpemVkID0ge307XG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgLyA2MCkpLFxuICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSksXG4gICAgc2lnbiA9IG9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcblxuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9OiR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke2hvdXJzfSR7bWludXRlcyA+IDAgPyBgOiR7bWludXRlc31gIDogXCJcIn1gO1xuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfSR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFZhbHVlIGZvcm1hdCAke2Zvcm1hdH0gaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXRgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZU9iamVjdChvYmopIHtcbiAgcmV0dXJuIHBpY2sob2JqLCBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0pO1xufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4uL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJbnZhbGlkWm9uZSBmcm9tIFwiLi4vem9uZXMvaW52YWxpZFpvbmUuanNcIjtcblxuaW1wb3J0IHsgaXNVbmRlZmluZWQsIGlzU3RyaW5nLCBpc051bWJlciB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuLi96b25lcy9zeXN0ZW1ab25lLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICBsZXQgb2Zmc2V0O1xuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25zdCBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBkZWZhdWx0Wm9uZTtcbiAgICBlbHNlIGlmIChsb3dlcmVkID09PSBcImxvY2FsXCIgfHwgbG93ZXJlZCA9PT0gXCJzeXN0ZW1cIikgcmV0dXJuIFN5c3RlbVpvbmUuaW5zdGFuY2U7XG4gICAgZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIGVsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJvYmplY3RcIiAmJiBcIm9mZnNldFwiIGluIGlucHV0ICYmIHR5cGVvZiBpbnB1dC5vZmZzZXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIFRoaXMgaXMgZHVtYiwgYnV0IHRoZSBpbnN0YW5jZW9mIGNoZWNrIGFib3ZlIGRvZXNuJ3Qgc2VlbSB0byByZWFsbHkgd29ya1xuICAgIC8vIHNvIHdlJ3JlIGR1Y2sgY2hlY2tpbmcgaXRcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZVpvbmUgfSBmcm9tIFwiLi9pbXBsL3pvbmVVdGlsLmpzXCI7XG5cbmltcG9ydCB7IGhhc1JlbGF0aXZlIH0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5cbi8qKlxuICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyB7XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBoYXNEU1Qoem9uZSA9IFNldHRpbmdzLmRlZmF1bHRab25lKSB7XG4gICAgY29uc3QgcHJvdG8gPSBEYXRlVGltZS5ub3coKS5zZXRab25lKHpvbmUpLnNldCh7IG1vbnRoOiAxMiB9KTtcblxuICAgIHJldHVybiAhem9uZS5pc1VuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7IG1vbnRoOiA2IH0pLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZElBTkFab25lKHpvbmUpIHtcbiAgICByZXR1cm4gSUFOQVpvbmUuaXNWYWxpZFpvbmUoem9uZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIGlucHV0IGludG8gYSB7QGxpbmsgWm9uZX0gaW5zdGFuY2UuXG4gICAqXG4gICAqICogSWYgYGlucHV0YCBpcyBhbHJlYWR5IGEgWm9uZSBpbnN0YW5jZSwgaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgY29udGFpbmluZyBhIHZhbGlkIHRpbWUgem9uZSBuYW1lLCBhIFpvbmUgaW5zdGFuY2VcbiAgICogICB3aXRoIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIHRoYXQgZG9lc24ndCByZWZlciB0byBhIGtub3duIHRpbWUgem9uZSwgYSBab25lXG4gICAqICAgaW5zdGFuY2Ugd2l0aCB7QGxpbmsgWm9uZSNpc1ZhbGlkfSA9PSBmYWxzZSBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXQgaXMgYSBudW1iZXIsIGEgWm9uZSBpbnN0YW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgZml4ZWQgb2Zmc2V0XG4gICAqICAgaW4gbWludXRlcyBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgdGhlIGRlZmF1bHQgem9uZSBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZXxudW1iZXJ9IFtpbnB1dF0gLSB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkXG4gICAqIEByZXR1cm4ge1pvbmV9XG4gICAqL1xuICBzdGF0aWMgbm9ybWFsaXplWm9uZShpbnB1dCkge1xuICAgIHJldHVybiBub3JtYWxpemVab25lKGlucHV0LCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgbW9udGggbmFtZXMuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygpWzBdIC8vPT4gJ0phbnVhcnknXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcpWzBdIC8vPT4gJ0phbidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnKVswXSAvLz0+ICcxJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9IClbMF0gLy89PiAnamFudi4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2aEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdsb25nJywgeyBvdXRwdXRDYWxlbmRhcjogJ2lzbGFtaWMnIH0pWzBdIC8vPT4gJ1JhYmnKuyBJJ1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtb250aHMoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9IFwiZ3JlZ29yeVwiIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuXG4gICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyNtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbW9udGhzRm9ybWF0KFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSBcImdyZWdvcnlcIiB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSB3ZWVrIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWVrZGF5IHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHdlZWtkYXlzKGxlbmd0aCA9IFwibG9uZ1wiLCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCB3ZWVrIG5hbWVzLlxuICAgKiBGb3JtYXQgd2Vla2RheXMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSB3ZWVrZGF5cyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gbW9yZSBkYXRlIGluZm9ybWF0aW9uLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyN3ZWVrZGF5c31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPW51bGxdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgd2Vla2RheXNGb3JtYXQoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgbWVyaWRpZW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoKSAvLz0+IFsgJ0FNJywgJ1BNJyBdXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKHsgbG9jYWxlOiAnbXknIH0pIC8vPT4gWyAn4YCU4YC24YCU4YCA4YC6JywgJ+GAiuGAlOGAsScgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtZXJpZGllbXMoeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGVyYXMsIHN1Y2ggYXMgWydCQycsICdBRCddLiBUaGUgbG9jYWxlIGNhbiBiZSBzcGVjaWZpZWQsIGJ1dCB0aGUgY2FsZW5kYXIgc3lzdGVtIGlzIGFsd2F5cyBHcmVnb3JpYW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdzaG9ydCddIC0gdGhlIGxlbmd0aCBvZiB0aGUgZXJhIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwic2hvcnRcIiBvciBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygpIC8vPT4gWyAnQkMnLCAnQUQnIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJykgLy89PiBbICdCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycsIHsgbG9jYWxlOiAnZnInIH0pIC8vPT4gWyAnYXZhbnQgSsOpc3VzLUNocmlzdCcsICdhcHLDqHMgSsOpc3VzLUNocmlzdCcgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBlcmFzKGxlbmd0aCA9IFwic2hvcnRcIiwgeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVsbCwgXCJncmVnb3J5XCIpLmVyYXMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNldCBvZiBhdmFpbGFibGUgZmVhdHVyZXMgaW4gdGhpcyBlbnZpcm9ubWVudC5cbiAgICogU29tZSBmZWF0dXJlcyBvZiBMdXhvbiBhcmUgbm90IGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzLiBGb3IgZXhhbXBsZSwgb24gb2xkZXIgYnJvd3NlcnMsIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZyBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLlxuICAgKiBLZXlzOlxuICAgKiAqIGByZWxhdGl2ZWA6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmdcbiAgICogQGV4YW1wbGUgSW5mby5mZWF0dXJlcygpIC8vPT4geyByZWxhdGl2ZTogZmFsc2UgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZmVhdHVyZXMoKSB7XG4gICAgcmV0dXJuIHsgcmVsYXRpdmU6IGhhc1JlbGF0aXZlKCkgfTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVUaW1lLCB7IGZyaWVuZGx5RGF0ZVRpbWUgfSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yLCBJbnZhbGlkSW50ZXJ2YWxFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gXCIuL2ltcGwvZm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2ltcGwvZm9ybWF0cy5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIEludGVydmFsXCI7XG5cbi8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcbiAgICAgIFwiZW5kIGJlZm9yZSBzdGFydFwiLFxuICAgICAgYFRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PSR7c3RhcnQudG9JU08oKX0gYW5kIGVuZD0ke2VuZC50b0lTTygpfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsLmZyb21EYXRlVGltZXN9LCB7QGxpbmsgSW50ZXJ2YWwuYWZ0ZXJ9LCB7QGxpbmsgSW50ZXJ2YWwuYmVmb3JlfSwgb3Ige0BsaW5rIEludGVydmFsLmZyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgSW50ZXJ2YWwjc3RhcnR9IGFuZCB7QGxpbmsgSW50ZXJ2YWwjZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2NvdW50fSwge0BsaW5rIEludGVydmFsI2xlbmd0aH0sIHtAbGluayBJbnRlcnZhbCNoYXNTYW1lfSwge0BsaW5rIEludGVydmFsI2NvbnRhaW5zfSwge0BsaW5rIEludGVydmFsI2lzQWZ0ZXJ9LCBvciB7QGxpbmsgSW50ZXJ2YWwjaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjc2V0fSwge0BsaW5rIEludGVydmFsI3NwbGl0QXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRCeX0sIHtAbGluayBJbnRlcnZhbCNkaXZpZGVFcXVhbGx5fSwge0BsaW5rIEludGVydmFsLm1lcmdlfSwge0BsaW5rIEludGVydmFsLnhvcn0sIHtAbGluayBJbnRlcnZhbCN1bmlvbn0sIHtAbGluayBJbnRlcnZhbCNpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgSW50ZXJ2YWwjZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNlcXVhbHN9LCB7QGxpbmsgSW50ZXJ2YWwjb3ZlcmxhcHN9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNTdGFydH0sIHtAbGluayBJbnRlcnZhbCNhYnV0c0VuZH0sIHtAbGluayBJbnRlcnZhbCNlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIEludGVydmFsI3RvU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvSVNPfSwge0BsaW5rIEludGVydmFsI3RvSVNPRGF0ZX0sIHtAbGluayBJbnRlcnZhbCN0b0lTT1RpbWV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Gb3JtYXR9LCBhbmQge0BsaW5rIEludGVydmFsI3RvRHVyYXRpb259LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnZhbCB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zID0gY29uZmlnLnN0YXJ0O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZSA9IGNvbmZpZy5lbmQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25JbnRlcnZhbCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIEludGVydmFsIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG5cbiAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XG5cbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICAgIGVuZDogYnVpbHRFbmQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGFmdGVyKHN0YXJ0LCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgYmVmb3JlKGVuZCwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0Lm1pbnVzKGR1ciksIGR0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXG4gICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lI2Zyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtzLCBlXSA9ICh0ZXh0IHx8IFwiXCIpLnNwbGl0KFwiL1wiLCAyKTtcbiAgICBpZiAocyAmJiBlKSB7XG4gICAgICBsZXQgc3RhcnQsIHN0YXJ0SXNWYWxpZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUlTTyhzLCBvcHRzKTtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gc3RhcnQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxldCBlbmQsIGVuZElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBlbmQgPSBEYXRlVGltZS5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBlbmRJc1ZhbGlkID0gZW5kLmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVuZElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCAmJiBlbmRJc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRJc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBkdXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBJbnRlcnZhbC4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzSW50ZXJ2YWwobykge1xuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25JbnRlcnZhbCkgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhcnQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbmQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIGdldCBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYXQgbGVhc3QgaXRzIHN0YXJ0LCBtZWFuaW5nIHRoYXQgdGhlIEludGVydmFsIGlzbid0ICdiYWNrd2FyZHMnLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gcmV0dXJuIHRoZSBsZW5ndGggaW4uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGxlbmd0aCh1bml0ID0gXCJtaWxsaXNlY29uZHNcIikge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24oLi4uW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXG4gICAqIFVubGlrZSB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xuICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY291bnQodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuc3RhcnRPZih1bml0KSxcbiAgICAgIGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAoZW5kLnZhbHVlT2YoKSAhPT0gdGhpcy5lbmQudmFsdWVPZigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHNwbGl0QXQoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICBjb25zdCBzb3J0ZWQgPSBkYXRlVGltZXNcbiAgICAgICAgLm1hcChmcmllbmRseURhdGVUaW1lKVxuICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmNvbnRhaW5zKGQpKVxuICAgICAgICAuc29ydCgpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRCeShkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtbXSwgbnVsbF1cbiAgICAgICk7XG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXG4gICAgICAgIHsgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LFxuICAgICAgICB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfSxcbiAgICAgIF0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGBbJHt0aGlzLnMudG9JU08oKX0g4oCTICR7dGhpcy5lLnRvSVNPKCl9KWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgSW50ZXJ2YWwuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGVcbiAgICogSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhc1xuICAgKiB7QGxpbmsgRGF0ZVRpbWUuREFURV9GVUxMfSBvciB7QGxpbmsgRGF0ZVRpbWUuVElNRV9TSU1QTEV9LiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2RcbiAgICogaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gICAqIEludGVydmFsIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuXG4gICAqIHNwZWNpZmllZC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2Zvcm1hdE9wdHM9RGF0ZVRpbWUuREFURV9TSE9SVF0gLSBFaXRoZXIgYSBEYXRlVGltZSBwcmVzZXQgb3JcbiAgICogSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHN0YXJ0IERhdGVUaW1lLlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gMTEvNy8yMDIyIOKAkyAxMS84LzIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+IE5vdmVtYmVyIDcg4oCTIDgsIDIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwsIHsgbG9jYWxlOiAnZnItRlInIH0pOyAvLz0+IDfigJM4IG5vdmVtYnJlIDIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QxNzowMFovMjAyMi0xMS0wN1QxOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gNjowMCDigJMgODowMCBQTVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDE3OjAwWi8yMDIyLTExLTA3VDE5OjAwWicpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+IE1vbiwgTm92IDA3LCA2OjAwIOKAkyA4OjAwIHBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IEZvcm1hdHMuREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMucy5sb2MuY2xvbmUob3B0cyksIGZvcm1hdE9wdHMpLmZvcm1hdEludGVydmFsKHRoaXMpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPKG9wdHMpfS8ke3RoaXMuZS50b0lTTyhvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBkYXRlIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSB0aW1lIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09EYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPRGF0ZSgpfS8ke3RoaXMuZS50b0lTT0RhdGUoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT1RpbWUob3B0cyl9LyR7dGhpcy5lLnRvSVNPVGltZShvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0XG4gICAqIHN0cmluZy4gKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBJbnRlcnZhbCN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZVxuICAgKiBmb3JtYXR0aW5nIHRvb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gVGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS5cbiAgICogU2VlIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLnNlcGFyYXRvciA9ICAnIOKAkyAnXSAtIEEgc2VwYXJhdG9yIHRvIHBsYWNlIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmRcbiAgICogcmVwcmVzZW50YXRpb25zLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChkYXRlRm9ybWF0LCB7IHNlcGFyYXRvciA9IFwiIOKAkyBcIiB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KX0ke3NlcGFyYXRvcn0ke3RoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIER1cmF0aW9uIHJlcHJlc2VudGluZyB0aGUgdGltZSBzcGFubmVkIGJ5IHRoaXMgaW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDg4NDg5MjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignZGF5cycpLnRvT2JqZWN0KCkgLy89PiB7IGRheXM6IDEuMDI0MTgxMjE1Mjc3Nzc3OCB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQuODIwOTUgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQsIHNlY29uZHM6IDQ5LjI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ3NlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBzZWNvbmRzOiA4ODQ4OS4yNTcgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHRvRHVyYXRpb24odW5pdCwgb3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWRSZWFzb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lLmRpZmYodGhpcy5zLCB1bml0LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gbWFwRm4gb24gdGhlIGludGVydmFsIHN0YXJ0IGFuZCBlbmQsIHJldHVybmluZyBhIG5ldyBJbnRlcnZhbCBmcm9tIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQudG9VVEMoKSlcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnBsdXMoeyBob3VyczogMiB9KSlcbiAgICovXG4gIG1hcEVuZHBvaW50cyhtYXBGbikge1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IEludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi96b25lLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgSW52YWxpZFpvbmUgZnJvbSBcIi4vem9uZXMvaW52YWxpZFpvbmUuanNcIjtcbmltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBWRVJTSU9OID0gXCIzLjQuM1wiO1xuXG5leHBvcnQge1xuICBWRVJTSU9OLFxuICBEYXRlVGltZSxcbiAgRHVyYXRpb24sXG4gIEludGVydmFsLFxuICBJbmZvLFxuICBab25lLFxuICBGaXhlZE9mZnNldFpvbmUsXG4gIElBTkFab25lLFxuICBJbnZhbGlkWm9uZSxcbiAgU3lzdGVtWm9uZSxcbiAgU2V0dGluZ3MsXG59O1xuIiwiaW1wb3J0IFN5c3RlbVpvbmUgZnJvbSBcIi4vem9uZXMvc3lzdGVtWm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5cbmltcG9ydCB7IG5vcm1hbGl6ZVpvbmUgfSBmcm9tIFwiLi9pbXBsL3pvbmVVdGlsLmpzXCI7XG5cbmxldCBub3cgPSAoKSA9PiBEYXRlLm5vdygpLFxuICBkZWZhdWx0Wm9uZSA9IFwic3lzdGVtXCIsXG4gIGRlZmF1bHRMb2NhbGUgPSBudWxsLFxuICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gbnVsbCxcbiAgdHdvRGlnaXRDdXRvZmZZZWFyID0gNjAsXG4gIHRocm93T25JbnZhbGlkO1xuXG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgbm93KCkge1xuICAgIHJldHVybiBub3c7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxuICAgKi9cbiAgc3RhdGljIHNldCBub3cobikge1xuICAgIG5vdyA9IG47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0Wm9uZSh6b25lKSB7XG4gICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IGN1cnJlbnRseSB1c2VkIHRvIGNyZWF0ZSBEYXRlVGltZXMuIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFpvbmUoKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoZGVmYXVsdFpvbmUsIFN5c3RlbVpvbmUuaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbShudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKG91dHB1dENhbGVuZGFyKSB7XG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXRvZmYgeWVhciBhZnRlciB3aGljaCBhIHN0cmluZyBlbmNvZGluZyBhIHllYXIgYXMgdHdvIGRpZ2l0cyBpcyBpbnRlcnByZXRlZCB0byBvY2N1ciBpbiB0aGUgY3VycmVudCBjZW50dXJ5LlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGdldCB0d29EaWdpdEN1dG9mZlllYXIoKSB7XG4gICAgcmV0dXJuIHR3b0RpZ2l0Q3V0b2ZmWWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1dG9mZiB5ZWFyIGFmdGVyIHdoaWNoIGEgc3RyaW5nIGVuY29kaW5nIGEgeWVhciBhcyB0d28gZGlnaXRzIGlzIGludGVycHJldGVkIHRvIG9jY3VyIGluIHRoZSBjdXJyZW50IGNlbnR1cnkuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDAgLy8gY3V0LW9mZiB5ZWFyIGlzIDAsIHNvIGFsbCAneXknIGFyZSBpbnRlcnByZXRlZCBhcyBjdXJyZW50IGNlbnR1cnlcbiAgICogQGV4YW1wbGUgU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID0gNTAgLy8gJzQ5JyAtPiAxOTQ5OyAnNTAnIC0+IDIwNTBcbiAgICogQGV4YW1wbGUgU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID0gMTk1MCAvLyBpbnRlcnByZXRlZCBhcyA1MFxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPSAyMDUwIC8vIEFMU08gaW50ZXJwcmV0ZWQgYXMgNTBcbiAgICovXG4gIHN0YXRpYyBzZXQgdHdvRGlnaXRDdXRvZmZZZWFyKGN1dG9mZlllYXIpIHtcbiAgICB0d29EaWdpdEN1dG9mZlllYXIgPSBjdXRvZmZZZWFyICUgMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgdGhyb3dPbkludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRocm93T25JbnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBzZXQgdGhyb3dPbkludmFsaWQodCkge1xuICAgIHRocm93T25JbnZhbGlkID0gdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlcygpIHtcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgWm9uZUlzQWJzdHJhY3RFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIGdldCBpYW5hTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgb2Zmc2V0TmFtZSh0cywgb3B0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBvZmZzZXQodHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRPZmZzZXQsIHBhcnNlWm9uZUluZm8sIGlzVW5kZWZpbmVkLCBvYmpUb0xvY2FsVFMgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5sZXQgZHRmQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB0aW1lWm9uZTogem9uZSxcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICBlcmE6IFwic2hvcnRcIixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZHRmQ2FjaGVbem9uZV07XG59XG5cbmNvbnN0IHR5cGVUb1BvcyA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDEsXG4gIGRheTogMixcbiAgZXJhOiAzLFxuICBob3VyOiA0LFxuICBtaW51dGU6IDUsXG4gIHNlY29uZDogNixcbn07XG5cbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgXCJcIiksXG4gICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSAoQUR8QkMpLD8gKFxcZCspOihcXGQrKTooXFxkKykvLmV4ZWMoZm9ybWF0dGVkKSxcbiAgICBbLCBmTW9udGgsIGZEYXksIGZZZWFyLCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF0gPSBwYXJzZWQ7XG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZmFkT3JCYywgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xufVxuXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG4gIGNvbnN0IGZpbGxlZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGZvcm1hdHRlZFtpXTtcbiAgICBjb25zdCBwb3MgPSB0eXBlVG9Qb3NbdHlwZV07XG5cbiAgICBpZiAodHlwZSA9PT0gXCJlcmFcIikge1xuICAgICAgZmlsbGVkW3Bvc10gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWxsZWQ7XG59XG5cbmxldCBpYW5hWm9uZUNhY2hlID0ge307XG4vKipcbiAqIEEgem9uZSBpZGVudGlmaWVkIGJ5IGFuIElBTkEgaWRlbnRpZmllciwgbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSUFOQVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gWm9uZSBuYW1lXG4gICAqIEByZXR1cm4ge0lBTkFab25lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShuYW1lKSB7XG4gICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7XG4gICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2NhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlKCkge1xuICAgIGlhbmFab25lQ2FjaGUgPSB7fTtcbiAgICBkdGZDYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSBmb3Igc29tZSB2YWxpZCBJQU5BIG5hbWVzLiBVc2UgaXNWYWxpZFpvbmUgaW5zdGVhZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkWm9uZShzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpZGVudGlmaWVzIGEgcmVhbCB6b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gVGhlIHN0cmluZyB0byBjaGVja1xuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gZmFsc2VcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRab25lKHpvbmUpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogem9uZSB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy56b25lTmFtZSA9IG5hbWU7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMudmFsaWQgPSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImlhbmFcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUodHMsIHsgZm9ybWF0LCBsb2NhbGUgfSkge1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSwgdGhpcy5uYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQodHMpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpO1xuXG4gICAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm4gTmFOO1xuXG4gICAgY29uc3QgZHRmID0gbWFrZURURih0aGlzLm5hbWUpO1xuICAgIGxldCBbeWVhciwgbW9udGgsIGRheSwgYWRPckJjLCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBkdGYuZm9ybWF0VG9QYXJ0c1xuICAgICAgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpXG4gICAgICA6IGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSk7XG5cbiAgICBpZiAoYWRPckJjID09PSBcIkJDXCIpIHtcbiAgICAgIHllYXIgPSAtTWF0aC5hYnMoeWVhcikgKyAxO1xuICAgIH1cblxuICAgIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgaG91cjEyIGFuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDI1NTY0JmNhbj0yJnE9JTIyMjQlM0EwMCUyMiUyMGRhdGV0aW1lZm9ybWF0XG4gICAgY29uc3QgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcblxuICAgIGNvbnN0IGFzVVRDID0gb2JqVG9Mb2NhbFRTKHtcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRheSxcbiAgICAgIGhvdXI6IGFkanVzdGVkSG91cixcbiAgICAgIG1pbnV0ZSxcbiAgICAgIHNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kOiAwLFxuICAgIH0pO1xuXG4gICAgbGV0IGFzVFMgPSArZGF0ZTtcbiAgICBjb25zdCBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdE9mZnNldCwgc2lnbmVkT2Zmc2V0IH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogQSB6b25lIHdpdGggYSBmaXhlZCBvZmZzZXQgKG1lYW5pbmcgbm8gRFNUKVxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkT2Zmc2V0Wm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFVUQ1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHV0Y0luc3RhbmNlKCkge1xuICAgIGlmIChzaW5nbGV0b24gPT09IG51bGwpIHtcbiAgICAgIHNpbmdsZXRvbiA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIHdpdGggYSBzcGVjaWZpZWQgb2Zmc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IGluIG1pbnV0ZXNcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKG9mZnNldCkge1xuICAgIHJldHVybiBvZmZzZXQgPT09IDAgPyBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UgOiBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIG9mIEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIGEgVVRDIG9mZnNldCBzdHJpbmcsIGxpa2UgXCJVVEMrNlwiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIG9mZnNldCBzdHJpbmcgdG8gcGFyc2VcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzA2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQy02OjAwXCIpXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZVNwZWNpZmllcihzKSB7XG4gICAgaWYgKHMpIHtcbiAgICAgIGNvbnN0IHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHJldHVybiBuZXcgRml4ZWRPZmZzZXRab25lKHNpZ25lZE9mZnNldChyWzFdLCByWzJdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2Zmc2V0KSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy5maXhlZCA9IG9mZnNldDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImZpeGVkXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/IFwiVVRDXCIgOiBgVVRDJHtmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgXCJuYXJyb3dcIil9YDtcbiAgfVxuXG4gIGdldCBpYW5hTmFtZSgpIHtcbiAgICBpZiAodGhpcy5maXhlZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiRXRjL1VUQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYEV0Yy9HTVQke2Zvcm1hdE9mZnNldCgtdGhpcy5maXhlZCwgXCJuYXJyb3dcIil9YDtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiZml4ZWRcIiAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxuLyoqXG4gKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRab25lIGV4dGVuZHMgWm9uZSB7XG4gIGNvbnN0cnVjdG9yKHpvbmVOYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogIEBwcml2YXRlICovXG4gICAgdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvIH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgbG9jYWwgem9uZVxuICAgKiBAcmV0dXJuIHtTeXN0ZW1ab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgU3lzdGVtWm9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwic3lzdGVtXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==