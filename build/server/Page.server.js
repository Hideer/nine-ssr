(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"Page": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/ssr-temporary-routes.js":
/*!***************************************!*\
  !*** ./build/ssr-temporary-routes.js ***!
  \***************************************/
/*! exports provided: FeRoutes, Layout, App, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeRoutes", function() { return FeRoutes; });
/* harmony import */ var _store_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index.ts */ "./web/store/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store_index_ts__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _components_layout_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/index.vue */ "./web/components/layout/index.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _components_layout_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_layout_App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/App.vue */ "./web/components/layout/App.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _components_layout_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// The file is provisional，don't depend on it 

var FeRoutes = [{
  "path": "/detail/:id",
  "component": function component() {
    return Promise.resolve(/*! import() | detail-id */).then(__webpack_require__.bind(null, /*! @/pages/detail/render$id.vue */ "./web/pages/detail/render$id.vue"));
  },
  "webpackChunkName": "detail-id",
  "fetch": function fetch() {
    return Promise.resolve(/*! import() | detail-id-fetch */).then(__webpack_require__.bind(null, /*! @/pages/detail/fetch.ts */ "./web/pages/detail/fetch.ts"));
  }
}, {
  "path": "/",
  "component": function component() {
    return Promise.resolve(/*! import() | index */).then(__webpack_require__.bind(null, /*! @/pages/index/render.vue */ "./web/pages/index/render.vue"));
  },
  "webpackChunkName": "index",
  "fetch": function fetch() {
    return Promise.resolve(/*! import() | index-fetch */).then(__webpack_require__.bind(null, /*! @/pages/index/fetch.ts */ "./web/pages/index/fetch.ts"));
  }
}];




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/brief/index.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  data: function data() {
    return {
      briefData: this.data[0].data
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/App.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 在这里可以进行一些全局组件的注册逻辑
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/player/index.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  data: function data() {
    return {
      playData: this.data[0].data,
      play: false
    };
  },
  methods: {
    playVideo: function playVideo() {
      this.play = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/recommend/index.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/rectangle/index.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/rectangle/index.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  methods: {
    toDetail: function toDetail() {
      this.$router.push('/detail/cbba934b14f747049187');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/search/index.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    searchText: function searchText(state) {
      return state.searchStore.searchText;
    }
  })),
  methods: {
    setText: function setText(e) {
      this.$store.dispatch('searchStore/setText', {
        payload: {
          text: e.target.value
        }
      });
    },
    toSearch: function toSearch() {
      location.href = "https://search.youku.com/search_video?keyword=".concat(this.searchText);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/slider/index.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/slider/index.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-awesome-swiper */ "vue-awesome-swiper");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["SwiperSlide"]
  },
  directives: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["directive"]
  },
  props: ['data'],
  data: function data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          loop: true
        }
      }
    };
  },
  computed: {
    swiper: function swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted: function mounted() {
    this.swiper.slideTo(2, 1000, false);
  },
  methods: {
    toDetail: function toDetail() {
      this.$router.push('/detail/cbba934b14f747049187');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/detail/render$id.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_player_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/player/index.vue */ "./web/components/player/index.vue");
/* harmony import */ var _components_search_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/search/index.vue */ "./web/components/search/index.vue");
/* harmony import */ var _components_brief_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/brief/index.vue */ "./web/components/brief/index.vue");
/* harmony import */ var _components_recommend_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/recommend/index.vue */ "./web/components/recommend/index.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Player: _components_player_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Search: _components_search_index_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Brief: _components_brief_index_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Recommend: _components_recommend_index_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    detailData: function detailData(state) {
      var _state$detailStore;

      return (_state$detailStore = state.detailStore) === null || _state$detailStore === void 0 ? void 0 : _state$detailStore.data;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/index/render.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/slider/index.vue */ "./web/components/slider/index.vue");
/* harmony import */ var _components_rectangle_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/rectangle/index.vue */ "./web/components/rectangle/index.vue");
/* harmony import */ var _components_search_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/search/index.vue */ "./web/components/search/index.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Slider: _components_slider_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rectangle: _components_rectangle_index_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Search: _components_search_index_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    indexData: function indexData(state) {
      var _state$indexStore;

      return (_state$indexStore = state.indexStore) === null || _state$indexStore === void 0 ? void 0 : _state$indexStore.data;
    }
  }))
});

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/index.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/rectangle/index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/rectangle/index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/slider/index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/slider/index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/ssr-plugin-vue/cjs/entry/clone.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-plugin-vue/cjs/entry/clone.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = void 0; // @ts-nocheck

function deepClone(item) {
  if (!item) {
    return item;
  } // null, undefined values check


  var types = [Number, String, Boolean];
  var result; // normalizing primitives if someone did new String('aaa'), or new Number('444');

  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item);
    }
  });

  if (typeof result === 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = [];
      item.forEach(function (child, index, array) {
        result[index] = deepClone(child);
      });
    } else if (_typeof(item) === 'object') {
      if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};

          for (var i in item) {
            // eslint-disable-next-line
            result[i] = deepClone(item[i]);
          }
        }
      } else {
        result = item;
      }
    } else {
      result = item;
    }
  }

  return result;
}

exports.deepClone = deepClone;

/***/ }),

/***/ "./node_modules/ssr-plugin-vue/cjs/entry/create.js":
/*!*********************************************************!*\
  !*** ./node_modules/ssr-plugin-vue/cjs/entry/create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RealVuex = exports.RealRouter = exports.RealVue = exports.createStore = exports.createRouter = void 0; // @ts-nocheck

var Vue = __webpack_require__(/*! vue */ "vue");

var Vuex = __webpack_require__(/*! vuex */ "vuex");

var Router = __webpack_require__(/*! vue-router */ "vue-router");

var ssr_temporary_routes_1 = __webpack_require__(/*! _build/ssr-temporary-routes */ "./build/ssr-temporary-routes.js");

var clone_1 = __webpack_require__(/*! ./clone */ "./node_modules/ssr-plugin-vue/cjs/entry/clone.js"); // without tsconfig esModuleInterop options must use the compatible syntax


var RealVue = Vue["default"] || Vue;
exports.RealVue = RealVue;
var RealRouter = Router["default"] || Router;
exports.RealRouter = RealRouter;
var RealVuex = Vuex["default"] || Vuex;
exports.RealVuex = RealVuex;
RealVue.use(RealRouter);
RealVue.use(RealVuex);

function createRouter() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _a;

  return new RealRouter({
    mode: 'history',
    routes: ssr_temporary_routes_1.FeRoutes,
    base: (_a = options.base) !== null && _a !== void 0 ? _a : '/'
  });
}

exports.createRouter = createRouter;

function createStore() {
  var _a;

  return new Vuex.Store((_a = (0, clone_1.deepClone)(ssr_temporary_routes_1.store)) !== null && _a !== void 0 ? _a : {});
}

exports.createStore = createStore;

/***/ }),

/***/ "./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js":
/*!***************************************************************!*\
  !*** ./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverRender = void 0;

var Vue = __webpack_require__(/*! vue */ "vue");

var ssr_server_utils_1 = __webpack_require__(/*! ssr-server-utils */ "ssr-server-utils");

var vuex_router_sync_1 = __webpack_require__(/*! vuex-router-sync */ "vuex-router-sync");

var serialize = __webpack_require__(/*! serialize-javascript */ "serialize-javascript"); // @ts-expect-error


var Routes = __webpack_require__(/*! _build/ssr-temporary-routes */ "./build/ssr-temporary-routes.js");

var create_1 = __webpack_require__(/*! ./create */ "./node_modules/ssr-plugin-vue/cjs/entry/create.js");

var FeRoutes = Routes.FeRoutes,
    App = Routes.App,
    layoutFetch = Routes.layoutFetch,
    Layout = Routes.Layout,
    PrefixRouterBase = Routes.PrefixRouterBase;

var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx, config) {
    var _a, _b, cssOrder, jsOrder, dynamic, mode, customeHeadScript, customeFooterScript, chunkName, parallelFetch, disableClientRender, prefix, router, store, base, viteMode, _ctx$request, path, url, routeItem, dynamicCssOrder, manifest, isCsr, layoutFetchData, fetchData, fetch, currentFetch, _yield$Promise$all, _yield$Promise$all2, combineAysncData, state, app;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cssOrder = config.cssOrder, jsOrder = config.jsOrder, dynamic = config.dynamic, mode = config.mode, customeHeadScript = config.customeHeadScript, customeFooterScript = config.customeFooterScript, chunkName = config.chunkName, parallelFetch = config.parallelFetch, disableClientRender = config.disableClientRender, prefix = config.prefix;
            router = (0, create_1.createRouter)();
            store = (0, create_1.createStore)();
            base = prefix !== null && prefix !== void 0 ? prefix : PrefixRouterBase; // 以开发者实际传入的为最高优先级

            viteMode = process.env.BUILD_TOOL === 'vite';
            (0, vuex_router_sync_1.sync)(store, router);
            _ctx$request = ctx.request, path = _ctx$request.path, url = _ctx$request.url;

            if (base) {
              path = (0, ssr_server_utils_1.normalizePath)(path, base);
              url = (0, ssr_server_utils_1.normalizePath)(url, base);
            }

            routeItem = (0, ssr_server_utils_1.findRoute)(FeRoutes, path);

            if (routeItem) {
              _context.next = 11;
              break;
            }

            throw new Error("\n    \u67E5\u627E\u7EC4\u4EF6\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u5F53\u524D path: ".concat(path, " \u5BF9\u5E94\u524D\u7AEF\u7EC4\u4EF6\u662F\u5426\u5B58\u5728\n    \u82E5\u521B\u5EFA\u4E86\u65B0\u7684\u9875\u9762\u6587\u4EF6\u5939\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C npm start \u91CD\u542F\u670D\u52A1\n    "));

          case 11:
            dynamicCssOrder = cssOrder;

            if (!(dynamic && !viteMode)) {
              _context.next = 17;
              break;
            }

            dynamicCssOrder = cssOrder.concat(["".concat(routeItem.webpackChunkName, ".css")]);
            _context.next = 16;
            return (0, ssr_server_utils_1.addAsyncChunk)(dynamicCssOrder, routeItem.webpackChunkName);

          case 16:
            dynamicCssOrder = _context.sent;

          case 17:
            if (!viteMode) {
              _context.next = 21;
              break;
            }

            _context.t0 = {};
            _context.next = 24;
            break;

          case 21:
            _context.next = 23;
            return (0, ssr_server_utils_1.getManifest)();

          case 23:
            _context.t0 = _context.sent;

          case 24:
            manifest = _context.t0;
            isCsr = !!(mode === 'csr' || ((_a = ctx.request.query) === null || _a === void 0 ? void 0 : _a.csr));
            layoutFetchData = {};
            fetchData = {};

            if (isCsr) {
              _context.next = 66;
              break;
            }

            fetch = routeItem.fetch;

            if (!fetch) {
              _context.next = 36;
              break;
            }

            _context.next = 33;
            return fetch();

          case 33:
            _context.t1 = _context.sent["default"];
            _context.next = 37;
            break;

          case 36:
            _context.t1 = null;

          case 37:
            currentFetch = _context.t1;
            router.push(url); // csr 下不需要服务端获取数据

            if (!parallelFetch) {
              _context.next = 48;
              break;
            }

            _context.next = 42;
            return Promise.all([layoutFetch ? layoutFetch({
              store: store,
              router: router.currentRoute
            }, ctx) : Promise.resolve({}), currentFetch ? currentFetch({
              store: store,
              router: router.currentRoute
            }, ctx) : Promise.resolve({})]);

          case 42:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            layoutFetchData = _yield$Promise$all2[0];
            fetchData = _yield$Promise$all2[1];
            _context.next = 64;
            break;

          case 48:
            if (!layoutFetch) {
              _context.next = 54;
              break;
            }

            _context.next = 51;
            return layoutFetch({
              store: store,
              router: router.currentRoute
            }, ctx);

          case 51:
            _context.t2 = _context.sent;
            _context.next = 55;
            break;

          case 54:
            _context.t2 = {};

          case 55:
            layoutFetchData = _context.t2;

            if (!currentFetch) {
              _context.next = 62;
              break;
            }

            _context.next = 59;
            return currentFetch({
              store: store,
              router: router.currentRoute
            }, ctx);

          case 59:
            _context.t3 = _context.sent;
            _context.next = 63;
            break;

          case 62:
            _context.t3 = {};

          case 63:
            fetchData = _context.t3;

          case 64:
            _context.next = 67;
            break;

          case 66:
            (0, ssr_server_utils_1.logGreen)("Current path ".concat(path, " use csr render mode"));

          case 67:
            combineAysncData = Object.assign({}, layoutFetchData !== null && layoutFetchData !== void 0 ? layoutFetchData : {}, fetchData !== null && fetchData !== void 0 ? fetchData : {});
            state = Object.assign({}, (_b = store.state) !== null && _b !== void 0 ? _b : {}, combineAysncData); // @ts-expect-error

            app = new Vue({
              router: router,
              store: store,
              render: function render(h) {
                var _a, _b;

                var injectCss = [];

                if (viteMode) {
                  injectCss.push(h('link', {
                    attrs: {
                      rel: 'stylesheet',
                      href: "/server/static/css/".concat(chunkName, ".css")
                    }
                  }));
                } else {
                  dynamicCssOrder.forEach(function (css) {
                    if (manifest[css]) {
                      injectCss.push(h('link', {
                        attrs: {
                          rel: 'stylesheet',
                          href: manifest[css]
                        }
                      }));
                    }
                  });
                }

                var injectScript = viteMode ? [h('script', {
                  attrs: {
                    type: 'module',
                    src: '/node_modules/ssr-plugin-vue/esm/entry/client-entry.js'
                  }
                })] : jsOrder.map(function (js) {
                  return h('script', {
                    attrs: {
                      src: manifest[js]
                    }
                  });
                });
                var viteClient = h('script', {
                  attrs: {
                    type: 'module',
                    src: '/@vite/client'
                  }
                });
                var customeHeadScriptArr = customeHeadScript ? (_a = Array.isArray(customeHeadScript) ? customeHeadScript : customeHeadScript(ctx)) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                  return h('script', Object.assign({}, item.describe, {
                    domProps: {
                      innerHTML: item.content
                    }
                  }));
                }) : [];

                if (disableClientRender) {
                  customeHeadScriptArr.push(h('script', {
                    domProps: {
                      innerHTML: 'window.__disableClientRender__ = true'
                    }
                  }));
                }

                var customeFooterScriptArr = customeFooterScript ? (_b = Array.isArray(customeFooterScript) ? customeFooterScript : customeFooterScript(ctx)) === null || _b === void 0 ? void 0 : _b.map(function (item) {
                  return h('script', Object.assign({}, item.describe, {
                    domProps: {
                      innerHTML: item.content
                    }
                  }));
                }) : [];
                return h(Layout, {
                  props: {
                    ctx: ctx,
                    config: config,
                    asyncData: combineAysncData,
                    fetchData: layoutFetchData
                  }
                }, [h('template', {
                  slot: 'remInitial'
                }, [h('script', {}, ["var w = document.documentElement.clientWidth / 3.75;document.getElementsByTagName('html')[0].style['font-size'] = w + 'px'"])]), viteMode && h('template', {
                  slot: 'viteClient'
                }, [viteClient]), h('template', {
                  slot: 'customeHeadScript'
                }, customeHeadScriptArr), h('template', {
                  slot: 'customeFooterScript'
                }, customeFooterScriptArr), h('template', {
                  slot: 'children'
                }, [h(App, {
                  props: {
                    ctx: ctx,
                    config: config,
                    fetchData: combineAysncData
                  }
                })]), h('template', {
                  slot: 'initialData'
                }, [isCsr ? h('script', {
                  domProps: {
                    innerHTML: "window.__USE_VITE__=".concat(viteMode)
                  }
                }) : h('script', {
                  domProps: {
                    innerHTML: "window.__USE_SSR__=true; window.__INITIAL_DATA__ =".concat(serialize(state), ";window.__USE_VITE__=").concat(viteMode)
                  }
                })]), h('template', {
                  slot: 'cssInject'
                }, injectCss), h('template', {
                  slot: 'jsInject'
                }, injectScript)]);
              }
            });
            return _context.abrupt("return", app);

          case 71:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.serverRender = serverRender;

/***/ }),

/***/ "./node_modules/swiper/css/swiper.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/css/swiper.css ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "brief-info" }, [
    _vm._ssrNode(
      '<div class="brief-title" data-v-0ae141a6><span class="[\'icon-GOLDEN\']" data-v-0ae141a6>' +
        _vm._ssrEscape(_vm._s(_vm.briefData.mark.data.text)) +
        "</span> <h1 data-v-0ae141a6>" +
        _vm._ssrEscape(_vm._s(_vm.briefData.showName)) +
        '</h1></div> <div class="brief-score" data-v-0ae141a6>' +
        _vm._ssrList(_vm.briefData.subTitleList, function (item, index) {
          return (
            "<span" +
            _vm._ssrClass(
              null,
              item.subtitleType === "PLAY_VV" ? "hotVv" : ""
            ) +
            " data-v-0ae141a6>" +
            (item.subtitleType === "PLAY_VV"
              ? "<img" +
                _vm._ssrAttr("src", _vm.briefData.heatIcon) +
                " alt data-v-0ae141a6>"
              : "<!---->") +
            " " +
            (index > 0
              ? '<span class="divide" data-v-0ae141a6>/</span>'
              : "<!---->") +
            " <span data-v-0ae141a6>" +
            _vm._ssrEscape(_vm._s(item.subtitle)) +
            "</span></span>"
          )
        }) +
        "</div>"
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=template&id=185cf71c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/App.vue?vue&type=template&id=185cf71c& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=template&id=9a12cea6&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/index.vue?vue&type=template&id=9a12cea6& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "html",
    [
      _vm._ssrNode(
        "<head>",
        "</head>",
        [
          _vm._ssrNode(
            '<meta charSet="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta name="theme-color" content="#000000"> <title>Serverless Side Render for Vue</title> '
          ),
          _vm._t("viteClient"),
          _vm._ssrNode(" "),
          _vm._t("remInitial"),
          _vm._ssrNode(" "),
          _vm._t("customeHeadScript"),
          _vm._ssrNode(" "),
          _vm._t("cssInject"),
        ],
        2
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        "<body>",
        "</body>",
        [
          _vm._t("children"),
          _vm._ssrNode(" "),
          _vm._t("initialData"),
          _vm._ssrNode(" "),
          _vm._t("customeFooterScript"),
          _vm._ssrNode(" "),
          _vm._t("jsInject"),
        ],
        2
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      _vm.play
        ? '<div data-v-d5c980b8><video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls="controls" autoPlay class="video" data-v-d5c980b8>\n      your browser does not support the video tag\n    </video></div>'
        : '<div class="playerContainer"' +
            _vm._ssrStyle(
              null,
              { background: "url(" + _vm.playData.img + ") 0 0 /cover" },
              null
            ) +
            ' data-v-d5c980b8><div class="title" data-v-d5c980b8>' +
            _vm._ssrEscape("\n      " + _vm._s(_vm.playData.title) + "\n    ") +
            '</div> <img src="https://gw.alicdn.com/tfs/TB1eA6FEW61gK0jSZFlXXXDKFXa-135-135.png" class="ico" data-v-d5c980b8> <div class="layer" data-v-d5c980b8></div></div>'
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      '<div class="title" data-v-ff5d5e22>\n    为你推荐\n  </div> <div class="reContainer" data-v-ff5d5e22>' +
        _vm._ssrList(_vm.data, function (item) {
          return (
            '<div class="reContent" data-v-ff5d5e22><img' +
            _vm._ssrAttr("src", item.data.img) +
            ' data-v-ff5d5e22> <div class="vTitle" data-v-ff5d5e22>' +
            _vm._ssrEscape(
              "\n        " + _vm._s(item.data.title) + "\n      "
            ) +
            '</div> <div class="subTitle" data-v-ff5d5e22>' +
            _vm._ssrEscape(
              "\n        " + _vm._s(item.data.subtitle) + "\n      "
            ) +
            "</div></div>"
          )
        }) +
        "</div>"
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/rectangle/index.vue?vue&type=template&id=13722c3c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/rectangle/index.vue?vue&type=template&id=13722c3c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pbbContainer" }, [
    _vm._ssrNode(
      _vm._ssrList(_vm.data[0].itemMap, function (val) {
        return (
          '<div class="pbbItemContainer" data-v-13722c3c><div class="pbbDescContainer" data-v-13722c3c><div class="defaultItemBg"' +
          _vm._ssrStyle(
            null,
            { background: "url(" + val.img + ") 0 0 /cover" },
            null
          ) +
          ' data-v-13722c3c></div> <div class="pName pbbName" data-v-13722c3c>' +
          _vm._ssrEscape("\n        " + _vm._s(val.title) + "\n      ") +
          '</div> <div class="pDesc pbbName" data-v-13722c3c>' +
          _vm._ssrEscape("\n        " + _vm._s(val.subtitle) + "\n      ") +
          "</div></div></div>"
        )
      })
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "searchContainer" }, [
    _vm._ssrNode(
      '<input type="text" placeholder="该搜索框内容会在所有页面共享"' +
        _vm._ssrAttr("value", _vm.searchText) +
        ' class="input" data-v-5ee97dab> <img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" alt class="searchImg" data-v-5ee97dab>'
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/slider/index.vue?vue&type=template&id=9000c4b8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/slider/index.vue?vue&type=template&id=9000c4b8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "swiperContainer" },
    [
      _c(
        "Swiper",
        {
          ref: "mySwiper",
          attrs: { options: _vm.swiperOptions },
          scopedSlots: _vm._u([
            {
              key: "pagination",
              fn: function () {
                return undefined
              },
              proxy: true,
            },
          ]),
        },
        _vm._l(_vm.data[0].itemMap, function (val) {
          return _c(
            "swiper-slide",
            { key: val.img, staticClass: "sliderContainer" },
            [
              _c("img", {
                staticClass: "carouselImg",
                attrs: { src: val.img },
                on: { click: _vm.toDetail },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "sliderDescContainer" }, [
                _c("span", { staticClass: "sliderTitle" }, [
                  _vm._v("\n          " + _vm._s(val.title) + "\n        "),
                ]),
              ]),
            ]
          )
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Search"),
      _vm._ssrNode(" "),
      _vm.detailData
        ? [
            _c("Player", { attrs: { data: _vm.detailData.data[0].dataNode } }),
            _vm._ssrNode(" "),
            _c("Brief", { attrs: { data: _vm.detailData.data[1].dataNode } }),
            _vm._ssrNode(" "),
            _c("Recommend", {
              attrs: { data: _vm.detailData.data[2].dataNode },
            }),
          ]
        : _vm._ssrNode(
            '<img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">'
          ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=template&id=6781c9f2&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/index/render.vue?vue&type=template&id=6781c9f2& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Search"),
      _vm._ssrNode(" "),
      _vm.indexData
        ? [
            _c("Slider", { attrs: { data: _vm.indexData[0].components } }),
            _vm._ssrNode(" "),
            _c("Rectangle", { attrs: { data: _vm.indexData[1].components } }),
          ]
        : _vm._ssrNode(
            '<img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">'
          ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./web/components/brief/index.vue":
/*!****************************************!*\
  !*** ./web/components/brief/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0ae141a6&scoped=true& */ "./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/brief/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& */ "./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "0ae141a6",
  "1b503f90"
  
)

component.options.__file = "web/components/brief/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/brief/index.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./web/components/brief/index.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ae141a6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0ae141a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/layout/App.vue":
/*!***************************************!*\
  !*** ./web/components/layout/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=185cf71c& */ "./web/components/layout/App.vue?vue&type=template&id=185cf71c&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "./web/components/layout/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "436aae9e"
  
)

component.options.__file = "web/components/layout/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/layout/App.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./web/components/layout/App.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/layout/App.vue?vue&type=template&id=185cf71c&":
/*!**********************************************************************!*\
  !*** ./web/components/layout/App.vue?vue&type=template&id=185cf71c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=185cf71c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=template&id=185cf71c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/layout/index.vue":
/*!*****************************************!*\
  !*** ./web/components/layout/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9a12cea6& */ "./web/components/layout/index.vue?vue&type=template&id=9a12cea6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=less& */ "./web/components/layout/index.vue?vue&type=style&index=0&lang=less&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "97838dfc"
  
)

component.options.__file = "web/components/layout/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/layout/index.vue?vue&type=style&index=0&lang=less&":
/*!***************************************************************************!*\
  !*** ./web/components/layout/index.vue?vue&type=style&index=0&lang=less& ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=style&index=0&lang=less&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/layout/index.vue?vue&type=template&id=9a12cea6&":
/*!************************************************************************!*\
  !*** ./web/components/layout/index.vue?vue&type=template&id=9a12cea6& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9a12cea6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=template&id=9a12cea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/player/index.vue":
/*!*****************************************!*\
  !*** ./web/components/player/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d5c980b8&scoped=true& */ "./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/player/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& */ "./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "d5c980b8",
  "d33a400e"
  
)

component.options.__file = "web/components/player/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/player/index.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./web/components/player/index.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d5c980b8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&":
/*!************************************************************************************!*\
  !*** ./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d5c980b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/recommend/index.vue":
/*!********************************************!*\
  !*** ./web/components/recommend/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ff5d5e22&scoped=true& */ "./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/recommend/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& */ "./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "ff5d5e22",
  "6e8c547a"
  
)

component.options.__file = "web/components/recommend/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/recommend/index.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./web/components/recommend/index.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff5d5e22_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ff5d5e22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/rectangle/index.vue":
/*!********************************************!*\
  !*** ./web/components/rectangle/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_13722c3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=13722c3c&scoped=true& */ "./web/components/rectangle/index.vue?vue&type=template&id=13722c3c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/rectangle/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true& */ "./web/components/rectangle/index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_13722c3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_13722c3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "13722c3c",
  "36fc2526"
  
)

component.options.__file = "web/components/rectangle/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/rectangle/index.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./web/components/rectangle/index.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/rectangle/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/rectangle/index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./web/components/rectangle/index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true& ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13722c3c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/rectangle/index.vue?vue&type=style&index=0&id=13722c3c&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/rectangle/index.vue?vue&type=template&id=13722c3c&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./web/components/rectangle/index.vue?vue&type=template&id=13722c3c&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_13722c3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=13722c3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/rectangle/index.vue?vue&type=template&id=13722c3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_13722c3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_13722c3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/search/index.vue":
/*!*****************************************!*\
  !*** ./web/components/search/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5ee97dab&scoped=true& */ "./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/search/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& */ "./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "5ee97dab",
  "60311e00"
  
)

component.options.__file = "web/components/search/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/search/index.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./web/components/search/index.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee97dab_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&":
/*!************************************************************************************!*\
  !*** ./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5ee97dab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/slider/index.vue":
/*!*****************************************!*\
  !*** ./web/components/slider/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9000c4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9000c4b8&scoped=true& */ "./web/components/slider/index.vue?vue&type=template&id=9000c4b8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/slider/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true& */ "./web/components/slider/index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9000c4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9000c4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "9000c4b8",
  "8d71840e"
  
)

component.options.__file = "web/components/slider/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/slider/index.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./web/components/slider/index.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/slider/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/slider/index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./web/components/slider/index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true& ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_3_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9000c4b8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/slider/index.vue?vue&type=style&index=0&id=9000c4b8&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/slider/index.vue?vue&type=template&id=9000c4b8&scoped=true&":
/*!************************************************************************************!*\
  !*** ./web/components/slider/index.vue?vue&type=template&id=9000c4b8&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9000c4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9000c4b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/slider/index.vue?vue&type=template&id=9000c4b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9000c4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9000c4b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/pages/detail/fetch.ts":
/*!***********************************!*\
  !*** ./web/pages/detail/fetch.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, ctx) {
    var _ctx$apiDeatilservice;

    var store, router, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, router = _ref.router;

            if (true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return window.fetch("/api/detail/".concat(router.params.id));

          case 4:
            _context.next = 6;
            return _context.sent.json();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return ctx === null || ctx === void 0 ? void 0 : (_ctx$apiDeatilservice = ctx.apiDeatilservice) === null || _ctx$apiDeatilservice === void 0 ? void 0 : _ctx$apiDeatilservice.index(ctx.params.id);

          case 11:
            _context.t0 = _context.sent;

          case 12:
            data = _context.t0;
            _context.next = 15;
            return store.dispatch('detailStore/initialData', {
              payload: data
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./web/pages/detail/render$id.vue":
/*!****************************************!*\
  !*** ./web/pages/detail/render$id.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render$id.vue?vue&type=template&id=29d0a63f& */ "./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&");
/* harmony import */ var _render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render$id.vue?vue&type=script&lang=ts& */ "./web/pages/detail/render$id.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "2199274a"
  
)

component.options.__file = "web/pages/detail/render$id.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/pages/detail/render$id.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./web/pages/detail/render$id.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./render$id.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&":
/*!***********************************************************************!*\
  !*** ./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./render$id.vue?vue&type=template&id=29d0a63f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/pages/index/fetch.ts":
/*!**********************************!*\
  !*** ./web/pages/index/fetch.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, ctx) {
    var _ctx$apiService;

    var store, router, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, router = _ref.router;

            if (true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return window.fetch('/api/index');

          case 4:
            _context.next = 6;
            return _context.sent.json();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return ctx === null || ctx === void 0 ? void 0 : (_ctx$apiService = ctx.apiService) === null || _ctx$apiService === void 0 ? void 0 : _ctx$apiService.index();

          case 11:
            _context.t0 = _context.sent;

          case 12:
            data = _context.t0;
            _context.next = 15;
            return store.dispatch('indexStore/initialData', {
              payload: data
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./web/pages/index/render.vue":
/*!************************************!*\
  !*** ./web/pages/index/render.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_vue_vue_type_template_id_6781c9f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.vue?vue&type=template&id=6781c9f2& */ "./web/pages/index/render.vue?vue&type=template&id=6781c9f2&");
/* harmony import */ var _render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.vue?vue&type=script&lang=ts& */ "./web/pages/index/render.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _render_vue_vue_type_template_id_6781c9f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _render_vue_vue_type_template_id_6781c9f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "1eefd992"
  
)

component.options.__file = "web/pages/index/render.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=script&lang=ts&":
/*!*************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=script&lang=ts& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./render.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=template&id=6781c9f2&":
/*!*******************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=template&id=6781c9f2& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_template_id_6781c9f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./render.vue?vue&type=template&id=6781c9f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=template&id=6781c9f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_template_id_6781c9f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_template_id_6781c9f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/store/index.ts":
/*!****************************!*\
  !*** ./web/store/index.ts ***!
  \****************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index */ "./web/store/modules/index.ts");
/* harmony import */ var _modules_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/detail */ "./web/store/modules/detail.ts");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./web/store/modules/search.ts");



var modules = {
  indexStore: _modules_index__WEBPACK_IMPORTED_MODULE_0__["indexStore"],
  detailStore: _modules_detail__WEBPACK_IMPORTED_MODULE_1__["detailStore"],
  searchStore: _modules_search__WEBPACK_IMPORTED_MODULE_2__["searchStore"]
};


/***/ }),

/***/ "./web/store/modules/detail.ts":
/*!*************************************!*\
  !*** ./web/store/modules/detail.ts ***!
  \*************************************/
/*! exports provided: detailStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailStore", function() { return detailStore; });
var detailStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    initialData: function initialData(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setData', payload);
    }
  }
};


/***/ }),

/***/ "./web/store/modules/index.ts":
/*!************************************!*\
  !*** ./web/store/modules/index.ts ***!
  \************************************/
/*! exports provided: indexStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexStore", function() { return indexStore; });
var indexStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload.data;
    }
  },
  actions: {
    initialData: function initialData(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setData', payload);
    }
  }
};


/***/ }),

/***/ "./web/store/modules/search.ts":
/*!*************************************!*\
  !*** ./web/store/modules/search.ts ***!
  \*************************************/
/*! exports provided: searchStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStore", function() { return searchStore; });
var searchStore = {
  namespaced: true,
  state: {
    searchText: ''
  },
  mutations: {
    setText: function setText(state, payload) {
      state.searchText = payload.text;
    }
  },
  actions: {
    setText: function setText(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setText', payload);
    }
  }
};


/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yumengcheng/Study/nine-ssr/node_modules/ssr-plugin-vue/cjs/entry/server-entry.js */"./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js");


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "ssr-server-utils":
/*!***********************************!*\
  !*** external "ssr-server-utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ssr-server-utils");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "vue-awesome-swiper":
/*!*************************************!*\
  !*** external "vue-awesome-swiper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),

/***/ "vuex-router-sync":
/*!***********************************!*\
  !*** external "vuex-router-sync" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvc3NyLXRlbXBvcmFyeS1yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3JlY29tbWVuZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3JlY3RhbmdsZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3NsaWRlci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9wYWdlcy9kZXRhaWwvcmVuZGVyJGlkLnZ1ZSIsIndlYnBhY2s6Ly8vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvYnJpZWYvaW5kZXgudnVlPzZhZDgiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT8xM2QyIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWU/NzBjYSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVlPzFhZDYiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjdGFuZ2xlL2luZGV4LnZ1ZT80YjQwIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWU/OGEzMyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9zbGlkZXIvaW5kZXgudnVlPzViNTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nzci1wbHVnaW4tdnVlL2Nqcy9lbnRyeS9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3NyLXBsdWdpbi12dWUvY2pzL2VudHJ5L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3NyLXBsdWdpbi12dWUvY2pzL2VudHJ5L3NlcnZlci1lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2Nzcy9zd2lwZXIuY3NzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZT80YWQxIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlPzIyYjIiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT9iMTA2Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWU/MWY5YyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVlP2JiYzAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjdGFuZ2xlL2luZGV4LnZ1ZT9hZDc3Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWU/OTE4YiIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9zbGlkZXIvaW5kZXgudnVlPzJiMDUiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2RldGFpbC9yZW5kZXIkaWQudnVlPzY0MzQiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWU/NzE0YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9icmllZi9pbmRleC52dWU/YzRkYSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9icmllZi9pbmRleC52dWU/ODg1ZiIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9icmllZi9pbmRleC52dWU/MDZhZCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZT9jYzNmIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlPzJjNzgiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlP2M4YjgiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT85MzEzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcGxheWVyL2luZGV4LnZ1ZT82NmNhIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWU/MjVkMyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9wbGF5ZXIvaW5kZXgudnVlP2U3ZjQiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjb21tZW5kL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVlPzZhN2MiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjb21tZW5kL2luZGV4LnZ1ZT8wNWRjIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3JlY29tbWVuZC9pbmRleC52dWU/Mzk1MSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWN0YW5nbGUvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3JlY3RhbmdsZS9pbmRleC52dWU/YjE4MCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWN0YW5nbGUvaW5kZXgudnVlPzAwMDAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjdGFuZ2xlL2luZGV4LnZ1ZT84MmM1Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvc2VhcmNoL2luZGV4LnZ1ZT8yNTc4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWU/NjZmNSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9zZWFyY2gvaW5kZXgudnVlPzhhNDMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9zbGlkZXIvaW5kZXgudnVlPzQ3NjgiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LnZ1ZT9jMDNmIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NsaWRlci9pbmRleC52dWU/NjJkNCIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvZGV0YWlsL2ZldGNoLnRzIiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9kZXRhaWwvcmVuZGVyJGlkLnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvZGV0YWlsL3JlbmRlciRpZC52dWU/ZjA4NyIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvZGV0YWlsL3JlbmRlciRpZC52dWU/ZTdjYyIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvZmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWU/ZjFiOSIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZT84NmY1Iiwid2VicGFjazovLy8uL3dlYi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi93ZWIvc3RvcmUvbW9kdWxlcy9kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvc2VhcmNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzc3Itc2VydmVyLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLWF3ZXNvbWUtc3dpcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWV4LXJvdXRlci1zeW5jXCIiXSwibmFtZXMiOlsiRmVSb3V0ZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZXBDbG9uZSIsIml0ZW0iLCJ0eXBlcyIsIk51bWJlciIsIlN0cmluZyIsIkJvb2xlYW4iLCJyZXN1bHQiLCJmb3JFYWNoIiwidHlwZSIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImNoaWxkIiwiaW5kZXgiLCJhcnJheSIsIkRhdGUiLCJpIiwiUmVhbFZ1ZXgiLCJSZWFsUm91dGVyIiwiUmVhbFZ1ZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlUm91dGVyIiwiVnVlIiwicmVxdWlyZSIsIlZ1ZXgiLCJSb3V0ZXIiLCJzc3JfdGVtcG9yYXJ5X3JvdXRlc18xIiwiY2xvbmVfMSIsInVzZSIsIm9wdGlvbnMiLCJfYSIsIm1vZGUiLCJyb3V0ZXMiLCJiYXNlIiwiU3RvcmUiLCJzdG9yZSIsInNlcnZlclJlbmRlciIsInNzcl9zZXJ2ZXJfdXRpbHNfMSIsInZ1ZXhfcm91dGVyX3N5bmNfMSIsInNlcmlhbGl6ZSIsIlJvdXRlcyIsImNyZWF0ZV8xIiwiQXBwIiwibGF5b3V0RmV0Y2giLCJMYXlvdXQiLCJQcmVmaXhSb3V0ZXJCYXNlIiwiY3R4IiwiY29uZmlnIiwiY3NzT3JkZXIiLCJqc09yZGVyIiwiZHluYW1pYyIsImN1c3RvbWVIZWFkU2NyaXB0IiwiY3VzdG9tZUZvb3RlclNjcmlwdCIsImNodW5rTmFtZSIsInBhcmFsbGVsRmV0Y2giLCJkaXNhYmxlQ2xpZW50UmVuZGVyIiwicHJlZml4Iiwicm91dGVyIiwidml0ZU1vZGUiLCJwcm9jZXNzIiwiZW52IiwiQlVJTERfVE9PTCIsInN5bmMiLCJyZXF1ZXN0IiwicGF0aCIsInVybCIsIm5vcm1hbGl6ZVBhdGgiLCJyb3V0ZUl0ZW0iLCJmaW5kUm91dGUiLCJFcnJvciIsImR5bmFtaWNDc3NPcmRlciIsImNvbmNhdCIsIndlYnBhY2tDaHVua05hbWUiLCJhZGRBc3luY0NodW5rIiwiZ2V0TWFuaWZlc3QiLCJtYW5pZmVzdCIsImlzQ3NyIiwicXVlcnkiLCJjc3IiLCJsYXlvdXRGZXRjaERhdGEiLCJmZXRjaERhdGEiLCJmZXRjaCIsImN1cnJlbnRGZXRjaCIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwiY3VycmVudFJvdXRlIiwicmVzb2x2ZSIsImxvZ0dyZWVuIiwiY29tYmluZUF5c25jRGF0YSIsImFzc2lnbiIsInN0YXRlIiwiX2IiLCJhcHAiLCJyZW5kZXIiLCJoIiwiaW5qZWN0Q3NzIiwiYXR0cnMiLCJyZWwiLCJocmVmIiwiY3NzIiwiaW5qZWN0U2NyaXB0Iiwic3JjIiwibWFwIiwianMiLCJ2aXRlQ2xpZW50IiwiY3VzdG9tZUhlYWRTY3JpcHRBcnIiLCJBcnJheSIsImlzQXJyYXkiLCJkZXNjcmliZSIsImRvbVByb3BzIiwiaW5uZXJIVE1MIiwiY29udGVudCIsImN1c3RvbWVGb290ZXJTY3JpcHRBcnIiLCJwcm9wcyIsImFzeW5jRGF0YSIsInNsb3QiLCJ3aW5kb3ciLCJwYXJhbXMiLCJpZCIsImpzb24iLCJhcGlEZWF0aWxzZXJ2aWNlIiwiZGF0YSIsImRpc3BhdGNoIiwicGF5bG9hZCIsImFwaVNlcnZpY2UiLCJtb2R1bGVzIiwiaW5kZXhTdG9yZSIsImRldGFpbFN0b3JlIiwic2VhcmNoU3RvcmUiLCJuYW1lc3BhY2VkIiwibXV0YXRpb25zIiwic2V0RGF0YSIsImFjdGlvbnMiLCJpbml0aWFsRGF0YSIsImNvbW1pdCIsInNlYXJjaFRleHQiLCJzZXRUZXh0IiwidGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwR007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ08sSUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQyxVQUFPLGFBQVI7QUFBc0IsZUFBYTtBQUFBLFdBQU0seUpBQU47QUFBQSxHQUFuQztBQUFvSCxzQkFBbUIsV0FBdkk7QUFBbUosV0FBUztBQUFBLFdBQU0scUpBQU47QUFBQTtBQUE1SixDQUFELEVBQWdQO0FBQUMsVUFBTyxHQUFSO0FBQVksZUFBYTtBQUFBLFdBQU0sNklBQU47QUFBQSxHQUF6QjtBQUFrRyxzQkFBbUIsT0FBckg7QUFBNkgsV0FBUztBQUFBLFdBQU0sK0lBQU47QUFBQTtBQUF0SSxDQUFoUCxDQUFqQjtBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNjUjtBQUFBO0FBQ0EsaUJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQSxHOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQ0EsbUU7Ozs7Ozs7Ozs7OztBQ2FBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGlDQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQSxHOzs7Ozs7Ozs7Ozs7QUNDQTtBQUFBO0FBQ0E7QUFEQSxHOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0EsaUJBREE7QUFFQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQSw4QkFDQTtBQUNBO0FBQUE7QUFBQTtBQURBLElBREEsQ0FEQTtBQU9BO0FBQ0EsV0FEQSxtQkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsS0FQQTtBQVFBLFlBUkEsc0JBUUE7QUFDQTtBQUNBO0FBVkE7QUFQQSxHOzs7Ozs7Ozs7Ozs7QUNRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EscUVBREE7QUFFQTtBQUZBLEdBREE7QUFLQTtBQUNBO0FBREEsR0FMQTtBQVFBLGlCQVJBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQURBO0FBRUEseUJBRkE7QUFHQTtBQUhBO0FBREE7QUFEQTtBQVNBLEdBbkJBO0FBb0JBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQXBCQTtBQXlCQSxTQXpCQSxxQkF5QkE7QUFDQTtBQUNBLEdBM0JBO0FBNEJBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQTVCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLGdGQURBO0FBRUEsZ0ZBRkE7QUFHQSw4RUFIQTtBQUlBO0FBSkEsR0FEQTtBQU9BLDhCQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBREEsSUFEQTtBQVBBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsZ0ZBREE7QUFFQSxzRkFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BLDhCQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBREEsSUFEQTtBQU5BLEc7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQ1U7QUFDVixPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ1BMO0FBQUE7QUFDVTtBQUNWLE9BQU8sS0FBVSxFQUFFLGtCQUtkOzs7Ozs7Ozs7Ozs7O0FDUEw7QUFBQTtBQUNVO0FBQ1YsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7Ozs7QUNQTDtBQUFBO0FBQ1U7QUFDVixPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ1BMO0FBQUE7QUFDVTtBQUNWLE9BQU8sS0FBVSxFQUFFLGtCQUtkOzs7Ozs7Ozs7Ozs7O0FDUEw7QUFBQTtBQUNVO0FBQ1YsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7Ozs7QUNQTDtBQUFBO0FBQ1U7QUFDVixPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ1BROzs7O0FBQ2JDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLEtBQUssQ0FBekIsQyxDQUNBOztBQUNBLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3JCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBT0EsSUFBUDtBQUNILEdBSG9CLENBR25COzs7QUFDRixNQUFJQyxLQUFLLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxPQUFqQixDQUFaO0FBQ0EsTUFBSUMsTUFBSixDQUxxQixDQU1yQjs7QUFDQUosT0FBSyxDQUFDSyxPQUFOLENBQWMsVUFBVUMsSUFBVixFQUFnQjtBQUMxQixRQUFJUCxJQUFJLFlBQVlPLElBQXBCLEVBQTBCO0FBQ3RCRixZQUFNLEdBQUdFLElBQUksQ0FBQ1AsSUFBRCxDQUFiO0FBQ0g7QUFDSixHQUpEOztBQUtBLE1BQUksT0FBT0ssTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUMvQixRQUFJVixNQUFNLENBQUNhLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQlYsSUFBL0IsTUFBeUMsZ0JBQTdDLEVBQStEO0FBQzNESyxZQUFNLEdBQUcsRUFBVDtBQUNBTCxVQUFJLENBQUNNLE9BQUwsQ0FBYSxVQUFVSyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFDeENSLGNBQU0sQ0FBQ08sS0FBRCxDQUFOLEdBQWdCYixTQUFTLENBQUNZLEtBQUQsQ0FBekI7QUFDSCxPQUZEO0FBR0gsS0FMRCxNQU1LLElBQUksUUFBT1gsSUFBUCxNQUFnQixRQUFwQixFQUE4QjtBQUMvQixVQUFJLENBQUNBLElBQUksQ0FBQ1EsU0FBVixFQUFxQjtBQUFFO0FBQ25CLFlBQUlSLElBQUksWUFBWWMsSUFBcEIsRUFBMEI7QUFDdEJULGdCQUFNLEdBQUcsSUFBSVMsSUFBSixDQUFTZCxJQUFULENBQVQ7QUFDSCxTQUZELE1BR0s7QUFDRDtBQUNBSyxnQkFBTSxHQUFHLEVBQVQ7O0FBQ0EsZUFBSyxJQUFJVSxDQUFULElBQWNmLElBQWQsRUFBb0I7QUFDaEI7QUFDQUssa0JBQU0sQ0FBQ1UsQ0FBRCxDQUFOLEdBQVloQixTQUFTLENBQUNDLElBQUksQ0FBQ2UsQ0FBRCxDQUFMLENBQXJCO0FBQ0g7QUFDSjtBQUNKLE9BWkQsTUFhSztBQUNEVixjQUFNLEdBQUdMLElBQVQ7QUFDSDtBQUNKLEtBakJJLE1Ba0JBO0FBQ0RLLFlBQU0sR0FBR0wsSUFBVDtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0ssTUFBUDtBQUNIOztBQUNEUixPQUFPLENBQUNFLFNBQVIsR0FBb0JBLFNBQXBCLEM7Ozs7Ozs7Ozs7OztBQy9DYTs7QUFDYkosTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBRCxPQUFPLENBQUNtQixRQUFSLEdBQW1CbkIsT0FBTyxDQUFDb0IsVUFBUixHQUFxQnBCLE9BQU8sQ0FBQ3FCLE9BQVIsR0FBa0JyQixPQUFPLENBQUNzQixXQUFSLEdBQXNCdEIsT0FBTyxDQUFDdUIsWUFBUixHQUF1QixLQUFLLENBQTVHLEMsQ0FDQTs7QUFDQSxJQUFNQyxHQUFHLEdBQUdDLG1CQUFPLENBQUMsZ0JBQUQsQ0FBbkI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLElBQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxJQUFNRyxzQkFBc0IsR0FBR0gsbUJBQU8sQ0FBQyxvRUFBRCxDQUF0Qzs7QUFDQSxJQUFNSSxPQUFPLEdBQUdKLG1CQUFPLENBQUMsaUVBQUQsQ0FBdkIsQyxDQUNBOzs7QUFDQSxJQUFNSixPQUFPLEdBQUdHLEdBQUcsV0FBSCxJQUFlQSxHQUEvQjtBQUNBeEIsT0FBTyxDQUFDcUIsT0FBUixHQUFrQkEsT0FBbEI7QUFDQSxJQUFNRCxVQUFVLEdBQUdPLE1BQU0sV0FBTixJQUFrQkEsTUFBckM7QUFDQTNCLE9BQU8sQ0FBQ29CLFVBQVIsR0FBcUJBLFVBQXJCO0FBQ0EsSUFBTUQsUUFBUSxHQUFHTyxJQUFJLFdBQUosSUFBZ0JBLElBQWpDO0FBQ0ExQixPQUFPLENBQUNtQixRQUFSLEdBQW1CQSxRQUFuQjtBQUNBRSxPQUFPLENBQUNTLEdBQVIsQ0FBWVYsVUFBWjtBQUNBQyxPQUFPLENBQUNTLEdBQVIsQ0FBWVgsUUFBWjs7QUFDQSxTQUFTSSxZQUFULEdBQW9DO0FBQUEsTUFBZFEsT0FBYyx1RUFBSixFQUFJOztBQUNoQyxNQUFJQyxFQUFKOztBQUNBLFNBQU8sSUFBSVosVUFBSixDQUFlO0FBQ2xCYSxRQUFJLEVBQUUsU0FEWTtBQUVsQkMsVUFBTSxFQUFFTixzQkFBc0IsQ0FBQy9CLFFBRmI7QUFHbEJzQyxRQUFJLEVBQUUsQ0FBQ0gsRUFBRSxHQUFHRCxPQUFPLENBQUNJLElBQWQsTUFBd0IsSUFBeEIsSUFBZ0NILEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdEQSxFQUFoRCxHQUFxRDtBQUh6QyxHQUFmLENBQVA7QUFLSDs7QUFDRGhDLE9BQU8sQ0FBQ3VCLFlBQVIsR0FBdUJBLFlBQXZCOztBQUNBLFNBQVNELFdBQVQsR0FBdUI7QUFDbkIsTUFBSVUsRUFBSjs7QUFDQSxTQUFPLElBQUlOLElBQUksQ0FBQ1UsS0FBVCxDQUFlLENBQUNKLEVBQUUsR0FBRyxDQUFDLEdBQUdILE9BQU8sQ0FBQzNCLFNBQVosRUFBdUIwQixzQkFBc0IsQ0FBQ1MsS0FBOUMsQ0FBTixNQUFnRSxJQUFoRSxJQUF3RUwsRUFBRSxLQUFLLEtBQUssQ0FBcEYsR0FBd0ZBLEVBQXhGLEdBQTZGLEVBQTVHLENBQVA7QUFDSDs7QUFDRGhDLE9BQU8sQ0FBQ3NCLFdBQVIsR0FBc0JBLFdBQXRCLEM7Ozs7Ozs7Ozs7OztBQy9CYTs7Ozs7Ozs7QUFDYnhCLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsT0FBTyxDQUFDc0MsWUFBUixHQUF1QixLQUFLLENBQTVCOztBQUNBLElBQU1kLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQSxJQUFNYyxrQkFBa0IsR0FBR2QsbUJBQU8sQ0FBQywwQ0FBRCxDQUFsQzs7QUFDQSxJQUFNZSxrQkFBa0IsR0FBR2YsbUJBQU8sQ0FBQywwQ0FBRCxDQUFsQzs7QUFDQSxJQUFNZ0IsU0FBUyxHQUFHaEIsbUJBQU8sQ0FBQyxrREFBRCxDQUF6QixDLENBQ0E7OztBQUNBLElBQU1pQixNQUFNLEdBQUdqQixtQkFBTyxDQUFDLG9FQUFELENBQXRCOztBQUNBLElBQU1rQixRQUFRLEdBQUdsQixtQkFBTyxDQUFDLG1FQUFELENBQXhCOztBQUNBLElBQVE1QixRQUFSLEdBQWlFNkMsTUFBakUsQ0FBUTdDLFFBQVI7QUFBQSxJQUFrQitDLEdBQWxCLEdBQWlFRixNQUFqRSxDQUFrQkUsR0FBbEI7QUFBQSxJQUF1QkMsV0FBdkIsR0FBaUVILE1BQWpFLENBQXVCRyxXQUF2QjtBQUFBLElBQW9DQyxNQUFwQyxHQUFpRUosTUFBakUsQ0FBb0NJLE1BQXBDO0FBQUEsSUFBNENDLGdCQUE1QyxHQUFpRUwsTUFBakUsQ0FBNENLLGdCQUE1Qzs7QUFDQSxJQUFNVCxZQUFZO0FBQUEsc0VBQUcsaUJBQU9VLEdBQVAsRUFBWUMsTUFBWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVRDLG9CQUZTLEdBRTJIRCxNQUYzSCxDQUVUQyxRQUZTLEVBRUNDLE9BRkQsR0FFMkhGLE1BRjNILENBRUNFLE9BRkQsRUFFVUMsT0FGVixHQUUySEgsTUFGM0gsQ0FFVUcsT0FGVixFQUVtQm5CLElBRm5CLEdBRTJIZ0IsTUFGM0gsQ0FFbUJoQixJQUZuQixFQUV5Qm9CLGlCQUZ6QixHQUUySEosTUFGM0gsQ0FFeUJJLGlCQUZ6QixFQUU0Q0MsbUJBRjVDLEdBRTJITCxNQUYzSCxDQUU0Q0ssbUJBRjVDLEVBRWlFQyxTQUZqRSxHQUUySE4sTUFGM0gsQ0FFaUVNLFNBRmpFLEVBRTRFQyxhQUY1RSxHQUUySFAsTUFGM0gsQ0FFNEVPLGFBRjVFLEVBRTJGQyxtQkFGM0YsR0FFMkhSLE1BRjNILENBRTJGUSxtQkFGM0YsRUFFZ0hDLE1BRmhILEdBRTJIVCxNQUYzSCxDQUVnSFMsTUFGaEg7QUFHWEMsa0JBSFcsR0FHRixDQUFDLEdBQUdoQixRQUFRLENBQUNwQixZQUFiLEdBSEU7QUFJWGMsaUJBSlcsR0FJSCxDQUFDLEdBQUdNLFFBQVEsQ0FBQ3JCLFdBQWIsR0FKRztBQUtYYSxnQkFMVyxHQUtKdUIsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDQSxNQUF2QyxHQUFnRFgsZ0JBTDVDLEVBSzhEOztBQUN6RWEsb0JBTlcsR0FNQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQVosS0FBMkIsTUFOM0I7QUFPakIsYUFBQyxHQUFHdkIsa0JBQWtCLENBQUN3QixJQUF2QixFQUE2QjNCLEtBQTdCLEVBQW9Dc0IsTUFBcEM7QUFQaUIsMkJBUUdYLEdBQUcsQ0FBQ2lCLE9BUlAsRUFRWEMsSUFSVyxnQkFRWEEsSUFSVyxFQVFMQyxHQVJLLGdCQVFMQSxHQVJLOztBQVNqQixnQkFBSWhDLElBQUosRUFBVTtBQUNOK0Isa0JBQUksR0FBRyxDQUFDLEdBQUczQixrQkFBa0IsQ0FBQzZCLGFBQXZCLEVBQXNDRixJQUF0QyxFQUE0Qy9CLElBQTVDLENBQVA7QUFDQWdDLGlCQUFHLEdBQUcsQ0FBQyxHQUFHNUIsa0JBQWtCLENBQUM2QixhQUF2QixFQUFzQ0QsR0FBdEMsRUFBMkNoQyxJQUEzQyxDQUFOO0FBQ0g7O0FBQ0trQyxxQkFiVyxHQWFDLENBQUMsR0FBRzlCLGtCQUFrQixDQUFDK0IsU0FBdkIsRUFBa0N6RSxRQUFsQyxFQUE0Q3FFLElBQTVDLENBYkQ7O0FBQUEsZ0JBY1pHLFNBZFk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBZVAsSUFBSUUsS0FBSixnR0FDV0wsSUFEWCx3TkFmTzs7QUFBQTtBQW9CYk0sMkJBcEJhLEdBb0JLdEIsUUFwQkw7O0FBQUEsa0JBcUJiRSxPQUFPLElBQUksQ0FBQ1EsUUFyQkM7QUFBQTtBQUFBO0FBQUE7O0FBc0JiWSwyQkFBZSxHQUFHdEIsUUFBUSxDQUFDdUIsTUFBVCxDQUFnQixXQUFJSixTQUFTLENBQUNLLGdCQUFkLFVBQWhCLENBQWxCO0FBdEJhO0FBQUEsbUJBdUJXLENBQUMsR0FBR25DLGtCQUFrQixDQUFDb0MsYUFBdkIsRUFBc0NILGVBQXRDLEVBQXVESCxTQUFTLENBQUNLLGdCQUFqRSxDQXZCWDs7QUFBQTtBQXVCYkYsMkJBdkJhOztBQUFBO0FBQUEsaUJBeUJBWixRQXpCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwwQkF5QlcsRUF6Qlg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkF5QnNCLENBQUMsR0FBR3JCLGtCQUFrQixDQUFDcUMsV0FBdkIsR0F6QnRCOztBQUFBO0FBQUE7O0FBQUE7QUF5QlhDLG9CQXpCVztBQTBCWEMsaUJBMUJXLEdBMEJILENBQUMsRUFBRTdDLElBQUksS0FBSyxLQUFULEtBQW1CLENBQUNELEVBQUUsR0FBR2dCLEdBQUcsQ0FBQ2lCLE9BQUosQ0FBWWMsS0FBbEIsTUFBNkIsSUFBN0IsSUFBcUMvQyxFQUFFLEtBQUssS0FBSyxDQUFqRCxHQUFxRCxLQUFLLENBQTFELEdBQThEQSxFQUFFLENBQUNnRCxHQUFwRixDQUFGLENBMUJFO0FBMkJiQywyQkEzQmEsR0EyQkssRUEzQkw7QUE0QmJDLHFCQTVCYSxHQTRCRCxFQTVCQzs7QUFBQSxnQkE2QlpKLEtBN0JZO0FBQUE7QUFBQTtBQUFBOztBQThCTEssaUJBOUJLLEdBOEJLZCxTQTlCTCxDQThCTGMsS0E5Qks7O0FBQUEsaUJBK0JRQSxLQS9CUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQStCdUJBLEtBQUssRUEvQjVCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEJBK0IwQyxJQS9CMUM7O0FBQUE7QUErQlBDLHdCQS9CTztBQWdDYnpCLGtCQUFNLENBQUMwQixJQUFQLENBQVlsQixHQUFaLEVBaENhLENBaUNiOztBQWpDYSxpQkFrQ1RYLGFBbENTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBbUM0QjhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQzdDMUMsV0FBVyxHQUFHQSxXQUFXLENBQUM7QUFBRVIsbUJBQUssRUFBTEEsS0FBRjtBQUFTc0Isb0JBQU0sRUFBRUEsTUFBTSxDQUFDNkI7QUFBeEIsYUFBRCxFQUF5Q3hDLEdBQXpDLENBQWQsR0FBOERzQyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FENUIsRUFFN0NMLFlBQVksR0FBR0EsWUFBWSxDQUFDO0FBQUUvQyxtQkFBSyxFQUFMQSxLQUFGO0FBQVNzQixvQkFBTSxFQUFFQSxNQUFNLENBQUM2QjtBQUF4QixhQUFELEVBQXlDeEMsR0FBekMsQ0FBZixHQUErRHNDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixFQUFoQixDQUY5QixDQUFaLENBbkM1Qjs7QUFBQTtBQUFBO0FBQUE7QUFtQ1JSLDJCQW5DUTtBQW1DU0MscUJBbkNUO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQXlDU3JDLFdBekNUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBeUM2QkEsV0FBVyxDQUFDO0FBQUVSLG1CQUFLLEVBQUxBLEtBQUY7QUFBU3NCLG9CQUFNLEVBQUVBLE1BQU0sQ0FBQzZCO0FBQXhCLGFBQUQsRUFBeUN4QyxHQUF6QyxDQXpDeEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwQkF5Q3dGLEVBekN4Rjs7QUFBQTtBQXlDVGlDLDJCQXpDUzs7QUFBQSxpQkEwQ0dHLFlBMUNIO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBMEN3QkEsWUFBWSxDQUFDO0FBQUUvQyxtQkFBSyxFQUFMQSxLQUFGO0FBQVNzQixvQkFBTSxFQUFFQSxNQUFNLENBQUM2QjtBQUF4QixhQUFELEVBQXlDeEMsR0FBekMsQ0ExQ3BDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEJBMENvRixFQTFDcEY7O0FBQUE7QUEwQ1RrQyxxQkExQ1M7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBOENiLGFBQUMsR0FBRzNDLGtCQUFrQixDQUFDbUQsUUFBdkIseUJBQWlEeEIsSUFBakQ7O0FBOUNhO0FBZ0RYeUIsNEJBaERXLEdBZ0RRN0YsTUFBTSxDQUFDOEYsTUFBUCxDQUFjLEVBQWQsRUFBa0JYLGVBQWUsS0FBSyxJQUFwQixJQUE0QkEsZUFBZSxLQUFLLEtBQUssQ0FBckQsR0FBeURBLGVBQXpELEdBQTJFLEVBQTdGLEVBQWlHQyxTQUFTLEtBQUssSUFBZCxJQUFzQkEsU0FBUyxLQUFLLEtBQUssQ0FBekMsR0FBNkNBLFNBQTdDLEdBQXlELEVBQTFKLENBaERSO0FBaURYVyxpQkFqRFcsR0FpREgvRixNQUFNLENBQUM4RixNQUFQLENBQWMsRUFBZCxFQUFrQixDQUFDRSxFQUFFLEdBQUd6RCxLQUFLLENBQUN3RCxLQUFaLE1BQXVCLElBQXZCLElBQStCQyxFQUFFLEtBQUssS0FBSyxDQUEzQyxHQUErQ0EsRUFBL0MsR0FBb0QsRUFBdEUsRUFBMEVILGdCQUExRSxDQWpERyxFQWtEakI7O0FBQ01JLGVBbkRXLEdBbURMLElBQUl2RSxHQUFKLENBQVE7QUFDaEJtQyxvQkFBTSxFQUFOQSxNQURnQjtBQUVoQnRCLG1CQUFLLEVBQUxBLEtBRmdCO0FBR2hCMkQsb0JBQU0sRUFBRSxnQkFBVUMsQ0FBVixFQUFhO0FBQ2pCLG9CQUFJakUsRUFBSixFQUFROEQsRUFBUjs7QUFDQSxvQkFBTUksU0FBUyxHQUFHLEVBQWxCOztBQUNBLG9CQUFJdEMsUUFBSixFQUFjO0FBQ1ZzQywyQkFBUyxDQUFDYixJQUFWLENBQWVZLENBQUMsQ0FBQyxNQUFELEVBQVM7QUFDckJFLHlCQUFLLEVBQUU7QUFDSEMseUJBQUcsRUFBRSxZQURGO0FBRUhDLDBCQUFJLCtCQUF3QjlDLFNBQXhCO0FBRkQ7QUFEYyxtQkFBVCxDQUFoQjtBQU1ILGlCQVBELE1BUUs7QUFDRGlCLGlDQUFlLENBQUMvRCxPQUFoQixDQUF3QixVQUFBNkYsR0FBRyxFQUFJO0FBQzNCLHdCQUFJekIsUUFBUSxDQUFDeUIsR0FBRCxDQUFaLEVBQW1CO0FBQ2ZKLCtCQUFTLENBQUNiLElBQVYsQ0FBZVksQ0FBQyxDQUFDLE1BQUQsRUFBUztBQUNyQkUsNkJBQUssRUFBRTtBQUNIQyw2QkFBRyxFQUFFLFlBREY7QUFFSEMsOEJBQUksRUFBRXhCLFFBQVEsQ0FBQ3lCLEdBQUQ7QUFGWDtBQURjLHVCQUFULENBQWhCO0FBTUg7QUFDSixtQkFURDtBQVVIOztBQUNELG9CQUFNQyxZQUFZLEdBQUczQyxRQUFRLEdBQUcsQ0FBQ3FDLENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDckNFLHVCQUFLLEVBQUU7QUFDSHpGLHdCQUFJLEVBQUUsUUFESDtBQUVIOEYsdUJBQUcsRUFBRTtBQUZGO0FBRDhCLGlCQUFYLENBQUYsQ0FBSCxHQUtuQnJELE9BQU8sQ0FBQ3NELEdBQVIsQ0FBWSxVQUFBQyxFQUFFO0FBQUEseUJBQUlULENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDcENFLHlCQUFLLEVBQUU7QUFDSEsseUJBQUcsRUFBRTNCLFFBQVEsQ0FBQzZCLEVBQUQ7QUFEVjtBQUQ2QixtQkFBWCxDQUFMO0FBQUEsaUJBQWQsQ0FMVjtBQVVBLG9CQUFNQyxVQUFVLEdBQUdWLENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDM0JFLHVCQUFLLEVBQUU7QUFDSHpGLHdCQUFJLEVBQUUsUUFESDtBQUVIOEYsdUJBQUcsRUFBRTtBQUZGO0FBRG9CLGlCQUFYLENBQXBCO0FBTUEsb0JBQU1JLG9CQUFvQixHQUFHdkQsaUJBQWlCLEdBQUcsQ0FBQ3JCLEVBQUUsR0FBSTZFLEtBQUssQ0FBQ0MsT0FBTixDQUFjekQsaUJBQWQsSUFBbUNBLGlCQUFuQyxHQUF1REEsaUJBQWlCLENBQUNMLEdBQUQsQ0FBL0UsTUFBMkYsSUFBM0YsSUFBbUdoQixFQUFFLEtBQUssS0FBSyxDQUEvRyxHQUFtSCxLQUFLLENBQXhILEdBQTRIQSxFQUFFLENBQUN5RSxHQUFILENBQU8sVUFBQXRHLElBQUk7QUFBQSx5QkFBSThGLENBQUMsQ0FBQyxRQUFELEVBQVduRyxNQUFNLENBQUM4RixNQUFQLENBQWMsRUFBZCxFQUFrQnpGLElBQUksQ0FBQzRHLFFBQXZCLEVBQWlDO0FBQ3JPQyw0QkFBUSxFQUFFO0FBQ05DLCtCQUFTLEVBQUU5RyxJQUFJLENBQUMrRztBQURWO0FBRDJOLG1CQUFqQyxDQUFYLENBQUw7QUFBQSxpQkFBWCxDQUEvSCxHQUl2QyxFQUpQOztBQUtBLG9CQUFJekQsbUJBQUosRUFBeUI7QUFDckJtRCxzQ0FBb0IsQ0FBQ3ZCLElBQXJCLENBQTBCWSxDQUFDLENBQUMsUUFBRCxFQUFXO0FBQ2xDZSw0QkFBUSxFQUFFO0FBQ05DLCtCQUFTLEVBQUU7QUFETDtBQUR3QixtQkFBWCxDQUEzQjtBQUtIOztBQUNELG9CQUFNRSxzQkFBc0IsR0FBRzdELG1CQUFtQixHQUFHLENBQUN3QyxFQUFFLEdBQUllLEtBQUssQ0FBQ0MsT0FBTixDQUFjeEQsbUJBQWQsSUFBcUNBLG1CQUFyQyxHQUEyREEsbUJBQW1CLENBQUNOLEdBQUQsQ0FBckYsTUFBaUcsSUFBakcsSUFBeUc4QyxFQUFFLEtBQUssS0FBSyxDQUFySCxHQUF5SCxLQUFLLENBQTlILEdBQWtJQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxVQUFBdEcsSUFBSTtBQUFBLHlCQUFJOEYsQ0FBQyxDQUFDLFFBQUQsRUFBV25HLE1BQU0sQ0FBQzhGLE1BQVAsQ0FBYyxFQUFkLEVBQWtCekYsSUFBSSxDQUFDNEcsUUFBdkIsRUFBaUM7QUFDL09DLDRCQUFRLEVBQUU7QUFDTkMsK0JBQVMsRUFBRTlHLElBQUksQ0FBQytHO0FBRFY7QUFEcU8sbUJBQWpDLENBQVgsQ0FBTDtBQUFBLGlCQUFYLENBQXJJLEdBSTNDLEVBSlA7QUFLQSx1QkFBT2pCLENBQUMsQ0FBQ25ELE1BQUQsRUFBUztBQUNic0UsdUJBQUssRUFBRTtBQUFFcEUsdUJBQUcsRUFBSEEsR0FBRjtBQUFPQywwQkFBTSxFQUFOQSxNQUFQO0FBQWVvRSw2QkFBUyxFQUFFMUIsZ0JBQTFCO0FBQTRDVCw2QkFBUyxFQUFFRDtBQUF2RDtBQURNLGlCQUFULEVBRUwsQ0FDQ2dCLENBQUMsQ0FBQyxVQUFELEVBQWE7QUFDVnFCLHNCQUFJLEVBQUU7QUFESSxpQkFBYixFQUVFLENBQ0NyQixDQUFDLENBQUMsUUFBRCxFQUFXLEVBQVgsRUFBZSxDQUNaLDRIQURZLENBQWYsQ0FERixDQUZGLENBREYsRUFRQ3JDLFFBQVEsSUFBSXFDLENBQUMsQ0FBQyxVQUFELEVBQWE7QUFDdEJxQixzQkFBSSxFQUFFO0FBRGdCLGlCQUFiLEVBRVYsQ0FBQ1gsVUFBRCxDQUZVLENBUmQsRUFXQ1YsQ0FBQyxDQUFDLFVBQUQsRUFBYTtBQUNWcUIsc0JBQUksRUFBRTtBQURJLGlCQUFiLEVBRUVWLG9CQUZGLENBWEYsRUFjQ1gsQ0FBQyxDQUFDLFVBQUQsRUFBYTtBQUNWcUIsc0JBQUksRUFBRTtBQURJLGlCQUFiLEVBRUVILHNCQUZGLENBZEYsRUFpQkNsQixDQUFDLENBQUMsVUFBRCxFQUFhO0FBQ1ZxQixzQkFBSSxFQUFFO0FBREksaUJBQWIsRUFFRSxDQUNDckIsQ0FBQyxDQUFDckQsR0FBRCxFQUFNO0FBQ0h3RSx1QkFBSyxFQUFFO0FBQUVwRSx1QkFBRyxFQUFIQSxHQUFGO0FBQU9DLDBCQUFNLEVBQU5BLE1BQVA7QUFBZWlDLDZCQUFTLEVBQUVTO0FBQTFCO0FBREosaUJBQU4sQ0FERixDQUZGLENBakJGLEVBd0JDTSxDQUFDLENBQUMsVUFBRCxFQUFhO0FBQ1ZxQixzQkFBSSxFQUFFO0FBREksaUJBQWIsRUFFRSxDQUNDeEMsS0FBSyxHQUFHbUIsQ0FBQyxDQUFDLFFBQUQsRUFBVztBQUNoQmUsMEJBQVEsRUFBRTtBQUNOQyw2QkFBUyxnQ0FBeUJyRCxRQUF6QjtBQURIO0FBRE0saUJBQVgsQ0FBSixHQUlBcUMsQ0FBQyxDQUFDLFFBQUQsRUFBVztBQUNiZSwwQkFBUSxFQUFFO0FBQ05DLDZCQUFTLDhEQUF1RHhFLFNBQVMsQ0FBQ29ELEtBQUQsQ0FBaEUsa0NBQStGakMsUUFBL0Y7QUFESDtBQURHLGlCQUFYLENBTFAsQ0FGRixDQXhCRixFQXFDQ3FDLENBQUMsQ0FBQyxVQUFELEVBQWE7QUFDVnFCLHNCQUFJLEVBQUU7QUFESSxpQkFBYixFQUVFcEIsU0FGRixDQXJDRixFQXdDQ0QsQ0FBQyxDQUFDLFVBQUQsRUFBYTtBQUNWcUIsc0JBQUksRUFBRTtBQURJLGlCQUFiLEVBRUVmLFlBRkYsQ0F4Q0YsQ0FGSyxDQUFSO0FBOENIO0FBekdlLGFBQVIsQ0FuREs7QUFBQSw2Q0E4SlZSLEdBOUpVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVp6RCxZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCOztBQWdLQXRDLE9BQU8sQ0FBQ3NDLFlBQVIsR0FBdUJBLFlBQXZCLEM7Ozs7Ozs7Ozs7OztBQzNLQTtBQUFBO0FBQ1U7QUFDVixPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ1BMO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLFlBQVksRUFBRTtBQUMzQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBeUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdEQUFnRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpQ0FBaUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUErQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QyxxQkFBcUIsc0JBQXNCO0FBQzNDLGVBQWU7QUFDZjtBQUNBLHlCQUF5QixxQ0FBcUM7QUFDOUQsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUyx3Q0FBd0MsRUFBRTtBQUM3RTtBQUNBLHlCQUF5QixTQUFTLHdDQUF3QyxFQUFFO0FBQzVFO0FBQ0E7QUFDQSxzQkFBc0Isd0NBQXdDO0FBQzlELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTLG9DQUFvQyxFQUFFO0FBQ3pFO0FBQ0EsNkJBQTZCLFNBQVMsb0NBQW9DLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3BEOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyx5S0FBdUU7QUFDOUY7O0FBRUE7O0FBRUE7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4QmY7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUEsd0M7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQzNCO0FBQ0w7OztBQUdsRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUEsd0NBQW1MLENBQWdCLCtPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFvRjtBQUNwRjtBQUNBOztBQUVBLGVBQWUsbUJBQU8sQ0FBQywwSEFBK0M7QUFDdEU7O0FBRUE7O0FBRUE7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCO0FBQ0EsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQSx3Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNwRDs7QUFFQSxlQUFlLG1CQUFPLENBQUMsMEtBQXVFO0FBQzlGOztBQUVBOztBQUVBO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeEJmO0FBQUE7QUFBQSx3Q0FBcUwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek07QUFBQTtBQUFBLHdDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3BEOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyw2S0FBdUU7QUFDOUY7O0FBRUE7O0FBRUE7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4QmY7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUEsd0M7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDcEQ7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLDZLQUF1RTtBQUM5Rjs7QUFFQTs7QUFFQTtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3hCZjtBQUFBO0FBQUEsd0NBQXFMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpNO0FBQUE7QUFBQSx3Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNwRDs7QUFFQSxlQUFlLG1CQUFPLENBQUMsMEtBQXVFO0FBQzlGOztBQUVBOztBQUVBO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeEJmO0FBQUE7QUFBQSx3Q0FBcUwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek07QUFBQTtBQUFBLHdDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3BEOztBQUVBLGVBQWUsbUJBQU8sQ0FBQywwS0FBdUU7QUFDOUY7O0FBRUE7O0FBRUE7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4QmY7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUEsd0M7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNhQTtBQUFBLGtMQUFlLHVCQUFrQ1UsR0FBbEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNYLGlCQUFULFFBQVNBLEtBQVQsRUFBZ0JzQixNQUFoQixRQUFnQkEsTUFBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJNkI0RCxNQUFNLENBQUNwQyxLQUFQLHVCQUE0QnhCLE1BQU0sQ0FBQzZELE1BQVAsQ0FBY0MsRUFBMUMsRUFKN0I7O0FBQUE7QUFBQTtBQUFBLGlDQUk4RUMsSUFKOUU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUk2RjFFLEdBSjdGLGFBSTZGQSxHQUo3RixnREFJNkZBLEdBQUcsQ0FBRTJFLGdCQUpsRywwREFJNkYsc0JBQXVCNUcsS0FBdkIsQ0FBNkJpQyxHQUFHLENBQUN3RSxNQUFKLENBQVdDLEVBQXhDLENBSjdGOztBQUFBO0FBQUE7O0FBQUE7QUFJUEcsZ0JBSk87QUFBQTtBQUFBLG1CQUtQdkYsS0FBSyxDQUFDd0YsUUFBTixDQUFlLHlCQUFmLEVBQTBDO0FBQUVDLHFCQUFPLEVBQUVGO0FBQVgsYUFBMUMsQ0FMTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLE07Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7QUFDeEQ7OztBQUdBOztBQUVBO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdEJmO0FBQUE7QUFBQSx3Q0FBeUwsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1lBO0FBQUEsa0xBQWUsdUJBQWtDNUUsR0FBbEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNYLGlCQUFULFFBQVNBLEtBQVQsRUFBZ0JzQixNQUFoQixRQUFnQkEsTUFBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJNkI0RCxNQUFNLENBQUNwQyxLQUFQLENBQWEsWUFBYixDQUo3Qjs7QUFBQTtBQUFBO0FBQUEsaUNBSXlEdUMsSUFKekQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUl3RTFFLEdBSnhFLGFBSXdFQSxHQUp4RSwwQ0FJd0VBLEdBQUcsQ0FBRStFLFVBSjdFLG9EQUl3RSxnQkFBaUJoSCxLQUFqQixFQUp4RTs7QUFBQTtBQUFBOztBQUFBO0FBSVA2RyxnQkFKTztBQUFBO0FBQUEsbUJBS1B2RixLQUFLLENBQUN3RixRQUFOLENBQWUsd0JBQWYsRUFBeUM7QUFBRUMscUJBQU8sRUFBRUY7QUFBWCxhQUF6QyxDQUxPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDtBQUNyRDs7O0FBR0E7O0FBRUE7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0QmY7QUFBQTtBQUFBLHdDQUFzTCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUksT0FBTyxHQUFHO0FBQ2RDLFlBQVUsRUFBVkEseURBRGM7QUFFZEMsYUFBVyxFQUFYQSwyREFGYztBQUdkQyxhQUFXLEVBQVhBLDJEQUFXQTtBQUhHLENBQWhCOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBLElBQU1ELFdBQVcsR0FBRztBQUNsQkUsWUFBVSxFQUFFLElBRE07QUFFbEJ2QyxPQUFLLEVBQUU7QUFDTCtCLFFBQUksRUFBRTtBQURELEdBRlc7QUFLbEJTLFdBQVMsRUFBRTtBQUNUQyxXQURTLG1CQUNBekMsS0FEQSxFQUNPaUMsT0FEUCxFQUNnQjtBQUN2QmpDLFdBQUssQ0FBQytCLElBQU4sR0FBYUUsT0FBYjtBQUNEO0FBSFEsR0FMTztBQVVsQlMsU0FBTyxFQUFFO0FBQ1BDLGVBRE8sb0NBQytCO0FBQUEsVUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFVBQVhYLE9BQVcsU0FBWEEsT0FBVztBQUNwQ1csWUFBTSxDQUFDLFNBQUQsRUFBWVgsT0FBWixDQUFOO0FBQ0Q7QUFITTtBQVZTLENBQXBCOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBLElBQU1HLFVBQVUsR0FBRztBQUNqQkcsWUFBVSxFQUFFLElBREs7QUFFakJ2QyxPQUFLLEVBQUU7QUFDTCtCLFFBQUksRUFBRTtBQURELEdBRlU7QUFLakJTLFdBQVMsRUFBRTtBQUNUQyxXQURTLG1CQUNBekMsS0FEQSxFQUNPaUMsT0FEUCxFQUNnQjtBQUN2QmpDLFdBQUssQ0FBQytCLElBQU4sR0FBYUUsT0FBTyxDQUFDRixJQUFyQjtBQUNEO0FBSFEsR0FMTTtBQVVqQlcsU0FBTyxFQUFFO0FBQ1BDLGVBRE8sb0NBQytCO0FBQUEsVUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFVBQVhYLE9BQVcsU0FBWEEsT0FBVztBQUNwQ1csWUFBTSxDQUFDLFNBQUQsRUFBWVgsT0FBWixDQUFOO0FBQ0Q7QUFITTtBQVZRLENBQW5COzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBLElBQU1LLFdBQVcsR0FBRztBQUNsQkMsWUFBVSxFQUFFLElBRE07QUFFbEJ2QyxPQUFLLEVBQUU7QUFDTDZDLGNBQVUsRUFBRTtBQURQLEdBRlc7QUFLbEJMLFdBQVMsRUFBRTtBQUNUTSxXQURTLG1CQUNBOUMsS0FEQSxFQUNPaUMsT0FEUCxFQUNnQjtBQUN2QmpDLFdBQUssQ0FBQzZDLFVBQU4sR0FBbUJaLE9BQU8sQ0FBQ2MsSUFBM0I7QUFDRDtBQUhRLEdBTE87QUFVbEJMLFNBQU8sRUFBRTtBQUNQSSxXQURPLGdDQUMyQjtBQUFBLFVBQXZCRixNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxVQUFYWCxPQUFXLFNBQVhBLE9BQVc7QUFDaENXLFlBQU0sQ0FBQyxTQUFELEVBQVlYLE9BQVosQ0FBTjtBQUNEO0FBSE07QUFWUyxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoiUGFnZS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlBhZ2VcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdC8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuIFx0Ly8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKCkge1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG4gICAgICAvLyBUaGUgZmlsZSBpcyBwcm92aXNpb25hbO+8jGRvbid0IGRlcGVuZCBvbiBpdCBcbiAgICAgICAgaW1wb3J0ICogYXMgc3RvcmUgZnJvbSBcIkAvc3RvcmUvaW5kZXgudHNcIlxuICAgICAgICBleHBvcnQgY29uc3QgRmVSb3V0ZXMgPSBbe1wicGF0aFwiOlwiL2RldGFpbC86aWRcIixcImNvbXBvbmVudFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkZXRhaWwtaWRcIiAqLyAnQC9wYWdlcy9kZXRhaWwvcmVuZGVyJGlkLnZ1ZScpLFwid2VicGFja0NodW5rTmFtZVwiOlwiZGV0YWlsLWlkXCIsXCJmZXRjaFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkZXRhaWwtaWQtZmV0Y2hcIiAqLyAnQC9wYWdlcy9kZXRhaWwvZmV0Y2gudHMnKX0se1wicGF0aFwiOlwiL1wiLFwiY29tcG9uZW50XCI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImluZGV4XCIgKi8gJ0AvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZScpLFwid2VicGFja0NodW5rTmFtZVwiOlwiaW5kZXhcIixcImZldGNoXCI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImluZGV4LWZldGNoXCIgKi8gJ0AvcGFnZXMvaW5kZXgvZmV0Y2gudHMnKX1dIFxuICAgICAgICBleHBvcnQgeyBkZWZhdWx0IGFzIExheW91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZVwiXG4gICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZVwiXG4gICAgICAgIFxuICAgICAgICBleHBvcnQgeyBzdG9yZSB9XG4gICAgICAgIFxuICAgICAgICAiLCJcbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJyaWVmLWluZm9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYnJpZWYtdGl0bGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiWydpY29uLUdPTERFTiddXCI+e3sgYnJpZWZEYXRhLm1hcmsuZGF0YS50ZXh0IH19PC9zcGFuPlxuICAgICAgPGgxPnt7IGJyaWVmRGF0YS5zaG93TmFtZSB9fTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJyaWVmLXNjb3JlXCI+XG4gICAgICA8c3BhbiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYnJpZWZEYXRhLnN1YlRpdGxlTGlzdFwiIDprZXk9XCJpdGVtLnN1YnRpdGxlXCIgOmNsYXNzPVwiaXRlbS5zdWJ0aXRsZVR5cGUgPT09ICdQTEFZX1ZWJyA/ICdob3RWdicgOiAnJ1wiPlxuICAgICAgICA8aW1nIHYtaWY9XCIgaXRlbS5zdWJ0aXRsZVR5cGUgPT09ICdQTEFZX1ZWJ1wiIDpzcmM9XCJicmllZkRhdGEuaGVhdEljb25cIiBhbHQ9XCJcIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cImluZGV4ID4gMFwiIGNsYXNzPVwiZGl2aWRlXCI+Lzwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3sgaXRlbS5zdWJ0aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ2RhdGEnXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWVmRGF0YTogdGhpcy5kYXRhWzBdLmRhdGFcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5AaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgPHJvdXRlci12aWV3IC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbi8vIOWcqOi/memHjOWPr+S7pei/m+ihjOS4gOS6m+WFqOWxgOe7hOS7tueahOazqOWGjOmAu+i+kVxuZXhwb3J0IGRlZmF1bHQge1xuXG59XG48L3NjcmlwdD5cbiIsIlxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgdi1pZj1cInBsYXlcIj5cbiAgICAgIDx2aWRlbyBzcmM9XCJodHRwOi8vY2xpcHMudm9yd2FlcnRzLWdtYmguZGUvYmlnX2J1Y2tfYnVubnkubXA0XCIgY29udHJvbHMgYXV0b1BsYXkgY2xhc3M9XCJ2aWRlb1wiPlxuICAgICAgICB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnXG4gICAgICA8L3ZpZGVvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJwbGF5ZXJDb250YWluZXJcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZDogYHVybCgke3BsYXlEYXRhLmltZ30pIDAgMCAvY292ZXJgfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIHt7IHBsYXlEYXRhLnRpdGxlIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgY2xhc3M9XCJpY29cIiBzcmM9XCJodHRwczovL2d3LmFsaWNkbi5jb20vdGZzL1RCMWVBNkZFVzYxZ0swalNaRmxYWFhES0ZYYS0xMzUtMTM1LnBuZ1wiIEBjbGljaz1cInBsYXlWaWRlb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImxheWVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ2RhdGEnXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXlEYXRhOiB0aGlzLmRhdGFbMF0uZGF0YSxcbiAgICAgIHBsYXk6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGxheVZpZGVvICgpIHtcbiAgICAgIHRoaXMucGxheSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5AaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG48L3N0eWxlPlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICDkuLrkvaDmjqjojZBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVDb250YWluZXJcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGRhdGEgXCIgOmtleT1cIml0ZW0uZGF0YS5oZWF0XCIgY2xhc3M9XCJyZUNvbnRlbnRcIj5cbiAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5kYXRhLmltZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidlRpdGxlXCI+XG4gICAgICAgICAge3sgaXRlbS5kYXRhLnRpdGxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3ViVGl0bGVcIj5cbiAgICAgICAgICB7eyBpdGVtLmRhdGEuc3VidGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ2RhdGEnXVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuQGltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuPC9zdHlsZT5cbiIsIlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGJiQ29udGFpbmVyXCI+XG4gICAgPGRpdiB2LWZvcj1cInZhbCBpbiBkYXRhWzBdLml0ZW1NYXBcIiA6a2V5PVwidmFsLmltZ1wiIGNsYXNzPVwicGJiSXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBiYkRlc2NDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHRJdGVtQmdcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZDogYHVybCgke3ZhbC5pbWd9KSAwIDAgL2NvdmVyYH1cIiBAY2xpY2s9XCJ0b0RldGFpbFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwTmFtZSBwYmJOYW1lXCI+XG4gICAgICAgICAge3sgdmFsLnRpdGxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicERlc2MgcGJiTmFtZVwiPlxuICAgICAgICAgIHt7IHZhbC5zdWJ0aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZGF0YSddLFxuICBtZXRob2RzOiB7XG4gICAgdG9EZXRhaWwgKCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9kZXRhaWwvY2JiYTkzNGIxNGY3NDcwNDkxODcnKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbjwvc3R5bGU+XG4iLCJcbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaENvbnRhaW5lclwiPlxuICAgIDxpbnB1dCA6dmFsdWU9XCJzZWFyY2hUZXh0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCLor6XmkJzntKLmoYblhoXlrrnkvJrlnKjmiYDmnInpobXpnaLlhbHkuqtcIiBAaW5wdXQ9XCJzZXRUZXh0XCI+XG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE1elNvWDIxVEJ1Tmp5MEZqWFhhanlYWGEtNDgtNDgucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJzZWFyY2hJbWdcIiBAY2xpY2s9XCJ0b1NlYXJjaFwiPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICBzZWFyY2hUZXh0OiBzdGF0ZSA9PiBzdGF0ZS5zZWFyY2hTdG9yZS5zZWFyY2hUZXh0XG4gICAgfSlcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgc2V0VGV4dCAoZSkge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3NlYXJjaFN0b3JlL3NldFRleHQnLCB7XG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9TZWFyY2ggKCkge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGBodHRwczovL3NlYXJjaC55b3VrdS5jb20vc2VhcmNoX3ZpZGVvP2tleXdvcmQ9JHt0aGlzLnNlYXJjaFRleHR9YFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbjwvc3R5bGU+XG4iLCJcbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInN3aXBlckNvbnRhaW5lclwiPlxuICAgIDxTd2lwZXIgcmVmPVwibXlTd2lwZXJcIiA6b3B0aW9ucz1cInN3aXBlck9wdGlvbnNcIj5cbiAgICAgIDxzd2lwZXItc2xpZGUgdi1mb3I9XCJ2YWwgaW4gZGF0YVswXS5pdGVtTWFwXCIgOmtleT1cInZhbC5pbWdcIiBjbGFzcz1cInNsaWRlckNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJ2YWwuaW1nXCIgY2xhc3M9XCJjYXJvdXNlbEltZ1wiIEBjbGljaz1cInRvRGV0YWlsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJEZXNjQ29udGFpbmVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXJUaXRsZVwiPlxuICAgICAgICAgICAge3sgdmFsLnRpdGxlIH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3dpcGVyLXNsaWRlPlxuICAgICAgPHRlbXBsYXRlICNwYWdpbmF0aW9uIGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb25cIiAvPlxuICAgIDwvU3dpcGVyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUsIGRpcmVjdGl2ZSB9IGZyb20gJ3Z1ZS1hd2Vzb21lLXN3aXBlcidcbmltcG9ydCAnc3dpcGVyL2Nzcy9zd2lwZXIuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGVcbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIHN3aXBlcjogZGlyZWN0aXZlXG4gIH0sXG4gIHByb3BzOiBbJ2RhdGEnXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN3aXBlck9wdGlvbnM6IHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbG9vcDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHN3aXBlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy5teVN3aXBlci4kc3dpcGVyXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLnN3aXBlci5zbGlkZVRvKDIsIDEwMDAsIGZhbHNlKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9EZXRhaWwgKCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9kZXRhaWwvY2JiYTkzNGIxNGY3NDcwNDkxODcnKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbjwvc3R5bGU+XG4iLCJcbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8U2VhcmNoIC8+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJkZXRhaWxEYXRhXCI+XG4gICAgICA8UGxheWVyIDpkYXRhPVwiZGV0YWlsRGF0YS5kYXRhWzBdLmRhdGFOb2RlXCIgLz5cbiAgICAgIDxCcmllZiA6ZGF0YT1cImRldGFpbERhdGEuZGF0YVsxXS5kYXRhTm9kZVwiIC8+XG4gICAgICA8UmVjb21tZW5kIDpkYXRhPVwiZGV0YWlsRGF0YS5kYXRhWzJdLmRhdGFOb2RlXCIgLz5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90ZnMvVEIxdi56SUU3VDJnSzBqU1pQY1hYY0trcFhhLTEyOC0xMjguZ2lmXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IFBsYXllciBmcm9tICdAL2NvbXBvbmVudHMvcGxheWVyL2luZGV4LnZ1ZSdcbmltcG9ydCBTZWFyY2ggZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWUnXG5pbXBvcnQgQnJpZWYgZnJvbSAnQC9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZSdcbmltcG9ydCBSZWNvbW1lbmQgZnJvbSAnQC9jb21wb25lbnRzL3JlY29tbWVuZC9pbmRleC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFBsYXllcixcbiAgICBTZWFyY2gsXG4gICAgQnJpZWYsXG4gICAgUmVjb21tZW5kXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoe1xuICAgICAgZGV0YWlsRGF0YTogc3RhdGUgPT4gc3RhdGUuZGV0YWlsU3RvcmU/LmRhdGFcbiAgICB9KVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPFNlYXJjaCAvPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXhEYXRhXCI+XG4gICAgICA8U2xpZGVyIDpkYXRhPVwiaW5kZXhEYXRhWzBdLmNvbXBvbmVudHNcIiAvPlxuICAgICAgPFJlY3RhbmdsZSA6ZGF0YT1cImluZGV4RGF0YVsxXS5jb21wb25lbnRzXCIgLz5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90ZnMvVEIxdi56SUU3VDJnSzBqU1pQY1hYY0trcFhhLTEyOC0xMjguZ2lmXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IFNsaWRlciBmcm9tICdAL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LnZ1ZSdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnQC9jb21wb25lbnRzL3JlY3RhbmdsZS9pbmRleC52dWUnXG5pbXBvcnQgU2VhcmNoIGZyb20gJ0AvY29tcG9uZW50cy9zZWFyY2gvaW5kZXgudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBTbGlkZXIsXG4gICAgUmVjdGFuZ2xlLFxuICAgIFNlYXJjaFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgIGluZGV4RGF0YTogc3RhdGUgPT4gc3RhdGUuaW5kZXhTdG9yZT8uZGF0YVxuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3NjM5NjYzNTc4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2Mzc2Mzk2NjM1NTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzYzOTY2MzU4MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3NjM5NjYzNTc3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2Mzc2Mzk2NjM1NzVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNzYzOTY2MzU2NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3NjM5NjYzNTczXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWVwQ2xvbmUgPSB2b2lkIDA7XG4vLyBAdHMtbm9jaGVja1xuZnVuY3Rpb24gZGVlcENsb25lKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSAvLyBudWxsLCB1bmRlZmluZWQgdmFsdWVzIGNoZWNrXG4gICAgdmFyIHR5cGVzID0gW051bWJlciwgU3RyaW5nLCBCb29sZWFuXTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIC8vIG5vcm1hbGl6aW5nIHByaW1pdGl2ZXMgaWYgc29tZW9uZSBkaWQgbmV3IFN0cmluZygnYWFhJyksIG9yIG5ldyBOdW1iZXIoJzQ0NCcpO1xuICAgIHR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiB0eXBlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0eXBlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlbSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgaXRlbS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IGRlZXBDbG9uZShjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5wcm90b3R5cGUpIHsgLy8gY2hlY2sgdGhhdCB0aGlzIGlzIGEgbGl0ZXJhbFxuICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgRGF0ZShpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IGlzIGFuIG9iamVjdCBsaXRlcmFsXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gZGVlcENsb25lKGl0ZW1baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZGVlcENsb25lID0gZGVlcENsb25lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlYWxWdWV4ID0gZXhwb3J0cy5SZWFsUm91dGVyID0gZXhwb3J0cy5SZWFsVnVlID0gZXhwb3J0cy5jcmVhdGVTdG9yZSA9IGV4cG9ydHMuY3JlYXRlUm91dGVyID0gdm9pZCAwO1xuLy8gQHRzLW5vY2hlY2tcbmNvbnN0IFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG5jb25zdCBWdWV4ID0gcmVxdWlyZShcInZ1ZXhcIik7XG5jb25zdCBSb3V0ZXIgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTtcbmNvbnN0IHNzcl90ZW1wb3Jhcnlfcm91dGVzXzEgPSByZXF1aXJlKFwiX2J1aWxkL3Nzci10ZW1wb3Jhcnktcm91dGVzXCIpO1xuY29uc3QgY2xvbmVfMSA9IHJlcXVpcmUoXCIuL2Nsb25lXCIpO1xuLy8gd2l0aG91dCB0c2NvbmZpZyBlc01vZHVsZUludGVyb3Agb3B0aW9ucyBtdXN0IHVzZSB0aGUgY29tcGF0aWJsZSBzeW50YXhcbmNvbnN0IFJlYWxWdWUgPSBWdWUuZGVmYXVsdCB8fCBWdWU7XG5leHBvcnRzLlJlYWxWdWUgPSBSZWFsVnVlO1xuY29uc3QgUmVhbFJvdXRlciA9IFJvdXRlci5kZWZhdWx0IHx8IFJvdXRlcjtcbmV4cG9ydHMuUmVhbFJvdXRlciA9IFJlYWxSb3V0ZXI7XG5jb25zdCBSZWFsVnVleCA9IFZ1ZXguZGVmYXVsdCB8fCBWdWV4O1xuZXhwb3J0cy5SZWFsVnVleCA9IFJlYWxWdWV4O1xuUmVhbFZ1ZS51c2UoUmVhbFJvdXRlcik7XG5SZWFsVnVlLnVzZShSZWFsVnVleCk7XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIob3B0aW9ucyA9IHt9KSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBuZXcgUmVhbFJvdXRlcih7XG4gICAgICAgIG1vZGU6ICdoaXN0b3J5JyxcbiAgICAgICAgcm91dGVzOiBzc3JfdGVtcG9yYXJ5X3JvdXRlc18xLkZlUm91dGVzLFxuICAgICAgICBiYXNlOiAoX2EgPSBvcHRpb25zLmJhc2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcvJ1xuICAgIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5mdW5jdGlvbiBjcmVhdGVTdG9yZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBWdWV4LlN0b3JlKChfYSA9ICgwLCBjbG9uZV8xLmRlZXBDbG9uZSkoc3NyX3RlbXBvcmFyeV9yb3V0ZXNfMS5zdG9yZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9KTtcbn1cbmV4cG9ydHMuY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXJ2ZXJSZW5kZXIgPSB2b2lkIDA7XG5jb25zdCBWdWUgPSByZXF1aXJlKFwidnVlXCIpO1xuY29uc3Qgc3NyX3NlcnZlcl91dGlsc18xID0gcmVxdWlyZShcInNzci1zZXJ2ZXItdXRpbHNcIik7XG5jb25zdCB2dWV4X3JvdXRlcl9zeW5jXzEgPSByZXF1aXJlKFwidnVleC1yb3V0ZXItc3luY1wiKTtcbmNvbnN0IHNlcmlhbGl6ZSA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCJfYnVpbGQvc3NyLXRlbXBvcmFyeS1yb3V0ZXNcIik7XG5jb25zdCBjcmVhdGVfMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKTtcbmNvbnN0IHsgRmVSb3V0ZXMsIEFwcCwgbGF5b3V0RmV0Y2gsIExheW91dCwgUHJlZml4Um91dGVyQmFzZSB9ID0gUm91dGVzO1xuY29uc3Qgc2VydmVyUmVuZGVyID0gYXN5bmMgKGN0eCwgY29uZmlnKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCB7IGNzc09yZGVyLCBqc09yZGVyLCBkeW5hbWljLCBtb2RlLCBjdXN0b21lSGVhZFNjcmlwdCwgY3VzdG9tZUZvb3RlclNjcmlwdCwgY2h1bmtOYW1lLCBwYXJhbGxlbEZldGNoLCBkaXNhYmxlQ2xpZW50UmVuZGVyLCBwcmVmaXggfSA9IGNvbmZpZztcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgY3JlYXRlXzEuY3JlYXRlUm91dGVyKSgpO1xuICAgIGNvbnN0IHN0b3JlID0gKDAsIGNyZWF0ZV8xLmNyZWF0ZVN0b3JlKSgpO1xuICAgIGNvbnN0IGJhc2UgPSBwcmVmaXggIT09IG51bGwgJiYgcHJlZml4ICE9PSB2b2lkIDAgPyBwcmVmaXggOiBQcmVmaXhSb3V0ZXJCYXNlOyAvLyDku6XlvIDlj5HogIXlrp7pmYXkvKDlhaXnmoTkuLrmnIDpq5jkvJjlhYjnuqdcbiAgICBjb25zdCB2aXRlTW9kZSA9IHByb2Nlc3MuZW52LkJVSUxEX1RPT0wgPT09ICd2aXRlJztcbiAgICAoMCwgdnVleF9yb3V0ZXJfc3luY18xLnN5bmMpKHN0b3JlLCByb3V0ZXIpO1xuICAgIGxldCB7IHBhdGgsIHVybCB9ID0gY3R4LnJlcXVlc3Q7XG4gICAgaWYgKGJhc2UpIHtcbiAgICAgICAgcGF0aCA9ICgwLCBzc3Jfc2VydmVyX3V0aWxzXzEubm9ybWFsaXplUGF0aCkocGF0aCwgYmFzZSk7XG4gICAgICAgIHVybCA9ICgwLCBzc3Jfc2VydmVyX3V0aWxzXzEubm9ybWFsaXplUGF0aCkodXJsLCBiYXNlKTtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVJdGVtID0gKDAsIHNzcl9zZXJ2ZXJfdXRpbHNfMS5maW5kUm91dGUpKEZlUm91dGVzLCBwYXRoKTtcbiAgICBpZiAoIXJvdXRlSXRlbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgIOafpeaJvue7hOS7tuWksei0pe+8jOivt+ehruiupOW9k+WJjSBwYXRoOiAke3BhdGh9IOWvueW6lOWJjeerr+e7hOS7tuaYr+WQpuWtmOWcqFxuICAgIOiLpeWIm+W7uuS6huaWsOeahOmhtemdouaWh+S7tuWkue+8jOivt+mHjeaWsOaJp+ihjCBucG0gc3RhcnQg6YeN5ZCv5pyN5YqhXG4gICAgYCk7XG4gICAgfVxuICAgIGxldCBkeW5hbWljQ3NzT3JkZXIgPSBjc3NPcmRlcjtcbiAgICBpZiAoZHluYW1pYyAmJiAhdml0ZU1vZGUpIHtcbiAgICAgICAgZHluYW1pY0Nzc09yZGVyID0gY3NzT3JkZXIuY29uY2F0KFtgJHtyb3V0ZUl0ZW0ud2VicGFja0NodW5rTmFtZX0uY3NzYF0pO1xuICAgICAgICBkeW5hbWljQ3NzT3JkZXIgPSBhd2FpdCAoMCwgc3NyX3NlcnZlcl91dGlsc18xLmFkZEFzeW5jQ2h1bmspKGR5bmFtaWNDc3NPcmRlciwgcm91dGVJdGVtLndlYnBhY2tDaHVua05hbWUpO1xuICAgIH1cbiAgICBjb25zdCBtYW5pZmVzdCA9IHZpdGVNb2RlID8ge30gOiBhd2FpdCAoMCwgc3NyX3NlcnZlcl91dGlsc18xLmdldE1hbmlmZXN0KSgpO1xuICAgIGNvbnN0IGlzQ3NyID0gISEobW9kZSA9PT0gJ2NzcicgfHwgKChfYSA9IGN0eC5yZXF1ZXN0LnF1ZXJ5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3NyKSk7XG4gICAgbGV0IGxheW91dEZldGNoRGF0YSA9IHt9O1xuICAgIGxldCBmZXRjaERhdGEgPSB7fTtcbiAgICBpZiAoIWlzQ3NyKSB7XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IHJvdXRlSXRlbTtcbiAgICAgICAgY29uc3QgY3VycmVudEZldGNoID0gZmV0Y2ggPyAoYXdhaXQgZmV0Y2goKSkuZGVmYXVsdCA6IG51bGw7XG4gICAgICAgIHJvdXRlci5wdXNoKHVybCk7XG4gICAgICAgIC8vIGNzciDkuIvkuI3pnIDopoHmnI3liqHnq6/ojrflj5bmlbDmja5cbiAgICAgICAgaWYgKHBhcmFsbGVsRmV0Y2gpIHtcbiAgICAgICAgICAgIFtsYXlvdXRGZXRjaERhdGEsIGZldGNoRGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgbGF5b3V0RmV0Y2ggPyBsYXlvdXRGZXRjaCh7IHN0b3JlLCByb3V0ZXI6IHJvdXRlci5jdXJyZW50Um91dGUgfSwgY3R4KSA6IFByb21pc2UucmVzb2x2ZSh7fSksXG4gICAgICAgICAgICAgICAgY3VycmVudEZldGNoID8gY3VycmVudEZldGNoKHsgc3RvcmUsIHJvdXRlcjogcm91dGVyLmN1cnJlbnRSb3V0ZSB9LCBjdHgpIDogUHJvbWlzZS5yZXNvbHZlKHt9KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsYXlvdXRGZXRjaERhdGEgPSBsYXlvdXRGZXRjaCA/IGF3YWl0IGxheW91dEZldGNoKHsgc3RvcmUsIHJvdXRlcjogcm91dGVyLmN1cnJlbnRSb3V0ZSB9LCBjdHgpIDoge307XG4gICAgICAgICAgICBmZXRjaERhdGEgPSBjdXJyZW50RmV0Y2ggPyBhd2FpdCBjdXJyZW50RmV0Y2goeyBzdG9yZSwgcm91dGVyOiByb3V0ZXIuY3VycmVudFJvdXRlIH0sIGN0eCkgOiB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgKDAsIHNzcl9zZXJ2ZXJfdXRpbHNfMS5sb2dHcmVlbikoYEN1cnJlbnQgcGF0aCAke3BhdGh9IHVzZSBjc3IgcmVuZGVyIG1vZGVgKTtcbiAgICB9XG4gICAgY29uc3QgY29tYmluZUF5c25jRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGxheW91dEZldGNoRGF0YSAhPT0gbnVsbCAmJiBsYXlvdXRGZXRjaERhdGEgIT09IHZvaWQgMCA/IGxheW91dEZldGNoRGF0YSA6IHt9LCBmZXRjaERhdGEgIT09IG51bGwgJiYgZmV0Y2hEYXRhICE9PSB2b2lkIDAgPyBmZXRjaERhdGEgOiB7fSk7XG4gICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAoX2IgPSBzdG9yZS5zdGF0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDoge30sIGNvbWJpbmVBeXNuY0RhdGEpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNvbnN0IGluamVjdENzcyA9IFtdO1xuICAgICAgICAgICAgaWYgKHZpdGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0Q3NzLnB1c2goaCgnbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogYC9zZXJ2ZXIvc3RhdGljL2Nzcy8ke2NodW5rTmFtZX0uY3NzYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZHluYW1pY0Nzc09yZGVyLmZvckVhY2goY3NzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmlmZXN0W2Nzc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdENzcy5wdXNoKGgoJ2xpbmsnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IG1hbmlmZXN0W2Nzc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluamVjdFNjcmlwdCA9IHZpdGVNb2RlID8gW2goJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnL25vZGVfbW9kdWxlcy9zc3ItcGx1Z2luLXZ1ZS9lc20vZW50cnkvY2xpZW50LWVudHJ5LmpzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSldIDoganNPcmRlci5tYXAoanMgPT4gaCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogbWFuaWZlc3RbanNdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY29uc3Qgdml0ZUNsaWVudCA9IGgoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9kdWxlJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnL0B2aXRlL2NsaWVudCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVIZWFkU2NyaXB0QXJyID0gY3VzdG9tZUhlYWRTY3JpcHQgPyAoX2EgPSAoQXJyYXkuaXNBcnJheShjdXN0b21lSGVhZFNjcmlwdCkgPyBjdXN0b21lSGVhZFNjcmlwdCA6IGN1c3RvbWVIZWFkU2NyaXB0KGN0eCkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFwKGl0ZW0gPT4gaCgnc2NyaXB0JywgT2JqZWN0LmFzc2lnbih7fSwgaXRlbS5kZXNjcmliZSwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbS5jb250ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpKSA6IFtdO1xuICAgICAgICAgICAgaWYgKGRpc2FibGVDbGllbnRSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBjdXN0b21lSGVhZFNjcmlwdEFyci5wdXNoKGgoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ3dpbmRvdy5fX2Rpc2FibGVDbGllbnRSZW5kZXJfXyA9IHRydWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXN0b21lRm9vdGVyU2NyaXB0QXJyID0gY3VzdG9tZUZvb3RlclNjcmlwdCA/IChfYiA9IChBcnJheS5pc0FycmF5KGN1c3RvbWVGb290ZXJTY3JpcHQpID8gY3VzdG9tZUZvb3RlclNjcmlwdCA6IGN1c3RvbWVGb290ZXJTY3JpcHQoY3R4KSkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tYXAoaXRlbSA9PiBoKCdzY3JpcHQnLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLmRlc2NyaWJlLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSkpIDogW107XG4gICAgICAgICAgICByZXR1cm4gaChMYXlvdXQsIHtcbiAgICAgICAgICAgICAgICBwcm9wczogeyBjdHgsIGNvbmZpZywgYXN5bmNEYXRhOiBjb21iaW5lQXlzbmNEYXRhLCBmZXRjaERhdGE6IGxheW91dEZldGNoRGF0YSB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgndGVtcGxhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6ICdyZW1Jbml0aWFsJ1xuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgaCgnc2NyaXB0Jywge30sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyIHcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAzLjc1O2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uc3R5bGVbJ2ZvbnQtc2l6ZSddID0gdyArICdweCdcIlxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIHZpdGVNb2RlICYmIGgoJ3RlbXBsYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAndml0ZUNsaWVudCdcbiAgICAgICAgICAgICAgICB9LCBbdml0ZUNsaWVudF0pLFxuICAgICAgICAgICAgICAgIGgoJ3RlbXBsYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAnY3VzdG9tZUhlYWRTY3JpcHQnXG4gICAgICAgICAgICAgICAgfSwgY3VzdG9tZUhlYWRTY3JpcHRBcnIpLFxuICAgICAgICAgICAgICAgIGgoJ3RlbXBsYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAnY3VzdG9tZUZvb3RlclNjcmlwdCdcbiAgICAgICAgICAgICAgICB9LCBjdXN0b21lRm9vdGVyU2NyaXB0QXJyKSxcbiAgICAgICAgICAgICAgICBoKCd0ZW1wbGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogJ2NoaWxkcmVuJ1xuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgaChBcHAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7IGN0eCwgY29uZmlnLCBmZXRjaERhdGE6IGNvbWJpbmVBeXNuY0RhdGEgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGgoJ3RlbXBsYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAnaW5pdGlhbERhdGEnXG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBpc0NzciA/IGgoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBgd2luZG93Ll9fVVNFX1ZJVEVfXz0ke3ZpdGVNb2RlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkgOiBoKCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogYHdpbmRvdy5fX1VTRV9TU1JfXz10cnVlOyB3aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9JHtzZXJpYWxpemUoc3RhdGUpfTt3aW5kb3cuX19VU0VfVklURV9fPSR7dml0ZU1vZGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGgoJ3RlbXBsYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAnY3NzSW5qZWN0J1xuICAgICAgICAgICAgICAgIH0sIGluamVjdENzcyksXG4gICAgICAgICAgICAgICAgaCgndGVtcGxhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6ICdqc0luamVjdCdcbiAgICAgICAgICAgICAgICB9LCBpbmplY3RTY3JpcHQpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhcHA7XG59O1xuZXhwb3J0cy5zZXJ2ZXJSZW5kZXIgPSBzZXJ2ZXJSZW5kZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM3NjM5NjYzNzIwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJicmllZi1pbmZvXCIgfSwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgICc8ZGl2IGNsYXNzPVwiYnJpZWYtdGl0bGVcIiBkYXRhLXYtMGFlMTQxYTY+PHNwYW4gY2xhc3M9XCJbXFwnaWNvbi1HT0xERU5cXCddXCIgZGF0YS12LTBhZTE0MWE2PicgK1xuICAgICAgICBfdm0uX3NzckVzY2FwZShfdm0uX3MoX3ZtLmJyaWVmRGF0YS5tYXJrLmRhdGEudGV4dCkpICtcbiAgICAgICAgXCI8L3NwYW4+IDxoMSBkYXRhLXYtMGFlMTQxYTY+XCIgK1xuICAgICAgICBfdm0uX3NzckVzY2FwZShfdm0uX3MoX3ZtLmJyaWVmRGF0YS5zaG93TmFtZSkpICtcbiAgICAgICAgJzwvaDE+PC9kaXY+IDxkaXYgY2xhc3M9XCJicmllZi1zY29yZVwiIGRhdGEtdi0wYWUxNDFhNj4nICtcbiAgICAgICAgX3ZtLl9zc3JMaXN0KF92bS5icmllZkRhdGEuc3ViVGl0bGVMaXN0LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCI8c3BhblwiICtcbiAgICAgICAgICAgIF92bS5fc3NyQ2xhc3MoXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIGl0ZW0uc3VidGl0bGVUeXBlID09PSBcIlBMQVlfVlZcIiA/IFwiaG90VnZcIiA6IFwiXCJcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgXCIgZGF0YS12LTBhZTE0MWE2PlwiICtcbiAgICAgICAgICAgIChpdGVtLnN1YnRpdGxlVHlwZSA9PT0gXCJQTEFZX1ZWXCJcbiAgICAgICAgICAgICAgPyBcIjxpbWdcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zc3JBdHRyKFwic3JjXCIsIF92bS5icmllZkRhdGEuaGVhdEljb24pICtcbiAgICAgICAgICAgICAgICBcIiBhbHQgZGF0YS12LTBhZTE0MWE2PlwiXG4gICAgICAgICAgICAgIDogXCI8IS0tLS0+XCIpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIChpbmRleCA+IDBcbiAgICAgICAgICAgICAgPyAnPHNwYW4gY2xhc3M9XCJkaXZpZGVcIiBkYXRhLXYtMGFlMTQxYTY+Lzwvc3Bhbj4nXG4gICAgICAgICAgICAgIDogXCI8IS0tLS0+XCIpICtcbiAgICAgICAgICAgIFwiIDxzcGFuIGRhdGEtdi0wYWUxNDFhNj5cIiArXG4gICAgICAgICAgICBfdm0uX3NzckVzY2FwZShfdm0uX3MoaXRlbS5zdWJ0aXRsZSkpICtcbiAgICAgICAgICAgIFwiPC9zcGFuPjwvc3Bhbj5cIlxuICAgICAgICAgIClcbiAgICAgICAgfSkgK1xuICAgICAgICBcIjwvZGl2PlwiXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImFwcFwiIH0gfSwgW19jKFwicm91dGVyLXZpZXdcIildLCAxKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaHRtbFwiLFxuICAgIFtcbiAgICAgIF92bS5fc3NyTm9kZShcbiAgICAgICAgXCI8aGVhZD5cIixcbiAgICAgICAgXCI8L2hlYWQ+XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3Nzck5vZGUoXG4gICAgICAgICAgICAnPG1ldGEgY2hhclNldD1cInV0Zi04XCI+IDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiPiA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiPiA8dGl0bGU+U2VydmVybGVzcyBTaWRlIFJlbmRlciBmb3IgVnVlPC90aXRsZT4gJ1xuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl90KFwidml0ZUNsaWVudFwiKSxcbiAgICAgICAgICBfdm0uX3Nzck5vZGUoXCIgXCIpLFxuICAgICAgICAgIF92bS5fdChcInJlbUluaXRpYWxcIiksXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJjdXN0b21lSGVhZFNjcmlwdFwiKSxcbiAgICAgICAgICBfdm0uX3Nzck5vZGUoXCIgXCIpLFxuICAgICAgICAgIF92bS5fdChcImNzc0luamVjdFwiKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fc3NyTm9kZShcIiBcIiksXG4gICAgICBfdm0uX3Nzck5vZGUoXG4gICAgICAgIFwiPGJvZHk+XCIsXG4gICAgICAgIFwiPC9ib2R5PlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiY2hpbGRyZW5cIiksXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJpbml0aWFsRGF0YVwiKSxcbiAgICAgICAgICBfdm0uX3Nzck5vZGUoXCIgXCIpLFxuICAgICAgICAgIF92bS5fdChcImN1c3RvbWVGb290ZXJTY3JpcHRcIiksXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJqc0luamVjdFwiKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX3Nzck5vZGUoXG4gICAgICBfdm0ucGxheVxuICAgICAgICA/ICc8ZGl2IGRhdGEtdi1kNWM5ODBiOD48dmlkZW8gc3JjPVwiaHR0cDovL2NsaXBzLnZvcndhZXJ0cy1nbWJoLmRlL2JpZ19idWNrX2J1bm55Lm1wNFwiIGNvbnRyb2xzPVwiY29udHJvbHNcIiBhdXRvUGxheSBjbGFzcz1cInZpZGVvXCIgZGF0YS12LWQ1Yzk4MGI4PlxcbiAgICAgIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWdcXG4gICAgPC92aWRlbz48L2Rpdj4nXG4gICAgICAgIDogJzxkaXYgY2xhc3M9XCJwbGF5ZXJDb250YWluZXJcIicgK1xuICAgICAgICAgICAgX3ZtLl9zc3JTdHlsZShcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgeyBiYWNrZ3JvdW5kOiBcInVybChcIiArIF92bS5wbGF5RGF0YS5pbWcgKyBcIikgMCAwIC9jb3ZlclwiIH0sXG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgJyBkYXRhLXYtZDVjOTgwYjg+PGRpdiBjbGFzcz1cInRpdGxlXCIgZGF0YS12LWQ1Yzk4MGI4PicgK1xuICAgICAgICAgICAgX3ZtLl9zc3JFc2NhcGUoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ucGxheURhdGEudGl0bGUpICsgXCJcXG4gICAgXCIpICtcbiAgICAgICAgICAgICc8L2Rpdj4gPGltZyBzcmM9XCJodHRwczovL2d3LmFsaWNkbi5jb20vdGZzL1RCMWVBNkZFVzYxZ0swalNaRmxYWFhES0ZYYS0xMzUtMTM1LnBuZ1wiIGNsYXNzPVwiaWNvXCIgZGF0YS12LWQ1Yzk4MGI4PiA8ZGl2IGNsYXNzPVwibGF5ZXJcIiBkYXRhLXYtZDVjOTgwYjg+PC9kaXY+PC9kaXY+J1xuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgICc8ZGl2IGNsYXNzPVwidGl0bGVcIiBkYXRhLXYtZmY1ZDVlMjI+XFxuICAgIOS4uuS9oOaOqOiNkFxcbiAgPC9kaXY+IDxkaXYgY2xhc3M9XCJyZUNvbnRhaW5lclwiIGRhdGEtdi1mZjVkNWUyMj4nICtcbiAgICAgICAgX3ZtLl9zc3JMaXN0KF92bS5kYXRhLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlQ29udGVudFwiIGRhdGEtdi1mZjVkNWUyMj48aW1nJyArXG4gICAgICAgICAgICBfdm0uX3NzckF0dHIoXCJzcmNcIiwgaXRlbS5kYXRhLmltZykgK1xuICAgICAgICAgICAgJyBkYXRhLXYtZmY1ZDVlMjI+IDxkaXYgY2xhc3M9XCJ2VGl0bGVcIiBkYXRhLXYtZmY1ZDVlMjI+JyArXG4gICAgICAgICAgICBfdm0uX3NzckVzY2FwZShcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZGF0YS50aXRsZSkgKyBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICApICtcbiAgICAgICAgICAgICc8L2Rpdj4gPGRpdiBjbGFzcz1cInN1YlRpdGxlXCIgZGF0YS12LWZmNWQ1ZTIyPicgK1xuICAgICAgICAgICAgX3ZtLl9zc3JFc2NhcGUoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArIF92bS5fcyhpdGVtLmRhdGEuc3VidGl0bGUpICsgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBcIjwvZGl2PjwvZGl2PlwiXG4gICAgICAgICAgKVxuICAgICAgICB9KSArXG4gICAgICAgIFwiPC9kaXY+XCJcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGJiQ29udGFpbmVyXCIgfSwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgIF92bS5fc3NyTGlzdChfdm0uZGF0YVswXS5pdGVtTWFwLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJwYmJJdGVtQ29udGFpbmVyXCIgZGF0YS12LTEzNzIyYzNjPjxkaXYgY2xhc3M9XCJwYmJEZXNjQ29udGFpbmVyXCIgZGF0YS12LTEzNzIyYzNjPjxkaXYgY2xhc3M9XCJkZWZhdWx0SXRlbUJnXCInICtcbiAgICAgICAgICBfdm0uX3NzclN0eWxlKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHsgYmFja2dyb3VuZDogXCJ1cmwoXCIgKyB2YWwuaW1nICsgXCIpIDAgMCAvY292ZXJcIiB9LFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICkgK1xuICAgICAgICAgICcgZGF0YS12LTEzNzIyYzNjPjwvZGl2PiA8ZGl2IGNsYXNzPVwicE5hbWUgcGJiTmFtZVwiIGRhdGEtdi0xMzcyMmMzYz4nICtcbiAgICAgICAgICBfdm0uX3NzckVzY2FwZShcIlxcbiAgICAgICAgXCIgKyBfdm0uX3ModmFsLnRpdGxlKSArIFwiXFxuICAgICAgXCIpICtcbiAgICAgICAgICAnPC9kaXY+IDxkaXYgY2xhc3M9XCJwRGVzYyBwYmJOYW1lXCIgZGF0YS12LTEzNzIyYzNjPicgK1xuICAgICAgICAgIF92bS5fc3NyRXNjYXBlKFwiXFxuICAgICAgICBcIiArIF92bS5fcyh2YWwuc3VidGl0bGUpICsgXCJcXG4gICAgICBcIikgK1xuICAgICAgICAgIFwiPC9kaXY+PC9kaXY+PC9kaXY+XCJcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoQ29udGFpbmVyXCIgfSwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivpeaQnOe0ouahhuWGheWuueS8muWcqOaJgOaciemhtemdouWFseS6q1wiJyArXG4gICAgICAgIF92bS5fc3NyQXR0cihcInZhbHVlXCIsIF92bS5zZWFyY2hUZXh0KSArXG4gICAgICAgICcgY2xhc3M9XCJpbnB1dFwiIGRhdGEtdi01ZWU5N2RhYj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE1elNvWDIxVEJ1Tmp5MEZqWFhhanlYWGEtNDgtNDgucG5nXCIgYWx0IGNsYXNzPVwic2VhcmNoSW1nXCIgZGF0YS12LTVlZTk3ZGFiPidcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzd2lwZXJDb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN3aXBlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcIm15U3dpcGVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnN3aXBlck9wdGlvbnMgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5kYXRhWzBdLml0ZW1NYXAsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInN3aXBlci1zbGlkZVwiLFxuICAgICAgICAgICAgeyBrZXk6IHZhbC5pbWcsIHN0YXRpY0NsYXNzOiBcInNsaWRlckNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbEltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogdmFsLmltZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9EZXRhaWwgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2xpZGVyRGVzY0NvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzbGlkZXJUaXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyh2YWwudGl0bGUpICsgXCJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJTZWFyY2hcIiksXG4gICAgICBfdm0uX3Nzck5vZGUoXCIgXCIpLFxuICAgICAgX3ZtLmRldGFpbERhdGFcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcIlBsYXllclwiLCB7IGF0dHJzOiB7IGRhdGE6IF92bS5kZXRhaWxEYXRhLmRhdGFbMF0uZGF0YU5vZGUgfSB9KSxcbiAgICAgICAgICAgIF92bS5fc3NyTm9kZShcIiBcIiksXG4gICAgICAgICAgICBfYyhcIkJyaWVmXCIsIHsgYXR0cnM6IHsgZGF0YTogX3ZtLmRldGFpbERhdGEuZGF0YVsxXS5kYXRhTm9kZSB9IH0pLFxuICAgICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiUmVjb21tZW5kXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLmRldGFpbERhdGEuZGF0YVsyXS5kYXRhTm9kZSB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICA6IF92bS5fc3NyTm9kZShcbiAgICAgICAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90ZnMvVEIxdi56SUU3VDJnSzBqU1pQY1hYY0trcFhhLTEyOC0xMjguZ2lmXCIgY2xhc3M9XCJsb2FkaW5nXCI+J1xuICAgICAgICAgICksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiU2VhcmNoXCIpLFxuICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgIF92bS5pbmRleERhdGFcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcIlNsaWRlclwiLCB7IGF0dHJzOiB7IGRhdGE6IF92bS5pbmRleERhdGFbMF0uY29tcG9uZW50cyB9IH0pLFxuICAgICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiUmVjdGFuZ2xlXCIsIHsgYXR0cnM6IHsgZGF0YTogX3ZtLmluZGV4RGF0YVsxXS5jb21wb25lbnRzIH0gfSksXG4gICAgICAgICAgXVxuICAgICAgICA6IF92bS5fc3NyTm9kZShcbiAgICAgICAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90ZnMvVEIxdi56SUU3VDJnSzBqU1pQY1hYY0trcFhhLTEyOC0xMjguZ2lmXCIgY2xhc3M9XCJsb2FkaW5nXCI+J1xuICAgICAgICAgICksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFlMTQxYTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhZTE0MWE2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiMGFlMTQxYTZcIixcbiAgXCIxYjUwM2Y5MFwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGFlMTQxYTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWUxNDFhNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODVjZjcxYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0MzZhYWU5ZVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODVjZjcxYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMTJjZWE2JlwiXG52YXIgc2NyaXB0ID0ge31cbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiOTc4MzhkZmNcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMTJjZWE2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDVjOTgwYjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ1Yzk4MGI4Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiZDVjOTgwYjhcIixcbiAgXCJkMzNhNDAwZVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ1Yzk4MGI4Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDVjOTgwYjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZjVkNWUyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICB2YXIgc3R5bGUwID0gcmVxdWlyZShcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmY1ZDVlMjImbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiKVxuaWYgKHN0eWxlMC5fX2luamVjdF9fKSBzdHlsZTAuX19pbmplY3RfXyhjb250ZXh0KVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCJmZjVkNWUyMlwiLFxuICBcIjZlOGM1NDdhXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViL2NvbXBvbmVudHMvcmVjb21tZW5kL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmY1ZDVlMjImbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZjVkNWUyMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNzIyYzNjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIHZhciBzdHlsZTAgPSByZXF1aXJlKFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzcyMmMzYyZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpXG5pZiAoc3R5bGUwLl9faW5qZWN0X18pIHN0eWxlMC5fX2luamVjdF9fKGNvbnRleHQpXG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcIjEzNzIyYzNjXCIsXG4gIFwiMzZmYzI1MjZcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIvY29tcG9uZW50cy9yZWN0YW5nbGUvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzcyMmMzYyZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNzIyYzNjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVlOTdkYWImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZTk3ZGFiJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiNWVlOTdkYWJcIixcbiAgXCI2MDMxMWUwMFwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZTk3ZGFiJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVlOTdkYWImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDAwYzRiOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICB2YXIgc3R5bGUwID0gcmVxdWlyZShcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTAwMGM0YjgmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiKVxuaWYgKHN0eWxlMC5fX2luamVjdF9fKSBzdHlsZTAuX19pbmplY3RfXyhjb250ZXh0KVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCI5MDAwYzRiOFwiLFxuICBcIjhkNzE4NDBlXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTAwMGM0YjgmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDAwYzRiOCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAndnVleCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcidcbmltcG9ydCB7IElTU1JNaWR3YXlDb250ZXh0IH0gZnJvbSAnc3NyLXR5cGVzJ1xuaW1wb3J0IHsgSW5kZXhEYXRhIH0gZnJvbSAnfi90eXBpbmdzL2RhdGEnXG5pbnRlcmZhY2UgQXBpRGVhdGlsc2VydmljZSB7XG4gIGluZGV4OiAoaWQ6IHN0cmluZykgPT4gUHJvbWlzZTxJbmRleERhdGE+XG59XG5cbmludGVyZmFjZSBQYXJhbXMge1xuICBzdG9yZTogU3RvcmU8YW55PlxuICByb3V0ZXI6IFJvdXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHN0b3JlLCByb3V0ZXIgfTogUGFyYW1zLCBjdHg/OiBJU1NSTWlkd2F5Q29udGV4dDx7XG4gIGFwaURlYXRpbHNlcnZpY2U/OiBBcGlEZWF0aWxzZXJ2aWNlXG59PikgPT4ge1xuICAvLyDpmIXor7vmlofmoaPojrflvpfmm7TlpJrkv6Hmga8gaHR0cDovL2RvYy5zc3ItZmMuY29tL2RvY3MvZmVhdHVyZXMkZmV0Y2gjJUU1JTg4JUE0JUU2JTk2JUFEJUU1JUJEJTkzJUU1JTg5JThEJUU3JThFJUFGJUU1JUEyJTgzXG4gIGNvbnN0IGRhdGEgPSBfX2lzQnJvd3Nlcl9fID8gYXdhaXQgKGF3YWl0IHdpbmRvdy5mZXRjaChgL2FwaS9kZXRhaWwvJHtyb3V0ZXIucGFyYW1zLmlkfWApKS5qc29uKCkgOiBhd2FpdCBjdHg/LmFwaURlYXRpbHNlcnZpY2U/LmluZGV4KGN0eC5wYXJhbXMuaWQpXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKCdkZXRhaWxTdG9yZS9pbml0aWFsRGF0YScsIHsgcGF5bG9hZDogZGF0YSB9KVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZW5kZXIkaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZDBhNjNmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlbmRlciRpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlbmRlciRpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCIyMTk5Mjc0YVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9wYWdlcy9kZXRhaWwvcmVuZGVyJGlkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVuZGVyJGlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZW5kZXIkaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlbmRlciRpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjlkMGE2M2YmXCIiLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgeyBJU1NSTWlkd2F5Q29udGV4dCB9IGZyb20gJ3Nzci10eXBlcydcbmltcG9ydCB7IEluZGV4RGF0YSB9IGZyb20gJ34vdHlwaW5ncy9kYXRhJ1xuaW50ZXJmYWNlIElBcGlTZXJ2aWNlIHtcbiAgaW5kZXg6ICgpID0+IFByb21pc2U8SW5kZXhEYXRhPlxufVxuaW50ZXJmYWNlIFBhcmFtcyB7XG4gIHN0b3JlOiBTdG9yZTxhbnk+XG4gIHJvdXRlcjogUm91dGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgc3RvcmUsIHJvdXRlciB9OiBQYXJhbXMsIGN0eD86IElTU1JNaWR3YXlDb250ZXh0PHtcbiAgYXBpU2VydmljZT86IElBcGlTZXJ2aWNlXG59PikgPT4ge1xuICAvLyDpmIXor7vmlofmoaPojrflvpfmm7TlpJrkv6Hmga8gaHR0cDovL2RvYy5zc3ItZmMuY29tL2RvY3MvZmVhdHVyZXMkZmV0Y2gjJUU1JTg4JUE0JUU2JTk2JUFEJUU1JUJEJTkzJUU1JTg5JThEJUU3JThFJUFGJUU1JUEyJTgzXG4gIGNvbnN0IGRhdGEgPSBfX2lzQnJvd3Nlcl9fID8gYXdhaXQgKGF3YWl0IHdpbmRvdy5mZXRjaCgnL2FwaS9pbmRleCcpKS5qc29uKCkgOiBhd2FpdCBjdHg/LmFwaVNlcnZpY2U/LmluZGV4KClcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goJ2luZGV4U3RvcmUvaW5pdGlhbERhdGEnLCB7IHBheWxvYWQ6IGRhdGEgfSlcbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzgxYzlmMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiMWVlZmQ5OTJcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWM5ZjImXCIiLCJpbXBvcnQgeyBpbmRleFN0b3JlIH0gZnJvbSAnLi9tb2R1bGVzL2luZGV4J1xuaW1wb3J0IHsgZGV0YWlsU3RvcmUgfSBmcm9tICcuL21vZHVsZXMvZGV0YWlsJ1xuaW1wb3J0IHsgc2VhcmNoU3RvcmUgfSBmcm9tICcuL21vZHVsZXMvc2VhcmNoJ1xuXG5jb25zdCBtb2R1bGVzID0ge1xuICBpbmRleFN0b3JlLFxuICBkZXRhaWxTdG9yZSxcbiAgc2VhcmNoU3RvcmVcbn1cbmV4cG9ydCB7XG4gIG1vZHVsZXNcbn1cbiIsImNvbnN0IGRldGFpbFN0b3JlID0ge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGRhdGE6IHt9XG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHNldERhdGEgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICBzdGF0ZS5kYXRhID0gcGF5bG9hZFxuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGluaXRpYWxEYXRhICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXREYXRhJywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZGV0YWlsU3RvcmVcbn1cbiIsImNvbnN0IGluZGV4U3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgZGF0YToge31cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0RGF0YSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBwYXlsb2FkLmRhdGFcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBpbml0aWFsRGF0YSAoeyBjb21taXQgfSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIGNvbW1pdCgnc2V0RGF0YScsIHBheWxvYWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGluZGV4U3RvcmVcbn1cbiIsImNvbnN0IHNlYXJjaFN0b3JlID0ge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIHNlYXJjaFRleHQ6ICcnXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHNldFRleHQgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICBzdGF0ZS5zZWFyY2hUZXh0ID0gcGF5bG9hZC50ZXh0XG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgc2V0VGV4dCAoeyBjb21taXQgfSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIGNvbW1pdCgnc2V0VGV4dCcsIHBheWxvYWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHNlYXJjaFN0b3JlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3NyLXNlcnZlci11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLWF3ZXNvbWUtc3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVleFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWV4LXJvdXRlci1zeW5jXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=