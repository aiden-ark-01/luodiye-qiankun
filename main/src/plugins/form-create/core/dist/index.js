/*!
 * @form-create/core v2.5.8
 * (c) 2018-2021 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
import Vue from 'vue';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function $set(target, field, value) {
  Vue.set(target, field, value);
}
function $del(target, field) {
  Vue["delete"](target, field);
}

var _extends = Object.assign || function (a) {
  for (var b, c = 1; c < arguments.length; c++) {
    for (var d in b = arguments[c], b) {
      Object.prototype.hasOwnProperty.call(b, d) && $set(a, d, b[d]);
    }
  }

  return a;
};

function extend() {
  return _extends.apply(this, arguments);
}

var NAME = 'FormCreate';
function $FormCreate(FormCreate) {
  return {
    name: NAME,
    componentName: NAME,
    model: {
      prop: 'api'
    },
    provide: function provide() {
      return {
        $pfc: this
      };
    },
    inject: {
      $pfc: {
        "default": null
      }
    },
    props: {
      rule: {
        type: Array,
        required: true
      },
      option: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      extendOption: Boolean,
      value: Object,
      api: Object
    },
    data: function data() {
      return {
        formData: undefined,
        destroyed: false,
        validate: {},
        $f: undefined,
        isShow: true,
        unique: 1,
        renderRule: _toConsumableArray(this.rule || []),
        updateValue: ''
      };
    },
    render: function render() {
      return this.formCreate.render();
    },
    methods: {
      _refresh: function _refresh() {
        ++this.unique;
      },
      _renderRule: function _renderRule() {
        this.renderRule = _toConsumableArray(this.rule || []);
      },
      _updateValue: function _updateValue(value) {
        if (this.destroyed) return;
        this.updateValue = JSON.stringify(value);
        this.$emit('update:value', value);
      }
    },
    watch: {
      value: {
        handler: function handler(n) {
          if (JSON.stringify(n) === this.updateValue) return;
          this.$f.setValue(n);
        },
        deep: true
      },
      option: {
        handler: function handler(n) {
          this.formCreate.initOptions(n);
          this.$f.refresh();
        },
        deep: true
      },
      rule: function rule(n) {
        var _this = this;

        if (n.length === this.renderRule.length && n.every(function (v) {
          return _this.renderRule.indexOf(v) > -1;
        })) return;
        this.formCreate.$handle.reloadRule(n);

        this._renderRule();
      }
    },
    beforeCreate: function beforeCreate() {
      var _this2 = this;

      var _this$$options$propsD = this.$options.propsData,
          rule = _this$$options$propsD.rule,
          option = _this$$options$propsD.option,
          value = _this$$options$propsD.value;
      this.formCreate = new FormCreate(this, rule, option);
      extend(this.formCreate.options.formData, value || {});
      Object.keys(this.formCreate.prop).forEach(function (k) {
        extend(_this2.$options[k], _this2.formCreate.prop[k]);
      });
    }
  };
}

var is = {
  type: function type(arg, _type) {
    return Object.prototype.toString.call(arg) === '[object ' + _type + ']';
  },
  Undef: function Undef(v) {
    return v === undefined || v === null;
  },
  Element: function Element(arg) {
    return _typeof(arg) === 'object' && arg !== null && arg.nodeType === 1 && !is.Object(arg);
  },
  trueArray: function trueArray(data) {
    return Array.isArray(data) && data.length > 0;
  }
};
['Date', 'Object', 'Function', 'String', 'Boolean', 'Array', 'Number'].forEach(function (t) {
  is[t] = function (arg) {
    return is.type(arg, t);
  };
});
function hasProperty(rule, k) {
  return {}.hasOwnProperty.call(rule, k);
}

var normalMerge = ['attrs', 'props', 'domProps', 'scopedSlots'];
var toArrayMerge = ['class', 'style', 'directives'];
var functionalMerge = ['on', 'nativeOn'];

var mergeProps = function mergeProps(objects) {
  var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _normalMerge = [].concat(normalMerge, _toConsumableArray(opt['normal'] || []));

  var _toArrayMerge = [].concat(toArrayMerge, _toConsumableArray(opt['array'] || []));

  var _functionalMerge = [].concat(functionalMerge, _toConsumableArray(opt['functional'] || []));

  var propsMerge = opt['props'] || [];
  return objects.reduce(function (a, b) {
    for (var key in b) {
      if (a[key]) {
        if (propsMerge.indexOf(key) > -1) {
          a[key] = mergeProps([b[key]], a[key]);
        } else if (_normalMerge.indexOf(key) > -1) {
          a[key] = _objectSpread2(_objectSpread2({}, a[key]), b[key]);
        } else if (_toArrayMerge.indexOf(key) > -1) {
          var arrA = a[key] instanceof Array ? a[key] : [a[key]];
          var arrB = b[key] instanceof Array ? b[key] : [b[key]];
          a[key] = [].concat(_toConsumableArray(arrA), _toConsumableArray(arrB));
        } else if (_functionalMerge.indexOf(key) > -1) {
          for (var event in b[key]) {
            if (a[key][event]) {
              var _arrA = a[key][event] instanceof Array ? a[key][event] : [a[key][event]];

              var _arrB = b[key][event] instanceof Array ? b[key][event] : [b[key][event]];

              a[key][event] = [].concat(_toConsumableArray(_arrA), _toConsumableArray(_arrB));
            } else {
              a[key][event] = b[key][event];
            }
          }
        } else if (key === 'hook') {
          for (var hook in b[key]) {
            if (a[key][hook]) {
              a[key][hook] = mergeFn(a[key][hook], b[key][hook]);
            } else {
              a[key][hook] = b[key][hook];
            }
          }
        } else {
          a[key] = b[key];
        }
      } else {
        if (_normalMerge.indexOf(key) > -1 || _functionalMerge.indexOf(key) > -1 || propsMerge.indexOf(key) > -1) {
          a[key] = _objectSpread2({}, b[key]);
        } else if (_toArrayMerge.indexOf(key) > -1) {
          a[key] = b[key] instanceof Array ? _toConsumableArray(b[key]) : _typeof(b[key]) === 'object' ? _objectSpread2({}, b[key]) : b[key];
        } else a[key] = b[key];
      }
    }

    return a;
  }, initial);
};

var mergeFn = function mergeFn(fn1, fn2) {
  return function () {
    fn1 && fn1.apply(this, arguments);
    fn2 && fn2.apply(this, arguments);
  };
};

var keyAttrs = ['type', 'slot', 'emitPrefix', 'value', 'name', 'native', 'hidden', 'display', 'inject', 'options', 'emit', 'nativeEmit', 'link', 'prefix', 'suffix', 'update', 'sync', 'optionsTo', 'key'];
var arrayAttrs = ['validate', 'children', 'control'];
var normalAttrs = ['effect'];
function attrs() {
  return [].concat(keyAttrs, _toConsumableArray(normalMerge), _toConsumableArray(toArrayMerge), _toConsumableArray(functionalMerge), arrayAttrs, normalAttrs);
}

function deepExtend(origin) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var mode = arguments.length > 2 ? arguments[2] : undefined;
  var isArr = false;

  for (var key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      var clone = target[key];

      if ((isArr = Array.isArray(clone)) || is.Object(clone)) {
        var nst = origin[key] === undefined;

        if (isArr) {
          isArr = false;
          nst && $set(origin, key, []);
        } else if (clone._clone && mode !== undefined) {
          if (mode) {
            clone = clone.getRule();
            nst && $set(origin, key, {});
          } else {
            $set(origin, key, clone._clone());
            continue;
          }
        } else {
          nst && $set(origin, key, {});
        }

        origin[key] = deepExtend(origin[key], clone, mode);
      } else {
        $set(origin, key, clone);
      }
    }
  }

  return mode !== undefined && Array.isArray(origin) ? origin.filter(function (v) {
    return !v || !v.__ctrl;
  }) : origin;
}
function deepCopy(value) {
  return deepExtend({}, {
    value: value
  }).value;
}

function format(type, msg, rule) {
  return "[form-create ".concat(type, "]: ").concat(msg) + (rule ? '\n\nrule: ' + JSON.stringify(rule.getRule ? rule.getRule() : rule) : '');
}
function tip(msg, rule) {
  console.warn(format('tip', msg, rule));
}
function err(msg, rule) {
  console.error(format('err', msg, rule));
}
function logError(e) {
  err(e.toString());
  console.error(e);
}

var PREFIX = '[[FORM-CREATE-PREFIX-';
var SUFFIX = '-FORM-CREATE-SUFFIX]]';
var $T = '$FN:';
var FUNCTION = 'function';
function toJson(obj, space) {
  return JSON.stringify(deepExtend([], obj, true), function (key, val) {
    if (val && val._isVue === true) return undefined;

    if (_typeof(val) !== FUNCTION) {
      return val;
    }

    if (val.__inject) val = val.__origin;
    if (val.__emit) return undefined;
    return PREFIX + val + SUFFIX;
  }, space);
}

function makeFn(fn) {
  return eval('(' + FUNCTION + '(){return ' + fn + ' })()');
}

function parseFn(fn, mode) {
  if (fn && is.String(fn)) {
    var v = fn.trim();
    var flag = false;

    if (v.indexOf(SUFFIX) > 0 && v.indexOf(PREFIX) === 0) {
      v = v.replace(SUFFIX, '').replace(PREFIX, '');
      flag = true;
    } else if (v.indexOf($T) === 0) {
      v = v.replace($T, '');
      flag = true;
    } else if (!mode && v.indexOf(FUNCTION) === 0 && v !== FUNCTION) {
      flag = true;
    }

    if (!flag) return fn;

    try {
      return makeFn(v.indexOf(FUNCTION) === -1 && v.indexOf('(') !== 0 ? FUNCTION + ' ' + v : v);
    } catch (e) {
      err("\u89E3\u6790\u5931\u8D25:".concat(v));
      return undefined;
    }
  }

  return fn;
}
function parseJson(json, mode) {
  return JSON.parse(json, function (k, v) {
    if (is.Undef(v) || !v.indexOf) return v;
    return parseFn(v, mode);
  });
}
function enumerable(value, writable) {
  return {
    value: value,
    enumerable: false,
    configurable: false,
    writable: !!writable
  };
} //todo 优化位置

function copyRule(rule, mode) {
  return copyRules([rule], mode || false)[0];
}
function copyRules(rules, mode) {
  return deepExtend([], _toConsumableArray(rules), mode || false);
}
function mergeRule(rule, merge) {
  mergeProps(Array.isArray(merge) ? merge : [merge], rule, {
    array: arrayAttrs,
    normal: normalAttrs
  });
  return rule;
}
function getRule(rule) {
  return is.Function(rule.getRule) ? rule.getRule() : rule;
}
function mergeGlobal(target, merge) {
  if (!target) return merge;
  Object.keys(merge || {}).forEach(function (k) {
    if (merge[k]) {
      target[k] = mergeRule(target[k] || {}, merge[k]);
    }
  });
  return target;
}
function funcProxy(that, proxy) {
  Object.defineProperties(that, Object.keys(proxy).reduce(function (initial, k) {
    initial[k] = {
      get: function get() {
        return proxy[k]();
      }
    };
    return initial;
  }, {}));
}
function byCtx(rule) {
  return rule.__fc__ || (rule.__origin__ ? rule.__origin__.__fc__ : null);
}
function invoke(fn, def) {
  try {
    def = fn();
  } catch (e) {
    logError(e);
  }

  return def;
}

function toArray(value) {
  return Array.isArray(value) ? value : [null, undefined, ''].indexOf(value) > -1 ? [] : [value];
}

function toString(val) {
  return val == null ? '' : _typeof(val) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

function toLine(name) {
  var line = name.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
  if (line.indexOf('-') === 0) line = line.substr(1);
  return line;
}

var id = 0;
function uniqueId() {
  return Math.random().toString(36).substr(3, 3) + Number("".concat(Date.now()).concat(++id)).toString(36);
}

function deepSet(data, idx, val) {
  var _data = data,
      to;
  (idx || '').split('.').forEach(function (v) {
    if (to) {
      if (!_data[to]) {
        _data[to] = {};
      }

      _data = _data[to];
    }

    to = v;
  });
  _data[to] = val;
  return _data;
}

function baseRule() {
  return {
    props: {},
    on: {},
    options: [],
    children: [],
    hidden: false,
    display: true,
    value: undefined
  };
}
function creatorFactory(name, init) {
  return function (title, field, value) {
    var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var maker = new Creator(name, title, field, value, props);

    if (init) {
      if (is.Function(init)) init(maker);else maker.props(init);
    }

    return maker;
  };
}
function Creator(type, title, field, value, props) {
  this._data = extend(baseRule(), {
    type: type,
    title: title,
    field: field,
    value: value,
    props: props || {}
  });
  this.event = this.on;
}
extend(Creator.prototype, {
  getRule: function getRule() {
    return this._data;
  },
  setProp: function setProp(key, value) {
    $set(this._data, key, value);
    return this;
  },
  _clone: function _clone() {
    var clone = new this.constructor();
    clone._data = copyRule(this._data);
    return clone;
  }
});
function appendProto(attrs) {
  attrs.forEach(function (name) {
    Creator.prototype[name] = function (key) {
      mergeRule(this._data, _defineProperty({}, name, arguments.length < 2 ? key : _defineProperty({}, key, arguments[1])));
      return this;
    };
  });
}
appendProto(attrs());

var commonMaker = creatorFactory('');
function create(type, field, title) {
  var make = commonMaker('', field);
  make._data.type = type;
  make._data.title = title;
  return make;
}
function createTmp(template, vm, field, title) {
  var make = commonMaker('', field);
  make._data.type = 'template';
  make._data.template = template;
  make._data.title = title;
  make._data.vm = vm;
  return make;
}
function makerFactory() {
  return {
    create: create,
    createTmp: createTmp,
    template: createTmp,
    factory: creatorFactory
  };
}

function copy(value) {
  return deepCopy(value);
}

function byRules(ctxs, origin) {
  return Object.keys(ctxs).reduce(function (initial, key) {
    initial[key] = origin ? ctxs[key].origin : ctxs[key].rule;
    return initial;
  }, {});
}

function Api(h) {
  function tidyFields(fields) {
    if (is.Undef(fields)) fields = h.fields();else if (!Array.isArray(fields)) fields = [fields];
    return fields;
  }

  function props(fields, key, val) {
    tidyFields(fields).forEach(function (field) {
      var ctx = h.getCtx(field);
      if (!ctx) return;
      $set(ctx.rule, key, val);
      h.$render.clearCache(ctx);
    });
  }

  function allSubForm() {
    var subs = h.subForm;
    return Object.keys(subs).reduce(function (initial, k) {
      var sub = subs[k];
      if (!sub) return initial;
      if (Array.isArray(sub)) initial.push.apply(initial, _toConsumableArray(sub));else initial.push(sub);
      return initial;
    }, []);
  }

  var api = {
    helper: {
      tidyFields: tidyFields,
      props: props
    },

    get config() {
      return h.options;
    },

    get options() {
      return h.options;
    },

    get form() {
      return h.form;
    },

    get rule() {
      return h.rules;
    },

    get parent() {
      return h.vm.$pfc && h.vm.$pfc.$f;
    },

    get children() {
      return allSubForm();
    },

    formData: function formData(fields) {
      return tidyFields(fields).reduce(function (initial, id) {
        var ctx = h.fieldCtx[id];
        if (!ctx) return initial;
        initial[ctx.field] = copy(ctx.rule.value);
        return initial;
      }, {});
    },
    getValue: function getValue(field) {
      var ctx = h.fieldCtx[field];
      if (!ctx) return;
      return copy(ctx.rule.value);
    },
    coverValue: function coverValue(formData) {
      h.deferSyncValue(function () {
        Object.keys(h.fieldCtx).forEach(function (key) {
          var ctx = h.fieldCtx[key];
          if (!ctx) return h.appendData[key] = formData[key];
          ctx.rule.value = hasProperty(formData, key) ? formData[key] : undefined;
        });
      });
    },
    setValue: function setValue(field) {
      console.log(`3213123123`, 3213123123)
      var formData = field;
      if (arguments.length >= 2) formData = _defineProperty({}, field, arguments[1]);
      h.deferSyncValue(function () {
        Object.keys(formData).forEach(function (key) {
          var ctx = h.fieldCtx[key];
          if (!ctx) return h.appendData[key] = formData[key];
          ctx.rule.value = formData[key];
        });
      });
    },
    removeField: function removeField(field) {
      var ctx = h.getCtx(field);
      if (!ctx) return;
      ctx.rm();
      return ctx.origin;
    },
    removeRule: function removeRule(rule) {
      var ctx = rule && byCtx(rule);
      if (!ctx) return;
      ctx.rm();
      return ctx.origin;
    },
    destroy: function destroy() {
      h.vm.$el.parentNode && h.vm.$el.parentNode.removeChild(h.vm.$el);
      h.vm.$destroy();
    },
    fields: function fields() {
      return h.fields();
    },
    append: function append(rule, after, child) {
      var fields = Object.keys(h.fieldCtx),
          index = h.sort.length - 1,
          rules;
      if (rule.field && fields.indexOf(rule.field) > -1) return err("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728"), rule);
      var ctx = h.getCtx(after);

      if (ctx) {
        if (child) {
          rules = ctx.rule.children;
          index = ctx.rule.children.length - 1;
        } else {
          index = ctx.root.indexOf(ctx.origin);
          rules = ctx.root;
        }
      } else rules = h.rules;

      rules.splice(index + 1, 0, rule);
    },
    prepend: function prepend(rule, after, child) {
      var fields = Object.keys(h.fieldCtx),
          index = 0,
          rules;
      if (rule.field && fields.indexOf(rule.field) > -1) return err("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728"), rule);
      var ctx = h.getCtx(after);

      if (ctx) {
        if (child) {
          rules = ctx.rule.children;
        } else {
          index = ctx.root.indexOf(ctx.origin);
          rules = ctx.root;
        }
      } else rules = h.rules;

      rules.splice(index, 0, rule);
    },
    hidden: function hidden(state, fields) {
      props(fields, 'hidden', !!state);
      h.refresh();
    },
    hiddenStatus: function hiddenStatus(id) {
      var ctx = h.getCtx(id);
      if (!ctx) return;
      return !!ctx.rule.hidden;
    },
    display: function display(state, fields) {
      props(fields, 'display', !!state);
      h.refresh();
    },
    displayStatus: function displayStatus(id) {
      var ctx = h.getCtx(id);
      if (!ctx) return;
      return !!ctx.rule.display;
    },
    disabled: function disabled(_disabled, fields) {
      tidyFields(fields).forEach(function (field) {
        var ctx = h.fieldCtx[field];
        if (!ctx) return;
        $set(ctx.rule.props, 'disabled', !!_disabled);
      });
      h.refresh();
    },
    model: function model(origin) {
      return byRules(h.fieldCtx, origin);
    },
    component: function component(origin) {
      return byRules(h.nameCtx, origin);
    },
    bind: function bind() {
      return api.form;
    },
    reload: function reload(rules) {
      h.reloadRule(rules);
    },
    updateOptions: function updateOptions(options) {
      h.fc.updateOptions(options);
      api.refresh();
    },
    onSubmit: function onSubmit(fn) {
      api.updateOptions({
        onSubmit: fn
      });
    },
    sync: function sync(field) {
      var ctx = is.Object(field) ? byCtx(field) : h.getCtx(field);

      if (ctx && !ctx.deleted) {
        var subForm = h.subForm[field];

        if (subForm) {
          if (Array.isArray(subForm)) {
            subForm.forEach(function (form) {
              form.refresh();
            });
          } else if (subForm) {
            subForm.refresh();
          }
        } //ctx.updateKey(true);


        h.$render.clearCache(ctx);
        h.refresh();
      }
    },
    refresh: function refresh() {
      allSubForm().forEach(function (sub) {
        sub.refresh();
      });
      h.$render.clearCacheAll();
      h.refresh();
    },
    refreshOptions: function refreshOptions() {
      h.$manager.updateOptions(h.options);
      api.refresh();
    },
    hideForm: function hideForm(hide) {
      $set(h.vm, 'isShow', !hide);
    },
    changeStatus: function changeStatus() {
      return h.changeStatus;
    },
    clearChangeStatus: function clearChangeStatus() {
      h.changeStatus = false;
    },
    updateRule: function updateRule(id, rule) {
      var r = api.getRule(id);
      r && extend(r, rule);
    },
    updateRules: function updateRules(rules) {
      Object.keys(rules).forEach(function (id) {
        api.updateRule(id, rules[id]);
      });
    },
    mergeRule: function mergeRule$1(id, rule) {
      var ctx = h.getCtx(id);
      ctx && mergeRule(ctx.rule, rule);
    },
    mergeRules: function mergeRules(rules) {
      Object.keys(rules).forEach(function (id) {
        api.mergeRule(id, rules[id]);
      });
    },
    getRule: function getRule(id, origin) {
      var ctx = h.getCtx(id);

      if (ctx) {
        return origin ? ctx.origin : ctx.rule;
      }
    },
    updateValidate: function updateValidate(id, validate, merge) {
      if (merge) {
        api.mergeRule(id, {
          validate: validate
        });
      } else {
        props(id, 'validate', validate);
      }
    },
    updateValidates: function updateValidates(validates, merge) {
      Object.keys(validates).forEach(function (id) {
        api.updateValidate(id, validates[id], merge);
      });
    },
    refreshValidate: function refreshValidate() {
      h.vm.validate = {};
      api.refresh();
    },
    resetFields: function resetFields(fields) {
      var ctxs = h.fieldCtx;
      tidyFields(fields).forEach(function (field) {
        var ctx = ctxs[field];
        if (!ctx) return;
        h.$render.clearCache(ctx);
        ctx.rule.value = copy(ctx.defaultValue);
        h.refreshControl(ctx);
      });
    },
    method: function method(id, name) {
      var el = api.el(id);
      if (!el || !el[name]) throw new Error(format('err', "".concat(name, "\u65B9\u6CD5\u4E0D\u5B58\u5728")));
      return function () {
        return el[name].apply(el, arguments);
      };
    },
    exec: function exec(id, name) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return invoke(function () {
        return api.method(id, name).apply(void 0, args);
      });
    },
    toJson: function toJson$1(space) {
      return toJson(api.rule, space);
    },
    trigger: function trigger(id, event) {
      var el = api.el(id);

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      el && el.$emit.apply(el, [event].concat(args));
    },
    el: function el(id) {
      var ctx = h.getCtx(id);
      if (ctx) return ctx.el || h.vm.$refs[ctx.ref];
    },
    closeModal: function closeModal(id) {
      var el = api.el(id);
      el && el.$emit && el.$emit('close-modal');
    },
    getSubForm: function getSubForm(field) {
      return h.subForm[field];
    },
    nextTick: function nextTick(fn) {
      h.bus.$once('next-tick', fn);
      h.refresh();
    },
    nextRefresh: function nextRefresh(fn) {
      h.nextRefresh();
      fn && invoke(fn);
    }
  };
  ['on', 'once', 'off', 'set'].forEach(function (n) {
    api[n] = function () {
      var _h$vm;

      (_h$vm = h.vm)["$".concat(n)].apply(_h$vm, arguments);
    };
  });
  api.changeValue = api.changeField = api.setValue;
  return api;
}

function useCache(Render) {
  extend(Render.prototype, {
    initCache: function initCache() {
      this.clearCacheAll();
    },
    clearCache: function clearCache(ctx) {
      if (!this.cache[ctx.id]) {
        ctx.parent && this.clearCache(ctx.parent);
        return;
      }

      if (this.cache[ctx.id].use === true || this.cache[ctx.id].parent) {
        this.$handle.refresh();
      }

      var parent = this.cache[ctx.id].parent;
      this.cache[ctx.id] = null;
      parent && this.clearCache(parent);
    },
    clearCacheAll: function clearCacheAll() {
      this.cache = {};
    },
    setCache: function setCache(ctx, vnode, parent) {
      this.cache[ctx.id] = {
        vnode: vnode,
        use: false,
        parent: parent
      };
    },
    getCache: function getCache(ctx) {
      var cache = this.cache[ctx.id];
      cache.use = true;
      return cache.vnode;
    }
  });
}

function toCase(str) {
  var to = str.replace(/(-[a-z])/g, function (v) {
    return v.replace('-', '').toLocaleUpperCase();
  });
  return lower(to);
}
function lower(str) {
  return str.replace(str[0], str[0].toLowerCase());
}

function setTempProps(vm, ctx, api) {
  if (!vm.$props) return;
  var prop = ctx.prop;
  var keys = Object.keys(vm.$props);
  var inject = injectProp(ctx, api);
  var injectKeys = Object.keys(inject);
  keys.forEach(function (key) {
    if (hasProperty(prop.props, key)) vm.$props[key] = prop.props[key];else if (injectKeys.indexOf(key) > -1) vm.$props[key] = inject[key];
  });
  var key = vm.$options.model && vm.$options.model.prop || 'value';

  if (keys.indexOf(key) > -1) {
    vm.$props[key] = prop.value;
  }
}

function injectProp(ctx, api) {
  return {
    formCreate: api,
    formCreateField: ctx.field,
    formCreateOptions: ctx.prop.options,
    formCreateRule: function () {
      var temp = _objectSpread2({}, ctx.prop);

      return temp.on = temp.on ? _objectSpread2({}, temp.on) : {}, temp;
    }()
  };
}

function useRender(Render) {
  extend(Render.prototype, {
    initRender: function initRender() {
      this.renderList = {};
      this.clearOrgChildren();
    },
    initOrgChildren: function initOrgChildren() {
      var ctxs = this.$handle.ctxs;
      this.orgChildren = Object.keys(ctxs).reduce(function (initial, id) {
        var children = ctxs[id].rule.children;
        initial[id] = is.trueArray(children) ? _toConsumableArray(children) : [];
        return initial;
      }, {});
    },
    clearOrgChildren: function clearOrgChildren() {
      this.orgChildren = {};
    },
    render: function render() {
      var _this = this;

      if (!this.vm.isShow) {
        return;
      }

      this.$h = this.vm.$createElement;
      this.$manager.beforeRender();
      var vn = this.sort.map(function (id) {
        return _this.renderCtx(_this.$handle.ctxs[id]);
      }).filter(function (val) {
        return val !== undefined;
      });
      return this.$manager.render(vn);
    },
    makeVm: function makeVm(rule) {
      var _this2 = this;

      var vm = rule.vm;
      if (!vm) return new _vue();else if (is.Function(vm)) return invoke(function () {
        return vm(_this2.$handle.getInjectData(rule));
      });else if (!vm._isVue) return new _vue(vm);
      return vm;
    },
    mergeGlobal: function mergeGlobal(ctx) {
      var g = this.$handle.options.global;
      if (!g) return; //todo 缓存配置,更新 option 更新

      if (!ctx.cacheConfig) ctx.cacheConfig = g[ctx.originType] || g[ctx.type] || g[ctx.trueType] || {};
      ctx.prop = mergeRule({}, [g['*'], ctx.cacheConfig, ctx.prop]);
    },
    setOptions: function setOptions(ctx) {
      if (ctx.prop.optionsTo && ctx.prop.options) {
        deepSet(ctx.prop, ctx.prop.optionsTo, ctx.prop.options);
      }
    },
    renderTemp: function renderTemp(ctx) {
      var _this3 = this;

      if (!_vue.compile) {
        tip('当前使用的Vue构建版本不支持compile,无法使用template功能');
        return [];
      }

      var rule = ctx.prop;
      var id = ctx.id,
          key = ctx.key;

      if (!this.renderList[id]) {
        if (!ctx.el) {
          ctx.el = this.makeVm(rule);
          this.vm.$nextTick(function () {
            return ctx.parser.mounted(ctx);
          });
        }

        var _vm = ctx.el;
        if (ctx.input) _vm.$on(_vm.$options.model && _vm.$options.model.event || 'input', function (value) {
          _this3.onInput(ctx, value);
        });
        this.renderList[id] = {
          vm: _vm,
          template: _vue.compile(rule.template)
        };
      }

      var _this$renderList$id = this.renderList[id],
          vm = _this$renderList$id.vm,
          template = _this$renderList$id.template;
      setTempProps(vm, ctx, this.$handle.api);
      var vn = template.render.call(vm);
      if (is.Undef(vn.data)) vn.data = {};
      vn.key = key;
      vn.data.ref = ctx.ref;
      vn.data.key = key;
      return vn;
    },
    renderSides: function renderSides(vn, ctx, temp) {
      var prop = ctx[temp ? 'rule' : 'prop'];
      return [this.renderRule(prop.prefix), vn, this.renderRule(prop.suffix)];
    },
    renderCtx: function renderCtx(ctx, parent) {
      if (ctx.type === 'hidden') return;

      if (!this.cache[ctx.id]) {
        var vn;
        var cacheFlag = true;
        var _type = ctx.trueType;
        var none = !(is.Undef(ctx.rule.display) || !!ctx.rule.display);

        if (_type === 'template' && !ctx.rule.template) {
          vn = this.renderSides(this.renderChildren(ctx), ctx, true);

          if (none) {
            this.display(vn);
          }

          vn = this.item(ctx, vn);
        } else if (_type === 'fcFragment') {
          vn = this.renderChildren(ctx);
        } else {
          ctx.initProp();
          this.mergeGlobal(ctx);
          this.$manager.tidyRule(ctx);
          this.setOptions(ctx);
          this.ctxProp(ctx);
          var prop = ctx.prop;

          if (prop.hidden) {
            this.setCache(ctx, undefined, parent);
            return;
          }

          if (_type === 'template' && prop.template) {
            vn = this.renderTemp(ctx);
            cacheFlag = false;
          } else {
            vn = ctx.parser.render(this.renderChildren(ctx), ctx);
          }

          vn = this.renderSides(vn, ctx);

          if (!(!ctx.input && is.Undef(prop["native"])) && prop["native"] !== true) {
            vn = this.$manager.makeWrap(ctx, vn);
          }

          if (none) {
            vn = this.display(vn);
          }

          vn = this.item(ctx, vn);
        }

        if (cacheFlag) {
          this.setCache(ctx, vn, parent);
        }

        return vn;
      }

      return this.getCache(ctx);
    },
    display: function display(vn) {
      var _this4 = this;

      if (Array.isArray(vn)) {
        var data = [];
        vn.forEach(function (v) {
          if (Array.isArray(v)) return _this4.display(v);
          if (_this4.none(v)) data.push(v);
        });
        return data;
      } else {
        return this.none(vn);
      }
    },
    none: function none(vn) {
      if (vn && vn.data) {
        if (Array.isArray(vn.data.style)) {
          vn.data.style.push({
            display: 'none'
          });
        } else {
          vn.data.style = [vn.data.style, {
            display: 'none'
          }];
        }

        return vn;
      }
    },
    item: function item(ctx, vn) {
      return this.$h('fcFragment', {
        slot: ctx.rule.slot,
        key: ctx.key
      }, [vn]);
    },
    ctxProp: function ctxProp(ctx, custom) {
      var _this5 = this;

      var ref = ctx.ref,
          key = ctx.key,
          rule = ctx.rule;
      this.$manager.mergeProp(ctx, custom);
      ctx.parser.mergeProp(ctx, custom);
      var props = [{
        props: injectProp(ctx, this.$handle.api),
        ref: ref,
        key: rule.key || "".concat(key, "fc"),
        slot: undefined
      }];

      if (!custom) {
        props.push({
          on: {
            'hook:mounted': function hookMounted() {
              _this5.onMounted(ctx);
            },
            'fc.sub-form': function fcSubForm(subForm) {
              _this5.$handle.addSubForm(ctx, subForm);
            }
          },
          model: ctx.input ? {
            value: this.$handle.getFormData(ctx),
            callback: function callback(value) {
              _this5.onInput(ctx, value);
            },
            expression: "formData.".concat(ctx.field)
          } : undefined
        });
      }

      mergeProps(props, ctx.prop);
      return ctx.prop;
    },
    onMounted: function onMounted(ctx) {
      ctx.el = this.vm.$refs[ctx.ref];
      ctx.parser.mounted(ctx);
      this.$handle.effect(ctx, 'mounted');
    },
    onInput: function onInput(ctx, value) {
      this.$handle.onInput(ctx, value);
    },
    renderChildren: function renderChildren(ctx) {
      var _this6 = this;

      var children = ctx.rule.children,
          orgChildren = this.orgChildren[ctx.id];

      var isRm = function isRm(child) {
        return !is.String(child) && child.__fc__ && !_this6.$handle.ctxs[child.__fc__.id];
      };

      if (!is.trueArray(children) && orgChildren) {
        this.$handle.deferSyncValue(function () {
          orgChildren.forEach(function (child) {
            if (!child) return;

            if (isRm(child)) {
              _this6.$handle.rmCtx(child.__fc__);
            }
          });
        });
        this.orgChildren[ctx.id] = [];
        return [];
      }

      orgChildren && this.$handle.deferSyncValue(function () {
        orgChildren.forEach(function (child) {
          if (!child) return;

          if (children.indexOf(child) === -1 && isRm(child)) {
            _this6.$handle.rmCtx(child.__fc__);
          }
        });
      });
      return children.map(function (child) {
        if (!child) return;
        if (is.String(child)) return child;

        if (child.__fc__) {
          return _this6.renderCtx(child.__fc__, ctx);
        }

        if (!_this6.$handle.isRepeatRule(child.__origin__ || child) && child.type) {
          _this6.vm.$nextTick(function () {
            _this6.$handle.loadChildren(children, ctx);

            _this6.$handle.refresh();
          });
        }
      });
    },
    defaultRender: function defaultRender(ctx, children) {
      var prop = ctx.prop;
      if (this.vNode[ctx.type]) return this.vNode[ctx.type](prop, children);
      if (this.vNode[ctx.originType]) return this.vNode[ctx.originType](prop, children);
      return this.vNode.make(lower(ctx.originType), prop, children);
    },
    renderRule: function renderRule(rule, children, origin) {
      var _this7 = this;

      if (!rule) return undefined;
      if (is.String(rule)) return rule;
      var type;

      if (origin) {
        type = rule.type;
      } else {
        type = rule.is;

        if (rule.type) {
          type = toCase(rule.type);
          var alias = this.vNode.aliasMap[type];
          if (alias) type = toCase(alias);
        }
      }

      if (!type) return undefined;
      var data = [[children]];

      if (is.trueArray(rule.children)) {
        data.push(rule.children.map(function (v) {
          return _this7.renderRule(v);
        }));
      }

      return this.$h(type, _objectSpread2({}, rule), data);
    }
  });
}

function Render(handle) {
  extend(this, {
    $handle: handle,
    fc: handle.fc,
    vm: handle.vm,
    $manager: handle.$manager,
    vNode: new handle.fc.CreateNode(handle.vm)
  });
  funcProxy(this, {
    options: function options() {
      return handle.options;
    },
    sort: function sort() {
      return handle.sort;
    }
  });
  this.initCache();
  this.initRender();
}
useCache(Render);
useRender(Render);

function useInject(Handler) {
  extend(Handler.prototype, {
    parseInjectEvent: function parseInjectEvent(rule, on) {
      var _this = this;

      if (rule.inject === false) return;
      var inject = rule.inject || this.options.injectEvent;
      if (is.Undef(inject)) return;
      Object.keys(on).forEach(function (k) {
        if (is.Function(on[k])) on[k] = _this.inject(rule, on[k], inject);
      });
      return on;
    },
    parseEmit: function parseEmit(ctx, on) {
      var _this2 = this;

      var event = {},
          rule = ctx.rule,
          emitPrefix = rule.emitPrefix,
          field = rule.field,
          name = rule.name,
          inject = rule.inject;
      var emit = rule[on ? 'emit' : 'nativeEmit'] || [];

      if (is.trueArray(emit)) {
        var emitKey = emitPrefix || field || name;

        if (emitKey) {
          if (!on) emitKey = "native-".concat(emitKey);
          emit.forEach(function (eventName) {
            if (!eventName) return;
            var eventInject;

            if (is.Object(eventName)) {
              eventInject = eventName.inject;
              eventName = eventName.name;
            }

            var fieldKey = toLine("".concat(emitKey, "-").concat(eventName));

            var fn = function fn() {
              var _this2$vm, _this2$vm2;

              for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
              }

              (_this2$vm = _this2.vm).$emit.apply(_this2$vm, [fieldKey].concat(arg));

              (_this2$vm2 = _this2.vm).$emit.apply(_this2$vm2, ['emit-event', fieldKey].concat(arg));
            };

            fn.__emit = true;

            if (!eventInject && inject === false) {
              event[eventName] = fn;
            } else {
              var _inject = eventInject || inject || _this2.options.injectEvent;

              event[eventName] = is.Undef(_inject) ? fn : _this2.inject(rule, fn, _inject);
            }
          });
        }
      }

      ctx.computed[on ? 'on' : 'nativeOn'] = event;
      return event;
    },
    getInjectData: function getInjectData(self, inject) {
      var _this$vm$$options$pro = this.vm.$options.propsData,
          option = _this$vm$$options$pro.option,
          rule = _this$vm$$options$pro.rule;
      return {
        $f: this.api,
        rule: rule,
        self: self.__origin__,
        option: option,
        inject: inject
      };
    },
    inject: function inject(self, _fn, _inject2) {
      if (_fn.__inject) {
        if (this.watching && !this.loading) return _fn;
        _fn = _fn.__origin;
      }

      var h = this;

      var fn = function fn() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        args.unshift(h.getInjectData(self, _inject2));
        return _fn.apply(this, args);
      };

      fn.__inject = true;
      fn.__origin = _fn;
      return fn;
    }
  });
}

var EVENT = ['hook:updated', 'hook:mounted'];
function usePage(Handler) {
  extend(Handler.prototype, {
    usePage: function usePage() {
      var _this = this;

      var page = this.options.page;
      if (!page) return;
      var first = 25;
      var limit = getLimit(this.rules);

      if (is.Object(page)) {
        if (page.first) first = parseInt(page.first, 10) || first;
        if (page.limit) limit = parseInt(page.limit, 10) || limit;
      }

      extend(this, {
        first: first,
        limit: limit,
        pageEnd: this.rules.length <= first
      });
      this.bus.$on('page-end', function () {
        return _this.vm.$emit('page-end', _this.api);
      });
      this.pageLoad();
    },
    pageLoad: function pageLoad() {
      var _this2 = this;

      var pageFn = function pageFn() {
        if (_this2.pageEnd) {
          _this2.vm.$off(EVENT, pageFn);

          _this2.bus.$emit('page-end');
        } else {
          _this2.first += _this2.limit;
          _this2.pageEnd = _this2.rules.length <= _this2.first;

          _this2.loadRule();

          _this2.refresh();
        }
      };

      this.vm.$on(EVENT, pageFn);
    }
  });
}

function getLimit(rules) {
  return rules.length < 31 ? 31 : Math.ceil(rules.length / 3);
}

function useRender$1(Handler) {
  extend(Handler.prototype, {
    clearNextTick: function clearNextTick() {
      this.nextTick && clearTimeout(this.nextTick);
      this.nextTick = null;
    },
    bindNextTick: function bindNextTick(fn) {
      var _this = this;

      this.clearNextTick();
      this.nextTick = setTimeout(function () {
        fn();
        _this.nextTick = null;
      }, 10);
    },
    render: function render() {
      // console.warn('%c render', 'color:green');
      ++this.loadedId;
      if (this.vm.unique > 0) return this.$render.render();else {
        this.vm.unique = 1;
        return [];
      }
    }
  });
}

function bind(ctx) {
  Object.defineProperties(ctx.origin, {
    __fc__: enumerable(ctx, true)
  });
}

function RuleContext(handle, rule) {
  var id = uniqueId();
  extend(this, {
    id: id,
    ref: id,
    wrapRef: id + 'fi',
    rule: rule,
    origin: rule.__origin__ || rule,
    name: rule.name,
    watch: [],
    linkOn: [],
    root: [],
    ctrlRule: [],
    parent: null,
    cacheConfig: null,
    prop: _objectSpread2({}, rule),
    computed: {},
    payload: {},
    input: !!rule.field,
    el: undefined,
    defaultValue: rule.field ? deepCopy(rule.value) : undefined,
    field: rule.field || undefined
  });
  this.updateType();
  this.updateKey();
  bind(this);
  this.update(handle, true);
}
extend(RuleContext.prototype, {
  effectData: function effectData(name) {
    if (!this.payload[name]) {
      this.payload[name] = {};
    }

    return this.payload[name];
  },
  clearEffectData: function clearEffectData(name) {
    delete this.payload[name];
  },
  updateKey: function updateKey(flag) {
    this.key = uniqueId();
    flag && this.parent && this.parent.updateKey(flag);
  },
  updateType: function updateType() {
    this.originType = this.rule.type;
    this.type = toCase(this.rule.type);
  },
  setParser: function setParser(parser) {
    this.parser = parser;
    parser.init(this);
  },
  initProp: function initProp() {
    var _this = this;

    this.prop = mergeProps([this.rule].concat(_toConsumableArray(Object.keys(this.payload).map(function (k) {
      return _this.payload[k];
    })), [this.computed]));
  },
  check: function check(handle) {
    return this.vm === handle.vm;
  },
  unwatch: function unwatch() {
    this.watch.forEach(function (un) {
      return un();
    });
    this.watch = [];
  },
  unlink: function unlink() {
    this.linkOn.forEach(function (un) {
      return un();
    });
    this.linkOn = [];
  },
  link: function link() {
    this.unlink();
    this.$handle.appendLink(this);
  },
  watchTo: function watchTo() {
    this.$handle.watchCtx(this);
  },
  "delete": function _delete() {
    var undef = void 0;
    this.unwatch();
    this.unlink();
    this.rmCtrl();
    extend(this, {
      deleted: true,
      prop: _objectSpread2({}, this.rule),
      computed: {},
      el: undef,
      $handle: undef,
      $render: undef,
      $api: undef,
      vm: undef,
      vNode: undef,
      parent: null,
      cacheConfig: null
    });
  },
  rmCtrl: function rmCtrl() {
    this.ctrlRule.forEach(function (ctrl) {
      return ctrl.__fc__.rm();
    });
    this.ctrlRule = [];
  },
  rm: function rm() {
    var _this2 = this;

    var _rm = function _rm() {
      var index = _this2.root.indexOf(_this2.origin);

      if (index > -1) {
        _this2.root.splice(index, 1);

        _this2.$handle.refresh();
      }
    };

    if (this.deleted) {
      _rm();

      return;
    }

    this.$handle.noWatch(function () {
      _this2.$handle.deferSyncValue(function () {
        _this2.rmCtrl();

        _rm();

        _this2.$handle.rmCtx(_this2);

        extend(_this2, {
          root: []
        });
      });
    });
  },
  update: function update(handle, init) {
    extend(this, {
      deleted: false,
      $handle: handle,
      $render: handle.$render,
      $api: handle.api,
      vm: handle.vm,
      trueType: handle.getType(this.originType),
      vNode: handle.$render.vNode,
      updated: false
    });
    !init && this.unwatch();
    this.watchTo();
    this.link();
  }
});

function useLoader(Handler) {
  extend(Handler.prototype, {
    nextRefresh: function nextRefresh(fn) {
      var _this = this;

      var id = this.loadedId;
      this.vm.$nextTick(function () {
        id === _this.loadedId && (fn ? fn() : _this.refresh());
      });
    },
    parseRule: function parseRule(_rule) {
      var _this2 = this;

      var rule = getRule(_rule);
      Object.defineProperties(rule, {
        __origin__: enumerable(_rule, true)
      });
      fullRule(rule);
      if (rule.field && hasProperty(this.options.formData || {}, rule.field)) rule.value = this.options.formData[rule.field];
      rule.options = Array.isArray(rule.options) ? rule.options : [];
      ['on', 'props', 'nativeOn'].forEach(function (k) {
        var v = rule[k];

        if (v) {
          Object.keys(v).forEach(function (n) {
            v[n] = parseFn(v[n]);
          });

          _this2.parseInjectEvent(rule, v);
        }
      });
      return rule;
    },
    syncProp: function syncProp(ctx) {
      var _this3 = this;

      var rule = ctx.rule;
      is.trueArray(rule.sync) && mergeProps([{
        on: rule.sync.reduce(function (pre, prop) {
          pre["update:".concat(prop)] = function (val) {
            rule.props[prop] = val;

            _this3.vm.$emit('sync', prop, val, rule, _this3.fapi);
          };

          return pre;
        }, {})
      }], ctx.computed);
    },
    isRepeatRule: function isRepeatRule(rule) {
      return this.repeatRule.indexOf(rule) > -1;
    },
    loadRule: function loadRule() {
      var _this4 = this;

      // console.warn('%c load', 'color:blue');
      this.cycleLoad = false;
      this.loading = true;

      if (this.pageEnd) {
        this.bus.$emit('load-start');
      }

      this.deferSyncValue(function () {
        _this4._loadRule(_this4.rules);

        _this4.loading = false;

        if (_this4.cycleLoad && _this4.pageEnd) {
          return _this4.loadRule();
        }

        if (_this4.pageEnd) {
          _this4.bus.$emit('load-end');
        }

        _this4.vm._renderRule();

        _this4.$render.initOrgChildren();

        _this4.syncForm();
      });
    },
    loadChildren: function loadChildren(children, parent) {
      this.cycleLoad = false;
      this.loading = true;
      this.bus.$emit('load-start');

      this._loadRule(children, parent);

      this.loading = false;

      if (this.cycleLoad) {
        return this.loadRule();
      } else {
        this.bus.$emit('load-end');
        this.syncForm();
      }

      this.$render.clearCache(parent);
    },
    _loadRule: function _loadRule(rules, parent) {
      var _this5 = this;

      var preIndex = function preIndex(i) {
        var pre = rules[i - 1];

        if (!pre || !pre.__fc__) {
          return i > 0 ? preIndex(i - 1) : -1;
        }

        var index = _this5.sort.indexOf(pre.__fc__.id);

        return index > -1 ? index : preIndex(i - 1);
      };

      var loadChildren = function loadChildren(children, parent) {
        if (is.trueArray(children)) {
          _this5._loadRule(children, parent);
        }
      };

      var initEvent = function initEvent(rule) {
        return _this5.ruleEffect(rule, 'init');
      };

      rules.map(function (_rule, index) {
        if (parent && (is.String(_rule) || is.Undef(_rule))) return;
        if (!_this5.pageEnd && !parent && index >= _this5.first) return;
        if (!is.Object(_rule) || !getRule(_rule).type) return err('未定义生成规则的 type 字段', _rule);

        if (_rule.__fc__ && _rule.__fc__.root === rules && _this5.ctxs[_rule.__fc__.id]) {
          loadChildren(_rule.__fc__.rule.children, _rule.__fc__);
          return _rule.__fc__;
        }

        var rule = getRule(_rule);
        if (!_rule.__fc__) initEvent(rule);

        if (rule.field && _this5.fieldCtx[rule.field] && _this5.fieldCtx[rule.field] !== _rule.__fc__) {
          _this5.repeatRule.push(_rule);

          return err("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728"), _rule);
        }

        var ctx;

        if (_rule.__fc__) {
          ctx = _rule.__fc__;
          var check = !ctx.check(_this5);

          if (ctx.deleted) {
            if (check) {
              if (isCtrl(ctx)) {
                return;
              }

              ctx.update(_this5);
            }
          } else {
            if (check) {
              if (isCtrl(ctx)) {
                return;
              }

              rules[index] = _rule = _rule._clone ? _rule._clone() : copyRule(_rule);
              initEvent(getRule(_rule));
              ctx = null;
            }
          }
        }

        if (!ctx) {
          ctx = new RuleContext(_this5, _this5.parseRule(_rule));

          _this5.bindParser(ctx);
        } else if (ctx.originType !== ctx.rule.type) {
          ctx.updateType();

          _this5.bindParser(ctx);
        }

        _this5.appendValue(ctx.rule);

        [false, true].forEach(function (b) {
          return _this5.parseEmit(ctx, b);
        });

        _this5.syncProp(ctx);

        ctx.parent = parent || null;
        ctx.root = rules;

        _this5.setCtx(ctx);

        loadChildren(ctx.rule.children, ctx);

        if (!parent) {
          var _preIndex = preIndex(index);

          if (_preIndex > -1 || !index) {
            _this5.sort.splice(_preIndex + 1, 0, ctx.id);
          } else {
            _this5.sort.push(ctx.id);
          }
        }

        var r = ctx.rule;

        if (!ctx.updated) {
          ctx.updated = true;

          if (is.Function(r.update)) {
            _this5.bus.$once('load-end', function () {
              _this5.refreshUpdate(ctx, r.value);
            });
          }

          _this5.effect(ctx, 'loaded');
        }

        if (ctx.input) Object.defineProperty(r, 'value', _this5.valueHandle(ctx));
        if (_this5.refreshControl(ctx)) _this5.cycleLoad = true;
        return ctx;
      });
    },
    refreshControl: function refreshControl(ctx) {
      return ctx.input && ctx.rule.control && this.useCtrl(ctx);
    },
    useCtrl: function useCtrl(ctx) {
      var _this6 = this;

      var controls = getCtrl(ctx),
          validate = [],
          api = this.api;
      if (!controls.length) return false;

      var _loop = function _loop(i) {
        var control = controls[i],
            handleFn = control.handle || function (val) {
          return val === control.value;
        };

        var data = _objectSpread2(_objectSpread2({}, control), {}, {
          valid: invoke(function () {
            return handleFn(ctx.rule.value, api);
          }),
          ctrl: findCtrl(ctx, control.rule)
        });

        if (data.valid && data.ctrl || !data.valid && !data.ctrl) return "continue";
        validate.push(data);
      };

      for (var i = 0; i < controls.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      if (!validate.length) return false;
      var flag = false;
      validate.reverse().forEach(function (_ref) {
        var valid = _ref.valid,
            rule = _ref.rule,
            prepend = _ref.prepend,
            append = _ref.append,
            child = _ref.child,
            ctrl = _ref.ctrl;

        if (valid) {
          flag = true;
          var ruleCon = {
            type: 'fcFragment',
            "native": true,
            __ctrl: true,
            children: rule
          };
          ctx.ctrlRule.push(ruleCon);

          _this6.bus.$once('load-start', function () {
            // this.cycleLoad = true;
            if (prepend) {
              api.prepend(ruleCon, prepend, child);
            } else if (append || child) {
              api.append(ruleCon, append || ctx.id, child);
            } else {
              ctx.root.splice(ctx.root.indexOf(ctx.origin) + 1, 0, ruleCon);
            }
          });
        } else {
          ctx.ctrlRule.splice(ctx.ctrlRule.indexOf(ctrl), 1);
          var ctrlCtx = byCtx(ctrl);
          ctrlCtx && ctrlCtx.rm();
        }
      });
      this.vm.$emit('control', ctx.origin, this.api);
      this.effect(ctx, 'control');
      return flag;
    },
    reloadRule: function reloadRule(rules) {
      return this._reloadRule(rules);
    },
    _reloadRule: function _reloadRule(rules) {
      var _this7 = this;

      // console.warn('%c reload', 'color:red');
      if (!rules) rules = this.rules;

      var ctxs = _objectSpread2({}, this.ctxs);

      this.clearNextTick();
      this.$render.clearOrgChildren();
      this.initData(rules);
      this.fc.rules = rules;
      this.bus.$once('load-end', function () {
        Object.keys(ctxs).filter(function (id) {
          return _this7.ctxs[id] === undefined;
        }).forEach(function (id) {
          return _this7.rmCtx(ctxs[id]);
        });

        _this7.$render.clearCacheAll();
      });
      this.reloading = true;
      this.loadRule();
      this.reloading = false;
      this.refresh();
      this.bus.$off('next-tick', this.nextReload);
      this.bus.$once('next-tick', this.nextReload);
    },
    //todo 组件生成全部通过 alias
    refresh: function refresh() {
      this.vm._refresh();
    }
  });
}

function fullRule(rule) {
  var def = baseRule();
  Object.keys(def).forEach(function (k) {
    if (!hasProperty(rule, k)) rule[k] = def[k];
  });
  return rule;
}

function getCtrl(ctx) {
  var control = ctx.rule.control || [];
  if (is.Object(control)) return [control];else return control;
}

function findCtrl(ctx, rule) {
  for (var i = 0; i < ctx.ctrlRule.length; i++) {
    var ctrl = ctx.ctrlRule[i];
    if (ctrl.children === rule) return ctrl;
  }
}

function isCtrl(ctx) {
  return !!ctx.rule.__ctrl;
}

function useInput(Handler) {
  extend(Handler.prototype, {
    getValue: function getValue(ctx) {
      if (!hasProperty(ctx, 'cacheValue')) {
        ctx.cacheValue = ctx.parser.toValue(this.getFormData(ctx), ctx);
      }

      return ctx.cacheValue;
    },
    setValue: function setValue(ctx, value, formValue, setFlag) {
      console.log(`90129023131290`, 90129023131290)
      if (ctx.deleted) return;
      ctx.cacheValue = value;
      this.changeStatus = true;
      this.nextRefresh();
      this.$render.clearCache(ctx);
      this.setFormData(ctx, formValue);
      this.syncValue();
      this.valueChange(ctx, value);
      this.vm.$emit('change', ctx.field, value, ctx.origin, this.api, setFlag);
      this.effect(ctx, 'value');
    },
    onInput: function onInput(ctx, value) {
      var val;

      if (ctx.input && (this.isQuote(ctx, val = ctx.parser.toValue(value, ctx)) || this.isChange(ctx, val))) {
        this.setValue(ctx, val, value);
      }
    },
    setFormData: function setFormData(ctx, value) {
      $set(this.formData, ctx.field, value);
    },
    getFormData: function getFormData(ctx) {
      return this.formData[ctx.field];
    },
    validate: function validate() {
      var _this = this;

      toEmpty(this.vm.validate);
      Object.keys(this.fieldCtx).forEach(function (id) {
        var ctx = _this.fieldCtx[id];
        _this.vm.validate[ctx.field] = toArray(ctx.rule.validate);
      });
      return this.vm.validate;
    },
    syncForm: function syncForm() {
      var _this2 = this;

      toEmpty(this.form);
      Object.defineProperties(this.form, Object.keys(this.formData).reduce(function (initial, field) {
        var ctx = _this2.getCtx(field);

        var handle = _this2.valueHandle(ctx);

        handle.configurable = true;
        initial[field] = handle;
        return initial;
      }, {}));
      this.syncValue();
    },
    valueHandle: function valueHandle(ctx) {
      var _this3 = this;

      return {
        enumerable: true,
        get: function get() {
          return _this3.getValue(ctx);
        },
        set: function set(value) {
          if (_this3.isChange(ctx, value)) {
            _this3.setValue(ctx, value, ctx.parser.toFormValue(value, ctx), true);
          }
        }
      };
    },
    appendValue: function appendValue(rule) {
      if (!rule.field || !hasProperty(this.appendData, rule.field)) return;
      rule.value = this.appendData[rule.field];
      delete this.appendData[rule.field];
    },
    addSubForm: function addSubForm(ctx, subForm) {
      this.subForm[ctx.field] = subForm;
    },
    deferSyncValue: function deferSyncValue(fn) {
      if (!this.deferSyncFn) {
        this.deferSyncFn = fn;
      }

      invoke(fn);

      if (this.deferSyncFn === fn) {
        this.deferSyncFn = null;

        if (fn.sync) {
          this.syncValue();
        }
      }
    },
    syncValue: function syncValue() {
      if (this.deferSyncFn) {
        return this.deferSyncFn.sync = true;
      }

      this.vm._updateValue(_objectSpread2({}, this.form));
    },
    isChange: function isChange(ctx, value) {
      return JSON.stringify(ctx.rule.value) !== JSON.stringify(value);
    },
    isQuote: function isQuote(ctx, value) {
      return (is.Object(value) || Array.isArray(value)) && value === ctx.rule.value;
    },
    refreshUpdate: function refreshUpdate(ctx, val) {
      var _this4 = this;

      var fn = ctx.rule.update;

      if (is.Function(fn)) {
        var state = invoke(function () {
          return fn(val, ctx.origin, _this4.api);
        });
        if (state === undefined) return;
        ctx.rule.hidden = state === true;
      }
    },
    valueChange: function valueChange(ctx, val) {
      this.refreshRule(ctx, val);
      this.bus.$emit('change-' + ctx.field, val);
    },
    refreshRule: function refreshRule(ctx, val) {
      if (this.refreshControl(ctx)) {
        this.$render.clearCacheAll();
        this.loadRule();
        this.refresh();
      }

      this.refreshUpdate(ctx, val);
    },
    appendLink: function appendLink(ctx) {
      var _this5 = this;

      var link = ctx.rule.link;
      is.trueArray(link) && link.forEach(function (field) {
        var fn = function fn() {
          return _this5.refreshRule(ctx, ctx.rule.value);
        };

        _this5.bus.$on('change-' + field, fn);

        ctx.linkOn.push(function () {
          return _this5.bus.$off('change-' + field, fn);
        });
      });
    },
    fields: function fields() {
      return Object.keys(this.formData);
    }
  });
}

function toEmpty(obj) {
  Object.keys(obj).forEach(function (k) {
    return delete obj[k];
  });
}

function useHelper(rules) {
  if (!Array.isArray(rules) || rules.findField) return;
  Object.defineProperties(rules, {
    findField: enumerable(findField),
    findName: enumerable(findName),
    setValue: enumerable(setValue)
  });
}

function find(field, name, origin) {
  if (!this.length) return;
  var children = [];

  for (var i = 0; i < this.length; i++) {
    if (!is.Object(this[i])) continue;
    var rule = getRule(this[i]);
    if (rule[name] === field) return origin ? rule : this[i];
    if (is.trueArray(rule.children)) children = children.concat(rule.children);
    is.trueArray(rule.control) && rule.control.forEach(function (r) {
      children = children.concat(r.rule);
    });
  }

  return find.call(children, field, name, origin);
}

function findField(field) {
  return find.call(this, field, 'field');
}

function findName(field) {
  return find.call(this, field, 'name');
}

function setValue(formData) {
  console.log(`1209-381209`, 1209123123381209)
  var _this = this;

  Object.keys(formData).forEach(function (field) {
    var rule = find.call(_this, field, 'field', true);
    if (rule) rule.value = formData[field];
  });
}

var BaseParser = {
  init: function init(ctx) {},
  toFormValue: function toFormValue(value, ctx) {
    return value;
  },
  toValue: function toValue(formValue, ctx) {
    return formValue;
  },
  mounted: function mounted(ctx) {},
  render: function render(children, ctx) {
    return ctx.$render.defaultRender(ctx, children);
  },
  mergeProp: function mergeProp(ctx) {}
};

function useContext(Handler) {
  extend(Handler.prototype, {
    getCtx: function getCtx(id) {
      return this.fieldCtx[id] || this.nameCtx[id] || this.ctxs[id];
    },
    setCtx: function setCtx(ctx) {
      var id = ctx.id,
          field = ctx.field,
          name = ctx.name,
          rule = ctx.rule;
      this.ctxs[id] = ctx;
      if (name) $set(this.nameCtx, name, ctx);
      if (!ctx.input) return;
      this.fieldCtx[field] = ctx;
      this.setFormData(ctx, ctx.parser.toFormValue(rule.value, ctx));

      if (this.isMounted && !this.reloading) {
        this.vm.$emit('change', ctx.field, rule.value, ctx.origin, this.api);
      }
    },
    getParser: function getParser(ctx) {
      var list = this.fc.parsers;
      return list[ctx.originType] || list[toCase(ctx.type)] || list[ctx.trueType] || BaseParser;
    },
    bindParser: function bindParser(ctx) {
      ctx.setParser(this.getParser(ctx));
    },
    getType: function getType(alias) {
      var map = this.fc.CreateNode.aliasMap;
      var type = map[alias] || map[toCase(alias)] || alias;
      return toCase(type);
    },
    noWatch: function noWatch(fn) {
      if (!this.noWatchFn) {
        this.noWatchFn = fn;
      }

      invoke(fn);

      if (this.noWatchFn === fn) {
        this.noWatchFn = null;
      }
    },
    watchCtx: function watchCtx(ctx) {
      var _this = this;

      var vm = this.vm;
      var none = ['field', 'value', 'vm', 'template', 'name', 'config', 'control', 'inject', 'sync', 'payload', 'optionsTo'];
      Object.keys(ctx.rule).filter(function (k) {
        return none.indexOf(k) === -1;
      }).forEach(function (key) {
        var flag = key === 'children';
        ctx.watch.push(vm.$watch(function () {
          return ctx.rule[key];
        }, function (n, o) {
          if (_this.loading || _this.noWatchFn || _this.reloading) return;
          _this.watching = true; // if (key === 'hidden')
          //     ctx.updateKey(true);
          // else

          if (key === 'link') {
            ctx.link();
            return;
          } else if (['props', 'on', 'nativeOn'].indexOf(key) > -1) {
            _this.parseInjectEvent(ctx.rule, n || {});

            if (key === 'props' && ctx.input) {
              _this.setFormData(ctx, ctx.parser.toFormValue(ctx.rule.value, ctx));
            }
          } else if (['emit', 'nativeEmit'].indexOf(key) > -1) _this.parseEmit(ctx, key === 'emit');else if (key === 'type') {
            ctx.updateType();

            _this.bindParser(ctx);
          } else if (key === 'children') {
            var _flag = is.trueArray(n);

            _this.deferSyncValue(function () {
              if (n !== o) {
                _this.rmSub(o);

                _this.$render.initOrgChildren();
              }

              _flag && _this.loadChildren(n, ctx);
            });
          }

          _this.$render.clearCache(ctx);

          _this.watching = false;
        }, {
          deep: !flag,
          sync: flag
        }));
      });
      this.watchEffect(ctx);
    },
    rmSub: function rmSub(sub) {
      var _this2 = this;

      is.trueArray(sub) && sub.forEach(function (r) {
        r && r.__fc__ && _this2.rmCtx(r.__fc__);
      });
    },
    rmCtx: function rmCtx(ctx) {
      var _this3 = this;

      if (ctx.deleted) return;
      var id = ctx.id,
          field = ctx.field,
          name = ctx.name;

      if (ctx.input) {
        Object.defineProperty(ctx.rule, 'value', {
          value: ctx.rule.value,
          writable: true
        });
      }

      $del(this.ctxs, id);
      $del(this.$render.renderList, id);
      $del(this.$render.orgChildren, id);
      $del(ctx, 'cacheValue');
      var f = this.fieldCtx[field];

      if (field && (!f || f === ctx)) {
        $del(this.formData, field);
        $del(this.form, field);
        $del(this.fieldCtx, field);
        $del(this.subForm, field);
        this.vm.$nextTick(function () {
          return _this3.vm.$emit('removeField', field, ctx.rule, _this3.api);
        });
      }

      if (name && this.nameCtx[name] === ctx) {
        $del(this.nameCtx, name);
      }

      if (!this.reloading) {
        this.deferSyncValue(function () {
          if (is.trueArray(ctx.rule.children)) {
            ctx.rule.children.forEach(function (h) {
              return h.__fc__ && _this3.rmCtx(h.__fc__);
            });
          }

          _this3.syncValue();
        });

        if (ctx.root === this.rules) {
          this.vm._renderRule();
        }
      }

      var index = this.sort.indexOf(id);

      if (index > -1) {
        this.sort.splice(index, 1);
      }

      this.$render.clearCache(ctx);
      ctx["delete"]();
      this.effect(ctx, 'deleted');
      this.vm.$nextTick(function () {
        return _this3.vm.$emit('removeRule', ctx.rule, _this3.api);
      });
      return ctx;
    }
  });
}

function useLifecycle(Handler) {
  extend(Handler.prototype, {
    mounted: function mounted() {
      var _this = this;

      var _mounted = function _mounted() {
        _this.isMounted = true;

        _this.lifecycle('mounted');
      };

      if (this.pageEnd) {
        _mounted();
      } else {
        this.bus.$once('page-end', _mounted);
      }
    },
    lifecycle: function lifecycle(name) {
      var _this2 = this;

      var fn = this.options[name];
      is.Function(fn) && invoke(function () {
        return fn(_this2.api);
      });
      this.vm.$emit(name, this.api);
    }
  });
}

function useEffect(Handler) {
  extend(Handler.prototype, {
    useProvider: function useProvider() {
      var _this = this;

      var ps = this.fc.providers;
      Object.keys(ps).forEach(function (k) {
        var prop = ps[k];
        prop._c = getComponent(prop);

        _this.onEffect(prop);

        _this.providers[k] = prop;
      });
    },
    onEffect: function onEffect(provider) {
      var _this2 = this;

      var used = [];
      (provider._c || ['*']).forEach(function (name) {
        var type = name === '*' ? '*' : _this2.getType(name);
        if (used.indexOf(type) > -1) return;
        used.push(type);

        _this2.bus.$on("p:".concat(provider.name, ":").concat(type, ":").concat(provider.input ? 1 : 0), function (event, args) {
          provider[event] && provider[event].apply(provider, _toConsumableArray(args));
        });
      });
      provider._used = used;
    },
    watchEffect: function watchEffect(ctx) {
      var _this3 = this;

      var vm = this.vm;
      Object.keys(ctx.rule.effect || {}).forEach(function (k) {
        ctx.watch.push(vm.$watch(function () {
          return ctx.rule.effect[k];
        }, function (n) {
          _this3.effect(ctx, 'watch', _defineProperty({}, k, n));
        }, {
          deep: true
        }));
      });
    },
    effect: function effect(ctx, event, custom) {
      this.emitEffect({
        rule: ctx.rule,
        input: ctx.input,
        type: ctx.trueType,
        ctx: ctx,
        custom: custom
      }, event);
    },
    ruleEffect: function ruleEffect(rule, event) {
      this.emitEffect({
        rule: rule,
        input: !!rule.field,
        type: this.getType(rule.type)
      }, event);
    },
    getEffect: function getEffect(rule, name) {
      if (hasProperty(rule, 'effect') && hasProperty(rule.effect, name)) return rule.effect[name];else return undefined;
    },
    emitEffect: function emitEffect(_ref, event) {
      var _this4 = this;

      var ctx = _ref.ctx,
          rule = _ref.rule,
          input = _ref.input,
          type = _ref.type,
          custom = _ref.custom;
      if (!type || type === 'fcFragment') return;
      var effect = custom ? custom : rule.effect || {};
      Object.keys(effect).forEach(function (attr) {
        var p = _this4.providers[attr];
        if (!p || p.input && !input) return;

        var _type;

        if (!p._c) {
          _type = '*';
        } else if (p._used.indexOf(type) > -1) {
          _type = type;
        } else {
          return;
        }

        var data = {
          value: effect[attr],
          getValue: function getValue() {
            return _this4.getEffect(rule, attr);
          }
        };

        if (ctx) {
          data.getProp = function () {
            return ctx.effectData(attr);
          };

          data.clearProp = function () {
            return ctx.clearEffectData(attr);
          };

          data.mergeProp = function (prop) {
            return mergeProps([prop], data.getProp());
          };
        }

        _this4.bus.$emit("p:".concat(attr, ":").concat(_type, ":").concat(p.input ? 1 : 0), event, [data, rule, _this4.api]);
      });
    }
  });
}

function unique(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  });
}

function getComponent(p) {
  var c = p.components;
  if (Array.isArray(c)) return unique(c.filter(function (v) {
    return v !== '*';
  }));else if (is.String(c)) return [c];else return false;
}

function Handler(fc) {
  var _this = this;

  extend(this, {
    fc: fc,
    vm: fc.vm,
    watching: false,
    loading: false,
    reloading: false,
    noWatchFn: null,
    deferSyncFn: null,
    isMounted: false,
    formData: {},
    subForm: {},
    form: {},
    appendData: {},
    providers: {},
    cycleLoad: null,
    loadedId: 1,
    nextTick: null,
    changeStatus: false,
    pageEnd: true,
    nextReload: function nextReload() {
      _this.lifecycle('reload');
    }
  });
  funcProxy(this, {
    options: function options() {
      return fc.options;
    },
    bus: function bus() {
      return fc.bus;
    }
  });
  this.initData(fc.rules);
  this.$manager = new fc.manager(this);
  this.$render = new Render(this);
  this.api = fc.extendApi(Api(this), this);
}
extend(Handler.prototype, {
  initData: function initData(rules) {
    extend(this, {
      fieldCtx: {},
      ctxs: {},
      nameCtx: {},
      sort: [],
      rules: rules,
      repeatRule: []
    });
    useHelper(rules);
  },
  init: function init() {
    this.useProvider();
    this.usePage();
    this.loadRule();

    this.$manager.__init();

    this.vm.$set(this.vm, 'formData', this.formData);
  }
});
useInject(Handler);
usePage(Handler);
useRender$1(Handler);
useLoader(Handler);
useInput(Handler);
useContext(Handler);
useLifecycle(Handler);
useEffect(Handler);

// https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js
function getError(action, option, xhr) {
  var msg = "fail to ".concat(action, " ").concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.url = action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;

  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function fetch(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr));
  };

  xhr.open(option.method || 'get', action, true);
  var formData;

  if (option.data) {
    if ((option.dataType || '').toLowerCase() !== 'json') {
      formData = new FormData();
      Object.keys(option.data).map(function (key) {
        formData.append(key, option.data[key]);
      });
    } else {
      formData = JSON.stringify(option.data);
      xhr.setRequestHeader('content-type', 'application/json');
    }
  }

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};
  Object.keys(headers).forEach(function (item) {
    if (headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });
  xhr.send(formData);
}

var NAME$1 = 'fcFragment';
var fragment = {
  name: NAME$1,
  functional: true,
  render: function render(h, ctx) {
    return ctx.children;
  }
};

function parseProp(prop) {
  if (is.String(prop)) return {
    domProps: {
      innerHTML: prop
    }
  };
  return prop;
}

function CreateNodeFactory() {
  var aliasMap = {};

  function CreateNode(vm) {
    vm && this.setVm(vm);
  }

  extend(CreateNode.prototype, {
    setVm: function setVm(vm) {
      this.vm = vm;
      this.$h = vm.$createElement;
    },
    make: function make(tag, data, children) {
      if (Vue.config.isReservedTag(tag) && data.nativeOn) delete data.nativeOn;
      var Node = this.$h(tag, parseProp(data), children || []);
      Node.context = this.vm;
      return Node;
    },
    aliasMap: aliasMap
  });
  extend(CreateNode, {
    aliasMap: aliasMap,
    alias: function alias(_alias, name) {
      aliasMap[_alias] = name;
    },
    use: function use(nodes) {
      Object.keys(nodes).forEach(function (k) {
        var line = toLine(k);
        var lower = toString(k).toLocaleLowerCase();
        var v = nodes[k];
        [k, line, lower].forEach(function (n) {
          CreateNode.alias(k, v);

          CreateNode.prototype[n] = function (data, children) {
            return this.make(v, data, children);
          };
        });
      });
    }
  });
  return CreateNode;
}

function createManager(proto) {
  var CustomManager = /*#__PURE__*/function (_Manager) {
    _inherits(CustomManager, _Manager);

    var _super = _createSuper(CustomManager);

    function CustomManager() {
      _classCallCheck(this, CustomManager);

      return _super.apply(this, arguments);
    }

    return CustomManager;
  }(Manager);

  Object.assign(CustomManager.prototype, proto);
  return CustomManager;
}
function Manager(handler) {
  extend(this, {
    $handle: handler,
    vm: handler.vm,
    options: {},
    ref: 'fcForm',
    mergeOptionsRule: {
      normal: ['form', 'row', 'info', 'submitBtn', 'resetBtn']
    }
  });
  this.updateKey();
  this.init();
}
extend(Manager.prototype, {
  __init: function __init() {
    var _this = this;

    this.$render = this.$handle.$render;

    this.$r = function () {
      var _this$$render;

      return (_this$$render = _this.$render).renderRule.apply(_this$$render, arguments);
    };
  },
  updateKey: function updateKey() {
    this.key = uniqueId();
  },
  //TODO interface
  init: function init() {},
  update: function update() {},
  beforeRender: function beforeRender() {},
  form: function form() {
    return this.vm.$refs[this.ref];
  },
  mergeOptions: function mergeOptions(args, opt) {
    var _this2 = this;

    return mergeProps(args.map(function (v) {
      return _this2.tidyOptions(v);
    }), opt, this.mergeOptionsRule);
  },
  updateOptions: function updateOptions(options) {
    this.options = this.mergeOptions([options], this.getDefaultOptions());
    this.update();
  },
  tidyOptions: function tidyOptions(options) {
    return options;
  },
  tidyRule: function tidyRule(ctx) {},
  mergeProp: function mergeProp(ctx) {},
  getDefaultOptions: function getDefaultOptions() {
    return {};
  },
  render: function render(children) {}
});

var $fetch = {
  name: 'fetch',
  loaded: function loaded() {
    run.apply(void 0, arguments);
  },
  watch: function watch(inject, rule, api) {
    if (!run(inject, rule, api)) {
      inject.clearProp();
      api.sync(rule);
    }
  }
};

function parseOpt(option) {
  if (is.String(option)) {
    option = {
      action: option,
      to: 'options'
    };
  }

  return option;
}

function run(inject, rule, api) {
  var option = inject.value;
  option = parseOpt(option);

  if (!option || !option.action) {
    return false;
  }

  if (!option.to) {
    option.to = 'options';
  }

  var _onError = option.onError;

  var check = function check() {
    if (!inject.getValue()) {
      inject.clearProp();
      api.sync(rule);
      return true;
    }
  };

  var set = function set(val) {
    if (val === undefined) {
      inject.clearProp();
      api.sync(rule);
    } else {
      deepSet(inject.getProp(), option.to, val);
    }
  };

  invoke(function () {
    return fetch(_objectSpread2(_objectSpread2({}, option), {}, {
      onSuccess: function onSuccess(body) {
        if (check()) return;
        set((option.parse || function (v) {
          return v.data;
        })(body, rule, api));
        api.sync(rule);
      },
      onError: function onError(e) {
        set(undefined);
        if (check()) return;

        (_onError || function (e) {
          return err(e.message || 'fetch fail ' + option.action);
        })(e, rule, api);
      }
    }));
  });
  return true;
}

var _vue = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;

function _parseProp(name, id) {
  var prop;

  if (arguments.length === 2) {
    prop = arguments[1];
    id = prop[name];
  } else {
    prop = arguments[2];
  }

  return {
    id: id,
    prop: prop
  };
}

function nameProp() {
  return _parseProp.apply(void 0, ['name'].concat(Array.prototype.slice.call(arguments)));
}

function _getEl(options) {
  if (!options || !options.el) return window.document.body;
  return is.Element(options.el) ? options.el : document.querySelector(options.el);
}

function mountForm(rules, option) {
  var $vm = new _vue({
    data: function data() {
      //todo 外部无法修改
      return {
        rule: rules,
        option: option || {}
      };
    },
    render: function render(h) {
      return h('FormCreate', {
        ref: 'fc',
        props: this.$data
      });
    }
  });
  $vm.$mount();
  return $vm;
}

function exportAttrs(attrs) {
  var key = attrs.key || [];
  var array = attrs.array || [];
  var normal = attrs.normal || [];
  keyAttrs.push.apply(keyAttrs, _toConsumableArray(key));
  arrayAttrs.push.apply(arrayAttrs, _toConsumableArray(array));
  normalAttrs.push.apply(normalAttrs, _toConsumableArray(normal));
  appendProto([].concat(_toConsumableArray(key), _toConsumableArray(array), _toConsumableArray(normal)));
} //todo 表单嵌套


function FormCreateFactory(config) {
  var components = _defineProperty({}, fragment.name, fragment);

  var parsers = {};
  var directives = {};
  var providers = {
    fetch: $fetch
  };
  var maker = makerFactory();
  var globalConfig = {
    global: {}
  };
  var data = {};
  var CreateNode = CreateNodeFactory();
  exportAttrs(config.attrs || {});

  function directive() {
    var data = nameProp.apply(void 0, arguments);
    if (data.id && data.prop) directives[data.id] = data.prop;
  }

  function register() {
    var data = nameProp.apply(void 0, arguments);
    if (data.id && data.prop) providers[data.id] = _objectSpread2(_objectSpread2({}, data.prop), {}, {
      name: data.id
    });
  }

  function componentAlias(alias) {
    CreateNode.use(alias);
  }

  function parser() {
    var data = nameProp.apply(void 0, arguments);
    if (!data.id || !data.prop) return;
    var name = toCase(data.id);
    var parser = data.prop;
    var base = parser.merge === true ? parsers[name] : undefined;
    parsers[name] = _objectSpread2(_objectSpread2({}, base || BaseParser), parser);
    maker[name] = creatorFactory(name);
    parser.maker && extend(maker, parser.maker);
  }

  function component(id, component) {
    var name;

    if (is.String(id)) {
      name = toCase(id);

      if (['form-create', 'formcreate'].indexOf(name) > -1) {
        return $form();
      } else if (component === undefined) {
        return components[name];
      }
    } else {
      name = toCase(id.name);
      component = id;
    }

    if (!name || !component) return;
    components[name] = component;
    if (component.formCreateParser) parser(name, component.formCreateParser);
  }

  function $form() {
    return _vue.extend($FormCreate(FormCreate));
  } //todo 检查回调函数作用域


  function use(fn, opt) {
    if (is.Function(fn.install)) fn.install(create, opt);else if (is.Function(fn)) fn(create, opt);
    return this;
  }

  function create(rules, _opt, parent) {
    var $vm = mountForm(rules, _opt || {});
    var _this = $vm.$refs.fc.formCreate;
    _this.$parent = parent;

    _getEl(_this.options).appendChild($vm.$el);

    return _this.api();
  }

  function FormCreate(vm, rules, options) {
    extend(this, {
      vm: vm,
      manager: createManager(config.manager),
      parsers: parsers,
      providers: providers,
      rules: Array.isArray(rules) ? rules : [],
      prop: {
        components: components,
        directives: directives
      },
      CreateNode: CreateNode,
      bus: new _vue(),
      unwatch: null,
      extendApi: config.extendApi || function (api) {
        return api;
      }
    });
    this.init();
    this.initOptions(options || {});
  }

  extend(FormCreate.prototype, {
    init: function init() {
      var _this2 = this;

      var vm = this.vm;
      var h = new Handler(this);
      this.$handle = h;
      vm.$f = h.api;
      vm.$emit('input', h.api);
      vm.$on('hook:created', function () {
        if (_this2.isSub()) {
          _this2.unwatch = vm.$watch(function () {
            return vm.$pfc.option;
          }, function () {
            _this2.initOptions(_this2.options);

            vm.$f.refresh();
          }, {
            deep: true
          });

          _this2.initOptions(_this2.options);
        }

        _this2.created();
      });
      vm.$on('hook:mounted', function () {
        _this2.mounted();
      });
      vm.$on('hook:beforeDestroy', function () {
        vm.destroyed = true;
        _this2.unwatch && _this2.unwatch();
        h.reloadRule([]);
      });
      vm.$on('hook:updated', function () {
        h.bindNextTick(function () {
          return _this2.bus.$emit('next-tick', h.api);
        });
      });
    },
    isSub: function isSub() {
      return this.vm.$pfc && this.vm.extendOption;
    },
    initOptions: function initOptions(options) {
      this.options = _objectSpread2({
        formData: {},
        submitBtn: {},
        resetBtn: {}
      }, deepCopy(globalConfig));

      if (this.isSub()) {
        this.mergeOptions(this.options, this.vm.$pfc.$f.config || {}, true);
      }

      this.updateOptions(options);
    },
    mergeOptions: function mergeOptions(target, opt, parent) {
      opt = deepCopy(opt);
      parent && ['page', 'onSubmit', 'mounted', 'reload', 'formData', 'el'].forEach(function (n) {
        delete opt[n];
      });

      if (opt.global) {
        target.global = mergeGlobal(target.global, opt.global);
        delete opt.global;
      }

      this.$handle.$manager.mergeOptions([opt], target);
      return target;
    },
    updateOptions: function updateOptions(options) {
      this.mergeOptions(this.options, options);
      this.$handle.$manager.updateOptions(this.options);
    },
    created: function created() {
      this.$handle.init();
    },
    api: function api() {
      return this.$handle.api;
    },
    render: function render() {
      return this.$handle.render();
    },
    mounted: function mounted() {
      this.$handle.mounted();
    }
  });

  function useAttr(formCreate) {
    extend(formCreate, {
      version: config.version,
      ui: config.ui,
      data: data,
      maker: maker,
      component: component,
      directive: directive,
      register: register,
      parser: parser,
      use: use,
      componentAlias: componentAlias,
      copyRule: copyRule,
      copyRules: copyRules,
      fetch: fetch,
      $form: $form,
      parseJson: parseJson,
      toJson: toJson,
      init: function init(rules) {
        var _opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var $vm = mountForm(rules, _opt),
            _this = $vm.$refs.fc.formCreate;
        return {
          mount: function mount($el) {
            if ($el && is.Element($el)) _this.options.el = $el;

            _getEl(_this.options).appendChild($vm.$el);

            return _this.api();
          },
          remove: function remove() {
            $vm.$el.parentNode && $vm.$el.parentNode.removeChild($vm.$el);
          },
          destroy: function destroy() {
            this.remove();
            $vm.$destroy();
          },
          $f: _this.api()
        };
      }
    });
  }

  function useStatic(formCreate) {
    extend(formCreate, {
      create: create,
      install: function install(Vue, options) {
        globalConfig = _objectSpread2(_objectSpread2({}, globalConfig), options || {});
        if (Vue._installedFormCreate === true) return;
        Vue._installedFormCreate = true;
        _vue = Vue;

        var $formCreate = function $formCreate(rules) {
          var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return create(rules, opt, this);
        };

        useAttr($formCreate);
        Vue.prototype.$formCreate = $formCreate;
        Vue.component('FormCreate', $form());
      }
    });
  }

  useAttr(create);
  useStatic(create);
  CreateNode.use({
    fragment: 'fcFragment'
  });
  if (config.install) create.use(config);
  return create;
}

export default FormCreateFactory;
export { Creator, Manager, copyRule, copyRules, creatorFactory, mergeRule, parseJson, toJson };
