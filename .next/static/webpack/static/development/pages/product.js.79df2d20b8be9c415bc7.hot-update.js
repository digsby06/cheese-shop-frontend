webpackHotUpdate("static/development/pages/product.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var BASE_URL = "http://union-cheese.herokuapp.com/api/cheeses";

var ServerAPI =
/*#__PURE__*/
function () {
  function ServerAPI() {
    _classCallCheck(this, ServerAPI);

    this.client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    });
  }

  _createClass(ServerAPI, [{
    key: "queryProducts",
    value: function queryProducts() {
      var url = BASE_URL;
      return this.client.get(url).then(function (resp) {
        return resp.data.data;
      });
    }
  }, {
    key: "getProduct",
    value: function getProduct(id) {
      var url = "".concat(BASE_URL, "/").concat(id);
      return this.client.get(url).then(function (resp) {
        return resp.data;
      });
    }
  }]);

  return ServerAPI;
}(); // export singleton API


var api = new ServerAPI();
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ })

})
//# sourceMappingURL=product.js.79df2d20b8be9c415bc7.hot-update.js.map