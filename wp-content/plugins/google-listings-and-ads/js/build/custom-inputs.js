!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=395)}({395:function(e,t,n){"use strict";n.r(t);var o=function(e){var t=e.parents("div.select-with-text-input").find(".custom-input");"_gla_custom_value"===e.val()?t.show():t.hide()},r=function(e){var t=new RegExp("[^0-9]*","gi"),n=e.val(),o=n.replace(t,"");n!==o&&e.val(o)};window.jQuery((function(e){var t=function(){var t,n;(n=(t=e)("div.select-with-text-input select")).each((function(e,n){o(t(n))})),n.on("change",(function(){o(t(this))})),function(e){var t=e(".gla-input-integer[type=text]");t.on("change",(function(){r(e(this))})),t.on("keyup",(function(){r(e(this))}))}(e)};e("#woocommerce-product-data").on("woocommerce_variations_loaded",t),e(document.body).on("woocommerce_variations_added",t),t()}))}});