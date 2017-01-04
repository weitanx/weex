(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK 0.19.3, Build 2016-12-30 17:14.');
(this.getJSFMVersion = function(){return "0.19.3"});var global = this, process = { env: {} };var setTimeout = global.setTimeout;

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

var subversion = {"browser":"0.5.0","framework":"0.19.3","transformer":">=0.1.5 <0.5"};

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
  return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library`
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has$1          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has$1(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has$1(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
  f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
  f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

// fix Promise Problem on JSContext of iOS7~8
// @see https://bugs.webkit.org/show_bug.cgi?id=135866
var ref = commonjsGlobal;
var WXEnvironment$1 = ref.WXEnvironment;

/* istanbul ignore next */
if (WXEnvironment$1 && WXEnvironment$1.platform === 'iOS') {
  commonjsGlobal.Promise = undefined;
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$3 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$3(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$4         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$4(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$2            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$2(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$2            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run$1 = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run$1.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$2) == 'process'){
    defer = function(id){
      process$2.nextTick(ctx$2(run$1, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run$1.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run$1, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$3   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$3) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$3.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$3.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process$1            = global$4.process;
var $Promise           = global$4[PROMISE];
var process$1            = global$4.process;
var isNode             = classof$1(process$1) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify$1 = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process$1.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process$1.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify$1(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify$1(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify$1(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

/**
 * @fileOverview
 * This file will hack `console` methods by `WXEnvironment.logLevel`.
 * So we can control how many and which messages will be sent by change the log level.
 * Additionally in native platform the message content must be primitive values and
 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
 * global add a format process for its methods.
 */

var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
var levelMap = {};

var originalConsole = global.console;

/**
 * Hack console for native environment.
 */
function setNativeConsole () {
  generateLevelMap();

  /* istanbul ignore next */
  if (
    typeof global.console === 'undefined' || // Android
    (global.WXEnvironment && global.WXEnvironment.platform === 'iOS') // iOS
  ) {
    global.console = {
      debug: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('debug')) { global.nativeLog.apply(global, format(args).concat( ['__DEBUG'] )); }
      },
      log: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('log')) { global.nativeLog.apply(global, format(args).concat( ['__LOG'] )); }
      },
      info: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('info')) { global.nativeLog.apply(global, format(args).concat( ['__INFO'] )); }
      },
      warn: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('warn')) { global.nativeLog.apply(global, format(args).concat( ['__WARN'] )); }
      },
      error: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (checkLevel('error')) { global.nativeLog.apply(global, format(args).concat( ['__ERROR'] )); }
      }
    };
  }
  else { // HTML5 or Node
    var debug = console.debug;
    var log = console.log;
    var info = console.info;
    var warn = console.warn;
    var error = console.error;
    console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
    console.debug = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('debug')) { console.__ori__.debug.apply(console, args); }
    };
    console.log = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('log')) { console.__ori__.log.apply(console, args); }
    };
    console.info = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('info')) { console.__ori__.info.apply(console, args); }
    };
    console.warn = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('warn')) { console.__ori__.warn.apply(console, args); }
    };
    console.error = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (checkLevel('error')) { console.__ori__.error.apply(console, args); }
    };
  }
}

/**
 * Reset hacked console to original.
 */
/* istanbul ignore next */
function resetNativeConsole () {
  levelMap = {};
  global.console = originalConsole;
}

/**
 * Generate map for which types of message will be sent in a certain message level
 * as the order of LEVELS.
 */
function generateLevelMap () {
  LEVELS.forEach(function (level) {
    var levelIndex = LEVELS.indexOf(level);
    levelMap[level] = {};
    LEVELS.forEach(function (type) {
      var typeIndex = LEVELS.indexOf(type);
      if (typeIndex <= levelIndex) {
        levelMap[level][type] = true;
      }
    });
  });
}

/**
 * Check if a certain type of message will be sent in current log level of env.
 * @param  {string} type
 * @return {boolean}
 */
function checkLevel (type) {
  var logLevel = (global.WXEnvironment && global.WXEnvironment.logLevel) || 'log';
  return levelMap[logLevel] && levelMap[logLevel][type]
}

/**
 * Convert all log arguments into primitive values.
 * @param  {array} args
 * @return {array}
 */
/* istanbul ignore next */
function format (args) {
  return args.map(function (v) {
    var type = Object.prototype.toString.call(v);
    if (type.toLowerCase() === '[object object]') {
      v = JSON.stringify(v);
    }
    else {
      v = String(v);
    }
    return v
  })
}

/**
 * @fileOverview
 * Polyfill `setTimeout` on Android V8 using native method
 * `setTimeoutNative(callbackId, time)` and JS method
 * `setTimeoutCallback(callbackId)`.
 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
 * `html5/default/app/ctrl.js`).
 */

var originalSetTimeout = global.setTimeout;
var setTimeoutNative = global.setTimeoutNative;

/**
 * Set up native timer
 */
/* istanbul ignore next */
function setNativeTimer () {
  if (typeof setTimeout === 'undefined' &&
  typeof setTimeoutNative === 'function') {
    var timeoutMap = {};
    var timeoutId = 0;

    global.setTimeout = function (cb, time) {
      timeoutMap[++timeoutId] = cb;
      setTimeoutNative(timeoutId.toString(), time);
    };

    global.setTimeoutCallback = function (id) {
      if (typeof timeoutMap[id] === 'function') {
        timeoutMap[id]();
        delete timeoutMap[id];
      }
    };
  }
}

/* istanbul ignore next */
function resetNativeTimer () {
  global.setTimeout = originalSetTimeout;
  global.setTimeoutCallback = null;
}

/**
 * Freeze the prototype of javascript build-in objects.
 */
/* istanbul ignore next */
function freezePrototype$1 () {
  Object.freeze(Object);
  Object.freeze(Array);

  Object.freeze(Object.prototype);
  Object.freeze(Array.prototype);
  Object.freeze(String.prototype);
  Object.freeze(Number.prototype);
  Object.freeze(Boolean.prototype);

  Object.freeze(Error.prototype);
  Object.freeze(Date.prototype);
  Object.freeze(RegExp.prototype);
}

// import promise hack and polyfills

var fallback = function () {};

var TaskCenter = function TaskCenter (id, sendTasks) {
  this.instanceId = id;
  fallback = sendTasks || function () {};
};

TaskCenter.prototype.send = function send (type, options, args) {
  var action = options.action;
    var component = options.component;
    var ref = options.ref;
    var module = options.module;
    var method = options.method;

  switch (type) {
    case 'dom':
      return this[action](this.instanceId, args)
    case 'component':
      return this.componentHandler(this.instanceId, ref, method, args, { component: component })
    case 'module':
      return this.moduleHandler(this.instanceId, module, method, args, {})
  }
};

function init$2 () {
  var DOM_METHODS = {
    createFinish: global.callCreateFinish,
    updateFinish: global.callUpdateFinish,
    refreshFinish: global.callRefreshFinish,

    createBody: global.callCreateBody,

    addElement: global.callAddElement,
    removeElement: global.callRemoveElement,
    moveElement: global.callMoveElement,
    updateAttrs: global.callUpdateAttrs,
    updateStyle: global.callUpdateStyle,

    addEvent: global.callAddEvent,
    removeEvent: global.callRemoveEvent
  };
  var proto = TaskCenter.prototype;

  var loop = function ( name ) {
    var method = DOM_METHODS[name];
    proto[name] = method ?
      function (id, args) { return method.apply(void 0, [ id ].concat( args )); } :
      function (id, args) { return fallback(id, [{ module: 'dom', method: name, args: args }], '-1'); };
  };

  for (var name in DOM_METHODS) loop( name );

  proto.componentHandler = global.callNativeComponent ||
    (function (id, ref, method, args, options) { return fallback(id, [{ component: options.component, ref: ref, method: method, args: args }]); });

  proto.moduleHandler = global.callNativeModule ||
    (function (id, module, method, args) { return fallback(id, [{ module: module, method: method, args: args }]); });
}

var docMap = {};

/**
 * Add a document object into docMap.
 * @param {string} id
 * @param {object} document
 */
function addDoc (id, doc) {
  if (id) {
    docMap[id] = doc;
  }
}

/**
 * Get the document object by id.
 * @param {string} id
 */
function getDoc (id) {
  return docMap[id]
}

/**
 * Remove the document from docMap by id.
 * @param {string} id
 */
function removeDoc (id) {
  delete docMap[id];
}

/**
 * @deprecated
 * Get listener by document id.
 * @param {string} id
 * @return {object} listener
 */


/**
 * Get TaskCenter instance by id.
 * @param {string} id
 * @return {object} TaskCenter
 */
function getTaskCenter (id) {
  var doc = docMap[id];
  if (doc && doc.taskCenter) {
    return doc.taskCenter
  }
  return null
}

/**
 * Get a unique id.
 */
var nextNodeRef = 1;
function uniqueId () {
  return (nextNodeRef++).toString()
}

/**
 * Append body node to documentElement.
 * @param {object} document
 * @param {object} node
 * @param {object} before
 */
function appendBody (doc, node, before) {
  var documentElement = doc.documentElement;

  if (documentElement.pureChildren.length > 0 || node.parentNode) {
    return
  }
  var children = documentElement.children;
  var beforeIndex = children.indexOf(before);
  if (beforeIndex < 0) {
    children.push(node);
  }
  else {
    children.splice(beforeIndex, 0, node);
  }

  if (node.nodeType === 1) {
    if (node.role === 'body') {
      node.docId = doc.id;
      node.ownerDocument = doc;
      node.parentNode = documentElement;
      linkParent(node, documentElement);
    }
    else {
      node.children.forEach(function (child) {
        child.parentNode = node;
      });
      setBody(doc, node);
      node.docId = doc.id;
      node.ownerDocument = doc;
      linkParent(node, documentElement);
      delete doc.nodeMap[node.nodeId];
    }
    documentElement.pureChildren.push(node);
    sendBody(doc, node);
  }
  else {
    node.parentNode = documentElement;
    doc.nodeMap[node.ref] = node;
  }
}

function sendBody (doc, node) {
  var body = node.toJSON();
  var children = body.children;
  delete body.children;
  var result = doc.taskCenter.send('dom', { action: 'createBody' }, [body]);
  if (children) {
    children.forEach(function (child) {
      result = doc.taskCenter.send('dom', { action: 'addElement' }, [body.ref, child, -1]);
    });
  }
  return result
}

/**
 * Set up body node.
 * @param {object} document
 * @param {object} element
 */
function setBody (doc, el) {
  el.role = 'body';
  el.depth = 1;
  delete doc.nodeMap[el.nodeId];
  el.ref = '_root';
  doc.nodeMap._root = el;
  doc.body = el;
}

/**
 * Establish the connection between parent and child node.
 * @param {object} child node
 * @param {object} parent node
 */
function linkParent (node, parent) {
  node.parentNode = parent;
  if (parent.docId) {
    node.docId = parent.docId;
    node.ownerDocument = parent.ownerDocument;
    node.ownerDocument.nodeMap[node.nodeId] = node;
    node.depth = parent.depth + 1;
  }
  node.children.forEach(function (child) {
    linkParent(child, node);
  });
}

/**
 * Get the next sibling element.
 * @param {object} node
 */
function nextElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.nextSibling;
  }
}

/**
 * Get the previous sibling element.
 * @param {object} node
 */
function previousElement (node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.previousSibling;
  }
}

/**
 * Insert a node into list at the specified index.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function insertIndex (target, list, newIndex, changeSibling) {
  /* istanbul ignore next */
  if (newIndex < 0) {
    newIndex = 0;
  }
  var before = list[newIndex - 1];
  var after = list[newIndex];
  list.splice(newIndex, 0, target);
  if (changeSibling) {
    before && (before.nextSibling = target);
    target.previousSibling = before;
    target.nextSibling = after;
    after && (after.previousSibling = target);
  }
  return newIndex
}

/**
 * Move the node to a new index in list.
 * @param {object} target node
 * @param {array} list
 * @param {number} newIndex
 * @param {boolean} changeSibling
 * @return {number} newIndex
 */
function moveIndex (target, list, newIndex, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return -1
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
  var newIndexAfter = newIndex;
  if (index <= newIndex) {
    newIndexAfter = newIndex - 1;
  }
  var beforeNew = list[newIndexAfter - 1];
  var afterNew = list[newIndexAfter];
  list.splice(newIndexAfter, 0, target);
  if (changeSibling) {
    beforeNew && (beforeNew.nextSibling = target);
    target.previousSibling = beforeNew;
    target.nextSibling = afterNew;
    afterNew && (afterNew.previousSibling = target);
  }
  if (index === newIndexAfter) {
    return -1
  }
  return newIndex
}

/**
 * Remove the node from list.
 * @param {object} target node
 * @param {array} list
 * @param {boolean} changeSibling
 */
function removeIndex (target, list, changeSibling) {
  var index = list.indexOf(target);
  /* istanbul ignore next */
  if (index < 0) {
    return
  }
  if (changeSibling) {
    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);
  }
  list.splice(index, 1);
}

var Element;

function setElement (El) {
  Element = El;
}

/**
 * A map which stores all type of elements.
 * @type {Object}
 */
var elementTypes = {};

/**
 * Register an extended element type with component methods.
 * @param  {string} type    component type
 * @param  {array}  methods a list of method names
 */
function registerElement (type, methods) {
  // Skip when no special component methods.
  if (!methods || !methods.length) {
    return
  }

  // Init constructor.
  var XElement = function (props) {
    Element.call(this, type, props, true);
  };

  // Init prototype.
  XElement.prototype = Object.create(Element.prototype);
  Object.defineProperty(XElement.prototype, 'constructor', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: Element
  });

  // Add methods to prototype.
  methods.forEach(function (methodName) {
    XElement.prototype[methodName] = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        return taskCenter.send('component', { ref: this.ref, component: type, method: methodName }, args)
      }
    };
  });

  // Add to element type map.
  elementTypes[type] = XElement;
}

/**
 * Clear all element types. Only for testing.
 */

// JS Services

var services = [];

/**
 * Register a JavaScript service.
 * A JavaScript service options could have a set of lifecycle methods
 * for each Weex instance. For example: create, refresh, destroy.
 * For the JS framework maintainer if you want to supply some features
 * which need to work well in different Weex instances, even in different
 * frameworks separately. You can make a JavaScript service to init
 * its variables or classes for each Weex instance when it's created
 * and recycle them when it's destroyed.
 * @param {object} options Could have { create, refresh, destroy }
 *                         lifecycle methods. In create method it should
 *                         return an object of what variables or classes
 *                         would be injected into the Weex instance.
 */
function register$1 (name, options) {
  if (has$5(name)) {
    console.warn(("Service \"" + name + "\" has been registered already!"));
  }
  else {
    options = Object.assign({}, options);
    services.push({ name: name, options: options });
  }
}

/**
 * Unregister a JavaScript service by name
 * @param {string} name
 */
function unregister (name) {
  services.some(function (service, index) {
    if (service.name === name) {
      services.splice(index, 1);
      return true
    }
  });
}

/**
 * Check if a JavaScript service with a certain name existed.
 * @param  {string}  name
 * @return {Boolean}
 */
function has$5 (name) {
  return indexOf(name) >= 0
}

/**
 * Find the index of a JavaScript service by name
 * @param  {string} name
 * @return {number}
 */
function indexOf (name) {
  return services.map(function (service) { return service.name; }).indexOf(name)
}

var frameworks;
var runtimeConfig;

var versionRegExp = /^\s*\/\/ *(\{[^}]*\}) *\r?\n/;

/**
 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
 * Bundle should make sure that it starts with a line of JSON comment and is
 * more that one line.
 * @param  {string} code
 * @return {object}
 */
function checkVersion (code) {
  var info;
  var result = versionRegExp.exec(code);
  if (result) {
    try {
      info = JSON.parse(result[1]);
    }
    catch (e) {}
  }
  return info
}

function createServices (id, env, config) {
  // Init JavaScript services for this instance.
  var serviceMap = Object.create(null);
  serviceMap.service = Object.create(null);
  services.forEach(function (ref) {
    var name = ref.name;
    var options = ref.options;

    {
      console.debug(("[JS Runtime] create service " + name + "."));
    }
    var create = options.create;
    if (create) {
      var result = create(id, env, config);
      Object.assign(serviceMap.service, result);
      Object.assign(serviceMap, result.instance);
    }
  });
  delete serviceMap.service.instance;
  Object.freeze(serviceMap.service);
  return serviceMap
}

var instanceMap = {};

/**
 * Check which framework a certain JS Bundle code based to. And create instance
 * by this framework.
 * @param {string} id
 * @param {string} code
 * @param {object} config
 * @param {object} data
 */
function createInstance (id, code, config, data) {
  var info = instanceMap[id];

  if (!info) {
    // Init instance info.
    info = checkVersion(code) || {};
    if (!frameworks[info.framework]) {
      info.framework = 'Weex';
    }

    // Init instance config.
    config = JSON.parse(JSON.stringify(config || {}));
    config.bundleVersion = info.version;
    config.env = JSON.parse(JSON.stringify(global.WXEnvironment || {}));
    console.debug(("[JS Framework] create an " + (info.framework) + "@" + (config.bundleVersion) + " instance from " + (config.bundleVersion)));

    // Init callback manager
    var callbacks = new runtimeConfig.CallbackManager(id);

    var env = {
      info: info,
      config: config,
      callbacks: callbacks,
      created: Date.now(),
      framework: info.framework
    };
    env.services = createServices(id, env, runtimeConfig);
    instanceMap[id] = env;

    return frameworks[info.framework].createInstance(id, code, config, data, env)
  }
  return new Error(("invalid instance id \"" + id + "\""))
}

var methods = {
  createInstance: createInstance,
  registerService: register$1,
  unregisterService: unregister
};

/**
 * Register methods which init each frameworks.
 * @param {string} methodName
 */
function genInit (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (methodName === 'registerComponents') {
      checkComponentMethods(args[0]);
    }
    for (var name in frameworks) {
      var framework = frameworks[name];
      if (framework && framework[methodName]) {
        framework[methodName].apply(framework, args);
      }
    }
  };
}

function checkComponentMethods (components) {
  if (Array.isArray(components)) {
    components.forEach(function (name) {
      if (name && name.type && name.methods) {
        registerElement(name.type, name.methods);
      }
    });
  }
}

/**
 * Register methods which will be called for each instance.
 * @param {string} methodName
 */
function genInstance (methodName) {
  methods[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var id = args[0];
    var info = instanceMap[id];
    if (info && frameworks[info.framework]) {
      var result = (ref = frameworks[info.framework])[methodName].apply(ref, args);

      // Lifecycle methods
      if (methodName === 'refreshInstance') {
        services.forEach(function (service) {
          var refresh = service.options.refresh;
          if (refresh) {
            refresh(id, { info: info, runtime: runtimeConfig });
          }
        });
      }
      else if (methodName === 'destroyInstance') {
        services.forEach(function (service) {
          var destroy = service.options.destroy;
          if (destroy) {
            destroy(id, { info: info, runtime: runtimeConfig });
          }
        });
        delete instanceMap[id];
      }

      return result
    }
    return new Error(("invalid instance id \"" + id + "\""))
    var ref;
  };
}

/**
 * Adapt some legacy method(s) which will be called for each instance. These
 * methods should be deprecated and removed later.
 * @param {string} methodName
 * @param {string} nativeMethodName
 */
function adaptInstance (methodName, nativeMethodName) {
  methods[nativeMethodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var id = args[0];
    var info = instanceMap[id];
    if (info && frameworks[info.framework]) {
      return (ref = frameworks[info.framework])[methodName].apply(ref, args)
    }
    return new Error(("invalid instance id \"" + id + "\""))
    var ref;
  };
}

function init$1 (config) {
  runtimeConfig = config || {};
  frameworks = runtimeConfig.frameworks || {};
  init$2();

  // Init each framework by `init` method and `config` which contains three
  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
  // `sendTasks(...args)`.
  for (var name in frameworks) {
    var framework = frameworks[name];
    framework.init(config);
  }

  // @todo: The method `registerMethods` will be re-designed or removed later.
   ['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit)

  ; ['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);

  adaptInstance('receiveTasks', 'callJS');

  return methods
}

/**
 * @fileOverview
 * Virtual-DOM Node. It's the supper class of Element and Comment.
 */

function Node () {
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.children = [];
  this.pureChildren = [];
  this.parentNode = null;
  this.nextSibling = null;
  this.previousSibling = null;
}

/**
 * Destroy current node, and remove itself form nodeMap.
 */
Node.prototype.destroy = function () {
  var doc = getDoc(this.docId);
  if (doc) {
    delete this.docId;
    delete doc.nodeMap[this.nodeId];
  }
  this.children.forEach(function (child) {
    child.destroy();
  });
};

/**
 * @fileOverview
 * Virtual-DOM Element.
 */

var DEFAULT_TAG_NAME = 'div';

function Element$1 (type, props, isExtended) {
  if ( type === void 0 ) type = DEFAULT_TAG_NAME;

  var XElement = elementTypes[type];
  if (XElement && !isExtended) {
    return new XElement(props)
  }
  props = props || {};
  this.nodeType = 1;
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.type = type;
  this.attr = props.attr || {};
  this.style = props.style || {};
  this.classStyle = props.classStyle || {};
  this.event = {};
  this.children = [];
  this.pureChildren = [];
}

Element$1.prototype = Object.create(Node.prototype);
Element$1.prototype.constructor = Element$1;

function registerNode (docId, node) {
  var doc = getDoc(docId);
  doc.nodeMap[node.nodeId] = node;
}

setElement(Element$1);

Object.assign(Element$1.prototype, {
  /**
   * Append a child node.
   * @param {object} node
   * @return {undefined | number} the signal sent by native
   */
  appendChild: function appendChild (node) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    /* istanbul ignore else */
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.length, true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        insertIndex(node, this.pureChildren, this.pureChildren.length);
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), -1]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.length, true);
      if (node.nodeType === 1) {
        var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index]
          )
        }
      }
    }
  },

  /**
   * Insert a node before specified node.
   * @param {object} node
   * @param {object} before
   * @return {undefined | number} the signal sent by native
   */
  insertBefore: function insertBefore (node, before) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === before || (node.nextSibling && node.nextSibling === before)) {
      return
    }
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(before), true);
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var pureBefore = nextElement(before);
        var index = insertIndex(
          node,
          this.pureChildren,
          pureBefore
          ? this.pureChildren.indexOf(pureBefore)
          : this.pureChildren.length
        );
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), index]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(before), true);
      if (node.nodeType === 1) {
        var pureBefore$1 = nextElement(before);
        /* istanbul ignore next */
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          pureBefore$1
          ? this.pureChildren.indexOf(pureBefore$1)
          : this.pureChildren.length
        );
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index$1 >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index$1]
          )
        }
      }
    }
  },

  /**
   * Insert a node after specified node.
   * @param {object} node
   * @param {object} after
   * @return {undefined | number} the signal sent by native
   */
  insertAfter: function insertAfter (node, after) {
    if (node.parentNode && node.parentNode !== this) {
      return
    }
    if (node === after || (node.previousSibling && node.previousSibling === after)) {
      return
    }
    if (!node.parentNode) {
      linkParent(node, this);
      insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
      /* istanbul ignore else */
      if (this.docId) {
        registerNode(this.docId, node);
      }
      if (node.nodeType === 1) {
        var index = insertIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var taskCenter = getTaskCenter(this.docId);
        /* istanbul ignore else */
        if (taskCenter) {
          return taskCenter.send(
            'dom',
            { action: 'addElement' },
            [this.ref, node.toJSON(), index]
          )
        }
      }
    }
    else {
      moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
      if (node.nodeType === 1) {
        var index$1 = moveIndex(
          node,
          this.pureChildren,
          this.pureChildren.indexOf(previousElement(after)) + 1
        );
        var taskCenter$1 = getTaskCenter(this.docId);
        if (taskCenter$1 && index$1 >= 0) {
          return taskCenter$1.send(
            'dom',
            { action: 'moveElement' },
            [node.ref, this.ref, index$1]
          )
        }
      }
    }
  },

  /**
   * Remove a child node, and decide whether it should be destroyed.
   * @param {object} node
   * @param {boolean} preserved
   */
  removeChild: function removeChild (node, preserved) {
    if (node.parentNode) {
      removeIndex(node, this.children, true);
      if (node.nodeType === 1) {
        removeIndex(node, this.pureChildren);
        var taskCenter = getTaskCenter(this.docId);
        if (taskCenter) {
          taskCenter.send(
            'dom',
            { action: 'removeElement' },
            [node.ref]
          );
        }
      }
    }
    if (!preserved) {
      node.destroy();
    }
  },

  /**
   * Clear all child nodes.
   */
  clear: function clear () {
    var taskCenter = getTaskCenter(this.docId);
    /* istanbul ignore else */
    if (taskCenter) {
      this.pureChildren.forEach(function (node) {
        taskCenter.send(
          'dom',
          { action: 'removeElement' },
          [node.ref]
        );
      });
    }
    this.children.forEach(function (node) {
      node.destroy();
    });
    this.children.length = 0;
    this.pureChildren.length = 0;
  },

  /**
   * Set an attribute, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  setAttr: function setAttr (key, value, silent) {
    if (this.attr[key] === value && silent !== false) {
      return
    }
    this.attr[key] = value;
    var taskCenter = getTaskCenter(this.docId);
    if (!silent && taskCenter) {
      var result = {};
      result[key] = value;
      taskCenter.send(
        'dom',
        { action: 'updateAttrs' },
        [this.ref, result]
      );
    }
  },

  /**
   * Set a style property, and decide whether the task should be send to native.
   * @param {string} key
   * @param {string | number} value
   * @param {boolean} silent
   */
  setStyle: function setStyle (key, value, silent) {
    if (this.style[key] === value && silent !== false) {
      return
    }
    this.style[key] = value;
    var taskCenter = getTaskCenter(this.docId);
    if (!silent && taskCenter) {
      var result = {};
      result[key] = value;
      taskCenter.send(
        'dom',
        { action: 'updateStyle' },
        [this.ref, result]
      );
    }
  },

  /**
   * Set style properties from class.
   * @param {object} classStyle
   */
  setClassStyle: function setClassStyle (classStyle) {
    var this$1 = this;

    // reset previous class style to empty string
    for (var key in this.classStyle) {
      this$1.classStyle[key] = '';
    }

    Object.assign(this.classStyle, classStyle);
    var taskCenter = getTaskCenter(this.docId);
    if (taskCenter) {
      taskCenter.send(
        'dom',
        { action: 'updateStyle' },
        [this.ref, this.toStyle()]
      );
    }
  },

  /**
   * Add an event handler.
   * @param {string} event type
   * @param {function} event handler
   */
  addEvent: function addEvent (type, handler) {
    if (!this.event[type]) {
      this.event[type] = handler;
      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'addEvent' },
          [this.ref, type]
        );
      }
    }
  },

  /**
   * Remove an event handler.
   * @param {string} event type
   */
  removeEvent: function removeEvent (type) {
    if (this.event[type]) {
      delete this.event[type];
      var taskCenter = getTaskCenter(this.docId);
      if (taskCenter) {
        taskCenter.send(
          'dom',
          { action: 'removeEvent' },
          [this.ref, type]
        );
      }
    }
  },

  /**
   * Fire an event manually.
   * @param {string} event type
   * @param {function} event handler
   * @return {} anything returned by handler function
   */
  fireEvent: function fireEvent (type, e) {
    var handler = this.event[type];
    if (handler) {
      return handler.call(this, e)
    }
  },

  /**
   * Get all styles of current element.
   * @return {object} style
   */
  toStyle: function toStyle () {
    return Object.assign({}, this.classStyle, this.style)
  },

  /**
   * Convert current element to JSON like object.
   * @return {object} element
   */
  toJSON: function toJSON () {
    var result = {
      ref: this.ref.toString(),
      type: this.type,
      attr: this.attr,
      style: this.toStyle()
    };
    var event = Object.keys(this.event);
    if (event.length) {
      result.event = event;
    }
    if (this.pureChildren.length) {
      result.children = this.pureChildren.map(function (child) { return child.toJSON(); });
    }
    return result
  },

  /**
   * Convert to HTML element tag string.
   * @return {stirng} html
   */
  toString: function toString () {
    return '<' + this.type +
    ' attr=' + JSON.stringify(this.attr) +
    ' style=' + JSON.stringify(this.toStyle()) + '>' +
    this.pureChildren.map(function (child) { return child.toString(); }).join('') +
    '</' + this.type + '>'
  }
});

/**
 * @fileOverview
 * Virtual-DOM Comment.
 */

function Comment (value) {
  this.nodeType = 8;
  this.nodeId = uniqueId();
  this.ref = this.nodeId;
  this.type = 'comment';
  this.value = value;
  this.children = [];
  this.pureChildren = [];
}

Comment.prototype = Object.create(Node.prototype);
Comment.prototype.constructor = Comment;

/**
 * Convert to HTML comment string.
 * @return {stirng} html
 */
Comment.prototype.toString = function () {
  return '<!-- ' + this.value + ' -->'
};

/**
 * @fileOverview
 * Listen virtual-dom operations and create corresponding actions.
 */

function Listener (id, handler) {
  this.id = id;
  this.batched = false;
  this.updates = [];
  if (typeof handler === 'function') {
    Object.defineProperty(this, 'handler', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: handler
    });
  }
  else {
    console.error('[JS Runtime] invalid parameter, handler must be a function');
  }
}

/**
 * Create the action object.
 * @param {string} name
 * @param {array} arguments
 * @return {object} action
 */
function createAction (name, args) {
  if ( args === void 0 ) args = [];

  return { module: 'dom', method: name, args: args }
}

Object.assign(Listener.prototype, {
  /**
   * Send the "createFinish" signal.
   * @param {function} callback
   * @return {undefined | number} the signal sent by native
   */
  createFinish: function createFinish (callback) {
    var handler = this.handler;
    return handler([createAction('createFinish')], callback)
  },

  /**
   * Send the "updateFinish" signal.
   * @param {function} callback
   * @return {undefined | number} the signal sent by native
   */
  updateFinish: function updateFinish (callback) {
    var handler = this.handler;
    return handler([createAction('updateFinish')], callback)
  },

  /**
   * Send the "refreshFinish" signal.
   * @param {function} callback
   * @return {undefined | number} the signal sent by native
   */
  refreshFinish: function refreshFinish (callback) {
    var handler = this.handler;
    return handler([createAction('refreshFinish')], callback)
  },

  /**
   * Send the "createBody" signal.
   * @param {object} element
   * @return {undefined | number} the signal sent by native
   */
  createBody: function createBody (element) {
    var body = element.toJSON();
    var children = body.children;
    delete body.children;
    var actions = [createAction('createBody', [body])];
    if (children) {
      actions.push.apply(actions, children.map(function (child) {
        return createAction('addElement', [body.ref, child, -1])
      }));
    }
    return this.addActions(actions)
  },

  /**
   * Send the "addElement" signal.
   * @param {object} element
   * @param {stirng} reference id
   * @param {number} index
   * @return {undefined | number} the signal sent by native
   */
  addElement: function addElement (element, ref, index) {
    if (!(index >= 0)) {
      index = -1;
    }
    return this.addActions(createAction('addElement', [ref, element.toJSON(), index]))
  },

  /**
   * Send the "removeElement" signal.
   * @param {stirng} reference id
   * @return {undefined | number} the signal sent by native
   */
  removeElement: function removeElement (ref) {
    if (Array.isArray(ref)) {
      var actions = ref.map(function (r) { return createAction('removeElement', [r]); });
      return this.addActions(actions)
    }
    return this.addActions(createAction('removeElement', [ref]))
  },

  /**
   * Send the "moveElement" signal.
   * @param {stirng} target reference id
   * @param {stirng} parent reference id
   * @param {number} index
   * @return {undefined | number} the signal sent by native
   */
  moveElement: function moveElement (targetRef, parentRef, index) {
    return this.addActions(createAction('moveElement', [targetRef, parentRef, index]))
  },

  /**
   * Send the "updateAttrs" signal.
   * @param {stirng} reference id
   * @param {stirng} key
   * @param {stirng} value
   * @return {undefined | number} the signal sent by native
   */
  setAttr: function setAttr (ref, key, value) {
    var result = {};
    result[key] = value;
    return this.addActions(createAction('updateAttrs', [ref, result]))
  },

  /**
   * Send the "updateStyle" signal, update a sole style.
   * @param {stirng} reference id
   * @param {stirng} key
   * @param {stirng} value
   * @return {undefined | number} the signal sent by native
   */
  setStyle: function setStyle (ref, key, value) {
    var result = {};
    result[key] = value;
    return this.addActions(createAction('updateStyle', [ref, result]))
  },

  /**
   * Send the "updateStyle" signal.
   * @param {stirng} reference id
   * @param {object} style
   * @return {undefined | number} the signal sent by native
   */
  setStyles: function setStyles (ref, style) {
    return this.addActions(createAction('updateStyle', [ref, style]))
  },

  /**
   * Send the "addEvent" signal.
   * @param {stirng} reference id
   * @param {string} event type
   * @return {undefined | number} the signal sent by native
   */
  addEvent: function addEvent (ref, type) {
    return this.addActions(createAction('addEvent', [ref, type]))
  },

  /**
   * Send the "removeEvent" signal.
   * @param {stirng} reference id
   * @param {string} event type
   * @return {undefined | number} the signal sent by native
   */
  removeEvent: function removeEvent (ref, type) {
    return this.addActions(createAction('removeEvent', [ref, type]))
  },

  /**
   * Default handler.
   * @param {object | array} actions
   * @param {function} callback
   * @return {} anything returned by callback function
   */
  handler: function handler (actions, cb) {
    return cb && cb()
  },

  /**
   * Add actions into updates.
   * @param {object | array} actions
   * @return {undefined | number} the signal sent by native
   */
  addActions: function addActions (actions) {
    var updates = this.updates;
    var handler = this.handler;

    if (!Array.isArray(actions)) {
      actions = [actions];
    }

    if (this.batched) {
      updates.push.apply(updates, actions);
    }
    else {
      return handler(actions)
    }
  }
});

/**
 * @fileOverview
 * Task handler for communication between javascript and native.
 */

var handlerMap = {
  createBody: 'callCreateBody',
  addElement: 'callAddElement',
  removeElement: 'callRemoveElement',
  moveElement: 'callMoveElement',
  updateAttrs: 'callUpdateAttrs',
  updateStyle: 'callUpdateStyle',
  addEvent: 'callAddEvent',
  removeEvent: 'callRemoveEvent'
};

/**
 * Create a task handler.
 * @param {string} id
 * @param {function} handler
 * @return {function} taskHandler
 */
function createHandler (id, handler) {
  var defaultHandler = handler || global.callNative;

  /* istanbul ignore if */
  if (typeof defaultHandler !== 'function') {
    console.error('[JS Runtime] no default handler');
  }

  return function taskHandler (tasks) {
    /* istanbul ignore if */
    if (!Array.isArray(tasks)) {
      tasks = [tasks];
    }
    for (var i = 0; i < tasks.length; i++) {
      var returnValue = dispatchTask(id, tasks[i], defaultHandler);
      if (returnValue === -1) {
        return returnValue
      }
    }
  }
}

/**
 * Check if there is a corresponding available handler in the environment.
 * @param {string} module
 * @param {string} method
 * @return {boolean}
 */
function hasAvailableHandler (module, method) {
  return module === 'dom'
    && handlerMap[method]
    && typeof global[handlerMap[method]] === 'function'
}

/**
 * Dispatch the task to the specified handler.
 * @param {string} id
 * @param {object} task
 * @param {function} defaultHandler
 * @return {number} signal returned from native
 */
function dispatchTask (id, task, defaultHandler) {
  var module = task.module;
  var method = task.method;
  var args = task.args;

  if (hasAvailableHandler(module, method)) {
    return global[handlerMap[method]].apply(global, [ id ].concat( args, ['-1'] ))
  }

  return defaultHandler(id, [task], '-1')
}

/**
 * @fileOverview
 * Virtual-DOM Document.
 */

function Document (id, url, handler) {
  id = id ? id.toString() : '';
  this.id = id;
  this.URL = url;

  addDoc(id, this);
  this.nodeMap = {};
  var L = Document.Listener || Listener;
  this.listener = new L(id, handler || createHandler(id, Document.handler)); // deprecated
  this.taskCenter = new TaskCenter(id, handler ? function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return handler.apply(void 0, args);
  } : Document.handler);
  this.createDocumentElement();
}

// default task handler
Document.handler = null;

/**
 * Update all changes for an element.
 * @param {object} element
 * @param {object} changes
 */
function updateElement (el, changes) {
  var attrs = changes.attrs || {};
  for (var name in attrs) {
    el.setAttr(name, attrs[name], true);
  }
  var style = changes.style || {};
  for (var name$1 in style) {
    el.setStyle(name$1, style[name$1], true);
  }
}

Object.assign(Document.prototype, {
  /**
   * Get the node from nodeMap.
   * @param {string} reference id
   * @return {object} node
   */
  getRef: function getRef (ref) {
    return this.nodeMap[ref]
  },

  /**
   * Turn on batched updates.
   */
  open: function open () {
    this.listener.batched = false;
  },

  /**
   * Turn off batched updates.
   */
  close: function close () {
    this.listener.batched = true;
  },

  /**
   * Create the document element.
   * @return {object} documentElement
   */
  createDocumentElement: function createDocumentElement () {
    var this$1 = this;

    if (!this.documentElement) {
      var el = new Element$1('document');
      el.docId = this.id;
      el.ownerDocument = this;
      el.role = 'documentElement';
      el.depth = 0;
      el.ref = '_documentElement';
      this.nodeMap._documentElement = el;
      this.documentElement = el;

      Object.defineProperty(el, 'appendChild', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (node) {
          appendBody(this$1, node);
        }
      });

      Object.defineProperty(el, 'insertBefore', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function (node, before) {
          appendBody(this$1, node, before);
        }
      });
    }

    return this.documentElement
  },

  /**
   * Create the body element.
   * @param {string} type
   * @param {objct} props
   * @return {object} body element
   */
  createBody: function createBody (type, props) {
    if (!this.body) {
      var el = new Element$1(type, props);
      setBody(this, el);
    }

    return this.body
  },

  /**
   * Create an element.
   * @param {string} tagName
   * @param {objct} props
   * @return {object} element
   */
  createElement: function createElement (tagName, props) {
    return new Element$1(tagName, props)
  },

  /**
   * Create an comment.
   * @param {string} text
   * @return {object} comment
   */
  createComment: function createComment (text) {
    return new Comment(text)
  },

  /**
   * Fire an event on specified element manually.
   * @param {object} element
   * @param {string} event type
   * @param {object} event object
   * @param {object} dom changes
   * @return {} anything returned by handler function
   */
  fireEvent: function fireEvent (el, type, e, domChanges) {
    if (!el) {
      return
    }
    e = e || {};
    e.type = type;
    e.target = el;
    e.timestamp = Date.now();
    if (domChanges) {
      updateElement(el, domChanges);
    }
    return el.fireEvent(type, e)
  },

  /**
   * Destroy current document, and remove itself form docMap.
   */
  destroy: function destroy () {
    delete this.listener;
    delete this.nodeMap;
    removeDoc(this.id);
  }
});

/**
 * For general callback management of a certain Weex instance.
 * Because function can not passed into native, so we create callback
 * callback id for each function and pass the callback id into native
 * in fact. And when a callback called from native, we can find the real
 * callback through the callback id we have passed before.
 */
var CallbackManager = function CallbackManager (instanceId) {
  this.instanceId = instanceId;
  this.lastCallbackId = 0;
  this.callbacks = [];
};
CallbackManager.prototype.add = function add (callback) {
  this.lastCallbackId++;
  this.callbacks[this.lastCallbackId] = callback;
  return this.lastCallbackId
};
CallbackManager.prototype.remove = function remove (callbackId) {
  var callback = this.callbacks[callbackId];
  this.callbacks[callbackId] = undefined;
  return callback
};
CallbackManager.prototype.consume = function consume (callbackId, data, ifKeepAlive) {
  var callback = this.callbacks[callbackId];
  if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
    this.callbacks[callbackId] = undefined;
  }
  if (typeof callback === 'function') {
    return callback(data)
  }
  return new Error(("invalid callback id \"" + callbackId + "\""))
};
CallbackManager.prototype.close = function close () {
  this.callbacks = this.callbacks.map(function (cb) { return undefined; });
};

var config$1 = {
  Document: Document, Element: Element$1, Comment: Comment, Listener: Listener,
  TaskCenter: TaskCenter,
  sendTasks: function sendTasks () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return global.callNative.apply(global, args)
  },
  CallbackManager: CallbackManager
};

Document.handler = config$1.sendTasks;

/**
 * @fileOverview
 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
 * framework(s): one is the instance management layer, another is the
 * virtual-DOM layer.
 */

/* istanbul ignore next */
function freezePrototype$$1 () {
  freezePrototype$1();

  Object.freeze(config$1.Element);
  Object.freeze(config$1.Comment);
  Object.freeze(config$1.Listener);
  Object.freeze(config$1.Document.prototype);
  Object.freeze(config$1.Element.prototype);
  Object.freeze(config$1.Comment.prototype);
  Object.freeze(config$1.Listener.prototype);
}

var runtime = {
  setNativeConsole: setNativeConsole,
  resetNativeConsole: resetNativeConsole,
  setNativeTimer: setNativeTimer,
  resetNativeTimer: resetNativeTimer,
  service: { register: register$1, unregister: unregister, has: has$5 },
  freezePrototype: freezePrototype$$1,
  init: init$1,
  config: config$1
};

var config$3 = {};

var instanceMap$1 = {};

function init$3 (cfg) {
  config$3.Document = cfg.Document;
  config$3.Element = cfg.Element;
  config$3.Comment = cfg.Comment;
  config$3.sendTasks = cfg.sendTasks;
}

function registerComponents (components) {}

function registerModules (modules) {}

function registerMethods (apis) {}

function prepareInstance (id, options, data) {}

function createInstance$1 (id, code, options, data, serviceObjects) {
  var document = new config$3.Document(id, options.bundleUrl);
  var callbacks = {};

  var lastCallbackId = 0;
  document.addCallback = function (func) {
    lastCallbackId++;
    callbacks[lastCallbackId] = func;
    return lastCallbackId
  };
  document.handleCallback = function (funcId, data, ifLast) {
    var callback = callbacks[funcId];
    if (ifLast) {
      delete callbacks[funcId];
    }
    return callback(data)
  };
  instanceMap$1[id] = document;

  var globalObjects = Object.assign({
    Document: config$3.Document,
    Element: config$3.Element,
    Comment: config$3.Comment,
    sendTasks: config$3.sendTasks,
    id: id, options: options, data: data, document: document
  }, serviceObjects);

  var globalKeys = [];
  var globalValues = [];
  for (var key in globalObjects) {
    globalKeys.push(key);
    globalValues.push(globalObjects[key]);
  }
  globalKeys.push(code);

  var result = new (Function.prototype.bind.apply( Function, [ null ].concat( globalKeys) ));
  return result.apply(void 0, globalValues)
}

function refreshInstance (id, data) {}

function destroyInstance (id) {
  delete instanceMap$1[id];
}

function getRoot (id) {
  return instanceMap$1[id].body.toJSON()
}

function receiveTasks (id, tasks) {
  var jsHandlers = {
    fireEvent: function (id, ref, type, data, domChanges) {
      var document = instanceMap$1[id];
      var el = document.getRef(ref);
      return document.fireEvent(el, type, data, domChanges)
    },

    callback: function (id, funcId, data, ifLast) {
      var document = instanceMap$1[id];
      return document.handleCallback(funcId, data, ifLast)
    }
  };

  var document = instanceMap$1[id];
  if (document && Array.isArray(tasks)) {
    var results = [];
    tasks.forEach(function (task) {
      var handler = jsHandlers[task.method];
      var args = [].concat( task.args );
      if (typeof handler === 'function') {
        args.unshift(id);
        results.push(handler.apply(void 0, args));
      }
    });
    return results
  }
}

var init_1 = init$3;
var registerComponents_1 = registerComponents;
var registerModules_1 = registerModules;
var registerMethods_1 = registerMethods;
var prepareInstance_1 = prepareInstance;
var createInstance_1 = createInstance$1;
var refreshInstance_1 = refreshInstance;
var destroyInstance_1 = destroyInstance;
var getRoot_1 = getRoot;
var receiveTasks_1 = receiveTasks;

var index = {
  init: init_1,
  registerComponents: registerComponents_1,
  registerModules: registerModules_1,
  registerMethods: registerMethods_1,
  prepareInstance: prepareInstance_1,
  createInstance: createInstance_1,
  refreshInstance: refreshInstance_1,
  destroyInstance: destroyInstance_1,
  getRoot: getRoot_1,
  receiveTasks: receiveTasks_1
};



var Vanilla = Object.freeze({
  default: index,
  __moduleExports: index,
  init: init_1,
  registerComponents: registerComponents_1,
  registerModules: registerModules_1,
  registerMethods: registerMethods_1,
  prepareInstance: prepareInstance_1,
  createInstance: createInstance_1,
  refreshInstance: refreshInstance_1,
  destroyInstance: destroyInstance_1,
  getRoot: getRoot_1,
  receiveTasks: receiveTasks_1
});

var index_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val, 10);
  return (n || n === 0) ? n : val
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b)
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof commonjsGlobal !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = commonjsGlobal['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var formatComponentName;

{
  var hasConsole = typeof console !== 'undefined';

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set$1 (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set$1(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    "development" !== 'production' && warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
    return vm[key]
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}



var util = Object.freeze({
  defineReactive: defineReactive$$1,
  _toString: _toString,
  toNumber: toNumber,
  makeMap: makeMap,
  isBuiltInTag: isBuiltInTag,
  remove: remove,
  hasOwn: hasOwn,
  isPrimitive: isPrimitive,
  cached: cached,
  camelize: camelize,
  capitalize: capitalize,
  hyphenate: hyphenate,
  bind: bind,
  toArray: toArray,
  extend: extend,
  isObject: isObject,
  isPlainObject: isPlainObject,
  toObject: toObject,
  noop: noop,
  no: no,
  identity: identity,
  genStaticKeys: genStaticKeys,
  looseEqual: looseEqual,
  looseIndexOf: looseIndexOf,
  isReserved: isReserved,
  def: def,
  parsePath: parsePath,
  hasProto: hasProto,
  inBrowser: inBrowser,
  UA: UA,
  isIE: isIE,
  isIE9: isIE9,
  isEdge: isEdge,
  isAndroid: isAndroid,
  isIOS: isIOS,
  isServerRendering: isServerRendering,
  devtools: devtools,
  nextTick: nextTick,
  get _Set () { return _Set; },
  mergeOptions: mergeOptions,
  resolveAsset: resolveAsset,
  get warn () { return warn; },
  get formatComponentName () { return formatComponentName; },
  validateProp: validateProp
});

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */


var queue = [];
var has$1 = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has$1 = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    var watcher = queue[index];
    var id = watcher.id;
    has$1[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has$1[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has$1[id] == null) {
    has$1[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm);
          } else {
            "development" !== 'production' && warn(
              ("Error in watcher \"" + (this.expression) + "\""),
              this.vm
            );
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm, props) {
  var propsData = vm.$options.propsData || {};
  var keys = vm.$options._propKeys = Object.keys(props);
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( i ) {
    var key = keys[i];
    /* istanbul ignore else */
    {
      if (isReservedProp[key]) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
  };

  for (var i = 0; i < keys.length; i++) { loop( i ); }
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed (vm, computed) {
  for (var key in computed) {
    /* istanbul ignore if */
    if ("development" !== 'production' && key in vm) {
      warn(
        "existing instance property \"" + key + "\" will be " +
        "overwritten by a computed property with the same name.",
        vm
      );
    }
    var userDef = computed[key];
    if (typeof userDef === 'function') {
      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
      computedSharedDefinition.set = noop;
    } else {
      computedSharedDefinition.get = userDef.get
        ? userDef.cache !== false
          ? makeComputedGetter(userDef.get, vm)
          : bind(userDef.get, vm)
        : noop;
      computedSharedDefinition.set = userDef.set
        ? bind(userDef.set, vm)
        : noop;
    }
    Object.defineProperty(vm, key, computedSharedDefinition);
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm, methods) {
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if ("development" !== 'production' && methods[key] == null) {
      warn(
        "method \"" + key + "\" has an undefined value in the component definition. " +
        "Did you reference the function correctly?",
        vm
      );
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data
  };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$set = set$1;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.child = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

function mergeVNodeHook (def, hookKey, hook, key) {
  key = key + hookKey;
  var injectedHash = def.__injected || (def.__injected = {});
  if (!injectedHash[key]) {
    injectedHash[key] = true;
    var oldHook = def[hookKey];
    if (oldHook) {
      def[hookKey] = function () {
        oldHook.apply(this, arguments);
        hook.apply(this, arguments);
      };
    } else {
      def[hookKey] = hook;
    }
  }
}

/*  */

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, fn, event, capture, once;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (!cur) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + name + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      once = name.charAt(0) === '~'; // Prefixed last, checked first
      event = once ? name.slice(1) : name;
      capture = event.charAt(0) === '!';
      event = capture ? event.slice(1) : event;
      if (Array.isArray(cur)) {
        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
      } else {
        if (!cur.invoker) {
          fn = cur;
          cur = on[name] = {};
          cur.fn = fn;
          cur.invoker = fnInvoker(cur);
        }
        add(event, cur.invoker, once, capture);
      }
    } else if (cur !== old) {
      if (Array.isArray(old)) {
        old.length = cur.length;
        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
        on[name] = old;
      } else {
        old.fn = cur;
        on[name] = old;
      }
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      once = name.charAt(0) === '~'; // Prefixed last, checked first
      event = once ? name.slice(1) : name;
      capture = event.charAt(0) === '!';
      event = capture ? event.slice(1) : event;
      remove$$1(event, oldOn[name].invoker, capture);
    }
  }
}

function arrInvoker (arr) {
  return function (ev) {
    var arguments$1 = arguments;

    var single = arguments.length === 1;
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
    }
  }
}

function fnInvoker (o) {
  return function (ev) {
    var single = arguments.length === 1;
    single ? o.fn(ev) : o.fn.apply(null, arguments);
  }
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// nomralization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constrcuts that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add$1 (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add$1, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
      vm._hasHookEvent = true;
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    if (vm._isMounted) {
      callHook(vm, 'updated');
    }
  };

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this;
    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      {
        observerState.isSettingProps = false;
      }
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */

var hooks = { init: init$1, prepatch: prepatch, insert: insert, destroy: destroy$1 };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init$1 (
  vnode,
  hydrating,
  parentElm,
  refElm
) {
  if (!vnode.child || vnode.child._isDestroyed) {
    var child = vnode.child = createComponentInstanceForVnode(
      vnode,
      activeInstance,
      parentElm,
      refElm
    );
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    // kept-alive components, treat as a patch
    var mountedNode = vnode; // work around flow
    prepatch(mountedNode, mountedNode);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.child = oldVnode.child;
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true;
    callHook(vnode.child, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false;
    callHook(vnode.child, 'activated');
  }
}

function destroy$1 (vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy();
    } else {
      vnode.child._inactive = true;
      callHook(vnode.child, 'deactivated');
    }
  }
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (data && data.__ob__) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = {};
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    if (_parentVnode && _parentVnode.data.scopedSlots) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots;
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm);
      } else {
        {
          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
        }
        throw e
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode;
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // toString for mustaches
  Vue.prototype._s = _toString;
  // convert text to vnode
  Vue.prototype._v = createTextVNode;
  // number conversion
  Vue.prototype._n = toNumber;
  // empty vnode
  Vue.prototype._e = createEmptyVNode;
  // loose equal
  Vue.prototype._q = looseEqual;
  // loose indexOf
  Vue.prototype._i = looseIndexOf;

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);
    return tree
  };

  // mark node as static (v-once)
  Vue.prototype._o = function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  };

  function markStatic (tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  // filter resolution helper
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  };

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret
  };

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        extend(props, bindObject);
      }
      return scopedSlotFn(props) || fallback
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes && "development" !== 'production') {
        slotNodes._rendered && warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
        slotNodes._rendered = true;
      }
      return slotNodes || fallback
    }
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    tag,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key];
          } else {
            var hash = asProp || config.mustUseProp(tag, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
            hash[key] = value[key];
          }
        }
      }
    }
    return data
  };

  // check v-on keyCodes
  Vue.prototype._k = function checkKeyCodes (
    eventKeyCode,
    key,
    builtInAlias
  ) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  };
}

function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    initRender(vm);
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = Ctor.super.options;
    var cachedSuperOptions = Ctor.superOptions;
    var extendOptions = Ctor.extendOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed
      Ctor.superOptions = superOptions;
      extendOptions.render = options.render;
      extendOptions.staticRenderFns = options.staticRenderFns;
      extendOptions._scopeId = options._scopeId;
      options = Ctor.options = mergeOptions(superOptions, extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function Vue$2 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$2)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }
    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;
    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else {
    return pattern.test(name)
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes
  },
  created: function created () {
    this.cache = Object.create(null);
  },
  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    if (vnode && vnode.componentOptions) {
      var opts = vnode.componentOptions;
      // check pattern
      var name = opts.Ctor.options.name || opts.tag;
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.child = this.cache[key].child;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  },
  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      var vnode = this$1.cache[key];
      callHook(vnode.child, 'deactivated');
      vnode.child.$destroy();
    }
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set$1;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.1.8';

var latestNodeId = 1;

function TextNode (text) {
  this.instanceId = '';
  this.nodeId = latestNodeId++;
  this.parentNode = null;
  this.nodeType = 3;
  this.text = text;
}

var renderer = {
  TextNode: TextNode,
  instances: {},
  modules: {},
  components: {}
};

var namespaceMap = {};

function createElement$1 (tagName) {
  return new renderer.Element(tagName)
}

function createElementNS (namespace, tagName) {
  return new renderer.Element(namespace + ':' + tagName)
}

function createTextNode (text) {
  return new renderer.TextNode(text)
}

function createComment (text) {
  return new renderer.Comment(text)
}

function insertBefore (node, target, before) {
  if (target.nodeType === 3) {
    if (node.type === 'text') {
      node.setAttr('value', target.text);
      target.parentNode = node;
    } else {
      var text = createElement$1('text');
      text.setAttr('value', target.text);
      node.insertBefore(text, before);
    }
    return
  }
  node.insertBefore(target, before);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  if (child.nodeType === 3) {
    if (node.type === 'text') {
      node.setAttr('value', child.text);
      child.parentNode = node;
    } else {
      var text = createElement$1('text');
      text.setAttr('value', child.text);
      node.appendChild(text);
    }
    return
  }

  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.type
}

function setTextContent (node, text) {
  node.parentNode.setAttr('value', text);
}

function setAttribute (node, key, val) {
  node.setAttr(key, val);
}


var nodeOps = Object.freeze({
  namespaceMap: namespaceMap,
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.child || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        // in Weex, the default insertion order is parent-first.
        // List items can be optimized to use children-first insertion
        // with append="tree".
        var appendAsTree = data && data.appendAsTree;
        if (!appendAsTree) {
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }
        createChildren(vnode, children, insertedVnodeQueue);
        if (appendAsTree) {
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.child) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.child)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isReactivated) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.child) {
      innerNode = innerNode.child._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (parent) {
      if (ref) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.child) {
      vnode = vnode.child._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.child.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      vnode.child = oldVnode.child;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var elm, parent;
    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        elm = oldVnode.elm;
        parent = nodeOps.parentNode(elm);
        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

        if (vnode.parent) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parent !== null) {
          removeVnodes(parent, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    }, 'dir-postpatch');
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      elm.setAttr(key, cur);
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      elm.setAttr(key);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var ctx = vnode.context;

  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var oldClassList = [];
  // unlike web, weex vnode staticClass is an Array
  var oldStaticClass = oldData.staticClass;
  if (oldStaticClass) {
    oldClassList.push.apply(oldClassList, oldStaticClass);
  }
  if (oldData.class) {
    oldClassList.push.apply(oldClassList, oldData.class);
  }

  var classList = [];
  // unlike web, weex vnode staticClass is an Array
  var staticClass = data.staticClass;
  if (staticClass) {
    classList.push.apply(classList, staticClass);
  }
  if (data.class) {
    classList.push.apply(classList, data.class);
  }

  var style = getStyle(oldClassList, classList, ctx);
  for (var key in style) {
    el.setStyle(key, style[key]);
  }
}

function getStyle (oldClassList, classList, ctx) {
  // style is a weex-only injected object
  // compiled from <style> tags in weex files
  var stylesheet = ctx.$options.style || {};
  var result = {};
  classList.forEach(function (name) {
    var style = stylesheet[name];
    extend(result, style);
  });
  oldClassList.forEach(function (name) {
    var style = stylesheet[name];
    for (var key in style) {
      if (!result.hasOwnProperty(key)) {
        result[key] = '';
      }
    }
  });
  return result
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  updateListeners(on, oldOn, function (event, handler, capture) {
    if (capture) {
      console.log('Weex do not support event in bubble phase.');
      return
    }
    vnode.elm.addEvent(event, handler.bind(vnode.context));
  }, function (event) {
    vnode.elm.removeEvent(event);
  }, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var normalize$1 = cached(camelize);

function createStyle (oldVnode, vnode) {
  if (!vnode.data.staticStyle) {
    updateStyle(oldVnode, vnode);
    return
  }
  var elm = vnode.elm;
  var staticStyle = vnode.data.staticStyle;
  for (var name in staticStyle) {
    if (staticStyle[name]) {
      elm.setStyle(normalize$1(name), staticStyle[name]);
    }
  }
  updateStyle(oldVnode, vnode);
}

function updateStyle (oldVnode, vnode) {
  if (!oldVnode.data.style && !vnode.data.style) {
    return
  }
  var cur, name;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style || {};
  var style = vnode.data.style || {};

  var needClone = style.__ob__;

  // handle array syntax
  if (Array.isArray(style)) {
    style = vnode.data.style = toObject$1(style);
  }

  // clone the style for future updates,
  // in case the user mutates the style object in-place.
  if (needClone) {
    style = vnode.data.style = extend({}, style);
  }

  for (name in oldStyle) {
    if (!style[name]) {
      elm.setStyle(normalize$1(name), '');
    }
  }
  for (name in style) {
    cur = style[name];
    elm.setStyle(normalize$1(name), cur);
  }
}

function toObject$1 (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

var style = {
  create: createStyle,
  update: updateStyle
};

var platformModules = [
  attrs,
  klass,
  events,
  style
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules$1 = platformModules.concat(baseModules);

var patch$1 = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules$1,
  LONG_LIST_THRESHOLD: 10
});

var platformDirectives = {
};

var isReservedTag = makeMap(
  'div,img,image,input,switch,indicator,list,scroller,cell,template,text,slider,image'
);

function mustUseProp () { /* console.log('mustUseProp') */ }

function isUnknownElement () { /* console.log('isUnknownElement') */ }
function query (el, document) {
  var placeholder = new renderer.Comment('root');
  placeholder.hasAttribute = placeholder.removeAttribute = function () {}; // hack for patch
  document.documentElement.appendChild(placeholder);
  return placeholder
}

/*  */

// install platform specific utils
Vue$2.config.isUnknownElement = isUnknownElement;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.mustUseProp = mustUseProp;

// install platform runtime directives
Vue$2.options.directives = platformDirectives;

// install platform patch function
Vue$2.prototype.__patch__ = patch$1;

// wrap mount
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  return this._mount(el && query(el, this.$document), hydrating)
};

Vue$2.weexVersion = '2.1.8-weex.1';
var instances = renderer.instances;
var modules = renderer.modules;
var components = renderer.components;

var activeId;
var oriIsReservedTag = (Vue$2 && Vue$2.config && typeof Vue$2.config.isReservedTag === 'function') ? Vue$2.config.isReservedTag : function () {};

/**
 * Prepare framework config, basically about the virtual-DOM and JS bridge.
 * @param {object} cfg
 */
function init (cfg) {
  renderer.Document = cfg.Document;
  renderer.Element = cfg.Element;
  renderer.Comment = cfg.Comment;
  renderer.sendTasks = cfg.sendTasks;
}

/**
 * Reset framework config and clear all registrations.
 */
function reset () {
  clear$1(instances);
  clear$1(modules);
  clear$1(components);
  delete renderer.Document;
  delete renderer.Element;
  delete renderer.Comment;
  delete renderer.sendTasks;
  Vue$2.config.isReservedTag = oriIsReservedTag;
}

/**
 * Delete all keys of an object.
 * @param {object} obj
 */
function clear$1 (obj) {
  for (var key in obj) {
    delete obj[key];
  }
}

/**
 * Create an instance with id, code, config and external data.
 * @param {string} instanceId
 * @param {string} appCode
 * @param {object} config
 * @param {object} data
 * @param {object} env { info, config, services }
 */
function createInstance (
  instanceId,
  appCode,
  config,
  data,
  env
) {
  if ( appCode === void 0 ) { appCode = ''; }
  if ( config === void 0 ) { config = {}; }
  if ( env === void 0 ) { env = {}; }

  // Set active instance id and put some information into `instances` map.
  activeId = instanceId;

  // Virtual-DOM object.
  var document = new renderer.Document(instanceId, config.bundleUrl);

  // All function/callback of parameters before sent to native
  // will be converted as an id. So `callbacks` is used to store
  // these real functions. When a callback invoked and won't be
  // called again, it should be removed from here automatically.
  var callbacks = [];

  // The latest callback id, incremental.
  var callbackId = 1;

  instances[instanceId] = {
    instanceId: instanceId, config: config, data: data,
    document: document, callbacks: callbacks, callbackId: callbackId
  };

  // Prepare native module getter and HTML5 Timer APIs.
  var moduleGetter = genModuleGetter(instanceId);
  var timerAPIs = getInstanceTimer(instanceId, moduleGetter);

  // Prepare `weex` instance variable.
  var weexInstanceVar = {
    config: config,
    document: document,
    require: moduleGetter
  };
  Object.freeze(weexInstanceVar);

  // Each instance has a independent `Vue` variable and it should have
  // all top-level public APIs.
  var subVue = Vue$2.extend({});

  // ensure plain-object components are extended from the subVue
  subVue.options._base = subVue

  // expose global utility
  ;['util', 'set', 'delete', 'nextTick', 'version', 'weexVersion', 'config'].forEach(function (name) {
    subVue[name] = Vue$2[name];
  });

  // The function which create a closure the JS Bundle will run in.
  // It will declare some instance variables like `Vue`, HTML5 Timer APIs etc.
  var instanceVars = Object.assign({
    Vue: subVue,
    weex: weexInstanceVar,
    __weex_require_module__: weexInstanceVar.require // deprecated
  }, timerAPIs);
  callFunction(instanceVars, appCode);

  // Send `createFinish` signal to native.
  renderer.sendTasks(instanceId + '', [{ module: 'dom', method: 'createFinish', args: [] }], -1);
}

/**
 * Destroy an instance with id. It will make sure all memory of
 * this instance released and no more leaks.
 * @param {string} instanceId
 */
function destroyInstance (instanceId) {
  var instance = instances[instanceId] || {};
  if (instance.app instanceof Vue$2) {
    instance.app.$destroy();
  }
  delete instances[instanceId];
}

/**
 * Refresh an instance with id and new top-level component data.
 * It will use `Vue.set` on all keys of the new data. So it's better
 * define all possible meaningful keys when instance created.
 * @param {string} instanceId
 * @param {object} data
 */
function refreshInstance (instanceId, data) {
  var instance = instances[instanceId] || {};
  if (!(instance.app instanceof Vue$2)) {
    return new Error(("refreshInstance: instance " + instanceId + " not found!"))
  }
  for (var key in data) {
    Vue$2.set(instance.app, key, data[key]);
  }
  // Finally `refreshFinish` signal needed.
  renderer.sendTasks(instanceId + '', [{ module: 'dom', method: 'refreshFinish', args: [] }], -1);
}

/**
 * Get the JSON object of the root element.
 * @param {string} instanceId
 */
function getRoot (instanceId) {
  var instance = instances[instanceId] || {};
  if (!(instance.app instanceof Vue$2)) {
    return new Error(("getRoot: instance " + instanceId + " not found!"))
  }
  return instance.app.$el.toJSON()
}

/**
 * Receive tasks from native. Generally there are two types of tasks:
 * 1. `fireEvent`: an device actions or user actions from native.
 * 2. `callback`: invoke function which sent to native as a parameter before.
 * @param {string} instanceId
 * @param {array}  tasks
 */
function receiveTasks (instanceId, tasks) {
  var instance = instances[instanceId] || {};
  if (!(instance.app instanceof Vue$2)) {
    return new Error(("receiveTasks: instance " + instanceId + " not found!"))
  }
  var callbacks = instance.callbacks;
  var document = instance.document;
  tasks.forEach(function (task) {
    // `fireEvent` case: find the event target and fire.
    if (task.method === 'fireEvent') {
      var ref = task.args;
      var nodeId = ref[0];
      var type = ref[1];
      var e = ref[2];
      var domChanges = ref[3];
      var el = document.getRef(nodeId);
      document.fireEvent(el, type, e, domChanges);
    }
    // `callback` case: find the callback by id and call it.
    if (task.method === 'callback') {
      var ref$1 = task.args;
      var callbackId = ref$1[0];
      var data = ref$1[1];
      var ifKeepAlive = ref$1[2];
      var callback = callbacks[callbackId];
      if (typeof callback === 'function') {
        callback(data);
        // Remove the callback from `callbacks` if it won't called again.
        if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
          callbacks[callbackId] = undefined;
        }
      }
    }
  });
  // Finally `updateFinish` signal needed.
  renderer.sendTasks(instanceId + '', [{ module: 'dom', method: 'updateFinish', args: [] }], -1);
}

/**
 * Register native modules information.
 * @param {object} newModules
 */
function registerModules (newModules) {
  var loop = function ( name ) {
    if (!modules[name]) {
      modules[name] = {};
    }
    newModules[name].forEach(function (method) {
      if (typeof method === 'string') {
        modules[name][method] = true;
      } else {
        modules[name][method.name] = method.args;
      }
    });
  };

  for (var name in newModules) { loop( name ); }
}

/**
 * Register native components information.
 * @param {array} newComponents
 */
function registerComponents (newComponents) {
  var config = Vue$2.config;
  var newConfig = {};
  if (Array.isArray(newComponents)) {
    newComponents.forEach(function (component) {
      if (!component) {
        return
      }
      if (typeof component === 'string') {
        components[component] = true;
        newConfig[component] = true;
      } else if (typeof component === 'object' && typeof component.type === 'string') {
        components[component.type] = component;
        newConfig[component.type] = true;
      }
    });
    var oldIsReservedTag = config.isReservedTag;
    config.isReservedTag = function (name) {
      return newConfig[name] || oldIsReservedTag(name)
    };
  }
}

// Hack `Vue` behavior to handle instance information and data
// before root component created.
Vue$2.mixin({
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    var parentOptions = (options.parent && options.parent.$options) || {};

    // root component (vm)
    if (options.el) {
      // record instance info
      var instance = instances[activeId] || {};
      this.$instanceId = activeId;
      options.instanceId = activeId;
      this.$document = instance.document;

      // set external data of instance
      var dataOption = options.data;
      var internalData = (typeof dataOption === 'function' ? dataOption() : dataOption) || {};
      options.data = Object.assign(internalData, instance.data);

      // record instance by id
      instance.app = this;

      activeId = undefined;
    } else {
      this.$instanceId = options.instanceId = parentOptions.instanceId;
    }
  }
});

/**
 * @deprecated Just instance variable `weex.config`
 * Get instance config.
 * @return {object}
 */
Vue$2.prototype.$getConfig = function () {
  var instance = instances[this.$instanceId] || {};
  if (instance.app instanceof Vue$2) {
    return instance.config
  }
};

/**
 * Generate native module getter. Each native module has several
 * methods to call. And all the hebaviors is instance-related. So
 * this getter will return a set of methods which additionally
 * send current instance id to native when called. Also the args
 * will be normalized into "safe" value. For example function arg
 * will be converted into a callback id.
 * @param  {string}  instanceId
 * @return {function}
 */
function genModuleGetter (instanceId) {
  var instance = instances[instanceId];
  return function (name) {
    var nativeModule = modules[name] || [];
    var output = {};
    var loop = function ( methodName ) {
      output[methodName] = function () {
        var arguments$1 = arguments;

        var args = [], len = arguments.length;
        while ( len-- ) { args[ len ] = arguments$1[ len ]; }

        var finalArgs = args.map(function (value) {
          return normalize(value, instance)
        });
        renderer.sendTasks(instanceId + '', [{ module: name, method: methodName, args: finalArgs }], -1);
      };
    };

    for (var methodName in nativeModule) { loop( methodName ); }
    return output
  }
}

/**
 * Generate HTML5 Timer APIs. An important point is that the callback
 * will be converted into callback id when sent to native. So the
 * framework can make sure no side effect of the callabck happened after
 * an instance destroyed.
 * @param  {[type]} instanceId   [description]
 * @param  {[type]} moduleGetter [description]
 * @return {[type]}              [description]
 */
function getInstanceTimer (instanceId, moduleGetter) {
  var instance = instances[instanceId];
  var timer = moduleGetter('timer');
  var timerAPIs = {
    setTimeout: function () {
      var arguments$1 = arguments;

      var args = [], len = arguments.length;
      while ( len-- ) { args[ len ] = arguments$1[ len ]; }

      var handler = function () {
        args[0].apply(args, args.slice(2));
      };
      timer.setTimeout(handler, args[1]);
      return instance.callbackId.toString()
    },
    setInterval: function () {
      var arguments$1 = arguments;

      var args = [], len = arguments.length;
      while ( len-- ) { args[ len ] = arguments$1[ len ]; }

      var handler = function () {
        args[0].apply(args, args.slice(2));
      };
      timer.setInterval(handler, args[1]);
      return instance.callbackId.toString()
    },
    clearTimeout: function (n) {
      timer.clearTimeout(n);
    },
    clearInterval: function (n) {
      timer.clearInterval(n);
    }
  };
  return timerAPIs
}

/**
 * Call a new function body with some global objects.
 * @param  {object} globalObjects
 * @param  {string} code
 * @return {any}
 */
function callFunction (globalObjects, body) {
  var globalKeys = [];
  var globalValues = [];
  for (var key in globalObjects) {
    globalKeys.push(key);
    globalValues.push(globalObjects[key]);
  }
  globalKeys.push(body);

  var result = new (Function.prototype.bind.apply( Function, [ null ].concat( globalKeys) ));
  return result.apply(void 0, globalValues)
}

/**
 * Convert all type of values into "safe" format to send to native.
 * 1. A `function` will be converted into callback id.
 * 2. An `Element` object will be converted into `ref`.
 * The `instance` param is used to generate callback id and store
 * function if necessary.
 * @param  {any}    v
 * @param  {object} instance
 * @return {any}
 */
function normalize (v, instance) {
  var type = typof(v);

  switch (type) {
    case 'undefined':
    case 'null':
      return ''
    case 'regexp':
      return v.toString()
    case 'date':
      return v.toISOString()
    case 'number':
    case 'string':
    case 'boolean':
    case 'array':
    case 'object':
      if (v instanceof renderer.Element) {
        return v.ref
      }
      return v
    case 'function':
      instance.callbacks[++instance.callbackId] = v;
      return instance.callbackId.toString()
    default:
      return JSON.stringify(v)
  }
}

/**
 * Get the exact type of an object by `toString()`. For example call
 * `toString()` on an array will be returned `[object Array]`.
 * @param  {any}    v
 * @return {string}
 */
function typof (v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1).toLowerCase()
}

exports.Vue = Vue$2;
exports.init = init;
exports.reset = reset;
exports.createInstance = createInstance;
exports.destroyInstance = destroyInstance;
exports.refreshInstance = refreshInstance;
exports.getRoot = getRoot;
exports.receiveTasks = receiveTasks;
exports.registerModules = registerModules;
exports.registerComponents = registerComponents;
});

var index$2 = unwrapExports(index_1);
var registerComponents$1 = index_1.registerComponents;
var registerModules$1 = index_1.registerModules;
var receiveTasks$1 = index_1.receiveTasks;
var getRoot$1 = index_1.getRoot;
var refreshInstance$1 = index_1.refreshInstance;
var destroyInstance$1 = index_1.destroyInstance;
var createInstance$2 = index_1.createInstance;
var reset = index_1.reset;
var init$4 = index_1.init;
var Vue = index_1.Vue;

var Vue$1 = Object.freeze({
  default: index$2,
  __moduleExports: index_1,
  registerComponents: registerComponents$1,
  registerModules: registerModules$1,
  receiveTasks: receiveTasks$1,
  getRoot: getRoot$1,
  refreshInstance: refreshInstance$1,
  destroyInstance: destroyInstance$1,
  createInstance: createInstance$2,
  reset: reset,
  init: init$4,
  Vue: Vue
});

/**
 * @fileOverview The api for invoking with "$" prefix
 */

/**
 * @deprecated use $vm instead
 * find the vm by id
 * Note: there is only one id in whole component
 * @param  {string} id
 * @return {Vm}
 */
function $ (id) {
  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
  var info = this._ids[id];
  if (info) {
    return info.vm
  }
}

/**
 * find the element by id
 * Note: there is only one id in whole component
 * @param  {string} id
 * @return {Element}
 */
function $el (id) {
  var info = this._ids[id];
  if (info) {
    return info.el
  }
}

/**
 * find the vm of the custom component by id
 * Note: there is only one id in whole component
 * @param  {string} id
 * @return {Vm}
 */
function $vm (id) {
  var info = this._ids[id];
  if (info) {
    return info.vm
  }
}

/**
 * Fire when differ rendering finished
 *
 * @param  {Function} fn
 */
function $renderThen (fn) {
  var app = this._app;
  var differ = app.differ;
  return differ.then(function () {
    fn();
  })
}

/**
 * scroll an element specified by id into view,
 * moreover specify a number of offset optionally
 * @param  {string} id
 * @param  {number} offset
 */
function $scrollTo (id, offset) {
  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' +
          'please use "require(\'@weex-module/dom\')' +
          '.scrollTo(el, options)" instead');
  var el = this.$el(id);
  if (el) {
    var dom = this._app.requireModule('dom');
    dom.scrollToElement(el.ref, { offset: offset });
  }
}

/**
 * perform transition animation on an element specified by id
 * @param  {string}   id
 * @param  {object}   options
 * @param  {object}   options.styles
 * @param  {object}   options.duration(ms)
 * @param  {object}   [options.timingFunction]
 * @param  {object}   [options.delay=0(ms)]
 * @param  {Function} callback
 */
function $transition (id, options, callback) {
  var this$1 = this;

  var el = this.$el(id);
  if (el && options && options.styles) {
    var animation = this._app.requireModule('animation');
    animation.transition(el.ref, options, function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      this$1._setStyle(el, options.styles);
      callback && callback.apply(void 0, args);
    });
  }
}

/**
 * get some config
 * @return {object} some config for app instance
 * @property {string} bundleUrl
 * @property {boolean} debug
 * @property {object} env
 * @property {string} env.weexVersion(ex. 1.0.0)
 * @property {string} env.appName(ex. TB/TM)
 * @property {string} env.appVersion(ex. 5.0.0)
 * @property {string} env.platform(ex. iOS/Android)
 * @property {string} env.osVersion(ex. 7.0.0)
 * @property {string} env.deviceModel **native only**
 * @property {number} env.[deviceWidth=750]
 * @property {number} env.deviceHeight
 */
function $getConfig (callback) {
  var config = this._app.options;
  if (typeof callback === 'function') {
    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' +
      'this api now can directly RETURN config info.');
    callback(config);
  }
  return config
}

/**
 * @deprecated
 * request network via http protocol
 * @param  {object}   params
 * @param  {Function} callback
 */
function $sendHttp (params, callback) {
  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' +
          'please use "require(\'@weex-module/stream\')' +
          '.sendHttp(params, callback)" instead');
  var stream = this._app.requireModule('stream');
  stream.sendHttp(params, callback);
}

/**
 * @deprecated
 * open a url
 * @param  {string} url
 */
function $openURL (url) {
  console.warn('[JS Framework] Vm#$openURL is deprecated, ' +
          'please use "require(\'@weex-module/event\')' +
          '.openURL(url)" instead');
  var event = this._app.requireModule('event');
  event.openURL(url);
}

/**
 * @deprecated
 * set a title for page
 * @param  {string} title
 */
function $setTitle (title) {
  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' +
          'please use "require(\'@weex-module/pageInfo\')' +
          '.setTitle(title)" instead');
  var pageInfo = this._app.requireModule('pageInfo');
  pageInfo.setTitle(title);
}

/**
 * @deprecated use "require('@weex-module/moduleName') instead"
 * invoke a native method by specifing the name of module and method
 * @param  {string} moduleName
 * @param  {string} methodName
 * @param  {...*} the rest arguments
 */
function $call (moduleName, methodName) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  console.warn('[JS Framework] Vm#$call is deprecated, ' +
    'please use "require(\'@weex-module/moduleName\')" instead');
  var module = this._app.requireModule(moduleName);
  if (module && module[methodName]) {
    module[methodName].apply(module, args);
  }
}


var methods$1 = Object.freeze({
  $: $,
  $el: $el,
  $vm: $vm,
  $renderThen: $renderThen,
  $scrollTo: $scrollTo,
  $transition: $transition,
  $getConfig: $getConfig,
  $sendHttp: $sendHttp,
  $openURL: $openURL,
  $setTitle: $setTitle,
  $call: $call
});

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend (target) {
  var src = [], len = arguments.length - 1;
  while ( len-- > 0 ) src[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (typeof Object.assign === 'function') {
    Object.assign.apply(Object, [ target ].concat( src ));
  }
  else {
    var first = src.shift();
    for (var key in first) {
      target[key] = first[key];
    }
    if (src.length) {
      extend.apply(void 0, [ target ].concat( src ));
    }
  }
  return target
}

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def$1 (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Remove an item from an array
 *
 * @param {Array} arr
 * @param {*} item
 */

function remove$1 (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty$1.call(obj, key)
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject$4 (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString$2 = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

// can we use __proto__?
var hasProto = '__proto__' in {};

var _Set;
/* istanbul ignore next */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
}
else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined
  };
  _Set.prototype.add = function (key) {
    if (key == null || this.set[key]) {
      return
    }
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

/**
 * Polyfill in iOS7 by native because the JavaScript polyfill has memory problem.
 * @return {object}
 */

function createNewSet () {
  /* istanbul ignore next */
  /* eslint-disable */
  if (typeof nativeSet === 'object') {
    return nativeSet.create()
  }
  /* eslint-enable */
  return new _Set()
}

/**
 * Create a cached version of a pure function.
 *
 * @param {Function} fn
 * @return {Function}
 */







function typof (v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1).toLowerCase()
}

// weex name rules

var WEEX_COMPONENT_REG = /^@weex-component\//;
var WEEX_MODULE_REG = /^@weex-module\//;
var NORMAL_MODULE_REG = /^\.{1,2}\//;
var JS_SURFIX_REG = /\.js$/;

var isWeexComponent = function (name) { return !!name.match(WEEX_COMPONENT_REG); };
var isWeexModule = function (name) { return !!name.match(WEEX_MODULE_REG); };
var isNormalModule = function (name) { return !!name.match(NORMAL_MODULE_REG); };
var isNpmModule = function (name) { return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name); };

function removeWeexPrefix (str) {
  var result = str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
  return result
}

function removeJSSurfix (str) {
  return str.replace(JS_SURFIX_REG, '')
}

/* eslint-disable */

var uid$2 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */

function Dep () {
  this.id = uid$2++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

function resetTarget () {
  Dep.target = null;
  targetStack = [];
}

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  remove$1(this.subs, sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

/* eslint-disable */

// import { pushWatcher } from './batcher'
var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */

function Watcher (vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = createNewSet(); // new Set()
  this.newDepIds = createNewSet(); // new Set()
  // parse expression for getter
  if (isFn) {
    this.getter = expOrFn;
  }
  this.value = this.lazy
    ? undefined
    : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.cleanupDeps = function () {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else {
    this.run();
  }
  // } else if (this.sync) {
  //   this.run()
  // } else {
  //   // if queued, only overwrite shallow with non-shallow,
  //   // but not the other way around.
  //   this.shallow = this.queued
  //     ? shallow
  //       ? this.shallow
  //       : false
  //     : !!shallow
  //   this.queued = true
  //   pushWatcher(this)
  // }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated; but only do so if this is a
      // non-shallow update (caused by a vm digest).
      ((isObject$4(value) || this.deep) && !this.shallow)
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      this.cb.call(this.vm, value, oldValue);
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove$1(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 * @param {Set} seen
 */

var seenObjects = createNewSet(); // new Set()
/* istanbul ignore next */
function traverse (val, seen) {
  var i, keys, isA, isO;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  isA = Array.isArray(val);
  isO = isObject$4(val);
  if (isA || isO) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) { traverse(val[i], seen); }
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { traverse(val[keys[i]], seen); }
    }
  }
}

/* eslint-disable */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def$1(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def$1(
  arrayProto,
  '$set',
  function $set (index, val) {
    if (index >= this.length) {
      this.length = index + 1;
    }
    return this.splice(index, 1, val)[0]
  }
);

/**
 * Convenience method to remove the element at given index.
 *
 * @param {Number} index
 * @param {*} val
 */

def$1(
  arrayProto,
  '$remove',
  function $remove (index) {
    /* istanbul ignore if */
    if (!this.length) { return }
    /* istanbul ignore else */
    if (typeof index !== 'number') {
      index = this.indexOf(index);
    }
    /* istanbul ignore else */
    if (index > -1) {
      this.splice(index, 1);
    }
  }
);

/* eslint-disable */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer$1 (value) {
  this.value = value;
  this.dep = new Dep();
  def$1(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer$1.prototype.walk = function (obj) {
  var this$1 = this;

  for (var key in obj) {
    this$1.convert(key, obj[key]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer$1.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer$1.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer$1.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

/* istanbul ignore next */
Observer$1.prototype.removeVm = function (vm) {
  remove$1(this.vms, vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def$1(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe (value, vm) {
  if (!isObject$4(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer$1) {
    ob = value.__ob__;
  } else if (
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer$1(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive (obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @public
 */

/* istanbul ignore next */
function set$1 (obj, key, val) {
  if (Array.isArray(obj)) {
    return obj.splice(key, 1, val)
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  if (obj._isVue) {
    set$1(obj._data, key, val);
    return
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      proxy(vm, key);
      // vm.$forceUpdate()
    }
  }
  return val
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

/* istanbul ignore next */
function del (obj, key) {
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  var ob = obj.__ob__;

  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      // obj.$forceUpdate()
    }
    return
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      unproxy(vm, key);
      // vm.$forceUpdate()
    }
  }
}

var KEY_WORDS = ['$index', '$value', '$event'];
function proxy (vm, key) {
  if (KEY_WORDS.indexOf(key) > -1 || !isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/* istanbul ignore next */
function unproxy (vm, key) {
  if (!isReserved(key)) {
    delete vm[key];
  }
}

/* eslint-disable */

function initState (vm) {
  vm._watchers = [];
  initData(vm);
  initComputed(vm);
  initMethods(vm);
}

function initData (vm) {
  var data = vm._data;

  if (!isPlainObject(data)) {
    data = {};
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var i = keys.length;
  while (i--) {
    proxy(vm, keys[i]);
  }
  // observe data
  observe(data, vm);
}

/* istanbul ignore next */
function noop () {
}

function initComputed (vm) {
  var computed = vm._computed;
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key];
      var def$$1 = {
        enumerable: true,
        configurable: true
      };
      if (typeof userDef === 'function') {
        def$$1.get = makeComputedGetter(userDef, vm);
        def$$1.set = noop;
      } else {
        def$$1.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind(userDef.get, vm)
          : noop;
        def$$1.set = userDef.set
          ? bind(userDef.set, vm)
          : noop;
      }
      Object.defineProperty(vm, key, def$$1);
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, null, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm._methods;
  if (methods) {
    for (var key in methods) {
      vm[key] = methods[key];
    }
  }
}

// @todo: It should be registered by native from `registerComponents()`.
var config$4 = {
  nativeComponentMap: {
    text: true,
    image: true,
    container: true,
    slider: {
      type: 'slider',
      append: 'tree'
    },
    cell: {
      type: 'cell',
      append: 'tree'
    }
  }
};

/**
 * @fileOverview
 * Directive Parser
 */

var nativeComponentMap = config$4.nativeComponentMap;

var SETTERS = {
  attr: 'setAttr',
  style: 'setStyle',
  event: 'addEvent'
};

/**
 * apply the native component's options(specified by template.type)
 * to the template
 */
function applyNaitveComponentOptions (template) {
  var type = template.type;
  var options = nativeComponentMap[type];

  if (typeof options === 'object') {
    for (var key in options) {
      if (template[key] == null) {
        template[key] = options[key];
      }
      else if (typof(template[key]) === 'object' &&
        typof(options[key]) === 'object') {
        for (var subkey in options[key]) {
          if (template[key][subkey] == null) {
            template[key][subkey] = options[key][subkey];
          }
        }
      }
    }
  }
}

/**
 * bind all id, attr, classnames, style, events to an element
 */
function bindElement (vm, el, template) {
  setId(vm, el, template.id, vm);
  setAttr$1(vm, el, template.attr);
  setClass(vm, el, template.classList);
  setStyle$1(vm, el, template.style);
  bindEvents(vm, el, template.events);
}

/**
 * bind all props to sub vm and bind all style, events to the root element
 * of the sub vm if it doesn't have a replaced multi-node fragment
 */
function bindSubVm (vm, subVm, template, repeatItem) {
  subVm = subVm || {};
  template = template || {};

  var options = subVm._options || {};

  // bind props
  var props = options.props;

  if (Array.isArray(props)) {
    props = props.reduce(function (result, value) {
      result[value] = true;
      return result
    }, {});
  }

  mergeProps(repeatItem, props, vm, subVm);
  mergeProps(template.attr, props, vm, subVm);
}

/**
 * merge class and styles from vm to sub vm.
 */
function bindSubVmAfterInitialized (vm, subVm, template, target) {
  if ( target === void 0 ) target = {};

  mergeClassStyle(template.classList, vm, subVm);
  mergeStyle(template.style, vm, subVm);

  // bind subVm to the target element
  if (target.children) {
    target.children[target.children.length - 1]._vm = subVm;
  }
  else {
    target._vm = subVm;
  }
}

/**
 * Bind props from vm to sub vm and watch their updates.
 */
function mergeProps (target, props, vm, subVm) {
  if (!target) {
    return
  }
  var loop = function ( key ) {
    if (!props || props[key]) {
      var value = target[key];
      if (typeof value === 'function') {
        var returnValue = watch(vm, value, function (v) {
          subVm[key] = v;
        });
        subVm[key] = returnValue;
      }
      else {
        subVm[key] = value;
      }
    }
  };

  for (var key in target) loop( key );
}

/**
 * Bind style from vm to sub vm and watch their updates.
 */
function mergeStyle (target, vm, subVm) {
  var loop = function ( key ) {
    var value = target[key];
    if (typeof value === 'function') {
      var returnValue = watch(vm, value, function (v) {
        if (subVm._rootEl) {
          subVm._rootEl.setStyle(key, v);
        }
      });
      subVm._rootEl.setStyle(key, returnValue);
    }
    else {
      if (subVm._rootEl) {
        subVm._rootEl.setStyle(key, value);
      }
    }
  };

  for (var key in target) loop( key );
}

/**
 * Bind class & style from vm to sub vm and watch their updates.
 */
function mergeClassStyle (target, vm, subVm) {
  var css = vm._options && vm._options.style || {};

  /* istanbul ignore if */
  if (!subVm._rootEl) {
    return
  }

  var className = '@originalRootEl';
  css[className] = subVm._rootEl.classStyle;

  function addClassName (list, name) {
    if (typof(list) === 'array') {
      list.unshift(name);
    }
  }

  if (typeof target === 'function') {
    var value = watch(vm, target, function (v) {
      addClassName(v, className);
      setClassStyle$1(subVm._rootEl, css, v);
    });
    addClassName(value, className);
    setClassStyle$1(subVm._rootEl, css, value);
  }
  else if (target != null) {
    addClassName(target, className);
    setClassStyle$1(subVm._rootEl, css, target);
  }
}

/**
 * bind id to an element
 * each id is unique in a whole vm
 */
function setId (vm, el, id, target) {
  var map = Object.create(null);

  Object.defineProperties(map, {
    vm: {
      value: target,
      writable: false,
      configurable: false
    },
    el: {
      get: function () { return el || target._rootEl; },
      configurable: false
    }
  });

  if (typeof id === 'function') {
    var handler = id;
    id = handler.call(vm);
    if (id || id === 0) {
      vm._ids[id] = map;
    }
    watch(vm, handler, function (newId) {
      if (newId) {
        vm._ids[newId] = map;
      }
    });
  }
  else if (id && typeof id === 'string') {
    vm._ids[id] = map;
  }
}

/**
 * bind attr to an element
 */
function setAttr$1 (vm, el, attr) {
  bindDir(vm, el, 'attr', attr);
}

function setClassStyle$1 (el, css, classList) {
  var classStyle = {};
  var length = classList.length;

  var loop = function ( i ) {
    var style = css[classList[i]];
    if (style) {
      Object.keys(style).forEach(function (key) {
        classStyle[key] = style[key];
      });
    }
  };

  for (var i = 0; i < length; i++) loop( i );
  el.setClassStyle(classStyle);
}

/**
 * bind classnames to an element
 */
function setClass (vm, el, classList) {
  if (typeof classList !== 'function' && !Array.isArray(classList)) {
    return
  }
  if (Array.isArray(classList) && !classList.length) {
    el.setClassStyle({});
    return
  }

  var style = vm._options && vm._options.style || {};
  if (typeof classList === 'function') {
    var value = watch(vm, classList, function (v) {
      setClassStyle$1(el, style, v);
    });
    setClassStyle$1(el, style, value);
  }
  else {
    setClassStyle$1(el, style, classList);
  }
}

/**
 * bind style to an element
 */
function setStyle$1 (vm, el, style) {
  bindDir(vm, el, 'style', style);
}

/**
 * add an event type and handler to an element and generate a dom update
 */
function setEvent (vm, el, type, handler) {
  el.addEvent(type, bind(handler, vm));
}

/**
 * add all events of an element
 */
function bindEvents (vm, el, events) {
  if (!events) {
    return
  }
  var keys = Object.keys(events);
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    var handler = events[key];
    if (typeof handler === 'string') {
      handler = vm[handler];
      /* istanbul ignore if */
      if (!handler) {
        console.warn(("[JS Framework] The event handler \"" + handler + "\" is not defined."));
      }
    }
    setEvent(vm, el, key, handler);
  }
}

/**
 * set a series of members as a kind of an element
 * for example: style, attr, ...
 * if the value is a function then bind the data changes
 */
function bindDir (vm, el, name, data) {
  if (!data) {
    return
  }
  var keys = Object.keys(data);
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    var value = data[key];
    if (typeof value === 'function') {
      bindKey(vm, el, name, key, value);
    }
    else {
      el[SETTERS[name]](key, value);
    }
  }
}

/**
 * bind data changes to a certain key to a name series in an element
 */
function bindKey (vm, el, name, key, calc) {
  var methodName = SETTERS[name];
  // watch the calc, and returns a value by calc.call()
  var value = watch(vm, calc, function (value) {
    function handler () {
      el[methodName](key, value);
    }
    var differ = vm && vm._app && vm._app.differ;
    if (differ) {
      differ.append('element', el.depth, el.ref, handler);
    }
    else {
      handler();
    }
  });

  el[methodName](key, value);
}

/**
 * watch a calc function and callback if the calc value changes
 */
function watch (vm, calc, callback) {
  if (vm._static) {
    return calc.call(vm, vm)
  }
  var watcher = new Watcher(vm, calc, function (value, oldValue) {
    /* istanbul ignore if */
    if (typeof value !== 'object' && value === oldValue) {
      return
    }
    callback(value);
  });

  return watcher.value
}

/**
 * @fileOverview Document & Element Helpers.
 *
 * required:
 * Document#: createElement, createComment, getRef
 * Element#: appendChild, insertBefore, removeChild, nextSibling
 */

/**
 * Create a body by type
 * Using this._app.doc
 *
 * @param  {string} type
 */
function createBody$1 (vm, type) {
  var doc = vm._app.doc;
  return doc.createBody(type)
}

/**
 * Create an element by type
 * Using this._app.doc
 *
 * @param  {string} type
 */
function createElement$1 (vm, type) {
  var doc = vm._app.doc;
  return doc.createElement(type)
}

/**
 * Create and return a frag block for an element.
 * The frag block has a starter, ender and the element itself.
 *
 * @param  {object} element
 */
function createBlock (vm, element) {
  var start = createBlockStart(vm);
  var end = createBlockEnd(vm);
  var blockId = lastestBlockId++;
  if (element.element) {
    var updateMark = element.updateMark;
    if (updateMark) {
      if (updateMark.element) {
        updateMark = updateMark.end;
      }
      element.element.insertAfter(end, updateMark);
      element.element.insertAfter(start, updateMark);
      element.updateMark = end;
    }
    else {
      element.element.insertBefore(start, element.end);
      element.element.insertBefore(end, element.end);
    }
    element = element.element;
  }
  else {
    element.appendChild(start);
    element.appendChild(end);
  }
  return { start: start, end: end, element: element, blockId: blockId }
}

var lastestBlockId = 1;

/**
 * Create and return a block starter.
 * Using this._app.doc
 */
function createBlockStart (vm) {
  var doc = vm._app.doc;
  var anchor = doc.createComment('start');
  return anchor
}

/**
 * Create and return a block ender.
 * Using this._app.doc
 */
function createBlockEnd (vm) {
  var doc = vm._app.doc;
  var anchor = doc.createComment('end');
  return anchor
}

/**
 * Attach target to a certain dest using appendChild by default.
 * If the dest is a frag block then insert before the ender.
 * If the target is a frag block then attach the starter and ender in order.
 *
 * @param  {object} target
 * @param  {object} dest
 */
function attachTarget (vm, target, dest) {
  if (dest.element) {
    var before = dest.end;
    var after = dest.updateMark;
    // push new target for watch list update later
    if (dest.children) {
      dest.children.push(target);
    }
    // for check repeat case
    if (after) {
      var signal = moveTarget(vm, target, after);
      dest.updateMark = target.element ? target.end : target;
      return signal
    }
    else if (target.element) {
      dest.element.insertBefore(target.start, before);
      dest.element.insertBefore(target.end, before);
    }
    else {
      return dest.element.insertBefore(target, before)
    }
  }
  else {
    if (target.element) {
      dest.appendChild(target.start);
      dest.appendChild(target.end);
    }
    else {
      return dest.appendChild(target)
    }
  }
}

/**
 * Move target before a certain element. The target maybe block or element.
 *
 * @param  {object} target
 * @param  {object} before
 */
function moveTarget (vm, target, after) {
  if (target.element) {
    return moveBlock(target, after)
  }
  return moveElement$1(target, after)
}

/**
 * Move element before a certain element.
 *
 * @param  {object} element
 * @param  {object} before
 */
function moveElement$1 (element, after) {
  var parent = after.parentNode;
  if (parent) {
    return parent.insertAfter(element, after)
  }
}

/**
 * Move all elements of the block before a certain element.
 *
 * @param  {object} fragBlock
 * @param  {object} before
 */
function moveBlock (fragBlock, after) {
  var parent = after.parentNode;

  if (parent) {
    var el = fragBlock.start;
    var signal;
    var group = [el];

    while (el && el !== fragBlock.end) {
      el = el.nextSibling;
      group.push(el);
    }

    var temp = after;
    group.every(function (el) {
      signal = parent.insertAfter(el, temp);
      temp = el;
      return signal !== -1
    });

    return signal
  }
}

/**
 * Remove target from DOM tree.
 * If the target is a frag block then call _removeBlock
 *
 * @param  {object} target
 */
function removeTarget (vm, target, preserveBlock) {
  if ( preserveBlock === void 0 ) preserveBlock = false;

  if (target.element) {
    removeBlock(target, preserveBlock);
  }
  else {
    removeElement$1(target);
  }
  if (target._vm) {
    target._vm.$emit('hook:destroyed');
  }
}

/**
 * Remove a certain element.
 * Using this._app.doc
 *
 * @param  {object} target
 */
function removeElement$1 (target) {
  var parent = target.parentNode;

  if (parent) {
    parent.removeChild(target);
  }
}

/**
 * Remove a frag block.
 * The second param decides whether the block self should be removed too.
 *
 * @param  {object}  fragBlock
 * @param  {Boolean} preserveBlock=false
 */
function removeBlock (fragBlock, preserveBlock) {
  if ( preserveBlock === void 0 ) preserveBlock = false;

  var result = [];
  var el = fragBlock.start.nextSibling;

  while (el && el !== fragBlock.end) {
    result.push(el);
    el = el.nextSibling;
  }

  if (!preserveBlock) {
    removeElement$1(fragBlock.start);
  }
  result.forEach(function (el) {
    removeElement$1(el);
  });
  if (!preserveBlock) {
    removeElement$1(fragBlock.end);
  }
}

/**
 * @fileOverview
 * ViewModel template parser & data-binding process
 */

/**
 * build()
 *   compile(template, parentNode)
 *     if (type is content) create contentNode
 *     else if (dirs have v-for) foreach -> create context
 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
 *     else if (dirs have v-if) assert
 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
 *     else if (type is dynamic)
 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
 *     else if (type is custom)
 *       addChildVm(vm, parentVm)
 *       build(externalDirs)
 *       foreach childNodes -> compile(childNode, template)
 *     else if (type is native)
 *       set(dirs): update(id/attr/style/class) onchange
 *       append(template, parentNode)
 *       foreach childNodes -> compile(childNode, template)
 */
function build (vm) {
  var opt = vm._options || {};
  var template = opt.template || {};

  if (opt.replace) {
    if (template.children && template.children.length === 1) {
      compile(vm, template.children[0], vm._parentEl);
    }
    else {
      compile(vm, template.children, vm._parentEl);
    }
  }
  else {
    compile(vm, template, vm._parentEl);
  }

  console.debug(("[JS Framework] \"ready\" lifecycle in Vm(" + (vm._type) + ")"));
  vm.$emit('hook:ready');
  vm._ready = true;
}

/**
 * Generate elements by child or children and append to parent elements.
 * Root element info would be merged if has. The first argument may be an array
 * if the root element with options.replace has not only one child.
 *
 * @param {object|array} target
 * @param {object}       dest
 * @param {object}       meta
 */
function compile (vm, target, dest, meta) {
  var app = vm._app || {};

  if (app.lastSignal === -1) {
    return
  }

  if (target.attr && target.attr.hasOwnProperty('static')) {
    vm._static = true;
  }

  if (targetIsFragment(target)) {
    compileFragment(vm, target, dest, meta);
    return
  }
  meta = meta || {};
  if (targetIsContent(target)) {
    console.debug('[JS Framework] compile "content" block by', target);
    vm._content = createBlock(vm, dest);
    return
  }

  if (targetNeedCheckRepeat(target, meta)) {
    console.debug('[JS Framework] compile "repeat" logic by', target);
    if (dest.type === 'document') {
      console.warn('[JS Framework] The root element does\'t support `repeat` directive!');
    }
    else {
      compileRepeat(vm, target, dest);
    }
    return
  }
  if (targetNeedCheckShown(target, meta)) {
    console.debug('[JS Framework] compile "if" logic by', target);
    if (dest.type === 'document') {
      console.warn('[JS Framework] The root element does\'t support `if` directive!');
    }
    else {
      compileShown(vm, target, dest, meta);
    }
    return
  }
  var typeGetter = meta.type || target.type;
  if (targetNeedCheckType(typeGetter, meta)) {
    compileType(vm, target, dest, typeGetter, meta);
    return
  }
  var type = typeGetter;
  var component = targetIsComposed(vm, target, type);
  if (component) {
    console.debug('[JS Framework] compile composed component by', target);
    compileCustomComponent(vm, component, target, dest, type, meta);
    return
  }
  console.debug('[JS Framework] compile native component by', target);
  compileNativeComponent(vm, target, dest, type);
}

/**
 * Check if target is a fragment (an array).
 *
 * @param  {object}  target
 * @return {boolean}
 */
function targetIsFragment (target) {
  return Array.isArray(target)
}

/**
 * Check if target type is content/slot.
 *
 * @param  {object}  target
 * @return {boolean}
 */
function targetIsContent (target) {
  return target.type === 'content' || target.type === 'slot'
}

/**
 * Check if target need to compile by a list.
 *
 * @param  {object}  target
 * @param  {object}  meta
 * @return {boolean}
 */
function targetNeedCheckRepeat (target, meta) {
  return !meta.hasOwnProperty('repeat') && target.repeat
}

/**
 * Check if target need to compile by a boolean value.
 *
 * @param  {object}  target
 * @param  {object}  meta
 * @return {boolean}
 */
function targetNeedCheckShown (target, meta) {
  return !meta.hasOwnProperty('shown') && target.shown
}

/**
 * Check if target need to compile by a dynamic type.
 *
 * @param  {string|function} typeGetter
 * @param  {object}          meta
 * @return {boolean}
 */
function targetNeedCheckType (typeGetter, meta) {
  return (typeof typeGetter === 'function') && !meta.hasOwnProperty('type')
}

/**
 * Check if this kind of component is composed.
 *
 * @param  {string}  type
 * @return {boolean}
 */
function targetIsComposed (vm, target, type) {
  var component;
  if (vm._app && vm._app.customComponentMap) {
    component = vm._app.customComponentMap[type];
  }
  if (vm._options && vm._options.components) {
    component = vm._options.components[type];
  }
  if (target.component) {
    component = component || {};
  }
  return component
}

/**
 * Compile a list of targets.
 *
 * @param {object} target
 * @param {object} dest
 * @param {object} meta
 */
function compileFragment (vm, target, dest, meta) {
  var fragBlock = createBlock(vm, dest);
  target.forEach(function (child) {
    compile(vm, child, fragBlock, meta);
  });
}

/**
 * Compile a target with repeat directive.
 *
 * @param {object} target
 * @param {object} dest
 */
function compileRepeat (vm, target, dest) {
  var repeat = target.repeat;
  var oldStyle = typeof repeat === 'function';
  var getter = repeat.getter || repeat.expression || repeat;
  if (typeof getter !== 'function') {
    getter = function () { return [] };
  }
  var key = repeat.key || '$index';
  var value = repeat.value || '$value';
  var trackBy = repeat.trackBy || target.trackBy ||
    (target.attr && target.attr.trackBy);

  var fragBlock = createBlock(vm, dest);
  fragBlock.children = [];
  fragBlock.data = [];
  fragBlock.vms = [];

  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
}

/**
 * Compile a target with if directive.
 *
 * @param {object} target
 * @param {object} dest
 * @param {object} meta
 */
function compileShown (vm, target, dest, meta) {
  var newMeta = { shown: true };
  var fragBlock = createBlock(vm, dest);

  if (dest.element && dest.children) {
    dest.children.push(fragBlock);
  }

  if (meta.repeat) {
    newMeta.repeat = meta.repeat;
  }

  bindShown(vm, target, fragBlock, newMeta);
}

/**
 * Compile a target with dynamic component type.
 *
 * @param {object}   target
 * @param {object}   dest
 * @param {function} typeGetter
 */
function compileType (vm, target, dest, typeGetter, meta) {
  var type = typeGetter.call(vm);
  var newMeta = extend({ type: type }, meta);
  var fragBlock = createBlock(vm, dest);

  if (dest.element && dest.children) {
    dest.children.push(fragBlock);
  }

  watch(vm, typeGetter, function (value) {
    var newMeta = extend({ type: value }, meta);
    removeTarget(vm, fragBlock, true);
    compile(vm, target, fragBlock, newMeta);
  });

  compile(vm, target, fragBlock, newMeta);
}

/**
 * Compile a composed component.
 *
 * @param {object} target
 * @param {object} dest
 * @param {string} type
 */
function compileCustomComponent (vm, component, target, dest, type, meta) {
  var Ctor = vm.constructor;
  var subVm = new Ctor(type, component, vm, dest, undefined, {
    'hook:init': function () {
      if (vm._static) {
        this._static = vm._static;
      }
      setId(vm, null, target.id, this);
      // bind template earlier because of lifecycle issues
      this._externalBinding = {
        parent: vm,
        template: target
      };
    },
    'hook:created': function () {
      bindSubVm(vm, this, target, meta.repeat);
    },
    'hook:ready': function () {
      if (this._content) {
        compileChildren(vm, target, this._content);
      }
    }
  });
  bindSubVmAfterInitialized(vm, subVm, target, dest);
}

/**
 * Generate element from template and attach to the dest if needed.
 * The time to attach depends on whether the mode status is node or tree.
 *
 * @param {object} template
 * @param {object} dest
 * @param {string} type
 */
function compileNativeComponent (vm, template, dest, type) {
  applyNaitveComponentOptions(template);

  var element;
  if (dest.ref === '_documentElement') {
    // if its parent is documentElement then it's a body
    console.debug(("[JS Framework] compile to create body for " + type));
    element = createBody$1(vm, type);
  }
  else {
    console.debug(("[JS Framework] compile to create element for " + type));
    element = createElement$1(vm, type);
  }

  if (!vm._rootEl) {
    vm._rootEl = element;
    // bind event earlier because of lifecycle issues
    var binding = vm._externalBinding || {};
    var target = binding.template;
    var parentVm = binding.parent;
    if (target && target.events && parentVm && element) {
      for (var type$1 in target.events) {
        var handler = parentVm[target.events[type$1]];
        if (handler) {
          element.addEvent(type$1, bind(handler, parentVm));
        }
      }
    }
  }

  bindElement(vm, element, template);

  if (template.attr && template.attr.append) { // backward, append prop in attr
    template.append = template.attr.append;
  }

  if (template.append) { // give the append attribute for ios adaptation
    element.attr = element.attr || {};
    element.attr.append = template.append;
  }

  var treeMode = template.append === 'tree';
  var app = vm._app || {};
  if (app.lastSignal !== -1 && !treeMode) {
    console.debug('[JS Framework] compile to append single node for', element);
    app.lastSignal = attachTarget(vm, element, dest);
  }
  if (app.lastSignal !== -1) {
    compileChildren(vm, template, element);
  }
  if (app.lastSignal !== -1 && treeMode) {
    console.debug('[JS Framework] compile to append whole tree for', element);
    app.lastSignal = attachTarget(vm, element, dest);
  }
}

/**
 * Set all children to a certain parent element.
 *
 * @param {object} template
 * @param {object} dest
 */
function compileChildren (vm, template, dest) {
  var app = vm._app || {};
  var children = template.children;
  if (children && children.length) {
    children.every(function (child) {
      compile(vm, child, dest);
      return app.lastSignal !== -1
    });
  }
}

/**
 * Watch the list update and refresh the changes.
 *
 * @param {object} target
 * @param {object} fragBlock {vms, data, children}
 * @param {object} info      {getter, key, value, trackBy, oldStyle}
 */
function bindRepeat (vm, target, fragBlock, info) {
  var vms = fragBlock.vms;
  var children = fragBlock.children;
  var getter = info.getter;
  var trackBy = info.trackBy;
  var oldStyle = info.oldStyle;
  var keyName = info.key;
  var valueName = info.value;

  function compileItem (item, index, context) {
    var mergedData;
    if (oldStyle) {
      mergedData = item;
      if (isObject$4(item)) {
        mergedData[keyName] = index;
        if (!mergedData.hasOwnProperty('INDEX')) {
          Object.defineProperty(mergedData, 'INDEX', {
            value: function () {
              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' +
                'please use "$index" instead');
            }
          });
        }
      }
      else {
        console.warn('[JS Framework] Each list item must be an object in old-style repeat, '
          + 'please use `repeat={{v in list}}` instead.');
        mergedData = {};
        mergedData[keyName] = index;
        mergedData[valueName] = item;
      }
    }
    else {
      mergedData = {};
      mergedData[keyName] = index;
      mergedData[valueName] = item;
    }
    var newContext = mergeContext(context, mergedData);
    vms.push(newContext);
    compile(newContext, target, fragBlock, { repeat: item });
  }

  var list = watchBlock(vm, fragBlock, getter, 'repeat',
    function (data) {
      console.debug('[JS Framework] the "repeat" item has changed', data);
      if (!fragBlock || !data) {
        return
      }

      var oldChildren = children.slice();
      var oldVms = vms.slice();
      var oldData = fragBlock.data.slice();
      // 1. collect all new refs track by
      var trackMap = {};
      var reusedMap = {};
      data.forEach(function (item, index) {
        var key = trackBy ? item[trackBy] : (oldStyle ? item[keyName] : index);
        /* istanbul ignore if */
        if (key == null || key === '') {
          return
        }
        trackMap[key] = item;
      });

      // 2. remove unused element foreach old item
      var reusedList = [];
      oldData.forEach(function (item, index) {
        var key = trackBy ? item[trackBy] : (oldStyle ? item[keyName] : index);
        if (trackMap.hasOwnProperty(key)) {
          reusedMap[key] = {
            item: item, index: index, key: key,
            target: oldChildren[index],
            vm: oldVms[index]
          };
          reusedList.push(item);
        }
        else {
          removeTarget(vm, oldChildren[index]);
        }
      });

      // 3. create new element foreach new item
      children.length = 0;
      vms.length = 0;
      fragBlock.data = data.slice();
      fragBlock.updateMark = fragBlock.start;

      data.forEach(function (item, index) {
        var key = trackBy ? item[trackBy] : (oldStyle ? item[keyName] : index);
        var reused = reusedMap[key];
        if (reused) {
          if (reused.item === reusedList[0]) {
            reusedList.shift();
          }
          else {
            reusedList.$remove(reused.item);
            moveTarget(vm, reused.target, fragBlock.updateMark, true);
          }
          children.push(reused.target);
          vms.push(reused.vm);
          if (oldStyle) {
            reused.vm = item;
          }
          else {
            reused.vm[valueName] = item;
          }
          reused.vm[keyName] = index;
          fragBlock.updateMark = reused.target;
        }
        else {
          compileItem(item, index, vm);
        }
      });

      delete fragBlock.updateMark;
    }
  );

  fragBlock.data = list.slice(0);
  list.forEach(function (item, index) {
    compileItem(item, index, vm);
  });
}

/**
 * Watch the display update and add/remove the element.
 *
 * @param  {object} target
 * @param  {object} fragBlock
 * @param  {object} context
 */
function bindShown (vm, target, fragBlock, meta) {
  var display = watchBlock(vm, fragBlock, target.shown, 'shown',
    function (display) {
      console.debug('[JS Framework] the "if" item was changed', display);

      if (!fragBlock || !!fragBlock.display === !!display) {
        return
      }
      fragBlock.display = !!display;
      if (display) {
        compile(vm, target, fragBlock, meta);
      }
      else {
        removeTarget(vm, fragBlock, true);
      }
    }
  );

  fragBlock.display = !!display;
  if (display) {
    compile(vm, target, fragBlock, meta);
  }
}

/**
 * Watch calc value changes and append certain type action to differ.
 * It is used for if or repeat data-binding generator.
 *
 * @param  {object}   fragBlock
 * @param  {function} calc
 * @param  {string}   type
 * @param  {function} handler
 * @return {any}      init value of calc
 */
function watchBlock (vm, fragBlock, calc, type, handler) {
  var differ = vm && vm._app && vm._app.differ;
  var config = {};
  var depth = (fragBlock.element.depth || 0) + 1;

  return watch(vm, calc, function (value) {
    config.latestValue = value;
    if (differ && !config.recorded) {
      differ.append(type, depth, fragBlock.blockId, function () {
        var latestValue = config.latestValue;
        handler(latestValue);
        config.recorded = false;
        config.latestValue = undefined;
      });
    }
    config.recorded = true;
  })
}

/**
 * Clone a context and merge certain data.
 *
 * @param  {object} mergedData
 * @return {object}
 */
function mergeContext (context, mergedData) {
  var newContext = Object.create(context);
  newContext._data = mergedData;
  initData(newContext);
  initComputed(newContext);
  newContext._realParent = context;
  if (context._static) {
    newContext._static = context._static;
  }
  return newContext
}

/**
 * @fileOverview
 * Everything about component event which includes event object, event listener,
 * event emitter and lifecycle hooks.
 */

/**
 * Event object definition. An event object has `type`, `timestamp` and
 * `detail` from which a component emit. The event object could be dispatched to
 * parents or broadcasted to children except `this.stop()` is called.
 * @param {string} type
 * @param {any}    detail
 */
function Evt (type, detail) {
  if (detail instanceof Evt) {
    return detail
  }

  this.timestamp = Date.now();
  this.detail = detail;
  this.type = type;

  var shouldStop = false;

  /**
   * stop dispatch and broadcast
   */
  this.stop = function () {
    shouldStop = true;
  };

  /**
   * check if it can't be dispatched or broadcasted
   */
  this.hasStopped = function () {
    return shouldStop
  };
}

/**
 * Emit an event but not broadcast down or dispatch up.
 * @param  {string} type
 * @param  {any}    detail
 */
function $emit (type, detail) {
  var this$1 = this;

  var events = this._vmEvents;
  var handlerList = events[type];
  if (handlerList) {
    var evt = new Evt(type, detail);
    handlerList.forEach(function (handler) {
      handler.call(this$1, evt);
    });
  }
}

/**
 * Emit an event and dispatch it up.
 * @param  {string} type
 * @param  {any}    detail
 */
function $dispatch (type, detail) {
  var evt = new Evt(type, detail);
  this.$emit(type, evt);

  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
    this._parent.$dispatch(type, evt);
  }
}

/**
 * Emit an event and broadcast it down.
 * @param  {string} type
 * @param  {any}    detail
 */
function $broadcast (type, detail) {
  var evt = new Evt(type, detail);
  this.$emit(type, evt);

  if (!evt.hasStopped() && this._childrenVms) {
    this._childrenVms.forEach(function (subVm) {
      subVm.$broadcast(type, evt);
    });
  }
}

/**
 * Add event listener.
 * @param  {string}   type
 * @param  {function} handler
 */
function $on (type, handler) {
  if (!type || typeof handler !== 'function') {
    return
  }
  var events = this._vmEvents;
  var handlerList = events[type] || [];
  handlerList.push(handler);
  events[type] = handlerList;

  // fixed old version lifecycle design
  /* istanbul ignore if */
  if (type === 'hook:ready' && this._ready) {
    this.$emit('hook:ready');
  }
}

/**
 * Remove event listener.
 * @param  {string}   type
 * @param  {function} handler
 */
function $off (type, handler) {
  if (!type) {
    return
  }
  var events = this._vmEvents;
  if (!handler) {
    delete events[type];
    return
  }
  var handlerList = events[type];
  if (!handlerList) {
    return
  }
  handlerList.$remove(handler);
}

var LIFE_CYCLE_TYPES = ['init', 'created', 'ready', 'destroyed'];

/**
 * Init events:
 * 1. listen `events` in component options & `externalEvents`.
 * 2. bind lifecycle hooks.
 * @param  {Vm}     vm
 * @param  {object} externalEvents
 */
function initEvents (vm, externalEvents) {
  var options = vm._options || {};
  var events = options.events || {};
  for (var type1 in events) {
    vm.$on(type1, events[type1]);
  }
  for (var type2 in externalEvents) {
    vm.$on(type2, externalEvents[type2]);
  }
  LIFE_CYCLE_TYPES.forEach(function (type) {
    vm.$on(("hook:" + type), options[type]);
  });
}

/**
 * Bind event related methods to ViewModel instance.
 * @param  {Vm} vm
 */
function mixinEvents (vm) {
  vm.$emit = $emit;
  vm.$dispatch = $dispatch;
  vm.$broadcast = $broadcast;
  vm.$on = $on;
  vm.$off = $off;
}

/**
 * @fileOverview
 * ViewModel Constructor & definition
 */

/**
 * ViewModel constructor
 *
 * @param {string} type
 * @param {object} options    component options
 * @param {object} parentVm   which contains _app
 * @param {object} parentEl   root element or frag block
 * @param {object} mergedData external data
 * @param {object} externalEvents external events
 */
function Vm (
  type,
  options,
  parentVm,
  parentEl,
  mergedData,
  externalEvents
) {
  parentVm = parentVm || {};
  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
  this._app = parentVm._app || {};
  parentVm._childrenVms && parentVm._childrenVms.push(this);

  if (!options && this._app.customComponentMap) {
    options = this._app.customComponentMap[type];
  }
  options = options || {};

  var data = options.data || {};

  this._options = options;
  this._methods = options.methods || {};
  this._computed = options.computed || {};
  this._css = options.style || {};
  this._ids = {};
  this._vmEvents = {};
  this._childrenVms = [];
  this._type = type;

  // bind events and lifecycles
  initEvents(this, externalEvents);

  console.debug(("[JS Framework] \"init\" lifecycle in Vm(" + (this._type) + ")"));
  this.$emit('hook:init');
  this._inited = true;

  // proxy data and methods
  // observe data and add this to vms
  this._data = typeof data === 'function' ? data() : data;
  if (mergedData) {
    extend(this._data, mergedData);
  }
  initState(this);

  console.debug(("[JS Framework] \"created\" lifecycle in Vm(" + (this._type) + ")"));
  this.$emit('hook:created');
  this._created = true;

  // backward old ready entry
  if (options.methods && options.methods.ready) {
    console.warn('"exports.methods.ready" is deprecated, ' +
      'please use "exports.created" instead');
    options.methods.ready.call(this);
  }

  if (!this._app.doc) {
    return
  }

  // if no parentElement then specify the documentElement
  this._parentEl = parentEl || this._app.doc.documentElement;
  build(this);
}

mixinEvents(Vm.prototype);

/**
 * Watch an function and bind all the data appeared in it. When the related
 * data changes, the callback will be called with new value as 1st param.
 *
 * @param {Function} fn
 * @param {Function} callback
 */
Vm.prototype.$watch = function (fn, callback) {
  watch(this, fn, callback);
};

Vm.set = set$1;
Vm.delete = del;

var nativeModules = {};

// for testing

/**
 * for testing
 */


/**
 * for testing
 */


// for framework

/**
 * init modules for an app instance
 * the second param determines whether to replace an existed method
 */
function initModules (modules, ifReplace) {
  var loop = function ( moduleName ) {
    // init `modules[moduleName][]`
    var methods = nativeModules[moduleName];
    if (!methods) {
      methods = {};
      nativeModules[moduleName] = methods;
    }

    // push each non-existed new method
    modules[moduleName].forEach(function (method) {
      if (typeof method === 'string') {
        method = {
          name: method
        };
      }

      if (!methods[method.name] || ifReplace) {
        methods[method.name] = method;
      }
    });
  };

  for (var moduleName in modules) loop( moduleName );
}

/**
 * init app methods
 */
function initMethods$1 (Vm, apis) {
  var p = Vm.prototype;

  for (var apiName in apis) {
    if (!p.hasOwnProperty(apiName)) {
      p[apiName] = apis[apiName];
    }
  }
}

/**
 * get a module of methods for an app instance
 */
function requireModule (app, name) {
  var methods = nativeModules[name];
  var target = {};
  var loop = function ( methodName ) {
    Object.defineProperty(target, methodName, {
      configurable: true,
      enumerable: true,
      get: function moduleGetter () {
        return function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return app.callTasks({
          module: name,
          method: methodName,
          args: args
        });
        }
      },
      set: function moduleSetter (value) {
        if (typeof value === 'function') {
          return app.callTasks({
            module: name,
            method: methodName,
            args: [value]
          })
        }
      }
    });
  };

  for (var methodName in methods) loop( methodName );
  return target
}

/**
 * get a custom component options
 */
function requireCustomComponent (app, name) {
  var customComponentMap = app.customComponentMap;
  return customComponentMap[name]
}

/**
 * register a custom component options
 */
function registerCustomComponent (app, name, def) {
  var customComponentMap = app.customComponentMap;

  if (customComponentMap[name]) {
    console.error(("[JS Framework] define a component(" + name + ") that already exists"));
    return
  }

  customComponentMap[name] = def;
}

var semver = createCommonjsModule(function (module, exports) {
exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ false &&
    /* nomin */ /\bsemver\b/i.test(false))
  /* nomin */ { debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ }; }
/* nomin */ else
  /* nomin */ { debug = function() {}; }

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    { re[i] = new RegExp(src[i]); }
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    { return version; }

  if (typeof version !== 'string')
    { return null; }

  if (version.length > MAX_LENGTH)
    { return null; }

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    { return null; }

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      { return version; }
    else
      { version = version.version; }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    { throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters') }

  if (!(this instanceof SemVer))
    { return new SemVer(version, loose); }

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    { throw new TypeError('Invalid Version: ' + version); }

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    { throw new TypeError('Invalid major version') }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    { throw new TypeError('Invalid minor version') }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    { throw new TypeError('Invalid patch version') }

  // numberify any prerelease numeric ids
  if (!m[4])
    { this.prerelease = []; }
  else
    { this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          { return num; }
      }
      return id;
    }); }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    { this.version += '-' + this.prerelease.join('.'); }
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  var this$1 = this;

  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    { return -1; }
  else if (!this.prerelease.length && other.prerelease.length)
    { return 1; }
  else if (!this.prerelease.length && !other.prerelease.length)
    { return 0; }

  var i = 0;
  do {
    var a = this$1.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      { return 0; }
    else if (b === undefined)
      { return 1; }
    else if (a === undefined)
      { return -1; }
    else if (a === b)
      { continue; }
    else
      { return compareIdentifiers(a, b); }
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  var this$1 = this;

  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        { this.inc('patch', identifier); }
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        { this.major++; }
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        { this.minor++; }
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        { this.patch++; }
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        { this.prerelease = [0]; }
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this$1.prerelease[i] === 'number') {
            this$1.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          { this.prerelease.push(0); }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            { this.prerelease = [identifier, 0]; }
        } else
          { this.prerelease = [identifier, 0]; }
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      { return comp; }
    else
      { comp = comp.value; }
  }

  if (!(this instanceof Comparator))
    { return new Comparator(comp, loose); }

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    { this.value = ''; }
  else
    { this.value = this.operator + this.semver.version; }

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    { throw new TypeError('Invalid comparator: ' + comp); }

  this.operator = m[1];
  if (this.operator === '=')
    { this.operator = ''; }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    { this.semver = ANY; }
  else
    { this.semver = new SemVer(m[2], this.loose); }
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    { return true; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    { return range; }

  if (!(this instanceof Range))
    { return new Range(range, loose); }

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      { ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'; }

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p)) {
      if (M === '0')
        { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
      else
        { ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'; }
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0'; }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'; }
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      { gtlt = ''; }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        { m = 0; }
      if (xp)
        { p = 0; }

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          { M = +M + 1; }
        else
          { m = +m + 1; }
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    { from = ''; }
  else if (isX(fm))
    { from = '>=' + fM + '.0.0'; }
  else if (isX(fp))
    { from = '>=' + fM + '.' + fm + '.0'; }
  else
    { from = '>=' + from; }

  if (isX(tM))
    { to = ''; }
  else if (isX(tm))
    { to = '<' + (+tM + 1) + '.0.0'; }
  else if (isX(tp))
    { to = '<' + tM + '.' + (+tm + 1) + '.0'; }
  else if (tpr)
    { to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr; }
  else
    { to = '<=' + to; }

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  var this$1 = this;

  if (!version)
    { return false; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this$1.set[i], version))
      { return true; }
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      { return false; }
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        { continue; }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          { return true; }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return compare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}
});

/**
 * Normalize a version string.
 * @param  {String} Version. ie: 1, 1.0, 1.0.0
 * @return {String} Version
 */
function normalizeVersion (v) {
  var isValid = semver.valid(v);
  if (isValid) {
    return v
  }

  v = typeof (v) === 'string' ? v : '';
  var split = v.split('.');
  var i = 0;
  var result = [];

  while (i < 3) {
    var s = typeof (split[i]) === 'string' && split[i] ? split[i] : '0';
    result.push(s);
    i++;
  }

  return result.join('.')
}

/**
 * Get informations from different error key. Like:
 * - code
 * - errorMessage
 * - errorType
 * - isDowngrade
 * @param  {string} key
 * @param  {string} val
 * @param  {string} criteria
 * @return {object}
 */
function getError (key, val, criteria) {
  var result = {
    isDowngrade: true,
    errorType: 1,
    code: 1000
  };
  var getMsg = function (key, val, criteria) {
    return 'Downgrade[' + key + '] :: deviceInfo '
      + val + ' matched criteria ' + criteria
  };
  var _key = key.toLowerCase();

  result.errorMessage = getMsg(key, val, criteria);

  if (_key.indexOf('osversion') >= 0) {
    result.code = 1001;
  }
  else if (_key.indexOf('appversion') >= 0) {
    result.code = 1002;
  }
  else if (_key.indexOf('weexversion') >= 0) {
    result.code = 1003;
  }
  else if (_key.indexOf('devicemodel') >= 0) {
    result.code = 1004;
  }

  return result
}

/**
 * WEEX framework input(deviceInfo)
 * {
 *   platform: 'iOS' or 'android'
 *   osVersion: '1.0.0' or '1.0' or '1'
 *   appVersion: '1.0.0' or '1.0' or '1'
 *   weexVersion: '1.0.0' or '1.0' or '1'
 *   dDeviceModel: 'MODEL_NAME'
 * }
 *
 * downgrade config(config)
 * {
 *   ios: {
 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     deviceModel: ['modelA', 'modelB', ...]
 *   },
 *   android: {
 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
 *     deviceModel: ['modelA', 'modelB', ...]
 *   }
 * }
 *
 *
 * @param  {object} deviceInfo Weex SDK framework input
 * @param  {object} config     user input
 * @return {Object}            { isDowngrade: true/false, errorMessage... }
 */
function check (config, deviceInfo) {
  deviceInfo = deviceInfo || global.WXEnvironment;
  deviceInfo = isPlainObject(deviceInfo) ? deviceInfo : {};

  var result = {
    isDowngrade: false // defautl is pass
  };

  if (typof(config) === 'function') {
    var customDowngrade = config.call(this, deviceInfo, {
      semver: semver,
      normalizeVersion: normalizeVersion
    });

    customDowngrade = !!customDowngrade;

    result = customDowngrade ? getError('custom', '', 'custom params') : result;
  }
  else {
    config = isPlainObject(config) ? config : {};

    var platform = deviceInfo.platform || 'unknow';
    var dPlatform = platform.toLowerCase();
    var cObj = config[dPlatform] || {};

    for (var i in deviceInfo) {
      var key = i;
      var keyLower = key.toLowerCase();
      var val = deviceInfo[i];
      var isVersion = keyLower.indexOf('version') >= 0;
      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
      var criteria = cObj[i];

      if (criteria && isVersion) {
        var c = normalizeVersion(criteria);
        var d = normalizeVersion(deviceInfo[i]);

        if (semver.satisfies(d, c)) {
          result = getError(key, val, criteria);
          break
        }
      }
      else if (isDeviceModel) {
        var _criteria = typof(criteria) === 'array' ? criteria : [criteria];
        if (_criteria.indexOf(val) >= 0) {
          result = getError(key, val, criteria);
          break
        }
      }
    }
  }

  return result
}

function setViewport (app, configs) {
  if ( configs === void 0 ) configs = {};

  /* istanbul ignore if */
  {
    console.debug(("[JS Framework] Set viewport (width: " + (configs.width) + ") for app#" + (app.id) + "."));
    validateViewport(configs);
  }

  // Send viewport configs to native
  if (app && app.callTasks) {
    return app.callTasks([{
      module: 'meta',
      method: 'setViewport',
      args: [configs]
    }])
  }

  /* istanbul ignore next */
  else {
    console.warn("[JS Framework] Can't find \"callTasks\" method on current app.");
  }
}

/**
 * Validate the viewport config.
 * @param {Object} configs
 */
function validateViewport (configs) {
  if ( configs === void 0 ) configs = {};

  var width = configs.width;
  if (width) {
    if (typeof width !== 'number' && width !== 'device-width') {
      console.warn(("[JS Framework] Not support to use " + width + " as viewport width."));
      return false
    }
    return true
  }
  console.warn('[JS Framework] the viewport config should contain the "width" property.');
  return false
}

/**
 * bootstrap app from a certain custom component with config & data
 */
function bootstrap (app, name, config, data) {
  console.debug(("[JS Framework] bootstrap for " + name));

  // 1. validate custom component name first
  var cleanName;
  if (isWeexComponent(name)) {
    cleanName = removeWeexPrefix(name);
  }
  else if (isNpmModule(name)) {
    cleanName = removeJSSurfix(name);
    // check if define by old 'define' method
    /* istanbul ignore if */
    if (!requireCustomComponent(app, cleanName)) {
      return new Error(("It's not a component: " + name))
    }
  }
  else {
    return new Error(("Wrong component name: " + name))
  }

  // 2. validate configuration
  config = isPlainObject(config) ? config : {};
  // 2.1 transformer version check
  if (typeof config.transformerVersion === 'string' &&
    typeof global.transformerVersion === 'string' &&
    !semver.satisfies(config.transformerVersion,
      global.transformerVersion)) {
    return new Error("JS Bundle version: " + (config.transformerVersion) + " " +
      "not compatible with " + (global.transformerVersion))
  }
  // 2.2 downgrade version check
  var downgradeResult = check(config.downgrade);
  /* istanbul ignore if */
  if (downgradeResult.isDowngrade) {
    app.callTasks([{
      module: 'instanceWrap',
      method: 'error',
      args: [
        downgradeResult.errorType,
        downgradeResult.code,
        downgradeResult.errorMessage
      ]
    }]);
    return new Error(("Downgrade[" + (downgradeResult.code) + "]: " + (downgradeResult.errorMessage)))
  }

  // set viewport
  if (config.viewport) {
    setViewport(app, config.viewport);
  }

  // 3. create a new Vm with custom component name and data
  app.vm = new Vm(cleanName, null, { _app: app }, null, data);
}

/**
 * define(name, factory) for primary usage
 * or
 * define(name, deps, factory) for compatibility
 * Notice: DO NOT use function define() {},
 * it will cause error after builded by webpack
 */
var defineFn = function (app, name) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  console.debug(("[JS Framework] define a component " + name));

  // adapt args:
  // 1. name, deps[], factory()
  // 2. name, factory()
  // 3. name, definition{}
  var factory, definition;
  if (args.length > 1) {
    definition = args[1];
  }
  else {
    definition = args[0];
  }
  if (typeof definition === 'function') {
    factory = definition;
    definition = null;
  }

  // resolve definition from factory
  if (factory) {
    var r = function (name) {
      if (isWeexComponent(name)) {
        var cleanName = removeWeexPrefix(name);
        return requireCustomComponent(app, cleanName)
      }
      if (isWeexModule(name)) {
        var cleanName$1 = removeWeexPrefix(name);
        return app.requireModule(cleanName$1)
      }
      if (isNormalModule(name) || isNpmModule(name)) {
        var cleanName$2 = removeJSSurfix(name);
        return app.commonModules[cleanName$2]
      }
    };
    var m = { exports: {}};
    factory(r, m.exports, m);
    definition = m.exports;
  }

  // apply definition
  if (isWeexComponent(name)) {
    var cleanName = removeWeexPrefix(name);
    registerCustomComponent(app, cleanName, definition);
  }
  else if (isWeexModule(name)) {
    var cleanName$1 = removeWeexPrefix(name);
    var obj;
    initModules(( obj = {}, obj[cleanName$1] = definition, obj ));
  }
  else if (isNormalModule(name)) {
    var cleanName$2 = removeJSSurfix(name);
    app.commonModules[cleanName$2] = definition;
  }
  else if (isNpmModule(name)) {
    var cleanName$3 = removeJSSurfix(name);
    if (definition.template ||
        definition.style ||
        definition.methods) {
      // downgrade to old define method (define('componentName', factory))
      // the exports contain one key of template, style or methods
      // but it has risk!!!
      registerCustomComponent(app, cleanName$3, definition);
    }
    else {
      app.commonModules[cleanName$3] = definition;
    }
  }
};

/**
 * @deprecated
 */
function register$2 (app, type, options) {
  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
  registerCustomComponent(app, type, options);
}

/**
 * @fileOverview
 * api that invoked by js bundle code
 *
 * - define(name, factory): define a new composed component type
 * - bootstrap(type, config, data): require a certain type &
 *         render with (optional) data
 *
 * deprecated:
 * - register(type, options): register a new composed component type
 * - render(type, data): render by a certain type with (optional) data
 * - require(type)(data): require a type then render with data
 */

/**
 * @fileOverview
 * instance controls from native
 *
 * - fire event
 * - callback
 * - refresh
 * - destroy
 *
 * corresponded with the API of instance manager (framework.js)
 */
/**
 * Refresh an app with data to its root component options.
 * @param  {object} app
 * @param  {any}    data
 */
function refresh (app, data) {
  console.debug("[JS Framework] Refresh with", data,
            ("in instance[" + (app.id) + "]"));
  var vm = app.vm;
  if (vm && data) {
    if (typeof vm.refreshData === 'function') {
      vm.refreshData(data);
    }
    else {
      extend(vm, data);
    }
    app.differ.flush();
    app.doc.taskCenter.send('dom', { action: 'refreshFinish' }, []);
    return
  }
  return new Error(("invalid data \"" + data + "\""))
}

/**
 * Destroy an app.
 * @param  {object} app
 */
function destroy$1 (app) {
  console.debug(("[JS Framework] Destory an instance(" + (app.id) + ")"));

  if (app.vm) {
    destroyVm(app.vm);
  }

  app.id = '';
  app.options = null;
  app.blocks = null;
  app.vm = null;
  app.doc.destroy();
  app.doc = null;
  app.customComponentMap = null;
  app.commonModules = null;
  app.callbacks = null;
}

/**
 * Destroy an Vm.
 * @param {object} vm
 */
function destroyVm (vm) {
  delete vm._app;
  delete vm._computed;
  delete vm._css;
  delete vm._data;
  delete vm._ids;
  delete vm._methods;
  delete vm._options;
  delete vm._parent;
  delete vm._parentEl;
  delete vm._rootEl;

  // remove all watchers
  if (vm._watchers) {
    var watcherCount = vm._watchers.length;
    while (watcherCount--) {
      vm._watchers[watcherCount].teardown();
    }
    delete vm._watchers;
  }

  // destroy child vms recursively
  if (vm._childrenVms) {
    var vmCount = vm._childrenVms.length;
    while (vmCount--) {
      destroyVm(vm._childrenVms[vmCount]);
    }
    delete vm._childrenVms;
  }

  console.debug(("[JS Framework] \"destroyed\" lifecycle in Vm(" + (vm._type) + ")"));
  vm.$emit('hook:destroyed');

  delete vm._type;
  delete vm._vmEvents;
}

/**
 * Get a JSON object to describe the document body.
 * @param  {object} app
 * @return {object}
 */
function getRootElement (app) {
  var doc = app.doc || {};
  var body = doc.body || {};
  return body.toJSON ? body.toJSON() : {}
}

/**
 * Fire an event from renderer. The event has type, an event object and an
 * element ref. If the event comes with some virtual-DOM changes, it should
 * have one more parameter to describe the changes.
 * @param  {object} app
 * @param  {string} ref
 * @param  {type}   type
 * @param  {object} e
 * @param  {object} domChanges
 */
function fireEvent$1 (app, ref, type, e, domChanges) {
  console.debug(("[JS Framework] Fire a \"" + type + "\" event on an element(" + ref + ") in instance(" + (app.id) + ")"));
  if (Array.isArray(ref)) {
    ref.some(function (ref) {
      return fireEvent$1(app, ref, type, e) !== false
    });
    return
  }
  var el = app.doc.getRef(ref);
  if (el) {
    var result = app.doc.fireEvent(el, type, e, domChanges);
    app.differ.flush();
    app.doc.taskCenter.send('dom', { action: 'updateFinish' }, []);
    return result
  }
  return new Error(("invalid element reference \"" + ref + "\""))
}

/**
 * Make a callback for a certain app.
 * @param  {object}   app
 * @param  {number}   callbackId
 * @param  {any}      data
 * @param  {boolean}  ifKeepAlive
 */
function callback (app, callbackId, data, ifKeepAlive) {
  console.debug(("[JS Framework] Invoke a callback(" + callbackId + ") with"), data,
            ("in instance(" + (app.id) + ")"));
  var callback = app.callbacks[callbackId];
  if (typeof callback === 'function') {
    callback(data);
    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
      app.callbacks[callbackId] = undefined;
    }
    app.differ.flush();
    app.doc.taskCenter.send('dom', { action: 'updateFinish' }, []);
    return
  }
  return new Error(("invalid callback id \"" + callbackId + "\""))
}

/**
 * Collect all virtual-DOM mutations together and send them to renderer.
 * @param  {object} app
 */
function updateActions (app) {
  app.differ.flush();
}

/**
 * Call all tasks from an app to renderer (native).
 * @param  {object} app
 * @param  {array}  tasks
 */
function callTasks (app, tasks) {
  var result;

  /* istanbul ignore next */
  if (typof(tasks) !== 'array') {
    tasks = [tasks];
  }

  tasks.forEach(function (task) {
    task.args = task.args.map(function (arg) { return normalize(arg, app); });
    result = app.doc.taskCenter.send(
      'module',
      {
        module: task.module,
        method: task.method
      },
      task.args
    );
  });

  return result
}

/**
 * Normalize a value. Specially, if the value is a function, then generate a function id
 * and save it to `app.callbacks`, at last return the function id.
 * @param  {any}        v
 * @param  {object}     app
 * @return {primitive}
 */
function normalize (v, app) {
  var type = typof(v);

  switch (type) {
    case 'undefined':
    case 'null':
      return ''
    case 'regexp':
      return v.toString()
    case 'date':
      return v.toISOString()
    case 'number':
    case 'string':
    case 'boolean':
    case 'array':
    case 'object':
      if (v instanceof config$4.Element) {
        return v.ref
      }
      return v
    case 'function':
      app.callbacks[++app.uid] = v;
      return app.uid.toString()
    /* istanbul ignore next */
    default:
      return JSON.stringify(v)
  }
}

/**
 * @fileOverview
 * instance controls from native
 *
 * - init bundle
 *
 * corresponded with the API of instance manager (framework.js)
 */

/**
 * Init an app by run code witgh data
 * @param  {object} app
 * @param  {string} code
 * @param  {object} data
 */
function init$5 (app, code, data, services) {
  console.debug('[JS Framework] Intialize an instance with:\n', data);
  var result;

  // prepare app env methods
  var bundleDefine = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return defineFn.apply(void 0, [ app ].concat( args ));
  };
  var bundleBootstrap = function (name, config, _data) {
    result = bootstrap(app, name, config, _data || data);
    updateActions(app);
    app.doc.listener.createFinish();
    console.debug(("[JS Framework] After intialized an instance(" + (app.id) + ")"));
  };
  var bundleVm = Vm;
  /* istanbul ignore next */
  var bundleRegister = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return register$2.apply(void 0, [ app ].concat( args ));
  };
  /* istanbul ignore next */
  var bundleRender = function (name, _data) {
    result = bootstrap(app, name, {}, _data);
  };
  /* istanbul ignore next */
  var bundleRequire = function (name) { return function (_data) {
    result = bootstrap(app, name, {}, _data);
  }; };
  var bundleDocument = app.doc;
  /* istanbul ignore next */
  var bundleRequireModule = function (name) { return app.requireModule(removeWeexPrefix(name)); };

  var weexGlobalObject = {
    config: app.options,
    define: bundleDefine,
    bootstrap: bundleBootstrap,
    require: bundleDocument,
    document: bundleRequireModule,
    Vm: bundleVm
  };

  Object.freeze(weexGlobalObject);

  // prepare code
  var functionBody;
  /* istanbul ignore if */
  if (typeof code === 'function') {
    // `function () {...}` -> `{...}`
    // not very strict
    functionBody = code.toString().substr(12);
  }
  /* istanbul ignore next */
  else if (code) {
    functionBody = code.toString();
  }
  // wrap IFFE and use strict mode
  functionBody = "(function(global){\n\n\"use strict\";\n\n " + functionBody + " \n\n})(Object.create(this))";

  // run code and get result
  var WXEnvironment = global.WXEnvironment;
  var timerAPIs = {};
  /* istanbul ignore if */
  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
    // timer APIs polyfill in native
    var timer = app.requireModule('timer');
    Object.assign(timerAPIs, {
      setTimeout: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var handler = function () {
          args[0].apply(args, args.slice(2));
        };
        timer.setTimeout(handler, args[1]);
        return app.uid.toString()
      },
      setInterval: function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var handler = function () {
          args[0].apply(args, args.slice(2));
        };
        timer.setInterval(handler, args[1]);
        return app.uid.toString()
      },
      clearTimeout: function (n) {
        timer.clearTimeout(n);
      },
      clearInterval: function (n) {
        timer.clearInterval(n);
      }
    });
  }
  // run code and get result
  var globalObjects = Object.assign({
    define: bundleDefine,
    require: bundleRequire,
    bootstrap: bundleBootstrap,
    register: bundleRegister,
    render: bundleRender,
    __weex_define__: bundleDefine, // alias for define
    __weex_bootstrap__: bundleBootstrap, // alias for bootstrap
    __weex_document__: bundleDocument,
    __weex_require__: bundleRequireModule,
    __weex_viewmodel__: bundleVm,
    weex: weexGlobalObject
  }, timerAPIs, services);
  callFunction(globalObjects, functionBody);

  return result
}

/**
 * Call a new function body with some global objects.
 * @param  {object} globalObjects
 * @param  {string} code
 * @return {any}
 */
function callFunction (globalObjects, body) {
  var globalKeys = [];
  var globalValues = [];
  for (var key in globalObjects) {
    globalKeys.push(key);
    globalValues.push(globalObjects[key]);
  }
  globalKeys.push(body);

  var result = new (Function.prototype.bind.apply( Function, [ null ].concat( globalKeys) ));
  return result.apply(void 0, globalValues)
}

/**
 * @fileOverview
 * instance controls from native
 *
 * - init bundle
 * - fire event
 * - callback
 * - destroy
 *
 * corresponded with the API of instance manager (framework.js)
 */

var Differ = function Differ (id) {
  this.id = id;
  this.map = [];
  this.hooks = [];
};
Differ.prototype.isEmpty = function isEmpty () {
  return this.map.length === 0
};
Differ.prototype.append = function append (type, depth, ref, handler) {
    var this$1 = this;

  if (!this.hasTimer) {
    this.hasTimer = true;
    setTimeout(function () {
      this$1.hasTimer = false;
      this$1.flush(true);
    }, 0);
  }
  var map = this.map;
  if (!map[depth]) {
    map[depth] = {};
  }
  var group = map[depth];
  if (!group[type]) {
    group[type] = {};
  }
  if (type === 'element') {
    if (!group[type][ref]) {
      group[type][ref] = [];
    }
    group[type][ref].push(handler);
  }
  else {
    group[type][ref] = handler;
  }
};
Differ.prototype.flush = function flush (isTimeout) {
  var map = this.map.slice();
  this.map.length = 0;
  map.forEach(function (group) {
    callTypeMap(group, 'repeat');
    callTypeMap(group, 'shown');
    callTypeList(group, 'element');
  });

  var hooks = this.hooks.slice();
  this.hooks.length = 0;
  hooks.forEach(function (fn) {
    fn();
  });

  if (!this.isEmpty()) {
    this.flush();
  }
};
Differ.prototype.then = function then (fn) {
  this.hooks.push(fn);
};

function callTypeMap (group, type) {
  var map = group[type];
  for (var ref in map) {
    map[ref]();
  }
}

function callTypeList (group, type) {
  var map = group[type];
  for (var ref in map) {
    var list = map[ref];
    list.forEach(function (handler) { handler(); });
  }
}

/**
 * @fileOverview
 * Weex App constructor & definition
 */

/**
 * App constructor for Weex framework.
 * @param {string} id
 * @param {object} options
 * @param {object} callbackManager
 */
function App$1 (id, options, callbackManager) {
  this.id = id;
  this.options = options || {};
  this.vm = null;
  this.customComponentMap = {};
  this.commonModules = {};

  // callbackManager
  Object.defineProperty(this, 'callbacks', {
    get: function () { return callbackManager.callbacks },
    set: function (v) { if (!v) { callbackManager.close(); } }
  });
  Object.defineProperty(this, 'uid', {
    get: function () { return callbackManager.lastCallbackId },
    set: function (v) { callbackManager.lastCallbackId = v; }
  });
  this.callbackManager = callbackManager;

  // document
  this.doc = new config$4.Document(
    id,
    this.options.bundleUrl,
    null,
    config$4.Listener
  );
  this.differ = new Differ(id);
}

/**
 * @fileOverview
 * Weex instance constructor & definition
 */

/**
 * @deprecated
 */
App$1.prototype.requireModule = function (name) {
  return requireModule(this, name)
};

/**
 * @deprecated
 */
App$1.prototype.updateActions = function () {
  return updateActions(this)
};

/**
 * @deprecated
 */
App$1.prototype.callTasks = function (tasks) {
  return callTasks(this, tasks)
};

/**
 * Prevent modification of App and App.prototype
 */
Object.freeze(App$1);
Object.freeze(App$1.prototype);

var instanceMap$2 = {};

/**
 * Create a Weex instance.
 *
 * @param  {string} id
 * @param  {string} code
 * @param  {object} options
 *         option `HAS_LOG` enable print log
 * @param  {object} data
 * @param  {object} info { created, ... services, callbacks }
 */
function createInstance$3 (id, code, options, data, info) {
  var ref = info || {};
  var services = ref.services;
  var callbacks = ref.callbacks;
  resetTarget();
  var instance = instanceMap$2[id];
  /* istanbul ignore else */
  options = options || {};
  var result;
  /* istanbul ignore else */
  if (!instance) {
    instance = new App$1(id, options, callbacks);
    instanceMap$2[id] = instance;
    result = init$5(instance, code, data, services);
  }
  else {
    result = new Error(("invalid instance id \"" + id + "\""));
  }
  return result
}

/**
 * Init config informations for Weex framework
 * @param  {object} cfg
 */
function init$6 (cfg) {
  config$4.Document = cfg.Document;
  config$4.Element = cfg.Element;
  config$4.Comment = cfg.Comment;
  config$4.sendTasks = cfg.sendTasks;
  config$4.Listener = cfg.Listener;
}

/**
 * Refresh a Weex instance with data.
 *
 * @param  {string} id
 * @param  {object} data
 */
function refreshInstance$2 (id, data) {
  var instance = instanceMap$2[id];
  var result;
  /* istanbul ignore else */
  if (instance) {
    result = refresh(instance, data);
  }
  else {
    result = new Error(("invalid instance id \"" + id + "\""));
  }
  return result
}

/**
 * Destroy a Weex instance.
 * @param  {string} id
 */
function destroyInstance$2 (id) {
  resetTarget();
  var instance = instanceMap$2[id];
  /* istanbul ignore else */
  if (!instance) {
    return new Error(("invalid instance id \"" + id + "\""))
  }
  destroy$1(instance);
  delete instanceMap$2[id];
  return instanceMap$2
}

var nativeComponentMap$1 = config$4.nativeComponentMap;

/**
 * Register the name of each native component.
 * @param  {array} components array of name
 */
function registerComponents$2 (components) {
  if (Array.isArray(components)) {
    components.forEach(function register (name) {
      /* istanbul ignore if */
      if (!name) {
        return
      }
      if (typeof name === 'string') {
        nativeComponentMap$1[name] = true;
      }
      /* istanbul ignore else */
      else if (typeof name === 'object' && typeof name.type === 'string') {
        nativeComponentMap$1[name.type] = name;
      }
    });
  }
}

/**
 * Register the name and methods of each module.
 * @param  {object} modules a object of modules
 */
function registerModules$2 (modules) {
  /* istanbul ignore else */
  if (typeof modules === 'object') {
    initModules(modules);
  }
}

/**
 * Register the name and methods of each api.
 * @param  {object} apis a object of apis
 */
function registerMethods$1 (methods) {
  /* istanbul ignore else */
  if (typeof methods === 'object') {
    initMethods$1(Vm, methods);
  }
}

// @todo: Hack for this framework only. Will be re-designed or removed later.
global.registerMethods = registerMethods$1;

var jsHandlers = {
  fireEvent: function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return fireEvent$1.apply(void 0, [ instanceMap$2[id] ].concat( args ))
  },
  callback: function (id) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return callback.apply(void 0, [ instanceMap$2[id] ].concat( args ))
  }
};

/**
 * Accept calls from native (event or callback).
 *
 * @param  {string} id
 * @param  {array} tasks list with `method` and `args`
 */
function receiveTasks$2 (id, tasks) {
  var instance = instanceMap$2[id];
  if (instance && Array.isArray(tasks)) {
    var results = [];
    tasks.forEach(function (task) {
      var handler = jsHandlers[task.method];
      var args = [].concat( task.args );
      /* istanbul ignore else */
      if (typeof handler === 'function') {
        args.unshift(id);
        results.push(handler.apply(void 0, args));
      }
    });
    return results
  }
  return new Error(("invalid instance id \"" + id + "\" or tasks"))
}

/**
 * Get a whole element tree of an instance for debugging.
 * @param  {string} id
 * @return {object} a virtual dom tree
 */
function getRoot$2 (id) {
  var instance = instanceMap$2[id];
  var result;
  /* istanbul ignore else */
  if (instance) {
    result = getRootElement(instance);
  }
  else {
    result = new Error(("invalid instance id \"" + id + "\""));
  }
  return result
}

/**
 * @fileOverview Weex framework entry.
 */

// register special methods for Weex framework
registerMethods$1(methods$1);

/**
 * Prevent modification of Vm and Vm.prototype
 */
Object.freeze(Vm);




var Weex = Object.freeze({
  registerComponents: registerComponents$2,
  registerModules: registerModules$2,
  registerMethods: registerMethods$1,
  createInstance: createInstance$3,
  init: init$6,
  refreshInstance: refreshInstance$2,
  destroyInstance: destroyInstance$2,
  receiveTasks: receiveTasks$2,
  getRoot: getRoot$2
});

var framework_weex = createCommonjsModule(function (module) {
module.exports = /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      { return installedModules[moduleId].exports; }
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************!*\
  !*** ./packages/weex-rax-framework/src/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break; } } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) { _i["return"](); } } finally { if (_d) { throw _e; } } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.getInstance = getInstance;
  exports.init = init;
  exports.registerComponents = registerComponents;
  exports.registerMethods = registerMethods;
  exports.registerModules = registerModules;
  exports.createInstance = createInstance;
  exports.refreshInstance = refreshInstance;
  exports.destroyInstance = destroyInstance;
  exports.getRoot = getRoot;
  exports.receiveTasks = receiveTasks;

  var _builtin = __webpack_require__(/*! ./builtin */ 1);

  var _emitter = __webpack_require__(/*! ./emitter */ 3);

  var _emitter2 = _interopRequireDefault(_emitter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var NativeComponents = {};
  var NativeModules = {};

  var Document = void 0;
  var Element = void 0;
  var Comment = void 0;
  var Listener = void 0;
  var sendTasks = void 0;

  var instances = {};

  function dispatchEventToInstance(event, targetOrigin) {
    var instance;
    for (var i in instances) {
      if (instances.hasOwnProperty(i)) {
        instance = instances[i];
        if (targetOrigin === '*' || targetOrigin === instance.origin) {
          event.target = instance.window;
          // FIXME: Need async?
          instance.window.dispatchEvent(event);
        }
      }
    }
  }

  function getInstance(instanceId) {
    var instance = instances[instanceId];
    if (!instance) {
      throw new Error('Invalid instance id "' + instanceId + '"');
    }
    return instance;
  }

  function init(cfg) {
    Document = cfg.Document;
    Element = cfg.Element;
    Comment = cfg.Comment;
    Listener = cfg.Listener;
    sendTasks = cfg.sendTasks;
  }

  /**
   * register the name of each native component
   * @param  {array} components array of name
   */
  function registerComponents(components) {
    if (Array.isArray(components)) {
      components.forEach(function register(name) {
        /* istanbul ignore if */
        if (!name) {
          return;
        }
        if (typeof name === 'string') {
          NativeComponents[name] = true;
        } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
          NativeComponents[name.type] = name;
        }
      });
    }
  }

  /**
   * register the name and methods of each api
   * @param  {object} apis a object of apis
   */
  function registerMethods(apis) {
    if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
      // Noop
    }
  }

  /**
   * register the name and methods of each module
   * @param  {object} modules a object of modules
   */
  function registerModules(newModules) {
    if ((typeof newModules === 'undefined' ? 'undefined' : _typeof(newModules)) === 'object') {
      for (var name in newModules) {
        if (Object.prototype.hasOwnProperty.call(newModules, name)) {
          NativeModules[name] = newModules[name];
        }
      }
    }
  }

  function genBuiltinModules(modules,
  // ES
  Promise,
  // W3C
  window, screen, document, navigator, location, fetch, Headers, Response, Request, URL, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, alert,
  // Weex
  __weex_define__, __weex_require__, __weex_options__, __weex_data__, __weex_downgrade__, __weex_document__) {
    for (var moduleName in _builtin.BuiltinModulesFactory) {
      modules[moduleName] = {
        factory: _builtin.BuiltinModulesFactory[moduleName].bind(null,
        // ES
        Promise,
        // W3C
        window, screen, document, navigator, location, fetch, Headers, Response, Request, URL, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, alert,
        // Weex
        __weex_define__, __weex_require__, __weex_options__, __weex_data__, __weex_downgrade__, __weex_document__),
        module: { exports: {} },
        isInitialized: false
      };
    }
    return modules;
  }

  function genNativeModules(modules, instanceId) {
    var prefix = '@weex-module/';

    if ((typeof NativeModules === 'undefined' ? 'undefined' : _typeof(NativeModules)) === 'object') {
      var _loop = function _loop(name) {
        var moduleName = prefix + name;
        modules[moduleName] = {
          module: { exports: {} },
          isInitialized: true
        };

        NativeModules[name].forEach(function (method) {
          if (typeof method === 'string') {
            method = {
              name: method
            };
          }

          var methodName = method.name;

          modules[moduleName].module.exports[methodName] = function () {
            var arguments$1 = arguments;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments$1[_key];
            }

            var finalArgs = [];
            args.forEach(function (arg, index) {
              var value = args[index];
              finalArgs[index] = normalize(value, getInstance(instanceId));
            });

            sendTasks(String(instanceId), [{
              module: name,
              method: methodName,
              args: finalArgs
            }], '-1');
          };
        });
      };

      for (var name in NativeModules) {
        _loop(name);
      }
    }

    return modules;
  }

  /**
   * create a Weex instance
   *
   * @param  {string} instanceId
   * @param  {string} code
   * @param  {object} [options] option `HAS_LOG` enable print log
   * @param  {object} [data]
   */
  function createInstance(instanceId, code, options /* {bundleUrl, debug} */, data) {
    var Promise = __webpack_require__(/*! runtime-shared/dist/promise.function */ 4)();
    var URL = __webpack_require__(/*! runtime-shared/dist/url.function */ 5)();
    var URLSearchParams = __webpack_require__(/*! runtime-shared/dist/url-search-params.function */ 6)();

    var instance = instances[instanceId];

    if (instance == undefined) {
      (function () {
        var def = function def(id, deps, factory) {
          if (deps instanceof Function) {
            factory = deps;
            deps = [];
          }

          modules[id] = {
            factory: factory,
            deps: deps,
            module: { exports: {} },
            isInitialized: false,
            hasError: false
          };
        };

        var req = function req(id) {
          var mod = modules[id];

          if (mod && mod.isInitialized) {
            return mod.module.exports;
          }

          if (!mod) {
            throw new Error('Requiring unknown module "' + id + '"');
          }

          if (mod.hasError) {
            throw new Error('Requiring module "' + id + '" which threw an exception');
          }

          try {
            mod.isInitialized = true;
            mod.factory(req, mod.module.exports, mod.module);
          } catch (e) {
            mod.hasError = true;
            mod.isInitialized = false;
            throw e;
          }

          return mod.module.exports;
        };

        var ENV = (typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object' && WXEnvironment || {};
        var document = new Document(instanceId, options.bundleUrl, null, Listener);
        var location = new URL(document.URL);

        var modules = {};
        // Generate native modules map at instance init
        genNativeModules(modules, instanceId);

        var emitter = new _emitter2.default();

        var window = {
          devicePixelRatio: ENV.scale,
          open: function open(url) {
            var weexNavigator = req('@weex-module/navigator');
            weexNavigator.push({
              url: url,
              animated: 'true'
            }, function (e) {
              // noop
            });
          },
          postMessage: function postMessage(message, targetOrigin) {
            var event = {
              origin: location.origin,
              data: JSON.parse(JSON.stringify(message)),
              type: 'message',
              source: window };
            dispatchEventToInstance(event, targetOrigin);
          },
          addEventListener: function addEventListener(type, listener) {
            emitter.on(type, listener);
          },
          removeEventListener: function removeEventListener(type, listener) {
            emitter.off(type, listener);
          },
          dispatchEvent: function dispatchEvent(e) {
            emitter.emit(e.type, e);
          }
        };

        instance = instances[instanceId] = {
          window: window,
          document: document,
          instanceId: instanceId,
          modules: modules,
          origin: location.origin,
          callbacks: [],
          uid: 0
        };

        // https://www.w3.org/TR/2009/WD-html5-20090423/browsers.html#dom-navigator
        var navigator = {
          product: 'Weex',
          platform: ENV.platform,
          appName: ENV.appName,
          appVersion: ENV.appVersion
        };

        // https://drafts.csswg.org/cssom-view/#the-screen-interface
        var screen = {
          width: ENV.deviceWidth,
          height: ENV.deviceHeight,
          availWidth: ENV.deviceWidth,
          availHeight: ENV.deviceHeight,
          colorDepth: 24,
          pixelDepth: 24
        };

        var timerModuleName = '@weex-module/timer';
        var setTimeout = function setTimeout() {
          var arguments$1 = arguments;

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments$1[_key2];
          }

          var timer = req(timerModuleName);
          var handler = function handler() {
            args[0].apply(args, _toConsumableArray(args.slice(2)));
          };
          timer.setTimeout(handler, args[1]);
          return instance.uid.toString();
        };

        var setInterval = function setInterval() {
          var arguments$1 = arguments;

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments$1[_key3];
          }

          var timer = req(timerModuleName);
          var handler = function handler() {
            args[0].apply(args, _toConsumableArray(args.slice(2)));
          };
          timer.setInterval(handler, args[1]);
          return instance.uid.toString();
        };

        var clearTimeout = function clearTimeout(n) {
          var timer = req(timerModuleName);
          timer.clearTimeout(n);
        };

        var clearInterval = function clearInterval(n) {
          var timer = req(timerModuleName);
          timer.clearInterval(n);
        };

        var requestAnimationFrame = function requestAnimationFrame(callback) {
          var timer = req(timerModuleName);
          timer.setTimeout(callback, 16);
          return instance.uid.toString();
        };

        var cancelAnimationFrame = function cancelAnimationFrame(n) {
          var timer = req(timerModuleName);
          timer.clearTimeout(n);
        };

        var alert = function alert(message) {
          var modal = req('@weex-module/modal');
          modal.alert({
            message: message
          }, function () {});
        };

        var downgrade = __webpack_require__(/*! ./downgrade.weex */ 7)(req);
        var fetch = __webpack_require__(/*! ./fetch.weex */ 9)(req, Promise);
        var Headers = fetch.Headers,
            Request = fetch.Request,
            Response = fetch.Response;


        var globals = [
        // ES
        Promise,
        // W3C
        window, screen, document, navigator, location, fetch, Headers, Response, Request, URL, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, alert,
        // Weex
        def, req, options, data, downgrade, document];

        genBuiltinModules(modules,
        // ES
        Promise,
        // W3C
        window, screen, document, navigator, location, fetch, Headers, Response, Request, URL, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, alert,
        // Weex
        def, req, options, data, downgrade, document);

        if (ENV.platform !== 'Web') {
          var _init = new Function(
          // ES
          'Promise',
          // W3C
          'window', 'screen', 'document', 'navigator', 'location', 'fetch', 'Headers', 'Response', 'Request', 'URL', 'URLSearchParams', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'requestAnimationFrame', 'cancelAnimationFrame', 'alert',
          // Weex
          '__weex_define__', '__weex_require__', '__weex_options__', '__weex_data__', '__weex_downgrade__', '__weex_document__',
          // ModuleJS
          'define', 'require', '"use strict";' + code);

          _init.call(
          // Context is window
          window,
          // ES
          Promise,
          // W3C
          window, screen, document, navigator, location, fetch, Headers, Response, Request, URL, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, alert,
          // Weex
          def, req, options, data, downgrade, document,
          // ModuleJS
          def, req);
        } else {
          var _init2 = new Function('"use strict";' + code);

          _init2.call(window);
        }
      })();
    } else {
      throw new Error('Instance id "' + instanceId + '" existed when create instance');
    }
  }

  /**
   * refresh a Weex instance
   *
   * @param  {string} instanceId
   * @param  {object} data
   */
  function refreshInstance(instanceId, data) {
    var instance = getInstance(instanceId);
    var document = instance.document;
    document.documentElement.fireEvent('refresh', {
      timestamp: Date.now(),
      data: data
    });
    document.listener.refreshFinish();
  }

  /**
   * destroy a Weex instance
   * @param  {string} instanceId
   */
  function destroyInstance(instanceId) {
    var instance = getInstance(instanceId);
    var document = instance.document;
    document.documentElement.fireEvent('destory', {
      timestamp: Date.now()
    });

    if (document.destroy) {
      document.destroy();
    }

    delete instances[instanceId];
  }

  /**
   * get a whole element tree of an instance
   * for debugging
   * @param  {string} instanceId
   * @return {object} a virtual dom tree
   */
  function getRoot(instanceId) {
    var instance = getInstance(instanceId);
    var document = instance.document;
    return document.toJSON ? document.toJSON() : {};
  }

  function fireEvent(doc, ref, type, e, domChanges) {
    if (Array.isArray(ref)) {
      ref.some(function (ref) {
        return fireEvent(doc, ref, type, e) !== false;
      });
      return;
    }

    var el = doc.getRef(ref);

    if (el) {
      var result = doc.fireEvent(el, type, e, domChanges);
      doc.listener.updateFinish();
      return result;
    }

    return new Error('Invalid element reference "' + ref + '"');
  }

  function handleCallback(doc, callbacks, callbackId, data, ifKeepAlive) {
    var callback = callbacks[callbackId];
    if (typeof callback === 'function') {
      callback(data);
      if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
        callbacks[callbackId] = null;
      }
      doc.listener.updateFinish();
      return;
    }

    return new Error('Invalid callback id "' + callbackId + '"');
  }

  /**
   * accept calls from native (event or callback)
   *
   * @param  {string} instanceId
   * @param  {array} tasks list with `method` and `args`
   */
  function receiveTasks(instanceId, tasks) {
    var instance = getInstance(instanceId);
    if (Array.isArray(tasks)) {
      var _ret3 = function () {
        var callbacks = instance.callbacks,
            document = instance.document;

        var results = [];
        tasks.forEach(function (task) {
          var result = void 0;
          if (task.method === 'fireEvent') {
            var _task$args = _slicedToArray(task.args, 4),
                nodeId = _task$args[0],
                type = _task$args[1],
                data = _task$args[2],
                domChanges = _task$args[3];

            result = fireEvent(document, nodeId, type, data, domChanges);
          } else if (task.method === 'callback') {
            var _task$args2 = _slicedToArray(task.args, 3),
                uid = _task$args2[0],
                _data = _task$args2[1],
                ifKeepAlive = _task$args2[2];

            result = handleCallback(document, callbacks, uid, _data, ifKeepAlive);
          }
          results.push(result);
        });
        return {
          v: results
        };
      }();

      if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") { return _ret3.v; }
    }
  }

  function normalize(v, instance) {
    var type = typof(v);

    switch (type) {
      case 'undefined':
      case 'null':
        return '';
      case 'regexp':
        return v.toString();
      case 'date':
        return v.toISOString();
      case 'number':
      case 'string':
      case 'boolean':
      case 'array':
      case 'object':
        if (v instanceof Element) {
          return v.ref;
        }
        return v;
      case 'function':
        instance.callbacks[++instance.uid] = v;
        return instance.uid.toString();
      default:
        return JSON.stringify(v);
    }
  }

  function typof(v) {
    var s = Object.prototype.toString.call(v);
    return s.substring(8, s.length - 1).toLowerCase();
  }

  exports.default = {
    createInstance: createInstance,
    destroyInstance: destroyInstance,
    getInstance: getInstance,
    getRoot: getRoot,
    init: init,
    receiveTasks: receiveTasks,
    refreshInstance: refreshInstance,
    registerComponents: registerComponents,
    registerMethods: registerMethods,
    registerModules: registerModules
  };

/***/ },
/* 1 */
/*!****************************************************!*\
  !*** ./packages/weex-rax-framework/src/builtin.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var BuiltinModulesFactory = exports.BuiltinModulesFactory = {
    'rax': __webpack_require__(/*! rax/dist/rax.factory */ 2)
  };

/***/ },
/* 2 */
/*!******************************************!*\
  !*** ./packages/rax/dist/rax.factory.js ***!
  \******************************************/
/***/ function(module, exports) {


  module.exports = function(Promise,window,screen,document,navigator,location,fetch,Headers,Response,Request,URL,URLSearchParams,setTimeout,clearTimeout,setInterval,clearInterval,requestAnimationFrame,cancelAnimationFrame,alert,__weex_define__,__weex_require__,__weex_options__,__weex_data__,__weex_downgrade__,__weex_document__,require,exports,module) {
    module.exports = /******/ (function(modules) { // webpackBootstrap
  /******/  // The module cache
  /******/  var installedModules = {};
  /******/
  /******/  // The require function
  /******/  function __webpack_require__(moduleId) {
  /******/
  /******/    // Check if module is in cache
  /******/    if(installedModules[moduleId])
  /******/      { return installedModules[moduleId].exports; }
  /******/
  /******/    // Create a new module (and put it into the cache)
  /******/    var module = installedModules[moduleId] = {
  /******/      exports: {},
  /******/      id: moduleId,
  /******/      loaded: false
  /******/    };
  /******/
  /******/    // Execute the module function
  /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/    // Flag the module as loaded
  /******/    module.loaded = true;
  /******/
  /******/    // Return the exports of the module
  /******/    return module.exports;
  /******/  }
  /******/
  /******/
  /******/  // expose the modules object (__webpack_modules__)
  /******/  __webpack_require__.m = modules;
  /******/
  /******/  // expose the module cache
  /******/  __webpack_require__.c = installedModules;
  /******/
  /******/  // __webpack_public_path__
  /******/  __webpack_require__.p = "";
  /******/
  /******/  // Load entry module and return exports
  /******/  return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDriver = exports.setDriver = exports.version = exports.setNativeProps = exports.findComponentInstance = exports.unmountComponentAtNode = exports.findDOMNode = exports.render = exports.PropTypes = exports.PureComponent = exports.Component = exports.createFactory = exports.isValidElement = exports.cloneElement = exports.createElement = undefined;

    var _element = __webpack_require__(1);

    Object.defineProperty(exports, 'createElement', {
      enumerable: true,
      get: function get() {
        return _element.createElement;
      }
    });
    Object.defineProperty(exports, 'cloneElement', {
      enumerable: true,
      get: function get() {
        return _element.cloneElement;
      }
    });
    Object.defineProperty(exports, 'isValidElement', {
      enumerable: true,
      get: function get() {
        return _element.isValidElement;
      }
    });
    Object.defineProperty(exports, 'createFactory', {
      enumerable: true,
      get: function get() {
        return _element.createFactory;
      }
    });

    var _driver = __webpack_require__(5);

    Object.defineProperty(exports, 'setDriver', {
      enumerable: true,
      get: function get() {
        return _driver.setDriver;
      }
    });
    Object.defineProperty(exports, 'getDriver', {
      enumerable: true,
      get: function get() {
        return _driver.getDriver;
      }
    });

    __webpack_require__(12);

    var _component = __webpack_require__(19);

    var _component2 = __webpack_require__(3).interopRequireDefault(_component);

    var _purecomponent = __webpack_require__(20);

    var _purecomponent2 = __webpack_require__(3).interopRequireDefault(_purecomponent);

    var _proptypes = __webpack_require__(21);

    var _proptypes2 = __webpack_require__(3).interopRequireDefault(_proptypes);

    var _render2 = __webpack_require__(22);

    var _render3 = __webpack_require__(3).interopRequireDefault(_render2);

    var _findDOMNode2 = __webpack_require__(8);

    var _findDOMNode3 = __webpack_require__(3).interopRequireDefault(_findDOMNode2);

    var _unmountComponentAtNode2 = __webpack_require__(15);

    var _unmountComponentAtNode3 = __webpack_require__(3).interopRequireDefault(_unmountComponentAtNode2);

    var _findComponentInstance2 = __webpack_require__(34);

    var _findComponentInstance3 = __webpack_require__(3).interopRequireDefault(_findComponentInstance2);

    var _setNativeProps2 = __webpack_require__(7);

    var _setNativeProps3 = __webpack_require__(3).interopRequireDefault(_setNativeProps2);

    var _version2 = __webpack_require__(35);

    var _version3 = __webpack_require__(3).interopRequireDefault(_version2);

    exports.Component = _component2.default;
    exports.PureComponent = _purecomponent2.default;
    exports.PropTypes = _proptypes2.default;
    exports.render = _render3.default;
    exports.findDOMNode = _findDOMNode3.default;
    exports.unmountComponentAtNode = _unmountComponentAtNode3.default;
    exports.findComponentInstance = _findComponentInstance3.default;
    exports.setNativeProps = _setNativeProps3.default;
    exports.version = _version3.default;

  /***/ },
  /* 1 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createElement = createElement;
    exports.createFactory = createFactory;
    exports.cloneElement = cloneElement;
    exports.isValidElement = isValidElement;

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _universalEnv = __webpack_require__(4);

    var RESERVED_PROPS = {
      key: true,
      ref: true
    };

    var Element = function Element(type, key, ref, props, owner) {
      props = filterProps(type, props);

      return {
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
    };

    exports.default = Element;


    function traverseChildren(children, result) {
      if (Array.isArray(children)) {
        for (var i = 0, l = children.length; i < l; i++) {
          traverseChildren(children[i], result);
        }
      } else {
        result.push(children);
      }
    }

    function flattenChildren(children) {
      if (children == null) {
        return children;
      }
      var result = [];
      traverseChildren(children, result);

      if (result.length === 1) {
        result = result[0];
      }

      return result;
    }

    function flattenStyle(style) {
      if (!style) {
        return undefined;
      }

      if (!Array.isArray(style)) {
        return style;
      } else {
        var result = {};
        for (var i = 0; i < style.length; ++i) {
          var computedStyle = flattenStyle(style[i]);
          if (computedStyle) {
            for (var key in computedStyle) {
              result[key] = computedStyle[key];
            }
          }
        }
        return result;
      }
    }

    // TODO: so hack
    function filterProps(type, props) {
      // Only for weex text
      if (_universalEnv.isWeex && type === 'text') {
        var value = props.children;
        if (value) {
          if (Array.isArray(value)) {
            value = value.join('');
          }
          props.children = null;
          props.value = value;
        }
      }
      return props;
    }

    function createElement(type, config) {
      var arguments$1 = arguments;

      if (type == null) {
        throw Error('Component type is null');
      }
      // Reserved names are extracted
      var props = {};
      var propName = void 0;
      var key = null;
      var ref = null;

      if (config != null) {
        ref = config.ref === undefined ? null : config.ref;
        key = config.key === undefined ? null : String(config.key);
        // Remaining properties are added to a new props object
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }

      for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments$1[_key];
      }

      if (children.length) {
        props.children = flattenChildren(children);
      }

      // Resolve default props
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      if (props.style && (Array.isArray(props.style) || __webpack_require__(3).typeof(props.style) === 'object')) {
        props.style = flattenStyle(props.style);
      }

      return new Element(type, key, ref, props, _host2.default.component);
    }

    function createFactory(type) {
      var factory = createElement.bind(null, type);
      // Expose the type on the factory and the prototype so that it can be
      // easily accessed on elements. E.g. `<Foo />.type === Foo`.
      // This should not be named `constructor` since this may not be the function
      // that created the element, and it may not even be a constructor.
      factory.type = type;
      return factory;
    }

    function cloneElement(element, config) {
      var arguments$1 = arguments;

      // Original props are copied
      var props = Object.assign({}, element.props);

      // Reserved names are extracted
      var key = element.key;
      var ref = element.ref;

      // Owner will be preserved, unless ref is overridden
      var owner = element._owner;

      if (config) {
        // Should reset ref and owner if has a new ref
        if (config.ref !== undefined) {
          ref = config.ref;
          owner = _host2.default.component;
        }

        if (config.key !== undefined) {
          key = String(config.key);
        }

        // Resolve default props
        var defaultProps = void 0;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        // Remaining properties override existing props
        var propName = void 0;
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }

      for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        children[_key2 - 2] = arguments$1[_key2];
      }

      if (children.length) {
        props.children = flattenChildren(children);
      }

      return new Element(element.type, key, ref, props, owner);
    }

    function isValidElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(object)) === 'object' && object !== null && object.type && object.props;
    }

  /***/ },
  /* 2 */
  /***/ function(module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Stateful things in runtime
     */
    exports.default = {
      component: null,
      driver: null,
      mountID: 1,
      // Roots
      rootComponents: {},
      rootInstances: {}
    };

  /***/ },
  /* 3 */
  /***/ function(module, exports) {

    exports.interopRequireDefault=function(obj){return obj&&obj.__esModule?obj:{default:obj};};exports.typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor){ descriptor.writable=true; }Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps){ defineProperties(Constructor.prototype,protoProps); }if(staticProps){ defineProperties(Constructor,staticProps); }return Constructor;};}();exports.classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};exports.inherits=function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass){ Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass; }};exports.possibleConstructorReturn=function(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;};

  /***/ },
  /* 4 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _typeof = typeof Symbol === "function" && __webpack_require__(3).typeof(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : __webpack_require__(3).typeof(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : __webpack_require__(3).typeof(obj);
    };

    // https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
    var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
    var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
    var isWeex = exports.isWeex = typeof callNative === 'function';
    var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';

  /***/ },
  /* 5 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.injectDriver = exports.getDriver = exports.setDriver = undefined;

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _weex = __webpack_require__(6);

    var _weex2 = __webpack_require__(3).interopRequireDefault(_weex);

    var _browser = __webpack_require__(10);

    var _browser2 = __webpack_require__(3).interopRequireDefault(_browser);

    var _universalEnv = __webpack_require__(4);

    var setDriver = exports.setDriver = function setDriver(driver) {
      _host2.default.driver = driver;
    };

    var getDriver = exports.getDriver = function getDriver() {
      return _host2.default.driver;
    };

    var injectDriver = exports.injectDriver = function injectDriver() {
      var driver = getDriver();

      // Inject driver
      if (!driver) {
        if (_universalEnv.isWeex) {
          driver = _weex2.default;
        } else if (_universalEnv.isWeb) {
          driver = _browser2.default;
        } else {
          throw Error('No builtin driver matched');
        }

        setDriver(driver);
      }
    };

  /***/ },
  /* 6 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _setNativeProps = __webpack_require__(7);

    var _setNativeProps2 = __webpack_require__(3).interopRequireDefault(_setNativeProps);

    var _unit = __webpack_require__(9);

    var STYLE = 'style'; /**
                          * Weex driver
                          **/

    var ID = 'id';
    var TEXT = 'text';
    var FULL_WIDTH_REM = 750;
    var DOCUMENT_FRAGMENT_NODE = 11;
    var nodeMaps = {};
    /* global __weex_document__ */
    var document = (typeof __weex_document__ === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(__weex_document__)) === 'object' ? __weex_document__ : (typeof document === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(document)) === 'object' ? document : null;

    var Driver = {
      getElementById: function getElementById(id) {
        return nodeMaps[id];
      },
      createBody: function createBody() {
        // Close batched updates
        document.open();

        if (document.body) {
          return document.body;
        }

        var documentElement = document.documentElement;
        var body = document.createBody();
        documentElement.appendChild(body);

        return body;
      },
      createFragment: function createFragment() {
        return {
          nodeType: DOCUMENT_FRAGMENT_NODE,
          childNodes: []
        };
      },
      createComment: function createComment(content) {
        return document.createComment(content);
      },
      createEmpty: function createEmpty() {
        return this.createComment(' empty ');
      },
      createText: function createText(text) {
        return Driver.createElement({
          type: TEXT,
          props: {
            value: text
          }
        });
      },
      updateText: function updateText(node, content) {
        this.setAttribute(node, 'value', content);
      },
      createElement: function createElement(component) {
        var props = component.props;
        var events = [];
        var style = {};
        var originStyle = props[STYLE];
        for (var prop in originStyle) {
          style[prop] = (0, _unit.convertUnit)(originStyle[prop], prop);
        }

        var node = document.createElement(component.type, {
          style: style
        });

        (0, _setNativeProps2.default)(node, props, true);

        return node;
      },
      appendChild: function appendChild(node, parent) {
        var _this = this;

        if (parent.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return parent.childNodes.push(node);
        } else if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return node.childNodes.map(function (child) {
            return _this.appendChild(child, parent);
          });
        } else {
          return parent.appendChild(node);
        }
      },
      removeChild: function removeChild(node, parent) {
        var id = node.attr && node.attr[ID];
        if (id != null) {
          nodeMaps[id] = null;
        }
        return parent.removeChild(node);
      },
      replaceChild: function replaceChild(newChild, oldChild, parent) {
        var previousSibling = oldChild.previousSibling;
        var nextSibling = oldChild.nextSibling;
        this.removeChild(oldChild, parent);

        if (previousSibling) {
          this.insertAfter(newChild, previousSibling, parent);
        } else if (nextSibling) {
          this.insertBefore(newChild, nextSibling, parent);
        } else {
          this.appendChild(newChild, parent);
        }
      },
      insertAfter: function insertAfter(node, after, parent) {
        var _this2 = this;

        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return node.childNodes.map(function (child, index) {
            return _this2.insertAfter(child, node.childNodes[index - 1] || after, parent);
          });
        } else {
          return parent.insertAfter(node, after);
        }
      },
      insertBefore: function insertBefore(node, before, parent) {
        var _this3 = this;

        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return node.childNodes.map(function (child, index) {
            return _this3.insertBefore(child, before, parent);
          });
        } else {
          return parent.insertBefore(node, before);
        }
      },
      addEventListener: function addEventListener(node, eventName, eventHandler) {
        return node.addEvent(eventName, eventHandler);
      },
      removeEventListener: function removeEventListener(node, eventName, eventHandler) {
        return node.removeEvent(eventName, eventHandler);
      },
      removeAllEventListeners: function removeAllEventListeners(node) {
        // noop
      },
      removeAttribute: function removeAttribute(node, propKey, propValue) {
        if (propKey == ID) {
          nodeMaps[propValue] = null;
        }
        // Weex native will crash when pass null value
        return node.setAttr(propKey, undefined);
      },
      setAttribute: function setAttribute(node, propKey, propValue) {
        if (propKey == ID) {
          nodeMaps[propValue] = node;
        }

        return node.setAttr(propKey, propValue);
      },
      setStyles: function setStyles(node, styles) {
        // TODO if more then one style update, call setStyles will be better performance
        for (var key in styles) {
          var val = styles[key];
          val = (0, _unit.convertUnit)(val, key);
          node.setStyle(key, val);
        }
      },
      beforeRender: function beforeRender() {
        // Init rem unit
        (0, _unit.setRem)(this.getWindowWidth() / FULL_WIDTH_REM);
      },
      afterRender: function afterRender() {
        if (document && document.listener && document.listener.createFinish) {
          document.listener.createFinish(function () {
            // Make updates batched
            document.close();
          });
        }
      },
      getWindowWidth: function getWindowWidth() {
        return FULL_WIDTH_REM;
      }
    };

    exports.default = Driver;

  /***/ },
  /* 7 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = setNativeProps;

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _findDOMNode = __webpack_require__(8);

    var _findDOMNode2 = __webpack_require__(3).interopRequireDefault(_findDOMNode);

    var STYLE = 'style';
    var CHILDREN = 'children';

    function setNativeProps(node, props, disableSetStyles) {
      node = (0, _findDOMNode2.default)(node);

      for (var prop in props) {
        var value = props[prop];
        if (prop === CHILDREN) {
          continue;
        }

        if (value != null) {
          if (prop === STYLE) {
            if (disableSetStyles) {
              continue;
            }
            _host2.default.driver.setStyles(node, value);
          } else if (prop.substring(0, 2) === 'on') {
            var eventName = prop.slice(2).toLowerCase();
            _host2.default.driver.addEventListener(node, eventName, value);
          } else {
            _host2.default.driver.setAttribute(node, prop, value);
          }
        }
      }
    }

  /***/ },
  /* 8 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    function findDOMNode(instance) {
      if (instance == null) {
        return null;
      }

      // If a native node, weex may not export ownerDocument property
      if (instance.ownerDocument || instance.nodeType) {
        return instance;
      }

      // Native component
      if (instance._nativeNode) {
        return instance._nativeNode;
      }

      if (typeof instance == 'string') {
        return _host2.default.driver.getElementById(instance);
      }

      if (typeof instance.render !== 'function') {
        throw new Error('Appears to be neither Component nor DOMNode.');
      }

      // Composite component
      var internal = instance._internal;

      if (internal) {
        while (!internal._nativeNode) {
          internal = internal._renderedComponent;
          // If not mounted
          if (internal == null) {
            return null;
          }
        }
        return internal._nativeNode;
      } else {
        throw new Error('findDOMNode was called on an unmounted component.');
      }
    }

    exports.default = findDOMNode;

  /***/ },
  /* 9 */
  /***/ function(module, exports) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isRem = isRem;
    exports.calcRem = calcRem;
    exports.getRem = getRem;
    exports.setRem = setRem;
    exports.isUnitNumber = isUnitNumber;
    exports.convertUnit = convertUnit;
    /**
     * CSS properties which accept numbers but are not in units of "px".
     */
    var UNITLESS_NUMBER_PROPS = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridRow: true,
      gridColumn: true,
      fontWeight: true,
      lineClamp: true,
      // We make lineHeight default is px that is diff with w3c spec
      // lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // Weex only
      lines: true
    };
    var SUFFIX = 'rem';
    var REM_REG = /[-+]?\d*\.?\d+rem/g;

    var defaultRem = void 0;

    /**
     * Is string contains rem
     * @param {String} str
     * @returns {Boolean}
     */
    function isRem(str) {
      return typeof str === 'string' && str.indexOf(SUFFIX) !== -1;
    }

    /**
     * Calculate rem to pixels: '1.2rem' => 1.2 * rem
     * @param {String} str
     * @param {Number} rem
     * @returns {number}
     */
    function calcRem(str) {
      var rem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRem;

      return str.replace(REM_REG, function (remValue) {
        return parseFloat(remValue) * rem + 'px';
      });
    }

    function getRem() {
      return defaultRem;
    }

    function setRem(rem) {
      defaultRem = rem;
    }

    function isUnitNumber(val, prop) {
      return typeof val === 'number' && !UNITLESS_NUMBER_PROPS[prop];
    }

    function convertUnit(val, prop) {
      if (prop && isUnitNumber(val, prop)) {
        return val * defaultRem + 'px';
      } else if (isRem(val)) {
        return calcRem(val);
      }

      return val;
    }

  /***/ },
  /* 10 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _setNativeProps = __webpack_require__(7);

    var _setNativeProps2 = __webpack_require__(3).interopRequireDefault(_setNativeProps);

    var _unit = __webpack_require__(9);

    var _flexbox = __webpack_require__(11);

    var _flexbox2 = __webpack_require__(3).interopRequireDefault(_flexbox);

    var FULL_WIDTH_REM = 750; /**
                               * Web Browser driver
                               **/

    var STYLE = 'style';
    var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';

    var Driver = {
      getElementById: function getElementById(id) {
        return document.getElementById(id);
      },
      createBody: function createBody() {
        return document.body;
      },
      createFragment: function createFragment() {
        return document.createDocumentFragment();
      },
      createComment: function createComment(content) {
        return document.createComment(content);
      },
      createEmpty: function createEmpty() {
        return this.createComment(' empty ');
      },
      createText: function createText(text) {
        return document.createTextNode(text);
      },
      updateText: function updateText(node, text) {
        var textContentAttr = 'textContent' in document ? 'textContent' : 'nodeValue';
        node[textContentAttr] = text;
      },
      createElement: function createElement(component) {
        var node = document.createElement(component.type);
        var props = component.props;

        (0, _setNativeProps2.default)(node, props);

        return node;
      },
      appendChild: function appendChild(node, parent) {
        return parent.appendChild(node);
      },
      removeChild: function removeChild(node, parent) {
        // TODO, maybe has been removed when remove child
        if (node.parentNode === parent) {
          parent.removeChild(node);
        }
      },
      replaceChild: function replaceChild(newChild, oldChild, parent) {
        parent.replaceChild(newChild, oldChild);
      },
      insertAfter: function insertAfter(node, after, parent) {
        var nextSibling = after.nextSibling;
        if (nextSibling) {
          parent.insertBefore(node, nextSibling);
        } else {
          parent.appendChild(node);
        }
      },
      insertBefore: function insertBefore(node, before, parent) {
        parent.insertBefore(node, before);
      },
      addEventListener: function addEventListener(node, eventName, eventHandler) {
        return node.addEventListener(eventName, eventHandler);
      },
      removeEventListener: function removeEventListener(node, eventName, eventHandler) {
        return node.removeEventListener(eventName, eventHandler);
      },
      removeAllEventListeners: function removeAllEventListeners(node) {
        // TODO
      },
      removeAttribute: function removeAttribute(node, propKey) {
        if (propKey === 'className') {
          propKey = 'class';
        }

        if (node.nodeName.toLowerCase() == 'input' && (propKey == 'checked' && (node.type === 'checkbox' || node.type === 'radio') || propKey == 'value')) {
          node[propKey] = null;
        } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
          node.innerHTML = null;
        } else {
          node.removeAttribute(propKey);
        }
      },
      setAttribute: function setAttribute(node, propKey, propValue) {
        if (propKey === 'className') {
          propKey = 'class';
        }

        if (node.nodeName.toLowerCase() == 'input' && (propKey == 'checked' && (node.type === 'checkbox' || node.type === 'radio') || propKey == 'value')) {
          node[propKey] = propValue;
        } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
          node.innerHTML = propValue.__html;
        } else if (propValue != null) {
          node.setAttribute(propKey, propValue);
        }
      },
      setStyles: function setStyles(node, styles) {
        for (var prop in styles) {
          if (styles.hasOwnProperty(prop)) {
            var val = styles[prop];
            if (_flexbox2.default.isFlexProp(prop)) {
              _flexbox2.default[prop](val, node.style);
            } else {
              node.style[prop] = (0, _unit.convertUnit)(val, prop);
            }
          }
        }
      },
      beforeRender: function beforeRender() {
        // Init rem unit
        (0, _unit.setRem)(this.getWindowWidth() / FULL_WIDTH_REM);
      },
      getWindowWidth: function getWindowWidth() {
        return document.documentElement.clientWidth;
      }
    };

    exports.default = Driver;

  /***/ },
  /* 11 */
  /***/ function(module, exports) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BOX_ALIGN = {
      stretch: 'stretch',
      'flex-start': 'start',
      'flex-end': 'end',
      center: 'center'
    };

    var BOX_ORIENT = {
      row: 'horizontal',
      column: 'vertical'
    };

    var BOX_PACK = {
      'flex-start': 'start',
      'flex-end': 'end',
      center: 'center',
      'space-between': 'justify',
      'space-around': 'justify' // Just same as `space-between`
    };

    var FLEX_PROPS = {
      display: true,
      flex: true,
      alignItems: true,
      alignSelf: true,
      flexDirection: true,
      justifyContent: true,
      flexWrap: true
    };

    var Flexbox = {
      isFlexProp: function isFlexProp(prop) {
        return FLEX_PROPS[prop];
      },
      display: function display(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (value === 'flex') {
          style.display = '-webkit-box';
          style.display = '-webkit-flex';
          style.display = 'flex';
        } else {
          style.display = value;
        }

        return style;
      },
      flex: function flex(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        style.webkitBoxFlex = value;
        style.webkitFlex = value;
        style.flex = value;
        return style;
      },
      flexWrap: function flexWrap(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        style.flexWrap = value;
        return style;
      },
      alignItems: function alignItems(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        style.webkitBoxAlign = BOX_ALIGN[value];
        style.webkitAlignItems = value;
        style.alignItems = value;
        return style;
      },
      alignSelf: function alignSelf(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        style.webkitAlignSelf = value;
        style.alignSelf = value;
        return style;
      },
      flexDirection: function flexDirection(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        style.webkitBoxOrient = BOX_ORIENT[value];
        style.webkitFlexDirection = value;
        style.flexDirection = value;
        return style;
      },
      justifyContent: function justifyContent(value) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        style.webkitBoxPack = BOX_PACK[value];
        style.webkitJustifyContent = value;
        style.justifyContent = value;
        return style;
      }
    };

    exports.default = Flexbox;

  /***/ },
  /* 12 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    var _hook = __webpack_require__(13);

    var _hook2 = __webpack_require__(3).interopRequireDefault(_hook);

    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(_hook2.default);
    }

  /***/ },
  /* 13 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _instance = __webpack_require__(14);

    var _instance2 = __webpack_require__(3).interopRequireDefault(_instance);

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    exports.default = {
      ComponentTree: {
        getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
          return _instance2.default.get(node);
        },
        getNodeFromInstance: function getNodeFromInstance(inst) {
          // inst is an internal instance (but could be a composite)
          while (inst._renderedComponent) {
            inst = inst._renderedComponent;
          }

          if (inst) {
            return inst._nativeNode;
          } else {
            return null;
          }
        }
      },
      Mount: {
        _instancesByReactRootID: _host2.default.rootComponents,

        // Stub - React DevTools expects to find this method and replace it
        // with a wrapper in order to observe new root components being added
        _renderNewRootComponent: function _renderNewRootComponent() {}
      },
      Reconciler: {
        // Stubs - React DevTools expects to find these methods and replace them
        // with wrappers in order to observe components being mounted, updated and
        // unmounted
        mountComponent: function mountComponent() {},
        receiveComponent: function receiveComponent() {},
        unmountComponent: function unmountComponent() {}
      }
    };

  /***/ },
  /* 14 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _element = __webpack_require__(1);

    var _unmountComponentAtNode = __webpack_require__(15);

    var _unmountComponentAtNode2 = __webpack_require__(3).interopRequireDefault(_unmountComponentAtNode);

    var _instantiateComponent = __webpack_require__(16);

    var _instantiateComponent2 = __webpack_require__(3).interopRequireDefault(_instantiateComponent);

    var _shouldUpdateComponent = __webpack_require__(17);

    var _shouldUpdateComponent2 = __webpack_require__(3).interopRequireDefault(_shouldUpdateComponent);

    var _root = __webpack_require__(18);

    var _root2 = __webpack_require__(3).interopRequireDefault(_root);

    var _hook = __webpack_require__(13);

    var _hook2 = __webpack_require__(3).interopRequireDefault(_hook);

    /**
     * Instance manager
     */
    var KEY = '$$instance';

    exports.default = {
      set: function set(node, instance) {
        if (!node[KEY]) {
          node[KEY] = instance;
          // Record root instance to roots map
          if (instance.rootID) {
            _host2.default.rootInstances[instance.rootID] = instance;
            _host2.default.rootComponents[instance.rootID] = instance._internal;
          }
        }
      },
      get: function get(node) {
        return node[KEY];
      },
      remove: function remove(node) {
        var instance = this.get(node);
        if (instance) {
          node[KEY] = null;
          if (instance.rootID) {
            delete _host2.default.rootComponents[instance.rootID];
            delete _host2.default.rootInstances[instance.rootID];
          }
        }
      },
      render: function render(element, container) {
        var prevRootInstance = this.get(container);
        var hasPrevRootInstance = prevRootInstance && prevRootInstance.isRootComponent;

        if (hasPrevRootInstance) {
          var prevRenderedComponent = prevRootInstance.getRenderedComponent();
          var prevElement = prevRenderedComponent._currentElement;
          if ((0, _shouldUpdateComponent2.default)(prevElement, element)) {
            var prevUnmaskedContext = prevRenderedComponent._context;
            prevRenderedComponent.updateComponent(prevElement, element, prevUnmaskedContext, prevUnmaskedContext);

            return prevRootInstance;
          } else {
            _hook2.default.Reconciler.unmountComponent(prevRootInstance);
            (0, _unmountComponentAtNode2.default)(container);
          }
        }

        var wrappedElement = (0, _element.createElement)(_root2.default, null, element);
        var renderedComponent = (0, _instantiateComponent2.default)(wrappedElement);
        var defaultContext = {};
        var rootInstance = renderedComponent.mountComponent(container, defaultContext);
        this.set(container, rootInstance);
        _hook2.default.Mount._renderNewRootComponent(rootInstance._internal);

        return rootInstance;
      }
    };

  /***/ },
  /* 15 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = unmountComponentAtNode;

    var _instance = __webpack_require__(14);

    var _instance2 = __webpack_require__(3).interopRequireDefault(_instance);

    function unmountComponentAtNode(node) {
      var component = _instance2.default.get(node);

      if (!component) {
        return false;
      }

      _instance2.default.remove(node);
      component._internal.unmountComponent();

      return true;
    }

  /***/ },
  /* 16 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    function instantiateComponent(element) {
      // If only one or null, unzip array
      if (Array.isArray(element) && element.length < 2) {
        element = element[0];
      }

      var instance = void 0;

      if (element === undefined || element === null || element === false || element === true) {
        instance = new _host2.default.EmptyComponent();
      } else if (Array.isArray(element)) {
        instance = new _host2.default.FragmentComponent(element);
      } else if ((typeof element === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(element)) === 'object' && element.type) {
        // Special case string values
        if (typeof element.type === 'string') {
          instance = new _host2.default.NativeComponent(element);
        } else {
          instance = new _host2.default.CompositeComponent(element);
        }
      } else if (typeof element === 'string' || typeof element === 'number') {
        instance = new _host2.default.TextComponent(element);
      } else {
        throw Error('Invalid element type ' + JSON.stringify(element));
      }

      instance._mountIndex = 0;

      return instance;
    }

    exports.default = instantiateComponent;

  /***/ },
  /* 17 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function shouldUpdateComponent(prevElement, nextElement) {
      // TODO: prevElement and nextElement could be array
      var prevEmpty = prevElement === null;
      var nextEmpty = nextElement === null;
      if (prevEmpty || nextEmpty) {
        return prevEmpty === nextEmpty;
      }

      var prevType = typeof prevElement === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(prevElement);
      var nextType = typeof nextElement === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(nextElement);
      if (prevType === 'string' || prevType === 'number') {
        return nextType === 'string' || nextType === 'number';
      } else {
        return prevType === 'object' && nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
      }
    }

    exports.default = shouldUpdateComponent;

  /***/ },
  /* 18 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _component = __webpack_require__(19);

    var _component2 = __webpack_require__(3).interopRequireDefault(_component);

    var rootCounter = 1;

    var Root = function (_Component) {
      __webpack_require__(3).inherits(Root, _Component);

      function Root() {
        var arguments$1 = arguments;

        var _ref;

        var _temp, _this, _ret;

        __webpack_require__(3).classCallCheck(this, Root);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments$1[_key];
        }

        return _ret = (_temp = (_this = __webpack_require__(3).possibleConstructorReturn(this, (_ref = Root.__proto__ || Object.getPrototypeOf(Root)).call.apply(_ref, [this].concat(args))), _this), _this.rootID = rootCounter++, _temp), __webpack_require__(3).possibleConstructorReturn(_this, _ret);
      }

      __webpack_require__(3).createClass(Root, [{
        key: 'isRootComponent',
        value: function isRootComponent() {}
      }, {
        key: 'render',
        value: function render() {
          return this.props.children;
        }
      }, {
        key: 'getPublicInstance',
        value: function getPublicInstance() {
          return this.getRenderedComponent().getPublicInstance();
        }
      }, {
        key: 'getRenderedComponent',
        value: function getRenderedComponent() {
          return this._internal._renderedComponent;
        }
      }]);

      return Root;
    }(_component2.default);

    exports.default = Root;

  /***/ },
  /* 19 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    /**
     * Base component class.
     */
    var Component = function () {
      function Component(props, context, updater) {
        __webpack_require__(3).classCallCheck(this, Component);

        this.props = props;
        this.context = context;
        this.refs = {};
        this.updater = updater;
      }

      __webpack_require__(3).createClass(Component, [{
        key: "isComponentClass",
        value: function isComponentClass() {}
      }, {
        key: "setState",
        value: function setState(partialState, callback) {
          this.updater.setState(this, partialState, callback);
        }
      }, {
        key: "forceUpdate",
        value: function forceUpdate(callback) {
          this.updater.forceUpdate(this, callback);
        }
      }]);

      return Component;
    }();

    exports.default = Component;

  /***/ },
  /* 20 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _component = __webpack_require__(19);

    var _component2 = __webpack_require__(3).interopRequireDefault(_component);

    /**
     * Pure component class.
     */
    var PureComponent = function (_Component) {
      __webpack_require__(3).inherits(PureComponent, _Component);

      function PureComponent(props, context) {
        __webpack_require__(3).classCallCheck(this, PureComponent);

        return __webpack_require__(3).possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call(this, props, context));
      }

      __webpack_require__(3).createClass(PureComponent, [{
        key: 'isPureComponentClass',
        value: function isPureComponentClass() {}
      }]);

      return PureComponent;
    }(_component2.default);

    exports.default = PureComponent;

  /***/ },
  /* 21 */
  /***/ function(module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Current PropTypes only export some api with react, not validate in runtime.
     */

    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName, location, propFullName) {
        // Noop
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName) {
        // Noop
      }
      return createChainableTypeChecker(validate);
    }

    var typeChecker = createTypeChecker();

    exports.default = {
      array: typeChecker,
      bool: typeChecker,
      func: typeChecker,
      number: typeChecker,
      object: typeChecker,
      string: typeChecker,
      symbol: typeChecker,

      element: typeChecker,
      node: typeChecker,
      any: typeChecker,
      arrayOf: typeChecker,
      instanceOf: typeChecker,
      objectOf: typeChecker,
      oneOf: typeChecker,
      oneOfType: typeChecker,
      shape: typeChecker
    };

  /***/ },
  /* 22 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _injectComponent = __webpack_require__(23);

    var _injectComponent2 = __webpack_require__(3).interopRequireDefault(_injectComponent);

    var _instance = __webpack_require__(14);

    var _instance2 = __webpack_require__(3).interopRequireDefault(_instance);

    var _unit = __webpack_require__(9);

    var _driver = __webpack_require__(5);

    function render(element, container, callback) {
      // Inject component
      (0, _injectComponent2.default)();
      // Inject driver
      (0, _driver.injectDriver)();

      var driver = (0, _driver.getDriver)();

      // Before render callback
      driver.beforeRender && driver.beforeRender(element, container);

      // Real native root node is body
      if (container == null) {
        container = driver.createBody();
      }

      var rootComponent = _instance2.default.render(element, container);
      var component = rootComponent.getPublicInstance();

      if (callback) {
        callback.call(component);
      }
      // After render callback
      driver.afterRender && driver.afterRender(component);

      return component;
    }

    exports.default = render;

  /***/ },
  /* 23 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = injectComponent;

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _empty = __webpack_require__(24);

    var _empty2 = __webpack_require__(3).interopRequireDefault(_empty);

    var _native = __webpack_require__(25);

    var _native2 = __webpack_require__(3).interopRequireDefault(_native);

    var _text = __webpack_require__(28);

    var _text2 = __webpack_require__(3).interopRequireDefault(_text);

    var _composite = __webpack_require__(29);

    var _composite2 = __webpack_require__(3).interopRequireDefault(_composite);

    var _fragment = __webpack_require__(33);

    var _fragment2 = __webpack_require__(3).interopRequireDefault(_fragment);

    function injectComponent() {
      // Inject component class
      _host2.default.EmptyComponent = _empty2.default;
      _host2.default.NativeComponent = _native2.default;
      _host2.default.TextComponent = _text2.default;
      _host2.default.FragmentComponent = _fragment2.default;
      _host2.default.CompositeComponent = _composite2.default;
    }

  /***/ },
  /* 24 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    /**
     * Empty Component
     */
    var EmptyComponent = function () {
      function EmptyComponent() {
        __webpack_require__(3).classCallCheck(this, EmptyComponent);

        this._currentElement = null;
      }

      __webpack_require__(3).createClass(EmptyComponent, [{
        key: 'mountComponent',
        value: function mountComponent(parent, context, childMounter) {
          this._parent = parent;
          this._context = context;

          var instance = {
            _internal: this
          };

          var nativeNode = this.getNativeNode();
          if (childMounter) {
            childMounter(nativeNode, parent);
          } else {
            _host2.default.driver.appendChild(nativeNode, parent);
          }

          return instance;
        }
      }, {
        key: 'unmountComponent',
        value: function unmountComponent(shouldNotRemoveChild) {
          if (this._nativeNode && !shouldNotRemoveChild) {
            _host2.default.driver.removeChild(this._nativeNode, this._parent);
          }

          this._nativeNode = null;
          this._parent = null;
          this._context = null;
        }
      }, {
        key: 'updateComponent',
        value: function updateComponent() {
          // noop
        }
      }, {
        key: 'getNativeNode',
        value: function getNativeNode() {
          // Weex native node
          if (this._nativeNode == null) {
            this._nativeNode = _host2.default.driver.createEmpty();
          }

          return this._nativeNode;
        }
      }]);

      return EmptyComponent;
    }();

    exports.default = EmptyComponent;

  /***/ },
  /* 25 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _ref = __webpack_require__(26);

    var _ref2 = __webpack_require__(3).interopRequireDefault(_ref);

    var _instantiateComponent = __webpack_require__(16);

    var _instantiateComponent2 = __webpack_require__(3).interopRequireDefault(_instantiateComponent);

    var _shouldUpdateComponent = __webpack_require__(17);

    var _shouldUpdateComponent2 = __webpack_require__(3).interopRequireDefault(_shouldUpdateComponent);

    var _getElementKeyName = __webpack_require__(27);

    var _getElementKeyName2 = __webpack_require__(3).interopRequireDefault(_getElementKeyName);

    var _instance = __webpack_require__(14);

    var _instance2 = __webpack_require__(3).interopRequireDefault(_instance);

    var _hook = __webpack_require__(13);

    var _hook2 = __webpack_require__(3).interopRequireDefault(_hook);

    var STYLE = 'style';
    var CHILDREN = 'children';
    var TREE = 'tree';

    /**
     * Native Component
     */

    var NativeComponent = function () {
      function NativeComponent(element) {
        __webpack_require__(3).classCallCheck(this, NativeComponent);

        this._currentElement = element;
      }

      __webpack_require__(3).createClass(NativeComponent, [{
        key: 'mountComponent',
        value: function mountComponent(parent, context, childMounter) {
          // Parent native element
          this._parent = parent;
          this._context = context;
          this._mountID = _host2.default.mountID++;

          var props = this._currentElement.props;
          var type = this._currentElement.type;
          var instance = {
            _internal: this,
            type: type,
            props: props
          };
          var appendType = props.append; // Default is node

          this._instance = instance;

          // Clone a copy for style diff
          this._prevStyleCopy = Object.assign({}, props.style);

          var nativeNode = this.getNativeNode();

          if (appendType !== TREE) {
            if (childMounter) {
              childMounter(nativeNode, parent);
            } else {
              _host2.default.driver.appendChild(nativeNode, parent);
            }
          }

          if (this._currentElement && this._currentElement.ref) {
            _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
          }

          // Process children
          var children = props.children;
          if (children != null) {
            this.mountChildren(children, context);
          }

          if (appendType === TREE) {
            if (childMounter) {
              childMounter(nativeNode, parent);
            } else {
              _host2.default.driver.appendChild(nativeNode, parent);
            }
          }

          _hook2.default.Reconciler.mountComponent(this);

          return instance;
        }
      }, {
        key: 'mountChildren',
        value: function mountChildren(children, context) {
          var _this = this;

          if (!Array.isArray(children)) {
            children = [children];
          }

          var renderedChildren = {};

          var renderedChildrenImage = children.map(function (element, index) {
            var renderedChild = (0, _instantiateComponent2.default)(element);
            var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
            renderedChildren[name] = renderedChild;
            renderedChild._mountIndex = index;
            // Mount
            var mountImage = renderedChild.mountComponent(_this.getNativeNode(), context);
            return mountImage;
          });

          this._renderedChildren = renderedChildren;

          return renderedChildrenImage;
        }
      }, {
        key: 'unmountChildren',
        value: function unmountChildren() {
          var renderedChildren = this._renderedChildren;

          if (renderedChildren) {
            for (var name in renderedChildren) {
              var renderedChild = renderedChildren[name];
              renderedChild.unmountComponent();
            }
            this._renderedChildren = null;
          }
        }
      }, {
        key: 'unmountComponent',
        value: function unmountComponent(shouldNotRemoveChild) {
          if (this._nativeNode) {
            var ref = this._currentElement.ref;
            if (ref) {
              _ref2.default.detach(this._currentElement._owner, ref, this);
            }

            _instance2.default.remove(this._nativeNode);
            if (!shouldNotRemoveChild) {
              _host2.default.driver.removeChild(this._nativeNode, this._parent);
            }
            _host2.default.driver.removeAllEventListeners(this._nativeNode);
          }

          this.unmountChildren();

          _hook2.default.Reconciler.unmountComponent(this);

          this._currentElement = null;
          this._nativeNode = null;
          this._parent = null;
          this._context = null;
          this._instance = null;
          this._prevStyleCopy = null;
        }
      }, {
        key: 'updateComponent',
        value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
          // Replace current element
          this._currentElement = nextElement;

          _ref2.default.update(prevElement, nextElement, this);

          var prevProps = prevElement.props;
          var nextProps = nextElement.props;

          this.updateProperties(prevProps, nextProps);
          this.updateChildren(nextProps.children, nextContext);

          _hook2.default.Reconciler.receiveComponent(this);
        }
      }, {
        key: 'updateProperties',
        value: function updateProperties(prevProps, nextProps) {
          var this$1 = this;

          var propKey = void 0;
          var styleName = void 0;
          var styleUpdates = void 0;
          for (propKey in prevProps) {
            if (propKey === CHILDREN || nextProps.hasOwnProperty(propKey) || !prevProps.hasOwnProperty(propKey) || prevProps[propKey] == null) {
              continue;
            }
            if (propKey === STYLE) {
              var lastStyle = this$1._prevStyleCopy;
              for (styleName in lastStyle) {
                if (lastStyle.hasOwnProperty(styleName)) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = '';
                }
              }
              this$1._prevStyleCopy = null;
            } else if (propKey.substring(0, 2) === 'on') {
              if (prevProps[propKey]) {
                _host2.default.driver.removeEventListener(this$1.getNativeNode(), propKey.slice(2).toLowerCase(), prevProps[propKey]);
              }
            } else {
              _host2.default.driver.removeAttribute(this$1.getNativeNode(), propKey, prevProps[propKey]);
            }
          }

          for (propKey in nextProps) {
            var nextProp = nextProps[propKey];
            var prevProp = propKey === STYLE ? this$1._prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined;
            if (propKey === CHILDREN || !nextProps.hasOwnProperty(propKey) || nextProp === prevProp || nextProp == null && prevProp == null) {
              continue;
            }
            // Update style
            if (propKey === STYLE) {
              if (nextProp) {
                // Clone property
                nextProp = this$1._prevStyleCopy = Object.assign({}, nextProp);
              } else {
                this$1._prevStyleCopy = null;
              }

              if (prevProp != null) {
                // Unset styles on `prevProp` but not on `nextProp`.
                for (styleName in prevProp) {
                  if (prevProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                    styleUpdates = styleUpdates || {};
                    styleUpdates[styleName] = '';
                  }
                }
                // Update styles that changed since `prevProp`.
                for (styleName in nextProp) {
                  if (nextProp.hasOwnProperty(styleName) && prevProp[styleName] !== nextProp[styleName]) {
                    styleUpdates = styleUpdates || {};
                    styleUpdates[styleName] = nextProp[styleName];
                  }
                }
              } else {
                // Assign next prop when prev style is null
                styleUpdates = nextProp;
              }

              // Update event binding
            } else if (propKey.substring(0, 2) === 'on') {
              if (prevProp != null) {
                _host2.default.driver.removeEventListener(this$1.getNativeNode(), propKey.slice(2).toLowerCase(), prevProp);
              }

              if (nextProp != null) {
                _host2.default.driver.addEventListener(this$1.getNativeNode(), propKey.slice(2).toLowerCase(), nextProp);
              }
              // Update other property
            } else {
              if (nextProp != null) {
                _host2.default.driver.setAttribute(this$1.getNativeNode(), propKey, nextProp);
              } else {
                _host2.default.driver.removeAttribute(this$1.getNativeNode(), propKey, prevProps[propKey]);
              }
            }
          }

          if (styleUpdates) {
            _host2.default.driver.setStyles(this.getNativeNode(), styleUpdates);
          }
        }
      }, {
        key: 'updateChildren',
        value: function updateChildren(nextChildrenElements, context) {
          var _this2 = this;

          // prev rendered children
          var prevChildren = this._renderedChildren;

          if (nextChildrenElements == null && prevChildren == null) {
            return;
          }

          var nextChildren = {};
          var oldNodes = {};

          if (nextChildrenElements != null) {
            if (!Array.isArray(nextChildrenElements)) {
              nextChildrenElements = [nextChildrenElements];
            }

            // Update next children elements
            for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
              var nextElement = nextChildrenElements[index];
              var name = (0, _getElementKeyName2.default)(nextChildren, nextElement, index);
              var prevChild = prevChildren && prevChildren[name];
              var prevElement = prevChild && prevChild._currentElement;

              if (prevChild != null && (0, _shouldUpdateComponent2.default)(prevElement, nextElement)) {
                // Pass the same context when updating chidren
                prevChild.updateComponent(prevElement, nextElement, context, context);
                nextChildren[name] = prevChild;
              } else {
                // Unmount the prevChild when nextChild is different element type.
                if (prevChild) {
                  var oldChild = prevChild.getNativeNode();
                  // Delay remove child
                  prevChild.unmountComponent(true);
                  oldNodes[name] = oldChild;
                }
                // The child must be instantiated before it's mounted.
                nextChildren[name] = (0, _instantiateComponent2.default)(nextElement);
              }
            }
          }

          // Unmount children that are no longer present.
          if (prevChildren != null) {
            for (var _name in prevChildren) {
              if (!prevChildren.hasOwnProperty(_name)) {
                continue;
              }
              var _prevChild = prevChildren[_name];
              if (!nextChildren[_name]) {
                _prevChild.unmountComponent();
              }
            }
          }

          if (nextChildren != null) {
            (function () {
              // `nextIndex` will increment for each child in `nextChildren`, but
              // `lastIndex` will be the last index visited in `prevChildren`.
              var lastIndex = 0;
              var nextIndex = 0;
              var lastPlacedNode = null;

              var _loop = function _loop(_name2) {
                if (!nextChildren.hasOwnProperty(_name2)) {
                  return 'continue';
                }

                var nextChild = nextChildren[_name2];
                var prevChild = prevChildren && prevChildren[_name2];

                if (prevChild === nextChild) {
                  // If the index of `child` is less than `lastIndex`, then it needs to
                  // be moved. Otherwise, we do not need to move it because a child will be
                  // inserted or moved before `child`.
                  if (prevChild._mountIndex < lastIndex) {
                    _host2.default.driver.insertAfter(prevChild.getNativeNode(), lastPlacedNode, _this2.getNativeNode());
                  }

                  lastIndex = Math.max(prevChild._mountIndex, lastIndex);
                  prevChild._mountIndex = nextIndex;
                } else {
                  if (prevChild != null) {
                    // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
                    lastIndex = Math.max(prevChild._mountIndex, lastIndex);
                  }

                  nextChild.mountComponent(_this2.getNativeNode(), context, function (newChild, parent) {
                    var oldChild = oldNodes[_name2];

                    if (oldChild) {
                      _host2.default.driver.replaceChild(newChild, oldChild, parent);
                    } else if (lastPlacedNode) {
                      _host2.default.driver.insertAfter(newChild, lastPlacedNode, parent);
                    } else {
                      _host2.default.driver.appendChild(newChild, parent);
                    }
                  });
                  nextChild._mountIndex = nextIndex;
                }

                nextIndex++;
                lastPlacedNode = nextChild.getNativeNode();
              };

              for (var _name2 in nextChildren) {
                var _ret2 = _loop(_name2);

                if (_ret2 === 'continue') { continue; }
              }
            })();
          }

          this._renderedChildren = nextChildren;
        }
      }, {
        key: 'getNativeNode',
        value: function getNativeNode() {
          if (this._nativeNode == null) {
            this._nativeNode = _host2.default.driver.createElement(this._instance);
            _instance2.default.set(this._nativeNode, this._instance);
          }

          return this._nativeNode;
        }
      }, {
        key: 'getPublicInstance',
        value: function getPublicInstance() {
          return this.getNativeNode();
        }
      }, {
        key: 'getName',
        value: function getName() {
          return this._currentElement.type;
        }
      }]);

      return NativeComponent;
    }();

    exports.default = NativeComponent;

  /***/ },
  /* 26 */
  /***/ function(module, exports) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*
     * Ref manager
     */

    exports.default = {
      update: function update(prevElement, nextElement, component) {
        var prevRef = prevElement != null && prevElement.ref;
        var nextRef = nextElement != null && nextElement.ref;

        // Update refs in owner component
        if (prevRef !== nextRef) {
          // Detach prev RenderedElement's ref
          prevRef != null && this.detach(prevElement._owner, prevRef, component);
          // Attach next RenderedElement's ref
          nextRef != null && this.attach(nextElement._owner, nextRef, component);
        }
      },
      attach: function attach(ownerComponent, ref, component) {
        if (!ownerComponent) {
          throw new Error('You might be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of Rax loaded.');
        }

        var instance = component.getPublicInstance();
        if (typeof ref === 'function') {
          ref(instance);
        } else {
          ownerComponent._instance.refs[ref] = instance;
        }
      },
      detach: function detach(ownerComponent, ref, component) {
        if (typeof ref === 'function') {
          // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
          ref(null);
        } else {
          // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
          var instance = component.getPublicInstance();
          if (ownerComponent._instance.refs[ref] === instance) {
            delete ownerComponent._instance.refs[ref];
          }
        }
      }
    };

  /***/ },
  /* 27 */
  /***/ function(module, exports) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.default = function (children, element, index) {
      var elementKey = element && element.key;
      var hasKey = typeof elementKey === 'string';
      var defaultName = '.' + index.toString(36);

      if (hasKey) {
        var keyName = '$' + elementKey;
        // Child keys must be unique.
        var keyUnique = children[keyName] === undefined;
        // Only the first child will be used when encountered two children with the same key
        if (!keyUnique) { console.warn('Encountered two children with the same key "' + elementKey + '".'); }

        return keyUnique ? keyName : defaultName;
      } else {
        return defaultName;
      }
    };

  /***/ },
  /* 28 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _hook = __webpack_require__(13);

    var _hook2 = __webpack_require__(3).interopRequireDefault(_hook);

    /**
     * Text Component
     */
    var TextComponent = function () {
      function TextComponent(element) {
        __webpack_require__(3).classCallCheck(this, TextComponent);

        this._currentElement = element;
        this._stringText = String(element);
      }

      __webpack_require__(3).createClass(TextComponent, [{
        key: 'mountComponent',
        value: function mountComponent(parent, context, childMounter) {
          this._parent = parent;
          this._context = context;
          this._mountID = _host2.default.mountID++;

          // Weex dom operation
          var nativeNode = this.getNativeNode();

          if (childMounter) {
            childMounter(nativeNode, parent);
          } else {
            _host2.default.driver.appendChild(nativeNode, parent);
          }

          var instance = {
            _internal: this
          };

          _hook2.default.Reconciler.mountComponent(this);

          return instance;
        }
      }, {
        key: 'unmountComponent',
        value: function unmountComponent(shouldNotRemoveChild) {
          if (this._nativeNode && !shouldNotRemoveChild) {
            _host2.default.driver.removeChild(this._nativeNode, this._parent);
          }

          _hook2.default.Reconciler.unmountComponent(this);

          this._currentElement = null;
          this._nativeNode = null;
          this._parent = null;
          this._context = null;
          this._stringText = null;
        }
      }, {
        key: 'updateComponent',
        value: function updateComponent(prevElement, nextElement, context) {
          // If some text do noting
          if (prevElement !== nextElement) {
            // Replace current element
            this._currentElement = nextElement;
            // Devtool read the latest stringText value
            this._stringText = String(nextElement);
            _host2.default.driver.updateText(this.getNativeNode(), nextElement);
            _hook2.default.Reconciler.receiveComponent(this);
          }
        }
      }, {
        key: 'getNativeNode',
        value: function getNativeNode() {
          if (this._nativeNode == null) {
            this._nativeNode = _host2.default.driver.createText(this._stringText);
          }
          return this._nativeNode;
        }
      }]);

      return TextComponent;
    }();

    exports.default = TextComponent;

  /***/ },
  /* 29 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _stateless = __webpack_require__(30);

    var _stateless2 = __webpack_require__(3).interopRequireDefault(_stateless);

    var _updater = __webpack_require__(31);

    var _updater2 = __webpack_require__(3).interopRequireDefault(_updater);

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _ref = __webpack_require__(26);

    var _ref2 = __webpack_require__(3).interopRequireDefault(_ref);

    var _instantiateComponent = __webpack_require__(16);

    var _instantiateComponent2 = __webpack_require__(3).interopRequireDefault(_instantiateComponent);

    var _shouldUpdateComponent = __webpack_require__(17);

    var _shouldUpdateComponent2 = __webpack_require__(3).interopRequireDefault(_shouldUpdateComponent);

    var _shallowEqual = __webpack_require__(32);

    var _shallowEqual2 = __webpack_require__(3).interopRequireDefault(_shallowEqual);

    var _hook = __webpack_require__(13);

    var _hook2 = __webpack_require__(3).interopRequireDefault(_hook);

    function performInSandbox(fn, handleError) {
      try {
        return fn();
      } catch (e) {
        if (handleError) {
          handleError(e);
        } else {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      }
    }

    /**
     * Composite Component
     */

    var CompositeComponent = function () {
      function CompositeComponent(element) {
        __webpack_require__(3).classCallCheck(this, CompositeComponent);

        this._currentElement = element;
      }

      __webpack_require__(3).createClass(CompositeComponent, [{
        key: 'getName',
        value: function getName() {
          var type = this._currentElement.type;
          var constructor = this._instance && this._instance.constructor;
          return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
        }
      }, {
        key: 'mountComponent',
        value: function mountComponent(parent, context, childMounter) {
          this._parent = parent;
          this._context = context;
          this._mountID = _host2.default.mountID++;
          this._updateCount = 0;

          var Component = this._currentElement.type;
          var publicProps = this._currentElement.props;
          var isComponentClass = Component.prototype && Component.prototype.isComponentClass;
          // Class stateless component without state but have lifecycles
          var isStatelessClasss = Component.prototype.render;

          // Context process
          var publicContext = this._processContext(context);

          // Initialize the public class
          var instance = void 0;
          var renderedElement = void 0;

          if (isComponentClass || isStatelessClasss) {
            // Component instance
            instance = new Component(publicProps, publicContext, _updater2.default);
          } else if (typeof Component === 'function') {
            // Functional stateless component without state and lifecycles
            instance = new _stateless2.default(Component);
          } else {
            throw Error('Invalid component type ' + JSON.stringify(Component));
          }

          // These should be set up in the constructor, but as a convenience for
          // simpler class abstractions, we set them up after the fact.
          instance.props = publicProps;
          instance.context = publicContext;
          instance.refs = {};

          // Inject the updater into instance
          instance.updater = _updater2.default;
          instance._internal = this;
          this._instance = instance;

          // Init state, must be set to an object or null
          var initialState = instance.state;
          if (initialState === undefined) {
            // TODO clone the state?
            instance.state = initialState = null;
          }

          performInSandbox(function () {
            if (instance.componentWillMount) {
              instance.componentWillMount();
            }
          });

          if (renderedElement == null) {
            _host2.default.component = this;
            // Process pending state when call setState in componentWillMount
            instance.state = this._processPendingState(publicProps, publicContext);

            // FIXME: handleError should named as lifecycles
            var handleError = void 0;
            if (typeof instance.handleError === 'function') {
              handleError = function handleError(e) {
                instance.handleError(e);
              };
            }

            performInSandbox(function () {
              renderedElement = instance.render();
            }, handleError);

            _host2.default.component = null;
          }

          this._renderedComponent = (0, _instantiateComponent2.default)(renderedElement);
          this._renderedComponent.mountComponent(this._parent, this._processChildContext(context), childMounter);

          if (this._currentElement && this._currentElement.ref) {
            _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
          }

          performInSandbox(function () {
            if (instance.componentDidMount) {
              instance.componentDidMount();
            }
          });

          _hook2.default.Reconciler.mountComponent(this);

          return instance;
        }
      }, {
        key: 'unmountComponent',
        value: function unmountComponent(shouldNotRemoveChild) {
          var instance = this._instance;

          performInSandbox(function () {
            if (instance.componentWillUnmount) {
              instance.componentWillUnmount();
            }
          });

          _hook2.default.Reconciler.unmountComponent(this);

          instance._internal = null;

          if (this._renderedComponent != null) {
            var ref = this._currentElement.ref;
            if (ref) {
              _ref2.default.detach(this._currentElement._owner, ref, this);
            }

            this._renderedComponent.unmountComponent(shouldNotRemoveChild);
            this._renderedComponent = null;
            this._instance = null;
          }

          this._currentElement = null;

          // Reset pending fields
          // Even if this component is scheduled for another update in ReactUpdates,
          // it would still be ignored because these fields are reset.
          this._pendingStateQueue = null;
          this._pendingForceUpdate = false;

          // These fields do not really need to be reset since this object is no
          // longer accessible.
          this._context = null;
        }

        /**
         * Filters the context object to only contain keys specified in
         * `contextTypes`
         */

      }, {
        key: '_processContext',
        value: function _processContext(context) {
          var Component = this._currentElement.type;
          var contextTypes = Component.contextTypes;
          if (!contextTypes) {
            return {};
          }
          var maskedContext = {};
          for (var contextName in contextTypes) {
            maskedContext[contextName] = context[contextName];
          }
          return maskedContext;
        }
      }, {
        key: '_processChildContext',
        value: function _processChildContext(currentContext) {
          var instance = this._instance;
          var childContext = instance.getChildContext && instance.getChildContext();
          if (childContext) {
            return Object.assign({}, currentContext, childContext);
          }
          return currentContext;
        }
      }, {
        key: '_processPendingState',
        value: function _processPendingState(props, context) {
          var instance = this._instance;
          var queue = this._pendingStateQueue;
          if (!queue) {
            return instance.state;
          }
          // Reset pending queue
          this._pendingStateQueue = null;
          var nextState = Object.assign({}, instance.state);
          for (var i = 0; i < queue.length; i++) {
            var partial = queue[i];
            Object.assign(nextState, typeof partial === 'function' ? partial.call(instance, nextState, props, context) : partial);
          }

          return nextState;
        }
      }, {
        key: 'updateComponent',
        value: function updateComponent(prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
          var _this = this;

          var instance = this._instance;

          if (!instance) {
            console.error('Update component \'' + this.getName() + '\' that has already been unmounted (or failed to mount).');
          }

          var willReceive = false;
          var nextContext = void 0;
          var nextProps = void 0;

          // Determine if the context has changed or not
          if (this._context === nextUnmaskedContext) {
            nextContext = instance.context;
          } else {
            nextContext = this._processContext(nextUnmaskedContext);
            willReceive = true;
          }

          // Distinguish between a props update versus a simple state update
          if (prevElement === nextElement) {
            // Skip checking prop types again -- we don't read component.props to avoid
            // warning for DOM component props in this upgrade
            nextProps = nextElement.props;
          } else {
            nextProps = nextElement.props;
            willReceive = true;
          }

          if (willReceive && instance.componentWillReceiveProps) {
            // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
            this._pendingState = true;
            performInSandbox(function () {
              instance.componentWillReceiveProps(nextProps, nextContext);
            });
            this._pendingState = false;
          }

          // Update refs
          _ref2.default.update(prevElement, nextElement, this);

          // Shoud update always default
          var shouldUpdate = true;
          var prevProps = instance.props;
          var prevState = instance.state;
          // TODO: could delay execution processPendingState
          var nextState = this._processPendingState(nextProps, nextContext);

          // ShouldComponentUpdate is not called when forceUpdate is used
          if (!this._pendingForceUpdate) {
            if (instance.shouldComponentUpdate) {
              shouldUpdate = performInSandbox(function () {
                return instance.shouldComponentUpdate(nextProps, nextState, nextContext);
              });
            } else if (instance.isPureComponentClass) {
              shouldUpdate = !(0, _shallowEqual2.default)(prevProps, nextProps) || !(0, _shallowEqual2.default)(prevState, nextState);
            }
          }

          if (shouldUpdate) {
            (function () {
              _this._pendingForceUpdate = false;
              // Will set `this.props`, `this.state` and `this.context`.
              var prevContext = instance.context;

              // Cannot use this.setState() in componentWillUpdate.
              // If need to update state in response to a prop change, use componentWillReceiveProps instead.
              performInSandbox(function () {
                if (instance.componentWillUpdate) {
                  instance.componentWillUpdate(nextProps, nextState, nextContext);
                }
              });

              // Replace with next
              _this._currentElement = nextElement;
              _this._context = nextUnmaskedContext;
              instance.props = nextProps;
              instance.state = nextState;
              instance.context = nextContext;

              _this._updateRenderedComponent(nextUnmaskedContext);

              performInSandbox(function () {
                if (instance.componentDidUpdate) {
                  instance.componentDidUpdate(prevProps, prevState, prevContext);
                }
              });

              _this._updateCount++;
            })();
          } else {
            // If it's determined that a component should not update, we still want
            // to set props and state but we shortcut the rest of the update.
            this._currentElement = nextElement;
            this._context = nextUnmaskedContext;
            instance.props = nextProps;
            instance.state = nextState;
            instance.context = nextContext;
          }

          _hook2.default.Reconciler.receiveComponent(this);
        }

        /**
         * Call the component's `render` method and update the DOM accordingly.
         */

      }, {
        key: '_updateRenderedComponent',
        value: function _updateRenderedComponent(context) {
          var _this2 = this;

          var prevRenderedComponent = this._renderedComponent;
          var prevRenderedElement = prevRenderedComponent._currentElement;

          var instance = this._instance;
          var nextRenderedElement = void 0;

          _host2.default.component = this;

          performInSandbox(function () {
            nextRenderedElement = instance.render();
          });

          _host2.default.component = null;

          if ((0, _shouldUpdateComponent2.default)(prevRenderedElement, nextRenderedElement)) {
            prevRenderedComponent.updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedComponent._context, this._processChildContext(context));
          } else {
            (function () {
              var oldChild = prevRenderedComponent.getNativeNode();
              prevRenderedComponent.unmountComponent(true);

              _this2._renderedComponent = (0, _instantiateComponent2.default)(nextRenderedElement);
              _this2._renderedComponent.mountComponent(_this2._parent, _this2._processChildContext(context), function (newChild, parent) {
                _host2.default.driver.replaceChild(newChild, oldChild, parent);
              });
            })();
          }
        }
      }, {
        key: 'getNativeNode',
        value: function getNativeNode() {
          var renderedComponent = this._renderedComponent;
          if (renderedComponent) {
            return renderedComponent.getNativeNode();
          }
        }
      }, {
        key: 'getPublicInstance',
        value: function getPublicInstance() {
          var instance = this._instance;
          // The Stateless components cannot be given refs
          if (instance instanceof _stateless2.default) {
            return null;
          }
          return instance;
        }
      }]);

      return CompositeComponent;
    }();

    exports.default = CompositeComponent;

  /***/ },
  /* 30 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    /**
     * Stateless Component Class Wrapper
     */
    var StatelessComponent = function () {
      function StatelessComponent(pureRender) {
        __webpack_require__(3).classCallCheck(this, StatelessComponent);

        // A stateless class

        // A stateless function
        this.pureRender = pureRender;
      }

      __webpack_require__(3).createClass(StatelessComponent, [{
        key: "render",
        value: function render() {
          return this.pureRender(this.props, this.context);
        }
      }]);

      return StatelessComponent;
    }();

    exports.default = StatelessComponent;

  /***/ },
  /* 31 */
  /***/ function(module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function enqueueCallback(internal, callback) {
      if (callback) {
        var callbackQueue = internal._pendingCallbacks || (internal._pendingCallbacks = []);
        callbackQueue.push(callback);
      }
    }

    function enqueueState(internal, partialState) {
      if (partialState) {
        var stateQueue = internal._pendingStateQueue || (internal._pendingStateQueue = []);
        stateQueue.push(partialState);
      }
    }

    var Updater = {
      setState: function setState(component, partialState, callback) {
        var internal = component._internal;

        if (!internal) {
          return;
        }

        enqueueState(internal, partialState);
        enqueueCallback(internal, callback);

        if (!internal._pendingState) {
          this.runUpdate(component);
        }
      },

      forceUpdate: function forceUpdate(component, callback) {
        var internal = component._internal;

        if (!internal) {
          return;
        }

        internal._pendingForceUpdate = true;

        enqueueCallback(internal, callback);
        this.runUpdate(component);
      },

      runUpdate: function runUpdate(component) {
        var internal = component._internal;

        if (!internal || !internal._renderedComponent) {
          return;
        }

        // If updateComponent happens to enqueue any new updates, we
        // shouldn't execute the callbacks until the next render happens, so
        // stash the callbacks first
        var callbacks = internal._pendingCallbacks;
        internal._pendingCallbacks = null;

        var prevElement = internal._currentElement;
        var prevUnmaskedContext = internal._context;

        if (internal._pendingStateQueue || internal._pendingForceUpdate) {
          internal.updateComponent(prevElement, prevElement, prevUnmaskedContext, prevUnmaskedContext);
        }

        if (callbacks) {
          callbacks.forEach(function (callback) {
            return callback();
          });
        }
      }

    };

    exports.default = Updater;

  /***/ },
  /* 32 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }

    /**
     * Performs equality by iterating through keys on an object and returning false
     * when any key has values which are not strictly equal between the arguments.
     * Returns true when the values of all keys are strictly equal.
     */
    function shallowEqual(objA, objB) {
      if (is(objA, objB)) {
        return true;
      }

      if ((typeof objA === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : __webpack_require__(3).typeof(objB)) !== 'object' || objB === null) {
        return false;
      }

      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      }

      // Test for A's keys different from B.
      for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
          return false;
        }
      }

      return true;
    }

    exports.default = shallowEqual;

  /***/ },
  /* 33 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _host = __webpack_require__(2);

    var _host2 = __webpack_require__(3).interopRequireDefault(_host);

    var _native = __webpack_require__(25);

    var _native2 = __webpack_require__(3).interopRequireDefault(_native);

    var _instance = __webpack_require__(14);

    var _instance2 = __webpack_require__(3).interopRequireDefault(_instance);

    var _instantiateComponent = __webpack_require__(16);

    var _instantiateComponent2 = __webpack_require__(3).interopRequireDefault(_instantiateComponent);

    var _getElementKeyName = __webpack_require__(27);

    var _getElementKeyName2 = __webpack_require__(3).interopRequireDefault(_getElementKeyName);

    var _hook = __webpack_require__(13);

    var _hook2 = __webpack_require__(3).interopRequireDefault(_hook);

    /**
     * Fragment Component
     */
    var FragmentComponent = function (_NativeComponent) {
      __webpack_require__(3).inherits(FragmentComponent, _NativeComponent);

      function FragmentComponent(element) {
        __webpack_require__(3).classCallCheck(this, FragmentComponent);

        return __webpack_require__(3).possibleConstructorReturn(this, (FragmentComponent.__proto__ || Object.getPrototypeOf(FragmentComponent)).call(this, element));
      }

      __webpack_require__(3).createClass(FragmentComponent, [{
        key: 'mountComponent',
        value: function mountComponent(parent, context, childMounter) {
          // Parent native element
          this._parent = parent;
          this._context = context;
          this._mountID = _host2.default.mountID++;

          var instance = {
            _internal: this
          };
          this._instance = instance;

          var nativeNode = this.getNativeNode();
          var children = this._currentElement;

          // Process children
          this.mountChildren(children, context);

          // Fragment child nodes append by tree mode
          if (childMounter) {
            childMounter(nativeNode, parent);
          } else {
            _host2.default.driver.appendChild(nativeNode, parent);
          }

          // set to right node when append to parent
          this._nativeNode = parent;

          _hook2.default.Reconciler.mountComponent(this);

          return instance;
        }
      }, {
        key: 'mountChildren',
        value: function mountChildren(children, context) {
          var _this2 = this;

          var renderedChildren = {};
          var fragment = this.getNativeNode();

          var renderedChildrenImage = children.map(function (element, index) {
            var renderedChild = (0, _instantiateComponent2.default)(element);
            var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
            renderedChildren[name] = renderedChild;
            renderedChild._mountIndex = index;
            // Mount
            var mountImage = renderedChild.mountComponent(_this2._parent, context, function (nativeNode) {
              _host2.default.driver.appendChild(nativeNode, fragment);
            });
            return mountImage;
          });

          this._renderedChildren = renderedChildren;

          return renderedChildrenImage;
        }
      }, {
        key: 'unmountComponent',
        value: function unmountComponent(shouldNotRemoveChild) {
          if (this._nativeNode) {
            _instance2.default.remove(this._nativeNode);
            if (!shouldNotRemoveChild) {
              _host2.default.driver.removeChild(this._nativeNode, this._parent);
            }
          }

          this.unmountChildren();

          _hook2.default.Reconciler.unmountComponent(this);

          this._currentElement = null;
          this._nativeNode = null;
          this._parent = null;
          this._context = null;
          this._instance = null;
        }
      }, {
        key: 'updateComponent',
        value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
          // Replace current element
          this._currentElement = nextElement;
          this.updateChildren(this._currentElement, nextContext);

          _hook2.default.Reconciler.receiveComponent(this);
        }
      }, {
        key: 'getNativeNode',
        value: function getNativeNode() {
          if (this._nativeNode == null) {
            this._nativeNode = _host2.default.driver.createFragment(this._instance);
            // TODO instance cache
          }

          return this._nativeNode;
        }
      }, {
        key: 'getPublicInstance',
        value: function getPublicInstance() {
          // TODO
          return null;
        }
      }, {
        key: 'getName',
        value: function getName() {
          return 'fragment';
        }
      }]);

      return FragmentComponent;
    }(_native2.default);

    exports.default = FragmentComponent;

  /***/ },
  /* 34 */
  /***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _instance = __webpack_require__(14);

    var _instance2 = __webpack_require__(3).interopRequireDefault(_instance);

    function findComponentInstance(node) {
      if (node == null) {
        return null;
      }
      return _instance2.default.get(node);
    }

    exports.default = findComponentInstance;

  /***/ },
  /* 35 */
  /***/ function(module, exports) {

    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = '0.0.10';

  /***/ }
  /******/ ]);};

/***/ },
/* 3 */
/*!****************************************************!*\
  !*** ./packages/weex-rax-framework/src/emitter.js ***!
  \****************************************************/
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var EventEmitter = function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      this._listeners = {};
    }

    /**
     * Adds a listener function to the specified event.
     * @param {String} type
     * @param {Function} listener
     * @param {Boolean} once
     */


    _createClass(EventEmitter, [{
      key: "_addListener",
      value: function _addListener(type, listener, once) {
        this._listeners[type] = this._listeners[type] || [];
        this._listeners[type].push({ listener: listener, once: once });
        return this;
      }

      /**
       * Adds a listener function to the specified event.
       * @param {String} type
       * @param {Function} listener
       * @return {Object} Current instance of EventEmitter for chaining.
       */

    }, {
      key: "on",
      value: function on(type, listener) {
        return this._addListener(type, listener, false);
      }
    }, {
      key: "once",
      value: function once(type, listener) {
        return this._addListener(type, listener, true);
      }

      /**
       * Removes a listener function to the specified event.
       * @param {String} type
       * @param {Function} listener
       * @return {Object} Current instance of EventEmitter for chaining.
       */

    }, {
      key: "off",
      value: function off(type, listener) {
        // alias
        if (!this._listeners[type]) {
          return this;
        }
        if (!this._listeners[type].length) {
          return this;
        }
        if (!listener) {
          delete this._listeners[type];
          return this;
        }
        this._listeners[type] = this._listeners[type].filter(function (_listener) {
          return !(_listener.listener === listener);
        });
        return this;
      }

      /**
       * Emits an specified event.
       * @param {String} type
       * @param {Object} payload
       * @return {Object} Current instance of EventEmitter for chaining.
       */

    }, {
      key: "emit",
      value: function emit(type, payload) {
        var _this = this;

        if (!this._listeners[type]) {
          return this;
        }
        this._listeners[type].forEach(function (_listener) {
          _listener.listener.apply(_this, [payload]);
          if (_listener.once) {
            _this.removeListener(type, _listener.listener);
          }
        });
        return this;
      }
    }]);

    return EventEmitter;
  }();

  exports.default = EventEmitter;

/***/ },
/* 4 */
/*!**********************************************************!*\
  !*** ./packages/runtime-shared/dist/promise.function.js ***!
  \**********************************************************/
/***/ function(module, exports) {


  module.exports = function() {
    return /******/ (function(modules) { // webpackBootstrap
  /******/  // The module cache
  /******/  var installedModules = {};
  /******/
  /******/  // The require function
  /******/  function __webpack_require__(moduleId) {
  /******/
  /******/    // Check if module is in cache
  /******/    if(installedModules[moduleId])
  /******/      { return installedModules[moduleId].exports; }
  /******/
  /******/    // Create a new module (and put it into the cache)
  /******/    var module = installedModules[moduleId] = {
  /******/      exports: {},
  /******/      id: moduleId,
  /******/      loaded: false
  /******/    };
  /******/
  /******/    // Execute the module function
  /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/    // Flag the module as loaded
  /******/    module.loaded = true;
  /******/
  /******/    // Return the exports of the module
  /******/    return module.exports;
  /******/  }
  /******/
  /******/
  /******/  // expose the modules object (__webpack_modules__)
  /******/  __webpack_require__.m = modules;
  /******/
  /******/  // expose the module cache
  /******/  __webpack_require__.c = installedModules;
  /******/
  /******/  // __webpack_public_path__
  /******/  __webpack_require__.p = "";
  /******/
  /******/  // Load entry module and return exports
  /******/  return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports) {

    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    /* eslint no-extend-native: "off" */

    function noop() {}

    // Use polyfill for setImmediate for performance gains
    var asap = typeof setImmediate === 'function' && setImmediate || function (fn) {
      if (typeof setTimeout === 'function') {
        setTimeout(fn, 0);
      } else {
        fn();
      }
    };

    var onUnhandledRejection = function onUnhandledRejection(err) {
      if (typeof console !== 'undefined' && console) {
        console.log('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
      }
    };

    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }

    function Promise(fn) {
      if (_typeof(this) !== 'object') { throw new TypeError('Promises must be constructed via new'); }
      if (typeof fn !== 'function') { throw new TypeError('Promise resolver is not a function'); }
      this._state = 0;
      this._handled = false;
      this._value = undefined;
      this._deferreds = [];

      doResolve(fn, this);
    }

    function handle(self, deferred) {
      while (self._state === 3) {
        self = self._value;
      }
      if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
      }
      self._handled = true;
      asap(function () {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
          return;
        }
        var ret;
        try {
          ret = cb(self._value);
        } catch (e) {
          reject(deferred.promise, e);
          return;
        }
        resolve(deferred.promise, ret);
      });
    }

    function resolve(self, newValue) {
      try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self) { throw new TypeError('A promise cannot be resolved with itself.'); }
        if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (newValue instanceof Promise) {
            self._state = 3;
            self._value = newValue;
            finale(self);
            return;
          } else if (typeof then === 'function') {
            doResolve(bind(then, newValue), self);
            return;
          }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
      } catch (e) {
        reject(self, e);
      }
    }

    function reject(self, newValue) {
      self._state = 2;
      self._value = newValue;
      finale(self);
    }

    function finale(self) {
      if (self._state === 2 && self._deferreds.length === 0) {
        asap(function () {
          if (!self._handled) {
            onUnhandledRejection(self._value);
          }
        });
      }

      for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
      }
      self._deferreds = null;
    }

    function Handler(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.promise = promise;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     */
    function doResolve(fn, self) {
      var done = false;
      try {
        fn(function (value) {
          if (done) { return; }
          done = true;
          resolve(self, value);
        }, function (reason) {
          if (done) { return; }
          done = true;
          reject(self, reason);
        });
      } catch (ex) {
        if (done) { return; }
        done = true;
        reject(self, ex);
      }
    }

    Promise.prototype.catch = function (onRejected) {
      return this.then(null, onRejected);
    };

    Promise.prototype.then = function (onFulfilled, onRejected) {
      var prom = new this.constructor(noop);

      handle(this, new Handler(onFulfilled, onRejected, prom));
      return prom;
    };

    Promise.all = function (arr) {
      var args = Array.prototype.slice.call(arr);

      return new Promise(function (resolve, reject) {
        if (args.length === 0) { return resolve([]); }
        var remaining = args.length;

        function res(i, val) {
          try {
            if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }

        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };

    Promise.resolve = function (value) {
      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
        return value;
      }

      return new Promise(function (resolve) {
        resolve(value);
      });
    };

    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };

    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };

    /**
     * Set the immediate function to execute callbacks
     * @param fn {function} Function to execute
     * @private
     */
    Promise._setImmediateFn = function _setImmediateFn(fn) {
      asap = fn;
    };

    Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
      onUnhandledRejection = fn;
    };

    module.exports = Promise;

  /***/ }
  /******/ ])};

/***/ },
/* 5 */
/*!******************************************************!*\
  !*** ./packages/runtime-shared/dist/url.function.js ***!
  \******************************************************/
/***/ function(module, exports) {


  module.exports = function() {
    return /******/ (function(modules) { // webpackBootstrap
  /******/  // The module cache
  /******/  var installedModules = {};
  /******/
  /******/  // The require function
  /******/  function __webpack_require__(moduleId) {
  /******/
  /******/    // Check if module is in cache
  /******/    if(installedModules[moduleId])
  /******/      { return installedModules[moduleId].exports; }
  /******/
  /******/    // Create a new module (and put it into the cache)
  /******/    var module = installedModules[moduleId] = {
  /******/      exports: {},
  /******/      id: moduleId,
  /******/      loaded: false
  /******/    };
  /******/
  /******/    // Execute the module function
  /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/    // Flag the module as loaded
  /******/    module.loaded = true;
  /******/
  /******/    // Return the exports of the module
  /******/    return module.exports;
  /******/  }
  /******/
  /******/
  /******/  // expose the modules object (__webpack_modules__)
  /******/  __webpack_require__.m = modules;
  /******/
  /******/  // expose the module cache
  /******/  __webpack_require__.c = installedModules;
  /******/
  /******/  // __webpack_public_path__
  /******/  __webpack_require__.p = "";
  /******/
  /******/  // Load entry module and return exports
  /******/  return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports) {

    'use strict';

    // https://github.com/Polymer/URL

    var relative = Object.create(null);
    relative.ftp = 21;
    relative.file = 0;
    relative.gopher = 70;
    relative.http = 80;
    relative.https = 443;
    relative.ws = 80;
    relative.wss = 443;

    var relativePathDotMapping = Object.create(null);
    relativePathDotMapping['%2e'] = '.';
    relativePathDotMapping['.%2e'] = '..';
    relativePathDotMapping['%2e.'] = '..';
    relativePathDotMapping['%2e%2e'] = '..';

    function isRelativeScheme(scheme) {
      return relative[scheme] !== undefined;
    }

    function invalid() {
      clear.call(this);
      this._isInvalid = true;
    }

    function IDNAToASCII(h) {
      if ('' == h) {
        invalid.call(this);
      }
      // XXX
      return h.toLowerCase();
    }

    function percentEscape(c) {
      var unicode = c.charCodeAt(0);
      if (unicode > 0x20 && unicode < 0x7F &&
      // " # < > ? `
      [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) == -1) {
        return c;
      }
      return encodeURIComponent(c);
    }

    function percentEscapeQuery(c) {
      // XXX This actually needs to encode c using encoding and then
      // convert the bytes one-by-one.

      var unicode = c.charCodeAt(0);
      if (unicode > 0x20 && unicode < 0x7F &&
      // " # < > ` (do not escape '?')
      [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) == -1) {
        return c;
      }
      return encodeURIComponent(c);
    }

    var EOF = undefined,
        ALPHA = /[a-zA-Z]/,
        ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;

    function parse(input, stateOverride, base) {
      var this$1 = this;

      function err(message) {
        errors.push(message);
      }

      var state = stateOverride || 'scheme start',
          cursor = 0,
          buffer = '',
          seenAt = false,
          seenBracket = false,
          errors = [];

      loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
        var c = input[cursor];
        switch (state) {
          case 'scheme start':
            if (c && ALPHA.test(c)) {
              buffer += c.toLowerCase(); // ASCII-safe
              state = 'scheme';
            } else if (!stateOverride) {
              buffer = '';
              state = 'no scheme';
              continue;
            } else {
              err('Invalid scheme.');
              break loop;
            }
            break;

          case 'scheme':
            if (c && ALPHANUMERIC.test(c)) {
              buffer += c.toLowerCase(); // ASCII-safe
            } else if (':' == c) {
              this$1._scheme = buffer;
              buffer = '';
              if (stateOverride) {
                break loop;
              }
              if (isRelativeScheme(this$1._scheme)) {
                this$1._isRelative = true;
              }
              if ('file' == this$1._scheme) {
                state = 'relative';
              } else if (this$1._isRelative && base && base._scheme == this$1._scheme) {
                state = 'relative or authority';
              } else if (this$1._isRelative) {
                state = 'authority first slash';
              } else {
                state = 'scheme data';
              }
            } else if (!stateOverride) {
              buffer = '';
              cursor = 0;
              state = 'no scheme';
              continue;
            } else if (EOF == c) {
              break loop;
            } else {
              err('Code point not allowed in scheme: ' + c);
              break loop;
            }
            break;

          case 'scheme data':
            if ('?' == c) {
              state = 'query';
            } else if ('#' == c) {
              this$1._fragment = '#';
              state = 'fragment';
            } else {
              // XXX error handling
              if (EOF != c && '\t' != c && '\n' != c && '\r' != c) {
                this$1._schemeData += percentEscape(c);
              }
            }
            break;

          case 'no scheme':
            if (!base || !isRelativeScheme(base._scheme)) {
              err('Missing scheme.');
              invalid.call(this$1);
            } else {
              state = 'relative';
              continue;
            }
            break;

          case 'relative or authority':
            if ('/' == c && '/' == input[cursor + 1]) {
              state = 'authority ignore slashes';
            } else {
              err('Expected /, got: ' + c);
              state = 'relative';
              continue;
            }
            break;

          case 'relative':
            this$1._isRelative = true;
            if ('file' != this$1._scheme) { this$1._scheme = base._scheme; }
            if (EOF == c) {
              this$1._host = base._host;
              this$1._port = base._port;
              this$1._path = base._path.slice();
              this$1._query = base._query;
              this$1._username = base._username;
              this$1._password = base._password;
              break loop;
            } else if ('/' == c || '\\' == c) {
              if ('\\' == c) { err('\\ is an invalid code point.'); }
              state = 'relative slash';
            } else if ('?' == c) {
              this$1._host = base._host;
              this$1._port = base._port;
              this$1._path = base._path.slice();
              this$1._query = '?';
              this$1._username = base._username;
              this$1._password = base._password;
              state = 'query';
            } else if ('#' == c) {
              this$1._host = base._host;
              this$1._port = base._port;
              this$1._path = base._path.slice();
              this$1._query = base._query;
              this$1._fragment = '#';
              this$1._username = base._username;
              this$1._password = base._password;
              state = 'fragment';
            } else {
              var nextC = input[cursor + 1];
              var nextNextC = input[cursor + 2];
              if ('file' != this$1._scheme || !ALPHA.test(c) || nextC != ':' && nextC != '|' || EOF != nextNextC && '/' != nextNextC && '\\' != nextNextC && '?' != nextNextC && '#' != nextNextC) {
                this$1._host = base._host;
                this$1._port = base._port;
                this$1._username = base._username;
                this$1._password = base._password;
                this$1._path = base._path.slice();
                this$1._path.pop();
              }
              state = 'relative path';
              continue;
            }
            break;

          case 'relative slash':
            if ('/' == c || '\\' == c) {
              if ('\\' == c) {
                err('\\ is an invalid code point.');
              }
              if ('file' == this$1._scheme) {
                state = 'file host';
              } else {
                state = 'authority ignore slashes';
              }
            } else {
              if ('file' != this$1._scheme) {
                this$1._host = base._host;
                this$1._port = base._port;
                this$1._username = base._username;
                this$1._password = base._password;
              }
              state = 'relative path';
              continue;
            }
            break;

          case 'authority first slash':
            if ('/' == c) {
              state = 'authority second slash';
            } else {
              err("Expected '/', got: " + c);
              state = 'authority ignore slashes';
              continue;
            }
            break;

          case 'authority second slash':
            state = 'authority ignore slashes';
            if ('/' != c) {
              err("Expected '/', got: " + c);
              continue;
            }
            break;

          case 'authority ignore slashes':
            if ('/' != c && '\\' != c) {
              state = 'authority';
              continue;
            } else {
              err('Expected authority, got: ' + c);
            }
            break;

          case 'authority':
            if ('@' == c) {
              if (seenAt) {
                err('@ already seen.');
                buffer += '%40';
              }
              seenAt = true;
              for (var i = 0; i < buffer.length; i++) {
                var cp = buffer[i];
                if ('\t' == cp || '\n' == cp || '\r' == cp) {
                  err('Invalid whitespace in authority.');
                  continue;
                }
                // XXX check URL code points
                if (':' == cp && null === this$1._password) {
                  this$1._password = '';
                  continue;
                }
                var tempC = percentEscape(cp);
                null !== this$1._password ? this$1._password += tempC : this$1._username += tempC;
              }
              buffer = '';
            } else if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c) {
              cursor -= buffer.length;
              buffer = '';
              state = 'host';
              continue;
            } else {
              buffer += c;
            }
            break;

          case 'file host':
            if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c) {
              if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ':' || buffer[1] == '|')) {
                state = 'relative path';
              } else if (buffer.length == 0) {
                state = 'relative path start';
              } else {
                this$1._host = IDNAToASCII.call(this$1, buffer);
                buffer = '';
                state = 'relative path start';
              }
              continue;
            } else if ('\t' == c || '\n' == c || '\r' == c) {
              err('Invalid whitespace in file host.');
            } else {
              buffer += c;
            }
            break;

          case 'host':
          case 'hostname':
            if (':' == c && !seenBracket) {
              // XXX host parsing
              this$1._host = IDNAToASCII.call(this$1, buffer);
              buffer = '';
              state = 'port';
              if ('hostname' == stateOverride) {
                break loop;
              }
            } else if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c) {
              this$1._host = IDNAToASCII.call(this$1, buffer);
              buffer = '';
              state = 'relative path start';
              if (stateOverride) {
                break loop;
              }
              continue;
            } else if ('\t' != c && '\n' != c && '\r' != c) {
              if ('[' == c) {
                seenBracket = true;
              } else if (']' == c) {
                seenBracket = false;
              }
              buffer += c;
            } else {
              err('Invalid code point in host/hostname: ' + c);
            }
            break;

          case 'port':
            if (/[0-9]/.test(c)) {
              buffer += c;
            } else if (EOF == c || '/' == c || '\\' == c || '?' == c || '#' == c || stateOverride) {
              if ('' != buffer) {
                var temp = parseInt(buffer, 10);
                if (temp != relative[this$1._scheme]) {
                  this$1._port = temp + '';
                }
                buffer = '';
              }
              if (stateOverride) {
                break loop;
              }
              state = 'relative path start';
              continue;
            } else if ('\t' == c || '\n' == c || '\r' == c) {
              err('Invalid code point in port: ' + c);
            } else {
              invalid.call(this$1);
            }
            break;

          case 'relative path start':
            if ('\\' == c) { err("'\\' not allowed in path."); }
            state = 'relative path';
            if ('/' != c && '\\' != c) {
              continue;
            }
            break;

          case 'relative path':
            if (EOF == c || '/' == c || '\\' == c || !stateOverride && ('?' == c || '#' == c)) {
              if ('\\' == c) {
                err('\\ not allowed in relative path.');
              }
              var tmp;
              if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
                buffer = tmp;
              }
              if ('..' == buffer) {
                this$1._path.pop();
                if ('/' != c && '\\' != c) {
                  this$1._path.push('');
                }
              } else if ('.' == buffer && '/' != c && '\\' != c) {
                this$1._path.push('');
              } else if ('.' != buffer) {
                if ('file' == this$1._scheme && this$1._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == '|') {
                  buffer = buffer[0] + ':';
                }
                this$1._path.push(buffer);
              }
              buffer = '';
              if ('?' == c) {
                this$1._query = '?';
                state = 'query';
              } else if ('#' == c) {
                this$1._fragment = '#';
                state = 'fragment';
              }
            } else if ('\t' != c && '\n' != c && '\r' != c) {
              buffer += percentEscape(c);
            }
            break;

          case 'query':
            if (!stateOverride && '#' == c) {
              this$1._fragment = '#';
              state = 'fragment';
            } else if (EOF != c && '\t' != c && '\n' != c && '\r' != c) {
              this$1._query += percentEscapeQuery(c);
            }
            break;

          case 'fragment':
            if (EOF != c && '\t' != c && '\n' != c && '\r' != c) {
              this$1._fragment += c;
            }
            break;
        }

        cursor++;
      }
    }

    function clear() {
      this._scheme = '';
      this._schemeData = '';
      this._username = '';
      this._password = null;
      this._host = '';
      this._port = '';
      this._path = [];
      this._query = '';
      this._fragment = '';
      this._isInvalid = false;
      this._isRelative = false;
    }

    // Does not process domain names or IP addresses.
    // Does not handle encoding for the query parameter.
    function URL(url, base /* , encoding */) {
      if (base !== undefined && !(base instanceof URL)) { base = new URL(String(base)); }

      this._url = url;
      clear.call(this);

      var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
      // encoding = encoding || 'utf-8'

      parse.call(this, input, null, base);
    }

    URL.prototype = {
      toString: function toString() {
        return this.href;
      },
      get href() {
        if (this._isInvalid) { return this._url; }

        var authority = '';
        if ('' != this._username || null != this._password) {
          authority = this._username + (null != this._password ? ':' + this._password : '') + '@';
        }

        return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
      },
      set href(href) {
        clear.call(this);
        parse.call(this, href);
      },

      get protocol() {
        return this._scheme + ':';
      },
      set protocol(protocol) {
        if (this._isInvalid) { return; }
        parse.call(this, protocol + ':', 'scheme start');
      },

      get host() {
        return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
      },
      set host(host) {
        if (this._isInvalid || !this._isRelative) { return; }
        parse.call(this, host, 'host');
      },

      get hostname() {
        return this._host;
      },
      set hostname(hostname) {
        if (this._isInvalid || !this._isRelative) { return; }
        parse.call(this, hostname, 'hostname');
      },

      get port() {
        return this._port;
      },
      set port(port) {
        if (this._isInvalid || !this._isRelative) { return; }
        parse.call(this, port, 'port');
      },

      get pathname() {
        return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
      },
      set pathname(pathname) {
        if (this._isInvalid || !this._isRelative) { return; }
        this._path = [];
        parse.call(this, pathname, 'relative path start');
      },

      get search() {
        return this._isInvalid || !this._query || '?' == this._query ? '' : this._query;
      },
      set search(search) {
        if (this._isInvalid || !this._isRelative) { return; }
        this._query = '?';
        if ('?' == search[0]) { search = search.slice(1); }
        parse.call(this, search, 'query');
      },

      get hash() {
        return this._isInvalid || !this._fragment || '#' == this._fragment ? '' : this._fragment;
      },
      set hash(hash) {
        if (this._isInvalid) { return; }
        this._fragment = '#';
        if ('#' == hash[0]) { hash = hash.slice(1); }
        parse.call(this, hash, 'fragment');
      },

      get origin() {
        var host;
        if (this._isInvalid || !this._scheme) {
          return '';
        }
        // javascript: Gecko returns String(""), WebKit/Blink String("null")
        // Gecko throws error for "data://"
        // data: Gecko returns "", Blink returns "data://", WebKit returns "null"
        // Gecko returns String("") for file: mailto:
        // WebKit/Blink returns String("SCHEME://") for file: mailto:
        switch (this._scheme) {
          case 'data':
          case 'file':
          case 'javascript':
          case 'mailto':
            return 'null';
        }
        host = this.host;
        if (!host) {
          return '';
        }
        return this._scheme + '://' + host;
      }
    };

    module.exports = URL;

  /***/ }
  /******/ ])};

/***/ },
/* 6 */
/*!********************************************************************!*\
  !*** ./packages/runtime-shared/dist/url-search-params.function.js ***!
  \********************************************************************/
/***/ function(module, exports) {


  module.exports = function() {
    return /******/ (function(modules) { // webpackBootstrap
  /******/  // The module cache
  /******/  var installedModules = {};
  /******/
  /******/  // The require function
  /******/  function __webpack_require__(moduleId) {
  /******/
  /******/    // Check if module is in cache
  /******/    if(installedModules[moduleId])
  /******/      { return installedModules[moduleId].exports; }
  /******/
  /******/    // Create a new module (and put it into the cache)
  /******/    var module = installedModules[moduleId] = {
  /******/      exports: {},
  /******/      id: moduleId,
  /******/      loaded: false
  /******/    };
  /******/
  /******/    // Execute the module function
  /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/    // Flag the module as loaded
  /******/    module.loaded = true;
  /******/
  /******/    // Return the exports of the module
  /******/    return module.exports;
  /******/  }
  /******/
  /******/
  /******/  // expose the modules object (__webpack_modules__)
  /******/  __webpack_require__.m = modules;
  /******/
  /******/  // expose the module cache
  /******/  __webpack_require__.c = installedModules;
  /******/
  /******/  // __webpack_public_path__
  /******/  __webpack_require__.p = "";
  /******/
  /******/  // Load entry module and return exports
  /******/  return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports) {

    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    // https://github.com/WebReflection/url-search-params

    var find = /[!'\(\)~]|%20|%00/g,
        plus = /\+/g,
        replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    },
        replacer = function replacer(match) {
      return replace[match];
    },
        iterable = isIterable(),
        secret = '__URLSearchParams__';

    function encode(str) {
      return encodeURIComponent(str).replace(find, replacer);
    }

    function decode(str) {
      return decodeURIComponent(str.replace(plus, ' '));
    }

    function isIterable() {
      try {
        return !!Symbol.iterator;
      } catch (error) {
        return false;
      }
    }

    var URLSearchParams = function () {
      function URLSearchParams(query) {
        var this$1 = this;

        _classCallCheck(this, URLSearchParams);

        this[secret] = Object.create(null);
        if (!query) { return; }
        if (query.charAt(0) === '?') {
          query = query.slice(1);
        }
        for (var index, value, pairs = (query || '').split('&'), i = 0, length = pairs.length; i < length; i++) {
          value = pairs[i];
          index = value.indexOf('=');
          if (-1 < index) {
            this$1.append(decode(value.slice(0, index)), decode(value.slice(index + 1)));
          } else if (value.length) {
            this$1.append(decode(value), '');
          }
        }
      }

      _createClass(URLSearchParams, [{
        key: 'append',
        value: function append(name, value) {
          var dict = this[secret];
          if (name in dict) {
            dict[name].push('' + value);
          } else {
            dict[name] = ['' + value];
          }
        }
      }, {
        key: 'delete',
        value: function _delete(name) {
          delete this[secret][name];
        }
      }, {
        key: 'get',
        value: function get(name) {
          var dict = this[secret];
          return name in dict ? dict[name][0] : null;
        }
      }, {
        key: 'getAll',
        value: function getAll(name) {
          var dict = this[secret];
          return name in dict ? dict[name].slice(0) : [];
        }
      }, {
        key: 'has',
        value: function has(name) {
          return name in this[secret];
        }
      }, {
        key: 'set',
        value: function set(name, value) {
          this[secret][name] = ['' + value];
        }
      }, {
        key: 'forEach',
        value: function forEach(callback, thisArg) {
          var dict = this[secret];
          Object.getOwnPropertyNames(dict).forEach(function (name) {
            dict[name].forEach(function (value) {
              callback.call(thisArg, value, name, this);
            }, this);
          }, this);
        }
      }, {
        key: 'keys',
        value: function keys() {
          var items = [];
          this.forEach(function (value, name) {
            items.push(name);
          });
          var iterator = {
            next: function next() {
              var value = items.shift();
              return { done: value === undefined, value: value };
            }
          };

          if (iterable) {
            iterator[Symbol.iterator] = function () {
              return iterator;
            };
          }

          return iterator;
        }
      }, {
        key: 'values',
        value: function values() {
          var items = [];
          this.forEach(function (value) {
            items.push(value);
          });
          var iterator = {
            next: function next() {
              var value = items.shift();
              return { done: value === undefined, value: value };
            }
          };

          if (iterable) {
            iterator[Symbol.iterator] = function () {
              return iterator;
            };
          }

          return iterator;
        }
      }, {
        key: 'entries',
        value: function entries() {
          var items = [];
          this.forEach(function (value, name) {
            items.push([name, value]);
          });
          var iterator = {
            next: function next() {
              var value = items.shift();
              return { done: value === undefined, value: value };
            }
          };

          if (iterable) {
            iterator[Symbol.iterator] = function () {
              return iterator;
            };
          }

          return iterator;
        }
      }, {
        key: 'toString',
        value: function toString() {
          var dict = this[secret],
              query = [],
              i,
              key,
              name,
              value;
          for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
              query.push(name + '=' + encode(value[i]));
            }
          }
          return query.join('&');
        }
      }]);

      return URLSearchParams;
    }();

    if (iterable) {
      URLSearchParams.prototype[Symbol.iterator] = URLSearchParams.prototype.entries;
    }

    module.exports = URLSearchParams;

  /***/ }
  /******/ ])};

/***/ },
/* 7 */
/*!***********************************************************!*\
  !*** ./packages/weex-rax-framework/src/downgrade.weex.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _semver = __webpack_require__(/*! ./semver */ 8);

  var _semver2 = _interopRequireDefault(_semver);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function normalizeVersion(v) {
    if (v == '*') {
      return v;
    }
    v = typeof v === 'string' ? v : '';
    var split = v.split('.');
    var i = 0;
    var result = [];

    while (i < 3) {
      var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
      result.push(s);
      i++;
    }

    return result.join('.');
  } /* global WXEnvironment */

  function getError(key, val, criteria) {
    var result = {
      isDowngrade: true,
      errorType: 1,
      code: 1000
    };
    var getMsg = function getMsg(key, val, criteria) {
      return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
    };
    var _key = key.toLowerCase();

    if (_key.indexOf('osversion') >= 0) {
      result.code = 1001;
    } else if (_key.indexOf('appversion') >= 0) {
      result.code = 1002;
    } else if (_key.indexOf('weexversion') >= 0) {
      result.code = 1003;
    } else if (_key.indexOf('devicemodel') >= 0) {
      result.code = 1004;
    }

    result.errorMessage = getMsg(key, val, criteria);
    return result;
  }

  /**
   * config
   *
   * {
   *   ios: {
   *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
   *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
   *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
   *     deviceModel: ['modelA', 'modelB', ...]
   *   },
   *   android: {
   *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
   *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
   *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
   *     deviceModel: ['modelA', 'modelB', ...]
   *   }
   * }
   *
   */
  function check(config) {
    var result = {
      isDowngrade: false
    };

    var deviceInfo = WXEnvironment;

    var platform = deviceInfo.platform || 'unknow';
    var dPlatform = platform.toLowerCase();
    var cObj = config[dPlatform] || {};

    for (var i in deviceInfo) {
      var key = i;
      var keyLower = key.toLowerCase();
      var val = deviceInfo[i];
      var isVersion = keyLower.indexOf('version') >= 0;
      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
      var criteria = cObj[i];

      if (criteria && isVersion) {
        var c = normalizeVersion(criteria);
        var d = normalizeVersion(deviceInfo[i]);

        if (_semver2.default.satisfies(d, c)) {
          result = getError(key, val, criteria);
          break;
        }
      } else if (isDeviceModel) {
        var _criteria = Array.isArray(criteria) ? criteria : [criteria];

        if (_criteria.indexOf(val) >= 0) {
          result = getError(key, val, criteria);
          break;
        }
      }
    }

    return result;
  }

  module.exports = function (__weex_require__) {
    return function (config) {
      var nativeInstanceWrap = __weex_require__('@weex-module/instanceWrap');
      var result = check(config);
      if (result.isDowngrade) {
        nativeInstanceWrap.error(result.errorType, result.code, result.errorMessage);
        return true;
      }
      return false;
    };
  };

/***/ },
/* 8 */
/*!***************************************************!*\
  !*** ./packages/weex-rax-framework/src/semver.js ***!
  \***************************************************/
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.default = {
    satisfies: function satisfies(left, right) {
      var regex = /(\W+)?([\d|.]+)/;

      if ((typeof left === 'undefined' ? 'undefined' : _typeof(left)) + (typeof right === 'undefined' ? 'undefined' : _typeof(right)) != 'stringstring') { return false; }

      if (right == '*') {
        return true;
      }

      var arr = right.match(regex);
      var a = left.split('.'),
          i = 0,
          b = arr[2].split('.'),
          len = Math.max(a.length, b.length);

      var flag = 0;
      for (var _i = 0; _i < len; _i++) {
        if (a[_i] && !b[_i] && parseInt(a[_i]) > 0 || parseInt(a[_i]) > parseInt(b[_i])) {
          flag = 1;
          break;
        } else if (b[_i] && !a[_i] && parseInt(b[_i]) > 0 || parseInt(a[_i]) < parseInt(b[_i])) {
          flag = -1;
          break;
        }
      }

      switch (arr[1]) {
        case '<':
          if (flag === -1) {
            return true;
          }
          break;
        case '<=':
          if (flag !== 1) {
            return true;
          }
          break;
        case '>':
          if (flag === 1) {
            return true;
          }
          break;
        case '>=':
          if (flag !== -1) {
            return true;
          }
          break;
        default:
          if (flag === 0) {
            return true;
          }
          break;
      }
      return false;
    }
  };

/***/ },
/* 9 */
/*!*******************************************************!*\
  !*** ./packages/weex-rax-framework/src/fetch.weex.js ***!
  \*******************************************************/
/***/ function(module, exports) {

  'use strict';

  module.exports = function (__weex_require__, Promise) {
    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      // FIXME: In spdy the response header has name like ":version" that is invalid
      // if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      //   throw new TypeError('Invalid character in header field name');
      // }
      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value;
    }

    function Headers(headers) {
      this.originHeaders = headers;
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };

    Headers.prototype.delete = function (name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null;
    };

    Headers.prototype.getAll = function (name) {
      return this.map[normalizeName(name)] || [];
    };

    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      Object.getOwnPropertyNames(this.map).forEach(function (name) {
        this.map[name].forEach(function (value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body, options) {
        this._bodyInit = body;
        if (typeof body === 'string') {
          this._bodyText = body;
        } else if (!body) {
          this._bodyText = '';
        } else {
          throw new Error('unsupported BodyInit type');
        }
      };

      this.text = function () {
        var rejected = consumed(this);
        return rejected ? rejected : Promise.resolve(this._bodyText);
      };

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (Request.prototype.isPrototypeOf(input)) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = input;
      }

      this.credentials = options.credentials || this.credentials || 'omit';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(body, options);
    }

    Request.prototype.clone = function () {
      return new Request(this);
    };

    function headers(xhr) {
      var head = new Headers();
      var pairs = xhr.getAllResponseHeaders().trim().split('\n');
      pairs.forEach(function (header) {
        var split = header.trim().split(':');
        var key = split.shift().trim();
        var value = split.join(':').trim();
        head.append(key, value);
      });
      return head;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      this._initBody(bodyInit, options);
      this.type = 'default';
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || '';
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, { status: 0, statusText: '' });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, { status: status, headers: { location: url } });
    };

    var fetch = function fetch(input, init) {
      return new Promise(function (resolve, reject) {
        var request;
        if (Request.prototype.isPrototypeOf(input) && !init) {
          request = input;
        } else {
          request = new Request(input, init);
        }

        var params = {
          url: request.url,
          method: request.method,
          headers: request.headers && request.headers.originHeaders
        };

        if (typeof request._bodyInit !== 'undefined') {
          params.body = request._bodyInit;
        }

        params.type = init && init.dataType ? init.dataType : 'json';
        var nativeFetch = __weex_require__('@weex-module/stream').fetch;
        nativeFetch(params, function (response) {
          try {
            typeof response === 'string' && (response = JSON.parse(response));
            var data = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);

            var res = new Response(data, {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              url: request.url
            });
            resolve(res);
          } catch (err) {
            reject(err);
          }
        }, function (progress) {});
      });
    };

    fetch.Headers = Headers;
    fetch.Request = Request;
    fetch.Response = Response;

    return fetch;
  };

/***/ }
/******/ ]);
});

var Rax = unwrapExports(framework_weex);

var frameworks$1 = {
  Vanilla: Vanilla,
  Vue: Vue$1,
  Rax: Rax,
  Weex: Weex
};

/**
 * Mock MessageEvent type
 * @param {string} type
 * @param {object} dict { data, origin, source, ports }
 *
 * This type has been simplified.
 * https://html.spec.whatwg.org/multipage/comms.html#messageevent
 * https://dom.spec.whatwg.org/#interface-event
 */
function MessageEvent (type, dict) {
  if ( dict === void 0 ) dict = {};

  this.type = type || 'message';

  this.data = dict.data || null;
  this.origin = dict.origin || '';
  this.source = dict.source || null;
  this.ports = dict.ports || [];

  // inherit properties
  this.target = null;
  this.timeStamp = Date.now();
}

/**
 * @fileOverview
 * The polyfill of BroadcastChannel API.
 * This api can be used to achieve inter-instance communications.
 *
 * https://html.spec.whatwg.org/multipage/comms.html#broadcasting-to-other-browsing-contexts
 */

var channels = {};
var instances = {};

/**
 * An empty constructor for BroadcastChannel polyfill.
 * The real constructor will be defined when a Weex instance created because
 * we need to track the channel by Weex instance id.
 */
function BroadcastChannel () {}

/**
 * Sends the given message to other BroadcastChannel objects set up for this channel.
 * @param {any} message
 */
BroadcastChannel.prototype.postMessage = function (message) {
  var this$1 = this;

  if (this._closed) {
    throw new Error(("BroadcastChannel \"" + (this.name) + "\" is closed."))
  }

  var subscribers = channels[this.name];
  if (subscribers && subscribers.length) {
    for (var i = 0; i < subscribers.length; ++i) {
      var member = subscribers[i];

      if (member._closed || member === this$1) { continue }

      if (typeof member.onmessage === 'function') {
        member.onmessage(new MessageEvent('message', { data: message }));
      }
    }
  }
};

/**
 * Closes the BroadcastChannel object, opening it up to garbage collection.
 */
BroadcastChannel.prototype.close = function () {
  var this$1 = this;

  if (this._closed) {
    return
  }

  this._closed = true;

  // remove itself from channels.
  if (channels[this.name]) {
    var subscribers = channels[this.name].filter(function (x) { return x !== this$1; });
    if (subscribers.length) {
      channels[this.name] = subscribers;
    }
    else {
      delete channels[this.name];
    }
  }
};

var BroadcastChannel$1 = {
  create: function (id, env, config) {
    instances[id] = [];
    if (typeof global.BroadcastChannel === 'function') {
      return {}
    }
    var serviceObject = {
      /**
       * Returns a new BroadcastChannel object via which messages for the given
       * channel name can be sent and received.
       * @param {string} name
       */
      BroadcastChannel: function (name) {
        // the name property is readonly
        Object.defineProperty(this, 'name', {
          configurable: false,
          enumerable: true,
          writable: false,
          value: String(name)
        });

        this._closed = false;
        this.onmessage = null;

        if (!channels[this.name]) {
          channels[this.name] = [];
        }
        channels[this.name].push(this);
        instances[id].push(this);
      }
    };
    serviceObject.BroadcastChannel.prototype = BroadcastChannel.prototype;
    return {
      instance: serviceObject
    }
  },
  destroy: function (id, env) {
    instances[id].forEach(function (channel) { return channel.close(); });
    delete instances[id];
  }
};

var services$1 = {
  BroadcastChannel: BroadcastChannel$1
};

var init = runtime.init;
var config = runtime.config;
config.frameworks = frameworks$1;
var native = subversion.native;
var transformer = subversion.transformer;

for (var serviceName in services$1) {
  runtime.service.register(serviceName, services$1[serviceName]);
}

runtime.freezePrototype();
runtime.setNativeConsole();
runtime.setNativeTimer();

// register framework meta info
global.frameworkVersion = native;
global.transformerVersion = transformer;

// init frameworks
var globalMethods = init(config);

// set global methods
var loop$1 = function ( methodName ) {
  global[methodName] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var ret = globalMethods[methodName].apply(globalMethods, args);
    if (ret instanceof Error) {
      console.error(ret.toString());
    }
    return ret
  };
};

for (var methodName in globalMethods) loop$1( methodName );

/**
 * @fileOverview The api for invoking with "$" prefix
 */

/**
 * ==========================================================
 * private for ali
 * ==========================================================
 */

/**
 * invoke user-track on Taobao Moblie
 * @param {string} type：enter, click, expose
 * @param {string} name
 * @param {string} comName
 * @param {object} param
*/
function $userTrack(type, name, comName, param) {
  console.warn('[Upgrade Warning] $userTrack will be removed in the next version!');
  console.warn('[JS Framework] Vm#$userTrack is deprecated, ' +
          'please use "require(\'@weex-module/userTrack\')' +
          '.commit(type, name, comName, param)" instead');
  var userTrack = this._app.requireModule('userTrack');
  userTrack.commit(type, name, comName, param);
}

/**
 * request a restfull api via the mtop gateway
 * @param  {object}   params
 * @param  {Function} callback
 */
function $sendMtop(params, callback) {
  console.warn('[Upgrade Warning] $sendMtop will be removed in the next version!');
  console.warn('[JS Framework] Vm#$sendMtop is deprecated, ' +
          'please use "require(\'@weex-module/stream\')' +
          '.sendMtop(params, callback)" instead');
  /* istanbul ignore else */
  if (typeof window === 'undefined') {
    // in native，use windvane
    var windvane = this._app.requireModule('windvane');
    windvane.call({
      class: 'MtopWVPlugin',
      method: 'send',
      data: params
    }, callback);
  } else {
    // in web brwoser，use stream.sendMtop
    var stream = this._app.requireModule('stream');
    stream.sendMtop(params, callback);
  }
}

/**
 * request a native api via windvane protocol
 * @param  {object}   params
 * @param  {Function} callback
 */
function $callWindvane(params, callback) {
  console.warn('[Upgrade Warning] $callWindvane will be removed in the next version!');
  console.warn('[JS Framework] Vm#$callWindvane is deprecated, ' +
          'please use "require(\'@weex-module/windvane\')' +
          '.call(params, callback)" instead');
  var windvane = this._app.requireModule('windvane');
  windvane.call(params, callback);
}

/**
 * set spm for the page
 * @param  {string} a
 * @param  {string} b
 */
function $setSpm(a, b) {
  console.warn('[Upgrade Warning] $setSpm will be removed in the next version!');
  console.warn('[JS Framework] Vm#$setSpm is deprecated, ' +
          'please use "require(\'@weex-module/pageInfo\')' +
          '.setSpm(a, b)" instead');
  var pageInfo = this._app.requireModule('pageInfo');
  pageInfo.setSpm(a, b);
}

/**
 * get the information of the current logined user
 * @param  {Function} callback
 */
function $getUserInfo(callback) {
  console.warn('[Upgrade Warning] $getUserInfo will be removed in the next version!');
  console.warn('[JS Framework] Vm#$getUserInfo is deprecated, ' +
          'please use "require(\'@weex-module/user\')' +
          '.getUserInfo(callback)" instead');
  var user = this._app.requireModule('user');
  user.getUserInfo(callback);
}

/**
 * perform login
 * @param  {Function} callback
 */
function $login(callback) {
  console.warn('[Upgrade Warning] $login will be removed in the next version!');
  console.warn('[JS Framework] Vm#$login is deprecated, ' +
          'please use "require(\'@weex-module/user\')' +
          '.login(callback)" instead');
  var user = this._app.requireModule('user');
  user.login(callback);
}

/**
 * perform logout
 * @param  {Function} callback
 */
function $logout(callback) {
  console.warn('[Upgrade Warning] $logout will be removed in the next version!');
  console.warn('[JS Framework] Vm#$logout is deprecated, ' +
          'please use "require(\'@weex-module/user\')' +
          '.logout(callback)" instead');
  var user = this._app.requireModule('user');
  user.logout(callback);
}


var methods$2 = Object.freeze({
  $userTrack: $userTrack,
  $sendMtop: $sendMtop,
  $callWindvane: $callWindvane,
  $setSpm: $setSpm,
  $getUserInfo: $getUserInfo,
  $login: $login,
  $logout: $logout
});

/**
 * Register specific methods for taobao.
 * These methods have been deprecated, and will be removed in the next version.
 */
global.registerMethods(methods$2);

})));