(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["generator"] = factory();
	else
		root["generator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getNumbers(fn, count) {
	  var times = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	  var point = arguments.length <= 3 || arguments[3] === undefined ? 4 : arguments[3];
	
	  var numbers = [];
	  for (var i = 0; i <= count; i += 1) {
	    var number = _index2.default[fn](i / count).toFixed(point) * times;
	    numbers.push(number);
	  }
	  return numbers;
	}
	
	module.exports = getNumbers;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _back = __webpack_require__(2);
	
	var _bounce = __webpack_require__(3);
	
	var _circle = __webpack_require__(4);
	
	var _cubic = __webpack_require__(5);
	
	var _elastic = __webpack_require__(6);
	
	var _exp = __webpack_require__(7);
	
	var _linear = __webpack_require__(8);
	
	var _poly = __webpack_require__(9);
	
	var _quad = __webpack_require__(10);
	
	var _sin = __webpack_require__(11);
	
	var eases = {
	  backIn: _back.backIn, backOut: _back.backOut, backInOut: _back.backInOut,
	  bounceIn: _bounce.bounceIn, bounceOut: _bounce.bounceOut, bounceInOut: _bounce.bounceInOut,
	  circleIn: _circle.circleIn, circleOut: _circle.circleOut, circleInOut: _circle.circleInOut,
	  cubicIn: _cubic.cubicIn, cubicOut: _cubic.cubicOut, cubicInOut: _cubic.cubicInOut,
	  elasticIn: _elastic.elasticIn, elasticOut: _elastic.elasticOut, elasticInOut: _elastic.elasticInOut,
	  expIn: _exp.expIn, expOut: _exp.expOut, expInOut: _exp.expInOut,
	  linear: _linear.linear,
	  polyIn: _poly.polyIn, polyOut: _poly.polyOut, polyInOut: _poly.polyInOut,
	  quadIn: _quad.quadIn, quadOut: _quad.quadOut, quadInOut: _quad.quadInOut,
	  sinIn: _sin.sinIn, sinOut: _sin.sinOut, sinInOut: _sin.sinInOut
	};
	
	exports.default = eases;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var overshoot = 1.70158;
	
	var backIn = exports.backIn = function custom(s) {
	  s = +s;
	
	  function backIn(t) {
	    return t * t * ((s + 1) * t - s);
	  }
	
	  backIn.overshoot = custom;
	
	  return backIn;
	}(overshoot);
	
	var backOut = exports.backOut = function custom(s) {
	  s = +s;
	
	  function backOut(t) {
	    return --t * t * ((s + 1) * t + s) + 1;
	  }
	
	  backOut.overshoot = custom;
	
	  return backOut;
	}(overshoot);
	
	var backInOut = exports.backInOut = function custom(s) {
	  s = +s;
	
	  function backInOut(t) {
	    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	  }
	
	  backInOut.overshoot = custom;
	
	  return backInOut;
	}(overshoot);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bounceIn = bounceIn;
	exports.bounceOut = bounceOut;
	exports.bounceInOut = bounceInOut;
	var b1 = 4 / 11,
	    b2 = 6 / 11,
	    b3 = 8 / 11,
	    b4 = 3 / 4,
	    b5 = 9 / 11,
	    b6 = 10 / 11,
	    b7 = 15 / 16,
	    b8 = 21 / 22,
	    b9 = 63 / 64,
	    b0 = 1 / b1 / b1;
	
	function bounceIn(t) {
	  return 1 - bounceOut(1 - t);
	}
	
	function bounceOut(t) {
	  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
	}
	
	function bounceInOut(t) {
	  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.circleIn = circleIn;
	exports.circleOut = circleOut;
	exports.circleInOut = circleInOut;
	function circleIn(t) {
	  return 1 - Math.sqrt(1 - t * t);
	}
	
	function circleOut(t) {
	  return Math.sqrt(1 - --t * t);
	}
	
	function circleInOut(t) {
	  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cubicIn = cubicIn;
	exports.cubicOut = cubicOut;
	exports.cubicInOut = cubicInOut;
	function cubicIn(t) {
	  return t * t * t;
	}
	
	function cubicOut(t) {
	  return --t * t * t + 1;
	}
	
	function cubicInOut(t) {
	  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tau = 2 * Math.PI,
	    amplitude = 1,
	    period = 0.3;
	
	var elasticIn = exports.elasticIn = function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticIn(t) {
	    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
	  }
	
	  elasticIn.amplitude = function (a) {
	    return custom(a, p * tau);
	  };
	  elasticIn.period = function (p) {
	    return custom(a, p);
	  };
	
	  return elasticIn;
	}(amplitude, period);
	
	var elasticOut = exports.elasticOut = function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticOut(t) {
	    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
	  }
	
	  elasticOut.amplitude = function (a) {
	    return custom(a, p * tau);
	  };
	  elasticOut.period = function (p) {
	    return custom(a, p);
	  };
	
	  return elasticOut;
	}(amplitude, period);
	
	var elasticInOut = exports.elasticInOut = function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticInOut(t) {
	    return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
	  }
	
	  elasticInOut.amplitude = function (a) {
	    return custom(a, p * tau);
	  };
	  elasticInOut.period = function (p) {
	    return custom(a, p);
	  };
	
	  return elasticInOut;
	}(amplitude, period);

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.expIn = expIn;
	exports.expOut = expOut;
	exports.expInOut = expInOut;
	function expIn(t) {
	  return Math.pow(2, 10 * t - 10);
	}
	
	function expOut(t) {
	  return 1 - Math.pow(2, -10 * t);
	}
	
	function expInOut(t) {
	  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linear = linear;
	function linear(t) {
	  return +t;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var exponent = 3;
	
	var polyIn = exports.polyIn = function custom(e) {
	  e = +e;
	
	  function polyIn(t) {
	    return Math.pow(t, e);
	  }
	
	  polyIn.exponent = custom;
	
	  return polyIn;
	}(exponent);
	
	var polyOut = exports.polyOut = function custom(e) {
	  e = +e;
	
	  function polyOut(t) {
	    return 1 - Math.pow(1 - t, e);
	  }
	
	  polyOut.exponent = custom;
	
	  return polyOut;
	}(exponent);
	
	var polyInOut = exports.polyInOut = function custom(e) {
	  e = +e;
	
	  function polyInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	  }
	
	  polyInOut.exponent = custom;
	
	  return polyInOut;
	}(exponent);

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.quadIn = quadIn;
	exports.quadOut = quadOut;
	exports.quadInOut = quadInOut;
	function quadIn(t) {
	  return t * t;
	}
	
	function quadOut(t) {
	  return t * (2 - t);
	}
	
	function quadInOut(t) {
	  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sinIn = sinIn;
	exports.sinOut = sinOut;
	exports.sinInOut = sinInOut;
	var pi = Math.PI,
	    halfPi = pi / 2;
	
	function sinIn(t) {
	  return 1 - Math.cos(t * halfPi);
	}
	
	function sinOut(t) {
	  return Math.sin(t * halfPi);
	}
	
	function sinInOut(t) {
	  return (1 - Math.cos(pi * t)) / 2;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ease-generator.js.map