!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iU1Pc"),i={formPromis:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function u(e,o){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}i.formPromis.addEventListener("submit",(function(e){e.preventDefault(),function(e,o,n){for(var t=1;t<=n;t+=1)u(t,e+=1===t?0:o).then((function(e){var o=e.position,n=e.delay;r.Notify.success("Fulfilled promise ".concat(o," in ").concat(n,"ms"),{timeout:2e3})})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("Rejected promise ".concat(o," in ").concat(n,"ms"),{timeout:2e3})}))}(Number(i.delay.value),Number(i.step.value),Number(i.amount.value))}))}();
//# sourceMappingURL=03-promises.b4676dca.js.map