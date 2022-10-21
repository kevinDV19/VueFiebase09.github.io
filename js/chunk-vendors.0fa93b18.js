(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),o=n("59ed"),i=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?i(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),o=n("c65b"),i=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),o=r.String;e.exports=function(e){try{return o(e)}catch(t){return"Object"}}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var r=n("da84"),o=n("3a9b"),i=r.TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),o=n("7b0b"),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),o=r("iterator"),i=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),o=r.TypeError;e.exports=function(e){if(void 0==e)throw o("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return D})),n.d(t,"g",(function(){return R})),n.d(t,"h",(function(){return M})),n.d(t,"i",(function(){return I})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return B})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return p})),n.d(t,"q",(function(){return v})),n.d(t,"r",(function(){return d})),n.d(t,"s",(function(){return h})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return N})),n.d(t,"v",(function(){return m}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=o(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return"object"===typeof indexedDB}function m(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof r)return;const e=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},_=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},w=()=>{try{return b()||y()||_()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},O=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},E=e=>{var t;return null===(t=w())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?C(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new S(r,s,n);return a}}function C(e,t){return e.replace(x,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(P(n)&&P(i)){if(!R(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"),n("4362"))},2266:function(e,t,n){var r=n("da84"),o=n("0366"),i=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),d=n("9a1f"),f=n("35a1"),h=n("2a62"),p=r.TypeError,v=function(e,t){this.stopped=e,this.result=t},m=v.prototype;e.exports=function(e,t,n){var r,g,b,y,_,w,O,I=n&&n.that,E=!(!n||!n.AS_ENTRIES),j=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),S=o(t,I),T=function(e){return r&&h(r,"normal",e),new v(!0,e)},C=function(e){return E?(s(e),k?S(e[0],e[1],T):S(e[0],e[1])):k?S(e,T):S(e)};if(j)r=e;else{if(g=f(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(b=0,y=u(e);y>b;b++)if(_=C(e[b]),_&&l(m,_))return _;return new v(!1)}r=d(e,g)}w=r.next;while(!(O=i(w,r)).done){try{_=C(O.value)}catch(x){h(r,"throw",x)}if("object"==typeof _&&_&&l(m,_))return _}return new v(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(d in t){if(h=t[d],e.noTargetGet?(p=o(l,d),f=p&&p.value):f=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&i(h,"sham",!0),s(l,d,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var o="firebase",i="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(o,i,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),s=n("83ab"),a=i("species");e.exports=function(e){var t=r(e),n=o.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),o=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return o(s),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,o=n.bind,i=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(o?i.bind(r):function(){return i.apply(r,arguments)})},"2cf4":function(e,t,n){var r,o,i,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),d=n("1a2d"),f=n("d039"),h=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("1cdc"),g=n("605d"),b=a.setImmediate,y=a.clearImmediate,_=a.process,w=a.Dispatch,O=a.Function,I=a.MessageChannel,E=a.String,j=0,k={},S="onreadystatechange";try{r=a.location}catch(R){}var T=function(e){if(d(k,e)){var t=k[e];delete k[e],t()}},C=function(e){return function(){T(e)}},x=function(e){T(e.data)},A=function(e){a.postMessage(E(e),r.protocol+"//"+r.host)};b&&y||(b=function(e){var t=p(arguments,1);return k[++j]=function(){c(l(e)?e:O(e),void 0,t)},o(j),j},y=function(e){delete k[e]},g?o=function(e){_.nextTick(C(e))}:w&&w.now?o=function(e){w.now(C(e))}:I&&!m?(i=new I,s=i.port2,i.port1.onmessage=x,o=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(A)?(o=A,a.addEventListener("message",x,!1)):o=S in v("script")?function(e){h.appendChild(v("script"))[S]=function(){h.removeChild(this),T(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:b,clear:y}},"2d00":function(e,t,n){var r,o,i=n("da84"),s=n("342f"),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),o=n("dc4a"),i=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return o(e,a)||o(e,"@@iterator")||i[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),o=n("aed9"),i=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!o?Object.defineProperties:function(e,t){s(e);var n,r=a(t),o=c(t),u=o.length,l=0;while(u>l)i.f(e,n=o[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),o=n("1626"),i=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||o(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,o=n("577e"),i=n("69f3"),s=n("7dd0"),a="String Iterator",c=i.set,u=i.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:o(e),index:0})}),(function(){var e,t=u(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("abc5");const o="devtools-plugin:setup",i="plugin:settings:set";class s{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const i in e.settings){const t=e.settings[i];n[i]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(s){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}o=e}},t&&t.on(i,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=Object(r["b"])(),i=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!i||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new s(e,i):null,o=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else i.emit(o,e,t)}},"3f8c":function(e,t){e.exports={}},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),o=n("e330"),i=n("d039"),s=n("c6b6"),a=r.Object,c=o("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),o=n("5087"),i=n("b622"),s=i("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[s])?t:o(n)}},"485a":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!s(r=o(n,e)))return r;if(i(n=e.valueOf)&&!s(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!s(r=o(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),o=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("23cb"),i=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),o=n("68ee"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return s}));var r=n("7a23"),o=n("3f4e"),i="store";function s(e){return void 0===e&&(e=null),Object(r["l"])(null!==e?e:i)}function a(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function c(e){return null!==e&&"object"===typeof e}function u(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function d(e,t){return function(){return e(t)}}function f(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function h(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;v(e,n,[],e._modules.root,!0),p(e,n,t)}function p(e,t,n){var o=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};a(i,(function(t,n){s[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=Object(r["t"])({data:t}),e.strict&&w(e),o&&n&&e._withCommit((function(){o.data=null}))}function v(e,t,n,r,o){var i=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!i&&!o){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,o=t.handler||t;y(e,r,o,u)})),r.forEachGetter((function(t,n){var r=s+n;_(e,r,t,u)})),r.forEachChild((function(r,i){v(e,t,n.concat(i),r,o)}))}function m(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=I(n,r,o),s=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?e.commit:function(n,r,o){var i=I(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return O(e.state,n)}}}),o}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function b(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function y(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return u(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function _(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function w(e){Object(r["z"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function I(e,t,n){return c(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",j="vuex:mutations",k="vuex:actions",S="vuex",T=0;function C(e,t){Object(o["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:j,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:k,label:"Vuex Actions",color:x}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===S)if(n.filter){var r=[];M(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId;g(t,r),n.state=D(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),t._withCommit((function(){n.set(t._state.data,o,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:j,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=T++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:k,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},o=Date.now()-e._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var x=8702998,A=6710886,R=16777215,P={label:"namespaced",textColor:R,backgroundColor:A};function L(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:L(t),tags:e.namespaced?[P]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function M(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[P]:[]}),Object.keys(t._children).forEach((function(o){M(e,t._children[o],n,r+o+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=U(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?L(e):e,editable:!1,value:V((function(){return i[e]}))}}))}return o}function U(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=V((function(){return e[n]}))}else t[n]=V((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,o){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return o===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function V(e){try{return e()}catch(t){return t}}var B=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},$={namespaced:{configurable:!0}};$.namespaced.get=function(){return!!this._rawModule.namespaced},B.prototype.addChild=function(e,t){this._children[e]=t},B.prototype.removeChild=function(e){delete this._children[e]},B.prototype.getChild=function(e){return this._children[e]},B.prototype.hasChild=function(e){return e in this._children},B.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},B.prototype.forEachChild=function(e){a(this._children,e)},B.prototype.forEachGetter=function(e){this._rawModule.getters&&a(this._rawModule.getters,e)},B.prototype.forEachAction=function(e){this._rawModule.actions&&a(this._rawModule.actions,e)},B.prototype.forEachMutation=function(e){this._rawModule.mutations&&a(this._rawModule.mutations,e)},Object.defineProperties(B.prototype,$);var H=function(e){this.register([],e,!1)};function z(e,t,n){if(K(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");z(e.concat(r),t.getChild(r),n.modules[r])}}H.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},H.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},H.prototype.update=function(e){z([],this.root,e)},H.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),K(e,t);var o=new B(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&a(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},H.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},H.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var W={assert:function(e){return"function"===typeof e},expected:"function"},G={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},q={getters:W,mutations:W,actions:G};function K(e,t){Object.keys(q).forEach((function(n){if(t[n]){var r=q[n];a(t[n],(function(t,o){l(r.assert(t),J(e,n,o,t,r.expected))}))}}))}function J(e,t,n,r,o){var i=t+" should be "+o+' but "'+t+"."+n+'"';return e.length>0&&(i+=' in module "'+e.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function X(e){return new Y(e)}var Y=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new H(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return u.call(s,e,t,n)},this.strict=o;var d=this._modules.root.state;v(this,d,[],this._modules.root),p(this,d),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};Y.prototype.install=function(e,t){e.provide(t||i,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&C(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},Y.prototype.commit=function(e,t,n){var r=this,o=I(e,t,n),i=o.type,s=o.payload,a=o.options,c={type:i,payload:s},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},Y.prototype.dispatch=function(e,t){var n=this,r=I(e,t),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+o)},Y.prototype.subscribe=function(e,t){return f(e,this._subscribers,t)},Y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return f(n,this._actionSubscribers,t)},Y.prototype.watch=function(e,t,n){var o=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["z"])((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},Y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),v(this,this.state,e,this._modules.get(e),n.preserveState),p(this,this.state)},Y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),h(this)},Y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},Y.prototype.hotUpdate=function(e){this._modules.update(e),h(this,!0)},Y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Y.prototype,Q);te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ne(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e)){if(o in this.$store.getters)return this.$store.getters[o];console.error("[vuex] unknown getter: "+o)}},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ne(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||c(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.2",mode:r?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),o=n("e330"),i=n("241c"),s=n("7418"),a=n("825a"),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),o=n("f5df"),i=r.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return ve})),n.d(t,"b",(function(){return de})),n.d(t,"c",(function(){return le})),n.d(t,"d",(function(){return ge})),n.d(t,"e",(function(){return me})),n.d(t,"f",(function(){return be}));var r=n("22e5"),o=n("e691"),i=n("1fd5");const s=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(O(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&d.set(t,e)}).catch(()=>{}),v.set(t,e),t}function g(e){if(f.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});f.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),O(d.get(this))}:function(...t){return O(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return h.set(r,t.sort?t.sort():[t]),O(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,b):e)}function O(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const I=e=>v.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=O(s);return r&&s.addEventListener("upgradeneeded",e=>{r(O(s.result),e.oldVersion,e.newVersion,O(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(e=>{i&&e.addEventListener("close",()=>i()),o&&e.addEventListener("versionchange",()=>o())}).catch(()=>{}),a}const j=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],S=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!j.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return S.set(t,i),i}y(e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",R="0.8.2",P=new o["b"]("@firebase/app"),L="@firebase/app-compat",N="@firebase/analytics-compat",M="@firebase/analytics",D="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",G="@firebase/installations-compat",q="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.12.1",ie="[DEFAULT]",se={[A]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[N]:"fire-analytics-compat",[U]:"fire-app-check",[D]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[G]:"fire-iid-compat",[q]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i["b"]("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=oe;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=Object(i["i"])()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if(Object(i["g"])(n,a.options)&&Object(i["g"])(o,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r["b"](s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,o,c);return ae.set(s,u),u}function ge(e=ie){const t=ae.get(e);if(!t&&e===ie)return me();if(!t)throw he.create("no-app",{appName:e});return t}function be(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+="-"+n);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}le(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Oe=null;function Ie(){return Oe||(Oe=E(ye,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch(e=>{throw he.create("idb-open",{originalErrorMessage:e.message})})),Oe}async function Ee(e){var t;try{const t=await Ie();return t.transaction(we).objectStore(we).get(ke(e))}catch(n){if(n instanceof i["c"])P.warn(n.message);else{const e=he.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});P.warn(e.message)}}}async function je(e,t){var n;try{const n=await Ie(),r=n.transaction(we,"readwrite"),o=r.objectStore(we);return await o.put(t,ke(e)),r.done}catch(r){if(r instanceof i["c"])P.warn(r.message);else{const e=he.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});P.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,Te=2592e6;class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Te}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xe(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),r=Object(i["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xe(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,t=Se){const n=[];let r=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["q"])()&&Object(i["v"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return Object(i["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){le(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),le(new r["a"]("heartbeat",e=>new Ce(e),"PRIVATE")),be(A,R,e),be(A,R,"esm2017"),be("fire-js","")}Le("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),o=n("1a2d"),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),o=n("da84");e.exports="process"==r(o.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),o=n("e330"),i=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),d=n("44ad"),f=Object.assign,h=Object.defineProperty,p=o([].concat);e.exports=!f||s((function(){if(r&&1!==f({b:1},f(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||a(f({},t)).join("")!=o}))?function(e,t){var n=l(e),o=arguments.length,s=1,f=c.f,h=u.f;while(o>s){var v,m=d(arguments[s++]),g=f?p(a(m),f(m)):a(m),b=g.length,y=0;while(b>y)v=g[y++],r&&!i(h,m,v)||(n[v]=m[v])}return n}:f},6547:function(e,t,n){var r=n("e330"),o=n("5926"),i=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,d=i(s(t)),f=o(n),h=d.length;return f<0||f>=h?e?"":void 0:(r=c(d,f),r<55296||r>56319||f+1===h||(l=c(d,f+1))<56320||l>57343?e?a(d,f):r:e?u(d,f,f+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"68ee":function(e,t,n){var r=n("e330"),o=n("d039"),i=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],d=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,h=r(f.exec),p=!f.exec(u),v=function(e){if(!i(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},m=function(e){if(!i(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!h(f,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!d||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?m:v},"69f3":function(e,t,n){var r,o,i,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),d=n("1a2d"),f=n("c6cd"),h=n("f772"),p=n("d012"),v="Object already initialized",m=a.TypeError,g=a.WeakMap,b=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var _=f.state||(f.state=new g),w=c(_.get),O=c(_.has),I=c(_.set);r=function(e,t){if(O(_,e))throw new m(v);return t.facade=e,I(_,e,t),t},o=function(e){return w(_,e)||{}},i=function(e){return O(_,e)}}else{var E=h("state");p[E]=!0,r=function(e,t){if(d(e,E))throw new m(v);return t.facade=e,l(e,E,t),t},o=function(e){return d(e,E)?e[E]:{}},i=function(e){return d(e,E)}}e.exports={set:r,get:o,has:i,enforce:b,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return z}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>o?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const v=()=>{};const m=/\/$/,g=e=>e.replace(m,"");function b(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?j(e,t):Array.isArray(t)?j(t,e):e===t}function j(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==s&&"."!==i){if(".."!==i)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var S,T;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const x=/^[^#]+#/;function A(e,t){return e.replace(x,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=R(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+o}function B(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function $(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function H(e){const{history:t,location:n}=window,r={value:V(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,$(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=h({},o.value,t.state,{forward:e,scroll:P()});i(s.current,s,!0);const a=h({},$(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function z(e){e=C(e);const t=H(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:A.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const d=c||Q;if(d!==Q){s+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),o+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function d(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ie.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),o}function ae(e,t,n){const r=te(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let d,f;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(d=ae(t,n,u),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),o&&e.name&&!fe(d)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,c(d)}return f?()=>{s(f)}:v}function s(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});s=o.record.name,a=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),i=o.stringify(a)}else if("path"in e)i=e.path,o=n.find(e=>e.re.test(i)),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});s=o.record.name,a=h({},t.params,e.params),i=o.stringify(a)}const c=[];let u=o;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>i(e)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,me=/&/g,ge=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,we=/%5B/g,Oe=/%5D/g,Ie=/%5E/g,Ee=/%60/g,je=/%7B/g,ke=/%7C/g,Se=/%7D/g,Te=/%20/g;function Ce(e){return encodeURI(""+e).replace(ke,"|").replace(we,"[").replace(Oe,"]")}function xe(e){return Ce(e).replace(je,"{").replace(Se,"}").replace(Ie,"^")}function Ae(e){return Ce(e).replace(_e,"%2B").replace(Te,"+").replace(ve,"%23").replace(me,"%26").replace(Ee,"`").replace(je,"{").replace(Se,"}").replace(Ie,"^")}function Re(e){return Ae(e).replace(be,"%3D")}function Pe(e){return Ce(e).replace(ve,"%23").replace(ye,"%3F")}function Le(e){return null==e?"":Pe(e).replace(ge,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(_e," "),n=e.indexOf("="),i=Ne(n<0?e:e.slice(0,n)),s=n<0?null:Ne(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map(e=>e&&Ae(e)):[r&&Ae(r)];o.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(X(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Be(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let s=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if($e(s)){const a=s.__vccOpts||s,c=a[t];c&&o.push(Ve(c,n,r,i,e))}else{let a=s();0,o.push(()=>a.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=f(o)?o.default:o;i.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Ve(c,n,r,i,e)()}))}}return o}function $e(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=Object(r["l"])(c),n=Object(r["l"])(u),o=Object(r["b"])(()=>t.resolve(Object(r["x"])(e.to))),i=Object(r["b"])(()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&i[i.length-1].path!==a?i.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>i.value>-1&&qe(n.params,o.value.params)),a=Object(r["b"])(()=>i.value>-1&&i.value===n.matched.length-1&&I(n.params,o.value.params));function l(n={}){return Ge(n)?t[Object(r["x"])(e.replace)?"replace":"push"](Object(r["x"])(e.to)).catch(v):Promise.resolve()}return{route:o,href:Object(r["b"])(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const ze=Object(r["i"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=Object(r["t"])(He(e)),{options:o}=Object(r["l"])(c),i=Object(r["b"])(()=>({[Je(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r["k"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),We=ze;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["i"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["l"])(l),i=Object(r["b"])(()=>e.route||o.value),c=Object(r["l"])(a,0),u=Object(r["b"])(()=>i.value.matched[c]);Object(r["s"])(a,c+1),Object(r["s"])(s,u),Object(r["s"])(l,i);const d=Object(r["u"])();return Object(r["z"])(()=>[d.value,u.value,e.name],([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=i.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:o});const l=s.props[e.name],f=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["k"])(a,h({},f,t,{onVnodeUnmounted:p,ref:d}));return Ye(n.default,{Component:v,route:o})||v}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||De,i=e.history;const s=Fe(),a=Fe(),f=Fe(),m=Object(r["w"])(q);let g=q;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Le),I=p.bind(null,Ne);function E(e,n){let r,o;return G(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function j(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=h({},r||m.value),"string"===typeof e){const o=b(n,e,r.path),s=t.resolve({path:o.path},r),a=i.createHref(o.fullPath);return h(o,s,{params:I(s.params),hash:Ne(o.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=h({},e,{path:b(n,e.path,r.path).path});else{const t=h({},e.params);for(const e in t)null==t[e]&&delete t[e];s=h({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(I(a.params));const u=y(o,h({},e,{hash:xe(c),path:a.path})),l=i.createHref(u);return h({fullPath:u,hash:c,query:o===De?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function x(e){return"string"===typeof e?b(n,e,m.value.path):h({},e)}function A(e,t){if(g!==e)return X(8,{from:t,to:e})}function R(e){return V(e)}function M(e){return R(h(x(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=g=C(e),r=m.value,i=e.state,s=e.force,a=!0===e.replace,c=F(n);if(c)return V(h(x(c),{state:i,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(o,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(h(x(e.to),{state:i,force:s,replace:a}),t||u)}else e=z(u,r,!0,a,i);return H(u,r,e),e})}function B(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,o,i]=tt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=B.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=Be(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Be(i,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const r of f.list())r(e,t,n)}function z(e,t,n,r,o){const s=A(e,t);if(s)return s;const a=t===q,c=d?history.state:{};n&&(r||a?i.replace(e.fullPath,h({scroll:a&&c&&c.scroll},o)):i.push(e.fullPath,o)),m.value=e,re(e,t,n,a),ne()}let W;function K(){W=i.listen((e,t,n)=>{const r=C(e),o=F(r);if(o)return void V(h(o,{replace:!0}),r).catch(v);g=r;const s=m.value;d&&D(N(s.fullPath,n.delta),P()),$(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===S.pop&&i.go(-1,!1)}).catch(v),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||z(r,s,!1),e&&(n.delta?i.go(-n.delta,!1):n.type===S.pop&&Y(e,20)&&i.go(-1,!1)),H(r,s,e)}).catch(v)})}let J,Q=Fe(),Z=Fe();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&m.value!==q?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){J||(J=!0,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,o,i){const{scrollBehavior:s}=e;if(!d||!s)return Promise.resolve();const a=!o&&U(N(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return Object(r["m"])().then(()=>s(t,n,a)).then(e=>e&&L(e)).catch(e=>ee(e,t,n))}const oe=e=>i.go(e);let ie;const se=new Set,ae={currentRoute:m,addRoute:E,removeRoute:j,hasRoute:T,getRoutes:k,resolve:C,options:e,push:R,replace:M,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["x"])(m)}),d&&!ie&&m.value===q&&(ie=!0,R(i.location).catch(e=>{0}));const n={};for(const i in q)n[i]=Object(r["b"])(()=>m.value[i]);e.provide(c,t),e.provide(u,Object(r["t"])(n)),e.provide(l,m);const o=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=q,W&&W(),m.value=q,ie=!1,J=!1),o()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find(e=>O(e,i))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||o.push(a))}return[n,r,o]}},"6eeb":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,d=u.get,f=u.enforce,h=String(String).split("String");(e.exports=function(e,t,n,c){var u,d=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=f(n),u.source||(u.source=h.join("string"==typeof m?m:""))),e!==r?(d?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return o(this)&&d(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),o=r("span").classList,i=o&&o.constructor&&o.constructor.prototype;e.exports=i===Object.prototype?void 0:i},"7a23":function(e,t,n){"use strict";n.d(t,"b",(function(){return We})),n.d(t,"t",(function(){return Ie})),n.d(t,"u",(function(){return De})),n.d(t,"w",(function(){return Ue})),n.d(t,"x",(function(){return Be})),n.d(t,"a",(function(){return Dn})),n.d(t,"d",(function(){return ar})),n.d(t,"e",(function(){return Kn})),n.d(t,"f",(function(){return tr})),n.d(t,"g",(function(){return sr})),n.d(t,"h",(function(){return nr})),n.d(t,"i",(function(){return yt})),n.d(t,"j",(function(){return _r})),n.d(t,"k",(function(){return bo})),n.d(t,"l",(function(){return ct})),n.d(t,"m",(function(){return Zr})),n.d(t,"n",(function(){return It})),n.d(t,"o",(function(){return At})),n.d(t,"p",(function(){return Et})),n.d(t,"q",(function(){return Mt})),n.d(t,"r",(function(){return Hn})),n.d(t,"s",(function(){return at})),n.d(t,"v",(function(){return Pn})),n.d(t,"z",(function(){return ho})),n.d(t,"A",(function(){return Qe})),n.d(t,"B",(function(){return bn})),n.d(t,"c",(function(){return ji})),n.d(t,"y",(function(){return bi})),n.d(t,"C",(function(){return wi}));var r=n("9ff4");let o;const i=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&o&&(this.parent=o,this.index=(o.scopes||(o.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(i.push(this),o=this)}off(){this.active&&(i.pop(),o=i[i.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||o,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&v)>0,l=e=>(e.n&v)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];u(o)&&!l(o)?o.delete(e):t[n++]=o,o.w&=~v,o.n&=~v}t.length=n}},h=new WeakMap;let p=0,v=1;const m=30,g=[];let b;const y=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!g.includes(this))try{return g.push(b=this),k(),v=1<<++p,p<=m?d(this):O(this),this.fn()}finally{p<=m&&f(this),v=1<<--p,S(),g.pop();const e=g.length;b=e>0?g[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function j(){E.push(I),I=!1}function k(){E.push(I),I=!0}function S(){const e=E.pop();I=void 0===e||e}function T(e,t,n){if(!C())return;let r=h.get(e);r||h.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=c());const i=void 0;x(o,i)}function C(){return I&&void 0!==b}function x(e,t){let n=!1;p<=m?l(e)||(e.n|=v,n=!u(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function A(e,t,n,o,i,s){const a=h.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=o)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"set":Object(r["t"])(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==b||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(r["H"])("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),N=V(),M=V(!1,!0),D=V(!0),U=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=xe(this);for(let t=0,o=this.length;t<o;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){j();const n=xe(this)[t].apply(this,e);return S(),n}}),e}function V(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&i===(e?t?_e:ye:t?be:ge).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(U,o))return Reflect.get(U,o,i);const a=Reflect.get(n,o,i);if(Object(r["E"])(o)?L.has(o):P(o))return a;if(e||T(n,"get",o),t)return a;if(Me(a)){const e=!s||!Object(r["s"])(o);return e?a.value:a}return Object(r["v"])(a)?e?je(a):Ie(a):a}}const B=H(),$=H(!0);function H(e=!1){return function(t,n,o,i){let s=t[n];if(!e&&!Te(o)&&(o=xe(o),s=xe(s),!Object(r["o"])(t)&&Me(s)&&!Me(o)))return s.value=o,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,o,i);return t===xe(i)&&(a?Object(r["j"])(o,s)&&A(t,"set",n,o,s):A(t,"add",n,o)),c}}function z(e,t){const n=Object(r["k"])(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&A(e,"delete",t,void 0,o),i}function W(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&L.has(t)||T(e,"has",t),n}function G(e){return T(e,"iterate",Object(r["o"])(e)?"length":y),Reflect.ownKeys(e)}const q={get:N,set:B,deleteProperty:z,has:W,ownKeys:G},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},J=Object(r["h"])({},q,{get:M,set:$}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const o=xe(e),i=xe(t);t!==i&&!n&&T(o,"get",t),!n&&T(o,"get",i);const{has:s}=Y(o),a=r?X:n?Pe:Re;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void(e!==o&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=xe(n),o=xe(e);return e!==o&&!t&&T(r,"has",e),!t&&T(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function ee(e,t=!1){return e=e["__v_raw"],!t&&T(xe(e),"iterate",y),Reflect.get(e,"size",e)}function te(e){e=xe(e);const t=xe(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function ne(e,t){t=xe(t);const n=xe(this),{has:o,get:i}=Y(n);let s=o.call(n,e);s||(e=xe(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function re(e){const t=xe(this),{has:n,get:r}=Y(t);let o=n.call(t,e);o||(e=xe(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&A(t,"delete",e,void 0,i),s}function oe(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=xe(i),a=t?X:e?Pe:Re;return!e&&T(s,"iterate",y),i.forEach((e,t)=>n.call(r,a(e),a(t),o))}}function se(e,t,n){return function(...o){const i=this["__v_raw"],s=xe(i),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),d=n?X:t?Pe:Re;return!t&&T(s,"iterate",u?_:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:oe,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:oe,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach(o=>{e[o]=se(o,!1,!1),n[o]=se(o,!0,!1),t[o]=se(o,!1,!0),r[o]=se(o,!0,!0)}),[e,n,t,r]}const[ue,le,de,fe]=ce();function he(e,t){const n=t?e?fe:de:e?le:ue;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r["k"])(n,o)&&o in t?n:t,o,i)}const pe={get:he(!1,!1)},ve={get:he(!1,!0)},me={get:he(!0,!1)};const ge=new WeakMap,be=new WeakMap,ye=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["N"])(e))}function Ie(e){return e&&e["__v_isReadonly"]?e:ke(e,!1,q,pe,ge)}function Ee(e){return ke(e,!1,J,ve,be)}function je(e){return ke(e,!0,K,me,ye)}function ke(e,t,n,o,i){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function Se(e){return Te(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return Se(e)||Te(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Ae(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["v"])(e)?Ie(e):e,Pe=e=>Object(r["v"])(e)?je(e):e;function Le(e){C()&&(e=xe(e),e.dep||(e.dep=c()),x(e.dep))}function Ne(e,t){e=xe(e),e.dep&&R(e.dep)}function Me(e){return Boolean(e&&!0===e.__v_isRef)}function De(e){return Fe(e,!1)}function Ue(e){return Fe(e,!0)}function Fe(e,t){return Me(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:Re(e)}get value(){return Le(this),this._value}set value(e){e=this._shallow?e:xe(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Re(e),Ne(this,e))}}function Be(e){return Me(e)?e.value:e}const $e={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Me(o)&&!Me(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return Se(e)?e:new Proxy(e,$e)}class ze{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Ne(this))}),this["__v_isReadonly"]=n}get value(){const e=xe(this);return Le(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t){let n,o;const i=Object(r["p"])(e);i?(n=e,o=r["d"]):(n=e.get,o=e.set);const s=new ze(n,o,i||!o);return s}Promise.resolve();new Set;new Map;function Ge(e,t,...n){const o=e.vnode.props||r["b"];let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in o){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=o[e]||r["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(r["M"]))}let c;let u=o[c=Object(r["L"])(t)]||o[c=Object(r["L"])(Object(r["e"])(t))];!u&&s&&(u=o[c=Object(r["L"])(Object(r["l"])(t))]),u&&Dr(u,e,6,i);const l=o[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Dr(l,e,6,i)}}function qe(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const o=e=>{const n=qe(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),o.set(e,a),a):(o.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Je=null,Xe=null;function Ye(e){const t=Je;return Je=e,Xe=e&&e.type.__scopeId||null,t}function Qe(e,t=Je,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gn(-1);const o=Ye(t),i=e(...n);return Ye(o),r._d&&Gn(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function Ze(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:d,renderCache:f,data:h,setupState:p,ctx:v,inheritAttrs:m}=e;let g,b;const y=Ye(e);try{if(4&n.shapeFlag){const e=i||o;g=cr(d.call(e,e,f,s,p,h,v)),b=u}else{const e=t;0,g=cr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:et(u)}}catch(w){Bn.length=0,Ur(w,e,1),g=nr(Fn)}let _=g;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["u"])&&(b=tt(b,a)),_=ir(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,Ye(y),g}const et=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},tt=(e,t)=>{const n={};for(const o in e)Object(r["u"])(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function nt(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||rt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?rt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ke(u,n))return!0}}return!1}function rt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Ke(n,i))return!0}return!1}function ot({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const it=e=>e.__isSuspense;function st(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):so(e)}function at(e,t){if(yr){let n=yr.provides;const r=yr.parent&&yr.parent.provides;r===n&&(n=yr.provides=Object.create(r)),n[e]=t}else 0}function ct(e,t,n=!1){const o=yr||Je;if(o){const i=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(o.proxy):t}else 0}function ut(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rt(()=>{e.isMounted=!0}),Nt(()=>{e.isUnmounting=!0}),e}const lt=[Function,Array],dt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(e,{slots:t}){const n=_r(),r=ut();let o;return()=>{const i=t.default&&bt(t.default(),!0);if(!i||!i.length)return;const s=xe(e),{mode:a}=s;const c=i[0];if(r.isLeaving)return vt(c);const u=mt(c);if(!u)return vt(c);const l=pt(u,s,r,n);gt(u,l);const d=n.subTree,f=d&&mt(d);let h=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===o?o=e:e!==o&&(o=e,h=!0)}if(f&&f.type!==Fn&&(!Yn(u,f)||h)){const e=pt(f,s,r,n);if(gt(f,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},vt(c);"in-out"===a&&u.type!==Fn&&(e.delayLeave=(e,t,n)=>{const o=ht(r,f);o[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},ft=dt;function ht(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pt(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:v,onAppear:m,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),_=ht(n,e),w=(e,t)=>{e&&Dr(e,r,9,t)},O={mode:i,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!o)return;r=v||a}t._leaveCb&&t._leaveCb(!0);const i=_[y];i&&Yn(e,i)&&i.el._leaveCb&&i.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,i=l;if(!n.isMounted){if(!o)return;t=m||c,r=g||u,i=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[o]===e&&delete _[o])};_[o]=e,f?(f(t,s),f.length<=1&&s()):s()},clone(e){return pt(e,t,n,r)}};return O}function vt(e){if(wt(e))return e=ir(e),e.children=null,e}function mt(e){return wt(e)?e.children?e.children[0]:void 0:e}function gt(e,t){6&e.shapeFlag&&e.component?gt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bt(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const i=e[o];i.type===Dn?(128&i.patchFlag&&r++,n=n.concat(bt(i.children,t))):(t||i.type!==Fn)&&n.push(i)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function yt(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const _t=e=>!!e.type.__asyncLoader;const wt=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ot(e,t){return Object(r["o"])(e)?e.some(e=>Ot(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function It(e,t){jt(e,"a",t)}function Et(e,t){jt(e,"da",t)}function jt(e,t,n=yr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ct(t,r,n),n){let e=n.parent;while(e&&e.parent)wt(e.parent.vnode)&&kt(r,t,n,e),e=e.parent}}function kt(e,t,n,o){const i=Ct(t,e,o,!0);Mt(()=>{Object(r["K"])(o[t],i)},n)}function St(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Tt(e){return 128&e.shapeFlag?e.ssContent:e}function Ct(e,t,n=yr,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;j(),wr(n);const o=Dr(t,n,e,r);return Or(),S(),o});return r?o.unshift(i):o.push(i),i}}const xt=e=>(t,n=yr)=>(!kr||"sp"===e)&&Ct(e,t,n),At=xt("bm"),Rt=xt("m"),Pt=xt("bu"),Lt=xt("u"),Nt=xt("bum"),Mt=xt("um"),Dt=xt("sp"),Ut=xt("rtg"),Ft=xt("rtc");function Vt(e,t=yr){Ct("ec",e,t)}let Bt=!0;function $t(e){const t=Gt(e),n=e.proxy,o=e.ctx;Bt=!1,t.beforeCreate&&zt(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:c,provide:u,inject:l,created:d,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:m,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:I,renderTriggered:E,errorCaptured:j,serverPrefetch:k,expose:S,inheritAttrs:T,components:C,directives:x,filters:A}=t,R=null;if(l&&Ht(l,o,R,e.appContext.config.unwrapInjectedRef),a)for(const L in a){const e=a[L];Object(r["p"])(e)&&(o[L]=e.bind(n))}if(i){0;const t=i.call(n,n);0,Object(r["v"])(t)&&(e.data=Ie(t))}if(Bt=!0,s)for(const L in s){const e=s[L],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const i=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=We({get:t,set:i});Object.defineProperty(o,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Wt(c[r],o,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{at(t,e[t])})}function P(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&zt(d,e,"c"),P(At,f),P(Rt,h),P(Pt,p),P(Lt,v),P(It,m),P(Et,g),P(Vt,j),P(Ft,I),P(Ut,E),P(Nt,y),P(Mt,w),P(Dt,k),Object(r["o"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=T&&(e.inheritAttrs=T),C&&(e.components=C),x&&(e.directives=x)}function Ht(e,t,n=r["d"],o=!1){Object(r["o"])(e)&&(e=Yt(e));for(const i in e){const n=e[i];let s;s=Object(r["v"])(n)?"default"in n?ct(n.from||i,n.default,!0):ct(n.from||i):ct(n),Me(s)&&o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function zt(e,t,n){Dr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wt(e,t,n,o){const i=o.includes(".")?mo(n,o):()=>n[o];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&ho(i,n)}else if(Object(r["p"])(e))ho(i,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Wt(e,t,n,o));else{const o=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(o)&&ho(i,o,e)}else 0}function Gt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let c;return a?c=a:o.length||n||r?(c={},o.length&&o.forEach(e=>qt(c,e,s,!0)),qt(c,t,s)):c=t,i.set(t,c),c}function qt(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&qt(e,i,n,!0),o&&o.forEach(t=>qt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Kt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Kt={data:Jt,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Zt,directives:Zt,watch:en,provide:Jt,inject:Xt};function Jt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Xt(e,t){return Zt(Yt(e),Yt(t))}function Yt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qt(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function en(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Qt(e[r],t[r]);return n}function tn(e,t,n,o=!1){const i={},s={};Object(r["g"])(s,Qn,1),e.propsDefaults=Object.create(null),rn(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:Ee(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function nn(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,c=xe(i),[u]=e.propsOptions;let l=!1;if(!(o||a>0)||16&a){let o;rn(e,t,i,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(o=Object(r["l"])(s))!==s&&Object(r["k"])(t,o))||(u?!n||void 0===n[s]&&void 0===n[o]||(i[s]=on(u,c,s,void 0,e,!0)):delete i[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let a=n[o];const d=t[a];if(u)if(Object(r["k"])(s,a))d!==s[a]&&(s[a]=d,l=!0);else{const t=Object(r["e"])(a);i[t]=on(u,c,t,d,e,!1)}else d!==s[a]&&(s[a]=d,l=!0)}}l&&A(e,"set","$attrs")}function rn(e,t,n,o){const[i,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let d;i&&Object(r["k"])(i,d=Object(r["e"])(u))?s&&s.includes(d)?(a||(a={}))[d]=l:n[d]=l:Ke(e.emitsOptions,u)||u in o&&l===o[u]||(o[u]=l,c=!0)}if(s){const t=xe(n),o=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=on(i,t,c,o[c],e,!Object(r["k"])(o,c))}}return c}function on(e,t,n,o,i,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===o){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=i;n in r?o=r[n]:(wr(i),o=r[n]=e.call(null,t),Or())}else o=e}a[0]&&(s&&!e?o=!1:!a[1]||""!==o&&o!==Object(r["l"])(n)||(o=!0))}return o}function sn(e,t,n=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const o=e=>{u=!0;const[n,o]=sn(e,t,!0);Object(r["h"])(a,n),o&&c.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!s&&!u)return o.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let d=0;d<s.length;d++){0;const e=Object(r["e"])(s[d]);an(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(an(t)){const n=s[e],o=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(o){const e=ln(Boolean,o.type),n=ln(String,o.type);o[0]=e>-1,o[1]=n<0||e<n,(e>-1||Object(r["k"])(o,"default"))&&c.push(t)}}}}const l=[a,c];return o.set(e,l),l}function an(e){return"$"!==e[0]}function cn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function un(e,t){return cn(e)===cn(t)}function ln(e,t){return Object(r["o"])(t)?t.findIndex(t=>un(t,e)):Object(r["p"])(t)&&un(t,e)?0:-1}const dn=e=>"_"===e[0]||"$stable"===e,fn=e=>Object(r["o"])(e)?e.map(cr):[cr(e)],hn=(e,t,n)=>{const r=Qe((...e)=>fn(t(...e)),n);return r._c=!1,r},pn=(e,t,n)=>{const o=e._ctx;for(const i in e){if(dn(i))continue;const n=e[i];if(Object(r["p"])(n))t[i]=hn(i,n,o);else if(null!=n){0;const e=fn(n);t[i]=()=>e}}},vn=(e,t)=>{const n=fn(t);e.slots.default=()=>n},mn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=xe(t),Object(r["g"])(t,"_",n)):pn(t,e.slots={})}else e.slots={},t&&vn(e,t);Object(r["g"])(e.slots,Qn,1)},gn=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=r["b"];if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(i,t),n||1!==e||delete i._):(s=!t.$stable,pn(t,i)),a=t}else t&&(vn(e,t),a={default:1});if(s)for(const r in i)dn(r)||r in a||delete i[r]};function bn(e,t){const n=Je;if(null===n)return e;const o=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&go(n),i.push({dir:e,instance:o,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function yn(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[r];c&&(j(),Dr(c,n,8,[e.el,a,e,t]),S())}}function _n(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wn=0;function On(e,t){return function(n,o=null){null==o||Object(r["v"])(o)||(o=null);const i=_n(),s=new Set;let a=!1;const c=i.app={_uid:wn++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:yo,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(r,s,u){if(!a){const l=nr(n,o);return l.appContext=i,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Pr(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function In(e,t,n,o,i=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>In(e,t&&(Object(r["o"])(t)?t[s]:t),n,o,i));if(_t(o)&&!i)return;const s=4&o.shapeFlag?Pr(o.component)||o.component.proxy:o.el,a=i?null:s,{i:c,r:u}=e;const l=t&&t.r,d=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(d[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Me(l)&&(l.value=null)),Object(r["p"])(u))Mr(u,c,12,[a,d]);else{const t=Object(r["D"])(u),o=Me(u);if(t||o){const o=()=>{if(e.f){const n=t?d[u]:u.value;i?Object(r["o"])(n)&&Object(r["K"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?d[u]=[s]:(u.value=[s],e.k&&(d[e.k]=u.value))}else t?(d[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):Me(u)&&(u.value=a,e.k&&(d[e.k]=a))};a?(o.id=-1,jn(o,n)):o()}else 0}}function En(){}const jn=st;function kn(e){return Sn(e)}function Sn(e,t){En();const n=Object(r["i"])();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:d,parentNode:f,nextSibling:h,setScopeId:p=r["d"],cloneNode:v,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Yn(e,t)&&(r=K(e),H(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case Un:b(e,t,n,r);break;case Fn:y(e,t,n,r);break;case Vn:null==e&&_(t,n,r,s);break;case Dn:P(e,t,n,r,o,i,s,a,c);break;default:1&d?E(e,t,n,r,o,i,s,a,c):6&d?L(e,t,n,r,o,i,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,o,i,s,a,c,X)}null!=l&&o&&In(l,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)o(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r)},O=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=h(e),o(e,n,r),e=i;o(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=h(e),i(e),e=n;i(t)},E=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?k(t,n,r,o,i,s,a,c):x(e,t,o,i,s,a,c)},k=(e,t,n,i,c,u,l,f)=>{let h,p;const{type:m,props:g,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==v&&-1===_)h=e.el=v(e.el);else{if(h=e.el=a(e.type,u,g&&g.is,g),8&b?d(h,e.children):16&b&&C(e.children,h,null,i,c,u&&"foreignObject"!==m,l,f),w&&yn(e,null,i,"created"),g){for(const t in g)"value"===t||Object(r["z"])(t)||s(h,t,null,g[t],u,e.children,i,c,q);"value"in g&&s(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&fr(p,i,e)}T(h,e,e.scopeId,l,i)}w&&yn(e,null,i,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(h),o(h,t,n),((p=g&&g.onVnodeMounted)||O||w)&&jn(()=>{p&&fr(p,i,e),O&&y.enter(h),w&&yn(e,null,i,"mounted")},c)},T=(e,t,n,r,o)=>{if(n&&p(e,n),r)for(let i=0;i<r.length;i++)p(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;T(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},C=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?ur(e[u]):cr(e[u]);g(null,c,t,n,r,o,i,s,a)}},x=(e,t,n,o,i,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||r["b"],v=t.props||r["b"];let m;n&&Tn(n,!1),(m=v.onVnodeBeforeUpdate)&&fr(m,n,t,e),h&&yn(t,e,n,"beforeUpdate"),n&&Tn(n,!0);const g=i&&"foreignObject"!==t.type;if(f?A(e.dynamicChildren,f,u,n,o,g,a):c||F(e,t,u,null,n,o,g,a,!1),l>0){if(16&l)R(u,t,p,v,n,o,i);else if(2&l&&p.class!==v.class&&s(u,"class",null,v.class,i),4&l&&s(u,"style",p.style,v.style,i),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=v[a];l===c&&"value"!==a||s(u,a,c,l,i,e.children,n,o,q)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=f||R(u,t,p,v,n,o,i);((m=v.onVnodeUpdated)||h)&&jn(()=>{m&&fr(m,n,t,e),h&&yn(t,e,n,"updated")},o)},A=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Dn||!Yn(c,u)||70&c.shapeFlag)?f(c.el):n;g(c,u,l,null,r,o,i,s,!0)}},R=(e,t,n,o,i,a,c)=>{if(n!==o){for(const u in o){if(Object(r["z"])(u))continue;const l=o[u],d=n[u];l!==d&&"value"!==u&&s(e,u,d,l,c,t.children,i,a,q)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in o||s(e,u,n[u],null,c,t.children,i,a,q);"value"in o&&s(e,"value",n.value,o.value)}},P=(e,t,n,r,i,s,a,u,l)=>{const d=t.el=e?e.el:c(""),f=t.anchor=e?e.anchor:c("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;v&&(u=u?u.concat(v):v),null==e?(o(d,n,r),o(f,n,r),C(t.children,n,f,i,s,a,u,l)):h>0&&64&h&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,i,s,a,u),(null!=t.key||i&&t===i.subTree)&&Cn(e,t,!0)):F(e,t,n,f,i,s,a,u,l)},L=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):N(t,n,r,o,i,s,c):M(e,t,c)},N=(e,t,n,r,o,i,s)=>{const a=e.component=br(e,r,o);if(wt(e)&&(a.ctx.renderer=X),Sr(a),a.asyncDep){if(o&&o.registerDep(a,D),!e.el){const e=a.subTree=nr(Fn);y(null,e,t,n)}}else D(a,e,t,n,o,i,s)},M=(e,t,n)=>{const r=t.component=e.component;if(nt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,ro(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,o,i,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:o,u:c,parent:u,vnode:l}=e,d=n;0,Tn(e,!1),n?(n.el=l.el,U(e,n,a)):n=l,o&&Object(r["n"])(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fr(t,u,n,l),Tn(e,!0);const h=Ze(e);0;const p=e.subTree;e.subTree=h,g(p,h,f(p.el),K(p),e,i,s),n.el=h.el,null===d&&ot(e,h.el),c&&jn(c,i),(t=n.props&&n.props.onVnodeUpdated)&&jn(()=>fr(t,u,n,l),i)}else{let a;const{el:c,props:u}=t,{bm:l,m:d,parent:f}=e,h=_t(t);if(Tn(e,!1),l&&Object(r["n"])(l),!h&&(a=u&&u.onVnodeBeforeMount)&&fr(a,f,t),Tn(e,!0),c&&Q){const n=()=>{e.subTree=Ze(e),Q(c,e.subTree,e,i,null)};h?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Ze(e);0,g(null,r,n,o,e,i,s),t.el=r.el}if(d&&jn(d,i),!h&&(a=u&&u.onVnodeMounted)){const e=t;jn(()=>fr(a,f,e),i)}256&t.shapeFlag&&e.a&&jn(e.a,i),e.isMounted=!0,t=n=o=null}},u=e.effect=new w(c,()=>to(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,Tn(e,!0),l()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,nn(e,t.props,r,n),gn(e,t.children,n),j(),ao(void 0,e.update),S()},F=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void B(u,f,n,r,o,i,s,a,c);if(256&h)return void V(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&q(u,o,i),f!==u&&d(n,f)):16&l?16&p?B(u,f,n,r,o,i,s,a,c):q(u,o,i,!0):(8&l&&d(n,""),16&p&&C(f,n,r,o,i,s,a,c))},V=(e,t,n,o,i,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?ur(t[h]):cr(t[h]);g(e[h],r,n,null,i,s,a,c,u)}l>d?q(e,i,s,!0,!1,f):C(t,n,o,i,s,a,c,u,f)},B=(e,t,n,o,i,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],o=t[l]=u?ur(t[l]):cr(t[l]);if(!Yn(r,o))break;g(r,o,n,null,i,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],o=t[h]=u?ur(t[h]):cr(t[h]);if(!Yn(r,o))break;g(r,o,n,null,i,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,r=e<d?t[e].el:o;while(l<=h)g(null,t[l]=u?ur(t[l]):cr(t[l]),n,r,i,s,a,c,u),l++}}else if(l>h)while(l<=f)H(e[l],i,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=h;l++){const e=t[l]=u?ur(t[l]):cr(t[l]);null!=e.key&&m.set(e.key,l)}let b,y=0;const _=h-v+1;let w=!1,O=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=f;l++){const r=e[l];if(y>=_){H(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(b=v;b<=h;b++)if(0===I[b-v]&&Yn(r,t[b])){o=b;break}void 0===o?H(r,i,s,!0):(I[o-v]=l+1,o>=O?O=o:w=!0,g(r,t[o],n,null,i,s,a,c,u),y++)}const E=w?xn(I):r["a"];for(b=E.length-1,l=_-1;l>=0;l--){const e=v+l,r=t[e],f=e+1<d?t[e+1].el:o;0===I[l]?g(null,r,n,f,i,s,a,c,u):w&&(b<0||l!==E[b]?$(r,n,f,2):b--)}}},$=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void $(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,X);if(a===Dn){o(s,t,n);for(let e=0;e<u.length;e++)$(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Vn)return void O(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),jn(()=>c.enter(s),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,()=>{a(),i&&i()})};r?r(s,a,u):u()}else o(s,t,n)},H=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&In(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!_t(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&fr(v,t,e),6&l)G(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&yn(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,X,r):u&&(i!==Dn||d>0&&64&d)?q(u,t,n,!1,!0):(i===Dn&&384&d||!o&&16&l)&&q(c,t,n),r&&z(e)}(p&&(v=s&&s.onVnodeUnmounted)||h)&&jn(()=>{v&&fr(v,t,e),h&&yn(e,null,t,"unmounted")},n)},z=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Dn)return void W(n,r);if(t===Vn)return void I(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},W=(e,t)=>{let n;while(e!==t)n=h(e),i(e),e=n;i(t)},G=(e,t,n)=>{const{bum:o,scope:i,update:s,subTree:a,um:c}=e;o&&Object(r["n"])(o),i.stop(),s&&(s.active=!1,H(a,e,t,n)),c&&jn(c,t),jn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},q=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)H(e[s],t,n,r,o)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),co(),t._vnode=e},X={p:g,um:H,m:$,r:z,mt:N,mc:C,pc:F,pbc:A,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:On(J,Y)}}function Tn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cn(e,t,n=!1){const o=e.children,i=t.children;if(Object(r["o"])(o)&&Object(r["o"])(i))for(let r=0;r<o.length;r++){const e=o[r];let t=i[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[r]=ur(i[r]),t.el=e.el),n||Cn(e,t))}}function xn(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const An=e=>e.__isTeleport;const Rn="components";function Pn(e,t){return Nn(Rn,e,!0,t)||e}const Ln=Symbol();function Nn(e,t,n=!0,o=!1){const i=Je||yr;if(i){const n=i.type;if(e===Rn){const e=Lr(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Mn(i[e]||n[e],t)||Mn(i.appContext[e],t);return!s&&o?n:s}}function Mn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Dn=Symbol(void 0),Un=Symbol(void 0),Fn=Symbol(void 0),Vn=Symbol(void 0),Bn=[];let $n=null;function Hn(e=!1){Bn.push($n=e?null:[])}function zn(){Bn.pop(),$n=Bn[Bn.length-1]||null}let Wn=1;function Gn(e){Wn+=e}function qn(e){return e.dynamicChildren=Wn>0?$n||r["a"]:null,zn(),Wn>0&&$n&&$n.push(e),e}function Kn(e,t,n,r,o,i){return qn(tr(e,t,n,r,o,i,!0))}function Jn(e,t,n,r,o){return qn(nr(e,t,n,r,o,!0))}function Xn(e){return!!e&&!0===e.__v_isVNode}function Yn(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Zn=({key:e})=>null!=e?e:null,er=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["D"])(e)||Me(e)||Object(r["p"])(e)?{i:Je,r:e,k:t,f:!!n}:e:null;function tr(e,t=null,n=null,o=0,i=null,s=(e===Dn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zn(t),ref:t&&er(t),scopeId:Xe,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(lr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Wn>0&&!a&&$n&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&$n.push(u),u}const nr=rr;function rr(e,t=null,n=null,o=0,i=null,s=!1){if(e&&e!==Ln||(e=Fn),Xn(e)){const r=ir(e,t,!0);return n&&lr(r,n),r}if(Nr(e)&&(e=e.__vccOpts),t){t=or(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(Ce(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:it(e)?128:An(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return tr(e,t,n,o,i,a,s,!0)}function or(e){return e?Ce(e)||Qn in e?Object(r["h"])({},e):e:null}function ir(e,t,n=!1){const{props:o,ref:i,patchFlag:s,children:a}=e,c=t?dr(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Zn(c),ref:t&&t.ref?n&&i?Object(r["o"])(i)?i.concat(er(t)):[i,er(t)]:er(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ir(e.ssContent),ssFallback:e.ssFallback&&ir(e.ssFallback),el:e.el,anchor:e.anchor};return u}function sr(e=" ",t=0){return nr(Un,null,e,t)}function ar(e="",t=!1){return t?(Hn(),Jn(Fn,null,e)):nr(Fn,null,e)}function cr(e){return null==e||"boolean"===typeof e?nr(Fn):Object(r["o"])(e)?nr(Dn,null,e.slice()):"object"===typeof e?ur(e):nr(Un,null,String(e))}function ur(e){return null===e.el||e.memo?e:ir(e)}function lr(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),lr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qn in t?3===r&&Je&&(1===Je.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Je}}else Object(r["p"])(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),64&o?(n=16,t=[sr(t)]):n=8);e.children=t,e.shapeFlag|=n}function dr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=Object(r["I"])([t.class,o.class]));else if("style"===e)t.style=Object(r["J"])([t.style,o.style]);else if(Object(r["w"])(e)){const n=t[e],i=o[e];n===i||Object(r["o"])(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=o[e])}return t}function fr(e,t,n,r=null){Dr(e,t,7,[n,r])}const hr=e=>e?Ir(e)?Pr(e)||e.proxy:hr(e.parent):null,pr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hr(e.parent),$root:e=>hr(e.root),$emit:e=>e.emit,$options:e=>Gt(e),$forceUpdate:e=>()=>to(e.update),$nextTick:e=>Zr.bind(e.proxy),$watch:e=>vo.bind(e)}),vr={get({_:e},t){const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=1,o[t];if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];Bt&&(a[t]=0)}}const d=pr[t];let f,h;return d?("$attrs"===t&&T(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(h=u.config.globalProperties,Object(r["k"])(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(o,a)||Object(r["k"])(pr,a)||Object(r["k"])(i.config.globalProperties,a)}};const mr=_n();let gr=0;function br(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||mr,a={uid:gr++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sn(o,i),emitsOptions:qe(o,i),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:o.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ge.bind(null,a),e.ce&&e.ce(a),a}let yr=null;const _r=()=>yr||Je,wr=e=>{yr=e,e.scope.on()},Or=()=>{yr&&yr.scope.off(),yr=null};function Ir(e){return 4&e.vnode.shapeFlag}let Er,jr,kr=!1;function Sr(e,t=!1){kr=t;const{props:n,children:r}=e.vnode,o=Ir(e);tn(e,n,o,t),mn(e,r);const i=o?Tr(e,t):void 0;return kr=!1,i}function Tr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ae(new Proxy(e.ctx,vr));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Rr(e):null;wr(e),j();const i=Mr(o,e,0,[e.props,n]);if(S(),Or(),Object(r["y"])(i)){if(i.then(Or,Or),t)return i.then(n=>{Cr(e,n,t)}).catch(t=>{Ur(t,e,0)});e.asyncDep=i}else Cr(e,i,t)}else xr(e,t)}function Cr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=He(t)),xr(e,n)}function xr(e,t,n){const o=e.type;if(!e.render){if(!t&&Er&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},i),a);o.render=Er(t,c)}}e.render=o.render||r["d"],jr&&jr(e)}wr(e),j(),$t(e),S(),Or()}function Ar(e){return new Proxy(e.attrs,{get(t,n){return T(e,"get","$attrs"),t[n]}})}function Rr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ar(e))},slots:e.slots,emit:e.emit,expose:t}}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(He(Ae(e.exposed)),{get(t,n){return n in t?t[n]:n in pr?pr[n](e):void 0}}))}function Lr(e){return Object(r["p"])(e)&&e.displayName||e.name}function Nr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Mr(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){Ur(i,t,n)}return o}function Dr(e,t,n,o){if(Object(r["p"])(e)){const i=Mr(e,t,n,o);return i&&Object(r["y"])(i)&&i.catch(e=>{Ur(e,t,n)}),i}const i=[];for(let r=0;r<e.length;r++)i.push(Dr(e[r],t,n,o));return i}function Ur(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Mr(s,null,10,[e,o,i])}Fr(e,n,o,r)}function Fr(e,t,n,r=!0){console.error(e)}let Vr=!1,Br=!1;const $r=[];let Hr=0;const zr=[];let Wr=null,Gr=0;const qr=[];let Kr=null,Jr=0;const Xr=Promise.resolve();let Yr=null,Qr=null;function Zr(e){const t=Yr||Xr;return e?t.then(this?e.bind(this):e):t}function eo(e){let t=Hr+1,n=$r.length;while(t<n){const r=t+n>>>1,o=uo($r[r]);o<e?t=r+1:n=r}return t}function to(e){$r.length&&$r.includes(e,Vr&&e.allowRecurse?Hr+1:Hr)||e===Qr||(null==e.id?$r.push(e):$r.splice(eo(e.id),0,e),no())}function no(){Vr||Br||(Br=!0,Yr=Xr.then(lo))}function ro(e){const t=$r.indexOf(e);t>Hr&&$r.splice(t,1)}function oo(e,t,n,o){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),no()}function io(e){oo(e,Wr,zr,Gr)}function so(e){oo(e,Kr,qr,Jr)}function ao(e,t=null){if(zr.length){for(Qr=t,Wr=[...new Set(zr)],zr.length=0,Gr=0;Gr<Wr.length;Gr++)Wr[Gr]();Wr=null,Gr=0,Qr=null,ao(e,t)}}function co(e){if(qr.length){const e=[...new Set(qr)];if(qr.length=0,Kr)return void Kr.push(...e);for(Kr=e,Kr.sort((e,t)=>uo(e)-uo(t)),Jr=0;Jr<Kr.length;Jr++)Kr[Jr]();Kr=null,Jr=0}}const uo=e=>null==e.id?1/0:e.id;function lo(e){Br=!1,Vr=!0,ao(e),$r.sort((e,t)=>uo(e)-uo(t));r["d"];try{for(Hr=0;Hr<$r.length;Hr++){const e=$r[Hr];e&&!1!==e.active&&Mr(e,null,14)}}finally{Hr=0,$r.length=0,co(e),Vr=!1,Yr=null,($r.length||zr.length||qr.length)&&lo(e)}}const fo={};function ho(e,t,n){return po(e,t,n)}function po(e,t,{immediate:n,deep:o,flush:i,onTrack:s,onTrigger:a}=r["b"]){const c=yr;let u,l,d=!1,f=!1;if(Me(e)?(u=()=>e.value,d=!!e._shallow):Se(e)?(u=()=>e,o=!0):Object(r["o"])(e)?(f=!0,d=e.some(Se),u=()=>e.map(e=>Me(e)?e.value:Se(e)?go(e):Object(r["p"])(e)?Mr(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Mr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Dr(e,c,3,[h])}:r["d"],t&&o){const e=u;u=()=>go(e())}let h=e=>{l=g.onStop=()=>{Mr(e,c,4)}};if(kr)return h=r["d"],t?n&&Dr(t,c,3,[u(),f?[]:void 0,h]):u(),r["d"];let p=f?[]:fo;const v=()=>{if(g.active)if(t){const e=g.run();(o||d||(f?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Dr(t,c,3,[e,p===fo?void 0:p,h]),p=e)}else g.run()};let m;v.allowRecurse=!!t,m="sync"===i?v:"post"===i?()=>jn(v,c&&c.suspense):()=>{!c||c.isMounted?io(v):v()};const g=new w(u,m);return t?n?v():p=g.run():"post"===i?jn(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,g)}}function vo(e,t,n){const o=this.proxy,i=Object(r["D"])(e)?e.includes(".")?mo(o,e):()=>o[e]:e.bind(o,o);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=yr;wr(this);const c=po(i,s.bind(o),n);return a?wr(a):Or(),c}function mo(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function go(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Me(e))go(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)go(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{go(e,t)});else if(Object(r["x"])(e))for(const n in e)go(e[n],t);return e}function bo(e,t,n){const o=arguments.length;return 2===o?Object(r["v"])(t)&&!Object(r["o"])(t)?Xn(t)?nr(e,null,[t]):nr(e,t):nr(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Xn(n)&&(n=[n]),nr(e,t,n))}Symbol("");const yo="3.2.26",_o="http://www.w3.org/2000/svg",wo="undefined"!==typeof document?document:null,Oo=new Map,Io={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?wo.createElementNS(_o,e):wo.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>wo.createTextNode(e),createComment:e=>wo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const o=n?n.previousSibling:t.lastChild;let i=Oo.get(e);if(!i){const t=wo.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,i=t.content,r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}Oo.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Eo(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function jo(e,t,n){const o=e.style,i=Object(r["D"])(n);if(n&&!i){for(const e in n)So(o,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&So(o,e,"")}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const ko=/\s*!important$/;function So(e,t,n){if(Object(r["o"])(n))n.forEach(n=>So(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const o=xo(e,t);ko.test(n)?e.setProperty(Object(r["l"])(o),n.replace(ko,""),"important"):e[o]=n}}const To=["Webkit","Moz","ms"],Co={};function xo(e,t){const n=Co[t];if(n)return n;let o=Object(r["e"])(t);if("filter"!==o&&o in e)return Co[t]=o;o=Object(r["f"])(o);for(let r=0;r<To.length;r++){const n=To[r]+o;if(n in e)return Co[t]=n}return t}const Ao="http://www.w3.org/1999/xlink";function Ro(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ao,t.slice(6,t.length)):e.setAttributeNS(Ao,t,n);else{const o=Object(r["C"])(t);null==n||o&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Po(e,t,n,o,i,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const o=typeof e[t];if("boolean"===o)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Lo=Date.now,No=!1;if("undefined"!==typeof window){Lo()>document.createEvent("Event").timeStamp&&(Lo=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);No=!!(e&&Number(e[1])<=53)}let Mo=0;const Do=Promise.resolve(),Uo=()=>{Mo=0},Fo=()=>Mo||(Do.then(Uo),Mo=Lo());function Vo(e,t,n,r){e.addEventListener(t,n,r)}function Bo(e,t,n,r){e.removeEventListener(t,n,r)}function $o(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=zo(t);if(r){const s=i[t]=Wo(r,o);Vo(e,n,s,a)}else s&&(Bo(e,n,s,a),i[t]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function zo(e){let t;if(Ho.test(e)){let n;t={};while(n=e.match(Ho))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Wo(e,t){const n=e=>{const r=e.timeStamp||Lo();(No||r>=n.attached-1)&&Dr(Go(e,n.value),t,5,[e])};return n.value=e,n.attached=Fo(),n}function Go(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const qo=/^on[a-z]/,Ko=(e,t,n,o,i=!1,s,a,c,u)=>{"class"===t?Eo(e,o,i):"style"===t?jo(e,n,o):Object(r["w"])(t)?Object(r["u"])(t)||$o(e,t,n,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Jo(e,t,o,i))?Po(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),Ro(e,t,o,i))};function Jo(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&qo.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!qo.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Xo="transition",Yo="animation",Qo=(e,{slots:t})=>bo(ft,ni(e),t);Qo.displayName="Transition";const Zo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ei=(Qo.props=Object(r["h"])({},ft.props,Zo),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),ti=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function ni(e){const t={};for(const r in e)r in Zo||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:h=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,v=ri(i),m=v&&v[0],g=v&&v[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:I=b,onAppear:E=y,onAppearCancelled:j=_}=t,k=(e,t,n)=>{si(e,t?d:c),si(e,t?l:a),n&&n()},S=(e,t)=>{si(e,p),si(e,h),t&&t()},T=e=>(t,n)=>{const r=e?E:y,i=()=>k(t,e,n);ei(r,[t,i]),ai(()=>{si(t,e?u:s),ii(t,e?d:c),ti(r)||ui(t,o,m,i)})};return Object(r["h"])(t,{onBeforeEnter(e){ei(b,[e]),ii(e,s),ii(e,a)},onBeforeAppear(e){ei(I,[e]),ii(e,u),ii(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){const n=()=>S(e,t);ii(e,f),hi(),ii(e,h),ai(()=>{si(e,f),ii(e,p),ti(w)||ui(e,o,g,n)}),ei(w,[e,n])},onEnterCancelled(e){k(e,!1),ei(_,[e])},onAppearCancelled(e){k(e,!0),ei(j,[e])},onLeaveCancelled(e){S(e),ei(O,[e])}})}function ri(e){if(null==e)return null;if(Object(r["v"])(e))return[oi(e.enter),oi(e.leave)];{const t=oi(e);return[t,t]}}function oi(e){const t=Object(r["M"])(e);return t}function ii(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function si(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ai(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ci=0;function ui(e,t,n,r){const o=e._endId=++ci,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=li(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),i()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,f)}function li(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(Xo+"Delay"),i=r(Xo+"Duration"),s=di(o,i),a=r(Yo+"Delay"),c=r(Yo+"Duration"),u=di(a,c);let l=null,d=0,f=0;t===Xo?s>0&&(l=Xo,d=s,f=i.length):t===Yo?u>0&&(l=Yo,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?Xo:Yo:null,f=l?l===Xo?i.length:c.length:0);const h=l===Xo&&/\b(transform|all)(,|$)/.test(n[Xo+"Property"]);return{type:l,timeout:d,propCount:f,hasTransform:h}}function di(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>fi(t)+fi(e[n])))}function fi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function hi(){return document.body.offsetHeight}new WeakMap,new WeakMap;const pi=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function vi(e){e.target.composing=!0}function mi(e){const t=e.target;t.composing&&(t.composing=!1,gi(t,"input"))}function gi(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const bi={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=pi(i);const s=o||i.props&&"number"===i.props.type;Vo(e,t?"change":"input",t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Object(r["M"])(o)),e._assign(o)}),n&&Vo(e,"change",()=>{e.value=e.value.trim()}),t||(Vo(e,"compositionstart",vi),Vo(e,"compositionend",mi),Vo(e,"change",mi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:i}},s){if(e._assign=pi(s),e.composing)return;if(document.activeElement===e){if(n)return;if(o&&e.value.trim()===t)return;if((i||"number"===e.type)&&Object(r["M"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const yi=["ctrl","shift","alt","meta"],_i={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>yi.some(n=>e[n+"Key"]&&!t.includes(n))},wi=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=_i[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Oi=Object(r["h"])({patchProp:Ko},Io);let Ii;function Ei(){return Ii||(Ii=kn(Oi))}const ji=(...e)=>{const t=Ei().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=ki(e);if(!o)return;const i=t._component;Object(r["p"])(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function ki(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),o=n("1d80"),i=r.Object;e.exports=function(e){return i(o(e))}},"7c73":function(e,t,n){var r,o=n("825a"),i=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete _[h][s[e]];return _()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=o(e),n=new m,m[h]=null,n[v]=e):n=_(),void 0===t?n:i.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),d=n("d44e"),f=n("9112"),h=n("6eeb"),p=n("b622"),v=n("3f8c"),m=n("ae93"),g=s.PROPER,b=s.CONFIGURABLE,y=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",I="values",E="entries",j=function(){return this};e.exports=function(e,t,n,s,p,m,k){c(n,t,s);var S,T,C,x=function(e){if(e===p&&N)return N;if(!_&&e in P)return P[e];switch(e){case O:return function(){return new n(this,e)};case I:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},A=t+" Iterator",R=!1,P=e.prototype,L=P[w]||P["@@iterator"]||p&&P[p],N=!_&&L||x(p),M="Array"==t&&P.entries||L;if(M&&(S=u(M.call(new e)),S!==Object.prototype&&S.next&&(i||u(S)===y||(l?l(S,y):a(S[w])||h(S,w,j)),d(S,A,!0,!0),i&&(v[A]=j))),g&&p==I&&L&&L.name!==I&&(!i&&b?f(P,"name",I):(R=!0,N=function(){return o(L,this)})),p)if(T={values:x(I),keys:m?N:x(O),entries:x(E)},k)for(C in T)(_||R||!(C in P))&&h(P,C,T[C]);else r({target:t,proto:!0,forced:_||R},T);return i&&!k||P[w]===N||h(P,w,N,{name:p}),v[t]=N,T}},"7f9a":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("8925"),s=r.WeakMap;e.exports=o(s)&&/native code/.test(i(s))},"825a":function(e,t,n){var r=n("da84"),o=n("861d"),i=r.String,s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),o=n("1626"),i=n("c6cd"),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},"90e3":function(e,t,n){var r=n("e330"),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),o=n("1626"),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new C(r||[]);return i._invoke=j(e,n,s),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function b(){}var y={};c(y,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,i)&&(y=w);var O=b.prototype=m.prototype=Object.create(y);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,s,a){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function j(e,t,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return A()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=b,c(O,"constructor",b),c(b,"constructor",g),g.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},I(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new E(u(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},I(O),c(O,a,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(i(n))return s(o(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),o=n("83ab"),i=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",p="writable";t.f=o?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=d(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=o(r,{next:i(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return Q})),n.d(t,"g",(function(){return ne})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return ie})),n.d(t,"j",(function(){return ee})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return Y})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return te})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return M})),n.d(t,"q",(function(){return i})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return W})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return S})),n.d(t,"v",(function(){return F})),n.d(t,"w",(function(){return k})),n.d(t,"x",(function(){return z})),n.d(t,"y",(function(){return V})),n.d(t,"z",(function(){return G})),n.d(t,"A",(function(){return g})),n.d(t,"B",(function(){return L})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return D})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return y})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return h})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return C})),n.d(t,"L",(function(){return Z})),n.d(t,"M",(function(){return re})),n.d(t,"N",(function(){return H}));const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=D(r)?f(r):u(r);if(o)for(const e in o)t[e]=o[e]}return t}return D(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,d=/:(.+)/;function f(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function h(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",v="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),g=r(v);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=N(e),r=N(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&b(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>y(e,t))}const w={},O=[],I=()=>{},E=()=>!1,j=/^on[^a-z]/,k=e=>j.test(e),S=e=>e.startsWith("onUpdate:"),T=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,A=(e,t)=>x.call(e,t),R=Array.isArray,P=e=>"[object Map]"===$(e),L=e=>"[object Set]"===$(e),N=e=>e instanceof Date,M=e=>"function"===typeof e,D=e=>"string"===typeof e,U=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&M(e.then)&&M(e.catch),B=Object.prototype.toString,$=e=>B.call(e),H=e=>$(e).slice(8,-1),z=e=>"[object Object]"===$(e),W=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,J=q(e=>e.replace(K,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Y=q(e=>e.replace(X,"-$1").toLowerCase()),Q=q(e=>e.charAt(0).toUpperCase()+e.slice(1)),Z=q(e=>e?"on"+Q(e):""),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oe;const ie=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),o=n("d9b5");e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("6eeb"),f=!!i&&s((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!o&&c(i)){var h=a("Promise").prototype["finally"];i.prototype["finally"]!==h&&d(i.prototype,"finally",h,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,o,i,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),d=n("b622"),f=n("c430"),h=d("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):p=!0);var v=void 0==r||s((function(){var e={};return r[h].call(e)!==e}));v?r={}:f&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),o=n("d039");e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),o=n("f5df");e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b575:function(e,t,n){var r,o,i,s,a,c,u,l,d=n("da84"),f=n("0366"),h=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),g=n("a4b4"),b=n("605d"),y=d.MutationObserver||d.WebKitMutationObserver,_=d.document,w=d.process,O=d.Promise,I=h(d,"queueMicrotask"),E=I&&I.value;E||(r=function(){var e,t;b&&(e=w.domain)&&e.exit();while(o){t=o.fn,o=o.next;try{t()}catch(n){throw o?s():i=void 0,n}}i=void 0,e&&e.enter()},v||b||g||!y||!_?!m&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=f(u.then,u),s=function(){l(r)}):b?s=function(){w.nextTick(r)}:(p=f(p,d),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,s()),i=t}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=o("wks"),l=r.Symbol,d=l&&l["for"],f=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!i(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&i(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):f(t)}return u[e]}},c04e:function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,d=u("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,r=a(e,d);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),o=n("1a2d"),i=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(e,t,n){var r=n("825a"),o=n("861d"),i=n("f069");e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),o=n("1626"),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),o=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,o=n("1a2d"),i=n("b622"),s=i("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!o(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),o=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==o.Pebble},d9b5:function(e,t,n){var r=n("da84"),o=n("d066"),i=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),d=s.values,f=function(e,t){if(e){if(e[u]!==d)try{a(e,u,d)}catch(r){e[u]=d}if(e[l]||a(e,l,t),o[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var h in o)f(r[h]&&r[h].prototype,h);f(i,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(o(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===i(e,-1);return e=n(o(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(o=!1,r=s+1),46===a?-1===t?t=s:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=s+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var r=n("da84"),o=n("1a2d"),i=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,d=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(o(t,u))return t[u];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),d="Array Iterator",f=s.set,h=s.getterFor(d);e.exports=c(Array,"Array",(function(e,t){f(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(v){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,o=n.call,i=r&&r.bind(o,o);e.exports=r?function(e){return e&&i(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,o,i,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),d=n("c65b"),f=n("fea9"),h=n("6eeb"),p=n("e2cc"),v=n("d2bb"),m=n("d44e"),g=n("2626"),b=n("59ed"),y=n("1626"),_=n("861d"),w=n("19aa"),O=n("8925"),I=n("2266"),E=n("1c7e"),j=n("4840"),k=n("2cf4").set,S=n("b575"),T=n("cdf9"),C=n("44de"),x=n("f069"),A=n("e667"),R=n("01b4"),P=n("69f3"),L=n("94ca"),N=n("b622"),M=n("6069"),D=n("605d"),U=n("2d00"),F=N("species"),V="Promise",B=P.getterFor(V),$=P.set,H=P.getterFor(V),z=f&&f.prototype,W=f,G=z,q=u.TypeError,K=u.document,J=u.process,X=x.f,Y=X,Q=!!(K&&K.createEvent&&u.dispatchEvent),Z=y(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,oe=2,ie=1,se=2,ae=!1,ce=L(V,(function(){var e=O(W),t=e!==String(W);if(!t&&66===U)return!0;if(c&&!G["finally"])return!0;if(U>=51&&/native code/.test(e))return!1;var n=new W((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},o=n.constructor={};return o[F]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&M&&!Z})),ue=ce||!E((function(e){W.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!_(e)||!y(t=e.then))&&t},de=function(e,t){var n,r,o,i=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&me(t),t.rejection=ie),!0===a?n=i:(l&&l.enter(),n=a(i),l&&(l.exit(),o=!0)),n===e.promise?u(q("Promise-chain cycle")):(r=le(n))?d(r,n,c,u):c(n)):u(i)}catch(f){l&&!o&&l.exit(),u(f)}},fe=function(e,t){e.notified||(e.notified=!0,S((function(){var n,r=e.reactions;while(n=r.get())de(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},he=function(e,t,n){var r,o;Q?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(o=u["on"+e])?o(r):e===ee&&C("Unhandled promise rejection",n)},pe=function(e){d(k,u,(function(){var t,n=e.facade,r=e.value,o=ve(e);if(o&&(t=A((function(){D?J.emit("unhandledRejection",r,n):he(ee,n,r)})),e.rejection=D||ve(e)?se:ie,t.error))throw t.value}))},ve=function(e){return e.rejection!==ie&&!e.parent},me=function(e){d(k,u,(function(){var t=e.facade;D?J.emit("rejectionHandled",t):he(te,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},be=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=oe,fe(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw q("Promise can't be resolved itself");var r=le(t);r?S((function(){var n={done:!1};try{d(r,t,ge(ye,n,e),ge(be,n,e))}catch(o){be(n,o,e)}})):(e.value=t,e.state=re,fe(e,!1))}catch(o){be({done:!1},o,e)}}};if(ce&&(W=function(e){w(this,G),b(e),d(r,this);var t=B(this);try{e(ge(ye,t),ge(be,t))}catch(n){be(t,n)}},G=W.prototype,r=function(e){$(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:ne,value:void 0})},r.prototype=p(G,{then:function(e,t){var n=H(this),r=X(j(this,W));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=D?J.domain:void 0,n.state==ne?n.reactions.add(r):S((function(){de(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=B(e);this.promise=e,this.resolve=ge(ye,t),this.reject=ge(be,t)},x.f=X=function(e){return e===W||e===i?new o(e):Y(e)},!c&&y(f)&&z!==Object.prototype)){s=z.then,ae||(h(z,"then",(function(e,t){var n=this;return new W((function(e,t){d(s,n,e,t)})).then(e,t)}),{unsafe:!0}),h(z,"catch",G["catch"],{unsafe:!0}));try{delete z.constructor}catch(_e){}v&&v(z,G)}a({global:!0,wrap:!0,forced:ce},{Promise:W}),m(W,V,!1,!0),g(V),i=l(V),a({target:V,stat:!0,forced:ce},{reject:function(e){var t=X(this);return d(t.reject,void 0,e),t.promise}}),a({target:V,stat:!0,forced:c||ce},{resolve:function(e){return T(c&&this===i?W:this,e)}}),a({target:V,stat:!0,forced:ue},{all:function(e){var t=this,n=X(t),r=n.resolve,o=n.reject,i=A((function(){var n=b(t.resolve),i=[],s=0,a=1;I(e,(function(e){var c=s++,u=!1;a++,d(n,t,e).then((function(e){u||(u=!0,i[c]=e,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,o=A((function(){var o=b(t.resolve);I(e,(function(e){d(o,t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),o=n("56ef"),i=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=o(t),c=s.f,u=i.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},e95a:function(e,t,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[i]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ht})),n.d(t,"b",(function(){return _r})),n.d(t,"c",(function(){return pt})),n.d(t,"d",(function(){return gt}));var r=n("1fd5"),o=n("589b"),i=n("e691");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),d=new i["b"]("@firebase/auth");function f(e,...t){d.logLevel<=i["a"].ERROR&&d.error(`Auth (${o["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r["b"]("auth","Firebase",o);return i.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function y(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(o["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if(Object(r["g"])(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function j(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(j()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["r"])()||Object(r["s"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,o,i={}){return M(e,i,async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=Object(r["t"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},R),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw V(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw V(e,"user-disabled",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);h(e,a)}}catch(i){if(i instanceof r["c"])throw i;h(e,"network-request-failed")}}async function D(e,t,n,r,o={}){const i=await N(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?x(e.config,o):`${e.config.apiScheme}://${o}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=Object(r["l"])(e),o=await n.getIdToken(t),i=G(o);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:H(W(i.auth_time)),issuedAtTime:H(W(i.iat)),expirationTime:H(W(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function G(e){var t;const[n,o,i]=e.split(".");if(void 0===n||void 0===o||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(o);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function q(e){const t=G(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r["c"]&&J(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),o=await K(e,$(n,{idToken:r}));g(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Z(e){const t=Object(r["l"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=U(e,o,"/v1/token","key="+i),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(g("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:I}=t;g(y&&I,e,"internal-error");const E=re.fromJSON(this.name,I);g("string"===typeof y,e,"internal-error"),oe(l,e.name),oe(d,e.name),g("boolean"===typeof _,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),oe(f,e.name),oe(h,e.name),oe(p,e.name),oe(v,e.name),oe(m,e.name),oe(b,e.name);const j=new ie({uid:y,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:b});return O&&Array.isArray(O)&&(j.providerData=O.map(e=>Object.assign({},e))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,o),this.fullPersistenceKey=ce("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let o=r[0]||w(ae);const i=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==o)try{await e._remove(i)}catch(c){}})),new ue(o,e,n)):new ue(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=Object(r["m"])()){return/firefox\//i.test(e)}function fe(e=Object(r["m"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r["m"])()){return/crios\//i.test(e)}function pe(e=Object(r["m"])()){return/iemobile/i.test(e)}function ve(e=Object(r["m"])()){return/android/i.test(e)}function me(e=Object(r["m"])()){return/blackberry/i.test(e)}function ge(e=Object(r["m"])()){return/webos/i.test(e)}function be(e=Object(r["m"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=Object(r["m"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["p"])()&&10===document.documentMode}function we(e=Object(r["m"])()){return be(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["m"])());break;case"Worker":n=`${le(Object(r["m"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o["a"]}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(o){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Q(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["l"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return Object(r["l"])(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Te(e,t,n){const r=ke(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ce(t),{host:s,port:a}=xe(t),c=null===a?"":":"+a;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Re()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xe(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:Ae(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ae(t)}}}function Ae(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Re(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ne(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Pe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ne(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Le(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return De(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="http://localhost";class Be extends Pe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new Be(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Fe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:Ve,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["t"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function He(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function ze(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const We={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),We)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Pe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=Object(r["u"])(Object(r["h"])(e))["link"],n=t?Object(r["u"])(Object(r["h"])(t))["deep_link_id"]:null,o=Object(r["u"])(Object(r["h"])(e))["deep_link_id"],i=o?Object(r["u"])(Object(r["h"])(o))["link"]:null;return i||o||n||t||e}class Xe{constructor(e){var t,n,o,i,s,a;const c=Object(r["u"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Ke(null!==(o=c["mode"])&&void 0!==o?o:null);g(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return g(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return D(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=st(n),s=new it({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=st(n);return new it({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function st(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r["c"]{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function ct(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lt(e,t,n=!1){var r;const{auth:o}=e,i="reauthenticate";try{const r=await K(e,ct(o,i,t,e),n);g(r.idToken,o,"internal-error");const s=G(r.idToken);g(s,o,"internal-error");const{sub:a}=s;return g(e.uid===a,o,"user-mismatch"),it._forOperation(e,i,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&h(o,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r="signIn",o=await ct(e,r,t),i=await it._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function ft(e,t){return dt(ke(e),t)}async function ht(e,t,n){const r=ke(e),o=await ot(r,{returnSecureToken:!0,email:t,password:n}),i=await it._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(i.user),i}function pt(e,t,n){return ft(Object(r["l"])(e),Ye.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t,n,o){return Object(r["l"])(e).onIdTokenChanged(t,n,o)}function mt(e,t,n){return Object(r["l"])(e).beforeAuthStateChanged(t,n)}function gt(e){return Object(r["l"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function yt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const _t="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_t,"1"),this.storage.removeItem(_t),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){const e=Object(r["m"])();return fe(e)||be(e)}const It=1e3,Et=10;class jt extends wt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ot()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);_e()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Et):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},It)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jt.type="LOCAL";const kt=jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends wt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}St.type="SESSION";const Tt=St;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new xt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map(async e=>e(t.origin,o)),a=await Ct(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.receivers=[];class Rt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((s,a)=>{const c=At("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function Lt(e){Pt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return"undefined"!==typeof Pt()["WorkerGlobalScope"]&&"function"===typeof Pt()["importScripts"]}async function Mt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Dt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ut(){return Nt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="firebaseLocalStorageDb",Vt=1,Bt="firebaseLocalStorage",$t="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zt(e,t){return e.transaction([Bt],t?"readwrite":"readonly").objectStore(Bt)}function Wt(){const e=indexedDB.deleteDatabase(Ft);return new Ht(e).toPromise()}function Gt(){const e=indexedDB.open(Ft,Vt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Bt,{keyPath:$t})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Bt)?t(n):(n.close(),await Wt(),t(await Gt()))})})}async function qt(e,t,n){const r=zt(e,!0).put({[$t]:t,value:n});return new Ht(r).toPromise()}async function Kt(e,t){const n=zt(e,!1).get(t),r=await new Ht(n).toPromise();return void 0===r?null:r.value}function Jt(e,t){const n=zt(e,!0).delete(t);return new Ht(n).toPromise()}const Xt=800,Yt=3;class Qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Gt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Yt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xt._getInstance(Ut()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mt(),!this.activeServiceWorker)return;this.sender=new Rt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Dt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gt();return await qt(e,_t,"1"),await Jt(e,_t),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Kt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=zt(e,!1).getAll();return new Ht(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qt.type="LOCAL";const Zt=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function tn(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function rn(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",nn().appendChild(r)})}function on(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn="recaptcha";async function an(e,t,n){var r;const o=await n.verify();try{let i;if(g("string"===typeof o,e,"argument-error"),g(n.type===sn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){g("enroll"===t.type,e,"internal-error");const n=await bt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await en(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(e){this.providerId=cn.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return an(this.auth,e,Object(r["l"])(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cn.credentialFromTaggedObject(t)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class ln extends Pe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dn(e){return dt(e.auth,new ln(e),e.bypassAuthState)}function fn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),lt(n,new ln(e),e.bypassAuthState)}async function hn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ut(n,new ln(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dn;case"linkViaPopup":case"linkViaRedirect":return hn;case"reauthViaPopup":case"reauthViaRedirect":return fn;default:h(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new C(2e3,1e4);class mn extends pn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=At();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,vn.get())};e()}}mn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn="pendingRedirect",bn=new Map;class yn extends pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bn.get(this.auth._key());if(!e){try{const t=await _n(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}bn.set(this.auth._key(),e)}return this.bypassAuthState||bn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function _n(e,t){const n=In(t),r=On(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function wn(e,t){bn.set(e._key(),t)}function On(e){return w(e._redirectPersistence)}function In(e){return ce(gn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t,n=!1){const r=ke(e),o=un(r,t),i=new yn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jn=6e5;class kn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Tn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sn(e))}saveEventToCache(e){this.cachedEventUids.add(Sn(e)),this.lastProcessedEventTime=Date.now()}}function Sn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Tn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Cn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rn=/^https?/;async function Pn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xn(e);for(const r of t)try{if(Ln(r))return}catch(n){}h(e,"unauthorized-domain")}function Ln(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Rn.test(n))return!1;if(An.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new C(3e4,6e4);function Mn(){const e=Pt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Dn(e){return new Promise((t,n)=>{var r,o,i;function s(){Mn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mn(),n(p(e,"network-request-failed"))},timeout:Nn.get()})}if(null===(o=null===(r=Pt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Pt().gapi)||void 0===i?void 0:i.load)){const t=on("iframefcb");return Pt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},rn("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Un=null,e})}let Un=null;function Fn(e){return Un=Un||Dn(e),Un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new C(5e3,15e3),Bn="__/auth/iframe",$n="emulator/auth/iframe",Hn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,$n):`https://${e.config.authDomain}/${Bn}`,i={apiKey:t.apiKey,appName:e.name,v:o["a"]},s=zn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Object(r["t"])(i).slice(1)}`}async function Gn(e){const t=await Fn(e),n=Pt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Wn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=Pt().setTimeout(()=>{r(o)},Vn.get());function s(){Pt().clearTimeout(i),n(t)}t.ping(s).then(s,()=>{r(o)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kn=500,Jn=600,Xn="_blank",Yn="http://localhost";class Qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Zn(e,t,n,o=Kn,i=Jn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},qn),{width:o.toString(),height:i.toString(),top:s,left:a}),l=Object(r["m"])().toLowerCase();n&&(c=he(l)?Xn:n),de(l)&&(t=t||Yn,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return er(t||"",c),new Qn(null);const f=window.open(t||"",c,d);g(f,e,"popup-blocked");try{f.focus()}catch(h){}return new Qn(f)}function er(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="__/auth/handler",nr="emulator/auth/handler";function rr(e,t,n,i,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o["a"],eventId:s};if(t instanceof Qe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["o"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ze){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${or(e)}?${Object(r["t"])(u).slice(1)}`}function or({config:e}){return e.emulator?x(e,nr):`https://${e.authDomain}/${tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tt,this._completeRedirectFn=En,this._overrideRedirectResult=wn}async _openPopup(e,t,n,r){var o;y(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=rr(e,t,n,E(),r);return Zn(e,i,At())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Lt(rr(e,t,n,E(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Gn(e),n=new kn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ir,{type:ir},n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ir];void 0!==o&&t(!!o),h(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||be()}}const ar=sr;class cr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class ur extends cr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ur(e)}_finalizeEnroll(e,t,n){return yt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lr{constructor(){}static assertion(e){return ur._fromCredential(e)}}lr.FACTOR_ID="phone";var dr="@firebase/auth",fr="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vr(e){Object(o["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((t,r)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new je(t,r,o);return I(a,n),a})(r,o)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(o["c"])(new a["a"]("auth-internal",e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new hr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(o["f"])(dr,fr,pr(e)),Object(o["f"])(dr,fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=300,gr=Object(r["k"])("authIdTokenMaxAge")||mr;let br=null;const yr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gr)return;const o=null===n||void 0===n?void 0:n.token;br!==o&&(br=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer "+o}:{}}))};function _r(e=Object(o["d"])()){const t=Object(o["b"])(e,"auth");if(t.isInitialized())return t.getImmediate();const n=O(e,{popupRedirectResolver:ar,persistence:[Zt,kt,Tt]}),i=Object(r["k"])("authTokenSyncURL");if(i){const e=yr(i);mt(n,e,()=>e(n.currentUser)),vt(n,t=>e(t))}const s=Object(r["j"])("auth");return s&&Te(n,"http://"+s),n}vr("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),o=n("00ee"),i=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=o?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.0fa93b18.js.map