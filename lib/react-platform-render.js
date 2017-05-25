(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("platform"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["platform", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("platform"), require("react")) : factory(root["platform"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Edge = exports.Opera = exports.Firefox = exports.Safari = exports.Chrome = exports.Ie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _platform = __webpack_require__(0);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerClassName = 'platform-render-container';

var PlatformRender = function (_Component) {
  _inherits(PlatformRender, _Component);

  function PlatformRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlatformRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlatformRender.__proto__ || Object.getPrototypeOf(PlatformRender)).call.apply(_ref, [this].concat(args))), _this), _this.PropTypes = {
      platform: _react.PropTypes.string.isRequired
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlatformRender, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: containerClassName },
        this.props.platform === _platform2.default.name ? this.props.nest || this.props.children || '' : ''
      );
    }
  }]);

  return PlatformRender;
}(_react.Component);

exports.default = PlatformRender;

var Ie = exports.Ie = function (_Component2) {
  _inherits(Ie, _Component2);

  function Ie() {
    _classCallCheck(this, Ie);

    return _possibleConstructorReturn(this, (Ie.__proto__ || Object.getPrototypeOf(Ie)).apply(this, arguments));
  }

  _createClass(Ie, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(PlatformRender, { platform: 'IE', nest: this.props.children });
    }
  }]);

  return Ie;
}(_react.Component);

var Chrome = exports.Chrome = function (_Component3) {
  _inherits(Chrome, _Component3);

  function Chrome() {
    _classCallCheck(this, Chrome);

    return _possibleConstructorReturn(this, (Chrome.__proto__ || Object.getPrototypeOf(Chrome)).apply(this, arguments));
  }

  _createClass(Chrome, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(PlatformRender, { platform: 'Chrome', nest: this.props.children });
    }
  }]);

  return Chrome;
}(_react.Component);

var Safari = exports.Safari = function (_Component4) {
  _inherits(Safari, _Component4);

  function Safari() {
    _classCallCheck(this, Safari);

    return _possibleConstructorReturn(this, (Safari.__proto__ || Object.getPrototypeOf(Safari)).apply(this, arguments));
  }

  _createClass(Safari, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(PlatformRender, { platform: 'Safari', nest: this.props.children });
    }
  }]);

  return Safari;
}(_react.Component);

var Firefox = exports.Firefox = function (_Component5) {
  _inherits(Firefox, _Component5);

  function Firefox() {
    _classCallCheck(this, Firefox);

    return _possibleConstructorReturn(this, (Firefox.__proto__ || Object.getPrototypeOf(Firefox)).apply(this, arguments));
  }

  _createClass(Firefox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(PlatformRender, { platform: 'Firefox', nest: this.props.children });
    }
  }]);

  return Firefox;
}(_react.Component);

var Opera = exports.Opera = function (_Component6) {
  _inherits(Opera, _Component6);

  function Opera() {
    _classCallCheck(this, Opera);

    return _possibleConstructorReturn(this, (Opera.__proto__ || Object.getPrototypeOf(Opera)).apply(this, arguments));
  }

  _createClass(Opera, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(PlatformRender, { platform: 'Opera', nest: this.props.children });
    }
  }]);

  return Opera;
}(_react.Component);

var Edge = exports.Edge = function (_Component7) {
  _inherits(Edge, _Component7);

  function Edge() {
    _classCallCheck(this, Edge);

    return _possibleConstructorReturn(this, (Edge.__proto__ || Object.getPrototypeOf(Edge)).apply(this, arguments));
  }

  _createClass(Edge, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(PlatformRender, { platform: 'Microsoft Edge', nest: this.props.children });
    }
  }]);

  return Edge;
}(_react.Component);

/***/ })
/******/ ]);
});