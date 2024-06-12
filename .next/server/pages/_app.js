(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/locales/en/translation.json */ "./public/locales/en/translation.json");
/* harmony import */ var _locales_es_translation_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/locales/es/translation.json */ "./public/locales/es/translation.json");




const resources = {
  en: {
    translation: _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_2__
  },
  es: {
    translation: _locales_es_translation_json__WEBPACK_IMPORTED_MODULE_3__
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0___default().use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((i18next__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Kelas\\Capstone\\react-delivery-landing-page\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("i18next");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./public/locales/en/translation.json":
/*!********************************************!*\
  !*** ./public/locales/en/translation.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"header":{"logo":"DeliveFree","nav":{"home":"Home","about":"About","services":"Services","contact":"Contact us"},"order":"Login"},"main":{"home":{"title":"Mengirimkan paket lebih mudah dan simpel","description":"Kirim paket anda dari mana saja dan kapan saja.","getStarted":"Mulai"},"about":{"title":"Penasaran tentang kami?","description":"Perusahaan kami berdedikasi untuk mengirimkan produk-produk para pelanggan dengan kualitas pelayanan yang semaksimal mungkin."},"security":{"title":"Keamananmu sangatlah penting","description":"Saat produk anda sampai, kami memiliki protokol keamanan kesehatan kami sendiri, dengan begitu kamu akan dilindungi dari penyakit yang berpotensi terbawa paket yang dikirimkan."},"services":{"title":"Layanan yang kami sediakan","learnMore":"Learn more","servOff1":"Pembayaran","descOff1":"Bayar melalui paypal, transfer bank maupun kartu debit/kredit.","servOff2":"Layanan pengiriman","descOff2":"Kami menawarkan berbagai jenis layanan pengiriman paket.","servOff3":"Tracking","descOff3":"Mengecek status pengiriman lebih mudah dengan sistem pelacakan kami."},"app":{"title":"Cek status pengirimanmu kapan saja","description":"Dengan aplikasi kami kamu bisa melihat status pengirimanmu dengan lebih mudah dan prakits","storeApple":"App Store","storeGoogle":"Google Play"},"contact":{"title":"Hubungi kami","description":"Kamu bisa menghubungi kami melalui service center, Telepon, dan Email kami","info":{"phoneLabel":"Telephone","phone":"123 - 456 - 789","emailLabel":"Email","email":"delivefree@email.com","addressLabel":"Lokasi","address":"Semarang"},"contactUs":"Contact Us"}},"footer":{"logo":"DeliveFree","description":"Kirim paket dengan lebih mudah","services":"Layanan Kami","pricing":"Harga","discounts":"Diskon","reportBug":"Laporkan Bug","terms":"Syarat dan Ketentuan","company":"Perusahaan Kami","blog":"Blog","ourMission":"Misi Kami","getTouch":"Hubungi Kami","community":"Komunitas","support":"Support","questions":"Pertanyaan","help":"Bantuan Pelanggan","social":{"facebook":{"title":"facebook","link":"https://www.facebook.com/"},"twitter":{"title":"twitter","link":"https://www.twitter.com/"},"instagram":{"title":"instagram","link":"https://www.instagram.com/"}}},"scrollUp":{"title":"Back to top!"},"languageChanger":{"languageSelector":"Language selector","zoneName":"EEUU","langName":"English","zoneFlag":"$t(languageChanger.langName) language"},"colorChanger":{"yellow":"change to yellow theme!","red":"change to red theme!","orange":"change to orange theme!","green":"change to green theme!"}}');

/***/ }),

/***/ "./public/locales/es/translation.json":
/*!********************************************!*\
  !*** ./public/locales/es/translation.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"header":{"logo":"Delivery","nav":{"home":"Inicio","about":"Sobre nosotros","services":"Servicios","contact":"Contacto"},"order":"¡Pide ya!"},"main":{"home":{"title":"Pide tus productos rápido y fácil","description":"Pide tus comidas favoritas a cualquier hora y te lo llevaremos justo dónde estés","getStarted":"Empecemos"},"about":{"title":"Conoce un poco más de nosotros","description":"Somos una compañía dedicada a la distribución de productos entregándolos en tu hogar o el lugar dónde estés, con la mejor calidad de entrega."},"security":{"title":"Tu seguridad es importante","description":"Cuando te llega tu pedido, contamos con protocolos de seguridad sanitaria, para que estés protegido de cualquier enfermedad. Mira el video de cómo se realiza la entrega."},"services":{"title":"Algunos servicios que ofrecemos","learnMore":"Más info","servOff1":"Facilidades de Pago","descOff1":"Paga con Visa o PayPal sin ningún problema.","servOff2":"Encuentra tu producto","descOff2":"Ofrecemos venta de productos a través de Internet.","servOff3":"Seguimiento del pedido","descOff3":"En nuestra aplicación puede ver en tiempo real su pedido."},"app":{"title":"Sigue tu pedido en tiempo real","description":"Con nuestra app puedes observar la ruta de tu pedido, desde nuestra central a dónde estés. ¡Síguelo en la app!","storeApple":"App Store","storeGoogle":"Google Play"},"contact":{"title":"Contacta con nosotros","description":"Puedes contactarnos desde aquí, puedes escribirnos, llamarnos o visitar nuestro centro de servicio, con gusto te atenderemos.","info":{"phoneLabel":"Teléfono","phone":"123 - 456 - 789","emailLabel":"Email","email":"delivery@email.com","addressLabel":"Dirección","address":"Planeta Tierra"},"contactUs":"Contáctanos"}},"footer":{"logo":"Delivery","description":"Pide productos fácil y rápido","services":"Nuestros Servicios","pricing":"Precios","discounts":"Descuentos","reportBug":"Informa de un error","terms":"Términos del servicio","company":"Nuestra compañía","blog":"Blog","ourMission":"Nuestra misión","getTouch":"Contáctanos","community":"Comunidad","support":"Soporte","questions":"Preguntas","help":"Ayuda","social":{"facebook":{"title":"facebook","link":"https://www.facebook.com/"},"twitter":{"title":"twitter","link":"https://www.twitter.com/"},"instagram":{"title":"instagram","link":"https://www.instagram.com/"}}},"scrollUp":{"title":"¡Arriba!"},"languageChanger":{"languageSelector":"Selector de idioma","zoneName":"España","langName":"Castellano","zoneFlag":"Idioma $t(languageChanger.langName)"},"colorChanger":{"yellow":"¡Cambia a color amarillo!","red":"¡Cambia a color rojo!","orange":"¡Cambia a color naranja!","green":"¡Cambia a color verde!"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUksU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxFQUFFLEVBQUU7QUFDRkMsSUFBQUEsV0FBVyxFQUFFSix5REFBYUE7QUFEeEIsR0FEWTtBQUloQkssRUFBQUEsRUFBRSxFQUFFO0FBQ0ZELElBQUFBLFdBQVcsRUFBRUgseURBQWFBO0FBRHhCO0FBSlksQ0FBbEI7QUFTQUgsa0RBQUEsQ0FBWUMsMkRBQVosRUFBOEJRLElBQTlCLENBQW1DO0FBQ2pDTCxFQUFBQSxTQURpQztBQUVqQ00sRUFBQUEsR0FBRyxFQUFFLElBRjRCO0FBR2pDQyxFQUFBQSxXQUFXLEVBQUU7QUFIb0IsQ0FBbkM7QUFNQSxpRUFBZVgsZ0RBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBRUEsU0FBU1ksS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZGVsaXZlcnktbGFuZGluZy1wYWdlLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1kZWxpdmVyeS1sYW5kaW5nLXBhZ2UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3JlYWN0LWRlbGl2ZXJ5LWxhbmRpbmctcGFnZS9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly9yZWFjdC1kZWxpdmVyeS1sYW5kaW5nLXBhZ2UvZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtZGVsaXZlcnktbGFuZGluZy1wYWdlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCdcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcblxyXG5pbXBvcnQgdHJhbnNsYXRpb25FTiBmcm9tICdAL2xvY2FsZXMvZW4vdHJhbnNsYXRpb24uanNvbidcclxuaW1wb3J0IHRyYW5zbGF0aW9uRVMgZnJvbSAnQC9sb2NhbGVzL2VzL3RyYW5zbGF0aW9uLmpzb24nXHJcblxyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAgZW46IHtcclxuICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkVOXHJcbiAgfSxcclxuICBlczoge1xyXG4gICAgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRVNcclxuICB9XHJcbn1cclxuXHJcbmkxOG5leHQudXNlKGluaXRSZWFjdEkxOG5leHQpLmluaXQoe1xyXG4gIHJlc291cmNlcyxcclxuICBsbmc6ICdlbicsXHJcbiAgZmFsbGJhY2tMbmc6ICdlbidcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG5leHRcclxuIiwiaW1wb3J0ICcuLi9pMThuJ1xyXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuc2NzcydcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImkxOG5leHQiLCJpbml0UmVhY3RJMThuZXh0IiwidHJhbnNsYXRpb25FTiIsInRyYW5zbGF0aW9uRVMiLCJyZXNvdXJjZXMiLCJlbiIsInRyYW5zbGF0aW9uIiwiZXMiLCJ1c2UiLCJpbml0IiwibG5nIiwiZmFsbGJhY2tMbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=