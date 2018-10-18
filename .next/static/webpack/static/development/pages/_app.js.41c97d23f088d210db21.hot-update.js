webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _class, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }



var Store = (_class =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "products", _descriptor, this);

    _initializerDefineProperty(this, "cart", _descriptor2, this);
  }

  _createClass(Store, [{
    key: "emptyCart",
    value: function emptyCart() {
      this.cart = [];
    }
  }, {
    key: "persistCart",
    value: function persistCart(cart) {
      this.cart = cart;
    }
  }, {
    key: "setProducts",
    value: function setProducts(array) {
      this.products = array || [];
    }
  }, {
    key: "findIndex",
    value: function findIndex(item) {
      var index = this.cart.findIndex(function (el) {
        return el.id === item.id;
      });
      return index;
    }
  }, {
    key: "updateProduct",
    value: function updateProduct(item, quantity) {
      // find index of item in shopping cart
      var index = this.findIndex(item); // remove it and replace with the updated obj

      this.cart.splice(index, 1, {
        id: item.id,
        quantity: quantity
      });
    }
  }, {
    key: "isItemInCart",
    value: function isItemInCart(id) {
      var update = this.cart.filter(function (item) {
        return item.id === id;
      });
      return update;
    }
  }, {
    key: "addToCart",
    value: function addToCart(item, quantity) {
      this.cart.push({
        id: item.id,
        quantity: quantity
      });
      console.log('Added', this.cart);
    }
  }, {
    key: "prepareCart",
    value: function prepareCart(item, quantity) {
      var update = this.isItemInCart(item.id);
      console.log('Update is', update);

      if (!update.length) {
        this.addToCart(item, quantity);
      } else {
        this.updateProduct(item, quantity);
      }
    }
  }, {
    key: "allProducts",
    get: function get() {
      return this.products;
    }
  }, {
    key: "productsInCart",
    get: function get() {
      return this.cart;
    }
  }, {
    key: "cartAmount",
    get: function get() {
      var amount;

      if (!this.cart.length) {
        amount = 0;
      } else {
        amount = this.cart.map(function (item) {
          return item.quantity;
        }).reduce(function (prev, curr) {
          return prev + curr;
        });
      }

      return amount;
    }
  }]);

  return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "products", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "cart", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "allProducts", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "allProducts"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "productsInCart", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "productsInCart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cartAmount", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "cartAmount"), _class.prototype)), _class); // log mobx errors

Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (error) {
  console.log(error);
}); // export singleton store

var store = new Store();

/***/ })

})
//# sourceMappingURL=_app.js.41c97d23f088d210db21.hot-update.js.map