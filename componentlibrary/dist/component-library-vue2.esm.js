import Vue from 'vue';

var script = Vue.extend({
  name: 'ComponentLibraryVue2Sample',

  // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message?.action} ${message.amount ?? ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "component-library-vue2-sample"
  }, [_c('p', [_vm._v("The counter was " + _vm._s(_vm.changedBy) + " to "), _c('b', [_vm._v(_vm._s(_vm.counter))]), _vm._v(".")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("\n    Click +1\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("\n    Click -1\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("\n    Click +5\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("\n    Click -5\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("\n    Reset\n  ")])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-43ed981b_0", {
    source: ".component-library-vue2-sample[data-v-43ed981b]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.component-library-vue2-sample p[data-v-43ed981b]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-43ed981b";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'inputResponse',
  props: {
    error: {
      type: String,
      default: null
    },
    warning: {
      type: String,
      default: null
    },
    info: {
      type: String,
      default: null
    },
    charLimitReached: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: null
    }
  } //props

}; //default

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "inputResponse"
  }, [_vm.error ? _c('div', {
    staticClass: "errorMessage"
  }, [_c('span', {
    staticClass: "fas fa-exclamation-circle"
  }), _vm._v(" "), _c('b', [_vm._v(_vm._s(_vm.error))])]) : _vm.warning ? _c('div', {
    staticClass: "warningMessage"
  }, [_c('span', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v(" "), _c('b', [_vm._v(_vm._s(_vm.warning))])]) : _vm.info ? _c('div', {
    staticClass: "infoMessage"
  }, [_c('span', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" "), _c('b', [_vm._v(_vm._s(_vm.info))])]) : _vm.charLimitReached ? _c('div', {
    staticClass: "infoMessage"
  }, [_c('span', {
    staticClass: "fas fa-info-circle"
  }), _vm._v("\n    Character limit of " + _vm._s(_vm.maxlength) + " reached\n  ")]) : _vm._e()]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-22cb80ed_0", {
    source: ".inputResponse[data-v-22cb80ed]{display:flex;flex-direction:row;flex-wrap:wrap}.inputResponse>div[data-v-22cb80ed]{margin:4px 0;font-size:12px;font-family:monospace;font-weight:700}.inputResponse>div.infoMessage[data-v-22cb80ed]{color:#31708f}.inputResponse>div.warningMessage[data-v-22cb80ed]{color:#8a6d3b}.inputResponse>div.errorMessage[data-v-22cb80ed]{color:#a94442}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-22cb80ed";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

const validator = {
  data() {
    //stores errors thrown by the input fields
    const d_danger = ""; //stores errors thrown by the input fields

    const d_warning = ""; //stores textbox values

    const d_value = null; //flag used to trigger validator()

    const d_needsValidation = true;
    return {
      d_danger,
      d_warning,
      d_value,
      d_needsValidation
    };
  },

  //data
  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function () {
      const object = {
        value: this.d_value,
        maxlength: this.maxLength,
        minlength: this.minLength,
        pattern: this.pattern
      };
      const response = this.validator(object);
      this.d_danger = response.error;
      this.d_warning = response.warning;
    },
    //validate
    validator: function (object) {
      //if value for val(temp) exists check for warning triggers
      if (object.value) {
        //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
        if (object.pattern && this.followsPattern(object.pattern, object.value)) {
          this.d_warning = "Wrong format: Please follow the pattern.";
        } else if (object.minlength) {
          this.d_warning = this.isTooShort(object.minlength, object.value);
        } else if (object.maxlength) {
          this.d_warning = this.isTooLong(object.maxlength, object.value);
        } else {
          //emit/send new values to parent component v-model attribute
          this.$emit("value", object.value);
        }
      } //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
          this.d_danger = this.isRequired();
        }

      return {
        warning: this.d_warning,
        error: this.d_danger
      };
    },
    //validator
    //value ebsent
    isRequired: function () {
      if (this.required) {
        return "Required field.";
      }

      return "";
    },
    //isRequired
    //value present
    isTooShort: function (minlength, value) {
      if (minlength > value.length) {
        return "Invalid Input: Allowed minlength for input is " + minlength + " characters.";
      }

      return "";
    },
    //isTooShort
    isTooLong: function (maxlength, value) {
      if (maxlength < value.length) {
        return "Invalid Input: Allowed maxlength for input exceeded by " + (maxlength.length - value.length) + " characters.";
      }

      return "";
    },
    //isTooLong
    //pattern matching
    followsPattern: function (pattern, value) {
      //if not regexp, convert to regexp
      if (!pattern.test(value)) {
        return "Wrong email format: Please follow the pattern " + pattern;
      }
    } //followsPattern

  },

  beforeMount() {
    const alert = this.alert; //load alerts sent via component

    if (alert) {
      if (alert["error"]) {
        this.d_danger = alert["error"];
      } else if (alert["warning"]) {
        this.d_warning = alert["warning"];
      } else if (alert["success"]) {
        this.d_success = alert["success"];
      } else if (alert["info"]) {
        this.d_info = alert["info"];
      }
    } //store values passed as props into d_value for future manipulation


    if (this.value) {
      this.d_value = this.value;

      if (this.d_needsValidation) {
        this.validate();
      }
    }
  },

  //beforeMount
  watch: {
    //send warning messages back to parent component
    d_warning: function (newValue) {
      this.$emit("notify", "warning", newValue);
    },
    //send error messages back to parent component
    d_danger: function (newValue) {
      this.$emit("notify", "error", newValue);
    }
  } //methods

};

const alerts = {
  data() {
    const d_warning = "";
    const d_danger = "";
    return {
      d_warning,
      d_danger
    };
  },

  //data
  computed: {
    alertObject: function () {
      return {
        error: this.d_danger,
        warning: this.d_warning
      };
    }
  },
  //computed
  methods: {
    //use by form elements sent via slot 
    alerts: function (type, message) {
      // console.log(message);
      if (type == "warning") {
        this.d_warning = message;
      } else if (type == "error") {
        this.d_danger = message;
      } else {
        alert("error in input alert module");
      }
    } //alerts

  } //methifs
  // watch: {
  //   //send warning messages back to parent component
  //   warning: function(newValue) {
  //     this.$emit("notify", "warning", newValue);
  //   },
  //   //send error messages back to parent component
  //   danger: function(newValue) {
  //     this.$emit("notify", "error", newValue);
  //   }
  // }, //watch

};

//
var script$2 = {
  name: "TextInput",
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  mixins: [validator, alerts],
  //mixins
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets tag attribute for the input field (required field in case of forms)
    tag: {
      required: false,
      type: String,
      default: "textInput"
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },
    //sets the format/pattern for acceptable values for the input field
    //^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$
    //https://learning.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    // phone number with extension
    pattern: {
      required: false,
      type: [RegExp, String],
      default: null
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "Enter text here..."
    },
    //sets the minlength attribute for the input field
    minlength: {
      required: false,
      type: Number,
      default: 0
    },
    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 50
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
  } //props

}; //default

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "textInput",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "type": "text",
      "name": _vm.tag,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "minlength": _vm.minlength,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "required": _vm.required
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }, _vm.validate]
    }
  }) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false,
      "char-limit-reached": _vm.d_value ? _vm.maxlength - _vm.d_value.length <= 0 : false,
      "maxlength": _vm.maxlength
    }
  })], 1);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-9b1df5dc_0", {
    source: ".textInput[data-v-9b1df5dc]{display:flex;flex-direction:column;flex-wrap:nowrap}.textInput[data-v-9b1df5dc]:focus,.textInput[data-v-9b1df5dc]:focus-within{border-color:var(--primaryColor)}.textInput:focus-within>span[data-v-9b1df5dc],.textInput:focus>span[data-v-9b1df5dc]{color:var(--primaryColor)}.textInput.inline[data-v-9b1df5dc]{flex-direction:row;flex-wrap:wrap}.textInput.inline>label[data-v-9b1df5dc]{margin-right:16px}.textInput.inline>.inputResponse[data-v-9b1df5dc]{margin-left:16px}.textInput>label[data-v-9b1df5dc]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.textInput>label>abbr[data-v-9b1df5dc]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.textInput>label>span[data-v-9b1df5dc]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.textInput>label>span>abbr[data-v-9b1df5dc]{color:inherit}.textInput>label>input[type=checkbox][data-v-9b1df5dc],.textInput>label>input[type=radio][data-v-9b1df5dc]{transform:scale(1.5);margin-right:8px}.textInput>label>.vueButton[data-v-9b1df5dc]{margin-left:auto}.textInput>label.oneLiner[data-v-9b1df5dc]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.textInput>label.oneLiner>input[type=checkbox][data-v-9b1df5dc],.textInput>label.oneLiner>input[type=radio][data-v-9b1df5dc]{display:none}.textInput>label.oneLiner>input[type=checkbox]+span[data-v-9b1df5dc],.textInput>label.oneLiner>input[type=radio]+span[data-v-9b1df5dc]{margin:0 8px;font-size:12px}.textInput>label.oneLiner>input[type=checkbox]+span.fas[data-v-9b1df5dc],.textInput>label.oneLiner>input[type=radio]+span.fas[data-v-9b1df5dc]{color:var(--primaryColor)}.textInput>label.oneLiner.errorLabel[data-v-9b1df5dc]{color:#a94442}.textInput>div[data-v-9b1df5dc]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.textInput>div.inputResponse[data-v-9b1df5dc]{width:100%;border:none}.textInput>div.warningContainer[data-v-9b1df5dc]{border-color:#8a6d3b;background-color:#fcf8e3}.textInput>div.warningContainer[data-v-9b1df5dc]:focus,.textInput>div.warningContainer[data-v-9b1df5dc]:focus-within{border-color:var(--primaryColor)}.textInput>div.warningContainer:focus-within>span[data-v-9b1df5dc],.textInput>div.warningContainer:focus>span[data-v-9b1df5dc]{color:#8a6d3b}.textInput>div.warningContainer>span[data-v-9b1df5dc]{color:#8a6d3b!important}.textInput>div.errorContainer[data-v-9b1df5dc]{border-color:#a94442;background-color:#f2dede}.textInput>div.errorContainer[data-v-9b1df5dc]:focus,.textInput>div.errorContainer[data-v-9b1df5dc]:focus-within{border-color:var(--primaryColor)}.textInput>div.errorContainer:focus-within>span[data-v-9b1df5dc],.textInput>div.errorContainer:focus>span[data-v-9b1df5dc]{color:#a94442}.textInput>div.errorContainer>span[data-v-9b1df5dc]{color:#a94442!important}.textInput>div>datalist[data-v-9b1df5dc],.textInput>div>input[data-v-9b1df5dc],.textInput>div>select[data-v-9b1df5dc],.textInput>div>textarea[data-v-9b1df5dc]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.textInput>div>datalist[data-v-9b1df5dc]:-webkit-autofill,.textInput>div>datalist[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div>datalist[data-v-9b1df5dc]:-webkit-autofill:hover,.textInput>div>input[data-v-9b1df5dc]:-webkit-autofill,.textInput>div>input[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div>input[data-v-9b1df5dc]:-webkit-autofill:hover,.textInput>div>select[data-v-9b1df5dc]:-webkit-autofill,.textInput>div>select[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div>select[data-v-9b1df5dc]:-webkit-autofill:hover,.textInput>div>textarea[data-v-9b1df5dc]:-webkit-autofill,.textInput>div>textarea[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div>textarea[data-v-9b1df5dc]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.textInput>div>datalist option[data-v-9b1df5dc]:first,.textInput>div>input option[data-v-9b1df5dc]:first,.textInput>div>select option[data-v-9b1df5dc]:first,.textInput>div>textarea option[data-v-9b1df5dc]:first{color:darken(@backgroundColor,25%)}.textInput>div>datalist+span[data-v-9b1df5dc],.textInput>div>input+span[data-v-9b1df5dc],.textInput>div>select+span[data-v-9b1df5dc],.textInput>div>textarea+span[data-v-9b1df5dc]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.textInput>div>datalist:focus~.conditions[data-v-9b1df5dc],.textInput>div>input:focus~.conditions[data-v-9b1df5dc],.textInput>div>select:focus~.conditions[data-v-9b1df5dc],.textInput>div>textarea:focus~.conditions[data-v-9b1df5dc]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.textInput>div>datalist:focus~.conditions>div[data-v-9b1df5dc],.textInput>div>input:focus~.conditions>div[data-v-9b1df5dc],.textInput>div>select:focus~.conditions>div[data-v-9b1df5dc],.textInput>div>textarea:focus~.conditions>div[data-v-9b1df5dc]{display:flex;flex-direction:row;padding:8px 16px}.textInput>div>datalist:focus~.conditions>div>span[data-v-9b1df5dc],.textInput>div>input:focus~.conditions>div>span[data-v-9b1df5dc],.textInput>div>select:focus~.conditions>div>span[data-v-9b1df5dc],.textInput>div>textarea:focus~.conditions>div>span[data-v-9b1df5dc]{margin-right:8px}.textInput>div>datalist~.conditions[data-v-9b1df5dc],.textInput>div>input~.conditions[data-v-9b1df5dc],.textInput>div>select~.conditions[data-v-9b1df5dc],.textInput>div>textarea~.conditions[data-v-9b1df5dc]{display:none}.textInput>div.iconPadding>span[data-v-9b1df5dc]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.textInput>div.iconPadding>span+datalist[data-v-9b1df5dc],.textInput>div.iconPadding>span+input[data-v-9b1df5dc],.textInput>div.iconPadding>span+select[data-v-9b1df5dc],.textInput>div.iconPadding>span+textarea[data-v-9b1df5dc]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.textInput>div.iconPadding>span+datalist[data-v-9b1df5dc]:-webkit-autofill,.textInput>div.iconPadding>span+datalist[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div.iconPadding>span+datalist[data-v-9b1df5dc]:-webkit-autofill:hover,.textInput>div.iconPadding>span+input[data-v-9b1df5dc]:-webkit-autofill,.textInput>div.iconPadding>span+input[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div.iconPadding>span+input[data-v-9b1df5dc]:-webkit-autofill:hover,.textInput>div.iconPadding>span+select[data-v-9b1df5dc]:-webkit-autofill,.textInput>div.iconPadding>span+select[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div.iconPadding>span+select[data-v-9b1df5dc]:-webkit-autofill:hover,.textInput>div.iconPadding>span+textarea[data-v-9b1df5dc]:-webkit-autofill,.textInput>div.iconPadding>span+textarea[data-v-9b1df5dc]:-webkit-autofill:focus,.textInput>div.iconPadding>span+textarea[data-v-9b1df5dc]:-webkit-autofill:hover{border-color:none}.textInput>div.iconPadding>span+datalist+span[data-v-9b1df5dc],.textInput>div.iconPadding>span+input+span[data-v-9b1df5dc],.textInput>div.iconPadding>span+select+span[data-v-9b1df5dc],.textInput>div.iconPadding>span+textarea+span[data-v-9b1df5dc]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.textInput>div.iconPadding>span+datalist:focus~.conditions[data-v-9b1df5dc],.textInput>div.iconPadding>span+input:focus~.conditions[data-v-9b1df5dc],.textInput>div.iconPadding>span+select:focus~.conditions[data-v-9b1df5dc],.textInput>div.iconPadding>span+textarea:focus~.conditions[data-v-9b1df5dc]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.textInput>div.iconPadding>span+datalist:focus~.conditions>div[data-v-9b1df5dc],.textInput>div.iconPadding>span+input:focus~.conditions>div[data-v-9b1df5dc],.textInput>div.iconPadding>span+select:focus~.conditions>div[data-v-9b1df5dc],.textInput>div.iconPadding>span+textarea:focus~.conditions>div[data-v-9b1df5dc]{display:flex;flex-direction:row;padding:8px 16px}.textInput>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-9b1df5dc],.textInput>div.iconPadding>span+input:focus~.conditions>div>span[data-v-9b1df5dc],.textInput>div.iconPadding>span+select:focus~.conditions>div>span[data-v-9b1df5dc],.textInput>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-9b1df5dc]{margin-right:8px}.textInput>div.iconPadding>span+datalist~.conditions[data-v-9b1df5dc],.textInput>div.iconPadding>span+input~.conditions[data-v-9b1df5dc],.textInput>div.iconPadding>span+select~.conditions[data-v-9b1df5dc],.textInput>div.iconPadding>span+textarea~.conditions[data-v-9b1df5dc]{display:none}.textInput>div>input[type=file][data-v-9b1df5dc]{padding-left:16px}.textInput>div>select+span[data-v-9b1df5dc]{left:40px}.textInput>div.files[data-v-9b1df5dc]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.textInput>div.files>div[data-v-9b1df5dc]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.textInput>div.files>div>div[data-v-9b1df5dc]{display:flex;flex-direction:row;flex-wrap:nowrap}.textInput>div.files>div>div>span[data-v-9b1df5dc]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.textInput>div.files>div>div>.fileSize[data-v-9b1df5dc]{position:absolute;right:8px;bottom:8px;font-size:12px}.textInput>div.files>div>div>.removeFile[data-v-9b1df5dc]{position:absolute;right:8px;top:8px}.textInput .maskField[data-v-9b1df5dc]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-9b1df5dc;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.textInput .maskField[data-v-9b1df5dc],.textInput .maskField *[data-v-9b1df5dc],.textInput .maskField[data-v-9b1df5dc] ::placeholder,.textInput .maskField div[data-v-9b1df5dc],.textInput .maskField div[data-v-9b1df5dc]::placeholder,.textInput .maskField[data-v-9b1df5dc]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-9b1df5dc{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-9b1df5dc{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-9b1df5dc{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-9b1df5dc{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-9b1df5dc";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

//
var script$3 = {
  name: "PasswordInput",
  //props
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  mixins: [validator, alerts],
  //mixins
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "passwordInput"
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },
    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "Enter passsword here..."
    },
    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 50
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    },
    //if true, the component generates a confirmation password box in order to check the password matches the original box password
    match: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  //props
  data() {
    //stores textbox password values to match with d_value
    const dPasswordMatch = ""; //type defaulted to password.

    const dType = "password"; //type defaulted to password.

    const dTypeMatch = "password";
    return {
      dPasswordMatch,
      dType,
      dTypeMatch
    }; //return
  },

  //components
  methods: {
    //peek into thepassword value
    peek: function (val) {
      if (val === 0) {
        if (this.dTypeMatch === "password") {
          this.dTypeMatch = "text";
        } else {
          this.dTypeMatch = "password";
        }
      } else if (val === 1) {
        if (this.dType === "password") {
          this.dType = "text";
        } else {
          this.dType = "password";
        }
      }
    } //peek

  } //methods

}; //default

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "passwordInput"
  }, [_c('div', {
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n      " + _vm._s(_vm.label) + "\n      "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), _vm.dType === 'checkbox' && !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "autocomplete": _vm.autocomplete,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.d_value) ? _vm._i(_vm.d_value, null) > -1 : _vm.d_value
    },
    on: {
      "input": _vm.validate,
      "change": function ($event) {
        var $$a = _vm.d_value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.d_value = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.d_value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.d_value = $$c;
        }
      }
    }
  }) : _vm.dType === 'radio' && !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "autocomplete": _vm.autocomplete,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.d_value, null)
    },
    on: {
      "input": _vm.validate,
      "change": function ($event) {
        _vm.d_value = null;
      }
    }
  }) : !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "autocomplete": _vm.autocomplete,
      "type": _vm.dType
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }, _vm.validate]
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    class: ['fas', _vm.dType != 'text' ? 'fa-eye' : 'fa-eye-slash'],
    on: {
      "click": function ($event) {
        return _vm.peek(1);
      }
    }
  }), _vm._v(" "), _vm.d_value ? _c('div', {
    staticClass: "conditions"
  }, [_c('div', [_c('span', {
    class: _vm.d_value.match(/(?=.*[A-Z])(?=.*[0-9])/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          Numbers present\n        ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.match(/\S{1,}/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          No Spaces\n        ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.match(/(?=.*[A-Z])/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          Capital Letter\n        ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.match(/(?=.*[a-z])/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          Snall letters\n        ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.length > 7 ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          More than 8 characters\n        ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.match(/(?=.*[!@#\\$%\\^&\\*])/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          Special character\n        ")])]) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false,
      "char-limit-reached": _vm.d_value ? _vm.maxlength - _vm.d_value.length < 0 : false,
      "maxlength": _vm.maxlength
    }
  })], 1), _vm._v(" "), _vm.match ? _c('div', {
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n      Confirm " + _vm._s(_vm.label) + "\n      "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.d_value ? _vm.dPasswordMatch ? _vm.d_value === _vm.dPasswordMatch ? null : 'Passwords does not match' : null : null,
      errorContainer: _vm.d_value ? _vm.dPasswordMatch ? null : 'Required Field' : null,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), _vm.dTypeMatch === 'checkbox' && !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dPasswordMatch,
      expression: "dPasswordMatch"
    }],
    attrs: {
      "name": _vm.name + 'Match',
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.dPasswordMatch) ? _vm._i(_vm.dPasswordMatch, null) > -1 : _vm.dPasswordMatch
    },
    on: {
      "input": _vm.validate,
      "change": function ($event) {
        var $$a = _vm.dPasswordMatch,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.dPasswordMatch = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.dPasswordMatch = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.dPasswordMatch = $$c;
        }
      }
    }
  }) : _vm.dTypeMatch === 'radio' && !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dPasswordMatch,
      expression: "dPasswordMatch"
    }],
    attrs: {
      "name": _vm.name + 'Match',
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.dPasswordMatch, null)
    },
    on: {
      "input": _vm.validate,
      "change": function ($event) {
        _vm.dPasswordMatch = null;
      }
    }
  }) : !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dPasswordMatch,
      expression: "dPasswordMatch"
    }],
    attrs: {
      "name": _vm.name + 'Match',
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "type": _vm.dTypeMatch
    },
    domProps: {
      "value": _vm.dPasswordMatch
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.dPasswordMatch = $event.target.value;
      }, _vm.validate]
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    class: ['fas', _vm.dTypeMatch != 'text' ? 'fa-eye' : 'fa-eye-slash'],
    on: {
      "click": function ($event) {
        return _vm.peek(0);
      }
    }
  }), _vm._v(" "), _vm.d_value ? _c('div', {
    staticClass: "conditions"
  }, [_c('div', [_c('span', {
    class: _vm.d_value && _vm.d_value === _vm.dPasswordMatch ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n          " + _vm._s(_vm.label) + " Match\n        ")])]) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.d_value ? _vm.dPasswordMatch ? _vm.d_value === _vm.dPasswordMatch ? null : 'Passwords does not match' : null : null,
      "error": _vm.d_value ? _vm.dPasswordMatch ? null : 'Required Field' : null
    }
  })], 1) : _vm._e()]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-239b4f3b_0", {
    source: ".passwordInput[data-v-239b4f3b]{min-width:160px}.passwordInput>div[data-v-239b4f3b]{display:flex;flex-direction:column;flex-wrap:nowrap}.passwordInput>div[data-v-239b4f3b]:focus,.passwordInput>div[data-v-239b4f3b]:focus-within{border-color:var(--primaryColor)}.passwordInput>div:focus-within>span[data-v-239b4f3b],.passwordInput>div:focus>span[data-v-239b4f3b]{color:var(--primaryColor)}.passwordInput>div.inline[data-v-239b4f3b]{flex-direction:row;flex-wrap:wrap}.passwordInput>div.inline>label[data-v-239b4f3b]{margin-right:16px}.passwordInput>div.inline>.inputResponse[data-v-239b4f3b]{margin-left:16px}.passwordInput>div>label[data-v-239b4f3b]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.passwordInput>div>label>abbr[data-v-239b4f3b]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.passwordInput>div>label>span[data-v-239b4f3b]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.passwordInput>div>label>span>abbr[data-v-239b4f3b]{color:inherit}.passwordInput>div>label>input[type=checkbox][data-v-239b4f3b],.passwordInput>div>label>input[type=radio][data-v-239b4f3b]{transform:scale(1.5);margin-right:8px}.passwordInput>div>label>.vueButton[data-v-239b4f3b]{margin-left:auto}.passwordInput>div>label.oneLiner[data-v-239b4f3b]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.passwordInput>div>label.oneLiner>input[type=checkbox][data-v-239b4f3b],.passwordInput>div>label.oneLiner>input[type=radio][data-v-239b4f3b]{display:none}.passwordInput>div>label.oneLiner>input[type=checkbox]+span[data-v-239b4f3b],.passwordInput>div>label.oneLiner>input[type=radio]+span[data-v-239b4f3b]{margin:0 8px;font-size:12px}.passwordInput>div>label.oneLiner>input[type=checkbox]+span.fas[data-v-239b4f3b],.passwordInput>div>label.oneLiner>input[type=radio]+span.fas[data-v-239b4f3b]{color:var(--primaryColor)}.passwordInput>div>label.oneLiner.errorLabel[data-v-239b4f3b]{color:#a94442}.passwordInput>div>div[data-v-239b4f3b]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.passwordInput>div>div.inputResponse[data-v-239b4f3b]{width:100%;border:none}.passwordInput>div>div.warningContainer[data-v-239b4f3b]{border-color:#8a6d3b;background-color:#fcf8e3}.passwordInput>div>div.warningContainer[data-v-239b4f3b]:focus,.passwordInput>div>div.warningContainer[data-v-239b4f3b]:focus-within{border-color:var(--primaryColor)}.passwordInput>div>div.warningContainer:focus-within>span[data-v-239b4f3b],.passwordInput>div>div.warningContainer:focus>span[data-v-239b4f3b]{color:#8a6d3b}.passwordInput>div>div.warningContainer>span[data-v-239b4f3b]{color:#8a6d3b!important}.passwordInput>div>div.errorContainer[data-v-239b4f3b]{border-color:#a94442;background-color:#f2dede}.passwordInput>div>div.errorContainer[data-v-239b4f3b]:focus,.passwordInput>div>div.errorContainer[data-v-239b4f3b]:focus-within{border-color:var(--primaryColor)}.passwordInput>div>div.errorContainer:focus-within>span[data-v-239b4f3b],.passwordInput>div>div.errorContainer:focus>span[data-v-239b4f3b]{color:#a94442}.passwordInput>div>div.errorContainer>span[data-v-239b4f3b]{color:#a94442!important}.passwordInput>div>div>datalist[data-v-239b4f3b],.passwordInput>div>div>input[data-v-239b4f3b],.passwordInput>div>div>select[data-v-239b4f3b],.passwordInput>div>div>textarea[data-v-239b4f3b]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.passwordInput>div>div>datalist[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div>datalist[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div>datalist[data-v-239b4f3b]:-webkit-autofill:hover,.passwordInput>div>div>input[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div>input[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div>input[data-v-239b4f3b]:-webkit-autofill:hover,.passwordInput>div>div>select[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div>select[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div>select[data-v-239b4f3b]:-webkit-autofill:hover,.passwordInput>div>div>textarea[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div>textarea[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div>textarea[data-v-239b4f3b]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.passwordInput>div>div>datalist option[data-v-239b4f3b]:first,.passwordInput>div>div>input option[data-v-239b4f3b]:first,.passwordInput>div>div>select option[data-v-239b4f3b]:first,.passwordInput>div>div>textarea option[data-v-239b4f3b]:first{color:darken(@backgroundColor,25%)}.passwordInput>div>div>datalist+span[data-v-239b4f3b],.passwordInput>div>div>input+span[data-v-239b4f3b],.passwordInput>div>div>select+span[data-v-239b4f3b],.passwordInput>div>div>textarea+span[data-v-239b4f3b]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.passwordInput>div>div>datalist:focus~.conditions[data-v-239b4f3b],.passwordInput>div>div>input:focus~.conditions[data-v-239b4f3b],.passwordInput>div>div>select:focus~.conditions[data-v-239b4f3b],.passwordInput>div>div>textarea:focus~.conditions[data-v-239b4f3b]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.passwordInput>div>div>datalist:focus~.conditions>div[data-v-239b4f3b],.passwordInput>div>div>input:focus~.conditions>div[data-v-239b4f3b],.passwordInput>div>div>select:focus~.conditions>div[data-v-239b4f3b],.passwordInput>div>div>textarea:focus~.conditions>div[data-v-239b4f3b]{display:flex;flex-direction:row;padding:8px 16px}.passwordInput>div>div>datalist:focus~.conditions>div>span[data-v-239b4f3b],.passwordInput>div>div>input:focus~.conditions>div>span[data-v-239b4f3b],.passwordInput>div>div>select:focus~.conditions>div>span[data-v-239b4f3b],.passwordInput>div>div>textarea:focus~.conditions>div>span[data-v-239b4f3b]{margin-right:8px}.passwordInput>div>div>datalist~.conditions[data-v-239b4f3b],.passwordInput>div>div>input~.conditions[data-v-239b4f3b],.passwordInput>div>div>select~.conditions[data-v-239b4f3b],.passwordInput>div>div>textarea~.conditions[data-v-239b4f3b]{display:none}.passwordInput>div>div.iconPadding>span[data-v-239b4f3b]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.passwordInput>div>div.iconPadding>span+datalist[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+input[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+select[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+textarea[data-v-239b4f3b]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.passwordInput>div>div.iconPadding>span+datalist[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div.iconPadding>span+datalist[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div.iconPadding>span+datalist[data-v-239b4f3b]:-webkit-autofill:hover,.passwordInput>div>div.iconPadding>span+input[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div.iconPadding>span+input[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div.iconPadding>span+input[data-v-239b4f3b]:-webkit-autofill:hover,.passwordInput>div>div.iconPadding>span+select[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div.iconPadding>span+select[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div.iconPadding>span+select[data-v-239b4f3b]:-webkit-autofill:hover,.passwordInput>div>div.iconPadding>span+textarea[data-v-239b4f3b]:-webkit-autofill,.passwordInput>div>div.iconPadding>span+textarea[data-v-239b4f3b]:-webkit-autofill:focus,.passwordInput>div>div.iconPadding>span+textarea[data-v-239b4f3b]:-webkit-autofill:hover{border-color:none}.passwordInput>div>div.iconPadding>span+datalist+span[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+input+span[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+select+span[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+textarea+span[data-v-239b4f3b]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.passwordInput>div>div.iconPadding>span+datalist:focus~.conditions[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+input:focus~.conditions[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+select:focus~.conditions[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+textarea:focus~.conditions[data-v-239b4f3b]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.passwordInput>div>div.iconPadding>span+datalist:focus~.conditions>div[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+input:focus~.conditions>div[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+select:focus~.conditions>div[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+textarea:focus~.conditions>div[data-v-239b4f3b]{display:flex;flex-direction:row;padding:8px 16px}.passwordInput>div>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+input:focus~.conditions>div>span[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+select:focus~.conditions>div>span[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-239b4f3b]{margin-right:8px}.passwordInput>div>div.iconPadding>span+datalist~.conditions[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+input~.conditions[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+select~.conditions[data-v-239b4f3b],.passwordInput>div>div.iconPadding>span+textarea~.conditions[data-v-239b4f3b]{display:none}.passwordInput>div>div>input[type=file][data-v-239b4f3b]{padding-left:16px}.passwordInput>div>div>select+span[data-v-239b4f3b]{left:40px}.passwordInput>div>div.files[data-v-239b4f3b]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.passwordInput>div>div.files>div[data-v-239b4f3b]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.passwordInput>div>div.files>div>div[data-v-239b4f3b]{display:flex;flex-direction:row;flex-wrap:nowrap}.passwordInput>div>div.files>div>div>span[data-v-239b4f3b]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.passwordInput>div>div.files>div>div>.fileSize[data-v-239b4f3b]{position:absolute;right:8px;bottom:8px;font-size:12px}.passwordInput>div>div.files>div>div>.removeFile[data-v-239b4f3b]{position:absolute;right:8px;top:8px}.passwordInput>div .maskField[data-v-239b4f3b]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-239b4f3b;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.passwordInput>div .maskField[data-v-239b4f3b],.passwordInput>div .maskField *[data-v-239b4f3b],.passwordInput>div .maskField[data-v-239b4f3b] ::placeholder,.passwordInput>div .maskField div[data-v-239b4f3b],.passwordInput>div .maskField div[data-v-239b4f3b]::placeholder,.passwordInput>div .maskField[data-v-239b4f3b]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-239b4f3b{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-239b4f3b{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-239b4f3b{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-239b4f3b{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-239b4f3b";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: "VueButton",
  props: {
    type: {
      required: false,
      type: String,
      default: "button",
      validator: function (value) {
        return ["button", "submit", "reset", null].indexOf(value) !== -1;
      }
    },
    tag: {
      required: false,
      type: String,
      default: ""
    },
    text: {
      required: false,
      type: String,
      default: ""
    },
    category: {
      required: false,
      type: String,
      default: "standard",
      validator: function (value) {
        return ["standard", "large", "small", "fullWidth", "border", "border-sm", "border-lg", "border-fwidth", "text", "text-sm", "text-lg", "icon", "icon-sm", "icon-lg", null].indexOf(value) !== -1;
      }
    },
    icon: {
      type: String,
      required: false,
      // function() {
      //   return ["icon", "icon-lg", "icon-sm"].indexOf(this.category) !== -1;
      // },
      default: null
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    buttonClass: {
      required: false,
      type: String,
      default: function () {
        let tempClass = "btn";

        switch (this.category) {
          case "standard":
            tempClass += " btn-primary";
            break;

          case "icon":
            tempClass += " btn-icon";
            break;

          case "icon-sm":
            tempClass += " btn-icon btn-sm";
            break;

          case "icon-lg":
            tempClass += " btn-icon btn-lg";
            break;

          case "text":
            tempClass += " btn-link btn-text";
            break;

          case "text-sm":
            tempClass += " btn-text btn-sm";
            break;

          case "text-lg":
            tempClass += " btn-text btn-lg";
            break;

          case "small":
            tempClass += " btn-primary btn-sm";
            break;

          case "large":
            tempClass += " btn-primary btn-lg";
            break;

          case "fullWidth":
            tempClass += " btn-fullWidth btn-block";
            break;

          case "border":
            tempClass += " btn-border";
            break;

          case "border-sm":
            tempClass += " btn-border btn-sm";
            break;

          case "border-lg":
            tempClass += " btn-border btn-lg";
            break;

          case "border-fwidth":
            tempClass += " btn-border btn-fullWidth btn-block";
            break;

          default:
            tempClass += "";
        }

        return tempClass;
      }
    },
    form: {
      required: false,
      type: String,
      default: null
    },
    ctx: {
      required: function () {
        // console.log(this.type);
        if (this.type == "button") {
          return true;
        }

        return false;
      },
      type: [Function, null],
      default: function () {
        alert("button undefined: Please send a function to execute when the button is clicked");
      }
    }
  } //props

}; //default

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    class: ['vueButton', ['fullWidth', 'border-fwidth'].indexOf(_vm.category) != -1 ? 'fullWidth' : null, _vm.buttonClass],
    attrs: {
      "type": _vm.type,
      "name": _vm.tag,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "form": _vm.form
    },
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.ctx($event);
      }
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !['icon', 'icon-sm', 'icon-lg'].indexOf(_vm.category) != -1 ? [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")] : _vm._e()], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = function (inject) {
  if (!inject) return;
  inject("data-v-7805407b_0", {
    source: ".vueButton[data-v-7805407b]{display:inline-flex;justify-content:center;align-items:center;font-weight:700;width:fit-content;background-color:var(--accentColor);color:var(--backgroundColor);border:1px solid var(--accentColor);height:fit-content;box-shadow:inset 0 0 4px var(--accentColor),0 2px 4px var(--accentColor);-webkit-box-shadow:inset 0 0 4px var(--accentColor),0 2px 4px var(--accentColor);-moz-box-shadow:inset 0 0 4px var(--accentColor),0 2px 4px var(--accentColor);z-index:inherit}.vueButton:hover>span[data-v-7805407b]{transform:scale(1.1)}.vueButton>span[data-v-7805407b]{margin-right:8px}.vueButton[data-v-7805407b]:not([disabled]):hover{box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor);z-index:inherit}.vueButton.btn-icon[data-v-7805407b]{background-color:transparent;color:var(--accentColor);padding:4px;font-size:20px;border-color:transparent;text-shadow:none var(--shadowColor);-webkit-text-shadow:none var(--shadowColor);-moz-text-shadow:none var(--shadowColor);z-index:inherit;box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;z-index:inherit!important}.vueButton.btn-icon>span[data-v-7805407b]{margin-right:0}.vueButton.btn-icon[data-v-7805407b]:hover{text-shadow:0 1px 2px var(--accentColor);-webkit-text-shadow:0 1px 2px var(--accentColor);-moz-text-shadow:0 1px 2px var(--accentColor);z-index:inherit;box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;z-index:inherit!important}.vueButton.btn-text[data-v-7805407b]{background-color:transparent;color:var(--accentColor);padding:4px 8px;border-width:0;font-weight:700;box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor);z-index:inherit}.vueButton.btn-text[data-v-7805407b]:not([disabled]):hover{border-color:transparent;transform:scale(1.1)}.vueButton.btn-border[data-v-7805407b]{border-radius:4px;background-color:transparent;border:1px solid var(--accentColor);color:var(--accentColor);font-weight:700}.vueButton .btn-fullWidth[data-v-7805407b],.vueButton.fullWidth[data-v-7805407b]{width:100%}.vueButton.btn-sm[data-v-7805407b]{padding:4px 8px;font-size:12px}.vueButton.btn-lg[data-v-7805407b]{padding:8px 16px;font-size:24px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$4 = "data-v-7805407b";
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, createInjector, undefined, undefined);

//
var script$5 = {
  name: "checkboxInput",
  mixins: [validator, alerts],
  //mixins
  components: {
    inputResponse: __vue_component__$1,
    vueButton: __vue_component__$4
  },
  //components
  props: {
    //sets type for the input field
    //valid values include ['checkbox', 'radio']
    type: {
      required: false,
      type: String,
      validator: function (value) {
        return ["checkbox", "radio", null].indexOf(value) !== -1;
      },
      default: "checkbox"
    },
    //sets heading for the checkboxes category
    //in case of single/no-option checkbox, label is used as checkbox text
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "checkboxInput"
    },
    //users can pass preset values for the input field
    value: {
      required: true,
      type: [Boolean, Array, String, Number, null],
      // type: function() {
      //   if (!this.options) {
      //     return [Boolean, null];
      //   } else if (this.type != "radio") {
      //     return [Array, null];
      //   } else {
      //     //type == radio
      //     return [String, Number, null];
      //   }
      // },
      default: function () {
        if (!this.options) {
          return false;
        } else if (this.type == "checkbox") {
          return [];
        } else {
          //type == radio
          return null;
        }
      }
    },
    //Array of options/labels in case of multiple checkboxes.
    options: {
      required: false,
      type: Array,
      default: null
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or as buttons
    box: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  //props
  created() {
    this.d_needsValidation = false;
  },

  //created
  methods: {
    isChecked: function (option) {
      const value = this.value;

      if (this.type != 'radio') {
        return typeof value == 'object' ? value.indexOf(option) != -1 : value;
      }

      return value == option;
    },
    //isChecked
    clearSelection: function () {
      // const options = this.options;
      // options.forEach(option => {
      //   this.$refs[option].checked= false;
      // });
      this.$emit("value", "");
    },
    //clearSelection
    check: function (checkedValue) {
      let value = this.value;

      if (this.options) {
        //checkbox
        if (this.type == "checkbox") {
          if (value) {
            value = [...value];
            const index = value.indexOf(checkedValue);

            if (index != -1) {
              value = value.splice(index, 1); // console.log("check: ", Array.from(value), typeof value);

              this.$emit("value", value);
            } else {
              value = [...this.value, checkedValue];
              this.$emit("value", value);
            }
          } else {
            this.$emit("value", [checkedValue]);
          }
        } else {
          // if type = radio
          // console.log(checkedValue, this.type);
          this.$emit("value", checkedValue);
        }
      } else {
        //this.options does not exist
        // console.log(this.$refs["singleCheckbox"].checked);
        this.$emit("value", this.$refs["singleCheckbox"].checked);
      }
    } //check

  } //components

}; //default

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkboxInput",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label || _vm.type == 'checkbox' && !_vm.options ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm.type == 'checkbox' && !_vm.options && !_vm.mask ? _c('input', {
    ref: "singleCheckbox",
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "input": function ($event) {
        return _vm.check(_vm.value);
      }
    }
  }) : _vm._e(), _vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])]), _vm._v(" "), _c('input', {
    attrs: {
      "name": _vm.name,
      "type": "hidden",
      "required": _vm.required
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._v(" "), (_vm.options && typeof _vm.value != 'boolean' ? _vm.value : false) ? _c('vue-button', {
    attrs: {
      "id": "clearSelection",
      "tag": "resetValue",
      "text": "Reset",
      "icon": "fas fa-undo",
      "category": "icon-sm",
      "ctx": _vm.clearSelection.bind(this)
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.options ? _c('div', {
    class: {
      box: _vm.box,
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      maskField: _vm.mask,
      inline: _vm.inline
    }
  }, [!_vm.mask ? _vm._l(_vm.options, function (option, index) {
    return _c('label', {
      key: index,
      class: {
        errorLabel: _vm.alert ? _vm.alert.error : false,
        checked: _vm.isChecked(option)
      },
      style: {
        'color: #aaaaaa; cursor: not-allowed;': _vm.disabled
      }
    }, [_c('input', {
      ref: option,
      refInFor: true,
      attrs: {
        "type": _vm.type,
        "name": option,
        "disabled": _vm.disabled,
        "autofocus": index == 0 ? _vm.autofocus : false
      },
      domProps: {
        "checked": _vm.isChecked(option),
        "value": option
      },
      on: {
        "input": function ($event) {
          return _vm.check(option);
        }
      }
    }), _vm._v("\n        " + _vm._s(option) + "\n      ")]);
  }) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('input-response', {
    attrs: {
      "error": _vm.alert ? _vm.alert.error : false
    }
  })], 1);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = function (inject) {
  if (!inject) return;
  inject("data-v-4a7470f8_0", {
    source: ".checkboxInput[data-v-4a7470f8]{display:flex;flex-direction:column;flex-wrap:nowrap;min-width:200px;height:fit-content}.checkboxInput.inline[data-v-4a7470f8]{flex-direction:row;flex-wrap:wrap}.checkboxInput>label[data-v-4a7470f8]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.checkboxInput>label>abbr[data-v-4a7470f8]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.checkboxInput>label>span[data-v-4a7470f8]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.checkboxInput>label>span>abbr[data-v-4a7470f8]{color:inherit}.checkboxInput>label>input[type=checkbox][data-v-4a7470f8],.checkboxInput>label>input[type=radio][data-v-4a7470f8]{transform:scale(1.5);margin-right:8px}.checkboxInput>label>.vueButton[data-v-4a7470f8]{margin-left:auto}.checkboxInput>label.oneLiner[data-v-4a7470f8]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.checkboxInput>label.oneLiner>input[type=checkbox][data-v-4a7470f8],.checkboxInput>label.oneLiner>input[type=radio][data-v-4a7470f8]{display:none}.checkboxInput>label.oneLiner>input[type=checkbox]+span[data-v-4a7470f8],.checkboxInput>label.oneLiner>input[type=radio]+span[data-v-4a7470f8]{margin:0 8px;font-size:12px}.checkboxInput>label.oneLiner>input[type=checkbox]+span.fas[data-v-4a7470f8],.checkboxInput>label.oneLiner>input[type=radio]+span.fas[data-v-4a7470f8]{color:var(--primaryColor)}.checkboxInput>label.oneLiner.errorLabel[data-v-4a7470f8]{color:#a94442}.checkboxInput>div[data-v-4a7470f8]{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;width:max-content}.checkboxInput>div.inline[data-v-4a7470f8]{flex-direction:row;margin-left:16px}.checkboxInput>div+div[data-v-4a7470f8]{display:flex}.checkboxInput>div.singleCheckbox[data-v-4a7470f8]{width:fit-content}.checkboxInput>div.errorContainer[data-v-4a7470f8]{border-color:#a94442;background-color:#f2dede}.checkboxInput>div.errorContainer[data-v-4a7470f8]:focus,.checkboxInput>div.errorContainer[data-v-4a7470f8]:focus-within{border-color:var(--primaryColor)}.checkboxInput>div.errorContainer:focus-within>span[data-v-4a7470f8],.checkboxInput>div.errorContainer:focus>span[data-v-4a7470f8]{color:#a94442}.checkboxInput>div.errorContainer>span[data-v-4a7470f8]{color:#a94442!important}.checkboxInput>div>label[data-v-4a7470f8]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;margin:0;align-items:center;cursor:pointer}.checkboxInput>div>label>input[type=checkbox][data-v-4a7470f8],.checkboxInput>div>label>input[type=radio][data-v-4a7470f8]{min-height:auto;margin-right:8px}.checkboxInput>div>label.errorLabel[data-v-4a7470f8]{color:#a94442}.checkboxInput>.box[data-v-4a7470f8]{margin-left:8px;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;border:1px solid var(--primaryColor)}.checkboxInput>.box>label[data-v-4a7470f8]{padding:16px;background-color:var(--secondaryColor)}.checkboxInput>.box>label>input[data-v-4a7470f8]{display:none}.checkboxInput>.box>label.checked[data-v-4a7470f8]{background-color:var(--primaryColor);color:var(--backgroundColor);font-weight:700}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$5 = "data-v-4a7470f8";
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector, undefined, undefined);

//
var script$6 = {
  name: "EmailInput",
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  mixins: [validator, alerts],
  //mixins
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "emailInput"
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },
    //sets the format/pattern for acceptable values for the input field
    //[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$
    ///^[^\s@]+@[^\s@]+\.[^\s@]+$/
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: () => /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$/
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "abc@yahoo.com"
    },
    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 50
    },
    //sets the multiple attribute for the input field
    multiple: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
  } //props

}; //default

/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "emailInput",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "type": "email",
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "pattern": _vm.pattern,
      "multiple": _vm.multiple,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }, _vm.validate]
    }
  }) : _vm._e(), _vm._v(" "), _vm.d_value ? _c('div', {
    staticClass: "conditions"
  }, [_c('div', [_c('span', {
    class: _vm.d_value.match(/^[A-Za-z0-9._%+-]/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n        Has account name consisting of alphabets and/or numbers and/or special\n        characters(%.-+_).\n      ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.match(/(?=@[A-Za-z0-9.-])/g) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n        Has a domain name consisting of alphabets, numbersm . and -. Ex:\n        @google, @yahoo, @facebook etc.\n      ")]), _vm._v(" "), _c('div', [_c('span', {
    class: _vm.d_value.match(/(?=.[A-Za-z]{2,3}$)/) ? 'fas fa-check' : 'fas fa-times'
  }), _vm._v("\n        Ends with a 2-3 character To plevel domain (TLD). Ex: .net, .com,\n        .edu, .co etc...\n      ")])]) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false,
      "char-limit-reached": _vm.d_value ? _vm.maxlength - _vm.d_value.length < 0 : false,
      "maxlength": _vm.maxlength
    }
  })], 1);
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = function (inject) {
  if (!inject) return;
  inject("data-v-06e18cb8_0", {
    source: ".emailInput[data-v-06e18cb8]{min-width:160px;display:flex;flex-direction:column;flex-wrap:nowrap}.emailInput[data-v-06e18cb8]:focus,.emailInput[data-v-06e18cb8]:focus-within{border-color:var(--primaryColor)}.emailInput:focus-within>span[data-v-06e18cb8],.emailInput:focus>span[data-v-06e18cb8]{color:var(--primaryColor)}.emailInput.inline[data-v-06e18cb8]{flex-direction:row;flex-wrap:wrap}.emailInput.inline>label[data-v-06e18cb8]{margin-right:16px}.emailInput.inline>.inputResponse[data-v-06e18cb8]{margin-left:16px}.emailInput>label[data-v-06e18cb8]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.emailInput>label>abbr[data-v-06e18cb8]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.emailInput>label>span[data-v-06e18cb8]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.emailInput>label>span>abbr[data-v-06e18cb8]{color:inherit}.emailInput>label>input[type=checkbox][data-v-06e18cb8],.emailInput>label>input[type=radio][data-v-06e18cb8]{transform:scale(1.5);margin-right:8px}.emailInput>label>.vueButton[data-v-06e18cb8]{margin-left:auto}.emailInput>label.oneLiner[data-v-06e18cb8]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.emailInput>label.oneLiner>input[type=checkbox][data-v-06e18cb8],.emailInput>label.oneLiner>input[type=radio][data-v-06e18cb8]{display:none}.emailInput>label.oneLiner>input[type=checkbox]+span[data-v-06e18cb8],.emailInput>label.oneLiner>input[type=radio]+span[data-v-06e18cb8]{margin:0 8px;font-size:12px}.emailInput>label.oneLiner>input[type=checkbox]+span.fas[data-v-06e18cb8],.emailInput>label.oneLiner>input[type=radio]+span.fas[data-v-06e18cb8]{color:var(--primaryColor)}.emailInput>label.oneLiner.errorLabel[data-v-06e18cb8]{color:#a94442}.emailInput>div[data-v-06e18cb8]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.emailInput>div.inputResponse[data-v-06e18cb8]{width:100%;border:none}.emailInput>div.warningContainer[data-v-06e18cb8]{border-color:#8a6d3b;background-color:#fcf8e3}.emailInput>div.warningContainer[data-v-06e18cb8]:focus,.emailInput>div.warningContainer[data-v-06e18cb8]:focus-within{border-color:var(--primaryColor)}.emailInput>div.warningContainer:focus-within>span[data-v-06e18cb8],.emailInput>div.warningContainer:focus>span[data-v-06e18cb8]{color:#8a6d3b}.emailInput>div.warningContainer>span[data-v-06e18cb8]{color:#8a6d3b!important}.emailInput>div.errorContainer[data-v-06e18cb8]{border-color:#a94442;background-color:#f2dede}.emailInput>div.errorContainer[data-v-06e18cb8]:focus,.emailInput>div.errorContainer[data-v-06e18cb8]:focus-within{border-color:var(--primaryColor)}.emailInput>div.errorContainer:focus-within>span[data-v-06e18cb8],.emailInput>div.errorContainer:focus>span[data-v-06e18cb8]{color:#a94442}.emailInput>div.errorContainer>span[data-v-06e18cb8]{color:#a94442!important}.emailInput>div>datalist[data-v-06e18cb8],.emailInput>div>input[data-v-06e18cb8],.emailInput>div>select[data-v-06e18cb8],.emailInput>div>textarea[data-v-06e18cb8]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.emailInput>div>datalist[data-v-06e18cb8]:-webkit-autofill,.emailInput>div>datalist[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div>datalist[data-v-06e18cb8]:-webkit-autofill:hover,.emailInput>div>input[data-v-06e18cb8]:-webkit-autofill,.emailInput>div>input[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div>input[data-v-06e18cb8]:-webkit-autofill:hover,.emailInput>div>select[data-v-06e18cb8]:-webkit-autofill,.emailInput>div>select[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div>select[data-v-06e18cb8]:-webkit-autofill:hover,.emailInput>div>textarea[data-v-06e18cb8]:-webkit-autofill,.emailInput>div>textarea[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div>textarea[data-v-06e18cb8]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.emailInput>div>datalist option[data-v-06e18cb8]:first,.emailInput>div>input option[data-v-06e18cb8]:first,.emailInput>div>select option[data-v-06e18cb8]:first,.emailInput>div>textarea option[data-v-06e18cb8]:first{color:darken(@backgroundColor,25%)}.emailInput>div>datalist+span[data-v-06e18cb8],.emailInput>div>input+span[data-v-06e18cb8],.emailInput>div>select+span[data-v-06e18cb8],.emailInput>div>textarea+span[data-v-06e18cb8]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.emailInput>div>datalist:focus~.conditions[data-v-06e18cb8],.emailInput>div>input:focus~.conditions[data-v-06e18cb8],.emailInput>div>select:focus~.conditions[data-v-06e18cb8],.emailInput>div>textarea:focus~.conditions[data-v-06e18cb8]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.emailInput>div>datalist:focus~.conditions>div[data-v-06e18cb8],.emailInput>div>input:focus~.conditions>div[data-v-06e18cb8],.emailInput>div>select:focus~.conditions>div[data-v-06e18cb8],.emailInput>div>textarea:focus~.conditions>div[data-v-06e18cb8]{display:flex;flex-direction:row;padding:8px 16px}.emailInput>div>datalist:focus~.conditions>div>span[data-v-06e18cb8],.emailInput>div>input:focus~.conditions>div>span[data-v-06e18cb8],.emailInput>div>select:focus~.conditions>div>span[data-v-06e18cb8],.emailInput>div>textarea:focus~.conditions>div>span[data-v-06e18cb8]{margin-right:8px}.emailInput>div>datalist~.conditions[data-v-06e18cb8],.emailInput>div>input~.conditions[data-v-06e18cb8],.emailInput>div>select~.conditions[data-v-06e18cb8],.emailInput>div>textarea~.conditions[data-v-06e18cb8]{display:none}.emailInput>div.iconPadding>span[data-v-06e18cb8]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.emailInput>div.iconPadding>span+datalist[data-v-06e18cb8],.emailInput>div.iconPadding>span+input[data-v-06e18cb8],.emailInput>div.iconPadding>span+select[data-v-06e18cb8],.emailInput>div.iconPadding>span+textarea[data-v-06e18cb8]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.emailInput>div.iconPadding>span+datalist[data-v-06e18cb8]:-webkit-autofill,.emailInput>div.iconPadding>span+datalist[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div.iconPadding>span+datalist[data-v-06e18cb8]:-webkit-autofill:hover,.emailInput>div.iconPadding>span+input[data-v-06e18cb8]:-webkit-autofill,.emailInput>div.iconPadding>span+input[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div.iconPadding>span+input[data-v-06e18cb8]:-webkit-autofill:hover,.emailInput>div.iconPadding>span+select[data-v-06e18cb8]:-webkit-autofill,.emailInput>div.iconPadding>span+select[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div.iconPadding>span+select[data-v-06e18cb8]:-webkit-autofill:hover,.emailInput>div.iconPadding>span+textarea[data-v-06e18cb8]:-webkit-autofill,.emailInput>div.iconPadding>span+textarea[data-v-06e18cb8]:-webkit-autofill:focus,.emailInput>div.iconPadding>span+textarea[data-v-06e18cb8]:-webkit-autofill:hover{border-color:none}.emailInput>div.iconPadding>span+datalist+span[data-v-06e18cb8],.emailInput>div.iconPadding>span+input+span[data-v-06e18cb8],.emailInput>div.iconPadding>span+select+span[data-v-06e18cb8],.emailInput>div.iconPadding>span+textarea+span[data-v-06e18cb8]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.emailInput>div.iconPadding>span+datalist:focus~.conditions[data-v-06e18cb8],.emailInput>div.iconPadding>span+input:focus~.conditions[data-v-06e18cb8],.emailInput>div.iconPadding>span+select:focus~.conditions[data-v-06e18cb8],.emailInput>div.iconPadding>span+textarea:focus~.conditions[data-v-06e18cb8]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.emailInput>div.iconPadding>span+datalist:focus~.conditions>div[data-v-06e18cb8],.emailInput>div.iconPadding>span+input:focus~.conditions>div[data-v-06e18cb8],.emailInput>div.iconPadding>span+select:focus~.conditions>div[data-v-06e18cb8],.emailInput>div.iconPadding>span+textarea:focus~.conditions>div[data-v-06e18cb8]{display:flex;flex-direction:row;padding:8px 16px}.emailInput>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-06e18cb8],.emailInput>div.iconPadding>span+input:focus~.conditions>div>span[data-v-06e18cb8],.emailInput>div.iconPadding>span+select:focus~.conditions>div>span[data-v-06e18cb8],.emailInput>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-06e18cb8]{margin-right:8px}.emailInput>div.iconPadding>span+datalist~.conditions[data-v-06e18cb8],.emailInput>div.iconPadding>span+input~.conditions[data-v-06e18cb8],.emailInput>div.iconPadding>span+select~.conditions[data-v-06e18cb8],.emailInput>div.iconPadding>span+textarea~.conditions[data-v-06e18cb8]{display:none}.emailInput>div>input[type=file][data-v-06e18cb8]{padding-left:16px}.emailInput>div>select+span[data-v-06e18cb8]{left:40px}.emailInput>div.files[data-v-06e18cb8]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.emailInput>div.files>div[data-v-06e18cb8]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.emailInput>div.files>div>div[data-v-06e18cb8]{display:flex;flex-direction:row;flex-wrap:nowrap}.emailInput>div.files>div>div>span[data-v-06e18cb8]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.emailInput>div.files>div>div>.fileSize[data-v-06e18cb8]{position:absolute;right:8px;bottom:8px;font-size:12px}.emailInput>div.files>div>div>.removeFile[data-v-06e18cb8]{position:absolute;right:8px;top:8px}.emailInput .maskField[data-v-06e18cb8]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-06e18cb8;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.emailInput .maskField[data-v-06e18cb8],.emailInput .maskField *[data-v-06e18cb8],.emailInput .maskField[data-v-06e18cb8] ::placeholder,.emailInput .maskField div[data-v-06e18cb8],.emailInput .maskField div[data-v-06e18cb8]::placeholder,.emailInput .maskField[data-v-06e18cb8]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-06e18cb8{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-06e18cb8{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-06e18cb8{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-06e18cb8{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$6 = "data-v-06e18cb8";
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

//
var script$7 = {
  name: 'fileInput',
  mixins: [validator, alerts],
  //mixins
  components: {
    vueButton: __vue_component__$4
  },

  //components
  data() {
    const d_value = [];
    return {
      d_value
    };
  },

  //data
  methods: {
    //gets a list of selected files and stores it in d_value variable (data)
    fileList: function () {
      //temp array to store files
      var filelist = []; //loads files in temp variable tempFiles

      var tempid = '#' + this.tag;
      var tempFiles = document.querySelector(tempid).files; //if tempFiles is not empty, load files in filelist array

      if (tempFiles && tempFiles.length > 0) {
        for (var file in tempFiles) {
          //tempFiles is an object and contains key:value pairs other than files and their detais.
          //this would presreve only file details
          if (typeof tempFiles[file] == 'object') {
            filelist.push(tempFiles[file]);
          }
        } //save list of files in d_value


        this.d_value = filelist;
      }
    },
    //fileList
    //removes file from d_value array
    removeFile: function (index) {
      //stores copy of d_value for code readability
      var files = this.d_value;

      for (var file in files) {
        if (file == index) {
          var temp = files.splice(index, 1);
        }
      }
    } //removeFile

  },
  //methods
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for the input field (required field in case of forms)
    tag: {
      required: false,
      type: String,
      default: 'fileUploadInput'
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },
    //sets the accept attribute for the input field
    //this lets the use upload files with acceptable file formats mentioned in this field
    accept: {
      required: false,
      type: String,
      default: ""
    },
    //sets the multiple attribute for the input field
    //this lets the user select multiple files to upload
    multiple: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
  },

  //props
  created() {
    this.d_value = this.value;
  }

}; //default

/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: {
      fileInput: true,
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    attrs: {
      "type": "file",
      "name": _vm.tag,
      "id": _vm.tag,
      "multiple": _vm.multiple,
      "accept": _vm.accept,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "required": _vm.required
    },
    on: {
      "change": function ($event) {
        return _vm.fileList();
      }
    }
  }) : _vm._e()]), _vm._v(" "), _vm.d_value.length > 0 ? _c('div', {
    staticClass: "files"
  }, _vm._l(_vm.d_value, function (file, index) {
    return _c('div', {
      key: index
    }, [_c('div', [_c('span', {
      staticClass: "fas fa-file"
    }), _vm._v(" "), _c('h5', [_vm._v(_vm._s(file.name))])]), _vm._v(" "), _c('div', [_c('span', {
      staticClass: "fileSize"
    }, [_vm._v(_vm._s(file.size / 100) + "kb")]), _vm._v(" "), _c('vue-button', {
      staticClass: "removeFile",
      attrs: {
        "tag": "removeFile",
        "icon": "fas fa-times",
        "category": "icon-sm",
        "ctx": _vm.removeFile.bind(this, index)
      }
    })], 1)]);
  }), 0) : _vm._e()]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = function (inject) {
  if (!inject) return;
  inject("data-v-58569798_0", {
    source: ".fileInput[data-v-58569798]{min-width:160px;display:flex;flex-direction:column;flex-wrap:nowrap}.fileInput[data-v-58569798]:focus,.fileInput[data-v-58569798]:focus-within{border-color:var(--primaryColor)}.fileInput:focus-within>span[data-v-58569798],.fileInput:focus>span[data-v-58569798]{color:var(--primaryColor)}.fileInput.inline[data-v-58569798]{flex-direction:row;flex-wrap:wrap}.fileInput.inline>label[data-v-58569798]{margin-right:16px}.fileInput.inline>.inputResponse[data-v-58569798]{margin-left:16px}.fileInput>label[data-v-58569798]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.fileInput>label>abbr[data-v-58569798]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.fileInput>label>span[data-v-58569798]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.fileInput>label>span>abbr[data-v-58569798]{color:inherit}.fileInput>label>input[type=checkbox][data-v-58569798],.fileInput>label>input[type=radio][data-v-58569798]{transform:scale(1.5);margin-right:8px}.fileInput>label>.vueButton[data-v-58569798]{margin-left:auto}.fileInput>label.oneLiner[data-v-58569798]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.fileInput>label.oneLiner>input[type=checkbox][data-v-58569798],.fileInput>label.oneLiner>input[type=radio][data-v-58569798]{display:none}.fileInput>label.oneLiner>input[type=checkbox]+span[data-v-58569798],.fileInput>label.oneLiner>input[type=radio]+span[data-v-58569798]{margin:0 8px;font-size:12px}.fileInput>label.oneLiner>input[type=checkbox]+span.fas[data-v-58569798],.fileInput>label.oneLiner>input[type=radio]+span.fas[data-v-58569798]{color:var(--primaryColor)}.fileInput>label.oneLiner.errorLabel[data-v-58569798]{color:#a94442}.fileInput>div[data-v-58569798]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.fileInput>div.inputResponse[data-v-58569798]{width:100%;border:none}.fileInput>div.warningContainer[data-v-58569798]{border-color:#8a6d3b;background-color:#fcf8e3}.fileInput>div.warningContainer[data-v-58569798]:focus,.fileInput>div.warningContainer[data-v-58569798]:focus-within{border-color:var(--primaryColor)}.fileInput>div.warningContainer:focus-within>span[data-v-58569798],.fileInput>div.warningContainer:focus>span[data-v-58569798]{color:#8a6d3b}.fileInput>div.warningContainer>span[data-v-58569798]{color:#8a6d3b!important}.fileInput>div.errorContainer[data-v-58569798]{border-color:#a94442;background-color:#f2dede}.fileInput>div.errorContainer[data-v-58569798]:focus,.fileInput>div.errorContainer[data-v-58569798]:focus-within{border-color:var(--primaryColor)}.fileInput>div.errorContainer:focus-within>span[data-v-58569798],.fileInput>div.errorContainer:focus>span[data-v-58569798]{color:#a94442}.fileInput>div.errorContainer>span[data-v-58569798]{color:#a94442!important}.fileInput>div>datalist[data-v-58569798],.fileInput>div>input[data-v-58569798],.fileInput>div>select[data-v-58569798],.fileInput>div>textarea[data-v-58569798]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.fileInput>div>datalist[data-v-58569798]:-webkit-autofill,.fileInput>div>datalist[data-v-58569798]:-webkit-autofill:focus,.fileInput>div>datalist[data-v-58569798]:-webkit-autofill:hover,.fileInput>div>input[data-v-58569798]:-webkit-autofill,.fileInput>div>input[data-v-58569798]:-webkit-autofill:focus,.fileInput>div>input[data-v-58569798]:-webkit-autofill:hover,.fileInput>div>select[data-v-58569798]:-webkit-autofill,.fileInput>div>select[data-v-58569798]:-webkit-autofill:focus,.fileInput>div>select[data-v-58569798]:-webkit-autofill:hover,.fileInput>div>textarea[data-v-58569798]:-webkit-autofill,.fileInput>div>textarea[data-v-58569798]:-webkit-autofill:focus,.fileInput>div>textarea[data-v-58569798]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.fileInput>div>datalist option[data-v-58569798]:first,.fileInput>div>input option[data-v-58569798]:first,.fileInput>div>select option[data-v-58569798]:first,.fileInput>div>textarea option[data-v-58569798]:first{color:darken(@backgroundColor,25%)}.fileInput>div>datalist+span[data-v-58569798],.fileInput>div>input+span[data-v-58569798],.fileInput>div>select+span[data-v-58569798],.fileInput>div>textarea+span[data-v-58569798]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.fileInput>div>datalist:focus~.conditions[data-v-58569798],.fileInput>div>input:focus~.conditions[data-v-58569798],.fileInput>div>select:focus~.conditions[data-v-58569798],.fileInput>div>textarea:focus~.conditions[data-v-58569798]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.fileInput>div>datalist:focus~.conditions>div[data-v-58569798],.fileInput>div>input:focus~.conditions>div[data-v-58569798],.fileInput>div>select:focus~.conditions>div[data-v-58569798],.fileInput>div>textarea:focus~.conditions>div[data-v-58569798]{display:flex;flex-direction:row;padding:8px 16px}.fileInput>div>datalist:focus~.conditions>div>span[data-v-58569798],.fileInput>div>input:focus~.conditions>div>span[data-v-58569798],.fileInput>div>select:focus~.conditions>div>span[data-v-58569798],.fileInput>div>textarea:focus~.conditions>div>span[data-v-58569798]{margin-right:8px}.fileInput>div>datalist~.conditions[data-v-58569798],.fileInput>div>input~.conditions[data-v-58569798],.fileInput>div>select~.conditions[data-v-58569798],.fileInput>div>textarea~.conditions[data-v-58569798]{display:none}.fileInput>div.iconPadding>span[data-v-58569798]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.fileInput>div.iconPadding>span+datalist[data-v-58569798],.fileInput>div.iconPadding>span+input[data-v-58569798],.fileInput>div.iconPadding>span+select[data-v-58569798],.fileInput>div.iconPadding>span+textarea[data-v-58569798]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.fileInput>div.iconPadding>span+datalist[data-v-58569798]:-webkit-autofill,.fileInput>div.iconPadding>span+datalist[data-v-58569798]:-webkit-autofill:focus,.fileInput>div.iconPadding>span+datalist[data-v-58569798]:-webkit-autofill:hover,.fileInput>div.iconPadding>span+input[data-v-58569798]:-webkit-autofill,.fileInput>div.iconPadding>span+input[data-v-58569798]:-webkit-autofill:focus,.fileInput>div.iconPadding>span+input[data-v-58569798]:-webkit-autofill:hover,.fileInput>div.iconPadding>span+select[data-v-58569798]:-webkit-autofill,.fileInput>div.iconPadding>span+select[data-v-58569798]:-webkit-autofill:focus,.fileInput>div.iconPadding>span+select[data-v-58569798]:-webkit-autofill:hover,.fileInput>div.iconPadding>span+textarea[data-v-58569798]:-webkit-autofill,.fileInput>div.iconPadding>span+textarea[data-v-58569798]:-webkit-autofill:focus,.fileInput>div.iconPadding>span+textarea[data-v-58569798]:-webkit-autofill:hover{border-color:none}.fileInput>div.iconPadding>span+datalist+span[data-v-58569798],.fileInput>div.iconPadding>span+input+span[data-v-58569798],.fileInput>div.iconPadding>span+select+span[data-v-58569798],.fileInput>div.iconPadding>span+textarea+span[data-v-58569798]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.fileInput>div.iconPadding>span+datalist:focus~.conditions[data-v-58569798],.fileInput>div.iconPadding>span+input:focus~.conditions[data-v-58569798],.fileInput>div.iconPadding>span+select:focus~.conditions[data-v-58569798],.fileInput>div.iconPadding>span+textarea:focus~.conditions[data-v-58569798]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.fileInput>div.iconPadding>span+datalist:focus~.conditions>div[data-v-58569798],.fileInput>div.iconPadding>span+input:focus~.conditions>div[data-v-58569798],.fileInput>div.iconPadding>span+select:focus~.conditions>div[data-v-58569798],.fileInput>div.iconPadding>span+textarea:focus~.conditions>div[data-v-58569798]{display:flex;flex-direction:row;padding:8px 16px}.fileInput>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-58569798],.fileInput>div.iconPadding>span+input:focus~.conditions>div>span[data-v-58569798],.fileInput>div.iconPadding>span+select:focus~.conditions>div>span[data-v-58569798],.fileInput>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-58569798]{margin-right:8px}.fileInput>div.iconPadding>span+datalist~.conditions[data-v-58569798],.fileInput>div.iconPadding>span+input~.conditions[data-v-58569798],.fileInput>div.iconPadding>span+select~.conditions[data-v-58569798],.fileInput>div.iconPadding>span+textarea~.conditions[data-v-58569798]{display:none}.fileInput>div>input[type=file][data-v-58569798]{padding-left:16px}.fileInput>div>select+span[data-v-58569798]{left:40px}.fileInput>div.files[data-v-58569798]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.fileInput>div.files>div[data-v-58569798]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.fileInput>div.files>div>div[data-v-58569798]{display:flex;flex-direction:row;flex-wrap:nowrap}.fileInput>div.files>div>div>span[data-v-58569798]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.fileInput>div.files>div>div>.fileSize[data-v-58569798]{position:absolute;right:8px;bottom:8px;font-size:12px}.fileInput>div.files>div>div>.removeFile[data-v-58569798]{position:absolute;right:8px;top:8px}.fileInput .maskField[data-v-58569798]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-58569798;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.fileInput .maskField[data-v-58569798],.fileInput .maskField *[data-v-58569798],.fileInput .maskField[data-v-58569798] ::placeholder,.fileInput .maskField div[data-v-58569798],.fileInput .maskField div[data-v-58569798]::placeholder,.fileInput .maskField[data-v-58569798]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-58569798{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-58569798{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-58569798{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-58569798{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$7 = "data-v-58569798";
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, createInjector, undefined, undefined);

//
var script$8 = {
  name: "multiToggle",
  mixins: [validator, alerts],
  props: {
    //sets heading/Label for multitoggle
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for multitoggle  (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "textInput"
    },
    //users can pass preset values for multitoggle
    value: {
      required: false,
      type: [Boolean, String, null],
      default: false
    },
    //toggles label for multitoggle
    showLabels: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets label text for checked state for multitoggle
    labelChecked: {
      required: true,
      type: String,
      default: ""
    },
    //sets label text for unchecked state for multitoggle
    labelUnchecked: {
      required: true,
      type: String,
      default: ""
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the disabled attribute for multitoggle
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the readonly attribute for multitoggle
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  //props
  computed: {
    //triggers and returns class values depending on the toggle state
    classes: function () {
      return {
        checked: this.d_value,
        unchecked: !this.d_value,
        disabled: this.disabled
      };
    },
    //classes
    //triggers and returns label title depending on the toggle state
    labelToggle: function () {
      return this.d_value && this.showLabels ? this.labelChecked : this.labelUnchecked;
    } //labelToggle

  },
  //computed
  methods: {
    //toggle state unless toggle is disabled
    toggle: function (e) {
      if (this.disabled && e.keyCode === 9) {
        // not if disabled or tab is pressed
        return;
      }

      this.d_value = !this.d_value;
      this.$emit("value", !this.d_value);
    } //toggle

  } //methods

}; //default

/* script */
const __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "multiToggle",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n  " + _vm._s(_vm.label) + "\n")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "checkbox-toggle",
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      maskField: _vm.mask
    },
    attrs: {
      "role": "checkbox",
      "tabindex": "0",
      "aria-checked": _vm.d_value
    },
    on: {
      "keydown": _vm.toggle,
      "click": function ($event) {
        $event.preventDefault();
        return _vm.toggle($event);
      }
    }
  }, [!_vm.mask ? [_c('div', {
    staticClass: "checkbox-slide",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "checkbox-switch",
    class: _vm.classes
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showLabels,
      expression: "showLabels"
    }],
    staticClass: "checkbox-label",
    domProps: {
      "innerHTML": _vm._s(_vm.labelToggle)
    }
  })] : _vm._e()], 2)]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

const __vue_inject_styles__$8 = function (inject) {
  if (!inject) return;
  inject("data-v-f241991c_0", {
    source: ".multiToggle[data-v-f241991c]{width:fit-content}.multiToggle .checkbox-toggle[data-v-f241991c]{display:flex;flex-direction:row;align-items:center}.multiToggle .checkbox-toggle[data-v-f241991c]:focus{outline:0}.multiToggle .checkbox-toggle .checkbox-slide[data-v-f241991c]{display:block;width:64px;height:32px;border-radius:16px;cursor:pointer;border:1px solid darken(#e0e0e0,10%)}.multiToggle .checkbox-toggle .checkbox-slide.checked[data-v-f241991c]{transition:all 350ms;background:#00f;border-color:var(--primaryColor)}.multiToggle .checkbox-toggle .checkbox-slide.unchecked[data-v-f241991c]{transition:all 350ms;background:red}.multiToggle .checkbox-toggle .checkbox-slide.disabled[data-v-f241991c]{cursor:not-allowed;background:red}.multiToggle .checkbox-toggle .checkbox-slide .checkbox-switch[data-v-f241991c]{display:block;padding:0;margin:0;width:32px;height:32px;border-radius:16px;background:var(--primaryColor);cursor:pointer}.multiToggle .checkbox-toggle .checkbox-slide .checkbox-switch.checked[data-v-f241991c]{transform:translateX(32px);transition:all 350ms;background:var(--primaryColor)}.multiToggle .checkbox-toggle .checkbox-slide .checkbox-switch.unchecked[data-v-f241991c]{transition:all 350ms}.multiToggle .checkbox-toggle .checkbox-slide .checkbox-switch.disabled[data-v-f241991c]{cursor:not-allowed}.multiToggle .checkbox-toggle .checkbox-label[data-v-f241991c]{width:max-content;color:var(--primaryColor);margin-left:8px;font-weight:700}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$8 = "data-v-f241991c";
/* module identifier */

const __vue_module_identifier__$8 = undefined;
/* functional template */

const __vue_is_functional_template__$8 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, createInjector, undefined, undefined);

//
var script$9 = {
  name: 'numberInput',
  mixins: [alerts],

  data() {
    return {
      //stores errors thrown by the input fields
      danger: null,
      //stores errors thrown by the input fields
      warning: null,
      //stores textbox password values
      d_numberValue: null
    }; //return
  },

  //data
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: null
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: 'numberInput'
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: [Number, String],
      default: 0
    },
    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String],
      default: () => /^(0|[1-9][0-9]*)$/
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "0-9999"
    },
    //sets the step attribute for input type number
    step: {
      required: false,
      type: Number,
      default: 1
    },
    //sets the min attribute for the input field
    min: {
      required: false,
      type: Number,
      default: 0
    },
    //sets the max attribute for the input field
    max: {
      required: false,
      type: Number,
      default: 9999
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: null
    }
  },
  //props
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function () {
      //initialize warning and error messages to null to accomodate change in alert messages
      this.d_danger = null;
      this.d_warning = null; //loads current value stored from d_numberValue(data) into val(temp) variable val for readability of code

      var val = this.d_numberValue;

      if (typeof val == 'string') {
        val = Number(val);
      } //store min and max in variables for code readability


      var min = this.min;

      if (typeof min == 'string') {
        min = Number(min);
      }

      var max = this.max;

      if (typeof max == 'string') {
        max = Number(max);
      }

      var pattern = new RegExp(this.pattern); //if value for val(temp) exists check for warning triggers

      if (val || val == 0) {
        if (pattern && !val.toString().match(pattern)) {
          this.d_warning = 'Wrong format: Please follow the pattern ' + pattern;
        } else if (min && val < min) {
          this.d_warning = 'Invalid Value: Value is less than allowed minimum of ' + min;
        } else if (max && val > max) {
          this.d_warning = 'Invalid Value: Value is greater than allowed maximum of ' + max;
        } else {
          //emit/send new values to parent component v-model attribute
          this.$emit('input', val);
        }
      } //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
          if (this.required) {
            this.d_danger = 'Required field.';
          }
        }
    } //validate

  },

  //methods
  created() {
    //store values passed as props into d_numberValue for future manipulation
    if (this.value) {
      this.d_numberValue = this.value;
    }
  },

  //created
  beforeMount() {
    var alertMessage = this.alert;

    if (this.value) {
      this.validate();
    }

    if (alert) {
      if (alertMessage['error']) {
        this.d_danger = alertMessage['error'];
      } else if (alertMessage['warning']) {
        this.d_warning = alertMessage['warning'];
      } else if (alertMessage['success']) {
        this.d_success = alertMessage['success'];
      } else if (alertMessage['info']) {
        this.d_info = alertMessage['info'];
      }
    }
  },

  //beforeMount
  watch: {
    //send warning messages back to parent component
    warning: function (newValue) {
      this.$emit('notify', 'warning', newValue);
    },
    //send error messages back to parent component
    danger: function (newValue) {
      this.$emit('notify', 'error', newValue);
    }
  } //watch

}; //default

/* script */
const __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "numberInput",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n      " + _vm._s(_vm.label) + "\n      "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_numberValue,
      expression: "d_numberValue"
    }],
    attrs: {
      "type": "number",
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "required": _vm.required,
      "step": _vm.step,
      "min": _vm.min,
      "max": _vm.max
    },
    domProps: {
      "value": _vm.d_numberValue
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_numberValue = $event.target.value;
      }, _vm.validate]
    }
  }) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false
    }
  })], 1);
};

var __vue_staticRenderFns__$9 = [];
/* style */

const __vue_inject_styles__$9 = function (inject) {
  if (!inject) return;
  inject("data-v-666b5311_0", {
    source: ".numberInput[data-v-666b5311]{display:flex;flex-direction:column;flex-wrap:nowrap}.numberInput[data-v-666b5311]:focus,.numberInput[data-v-666b5311]:focus-within{border-color:var(--primaryColor)}.numberInput:focus-within>span[data-v-666b5311],.numberInput:focus>span[data-v-666b5311]{color:var(--primaryColor)}.numberInput.inline[data-v-666b5311]{flex-direction:row;flex-wrap:wrap}.numberInput.inline>label[data-v-666b5311]{margin-right:16px}.numberInput.inline>.inputResponse[data-v-666b5311]{margin-left:16px}.numberInput>label[data-v-666b5311]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.numberInput>label>abbr[data-v-666b5311]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.numberInput>label>span[data-v-666b5311]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.numberInput>label>span>abbr[data-v-666b5311]{color:inherit}.numberInput>label>input[type=checkbox][data-v-666b5311],.numberInput>label>input[type=radio][data-v-666b5311]{transform:scale(1.5);margin-right:8px}.numberInput>label>.vueButton[data-v-666b5311]{margin-left:auto}.numberInput>label.oneLiner[data-v-666b5311]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.numberInput>label.oneLiner>input[type=checkbox][data-v-666b5311],.numberInput>label.oneLiner>input[type=radio][data-v-666b5311]{display:none}.numberInput>label.oneLiner>input[type=checkbox]+span[data-v-666b5311],.numberInput>label.oneLiner>input[type=radio]+span[data-v-666b5311]{margin:0 8px;font-size:12px}.numberInput>label.oneLiner>input[type=checkbox]+span.fas[data-v-666b5311],.numberInput>label.oneLiner>input[type=radio]+span.fas[data-v-666b5311]{color:var(--primaryColor)}.numberInput>label.oneLiner.errorLabel[data-v-666b5311]{color:#a94442}.numberInput>div[data-v-666b5311]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.numberInput>div.inputResponse[data-v-666b5311]{width:100%;border:none}.numberInput>div.warningContainer[data-v-666b5311]{border-color:#8a6d3b;background-color:#fcf8e3}.numberInput>div.warningContainer[data-v-666b5311]:focus,.numberInput>div.warningContainer[data-v-666b5311]:focus-within{border-color:var(--primaryColor)}.numberInput>div.warningContainer:focus-within>span[data-v-666b5311],.numberInput>div.warningContainer:focus>span[data-v-666b5311]{color:#8a6d3b}.numberInput>div.warningContainer>span[data-v-666b5311]{color:#8a6d3b!important}.numberInput>div.errorContainer[data-v-666b5311]{border-color:#a94442;background-color:#f2dede}.numberInput>div.errorContainer[data-v-666b5311]:focus,.numberInput>div.errorContainer[data-v-666b5311]:focus-within{border-color:var(--primaryColor)}.numberInput>div.errorContainer:focus-within>span[data-v-666b5311],.numberInput>div.errorContainer:focus>span[data-v-666b5311]{color:#a94442}.numberInput>div.errorContainer>span[data-v-666b5311]{color:#a94442!important}.numberInput>div>datalist[data-v-666b5311],.numberInput>div>input[data-v-666b5311],.numberInput>div>select[data-v-666b5311],.numberInput>div>textarea[data-v-666b5311]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.numberInput>div>datalist[data-v-666b5311]:-webkit-autofill,.numberInput>div>datalist[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div>datalist[data-v-666b5311]:-webkit-autofill:hover,.numberInput>div>input[data-v-666b5311]:-webkit-autofill,.numberInput>div>input[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div>input[data-v-666b5311]:-webkit-autofill:hover,.numberInput>div>select[data-v-666b5311]:-webkit-autofill,.numberInput>div>select[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div>select[data-v-666b5311]:-webkit-autofill:hover,.numberInput>div>textarea[data-v-666b5311]:-webkit-autofill,.numberInput>div>textarea[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div>textarea[data-v-666b5311]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.numberInput>div>datalist option[data-v-666b5311]:first,.numberInput>div>input option[data-v-666b5311]:first,.numberInput>div>select option[data-v-666b5311]:first,.numberInput>div>textarea option[data-v-666b5311]:first{color:darken(@backgroundColor,25%)}.numberInput>div>datalist+span[data-v-666b5311],.numberInput>div>input+span[data-v-666b5311],.numberInput>div>select+span[data-v-666b5311],.numberInput>div>textarea+span[data-v-666b5311]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.numberInput>div>datalist:focus~.conditions[data-v-666b5311],.numberInput>div>input:focus~.conditions[data-v-666b5311],.numberInput>div>select:focus~.conditions[data-v-666b5311],.numberInput>div>textarea:focus~.conditions[data-v-666b5311]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.numberInput>div>datalist:focus~.conditions>div[data-v-666b5311],.numberInput>div>input:focus~.conditions>div[data-v-666b5311],.numberInput>div>select:focus~.conditions>div[data-v-666b5311],.numberInput>div>textarea:focus~.conditions>div[data-v-666b5311]{display:flex;flex-direction:row;padding:8px 16px}.numberInput>div>datalist:focus~.conditions>div>span[data-v-666b5311],.numberInput>div>input:focus~.conditions>div>span[data-v-666b5311],.numberInput>div>select:focus~.conditions>div>span[data-v-666b5311],.numberInput>div>textarea:focus~.conditions>div>span[data-v-666b5311]{margin-right:8px}.numberInput>div>datalist~.conditions[data-v-666b5311],.numberInput>div>input~.conditions[data-v-666b5311],.numberInput>div>select~.conditions[data-v-666b5311],.numberInput>div>textarea~.conditions[data-v-666b5311]{display:none}.numberInput>div.iconPadding>span[data-v-666b5311]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.numberInput>div.iconPadding>span+datalist[data-v-666b5311],.numberInput>div.iconPadding>span+input[data-v-666b5311],.numberInput>div.iconPadding>span+select[data-v-666b5311],.numberInput>div.iconPadding>span+textarea[data-v-666b5311]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.numberInput>div.iconPadding>span+datalist[data-v-666b5311]:-webkit-autofill,.numberInput>div.iconPadding>span+datalist[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div.iconPadding>span+datalist[data-v-666b5311]:-webkit-autofill:hover,.numberInput>div.iconPadding>span+input[data-v-666b5311]:-webkit-autofill,.numberInput>div.iconPadding>span+input[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div.iconPadding>span+input[data-v-666b5311]:-webkit-autofill:hover,.numberInput>div.iconPadding>span+select[data-v-666b5311]:-webkit-autofill,.numberInput>div.iconPadding>span+select[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div.iconPadding>span+select[data-v-666b5311]:-webkit-autofill:hover,.numberInput>div.iconPadding>span+textarea[data-v-666b5311]:-webkit-autofill,.numberInput>div.iconPadding>span+textarea[data-v-666b5311]:-webkit-autofill:focus,.numberInput>div.iconPadding>span+textarea[data-v-666b5311]:-webkit-autofill:hover{border-color:none}.numberInput>div.iconPadding>span+datalist+span[data-v-666b5311],.numberInput>div.iconPadding>span+input+span[data-v-666b5311],.numberInput>div.iconPadding>span+select+span[data-v-666b5311],.numberInput>div.iconPadding>span+textarea+span[data-v-666b5311]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.numberInput>div.iconPadding>span+datalist:focus~.conditions[data-v-666b5311],.numberInput>div.iconPadding>span+input:focus~.conditions[data-v-666b5311],.numberInput>div.iconPadding>span+select:focus~.conditions[data-v-666b5311],.numberInput>div.iconPadding>span+textarea:focus~.conditions[data-v-666b5311]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.numberInput>div.iconPadding>span+datalist:focus~.conditions>div[data-v-666b5311],.numberInput>div.iconPadding>span+input:focus~.conditions>div[data-v-666b5311],.numberInput>div.iconPadding>span+select:focus~.conditions>div[data-v-666b5311],.numberInput>div.iconPadding>span+textarea:focus~.conditions>div[data-v-666b5311]{display:flex;flex-direction:row;padding:8px 16px}.numberInput>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-666b5311],.numberInput>div.iconPadding>span+input:focus~.conditions>div>span[data-v-666b5311],.numberInput>div.iconPadding>span+select:focus~.conditions>div>span[data-v-666b5311],.numberInput>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-666b5311]{margin-right:8px}.numberInput>div.iconPadding>span+datalist~.conditions[data-v-666b5311],.numberInput>div.iconPadding>span+input~.conditions[data-v-666b5311],.numberInput>div.iconPadding>span+select~.conditions[data-v-666b5311],.numberInput>div.iconPadding>span+textarea~.conditions[data-v-666b5311]{display:none}.numberInput>div>input[type=file][data-v-666b5311]{padding-left:16px}.numberInput>div>select+span[data-v-666b5311]{left:40px}.numberInput>div.files[data-v-666b5311]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.numberInput>div.files>div[data-v-666b5311]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.numberInput>div.files>div>div[data-v-666b5311]{display:flex;flex-direction:row;flex-wrap:nowrap}.numberInput>div.files>div>div>span[data-v-666b5311]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.numberInput>div.files>div>div>.fileSize[data-v-666b5311]{position:absolute;right:8px;bottom:8px;font-size:12px}.numberInput>div.files>div>div>.removeFile[data-v-666b5311]{position:absolute;right:8px;top:8px}.numberInput .maskField[data-v-666b5311]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-666b5311;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.numberInput .maskField[data-v-666b5311],.numberInput .maskField *[data-v-666b5311],.numberInput .maskField[data-v-666b5311] ::placeholder,.numberInput .maskField div[data-v-666b5311],.numberInput .maskField div[data-v-666b5311]::placeholder,.numberInput .maskField[data-v-666b5311]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-666b5311{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-666b5311{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-666b5311{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-666b5311{from{background-position:top left}to{background-position:top right}}.numberInput>div[data-v-666b5311]{min-width:96px!important;max-width:96px!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$9 = "data-v-666b5311";
/* module identifier */

const __vue_module_identifier__$9 = undefined;
/* functional template */

const __vue_is_functional_template__$9 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, createInjector, undefined, undefined);

//
var script$a = {
  name: "PhoneInput",
  //props
  components: {
    inputResponse: __vue_component__$1
  },
  //data
  mixins: [validator, alerts],
  //mixins
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "phoneInput"
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },
    //sets the format/pattern for acceptable values for the input field
    //^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$
    //https://learning.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    // phone number with extension
    pattern: {
      required: false,
      type: [RegExp, String, null],
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "Enter text here..."
    },
    //sets the minlength attribute for the input field
    minlength: {
      required: false,
      type: Number,
      default: 10
    },
    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 14
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: "fas fa-phone"
    }
  },
  //props
  methods: {
    phoneMask: function (func) {
      setTimeout(() => {
        const v = func(this.d_value);

        if (v != this.d_value) {
          this.d_value = v;
        }
      }, 1);
    },
    //phoneMask
    mphone: function (v) {
      let r = v.replace(/\D/g, "");
      r = r.replace(/^0/, "");

      if (r.length > 10) {
        // 11+ digits. Format as 5+4.
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2-$3");
      } else if (r.length > 6) {
        // 6..10 digits. Format as 4+4
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2-$3");
      } else if (r.length > 3) {
        // 3..5 digits. Add (0XX..)
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2");
      } else {
        // 0..2 digits. Just add (0XX)
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1");
      }

      return r;
    } //mphone

  } //methods

}; //default

/* script */
const __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "phoneInput",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "type": "text",
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "minlength": _vm.minlength,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }, function ($event) {
        return _vm.phoneMask(_vm.mphone);
      }],
      "blur": _vm.validate
    }
  }) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false,
      "char-limit-reached": _vm.d_value ? _vm.maxlength - _vm.d_value.length <= 0 : false,
      "maxlength": _vm.maxlength
    }
  })], 1);
};

var __vue_staticRenderFns__$a = [];
/* style */

const __vue_inject_styles__$a = function (inject) {
  if (!inject) return;
  inject("data-v-c7a00684_0", {
    source: ".phoneInput[data-v-c7a00684]{display:flex;flex-direction:column;flex-wrap:nowrap}.phoneInput[data-v-c7a00684]:focus,.phoneInput[data-v-c7a00684]:focus-within{border-color:var(--primaryColor)}.phoneInput:focus-within>span[data-v-c7a00684],.phoneInput:focus>span[data-v-c7a00684]{color:var(--primaryColor)}.phoneInput.inline[data-v-c7a00684]{flex-direction:row;flex-wrap:wrap}.phoneInput.inline>label[data-v-c7a00684]{margin-right:16px}.phoneInput.inline>.inputResponse[data-v-c7a00684]{margin-left:16px}.phoneInput>label[data-v-c7a00684]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.phoneInput>label>abbr[data-v-c7a00684]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.phoneInput>label>span[data-v-c7a00684]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.phoneInput>label>span>abbr[data-v-c7a00684]{color:inherit}.phoneInput>label>input[type=checkbox][data-v-c7a00684],.phoneInput>label>input[type=radio][data-v-c7a00684]{transform:scale(1.5);margin-right:8px}.phoneInput>label>.vueButton[data-v-c7a00684]{margin-left:auto}.phoneInput>label.oneLiner[data-v-c7a00684]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.phoneInput>label.oneLiner>input[type=checkbox][data-v-c7a00684],.phoneInput>label.oneLiner>input[type=radio][data-v-c7a00684]{display:none}.phoneInput>label.oneLiner>input[type=checkbox]+span[data-v-c7a00684],.phoneInput>label.oneLiner>input[type=radio]+span[data-v-c7a00684]{margin:0 8px;font-size:12px}.phoneInput>label.oneLiner>input[type=checkbox]+span.fas[data-v-c7a00684],.phoneInput>label.oneLiner>input[type=radio]+span.fas[data-v-c7a00684]{color:var(--primaryColor)}.phoneInput>label.oneLiner.errorLabel[data-v-c7a00684]{color:#a94442}.phoneInput>div[data-v-c7a00684]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.phoneInput>div.inputResponse[data-v-c7a00684]{width:100%;border:none}.phoneInput>div.warningContainer[data-v-c7a00684]{border-color:#8a6d3b;background-color:#fcf8e3}.phoneInput>div.warningContainer[data-v-c7a00684]:focus,.phoneInput>div.warningContainer[data-v-c7a00684]:focus-within{border-color:var(--primaryColor)}.phoneInput>div.warningContainer:focus-within>span[data-v-c7a00684],.phoneInput>div.warningContainer:focus>span[data-v-c7a00684]{color:#8a6d3b}.phoneInput>div.warningContainer>span[data-v-c7a00684]{color:#8a6d3b!important}.phoneInput>div.errorContainer[data-v-c7a00684]{border-color:#a94442;background-color:#f2dede}.phoneInput>div.errorContainer[data-v-c7a00684]:focus,.phoneInput>div.errorContainer[data-v-c7a00684]:focus-within{border-color:var(--primaryColor)}.phoneInput>div.errorContainer:focus-within>span[data-v-c7a00684],.phoneInput>div.errorContainer:focus>span[data-v-c7a00684]{color:#a94442}.phoneInput>div.errorContainer>span[data-v-c7a00684]{color:#a94442!important}.phoneInput>div>datalist[data-v-c7a00684],.phoneInput>div>input[data-v-c7a00684],.phoneInput>div>select[data-v-c7a00684],.phoneInput>div>textarea[data-v-c7a00684]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.phoneInput>div>datalist[data-v-c7a00684]:-webkit-autofill,.phoneInput>div>datalist[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div>datalist[data-v-c7a00684]:-webkit-autofill:hover,.phoneInput>div>input[data-v-c7a00684]:-webkit-autofill,.phoneInput>div>input[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div>input[data-v-c7a00684]:-webkit-autofill:hover,.phoneInput>div>select[data-v-c7a00684]:-webkit-autofill,.phoneInput>div>select[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div>select[data-v-c7a00684]:-webkit-autofill:hover,.phoneInput>div>textarea[data-v-c7a00684]:-webkit-autofill,.phoneInput>div>textarea[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div>textarea[data-v-c7a00684]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.phoneInput>div>datalist option[data-v-c7a00684]:first,.phoneInput>div>input option[data-v-c7a00684]:first,.phoneInput>div>select option[data-v-c7a00684]:first,.phoneInput>div>textarea option[data-v-c7a00684]:first{color:darken(@backgroundColor,25%)}.phoneInput>div>datalist+span[data-v-c7a00684],.phoneInput>div>input+span[data-v-c7a00684],.phoneInput>div>select+span[data-v-c7a00684],.phoneInput>div>textarea+span[data-v-c7a00684]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.phoneInput>div>datalist:focus~.conditions[data-v-c7a00684],.phoneInput>div>input:focus~.conditions[data-v-c7a00684],.phoneInput>div>select:focus~.conditions[data-v-c7a00684],.phoneInput>div>textarea:focus~.conditions[data-v-c7a00684]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.phoneInput>div>datalist:focus~.conditions>div[data-v-c7a00684],.phoneInput>div>input:focus~.conditions>div[data-v-c7a00684],.phoneInput>div>select:focus~.conditions>div[data-v-c7a00684],.phoneInput>div>textarea:focus~.conditions>div[data-v-c7a00684]{display:flex;flex-direction:row;padding:8px 16px}.phoneInput>div>datalist:focus~.conditions>div>span[data-v-c7a00684],.phoneInput>div>input:focus~.conditions>div>span[data-v-c7a00684],.phoneInput>div>select:focus~.conditions>div>span[data-v-c7a00684],.phoneInput>div>textarea:focus~.conditions>div>span[data-v-c7a00684]{margin-right:8px}.phoneInput>div>datalist~.conditions[data-v-c7a00684],.phoneInput>div>input~.conditions[data-v-c7a00684],.phoneInput>div>select~.conditions[data-v-c7a00684],.phoneInput>div>textarea~.conditions[data-v-c7a00684]{display:none}.phoneInput>div.iconPadding>span[data-v-c7a00684]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.phoneInput>div.iconPadding>span+datalist[data-v-c7a00684],.phoneInput>div.iconPadding>span+input[data-v-c7a00684],.phoneInput>div.iconPadding>span+select[data-v-c7a00684],.phoneInput>div.iconPadding>span+textarea[data-v-c7a00684]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.phoneInput>div.iconPadding>span+datalist[data-v-c7a00684]:-webkit-autofill,.phoneInput>div.iconPadding>span+datalist[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div.iconPadding>span+datalist[data-v-c7a00684]:-webkit-autofill:hover,.phoneInput>div.iconPadding>span+input[data-v-c7a00684]:-webkit-autofill,.phoneInput>div.iconPadding>span+input[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div.iconPadding>span+input[data-v-c7a00684]:-webkit-autofill:hover,.phoneInput>div.iconPadding>span+select[data-v-c7a00684]:-webkit-autofill,.phoneInput>div.iconPadding>span+select[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div.iconPadding>span+select[data-v-c7a00684]:-webkit-autofill:hover,.phoneInput>div.iconPadding>span+textarea[data-v-c7a00684]:-webkit-autofill,.phoneInput>div.iconPadding>span+textarea[data-v-c7a00684]:-webkit-autofill:focus,.phoneInput>div.iconPadding>span+textarea[data-v-c7a00684]:-webkit-autofill:hover{border-color:none}.phoneInput>div.iconPadding>span+datalist+span[data-v-c7a00684],.phoneInput>div.iconPadding>span+input+span[data-v-c7a00684],.phoneInput>div.iconPadding>span+select+span[data-v-c7a00684],.phoneInput>div.iconPadding>span+textarea+span[data-v-c7a00684]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.phoneInput>div.iconPadding>span+datalist:focus~.conditions[data-v-c7a00684],.phoneInput>div.iconPadding>span+input:focus~.conditions[data-v-c7a00684],.phoneInput>div.iconPadding>span+select:focus~.conditions[data-v-c7a00684],.phoneInput>div.iconPadding>span+textarea:focus~.conditions[data-v-c7a00684]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.phoneInput>div.iconPadding>span+datalist:focus~.conditions>div[data-v-c7a00684],.phoneInput>div.iconPadding>span+input:focus~.conditions>div[data-v-c7a00684],.phoneInput>div.iconPadding>span+select:focus~.conditions>div[data-v-c7a00684],.phoneInput>div.iconPadding>span+textarea:focus~.conditions>div[data-v-c7a00684]{display:flex;flex-direction:row;padding:8px 16px}.phoneInput>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-c7a00684],.phoneInput>div.iconPadding>span+input:focus~.conditions>div>span[data-v-c7a00684],.phoneInput>div.iconPadding>span+select:focus~.conditions>div>span[data-v-c7a00684],.phoneInput>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-c7a00684]{margin-right:8px}.phoneInput>div.iconPadding>span+datalist~.conditions[data-v-c7a00684],.phoneInput>div.iconPadding>span+input~.conditions[data-v-c7a00684],.phoneInput>div.iconPadding>span+select~.conditions[data-v-c7a00684],.phoneInput>div.iconPadding>span+textarea~.conditions[data-v-c7a00684]{display:none}.phoneInput>div>input[type=file][data-v-c7a00684]{padding-left:16px}.phoneInput>div>select+span[data-v-c7a00684]{left:40px}.phoneInput>div.files[data-v-c7a00684]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.phoneInput>div.files>div[data-v-c7a00684]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.phoneInput>div.files>div>div[data-v-c7a00684]{display:flex;flex-direction:row;flex-wrap:nowrap}.phoneInput>div.files>div>div>span[data-v-c7a00684]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.phoneInput>div.files>div>div>.fileSize[data-v-c7a00684]{position:absolute;right:8px;bottom:8px;font-size:12px}.phoneInput>div.files>div>div>.removeFile[data-v-c7a00684]{position:absolute;right:8px;top:8px}.phoneInput .maskField[data-v-c7a00684]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-c7a00684;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.phoneInput .maskField[data-v-c7a00684],.phoneInput .maskField *[data-v-c7a00684],.phoneInput .maskField[data-v-c7a00684] ::placeholder,.phoneInput .maskField div[data-v-c7a00684],.phoneInput .maskField div[data-v-c7a00684]::placeholder,.phoneInput .maskField[data-v-c7a00684]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-c7a00684{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-c7a00684{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-c7a00684{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-c7a00684{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$a = "data-v-c7a00684";
/* module identifier */

const __vue_module_identifier__$a = undefined;
/* functional template */

const __vue_is_functional_template__$a = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, createInjector, undefined, undefined);

//
var script$b = {
  name: "SearchableDropdownList",
  mixins: [validator, alerts],
  //mixins
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "dropdownInput"
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: [String, Number, Array],
      default: function () {
        if (this.multiple) {
          return [];
        }

        return '';
      }
    },
    //looks for exact match
    //if set true wors like a dropdown list while if toggles between
    strict: {
      required: false,
      type: Boolean,
      default: true
    },
    //Array of options for user to select .
    options: {
      required: true,
      type: Array
    },
    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: /([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*/
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: function () {
        if (this.strict) {
          return "Select an option...";
        }

        return "Enter value or Select an option...";
      }
    },
    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 50
    },
    //sets the multiple attribute for the input field to accept multiple values
    multiple: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
  },

  //props
  created() {
    // sets flag to false for using default validator
    this.d_needsValidation = false; //store value of prop in temp variable for code readability

    const val = this.value;
    const options = this.options;
    const strict = this.strict;
    const multiple = this.multiple; //if val is a singlevalue, check if it is na acceptable input

    if (!multiple && (typeof val == "string" || typeof val == "number")) {
      //if value is an acceptable input store it in d_value for future manipulation
      if (options && options.indexOf(val) != -1 || !strict) {
        this.d_value = val;
      } //if not trigger alert and set error message
      else if (this.strict) {
          this.error = "Invalid Input: The preset value " + val + " is not included in the options for the dropdown.";
        }
    } //if val is an array check if each value towards acceptable values as input
    else if (multiple && Array.isArray(val)) {
        const tempVal = [];
        const alertVal = []; //loop through each value to check for validity of input value

        for (const v in val) {
          //if value is an acceptable input store sit intempVal for future manipulation
          if (options && options.indexOf(v) != -1 || !strict) {
            tempVal.push(v);
          } //if not save it in a temp errorval variable for further use to trigger alert
          else if (this.strict) {
              alertVal.push(v);
            }
        } //save acceptable values back to d_value for future manipulation


        this.d_value = tempVal; //if errorVal exists trigger an alert and set d_warning message

        if (alertVal) {
          this.d_danger = "Invalid Input: The preset value(s) " + alertVal + " is/are not included in the options for the dropdown.";
        }
      } else if (val) {
        this.d_danger = "Invalid Input: The preset value(s) " + val + " are not valid";
      }
  },

  //created
  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function () {
      //initialize d_warning and error messages to null to accomodate change in alert messages
      this.d_danger = null;
      this.d_warning = null; //loads current value stored from d_value(data) into val(temp) variable val for readability of code

      const val = this.d_value; //if value for val(temp) exists check for d_warning triggers

      if (val) {
        //if an acceptable value exists,emit/send new values to parent component v-model attribute
        //if not then trigger d_warning and set d_warning message
        if (this.options.indexOf(val) != -1 || !this.strict) {
          this.$emit("value", val);
        } //if options do not include the optio na dn user customized input is not acceptable then trigger alert and set d_warning message
        else if (this.strict) {
            this.d_warning = "Invalid Input. Please select an option from the options below.";
          }
      } //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
          if (this.required) {
            this.d_danger = "Required field.";
          }
        }
    } //validate

  } //watch

}; //default

/* script */
const __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "searchableDropdownList",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n  " + _vm._s(_vm.label) + "\n  "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "list": _vm.name,
      "placeholder": _vm.placeholder,
      "multiple": _vm.multiple,
      "required": _vm.required,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "blur": _vm.validate,
      "input": function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('datalist', {
    attrs: {
      "id": _vm.name
    }
  }, _vm._l(_vm.options, function (option, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": option
      }
    }, [_vm._v("\n    " + _vm._s(option) + "\n  ")]);
  }), 0)]), _vm._v(" "), _c('input-response', {
    attrs: {
      "d_warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false
    }
  })], 1);
};

var __vue_staticRenderFns__$b = [];
/* style */

const __vue_inject_styles__$b = function (inject) {
  if (!inject) return;
  inject("data-v-70d28852_0", {
    source: ".searchableDropdownList[data-v-70d28852]{min-width:160px;display:flex;flex-direction:column;flex-wrap:nowrap}.searchableDropdownList[data-v-70d28852]:focus,.searchableDropdownList[data-v-70d28852]:focus-within{border-color:var(--primaryColor)}.searchableDropdownList:focus-within>span[data-v-70d28852],.searchableDropdownList:focus>span[data-v-70d28852]{color:var(--primaryColor)}.searchableDropdownList.inline[data-v-70d28852]{flex-direction:row;flex-wrap:wrap}.searchableDropdownList.inline>label[data-v-70d28852]{margin-right:16px}.searchableDropdownList.inline>.inputResponse[data-v-70d28852]{margin-left:16px}.searchableDropdownList>label[data-v-70d28852]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.searchableDropdownList>label>abbr[data-v-70d28852]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.searchableDropdownList>label>span[data-v-70d28852]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.searchableDropdownList>label>span>abbr[data-v-70d28852]{color:inherit}.searchableDropdownList>label>input[type=checkbox][data-v-70d28852],.searchableDropdownList>label>input[type=radio][data-v-70d28852]{transform:scale(1.5);margin-right:8px}.searchableDropdownList>label>.vueButton[data-v-70d28852]{margin-left:auto}.searchableDropdownList>label.oneLiner[data-v-70d28852]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.searchableDropdownList>label.oneLiner>input[type=checkbox][data-v-70d28852],.searchableDropdownList>label.oneLiner>input[type=radio][data-v-70d28852]{display:none}.searchableDropdownList>label.oneLiner>input[type=checkbox]+span[data-v-70d28852],.searchableDropdownList>label.oneLiner>input[type=radio]+span[data-v-70d28852]{margin:0 8px;font-size:12px}.searchableDropdownList>label.oneLiner>input[type=checkbox]+span.fas[data-v-70d28852],.searchableDropdownList>label.oneLiner>input[type=radio]+span.fas[data-v-70d28852]{color:var(--primaryColor)}.searchableDropdownList>label.oneLiner.errorLabel[data-v-70d28852]{color:#a94442}.searchableDropdownList>div[data-v-70d28852]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.searchableDropdownList>div.inputResponse[data-v-70d28852]{width:100%;border:none}.searchableDropdownList>div.warningContainer[data-v-70d28852]{border-color:#8a6d3b;background-color:#fcf8e3}.searchableDropdownList>div.warningContainer[data-v-70d28852]:focus,.searchableDropdownList>div.warningContainer[data-v-70d28852]:focus-within{border-color:var(--primaryColor)}.searchableDropdownList>div.warningContainer:focus-within>span[data-v-70d28852],.searchableDropdownList>div.warningContainer:focus>span[data-v-70d28852]{color:#8a6d3b}.searchableDropdownList>div.warningContainer>span[data-v-70d28852]{color:#8a6d3b!important}.searchableDropdownList>div.errorContainer[data-v-70d28852]{border-color:#a94442;background-color:#f2dede}.searchableDropdownList>div.errorContainer[data-v-70d28852]:focus,.searchableDropdownList>div.errorContainer[data-v-70d28852]:focus-within{border-color:var(--primaryColor)}.searchableDropdownList>div.errorContainer:focus-within>span[data-v-70d28852],.searchableDropdownList>div.errorContainer:focus>span[data-v-70d28852]{color:#a94442}.searchableDropdownList>div.errorContainer>span[data-v-70d28852]{color:#a94442!important}.searchableDropdownList>div>datalist[data-v-70d28852],.searchableDropdownList>div>input[data-v-70d28852],.searchableDropdownList>div>select[data-v-70d28852],.searchableDropdownList>div>textarea[data-v-70d28852]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.searchableDropdownList>div>datalist[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div>datalist[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div>datalist[data-v-70d28852]:-webkit-autofill:hover,.searchableDropdownList>div>input[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div>input[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div>input[data-v-70d28852]:-webkit-autofill:hover,.searchableDropdownList>div>select[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div>select[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div>select[data-v-70d28852]:-webkit-autofill:hover,.searchableDropdownList>div>textarea[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div>textarea[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div>textarea[data-v-70d28852]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.searchableDropdownList>div>datalist option[data-v-70d28852]:first,.searchableDropdownList>div>input option[data-v-70d28852]:first,.searchableDropdownList>div>select option[data-v-70d28852]:first,.searchableDropdownList>div>textarea option[data-v-70d28852]:first{color:darken(@backgroundColor,25%)}.searchableDropdownList>div>datalist+span[data-v-70d28852],.searchableDropdownList>div>input+span[data-v-70d28852],.searchableDropdownList>div>select+span[data-v-70d28852],.searchableDropdownList>div>textarea+span[data-v-70d28852]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.searchableDropdownList>div>datalist:focus~.conditions[data-v-70d28852],.searchableDropdownList>div>input:focus~.conditions[data-v-70d28852],.searchableDropdownList>div>select:focus~.conditions[data-v-70d28852],.searchableDropdownList>div>textarea:focus~.conditions[data-v-70d28852]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.searchableDropdownList>div>datalist:focus~.conditions>div[data-v-70d28852],.searchableDropdownList>div>input:focus~.conditions>div[data-v-70d28852],.searchableDropdownList>div>select:focus~.conditions>div[data-v-70d28852],.searchableDropdownList>div>textarea:focus~.conditions>div[data-v-70d28852]{display:flex;flex-direction:row;padding:8px 16px}.searchableDropdownList>div>datalist:focus~.conditions>div>span[data-v-70d28852],.searchableDropdownList>div>input:focus~.conditions>div>span[data-v-70d28852],.searchableDropdownList>div>select:focus~.conditions>div>span[data-v-70d28852],.searchableDropdownList>div>textarea:focus~.conditions>div>span[data-v-70d28852]{margin-right:8px}.searchableDropdownList>div>datalist~.conditions[data-v-70d28852],.searchableDropdownList>div>input~.conditions[data-v-70d28852],.searchableDropdownList>div>select~.conditions[data-v-70d28852],.searchableDropdownList>div>textarea~.conditions[data-v-70d28852]{display:none}.searchableDropdownList>div.iconPadding>span[data-v-70d28852]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.searchableDropdownList>div.iconPadding>span+datalist[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+input[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+select[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+textarea[data-v-70d28852]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.searchableDropdownList>div.iconPadding>span+datalist[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div.iconPadding>span+datalist[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div.iconPadding>span+datalist[data-v-70d28852]:-webkit-autofill:hover,.searchableDropdownList>div.iconPadding>span+input[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div.iconPadding>span+input[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div.iconPadding>span+input[data-v-70d28852]:-webkit-autofill:hover,.searchableDropdownList>div.iconPadding>span+select[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div.iconPadding>span+select[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div.iconPadding>span+select[data-v-70d28852]:-webkit-autofill:hover,.searchableDropdownList>div.iconPadding>span+textarea[data-v-70d28852]:-webkit-autofill,.searchableDropdownList>div.iconPadding>span+textarea[data-v-70d28852]:-webkit-autofill:focus,.searchableDropdownList>div.iconPadding>span+textarea[data-v-70d28852]:-webkit-autofill:hover{border-color:none}.searchableDropdownList>div.iconPadding>span+datalist+span[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+input+span[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+select+span[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+textarea+span[data-v-70d28852]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.searchableDropdownList>div.iconPadding>span+datalist:focus~.conditions[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+input:focus~.conditions[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+select:focus~.conditions[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+textarea:focus~.conditions[data-v-70d28852]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.searchableDropdownList>div.iconPadding>span+datalist:focus~.conditions>div[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+input:focus~.conditions>div[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+select:focus~.conditions>div[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+textarea:focus~.conditions>div[data-v-70d28852]{display:flex;flex-direction:row;padding:8px 16px}.searchableDropdownList>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+input:focus~.conditions>div>span[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+select:focus~.conditions>div>span[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-70d28852]{margin-right:8px}.searchableDropdownList>div.iconPadding>span+datalist~.conditions[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+input~.conditions[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+select~.conditions[data-v-70d28852],.searchableDropdownList>div.iconPadding>span+textarea~.conditions[data-v-70d28852]{display:none}.searchableDropdownList>div>input[type=file][data-v-70d28852]{padding-left:16px}.searchableDropdownList>div>select+span[data-v-70d28852]{left:40px}.searchableDropdownList>div.files[data-v-70d28852]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.searchableDropdownList>div.files>div[data-v-70d28852]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.searchableDropdownList>div.files>div>div[data-v-70d28852]{display:flex;flex-direction:row;flex-wrap:nowrap}.searchableDropdownList>div.files>div>div>span[data-v-70d28852]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.searchableDropdownList>div.files>div>div>.fileSize[data-v-70d28852]{position:absolute;right:8px;bottom:8px;font-size:12px}.searchableDropdownList>div.files>div>div>.removeFile[data-v-70d28852]{position:absolute;right:8px;top:8px}.searchableDropdownList .maskField[data-v-70d28852]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-70d28852;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.searchableDropdownList .maskField[data-v-70d28852],.searchableDropdownList .maskField *[data-v-70d28852],.searchableDropdownList .maskField[data-v-70d28852] ::placeholder,.searchableDropdownList .maskField div[data-v-70d28852],.searchableDropdownList .maskField div[data-v-70d28852]::placeholder,.searchableDropdownList .maskField[data-v-70d28852]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-70d28852{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-70d28852{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-70d28852{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-70d28852{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$b = "data-v-70d28852";
/* module identifier */

const __vue_module_identifier__$b = undefined;
/* functional template */

const __vue_is_functional_template__$b = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, createInjector, undefined, undefined);

//
var script$c = {
  name: 'vueDate',
  mixins: [validator, alerts],
  //mixins
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: null
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: 'dateInput'
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: [Date, String],
      default: function () {
        if (this.setDefaultDate) {
          return this.getDate();
        }

        return null;
      }
    },
    //if true sets the default date for the field to be current/todays date.
    //value prop takes presedence over this props
    //if value is set, setDefault Date status is neglected
    setDefaultDate: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the min attribute for the input field
    min: {
      required: false,
      type: [Date, String],
      default: '1990-01-01'
    },
    //sets the max attribute for the input field
    max: {
      required: false,
      type: [Date, String],
      default: '2030-01-01'
    },
    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String],
      default: function () {
        return new RegExp(/^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/);
      }
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: null
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  //props
  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function () {
      // console.log(this.d_value)
      //initialize d_warning and error messages to null to accomodate change in alert messages
      this.d_danger = null;
      this.d_warning = null; //loads current value stored from data variables into temp variable val for readability of code

      var val = this.d_value;
      var min = this.min;
      var max = this.max;
      var pattern = new RegExp(this.pattern); //emit/send new values to parent component v-model attribute

      this.$emit('input', val); //if value for val(temp) exists check for d_warning triggers

      if (val) {
        if (min && this.isDateHigherOrSameAs(min, val)) {
          this.d_warning = 'Invalid Date: Please select a date after ' + min;
        } else if (max && this.isDateHigherOrSameAs(val, max)) {
          this.d_warning = 'Invalid Date: Please select a date before ' + max;
        } else if (pattern && !val.match(pattern)) {
          // console.log(val.test(pattern), val, pattern)
          this.d_warning = 'Wrong date format: Please follow the pattern ' + pattern;
        }
      } //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
          if (this.required) {
            this.d_danger = 'Required field: Please select a valid date value';
            return;
          }
        }
    },
    //validate
    //compare string dates send a false value if lowValue is lower to highValue
    //sends true if lowValue is higher than or equal to highvalue
    isDateHigherOrSameAs: function (lowValue, highValue) {
      //store date min year and convert them into numbers
      var tempLow = lowValue.substr(0, 4);
      var lowYear = parseInt(tempLow, 10); //store date max year and convert them into numbers

      var tempHigh = highValue.substr(0, 4);
      var highYear = parseInt(tempHigh, 10); //check if year is a number

      if (typeof lowYear == 'number' && typeof highYear == 'number') {
        //compare years and send a boolean value if not different
        if (lowYear < highYear) {
          return false;
        } else if (lowYear > highYear) {
          return true;
        } //if years are same compare months
        else {
            //stores the date min month and converts it into number
            vtempLow = lowValue.substr(5, 2);
            var lowMonth = parseInt(tempLow, 10); //stores the date max month and converts it into number

            tempHigh = highValue.substr(5, 2);
            var highMonth = parseInt(tempHigh, 10); //check if month are number's

            if (typeof lowMonth == 'number' && typeof highMonth == 'number') {
              //compare month and send a boolean value if not different
              if (lowMonth < highMonth) {
                return false;
              } else if (lowMonth > highMonth) {
                return true;
              } //if months are same compare dates
              else {
                  //stores the date min date and converts it into number
                  tempLow = lowValue.substr(8, 2);
                  var lowDate = parseInt(tempLow, 10); //stores the date max date and converts it into number

                  tempHigh = highValue.substr(8, 2);
                  var highDate = parseInt(tempHigh, 10); //check if date are number's

                  if (typeof lowDate == 'number' && typeof highDate == 'number') {
                    //compare date and send a boolean false if low date is lower than lowValue
                    //send a boolean true if its greater or equal to highdate
                    if (lowDate < highDate) {
                      return false;
                    } else if (lowDate >= highDate) {
                      return true;
                    }
                  }
                }
            }
          }
      } // if either the year/month/date from eithr lowValue or highValue are not numbers then trigger an alert and set error message


      this.d_danger = 'Invalid Input: Please make sure value is either a Date or a String';
      return null;
    },
    //isDateHigherOrSameAs
    //return todays date converted into string
    getDate: function () {
      //get todays date
      var today = new Date(); //format the date in a YYYY-MM-DD format and set it to temp variable

      var year = today.getFullYear();
      var month = this.toTwoDigits(today.getMonth() + 1);
      var day = this.toTwoDigits(today.getDate());
      var temp = year + '-' + month + '-' + day; //sendoremit todays date as default date for the field

      this.$emit("value", temp);
      return temp;
    },
    //getDate
    //convert input number into a 2 digit number
    toTwoDigits: function (num) {
      if (num < 10) {
        return '0' + num;
      }

      return num;
    } //toTwoDigits

  },

  //methods
  created() {
    this.d_needsValidation = false; //store values passed as props into d_value for future manipulation
    //if a value is not passed it checks if a setDefaultDate value flag is checked

    if (this.value) {
      this.d_value = this.value;
    } //if a setDefaultDate flag is checked it sets the date to todays date
    else if (this.setDefaultDate) {
        this.d_value = this.getDate();
      }
  } //created


}; //default

/* script */
const __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vueDate",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "type": "date",
      "name": _vm.name,
      "max": _vm.max,
      "min": _vm.min,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "blur": _vm.validate,
      "input": function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "d_warning": _vm.d_warning,
      "error": _vm.d_danger
    }
  })], 1);
};

var __vue_staticRenderFns__$c = [];
/* style */

const __vue_inject_styles__$c = function (inject) {
  if (!inject) return;
  inject("data-v-438648c2_0", {
    source: ".vueDate[data-v-438648c2]{min-width:200px;max-width:240px;display:flex;flex-direction:column;flex-wrap:nowrap}.vueDate[data-v-438648c2]:focus,.vueDate[data-v-438648c2]:focus-within{border-color:var(--primaryColor)}.vueDate:focus-within>span[data-v-438648c2],.vueDate:focus>span[data-v-438648c2]{color:var(--primaryColor)}.vueDate.inline[data-v-438648c2]{flex-direction:row;flex-wrap:wrap}.vueDate.inline>label[data-v-438648c2]{margin-right:16px}.vueDate.inline>.inputResponse[data-v-438648c2]{margin-left:16px}.vueDate>label[data-v-438648c2]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.vueDate>label>abbr[data-v-438648c2]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.vueDate>label>span[data-v-438648c2]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.vueDate>label>span>abbr[data-v-438648c2]{color:inherit}.vueDate>label>input[type=checkbox][data-v-438648c2],.vueDate>label>input[type=radio][data-v-438648c2]{transform:scale(1.5);margin-right:8px}.vueDate>label>.vueButton[data-v-438648c2]{margin-left:auto}.vueDate>label.oneLiner[data-v-438648c2]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.vueDate>label.oneLiner>input[type=checkbox][data-v-438648c2],.vueDate>label.oneLiner>input[type=radio][data-v-438648c2]{display:none}.vueDate>label.oneLiner>input[type=checkbox]+span[data-v-438648c2],.vueDate>label.oneLiner>input[type=radio]+span[data-v-438648c2]{margin:0 8px;font-size:12px}.vueDate>label.oneLiner>input[type=checkbox]+span.fas[data-v-438648c2],.vueDate>label.oneLiner>input[type=radio]+span.fas[data-v-438648c2]{color:var(--primaryColor)}.vueDate>label.oneLiner.errorLabel[data-v-438648c2]{color:#a94442}.vueDate>div[data-v-438648c2]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.vueDate>div.inputResponse[data-v-438648c2]{width:100%;border:none}.vueDate>div.warningContainer[data-v-438648c2]{border-color:#8a6d3b;background-color:#fcf8e3}.vueDate>div.warningContainer[data-v-438648c2]:focus,.vueDate>div.warningContainer[data-v-438648c2]:focus-within{border-color:var(--primaryColor)}.vueDate>div.warningContainer:focus-within>span[data-v-438648c2],.vueDate>div.warningContainer:focus>span[data-v-438648c2]{color:#8a6d3b}.vueDate>div.warningContainer>span[data-v-438648c2]{color:#8a6d3b!important}.vueDate>div.errorContainer[data-v-438648c2]{border-color:#a94442;background-color:#f2dede}.vueDate>div.errorContainer[data-v-438648c2]:focus,.vueDate>div.errorContainer[data-v-438648c2]:focus-within{border-color:var(--primaryColor)}.vueDate>div.errorContainer:focus-within>span[data-v-438648c2],.vueDate>div.errorContainer:focus>span[data-v-438648c2]{color:#a94442}.vueDate>div.errorContainer>span[data-v-438648c2]{color:#a94442!important}.vueDate>div>datalist[data-v-438648c2],.vueDate>div>input[data-v-438648c2],.vueDate>div>select[data-v-438648c2],.vueDate>div>textarea[data-v-438648c2]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.vueDate>div>datalist[data-v-438648c2]:-webkit-autofill,.vueDate>div>datalist[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div>datalist[data-v-438648c2]:-webkit-autofill:hover,.vueDate>div>input[data-v-438648c2]:-webkit-autofill,.vueDate>div>input[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div>input[data-v-438648c2]:-webkit-autofill:hover,.vueDate>div>select[data-v-438648c2]:-webkit-autofill,.vueDate>div>select[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div>select[data-v-438648c2]:-webkit-autofill:hover,.vueDate>div>textarea[data-v-438648c2]:-webkit-autofill,.vueDate>div>textarea[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div>textarea[data-v-438648c2]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.vueDate>div>datalist option[data-v-438648c2]:first,.vueDate>div>input option[data-v-438648c2]:first,.vueDate>div>select option[data-v-438648c2]:first,.vueDate>div>textarea option[data-v-438648c2]:first{color:darken(@backgroundColor,25%)}.vueDate>div>datalist+span[data-v-438648c2],.vueDate>div>input+span[data-v-438648c2],.vueDate>div>select+span[data-v-438648c2],.vueDate>div>textarea+span[data-v-438648c2]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.vueDate>div>datalist:focus~.conditions[data-v-438648c2],.vueDate>div>input:focus~.conditions[data-v-438648c2],.vueDate>div>select:focus~.conditions[data-v-438648c2],.vueDate>div>textarea:focus~.conditions[data-v-438648c2]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.vueDate>div>datalist:focus~.conditions>div[data-v-438648c2],.vueDate>div>input:focus~.conditions>div[data-v-438648c2],.vueDate>div>select:focus~.conditions>div[data-v-438648c2],.vueDate>div>textarea:focus~.conditions>div[data-v-438648c2]{display:flex;flex-direction:row;padding:8px 16px}.vueDate>div>datalist:focus~.conditions>div>span[data-v-438648c2],.vueDate>div>input:focus~.conditions>div>span[data-v-438648c2],.vueDate>div>select:focus~.conditions>div>span[data-v-438648c2],.vueDate>div>textarea:focus~.conditions>div>span[data-v-438648c2]{margin-right:8px}.vueDate>div>datalist~.conditions[data-v-438648c2],.vueDate>div>input~.conditions[data-v-438648c2],.vueDate>div>select~.conditions[data-v-438648c2],.vueDate>div>textarea~.conditions[data-v-438648c2]{display:none}.vueDate>div.iconPadding>span[data-v-438648c2]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.vueDate>div.iconPadding>span+datalist[data-v-438648c2],.vueDate>div.iconPadding>span+input[data-v-438648c2],.vueDate>div.iconPadding>span+select[data-v-438648c2],.vueDate>div.iconPadding>span+textarea[data-v-438648c2]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.vueDate>div.iconPadding>span+datalist[data-v-438648c2]:-webkit-autofill,.vueDate>div.iconPadding>span+datalist[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div.iconPadding>span+datalist[data-v-438648c2]:-webkit-autofill:hover,.vueDate>div.iconPadding>span+input[data-v-438648c2]:-webkit-autofill,.vueDate>div.iconPadding>span+input[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div.iconPadding>span+input[data-v-438648c2]:-webkit-autofill:hover,.vueDate>div.iconPadding>span+select[data-v-438648c2]:-webkit-autofill,.vueDate>div.iconPadding>span+select[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div.iconPadding>span+select[data-v-438648c2]:-webkit-autofill:hover,.vueDate>div.iconPadding>span+textarea[data-v-438648c2]:-webkit-autofill,.vueDate>div.iconPadding>span+textarea[data-v-438648c2]:-webkit-autofill:focus,.vueDate>div.iconPadding>span+textarea[data-v-438648c2]:-webkit-autofill:hover{border-color:none}.vueDate>div.iconPadding>span+datalist+span[data-v-438648c2],.vueDate>div.iconPadding>span+input+span[data-v-438648c2],.vueDate>div.iconPadding>span+select+span[data-v-438648c2],.vueDate>div.iconPadding>span+textarea+span[data-v-438648c2]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.vueDate>div.iconPadding>span+datalist:focus~.conditions[data-v-438648c2],.vueDate>div.iconPadding>span+input:focus~.conditions[data-v-438648c2],.vueDate>div.iconPadding>span+select:focus~.conditions[data-v-438648c2],.vueDate>div.iconPadding>span+textarea:focus~.conditions[data-v-438648c2]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.vueDate>div.iconPadding>span+datalist:focus~.conditions>div[data-v-438648c2],.vueDate>div.iconPadding>span+input:focus~.conditions>div[data-v-438648c2],.vueDate>div.iconPadding>span+select:focus~.conditions>div[data-v-438648c2],.vueDate>div.iconPadding>span+textarea:focus~.conditions>div[data-v-438648c2]{display:flex;flex-direction:row;padding:8px 16px}.vueDate>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-438648c2],.vueDate>div.iconPadding>span+input:focus~.conditions>div>span[data-v-438648c2],.vueDate>div.iconPadding>span+select:focus~.conditions>div>span[data-v-438648c2],.vueDate>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-438648c2]{margin-right:8px}.vueDate>div.iconPadding>span+datalist~.conditions[data-v-438648c2],.vueDate>div.iconPadding>span+input~.conditions[data-v-438648c2],.vueDate>div.iconPadding>span+select~.conditions[data-v-438648c2],.vueDate>div.iconPadding>span+textarea~.conditions[data-v-438648c2]{display:none}.vueDate>div>input[type=file][data-v-438648c2]{padding-left:16px}.vueDate>div>select+span[data-v-438648c2]{left:40px}.vueDate>div.files[data-v-438648c2]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.vueDate>div.files>div[data-v-438648c2]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.vueDate>div.files>div>div[data-v-438648c2]{display:flex;flex-direction:row;flex-wrap:nowrap}.vueDate>div.files>div>div>span[data-v-438648c2]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.vueDate>div.files>div>div>.fileSize[data-v-438648c2]{position:absolute;right:8px;bottom:8px;font-size:12px}.vueDate>div.files>div>div>.removeFile[data-v-438648c2]{position:absolute;right:8px;top:8px}.vueDate .maskField[data-v-438648c2]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-438648c2;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.vueDate .maskField[data-v-438648c2],.vueDate .maskField *[data-v-438648c2],.vueDate .maskField[data-v-438648c2] ::placeholder,.vueDate .maskField div[data-v-438648c2],.vueDate .maskField div[data-v-438648c2]::placeholder,.vueDate .maskField[data-v-438648c2]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-438648c2{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-438648c2{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-438648c2{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-438648c2{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$c = "data-v-438648c2";
/* module identifier */

const __vue_module_identifier__$c = undefined;
/* functional template */

const __vue_is_functional_template__$c = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, createInjector, undefined, undefined);

//
var script$d = {
  name: "VueForm",
  //props
  mixins: [alerts],
  components: {
    vueButton: __vue_component__$4
  },
  //data
  props: {
    alert: {
      required: true,
      type: Object,
      default: () => {
        return {
          error: "",
          warning
        };
      }
    },
    ctx: {
      required: true,
      type: Function
    },
    form: {
      required: false,
      type: String,
      default: ""
    },
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    validate: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    validInput: function () {
      if (this.validate) {
        const alerts = this.alerts;
        const form = this.$refs[this.form];

        if (form && !alerts["error"] && !alerts["warning"]) {
          const inputs = [...Array.from(form.getElementsByTagName("select")), ...Array.from(form.getElementsByTagName("input"))];

          for (let index = 0; index < inputs.length; ++index) {
            if (inputs[index].required && !inputs[index].value) {
              return false;
            } //skipPAsswordMatch value check


            if (inputs[index].type === "password") {
              index++;
            }
          }

          return true;
        }

        return false;
      }

      return true;
    } //validInput

  } //computed

}; //default

/* script */
const __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('form', {
    ref: _vm.form,
    staticClass: "vueForm",
    attrs: {
      "id": _vm.form,
      "name": _vm.form,
      "novalidate": _vm.validate,
      "autocomplete": _vm.autocomplete
    },
    on: {
      "submit": _vm.ctx
    }
  }, [_c('div', {
    staticClass: "formElements"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "formButtons"
  }, [_c('vue-button', {
    attrs: {
      "type": "submit",
      "text": "Submit",
      "tag": "formSubmitButton",
      "category": "small",
      "icon": "fas fa-clipboard-check",
      "disabled": !_vm.validInput,
      "ctx": _vm.ctx
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "btn",
    attrs: {
      "type": "reset",
      "value": "Reset"
    }
  })], 1)]);
};

var __vue_staticRenderFns__$d = [];
/* style */

const __vue_inject_styles__$d = function (inject) {
  if (!inject) return;
  inject("data-v-174e7dfe_0", {
    source: ".vueForm[data-v-174e7dfe]{display:flex;flex-direction:column;flex-wrap:nowrap;margin:0 auto}.vueForm>div[data-v-174e7dfe]{display:flex}.vueForm>div.formElements[data-v-174e7dfe]{flex-direction:column}.vueForm>div.formButtons[data-v-174e7dfe]{flex-direction:row-reverse}.vueForm>div.formButtons>input[data-v-174e7dfe]{font-size:16px;margin-right:8px}.vueForm>div.formButtons>input[data-v-174e7dfe]:first-child{margin-right:0}.vueForm>div.formButtons>input[type=reset][data-v-174e7dfe]{background-color:transparent}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$d = "data-v-174e7dfe";
/* module identifier */

const __vue_module_identifier__$d = undefined;
/* functional template */

const __vue_is_functional_template__$d = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
var script$e = {
  name: 'vueInfo',
  props: {
    //sets heading/Label for the input field
    label: {
      required: true,
      type: String,
      Default: null
    },
    //users have to pass preset values for the field
    value: {
      required: true,
      type: [String, Number, Boolean, Array],
      default: 'default: No Value passed'
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    }
  } //props

}; //default

/* script */
const __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: {
      vueInfo: true,
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      maskField: _vm.mask
    },
    domProps: {
      "textContent": _vm._s(_vm.value)
    }
  })]);
};

var __vue_staticRenderFns__$e = [];
/* style */

const __vue_inject_styles__$e = function (inject) {
  if (!inject) return;
  inject("data-v-cb47a5f4_0", {
    source: ".vueInfo>div[data-v-cb47a5f4]{margin-left:18px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$e = "data-v-cb47a5f4";
/* module identifier */

const __vue_module_identifier__$e = undefined;
/* functional template */

const __vue_is_functional_template__$e = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, createInjector, undefined, undefined);

//
var script$f = {
  name: "VueTextarea",
  //props
  mixins: [validator, alerts],
  components: {
    inputResponse: __vue_component__$1
  },
  //data
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "textareaInput"
    },
    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: ""
    },
    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: null
    },
    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "Click to enter"
    },
    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 256
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    }
  } //props

}; //default

/* script */
const __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vueTextarea",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    }
  }, [_vm._v("\n  " + _vm._s(_vm.label) + "\n  "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "pattern": _vm.pattern,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "required": _vm.required
    },
    domProps: {
      "value": _vm.d_value
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.d_value = $event.target.value;
      }, _vm.validate]
    }
  }) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "warning": _vm.alert ? _vm.alert.warning : false,
      "error": _vm.alert ? _vm.alert.error : false,
      "char-limit-reached": _vm.d_value ? _vm.maxlength - _vm.d_value.length <= 0 : false,
      "maxlength": _vm.maxlength
    }
  })], 1);
};

var __vue_staticRenderFns__$f = [];
/* style */

const __vue_inject_styles__$f = function (inject) {
  if (!inject) return;
  inject("data-v-a4cb8b1e_0", {
    source: ".vueTextarea[data-v-a4cb8b1e]{min-width:160px;display:flex;flex-direction:column;flex-wrap:nowrap}.vueTextarea[data-v-a4cb8b1e]:focus,.vueTextarea[data-v-a4cb8b1e]:focus-within{border-color:var(--primaryColor)}.vueTextarea:focus-within>span[data-v-a4cb8b1e],.vueTextarea:focus>span[data-v-a4cb8b1e]{color:var(--primaryColor)}.vueTextarea.inline[data-v-a4cb8b1e]{flex-direction:row;flex-wrap:wrap}.vueTextarea.inline>label[data-v-a4cb8b1e]{margin-right:16px}.vueTextarea.inline>.inputResponse[data-v-a4cb8b1e]{margin-left:16px}.vueTextarea>label[data-v-a4cb8b1e]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.vueTextarea>label>abbr[data-v-a4cb8b1e]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.vueTextarea>label>span[data-v-a4cb8b1e]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.vueTextarea>label>span>abbr[data-v-a4cb8b1e]{color:inherit}.vueTextarea>label>input[type=checkbox][data-v-a4cb8b1e],.vueTextarea>label>input[type=radio][data-v-a4cb8b1e]{transform:scale(1.5);margin-right:8px}.vueTextarea>label>.vueButton[data-v-a4cb8b1e]{margin-left:auto}.vueTextarea>label.oneLiner[data-v-a4cb8b1e]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.vueTextarea>label.oneLiner>input[type=checkbox][data-v-a4cb8b1e],.vueTextarea>label.oneLiner>input[type=radio][data-v-a4cb8b1e]{display:none}.vueTextarea>label.oneLiner>input[type=checkbox]+span[data-v-a4cb8b1e],.vueTextarea>label.oneLiner>input[type=radio]+span[data-v-a4cb8b1e]{margin:0 8px;font-size:12px}.vueTextarea>label.oneLiner>input[type=checkbox]+span.fas[data-v-a4cb8b1e],.vueTextarea>label.oneLiner>input[type=radio]+span.fas[data-v-a4cb8b1e]{color:var(--primaryColor)}.vueTextarea>label.oneLiner.errorLabel[data-v-a4cb8b1e]{color:#a94442}.vueTextarea>div[data-v-a4cb8b1e]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.vueTextarea>div.inputResponse[data-v-a4cb8b1e]{width:100%;border:none}.vueTextarea>div.warningContainer[data-v-a4cb8b1e]{border-color:#8a6d3b;background-color:#fcf8e3}.vueTextarea>div.warningContainer[data-v-a4cb8b1e]:focus,.vueTextarea>div.warningContainer[data-v-a4cb8b1e]:focus-within{border-color:var(--primaryColor)}.vueTextarea>div.warningContainer:focus-within>span[data-v-a4cb8b1e],.vueTextarea>div.warningContainer:focus>span[data-v-a4cb8b1e]{color:#8a6d3b}.vueTextarea>div.warningContainer>span[data-v-a4cb8b1e]{color:#8a6d3b!important}.vueTextarea>div.errorContainer[data-v-a4cb8b1e]{border-color:#a94442;background-color:#f2dede}.vueTextarea>div.errorContainer[data-v-a4cb8b1e]:focus,.vueTextarea>div.errorContainer[data-v-a4cb8b1e]:focus-within{border-color:var(--primaryColor)}.vueTextarea>div.errorContainer:focus-within>span[data-v-a4cb8b1e],.vueTextarea>div.errorContainer:focus>span[data-v-a4cb8b1e]{color:#a94442}.vueTextarea>div.errorContainer>span[data-v-a4cb8b1e]{color:#a94442!important}.vueTextarea>div>datalist[data-v-a4cb8b1e],.vueTextarea>div>input[data-v-a4cb8b1e],.vueTextarea>div>select[data-v-a4cb8b1e],.vueTextarea>div>textarea[data-v-a4cb8b1e]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.vueTextarea>div>datalist[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div>datalist[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div>datalist[data-v-a4cb8b1e]:-webkit-autofill:hover,.vueTextarea>div>input[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div>input[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div>input[data-v-a4cb8b1e]:-webkit-autofill:hover,.vueTextarea>div>select[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div>select[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div>select[data-v-a4cb8b1e]:-webkit-autofill:hover,.vueTextarea>div>textarea[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div>textarea[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div>textarea[data-v-a4cb8b1e]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.vueTextarea>div>datalist option[data-v-a4cb8b1e]:first,.vueTextarea>div>input option[data-v-a4cb8b1e]:first,.vueTextarea>div>select option[data-v-a4cb8b1e]:first,.vueTextarea>div>textarea option[data-v-a4cb8b1e]:first{color:darken(@backgroundColor,25%)}.vueTextarea>div>datalist+span[data-v-a4cb8b1e],.vueTextarea>div>input+span[data-v-a4cb8b1e],.vueTextarea>div>select+span[data-v-a4cb8b1e],.vueTextarea>div>textarea+span[data-v-a4cb8b1e]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.vueTextarea>div>datalist:focus~.conditions[data-v-a4cb8b1e],.vueTextarea>div>input:focus~.conditions[data-v-a4cb8b1e],.vueTextarea>div>select:focus~.conditions[data-v-a4cb8b1e],.vueTextarea>div>textarea:focus~.conditions[data-v-a4cb8b1e]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.vueTextarea>div>datalist:focus~.conditions>div[data-v-a4cb8b1e],.vueTextarea>div>input:focus~.conditions>div[data-v-a4cb8b1e],.vueTextarea>div>select:focus~.conditions>div[data-v-a4cb8b1e],.vueTextarea>div>textarea:focus~.conditions>div[data-v-a4cb8b1e]{display:flex;flex-direction:row;padding:8px 16px}.vueTextarea>div>datalist:focus~.conditions>div>span[data-v-a4cb8b1e],.vueTextarea>div>input:focus~.conditions>div>span[data-v-a4cb8b1e],.vueTextarea>div>select:focus~.conditions>div>span[data-v-a4cb8b1e],.vueTextarea>div>textarea:focus~.conditions>div>span[data-v-a4cb8b1e]{margin-right:8px}.vueTextarea>div>datalist~.conditions[data-v-a4cb8b1e],.vueTextarea>div>input~.conditions[data-v-a4cb8b1e],.vueTextarea>div>select~.conditions[data-v-a4cb8b1e],.vueTextarea>div>textarea~.conditions[data-v-a4cb8b1e]{display:none}.vueTextarea>div.iconPadding>span[data-v-a4cb8b1e]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.vueTextarea>div.iconPadding>span+datalist[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+input[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+select[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+textarea[data-v-a4cb8b1e]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.vueTextarea>div.iconPadding>span+datalist[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div.iconPadding>span+datalist[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div.iconPadding>span+datalist[data-v-a4cb8b1e]:-webkit-autofill:hover,.vueTextarea>div.iconPadding>span+input[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div.iconPadding>span+input[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div.iconPadding>span+input[data-v-a4cb8b1e]:-webkit-autofill:hover,.vueTextarea>div.iconPadding>span+select[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div.iconPadding>span+select[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div.iconPadding>span+select[data-v-a4cb8b1e]:-webkit-autofill:hover,.vueTextarea>div.iconPadding>span+textarea[data-v-a4cb8b1e]:-webkit-autofill,.vueTextarea>div.iconPadding>span+textarea[data-v-a4cb8b1e]:-webkit-autofill:focus,.vueTextarea>div.iconPadding>span+textarea[data-v-a4cb8b1e]:-webkit-autofill:hover{border-color:none}.vueTextarea>div.iconPadding>span+datalist+span[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+input+span[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+select+span[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+textarea+span[data-v-a4cb8b1e]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.vueTextarea>div.iconPadding>span+datalist:focus~.conditions[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+input:focus~.conditions[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+select:focus~.conditions[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+textarea:focus~.conditions[data-v-a4cb8b1e]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.vueTextarea>div.iconPadding>span+datalist:focus~.conditions>div[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+input:focus~.conditions>div[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+select:focus~.conditions>div[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+textarea:focus~.conditions>div[data-v-a4cb8b1e]{display:flex;flex-direction:row;padding:8px 16px}.vueTextarea>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+input:focus~.conditions>div>span[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+select:focus~.conditions>div>span[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-a4cb8b1e]{margin-right:8px}.vueTextarea>div.iconPadding>span+datalist~.conditions[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+input~.conditions[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+select~.conditions[data-v-a4cb8b1e],.vueTextarea>div.iconPadding>span+textarea~.conditions[data-v-a4cb8b1e]{display:none}.vueTextarea>div>input[type=file][data-v-a4cb8b1e]{padding-left:16px}.vueTextarea>div>select+span[data-v-a4cb8b1e]{left:40px}.vueTextarea>div.files[data-v-a4cb8b1e]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.vueTextarea>div.files>div[data-v-a4cb8b1e]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.vueTextarea>div.files>div>div[data-v-a4cb8b1e]{display:flex;flex-direction:row;flex-wrap:nowrap}.vueTextarea>div.files>div>div>span[data-v-a4cb8b1e]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.vueTextarea>div.files>div>div>.fileSize[data-v-a4cb8b1e]{position:absolute;right:8px;bottom:8px;font-size:12px}.vueTextarea>div.files>div>div>.removeFile[data-v-a4cb8b1e]{position:absolute;right:8px;top:8px}.vueTextarea .maskField[data-v-a4cb8b1e]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-a4cb8b1e;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.vueTextarea .maskField[data-v-a4cb8b1e],.vueTextarea .maskField *[data-v-a4cb8b1e],.vueTextarea .maskField[data-v-a4cb8b1e] ::placeholder,.vueTextarea .maskField div[data-v-a4cb8b1e],.vueTextarea .maskField div[data-v-a4cb8b1e]::placeholder,.vueTextarea .maskField[data-v-a4cb8b1e]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-a4cb8b1e{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-a4cb8b1e{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-a4cb8b1e{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-a4cb8b1e{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$f = "data-v-a4cb8b1e";
/* module identifier */

const __vue_module_identifier__$f = undefined;
/* functional template */

const __vue_is_functional_template__$f = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, createInjector, undefined, undefined);

//
var script$g = {
  name: 'vueAlert',

  data() {
    const d_alertIcon = '';
    const d_close = false;
    return {
      d_alertIcon,
      d_close
    }; //return
  },

  //data
  components: {
    vueButton: __vue_component__$4
  },
  //components
  props: {
    type: {
      required: true,
      type: String,
      default: 'info',
      validator: function (value) {
        return ['info', 'success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    },
    code: {
      required: function () {
        if (type == 'danger') {
          return true;
        }

        return false;
      },
      type: String
    },
    message: {
      required: true,
      type: String,
      default: 'default/no alert message specified'
    },
    description: {
      required: true,
      type: String,
      default: 'default/no alert message specified'
    },
    dismissible: {
      required: false,
      type: Boolean,
      default: false
    },
    timeout: {
      required: false,
      type: Number,
      default: null
    }
  },
  //props
  methods: {
    closeAlertBox() {
      this.d_close = true;
    },

    //closeAlertBox
    closeAlert: function () {
      document.getElementsByClassName('dangerAlert').fadeTo(5000, 0).slideUp(500, function () {
        $(this).remove();
      }); //slideUp
    } //closeAlert

  },

  //methods
  created() {
    switch (this.type) {
      case 'warning':
        this.d_alertIcon = 'fas fa-exclamation-triangle';
        break;

      case 'info':
        this.d_alertIcon = 'fas fa-info-circle';
        break;

      case 'success':
        this.d_alertIcon = 'fas fa-check-circle';
        break;

      case 'danger':
        this.d_alertIcon = 'fas fa-exclamation-circle';
        break;
    }
  },

  //created
  mounted() {
    var timeout = this.timeout;

    if (timeout && timeout != 0) {
      setTimeout(this.closeAlertBox, timeout * 1000);
    }
  } //mounted


}; //default

/* script */
const __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return !_vm.d_close ? _c('div', {
    staticClass: "vueAlert",
    class: _vm.type
  }, [_c('div', [_c('span', {
    class: [_vm.type, _vm.d_alertIcon]
  }), _vm._v(" "), _c('div', {
    class: _vm.type
  }, [_c('div', {
    staticClass: "message"
  }, [_c('h5', [_c('b', [_vm._v(_vm._s(_vm.type == "danger" ? _vm.code + " - " : "") + " " + _vm._s(_vm.message))])]), _vm._v(" "), _c('p', [_vm._v("\n          " + _vm._s(_vm.description) + "\n        ")])])])]), _vm._v(" "), _vm.dismissible ? _c('vue-button', {
    attrs: {
      "type": "button",
      "tag": "closeAlertButton",
      "icon": "fas fa-times",
      "category": "icon",
      "ctx": _vm.closeAlertBox.bind(this)
    }
  }) : _vm._e()], 1) : _vm._e();
};

var __vue_staticRenderFns__$g = [];
/* style */

const __vue_inject_styles__$g = function (inject) {
  if (!inject) return;
  inject("data-v-1ca102fb_0", {
    source: ".vueAlert[data-v-1ca102fb]{display:flex;flex-direction:row;flex-wrap:nowrap;border-radius:4px;border:1px solid transparent;width:fit-content;background-color:var(--backgroundColor);border-left-width:8px;padding:4px 8px}.vueAlert>p[data-v-1ca102fb]{color:var(--textColor)}.vueAlert.danger[data-v-1ca102fb]{border-color:#a94442}.vueAlert.danger h5[data-v-1ca102fb],.vueAlert.danger span[data-v-1ca102fb]{color:#a94442}.vueAlert.warning[data-v-1ca102fb]{border-color:#8a6d3b}.vueAlert.warning h5[data-v-1ca102fb],.vueAlert.warning span[data-v-1ca102fb]{color:#8a6d3b}.vueAlert.success[data-v-1ca102fb]{border-color:#3c763d}.vueAlert.success h5[data-v-1ca102fb],.vueAlert.success span[data-v-1ca102fb]{color:#3c763d}.vueAlert.info[data-v-1ca102fb]{border-color:#31708f}.vueAlert.info h5[data-v-1ca102fb],.vueAlert.info span[data-v-1ca102fb]{color:#31708f}.vueAlert>div[data-v-1ca102fb]{display:flex;flex-direction:row}.vueAlert>div>span[data-v-1ca102fb]{padding:14px 8px 4px 4px}.vueAlert>div>div[data-v-1ca102fb]{display:flex;flex-direction:column}.vueAlert>div>div>.alertMessage>p[data-v-1ca102fb]{font-size:16px}.vueAlert>div>div>.slot[data-v-1ca102fb]{display:flex;flex-direction:row-reverse}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$g = "data-v-1ca102fb";
/* module identifier */

const __vue_module_identifier__$g = undefined;
/* functional template */

const __vue_is_functional_template__$g = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, createInjector, undefined, undefined);

//
var script$h = {
  name: "VueClipboard",
  components: {
    vueButton: __vue_component__$4
  },
  //components
  props: {
    text: {
      required: false,
      type: String,
      default: ""
    },
    tag: {
      required: false,
      type: String,
      default: "copyToClipboard"
    },
    icon: {
      required: false,
      type: String,
      default: "fas fa-copy"
    },
    category: {
      required: false,
      type: String,
      default: "small"
    },
    //content to be copied
    copy: {
      type: String,
      required: true
    },
    id: {
      required: true,
      type: String
    }
  },
  //props
  methods: {
    copyToClipboard: function () {
      const tempId = "#" + this.id;
      const codeToCopy = document.querySelector(tempId);
      codeToCopy.style.display = "block";
      codeToCopy.select();

      try {
        const successful = document.execCommand("copy"); // document.execCommand("copy");

        const msg = successful ? "successful" : "unsuccessful";
        alert("code copied!", msg); // console.log('copy successfull', tempId)
        // alert("copied: ", successful)
      } catch (err) {
        alert("Oops, unable to copy");
      }

      document.querySelector(tempId).style.display = "none";
      window.getSelection().removeAllRanges();
    } //copyToClipboard

  } //methods

}; //default

/* script */
const __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "copyClipboard"
  }, [_c('vue-button', {
    attrs: {
      "type": "button",
      "tag": _vm.tag,
      "text": _vm.text,
      "icon": _vm.icon,
      "category": _vm.category,
      "ctx": _vm.copyToClipboard.bind(this)
    }
  }), _vm._v(" "), _c('textarea', {
    attrs: {
      "id": _vm.id
    },
    domProps: {
      "value": _vm.copy
    }
  })], 1);
};

var __vue_staticRenderFns__$h = [];
/* style */

const __vue_inject_styles__$h = function (inject) {
  if (!inject) return;
  inject("data-v-5a1642b9_0", {
    source: ".copyClipboard[data-v-5a1642b9]{display:flex}.copyClipboard textarea[data-v-5a1642b9]{display:none}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$h = "data-v-5a1642b9";
/* module identifier */

const __vue_module_identifier__$h = undefined;
/* functional template */

const __vue_is_functional_template__$h = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, createInjector, undefined, undefined);

//
var script$i = {
  name: 'systemError',

  data() {
    const d_hideDetails = true;
    const d_danger = "error=\n\
        {\n\
            app: " + this.app + ",\n\
            version: " + this.version + ",\n\
            url: " + this.url + ",\n\
            date: " + this.date + ",\n\
            errorCode: " + this.errorCode + ",\n\
            errorMessage: " + this.errorMessage + ",\n\
            stackTrace: " + this.stackTrace + ",\n\
        }"; //object (JSON)

    const d_errorObject = {
      "app": this.app,
      "version": this.version,
      "url": this.url,
      "date": this.date,
      "errorCode": this.errorCode,
      "errorMessage": this.errorMessage,
      "stackTrace": this.stackTrace
    };
    return {
      d_hideDetails,
      d_danger,
      d_errorObject
    }; //return
  },

  //data
  props: {
    errorCode: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      required: true
    },
    stackTrace: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    app: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    }
  },
  components: {
    vueClipboard: __vue_component__$h
  }
}; //default

/* script */
const __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "systemError"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "details"
  }, [_c('div', [_c('span', {
    class: ["fas", _vm.d_hideDetails ? "fa-plus" : "fa-minus"],
    on: {
      "click": function ($event) {
        _vm.d_hideDetails = !_vm.d_hideDetails;
      }
    }
  }, [_vm._v("  Details")]), _vm._v(" "), _c('vue-clipboard', {
    attrs: {
      "copy": _vm.d_danger,
      "tag": "StackTrace",
      "text": "Copy",
      "category": "text-sm",
      "id": "stackTrace"
    }
  })], 1), _vm._v(" "), !_vm.d_hideDetails ? _c('table', [_c('body', [_c('tr', [_c('td', [_vm._v("App:")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.app) + " - " + _vm._s(_vm.version) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("URL:")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.url) + "\n                    ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("date & Time:")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.date) + "\n                    ")])]), _vm._v(" "), _vm.errorCode ? _c('tr', [_c('td', [_vm._v("Error Code:")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.errorCode) + "\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c('tr', [_c('td', [_vm._v("Message:")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(_vm.errorMessage) + "\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.stackTrace ? _c('tr', [_c('td', [_vm._v("stacktrace:")]), _vm._v(" "), _c('td', {
    staticClass: "stackTrace"
  }, [_c('textarea', {
    attrs: {
      "rows": "4",
      "disabled": ""
    },
    domProps: {
      "value": _vm.stackTrace
    }
  })])]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "buttons"
  }, [_vm._t("buttons")], 2)])]);
};

var __vue_staticRenderFns__$i = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "top"
  }, [_c('h3', [_vm._v("Oops, Something unexpected happened.")])]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "ghost-copy"
  }, [_c('div', {
    staticClass: "one"
  }), _vm._v(" "), _c('div', {
    staticClass: "two"
  }), _vm._v(" "), _c('div', {
    staticClass: "three"
  }), _vm._v(" "), _c('div', {
    staticClass: "four"
  })]), _vm._v(" "), _c('div', {
    staticClass: "ghost"
  }, [_c('div', {
    staticClass: "face"
  }, [_c('div', {
    staticClass: "eye"
  }), _vm._v(" "), _c('div', {
    staticClass: "eye-right"
  }), _vm._v(" "), _c('div', {
    staticClass: "mouth"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "shadow"
  })]);
}];
/* style */

const __vue_inject_styles__$i = function (inject) {
  if (!inject) return;
  inject("data-v-94689424_0", {
    source: ".systemError[data-v-94689424]{display:flex;flex-direction:column;justify-content:space-around;margin:auto;min-height:464px;max-height:800px}.systemError>.top[data-v-94689424]{margin-top:32px}.systemError>.container[data-v-94689424]{margin:0 auto;position:relative;width:240px;height:240px}.systemError>.container>.ghost[data-v-94689424]{width:50%;height:53%;left:25%;top:10%;position:absolute;border-radius:50% 50% 0 0;background:#ededed;border:1px solid #bfc0c0;border-bottom:none;animation:float-data-v-94689424 2s ease-out infinite}.systemError>.container>.ghost>.face[data-v-94689424]{position:absolute;width:100%;height:60%;top:20%}.systemError>.container>.ghost>.face>.eye[data-v-94689424],.systemError>.container>.ghost>.face>.eye-right[data-v-94689424]{position:absolute;background:var(--primaryColor);width:13px;height:13px;border-radius:50%;top:40%}.systemError>.container>.ghost>.face>.eye[data-v-94689424]{left:25%}.systemError>.container>.ghost>.face>.eye-right[data-v-94689424]{right:25%}.systemError>.container>.ghost>.face>.mouth[data-v-94689424]{position:absolute;top:50%;left:45%;width:10px;height:10px;border:3px solid;border-radius:50%;border-color:transparent var(--primaryColor) var(--primaryColor) transparent;transform:rotate(45deg)}.systemError>.container>.shadow[data-v-94689424]{position:absolute;width:30%;height:7%;background:#bfc0c0;left:35%;top:80%;border-radius:50%;animation:scale-data-v-94689424 2s infinite}.systemError>.container>.ghost-copy[data-v-94689424]{width:50%;height:53%;left:25%;top:10%;position:absolute;border-radius:50% 50% 0 0;background:#ededed;border:1px solid #bfc0c0;border-bottom:none;animation:float-data-v-94689424 2s ease-out infinite;z-index:0}.systemError>.container>.ghost-copy>.four[data-v-94689424],.systemError>.container>.ghost-copy>.one[data-v-94689424],.systemError>.container>.ghost-copy>.three[data-v-94689424],.systemError>.container>.ghost-copy>.two[data-v-94689424]{position:absolute;background:#ededed;top:85%;width:25%;height:23%;border:1px solid #bfc0c0;z-index:0}.systemError>.container>.ghost-copy>.one[data-v-94689424]{border-radius:0 0 100% 30%;left:-1px}.systemError>.container>.ghost-copy>.two[data-v-94689424]{left:23%;border-radius:0 0 50% 50%}.systemError>.container>.ghost-copy>.three[data-v-94689424]{left:50%;border-radius:0 0 50% 50%}.systemError>.container>.ghost-copy>.four[data-v-94689424]{left:75.5%;border-radius:0 0 30% 100%}.systemError>.details[data-v-94689424]{display:flex;flex-direction:column;background-color:var(--backgroundColor);border:1px solid darken(@backgroundColor,10%);padding:4px 8px;border-radius:4px}.systemError>.details>div[data-v-94689424]{display:flex;flex-direction:row;justify-content:space-between}.systemError>.details>div>span[data-v-94689424]{margin:auto 0;cursor:pointer}.systemError>.details>table[data-v-94689424]{text-align:left;margin:auto}.systemError>.details>table>body tr[data-v-94689424]{margin:2px 4px}.systemError>.details>table>body tr td[data-v-94689424]{padding:4px 8px}.systemError>.details>table>body tr td[data-v-94689424]:first-child{font-weight:700}.systemError>.details>table>body tr td.stackTrace[data-v-94689424]{border-radius:4px}.systemError>.details>table>body tr td.stackTrace textarea[data-v-94689424]:disabled{background-color:transparent;border-color:darken(@backgroundColor,25%);border-radius:4px;width:auto}.systemError>.details>table>body tr[data-v-94689424]:last-child{margin-bottom:400px}@keyframes scale-data-v-94689424{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}@keyframes float-data-v-94689424{50%{transform:translateY(8px)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$i = "data-v-94689424";
/* module identifier */

const __vue_module_identifier__$i = undefined;
/* functional template */

const __vue_is_functional_template__$i = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, createInjector, undefined, undefined);

const debounce = {
  data() {
    const wait = 10;
    const immediate = true;
    return {
      wait,
      immediate
    };
  },

  methods: {
    debounce: function (func, wait = this.wait, immediate = this.immediate) {
      let timeout;
      return function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this; // eslint-disable-next-line prefer-rest-params

        const args = arguments;

        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    } //debounce

  }
};

//
var script$j = {
  name: "ScrollIndicator",
  mixins: [debounce],

  data() {
    //used to calculate the height of header/navigation
    const headerOffset = null; //saves the sectrion tags used to generate Sub Content navigation links.

    const tag = []; //stores the tag (section) ad well as the top and bottom pixel location of the tag as well as if its selected or not.

    const tagOffset = []; //stores height opf the current browser window

    const windowHeight = null; //stores pixel value above which we select a tag.

    const windowBuffer = null; //ratio used to calculate window buffer

    const bufferRatio = 0.18;
    return {
      headerOffset,
      tag,
      tagOffset,
      windowHeight,
      windowBuffer,
      bufferRatio
    };
  },

  mounted() {
    this.initialize();
  },

  methods: {
    checkScroll: function () {
      const highlight = Math.round(this.headerOffset.scrollTop);

      for (let i = 0; i < this.tag.length; i++) {
        const tagOffset = this.tagOffset[i]; //activate tags depending on the window scroll location and tag top/bottom pixel location within the page.

        if (highlight + this.windowBuffer > tagOffset.top && highlight < tagOffset.bottom) {
          tagOffset.selected = true;
        } else {
          //keep last tag selected when scroll exceeds bottom pixel location
          if (i == this.tag.length && this.windowHeight + highlight >= this.tagOffset[this.tagOffset.length - 1].bottom) {
            tagOffset.selected = true;
          } else {
            tagOffset.selected = false;
          }
        }
      }

      this.prevScrollValue = highlight;
    },
    //checkScroll
    initialize: function () {
      this.headerOffset = document.getElementsByClassName("body")[0];
      const offsetHeader = Array.from(document.getElementsByClassName("vueHeader"))[0];
      this.tag = Array.from(document.getElementsByTagName("section"));
      this.tag = this.tag.filter(tag => tag.id != "");
      const headerOffset = offsetHeader ? offsetHeader.offsetHeight : 0;
      this.tagOffset = this.tag.map(section => {
        return {
          top: section.offsetTop - headerOffset,
          bottom: section.offsetTop + section.offsetHeight - headerOffset,
          id: section.getAttribute("id"),
          selected: false
        };
      });

      if (this.tag.length > 1) {
        this.headerOffset.addEventListener("scroll", this.debounce(this.checkScroll), {
          capture: false,
          // top to bottom bubbling/propogation
          once: false //should work only once

        });
        this.windowHeight = this.headerOffset.offsetHeight;
        this.windowBuffer = this.windowHeight * this.bufferRatio;
        this.checkScroll();
      }
    }
  }
};

/* script */
const __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "scrollIndicator"
  }, [_c('div', {
    staticClass: "scrolContent"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.tagOffset.length > 1 ? _c('div', {
    staticClass: "scroll"
  }, _vm._l(_vm.tagOffset, function (indicator) {
    return _c('a', {
      key: indicator.id,
      class: {
        active: indicator.selected
      },
      attrs: {
        "href": '#' + indicator.id
      }
    }, [_c('span', {
      class: [indicator.selected ? 'fas' : 'far', 'fa-circle']
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(indicator.id))])]);
  }), 0) : _vm._e()]);
};

var __vue_staticRenderFns__$j = [];
/* style */

const __vue_inject_styles__$j = function (inject) {
  if (!inject) return;
  inject("data-v-74ca0a16_0", {
    source: ".scrollIndicator>div[data-v-74ca0a16]{display:flex;flex-direction:column;justify-content:center;position:relative}.scrollIndicator>div.scroll[data-v-74ca0a16]{position:absolute;height:fit-content;top:136px;right:32px}.scrollIndicator>div.scroll[data-v-74ca0a16]::before{content:\"Page Content\";text-align:right;font-weight:700}.scrollIndicator>div.scroll>a[data-v-74ca0a16]{display:flex;flex-direction:row-reverse;text-decoration:none;padding:8px;margin:4px 0;height:32px;background-color:transparent;width:auto}.scrollIndicator>div.scroll>a.active[data-v-74ca0a16],.scrollIndicator>div.scroll>a[data-v-74ca0a16]:hover{border-radius:4px;color:var(--white)}.scrollIndicator>div.scroll>a.active>span[data-v-74ca0a16]:last-child,.scrollIndicator>div.scroll>a:hover>span[data-v-74ca0a16]:last-child{display:block;color:var(--textColor);font-weight:700;margin-right:16px}.scrollIndicator>div.scroll>a>span[data-v-74ca0a16]{text-shadow:inset 0 0 4px var(--shadowColor);-webkit-text-shadow:inset 0 0 4px var(--shadowColor);-moz-text-shadow:inset 0 0 4px var(--shadowColor);z-index:inherit;box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;z-index:inherit!important}.scrollIndicator>div.scroll>a>span[data-v-74ca0a16]:last-child{text-shadow:none var(--shadowColor);-webkit-text-shadow:none var(--shadowColor);-moz-text-shadow:none var(--shadowColor);z-index:inherit;box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;z-index:inherit!important;display:none}.scrollIndicator>div.scrolContent[data-v-74ca0a16]{display:flex;margin:0 auto;max-width:1024px}@media screen and (max-width:1540px){.scrollIndicator>div.scroll[data-v-74ca0a16]{background-color:var(--primaryColor);border-radius:32px;padding:2px;top:50%;transform:translateY(-50%);right:16px}.scrollIndicator>div.scroll>a[data-v-74ca0a16]{width:fit-content}.scrollIndicator>div.scroll>a.active[data-v-74ca0a16],.scrollIndicator>div.scroll>a[data-v-74ca0a16]:hover{background-color:none}.scrollIndicator>div.scroll>a.active>span[data-v-74ca0a16]:last-child,.scrollIndicator>div.scroll>a:hover>span[data-v-74ca0a16]:last-child{position:absolute;width:max-content;text-align:right;color:var(--primaryColor);right:32px;font-weight:700}.scrollIndicator>div.scroll>a>span[data-v-74ca0a16]{color:var(--accentColor);text-shadow:0 1px 2px var(--shadowColor);-webkit-text-shadow:0 1px 2px var(--shadowColor);-moz-text-shadow:0 1px 2px var(--shadowColor);z-index:inherit;box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-webkit-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;-moz-box-shadow:inset 0 0 4px var(--shadowColor),none var(--shadowColor)!important;z-index:inherit!important}.scrollIndicator>div.scroll[data-v-74ca0a16]::before{content:\"\"}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$j = "data-v-74ca0a16";
/* module identifier */

const __vue_module_identifier__$j = undefined;
/* functional template */

const __vue_is_functional_template__$j = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$k = {
  name: "breadcrums",
  props: {
    navigation: {
      type: Array,
      required: true
    },
    projects: {
      type: Array,
      required: false
    }
  },

  //props
  data() {
    const unique = [];
    return {
      unique
    };
  },

  //data
  computed: {
    pathBreakdown: function () {
      let temp = ("app" + this.$route.path).split("/");
      temp = temp.filter(function (el) {
        return el != "";
      });
      return temp;
    }
  },

  created() {
    //get a list of components to be used for pathBreakdown
    if (this.projects) {
      this.projects.forEach(project => {
        this.navBreakdown(project);
      });
    }

    this.navigation.forEach(nav => {
      this.navBreakdown(nav);
    });
  },

  methods: {
    navBreakdown: function (nav) {
      this.unique = [...this.unique, {
        comp: nav.component,
        name: nav.name
      }];
      const subNav = nav.subNav;

      if (subNav) {
        subNav.forEach(navigation => {
          if (navigation) this.navBreakdown(navigation);
        });
      } else return;
    },
    //navBreakdown
    isComponent: function (comp) {
      var result = this.unique.find(uni => comp == uni.comp);
      return result ? result : false;
    }
  }
};

/* script */
const __vue_script__$k = script$k;
/* template */

var __vue_render__$k = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.pathBreakdown.length > 1 ? _c('div', {
    staticClass: "breadcrums"
  }, [_c('br'), _vm._v(" "), _vm._l(_vm.pathBreakdown, function (path, index) {
    return [_vm.pathBreakdown.length - 1 > index ? _c('router-link', {
      key: index,
      staticClass: "crums",
      attrs: {
        "to": {
          name: _vm.isComponent(path).comp
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.isComponent(path).name) + "\n\t\t\t\t")]) : _c('h1', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.isComponent(path).name))]), _vm._v(" "), _vm.pathBreakdown.length - 1 > index ? _c('span', {
      key: path,
      staticClass: "fas fa-angle-right"
    }) : _vm._e()];
  })], 2) : _vm._e();
};

var __vue_staticRenderFns__$k = [];
/* style */

const __vue_inject_styles__$k = function (inject) {
  if (!inject) return;
  inject("data-v-951d92d4_0", {
    source: ".breadcrums[data-v-951d92d4]{display:flex;flex-direction:row;flex-wrap:nowrap;margin:16px 0;align-items:center}.breadcrums>.path[data-v-951d92d4]{padding:8px;text-decoration:none}.breadcrums>.path>h5[data-v-951d92d4]{margin:0!important}.breadcrums>h1[data-v-951d92d4]{margin:0}.breadcrums>span[data-v-951d92d4]{color:var(--textColor);margin:0 8px}@media screen and (max-width:1540px){.breadcrums[data-v-951d92d4]{margin:0 0 0 32px!important}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$k = "data-v-951d92d4";
/* module identifier */

const __vue_module_identifier__$k = undefined;
/* functional template */

const __vue_is_functional_template__$k = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, createInjector, undefined, undefined);

const cookie = {
  methods: {
    getCookie: function (name) {
      var cname = name + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(cname) == 0) {
          return c.substring(cname.length, c.length);
        }
      }

      return "";
    },
    setCookie: function (name, value, exdays = 1) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
    checkCookie: function (name) {
      var value = this.getCookie(name);

      if (value == "") {
        alert('no cookie for "' + name + '" was found');
      } // else {
      //   username = prompt("Please enter your name:", "");
      //   if (username != "" && username != null) {
      //     setCookie(name, value, 365);
      //   }
      // }

    }
  }
};

//
var script$l = {
  name: "EnterpriseAppLayout",
  components: {
    scrollIndicator: __vue_component__$j,
    breadcrums: __vue_component__$k
  },
  props: {
    navigation: {
      type: [Object, Array],
      required: true,
      default: null
    }
  },
  mixins: [
  /*authentication, */
  cookie],

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const DEFAULT_TRANSITION = "fade";
    const DEFAULT_TRANSITION_MODE = "out-in";
    const transitionEnterActiveClass = "";
    const prevHeight = 0;
    return {
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass,
      prevHeight
    };
  },

  //mixins
  beforeMount() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || this.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      } // this.transitionMode = DEFAULT_TRANSITION_MODE;


      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === "zoom") {
        this.transitionMode = "in-out";
        this.transitionEnterActiveClass = "zoom-enter-active"; // Disable scrolling in the background.

        document.body.style.overflow = "hidden";
      }

      if (from.meta.transitionName === "zoom") {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null; // Enable scrolling again.

        document.body.style.overflow = null;
      }

      this.transitionName = transitionName; //check if matched route requires authentication

      if (to.matched.some(record => record.meta.requiresAuth)) {
        //if matched route requires authentication then check for absence of token
        if (localStorage.getItem("jwt") == null && !this.checkCookie("token")) {
          //when no token is found redirect to login page and set redirec
          next({
            name: "login",
            query: {
              nextUrl: to.name
            }
          });
        } //if matched route requires authentication and has token
        else {
            let user = "{}";

            if (localStorage.getItem("user")) {
              user = localStorage.getItem("user");
            } else if (this.checkCookie("user")) {
              //console.log(this.getCookie('user'));
              user = this.getCookie("user");
            } // const user = JSON.parse(localStorage.getItem('user') || JSON.parse(this.getCookie('user')) ||{});
            //when token is present check if user is an Admin


            if (to.matched.some(record => record.meta.isAdmin)) {
              //If user is an admin, proceed
              if (user.isAdmin == 1) {
                next();
              } //if user is not admin then redirect to  about page
              else {
                  next({
                    name: "app"
                  });
                }
            } else {
              next();
            }
          }
      } //authentication was not required.
      //check if guest access is required to matched route
      else if (to.matched.some(record => record.meta.guest)) {
          if (localStorage.getItem("jwt") == null) {
            next();
          } else {
            next({
              name: "about"
            });
          }
        } else {
          next();
        }
    });
  },

  //beforeMount
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },

    //beforeLeave
    enter(element) {
      const {
        height
      } = getComputedStyle(element);
      element.style.height = this.prevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },

    //enter
    afterEnter(element) {
      element.style.height = "auto";
    } //afterEnter


  }
};

/* script */
const __vue_script__$l = script$l;
/* template */

var __vue_render__$l = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "enterpriseAppLayout"
  }, [_vm.$slots['header'] ? [_vm._t("header")] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_vm.$slots['menu'] ? _c('div', {
    staticClass: "menu"
  }, [_vm._t("menu")], 2) : _vm._e(), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transitionName,
      "mode": _vm.transitionMode,
      "enter-active-class": _vm.transitionEnterActiveClass
    },
    on: {
      "beforeLeave": _vm.beforeLeave,
      "enter": _vm.enter,
      "afterEnter": _vm.afterEnter
    }
  }, [_c('div', {
    key: _vm.$route.path,
    staticClass: "content"
  }, [_c('breadcrums', {
    attrs: {
      "navigation": _vm.navigation
    }
  }), _vm._v(" "), _c('scroll-indicator', [_c('router-view', {
    key: _vm.$route.path
  })], 1), _vm._v(" "), _vm.$slots['moto'] ? [_vm._t("moto")] : _vm._e()], 2)])], 1), _vm._v(" "), _vm.$slots['footer'] ? [_vm._t("footer")] : _vm._e()], 2);
};

var __vue_staticRenderFns__$l = [];
/* style */

const __vue_inject_styles__$l = function (inject) {
  if (!inject) return;
  inject("data-v-9eeaa8b2_0", {
    source: ".enterpriseAppLayout[data-v-9eeaa8b2]{display:flex;flex-direction:column;position:relative;height:100vh;max-width:100vw}.enterpriseAppLayout>div[data-v-9eeaa8b2]{display:flex;flex-direction:row;height:100%}.enterpriseAppLayout>div.body[data-v-9eeaa8b2]{display:flex;flex-direction:row;max-width:100vw;max-height:100vh;overflow-y:auto}.enterpriseAppLayout>div.body[data-v-9eeaa8b2]::-webkit-scrollbar{width:8px}.enterpriseAppLayout>div.body[data-v-9eeaa8b2]::-webkit-scrollbar-track{background:var(--backgroundColor)}.enterpriseAppLayout>div.body[data-v-9eeaa8b2]::-webkit-scrollbar-thumb{background:var(--primaryColor);border-radius:8px}.enterpriseAppLayout>div.body div.menu[data-v-9eeaa8b2]{display:flex;align-self:flex-start;position:sticky;top:0;left:0;z-index:200;background-color:var(--navBackground)}.enterpriseAppLayout>div.body div.content[data-v-9eeaa8b2]{align-items:center;color:var(--textColor);margin:0 auto;max-width:80vw;width:1504px}@media screen and (max-width:1540px){.enterpriseAppLayout>div.body>div.content[data-v-9eeaa8b2]{min-width:480px}}.zoom-enter-active[data-v-9eeaa8b2],.zoom-leave-active[data-v-9eeaa8b2]{animation-duration:.3s;animation-fill-mode:both;animation-name:zoom-data-v-9eeaa8b2}.zoom-leave-active[data-v-9eeaa8b2]{animation-direction:reverse}@keyframes zoom-data-v-9eeaa8b2{from{opacity:0;transform:scale3d(.5,.5,.5)}100%{opacity:1}}.fade-enter-active[data-v-9eeaa8b2],.fade-leave-active[data-v-9eeaa8b2]{transition-duration:.3s;transition-property:opacity;transition-timing-function:cubic-bezier(.55,0,.1,1)}.fade-enter[data-v-9eeaa8b2],.fade-leave-active[data-v-9eeaa8b2]{opacity:0}.slide-left-enter-active[data-v-9eeaa8b2],.slide-left-leave-active[data-v-9eeaa8b2],.slide-right-enter-active[data-v-9eeaa8b2],.slide-right-leave-active[data-v-9eeaa8b2]{transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.55,0,.1,1);overflow:hidden}.slide-left-enter[data-v-9eeaa8b2],.slide-right-leave-active[data-v-9eeaa8b2]{opacity:0;transform:translate(96px,0)}.slide-left-leave-active[data-v-9eeaa8b2],.slide-right-enter[data-v-9eeaa8b2]{opacity:0;transform:translate(-96px,0)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$l = "data-v-9eeaa8b2";
/* module identifier */

const __vue_module_identifier__$l = undefined;
/* functional template */

const __vue_is_functional_template__$l = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$l = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
var script$m = {
  name: 'goldenRatioLayout'
};

/* script */
const __vue_script__$m = script$m;
/* template */

var __vue_render__$m = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__$m = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "goldenRatioLayout"
  }, [_c('div', {
    staticClass: "item a"
  }, [_vm._v("A")]), _vm._v(" "), _c('div', {
    staticClass: "item b"
  }, [_vm._v("B")]), _vm._v(" "), _c('div', {
    staticClass: "item c"
  }, [_vm._v("C")]), _vm._v(" "), _c('div', {
    staticClass: "item d"
  }, [_vm._v("D")]), _vm._v(" "), _c('div', {
    staticClass: "item e"
  }, [_vm._v("E")]), _vm._v(" "), _c('div', {
    staticClass: "item f"
  }, [_vm._v("F")]), _vm._v(" "), _c('div', {
    staticClass: "item g"
  }, [_vm._v("G")])]);
}];
/* style */

const __vue_inject_styles__$m = function (inject) {
  if (!inject) return;
  inject("data-v-0757dbe4_0", {
    source: ".goldenRatioLayout[data-v-0757dbe4]{width:64vw;height:64vw;border:.5px solid #4a4949;display:grid;grid-template-columns:.61804697fr .09017941fr .05573511fr .23608285fr;grid-template-rows:.61804697fr .09017941fr .05573511fr .23608285fr;grid-template-areas:\"A A A A\" \"B E E D\" \"B F G D\" \"B C C C\"}.item[data-v-0757dbe4]{display:flex;justify-content:center;align-items:center;height:100%;width:100%;color:#eee;font-size:1.5em;font-weight:700;text-shadow:1px 1px 1px #777;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:.5px solid #4a4949;background-image:radial-gradient(closest-side at 50% 50%,transparent calc(100% - 2px),currentColor 0,transparent);background-size:200% 200%}.item[data-v-0757dbe4]:nth-of-type(4n){background-position:0 0}.item[data-v-0757dbe4]:nth-of-type(4n+2){background-position:0 100%}.item[data-v-0757dbe4]:nth-of-type(4n+3){background-position:100% 100%}.item[data-v-0757dbe4]:nth-of-type(4n+4){background-position:100% 0}.item.a[data-v-0757dbe4]{grid-area:A;background-color:#a0ddff}.item.b[data-v-0757dbe4]{grid-area:B;background-color:#c1cefe}.item.c[data-v-0757dbe4]{grid-area:C;background-color:#758ecd}.item.d[data-v-0757dbe4]{grid-area:D;background-color:#7189ff}.item.e[data-v-0757dbe4]{grid-area:E;font-size:1.2em;background-color:#624cab}.item.f[data-v-0757dbe4]{grid-area:F;font-size:1em;background-color:#5d2e8c}.item.g[data-v-0757dbe4]{grid-area:G;font-size:.7em;background-color:#7a7a7a}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$m = "data-v-0757dbe4";
/* module identifier */

const __vue_module_identifier__$m = undefined;
/* functional template */

const __vue_is_functional_template__$m = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$m = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$m,
  staticRenderFns: __vue_staticRenderFns__$m
}, __vue_inject_styles__$m, __vue_script__$m, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
var script$n = {
  name: 'sideBySideLayout'
};

/* script */
const __vue_script__$n = script$n;
/* template */

var __vue_render__$n = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sideBySideLayout"
  }, [_c('div', {
    staticClass: "leftComponent"
  }, [_vm._t("left")], 2), _vm._v(" "), _c('div', {
    staticClass: "divide32"
  }), _vm._v(" "), _c('div', {
    staticClass: "rightComponent"
  }, [_vm._t("right")], 2)]);
};

var __vue_staticRenderFns__$n = [];
/* style */

const __vue_inject_styles__$n = function (inject) {
  if (!inject) return;
  inject("data-v-e55b8642_0", {
    source: ".sideBySideLayout[data-v-e55b8642]{display:flex;flex-direction:row;flex-wrap:wrap}.sideBySideLayout>div[data-v-e55b8642]{display:flex;flex-direction:column;height:100%}.sideBySideLayout>div.leftComponent[data-v-e55b8642]{width:fit-content;height:fit-content}.sideBySideLayout>div.rightComponent[data-v-e55b8642]{width:auto;height:fit-content}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$n = "data-v-e55b8642";
/* module identifier */

const __vue_module_identifier__$n = undefined;
/* functional template */

const __vue_is_functional_template__$n = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$n = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$n,
  staticRenderFns: __vue_staticRenderFns__$n
}, __vue_inject_styles__$n, __vue_script__$n, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, false, createInjector, undefined, undefined);

//
var script$o = {
  name: "DropdownList",
  mixins: [validator, alerts],
  //mixins
  components: {
    inputResponse: __vue_component__$1
  },
  //components
  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: ""
    },
    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "dropdownInput"
    },
    //users can pass preset values for the input field (v-model)
    value: {
      required: false,
      type: [String, Number, Array],
      default: function () {
        if (this.multiple) {
          return [];
        }

        return "";
      }
    },
    //Array of options for user to select .
    options: {
      required: true,
      type: Array
    },
    //no of options  to display at a time.
    size: {
      required: false,
      type: Number,
      default: null
    },
    //sets the multiple attribute for the input field to accept multiple values
    multiple: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the manual alerts
    alert: {
      required: false,
      type: Object,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    },
    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },
    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: Boolean,
      default: true
    },
    //sets the readonly attribute for the input field
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },
    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },
    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    icon: {
      required: false,
      type: String,
      default: ""
    }
  },

  //props
  created() {
    this.d_needsValidation = false; //store value of prop in temp variable for code readability

    const val = this.value;
    const options = this.options;
    const multiple = this.multiple; //if val is a singlevalue, check if it is na acceptable input

    if (!multiple && (typeof val == "string" || typeof val == "number")) {
      //if value is an acceptable input store it in d_value for future manipulation
      if (options && options.indexOf(val) != -1) {
        this.d_value = val;
      } //if not trigger alert and set error message
      else {
          this.error = "Invalid Input: The preset value " + val + " is not included in the options for the dropdown.";
        }
    } //if val is an array check if each value towards acceptable values as input
    else if (multiple && Array.isArray(val)) {
        const tempVal = [];
        const alertVal = []; //loop through each value to check for validity of input value

        for (const v in val) {
          //if value is an acceptable input store it intempVal for future manipulation
          if (options && options.indexOf(v) != -1) {
            tempVal.push(v);
          } //if not save it in a temp errorval variable for further use to trigger alert
          else {
              alertVal.push(v);
            }
        } //save acceptable values back to d_value for future manipulation


        this.d_value = tempVal; //if errorVal exists trigger an alert and set d_warning message

        if (alertVal) {
          this.d_danger = "Invalid Input: The preset value(s) " + alertVal + " is/are not included in the options for the dropdown.";
        }
      } else if (val) {
        this.d_danger = "Invalid Input: The preset value(s) " + val + " are not valid";
      }
  },

  //created
  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function () {
      //initialize d_warning and error messages to null to accomodate change in alert messages
      this.d_danger = null; //loads current value stored from d_value(data) into val(temp) variable val for readability of code

      const val = this.d_value; //if value for val(temp) does not exists check if value is required
      //if value is required then trigger alert and set error message

      if (val) {
        //emit/send new values to parent component v-model attribute
        this.$emit("value", val);
      } else {
        if (this.required) {
          this.d_danger = "Required field.";
        }
      }
    } //validate

  } //WATCH

}; //default

/* script */
const __vue_script__$o = script$o;
/* template */

var __vue_render__$o = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "dropdownList",
    class: {
      inline: _vm.inline
    }
  }, [_vm.label ? _c('label', {
    class: {
      maskField: _vm.mask
    },
    attrs: {
      "for": _vm.name
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n    "), _vm.required ? _c('abbr', {
    attrs: {
      "title": "Required Field"
    }
  }, [_vm._v("*")]) : _c('span', [_vm._v(" - Optional field"), _c('abbr', [_vm._v("*")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      warningContainer: _vm.alert ? _vm.alert.warning : false,
      errorContainer: _vm.alert ? _vm.alert.error : false,
      iconPadding: _vm.icon,
      maskField: _vm.mask
    }
  }, [_vm.icon ? _c('span', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), !_vm.mask ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.d_value,
      expression: "d_value"
    }],
    attrs: {
      "id": _vm.name,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "required": _vm.required,
      "multiple": _vm.multiple,
      "readonly": _vm.readonly,
      "size": _vm.size
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.d_value = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.validate]
    }
  }, _vm._l(_vm.options, function (option, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": option
      }
    }, [_vm._v("\n        " + _vm._s(option) + "\n      ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c('input-response', {
    attrs: {
      "error": _vm.alert ? _vm.alert.error : false
    }
  })], 1);
};

var __vue_staticRenderFns__$o = [];
/* style */

const __vue_inject_styles__$o = function (inject) {
  if (!inject) return;
  inject("data-v-7562bc03_0", {
    source: ".dropdownList[data-v-7562bc03]{min-width:160px;display:flex;flex-direction:column;flex-wrap:nowrap}.dropdownList[data-v-7562bc03]:focus,.dropdownList[data-v-7562bc03]:focus-within{border-color:var(--primaryColor)}.dropdownList:focus-within>span[data-v-7562bc03],.dropdownList:focus>span[data-v-7562bc03]{color:var(--primaryColor)}.dropdownList.inline[data-v-7562bc03]{flex-direction:row;flex-wrap:wrap}.dropdownList.inline>label[data-v-7562bc03]{margin-right:16px}.dropdownList.inline>.inputResponse[data-v-7562bc03]{margin-left:16px}.dropdownList>label[data-v-7562bc03]{display:flex;flex-direction:row;align-items:center;margin:auto 0;font-weight:400;width:fit-content;height:32px;margin-bottom:4px;color:var(--textColor)}.dropdownList>label>abbr[data-v-7562bc03]{padding:4px;color:#a94442;font-weight:700;text-decoration:none}.dropdownList>label>span[data-v-7562bc03]{margin-left:4px;color:#31708f;font-size:calc(12px - 4px);opacity:.64;filter:alpha(opacity=64)}.dropdownList>label>span>abbr[data-v-7562bc03]{color:inherit}.dropdownList>label>input[type=checkbox][data-v-7562bc03],.dropdownList>label>input[type=radio][data-v-7562bc03]{transform:scale(1.5);margin-right:8px}.dropdownList>label>.vueButton[data-v-7562bc03]{margin-left:auto}.dropdownList>label.oneLiner[data-v-7562bc03]{display:flex;flex-direction:row;flex-wrap:nowrap;min-height:32px;padding-right:16px;margin:0;align-items:center}.dropdownList>label.oneLiner>input[type=checkbox][data-v-7562bc03],.dropdownList>label.oneLiner>input[type=radio][data-v-7562bc03]{display:none}.dropdownList>label.oneLiner>input[type=checkbox]+span[data-v-7562bc03],.dropdownList>label.oneLiner>input[type=radio]+span[data-v-7562bc03]{margin:0 8px;font-size:12px}.dropdownList>label.oneLiner>input[type=checkbox]+span.fas[data-v-7562bc03],.dropdownList>label.oneLiner>input[type=radio]+span.fas[data-v-7562bc03]{color:var(--primaryColor)}.dropdownList>label.oneLiner.errorLabel[data-v-7562bc03]{color:#a94442}.dropdownList>div[data-v-7562bc03]{display:flex;flex-direction:row;flex-wrap:nowrap;border:1px solid darken(@backgroundColor,10%);border-radius:4px;min-width:160px;max-width:240px;min-height:16px;border:1px solid var(--primaryColor);position:relative}.dropdownList>div.inputResponse[data-v-7562bc03]{width:100%;border:none}.dropdownList>div.warningContainer[data-v-7562bc03]{border-color:#8a6d3b;background-color:#fcf8e3}.dropdownList>div.warningContainer[data-v-7562bc03]:focus,.dropdownList>div.warningContainer[data-v-7562bc03]:focus-within{border-color:var(--primaryColor)}.dropdownList>div.warningContainer:focus-within>span[data-v-7562bc03],.dropdownList>div.warningContainer:focus>span[data-v-7562bc03]{color:#8a6d3b}.dropdownList>div.warningContainer>span[data-v-7562bc03]{color:#8a6d3b!important}.dropdownList>div.errorContainer[data-v-7562bc03]{border-color:#a94442;background-color:#f2dede}.dropdownList>div.errorContainer[data-v-7562bc03]:focus,.dropdownList>div.errorContainer[data-v-7562bc03]:focus-within{border-color:var(--primaryColor)}.dropdownList>div.errorContainer:focus-within>span[data-v-7562bc03],.dropdownList>div.errorContainer:focus>span[data-v-7562bc03]{color:#a94442}.dropdownList>div.errorContainer>span[data-v-7562bc03]{color:#a94442!important}.dropdownList>div>datalist[data-v-7562bc03],.dropdownList>div>input[data-v-7562bc03],.dropdownList>div>select[data-v-7562bc03],.dropdownList>div>textarea[data-v-7562bc03]{padding:8px;border-radius:4px;width:100%;border:none;position:relative;background-color:var(--backgroundColor)!important;-webkit-appearance:none;outline:0}.dropdownList>div>datalist[data-v-7562bc03]:-webkit-autofill,.dropdownList>div>datalist[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div>datalist[data-v-7562bc03]:-webkit-autofill:hover,.dropdownList>div>input[data-v-7562bc03]:-webkit-autofill,.dropdownList>div>input[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div>input[data-v-7562bc03]:-webkit-autofill:hover,.dropdownList>div>select[data-v-7562bc03]:-webkit-autofill,.dropdownList>div>select[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div>select[data-v-7562bc03]:-webkit-autofill:hover,.dropdownList>div>textarea[data-v-7562bc03]:-webkit-autofill,.dropdownList>div>textarea[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div>textarea[data-v-7562bc03]:-webkit-autofill:hover{background-color:none!important;border-color:none!important}.dropdownList>div>datalist option[data-v-7562bc03]:first,.dropdownList>div>input option[data-v-7562bc03]:first,.dropdownList>div>select option[data-v-7562bc03]:first,.dropdownList>div>textarea option[data-v-7562bc03]:first{color:darken(@backgroundColor,25%)}.dropdownList>div>datalist+span[data-v-7562bc03],.dropdownList>div>input+span[data-v-7562bc03],.dropdownList>div>select+span[data-v-7562bc03],.dropdownList>div>textarea+span[data-v-7562bc03]{position:absolute;cursor:pointer;left:calc(100% + 8px);font-size:16px;top:50%;transform:translate(0,-50%);z-index:5;color:var(--accentColor)}.dropdownList>div>datalist:focus~.conditions[data-v-7562bc03],.dropdownList>div>input:focus~.conditions[data-v-7562bc03],.dropdownList>div>select:focus~.conditions[data-v-7562bc03],.dropdownList>div>textarea:focus~.conditions[data-v-7562bc03]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.dropdownList>div>datalist:focus~.conditions>div[data-v-7562bc03],.dropdownList>div>input:focus~.conditions>div[data-v-7562bc03],.dropdownList>div>select:focus~.conditions>div[data-v-7562bc03],.dropdownList>div>textarea:focus~.conditions>div[data-v-7562bc03]{display:flex;flex-direction:row;padding:8px 16px}.dropdownList>div>datalist:focus~.conditions>div>span[data-v-7562bc03],.dropdownList>div>input:focus~.conditions>div>span[data-v-7562bc03],.dropdownList>div>select:focus~.conditions>div>span[data-v-7562bc03],.dropdownList>div>textarea:focus~.conditions>div>span[data-v-7562bc03]{margin-right:8px}.dropdownList>div>datalist~.conditions[data-v-7562bc03],.dropdownList>div>input~.conditions[data-v-7562bc03],.dropdownList>div>select~.conditions[data-v-7562bc03],.dropdownList>div>textarea~.conditions[data-v-7562bc03]{display:none}.dropdownList>div.iconPadding>span[data-v-7562bc03]{position:absolute;z-index:10;left:8px;top:50%;transform:translate(0,-50%);color:var(--primaryColor)}.dropdownList>div.iconPadding>span+datalist[data-v-7562bc03],.dropdownList>div.iconPadding>span+input[data-v-7562bc03],.dropdownList>div.iconPadding>span+select[data-v-7562bc03],.dropdownList>div.iconPadding>span+textarea[data-v-7562bc03]{padding:8px 16px 8px 40px;border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.dropdownList>div.iconPadding>span+datalist[data-v-7562bc03]:-webkit-autofill,.dropdownList>div.iconPadding>span+datalist[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div.iconPadding>span+datalist[data-v-7562bc03]:-webkit-autofill:hover,.dropdownList>div.iconPadding>span+input[data-v-7562bc03]:-webkit-autofill,.dropdownList>div.iconPadding>span+input[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div.iconPadding>span+input[data-v-7562bc03]:-webkit-autofill:hover,.dropdownList>div.iconPadding>span+select[data-v-7562bc03]:-webkit-autofill,.dropdownList>div.iconPadding>span+select[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div.iconPadding>span+select[data-v-7562bc03]:-webkit-autofill:hover,.dropdownList>div.iconPadding>span+textarea[data-v-7562bc03]:-webkit-autofill,.dropdownList>div.iconPadding>span+textarea[data-v-7562bc03]:-webkit-autofill:focus,.dropdownList>div.iconPadding>span+textarea[data-v-7562bc03]:-webkit-autofill:hover{border-color:none}.dropdownList>div.iconPadding>span+datalist+span[data-v-7562bc03],.dropdownList>div.iconPadding>span+input+span[data-v-7562bc03],.dropdownList>div.iconPadding>span+select+span[data-v-7562bc03],.dropdownList>div.iconPadding>span+textarea+span[data-v-7562bc03]{cursor:pointer;font-size:16px;left:calc(100% + 8px);color:var(--accentColor)}.dropdownList>div.iconPadding>span+datalist:focus~.conditions[data-v-7562bc03],.dropdownList>div.iconPadding>span+input:focus~.conditions[data-v-7562bc03],.dropdownList>div.iconPadding>span+select:focus~.conditions[data-v-7562bc03],.dropdownList>div.iconPadding>span+textarea:focus~.conditions[data-v-7562bc03]{display:flex;flex-direction:column;position:absolute;top:100%;height:fit-content;width:fit-content;background-color:var(--backgroundColor);border-radius:4px;padding:8px 16px;z-index:10;box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),inset 0 0 4px var(--shadowColor);z-index:inherit}.dropdownList>div.iconPadding>span+datalist:focus~.conditions>div[data-v-7562bc03],.dropdownList>div.iconPadding>span+input:focus~.conditions>div[data-v-7562bc03],.dropdownList>div.iconPadding>span+select:focus~.conditions>div[data-v-7562bc03],.dropdownList>div.iconPadding>span+textarea:focus~.conditions>div[data-v-7562bc03]{display:flex;flex-direction:row;padding:8px 16px}.dropdownList>div.iconPadding>span+datalist:focus~.conditions>div>span[data-v-7562bc03],.dropdownList>div.iconPadding>span+input:focus~.conditions>div>span[data-v-7562bc03],.dropdownList>div.iconPadding>span+select:focus~.conditions>div>span[data-v-7562bc03],.dropdownList>div.iconPadding>span+textarea:focus~.conditions>div>span[data-v-7562bc03]{margin-right:8px}.dropdownList>div.iconPadding>span+datalist~.conditions[data-v-7562bc03],.dropdownList>div.iconPadding>span+input~.conditions[data-v-7562bc03],.dropdownList>div.iconPadding>span+select~.conditions[data-v-7562bc03],.dropdownList>div.iconPadding>span+textarea~.conditions[data-v-7562bc03]{display:none}.dropdownList>div>input[type=file][data-v-7562bc03]{padding-left:16px}.dropdownList>div>select+span[data-v-7562bc03]{left:40px}.dropdownList>div.files[data-v-7562bc03]{display:flex;flex-direction:column;flex-wrap:nowrap;color:var(--textColor);border:none}.dropdownList>div.files>div[data-v-7562bc03]{display:flex;margin-top:8px;padding:16px 8px;border-radius:4px;background-color:var(--secondaryColor);position:relative;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:inherit}.dropdownList>div.files>div>div[data-v-7562bc03]{display:flex;flex-direction:row;flex-wrap:nowrap}.dropdownList>div.files>div>div>span[data-v-7562bc03]{align-self:center;padding:16px auto;font-size:16px;margin-right:8px}.dropdownList>div.files>div>div>.fileSize[data-v-7562bc03]{position:absolute;right:8px;bottom:8px;font-size:12px}.dropdownList>div.files>div>div>.removeFile[data-v-7562bc03]{position:absolute;right:8px;top:8px}.dropdownList .maskField[data-v-7562bc03]{width:fit-content;border-radius:4px;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:placeholderSkeleton-data-v-7562bc03;background-image:-webkit-gradient(linear,left center,right center,from(#eee),color-stop(.4,#777),color-stop(.7,#777),to(#eee));background-image:-webkit-linear-gradient(left,#eee 0,#777 40%,#777 70%,#eee 100%);background-size:800px 104px}.dropdownList .maskField[data-v-7562bc03],.dropdownList .maskField *[data-v-7562bc03],.dropdownList .maskField[data-v-7562bc03] ::placeholder,.dropdownList .maskField div[data-v-7562bc03],.dropdownList .maskField div[data-v-7562bc03]::placeholder,.dropdownList .maskField[data-v-7562bc03]::placeholder{color:transparent!important;border-color:transparent!important;background-color:transparent!important}@-webkit-keyframes placeholderSkeleton-data-v-7562bc03{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderSkeleton-data-v-7562bc03{0%{background-position:-468px 0}100%{background-position:468px 0}}@-webkit-keyframes skeletonAnimate-data-v-7562bc03{from{background-position:top left}to{background-position:top right}}@keyframes skeletonAnimate-data-v-7562bc03{from{background-position:top left}to{background-position:top right}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$o = "data-v-7562bc03";
/* module identifier */

const __vue_module_identifier__$o = undefined;
/* functional template */

const __vue_is_functional_template__$o = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$o = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$o,
  staticRenderFns: __vue_staticRenderFns__$o
}, __vue_inject_styles__$o, __vue_script__$o, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, false, createInjector, undefined, undefined);

//
var script$p = {
  name: 'vueFilter',

  data() {
    const d_filterTypeValue = null;
    const d_filterOptionValue = null;
    var d_showFilter = false;
    return {
      d_filterTypeValue,
      d_filterOptionValue,
      d_showFilter
    }; //return
  },

  //data
  props: {
    filters: {
      required: true,
      type: Object
    },
    selected: {
      required: false,
      type: Object,
      default: null
    }
  },
  //props
  methods: {
    toggleFilter: function () {
      this.d_showFilter = !this.d_showFilter;
    },
    //toggleFilter
    removeFilter: function (type, value) {
      this.d_filterOptionValue = value;
      this.d_filterTypeValue = type;
      this.updateFilter();
    },
    //removeFilter
    updateFilter: function (e) {
      this.$emit("updateFilter", {
        type: this.d_filterTypeValue,
        value: this.d_filterOptionValue
      });
      this.d_filterOptionValue = null;
      this.d_filterTypeValue = null;

      if (this.d_showFilter) {
        this.toggleFilter();
      }
    } //updateFilter

  },
  //methods
  computed: {
    optionsIndex: function () {
      return this.filters["type"].indexOf(this.d_filterTypeValue);
    }
  },
  //computed
  components: {
    dropdownList: __vue_component__$o,
    vueButton: __vue_component__$4
  } //components

}; //default

/* script */
const __vue_script__$p = script$p;
/* template */

var __vue_render__$p = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vueFilter"
  }, [_c('div', {
    class: {
      open: _vm.d_showFilter || _vm.selected && _vm.selected["type"].length != 0
    }
  }, [_c('vue-button', {
    attrs: {
      "type": "button",
      "tag": "filterButton",
      "icon": "fas fa-filter",
      "category": "icon",
      "ctx": _vm.toggleFilter
    }
  }), _vm._v(" "), _vm.selected && _vm.selected["type"].length != 0 ? _vm._l(_vm.selected["type"], function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "selectedFilter"
    }, [_c('div', {
      attrs: {
        "data-toggle": "tooltip",
        "data-placement": "top",
        "title": item
      }
    }, [_vm._v("\n          " + _vm._s(_vm.selected["value"][index]) + "\n        ")]), _vm._v(" "), _c('div', [_c('span', {
      staticClass: "fas fa-times",
      on: {
        "click": function ($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }

          return _vm.removeFilter(item, _vm.selected["value"][index]);
        }
      }
    })])]);
  }) : _vm._e()], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.d_showFilter,
      expression: "d_showFilter"
    }]
  }, [_c('div', [_c('dropdown-list', {
    attrs: {
      "label": "Type",
      "name": "filterType",
      "value": _vm.d_filterTypeValue,
      "options": _vm.filters["type"]
    },
    on: {
      "notify": _vm.alerts,
      "value": function (val) {
        return _vm.d_filterTypeValue = val;
      }
    }
  })], 1), _vm._v(" "), _vm.optionsIndex > -1 ? _c('div', [_c('dropdown-list', {
    attrs: {
      "label": "Value",
      "name": "filterType",
      "value": _vm.d_filterOptionValue,
      "options": _vm.filters["options"][_vm.optionsIndex]
    },
    on: {
      "notify": _vm.alerts,
      "value": function (val) {
        return _vm.d_filterOptionValue = val;
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.optionsIndex > -1 ? _c('div', [_c('vue-button', {
    attrs: {
      "type": "button",
      "tag": "filterButton",
      "text": "Add",
      "category": "small",
      "disabled": _vm.d_filterOptionValue == null,
      "ctx": _vm.updateFilter
    }
  })], 1) : _vm._e()])]);
};

var __vue_staticRenderFns__$p = [];
/* style */

const __vue_inject_styles__$p = function (inject) {
  if (!inject) return;
  inject("data-v-2500159e_0", {
    source: ".vueFilter[data-v-2500159e]{display:flex;flex-direction:column;max-width:480px;min-width:80px;position:relative}.vueFilter>div:first-child.open[data-v-2500159e]{background-color:var(--backgroundColor);width:fit-content;border-radius:4px;border:1px solid darken(@backgroundColor,10%)}.vueFilter>div:first-child .selectedFilter[data-v-2500159e]{display:inline-flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;background-color:var(--primaryColor);color:var(--white);margin-right:8px;border-radius:4px;padding:2px 4px}.vueFilter>div:first-child .selectedFilter>div[data-v-2500159e]{font-weight:700;letter-spacing:1px}.vueFilter>div:first-child .selectedFilter>div span[data-v-2500159e]{margin-left:8px}.vueFilter>div[data-v-2500159e]:last-child{display:flex;flex-direction:column;padding:4px 8px;border:1px solid darken(@backgroundColor,10%);border-radius:0 4px 4px 4px;background-color:var(--backgroundColor);position:absolute;top:32px}.vueFilter>div:last-child>div[data-v-2500159e]:last-child{display:flex;flex-direction:row-reverse}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$p = "data-v-2500159e";
/* module identifier */

const __vue_module_identifier__$p = undefined;
/* functional template */

const __vue_is_functional_template__$p = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$p = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$p,
  staticRenderFns: __vue_staticRenderFns__$p
}, __vue_inject_styles__$p, __vue_script__$p, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
var script$q = {
  name: "vueImg",
  //data
  props: {
    src: {
      required: true,
      type: String,
      default: null
    },
    alt: {
      required: false,
      type: String,
      default: function (value) {
        if (value) {
          return value;
        }

        return "An image goes here";
      }
    }
  },

  data() {// eslint-disable-next-line @typescript-eslint/no-var-requires
    // const dImageSource = require("../../../assets/SVG/SVG/default.svg");
    // return {
    //   dImageSource: dImageSource
    // }; //return
  } //props


}; //default

/* script */
const __vue_script__$q = script$q;
/* template */

var __vue_render__$q = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__$q = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('img', {
    staticClass: "vueImg",
    attrs: {
      "src": _vm.src,
      "alt": _vm.alt,
      "title": _vm.alt
    }
  });
}];
/* style */

const __vue_inject_styles__$q = function (inject) {
  if (!inject) return;
  inject("data-v-539cc498_0", {
    source: ".vueImg[data-v-539cc498]{display:inline-flex;background-color:transparent}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$q = "data-v-539cc498";
/* module identifier */

const __vue_module_identifier__$q = undefined;
/* functional template */

const __vue_is_functional_template__$q = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$q = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$q,
  staticRenderFns: __vue_staticRenderFns__$q
}, __vue_inject_styles__$q, __vue_script__$q, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, false, createInjector, undefined, undefined);

//
var script$r = {
  name: 'vueModal',

  data() {
    const d_showModal = false;
    return {
      d_showModal: d_showModal
    }; //return
  },

  //data
  props: {
    modalTitle: {
      required: false,
      type: String
    },
    text: {
      required: false,
      type: String,
      default: null
    },
    tag: {
      required: false,
      type: String,
      default: null
    },
    icon: {
      required: false,
      type: String,
      default: null
    },
    showModal: {
      required: false,
      type: Boolean,
      default: false
    },
    ctx: {
      required: false,
      type: Function
    }
  },
  //props
  components: {
    vueButton: __vue_component__$4
  },

  //components
  mounted() {
    document.addEventListener("click", this.clickHandler, {
      capture: false,
      // top to bottom bubbling/propogation
      once: false //should work only once

    }); // console.log(this.$router.currentRoute.value.meta.requiresAuth);
  },

  unmounted() {
    document.removeEventListener("click", this.clickHandler, {
      capture: false,
      // top to bottom bubbling/propogation
      once: false //should work only once

    }); // console.log(this.$router.currentRoute.value.meta.requiresAuth);
  },

  methods: {
    clickHandler: function (event) {
      // console.log("modal", !event.target.closest(".sideNav").length);
      if (!event.target.closest(".modal-container") && this.d_showModal) {
        this.toggle(); // alert("click outside!");
      } // event.stopPropogation(); //stop event bubbling

    },
    //clickHandler
    toggle: function () {
      this.d_showModal = !this.d_showModal;
    } //toggle

  },

  //methods
  created() {
    this.d_showModal = this.showModal;
  } //created


}; //default

/* script */
const __vue_script__$r = script$r;
/* template */

var __vue_render__$r = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vueModal"
  }, [_vm.text ? _c('vue-button', {
    attrs: {
      "tag": "open" + _vm.tag + "Modal",
      "text": _vm.text,
      "icon": _vm.icon,
      "category": "small",
      "ctx": _vm.toggle.bind(this)
    }
  }) : _vm._e(), _vm._v(" "), _vm.d_showModal ? _c('transition', {
    attrs: {
      "name": "modal",
      "showModal": _vm.d_showModal
    }
  }, [_c('div', {
    staticClass: "modal-mask"
  }, [_c('div', {
    staticClass: "modal-wrapper"
  }, [_c('div', {
    staticClass: "modal-container"
  }, [_vm.modalTitle ? _c('div', {
    staticClass: "modal-header"
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("default", [_vm._v("\n\t\t\t\t\t\t\t\tdefault body\n\t\t\t\t\t\t\t")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_vm.ctx ? _c('vue-button', {
    attrs: {
      "tag": _vm.tag,
      "text": "CONFIRM",
      "icon": _vm.icon,
      "category": _vm.small,
      "ctx": _vm.ctx
    }
  }) : _vm._e(), _vm._v(" "), _c('vue-button', {
    staticClass: "closeButton",
    attrs: {
      "tag": "closeModal",
      "icon": "fas fa-times",
      "category": "icon-sm",
      "ctx": _vm.toggle.bind(this)
    }
  })], 1)])])])]) : _vm._e()], 1);
};

var __vue_staticRenderFns__$r = [];
/* style */

const __vue_inject_styles__$r = function (inject) {
  if (!inject) return;
  inject("data-v-48e010f4_0", {
    source: ".vueModal[data-v-48e010f4]{display:inline-flex}.vueModal .modal-mask[data-v-48e010f4]{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.vueModal .modal-mask .modal-wrapper[data-v-48e010f4]{display:table-cell;vertical-align:middle}.vueModal .modal-mask .modal-wrapper .modal-container[data-v-48e010f4]{min-width:320px;max-width:800px;height:fit-content;margin:0 auto;background-color:var(--backgroundColor);border-radius:4px;box-shadow:inset 0 0 4px var(--shadowColor),0 2px 8px rgba(0,0,0,.33) var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 2px 8px rgba(0,0,0,.33) var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 2px 8px rgba(0,0,0,.33) var(--shadowColor);z-index:inherit;transition:all .3s ease;position:relative}.vueModal .modal-mask .modal-wrapper .modal-container .modal-header[data-v-48e010f4]{color:var(--primaryColor);background-color:#d4e0d7;border-top-left-radius:4px;border-top-right-radius:4px;padding:8px 16px;font-size:32px;height:auto;text-align:left}.vueModal .modal-mask .modal-wrapper .modal-container .modal-body[data-v-48e010f4]{margin:8px 16px;display:flex;flex-direction:row;flex-wrap:wrap}.vueModal .modal-mask .modal-wrapper .modal-container .modal-footer[data-v-48e010f4]{padding:8px 16px;display:flex;flex-direction:row-reverse;flex-wrap:nowrap}.vueModal .modal-mask .modal-wrapper .modal-container .modal-footer>button[data-v-48e010f4]{margin:auto 0 auto 32px;justify-content:space-around}.vueModal .modal-mask .modal-wrapper .modal-container .modal-footer>.closeButton[data-v-48e010f4]{position:absolute;top:8px;right:8px}.modal-enter[data-v-48e010f4],.modal-leave-active[data-v-48e010f4]{opacity:0;filter:alpha(opacity=0)}.modal-enter .modal-container[data-v-48e010f4],.modal-leave-active .modal-container[data-v-48e010f4]{-webkit-transform:scale(1.1);transform:scale(1.1)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$r = "data-v-48e010f4";
/* module identifier */

const __vue_module_identifier__$r = undefined;
/* functional template */

const __vue_is_functional_template__$r = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$r = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$r,
  staticRenderFns: __vue_staticRenderFns__$r
}, __vue_inject_styles__$r, __vue_script__$r, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, false, createInjector, undefined, undefined);

const toggle = {
  data() {
    const show = [];
    const themes = [{
      name: "default",
      icon: "fas fa-sun"
    }, {
      name: "darkMode",
      icon: "fas fa-moon"
    }];
    const selected = null;
    return {
      show,
      themes,
      selected
    };
  },

  methods: {
    toggle: function (id) {
      const show = this.show;

      if (show.indexOf(id) == -1) {
        this.show = [...show, id];
      } else {
        //filter returns an array where id is not present
        this.show = show.filter(e => e !== id);
      }
    },
    //toggle
    trans: function () {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 300);
    },
    //trans
    theme: function () {
      const theme = this.selected; // this.cookie = new cookie();

      if (theme != "darkMode") {
        this.setCookie("theme", "darkMode", 100);
        this.trans();
        document.documentElement.setAttribute("theme", "darkMode");
        this.selected = "darkMode";
      } else {
        this.setCookie("theme", "default", 100);
        this.trans();
        document.documentElement.setAttribute("theme", "default");
        this.selected = "default";
      }
    },
    //theme
    activeTheme: function () {
      const themes = this.themes; // console.log(themes, this.selected);

      if (this.selected) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i].name == this.selected) {
            return themes[i];
          }
        }
      }

      return "fas fa-question-circle";
    },
    //activeTheme
    isOpen: function (id) {
      return this.show.indexOf(id) != -1;
    } //isOpen

  },

  mounted() {
    if (this.checkCookie("theme")) {
      this.selected = this.getCookie("theme");
    } else {
      this.selected = this.themes[0].name;
      this.setCookie("theme", this.selected, 100);
    }

    document.documentElement.setAttribute("theme", this.selected);
  }

};

//https://developers.google.com/identity/sign-in/web/build-button
const authentication = {
  data() {
    const token = null;
    const profile = false;
    const googleUserProfile = null;
    const GclientSecret = "mpYEEEaJX4lCHdESYhKVUoJ1";
    const Gname = "google-signin-client_id";
    const GClientID = "94699127686-kq6vksueuk2rne078alt4pv2951hvq13.apps.googleusercontent.com";
    const gapi = null;
    const user = null;
    const sqliteUser = null;
    const sqliteToken = null;
    return {
      token,
      googleUserProfile,
      profile,
      GclientSecret,
      Gname,
      GClientID,
      gapi,
      user,
      sqliteUser,
      sqliteToken
    };
  },

  //data
  mixins: [cookie],
  //mixins
  computed: {
    signedIn: function () {
      let signedIn = false;

      if (this.gapi) {
        signedIn = this.gapi && this.gapi.isSignedIn();
      } else if (localStorage.getItem("user")) {
        signedIn = localStorage.getItem("jwt") != null;
      }

      return signedIn;
    }
  },
  //computed
  methods: {
    //initialize user data when signedIn via Google
    init: function (response) {
      if (response) {
        this.gapi = response.detail.gapi; //if signedIn

        if (this.gapi.isSignedIn()) {
          this.googleUserProfile = this.gapi.getBasicProfile();
          this.user = {
            ID: this.googleUserProfile.getId(),
            name: this.googleUserProfile.getName(),
            image: this.googleUserProfile.getImageUrl(),
            email: this.googleUserProfile.getEmail(),
            token: this.gapi.getAuthResponse().id_token,
            isLoggedIn: this.gapi.isSignedIn(),
            isAdmin: 0
          };
          this.setCookie("gapi", JSON.stringify(this.gapi));
          localStorage.setItem("gapi", JSON.stringify(this.gapi));
          this.setCookie("user", JSON.stringify(this.user));
          localStorage.setItem("user", JSON.stringify(this.user));
        }
      }
    },
    //init
    signOut: function () {
      if (this.gapi) {
        this.gapi.disconnect();
        this.user.isLoggedIn = false;
      }

      this.deleteCookie("user");
      localStorage.removeItem("jwt");
      this.deleteCookie("user");
      localStorage.removeItem("user");
      location.reload(true);
    } //signOut

  },

  //methods
  beforeCreate() {
    const googleLoginScript = document.createElement("script");
    googleLoginScript.type = "text/javascript";
    googleLoginScript.async = true;
    googleLoginScript.defer = true;
    googleLoginScript.src = "https://apis.google.com/js/platform.js?onLoad=triggerGoogleLoaded";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginScript, s);
  },

  created() {
    //add eventlistner to catch the gapi after the platform.js loads
    window.addEventListener("google-loaded", this.init); //add meta and srcipt tag for google autnentication

    const googleLoginMeta = document.createElement("meta");
    googleLoginMeta.name = this.Gname;
    googleLoginMeta.content = this.GClientID;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginMeta, s);
  } //mounted


};

//
var script$s = {
  name: "VueHeader",
  components: {
    vueButton: __vue_component__$4,
    vueImg: __vue_component__$q
  },
  //data
  mixins: [toggle, authentication],
  props: {
    logoLink: {
      required: false,
      type: String,
      default: ""
    },
    title: {
      required: false,
      type: String,
      default: ""
    },
    subTitle: {
      required: false,
      type: String,
      default: ""
    },
    nav: {
      required: true,
      type: Object,
      default: null
    }
  },
  computed: {
    themeIcon: function () {
      return this.activeTheme().icon;
    },
    //themeIcon
    toggleNavIcon: function () {
      if (this.isOpen("nav")) {
        return "fas fa-times";
      }

      return "fas fa-bars";
    } //toggleNavIcon

  },

  //props
  mounted() {
    document.addEventListener("click", this.clickHandler, {
      capture: false,
      // top to bottom bubbling/propogation
      once: false //should work only once

    }); // console.log(this.$router.currentRoute.value.meta.requiresAuth);
  },

  methods: {
    clickHandler: function (event) {
      // console.log("modal", !event.target.closest(".vueHeader").length);
      if (!event.target.closest(".vueHeader") && this.isOpen("nav")) {
        this.toggleNavigation(); // alert("click outside!");
      } // event.stopPropogation(); //stop event bubbling

    },
    //clickHandler
    login: function () {
      this.$router.push({
        name: "login"
      });
    },
    //login
    toggleNavigation: function () {
      this.$refs["vueHeader"].classList.toggle("showNav");
      this.toggle("nav");
    } //toggleNavigation

  }
}; //default

/* script */
const __vue_script__$s = script$s;
/* template */

var __vue_render__$s = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('header', {
    ref: "vueHeader",
    staticClass: "vueHeader"
  }, [_vm.toggleNavIcon ? _c('vue-button', {
    staticClass: "menuTrigger",
    attrs: {
      "buttop-name": "toggleNav",
      "button-style": "icon-lg",
      "button-icon": _vm.toggleNavIcon,
      "ctx": _vm.toggleNavigation.bind(this)
    }
  }) : _vm._e(), _vm._v(" "), _c('nav', [_c('ul', _vm._l(_vm.nav, function (navigation, index) {
    return _c('li', {
      key: index + '-' + navigation.name
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: navigation.component
        }
      }
    }, [navigation.id === 0 ? [_c('vue-img', {
      attrs: {
        "src": _vm.logoLink,
        "alt": "Logo"
      }
    }), _vm._v(" "), _c('h3', [_vm._v("\n              " + _vm._s(_vm.title) + "\n              "), _c('h5', [_vm._v(_vm._s(_vm.subTitle))])])] : [index > 0 ? _c('span', {
      class: navigation.icon
    }) : [_c('vue-img', {
      attrs: {
        "src": _vm.logoLink,
        "alt": "Kkiokio.com"
      }
    })], _vm._v(" "), _c('div', [_c('h4', [_vm._v(_vm._s(navigation.name))]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(navigation.tagline))])])]], 2)], 1);
  }), 0)]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "fas fa-user"
  }), _vm._v(" "), _c('div', {
    staticClass: "user"
  }, [_vm.signedIn ? [_c('vue-img', {
    attrs: {
      "src": _vm.user ? _vm.user.image : null,
      "alt": "Logo"
    }
  }), _vm._v(" "), _vm.user ? _c('h5', [_vm._v("\n          " + _vm._s(_vm.user ? _vm.user.name : null) + "\n        ")]) : _c('h5', [_vm._v("\n          Guest\n        ")])] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "g-signin2",
    attrs: {
      "data-onsuccess": "triggerGoogleLoaded"
    }
  }), _vm._v(" "), !_vm.signedIn ? _c('vue-button', {
    attrs: {
      "buttop-name": "loginButton",
      "button-style": "text-sm",
      "button-text": "LogIn",
      "button-icon": "fas fa-sign-in-alt",
      "ctx": _vm.login.bind(this)
    }
  }) : _c('vue-button', {
    attrs: {
      "button-name": "googleSignOutButton",
      "button-text": "logout",
      "button-icon": "fas fa-sign-out-alt",
      "button-style": "text-sm",
      "ctx": _vm.signOut.bind()
    }
  }), _vm._v(" "), _vm.themeIcon ? _c('vue-button', {
    attrs: {
      "buttop-name": "themeToggle",
      "button-style": "text-sm",
      "button-text": "Theme",
      "button-icon": _vm.themeIcon,
      "ctx": _vm.theme.bind(this)
    }
  }) : _vm._e()], 2)])], 1);
};

var __vue_staticRenderFns__$s = [];
/* style */

const __vue_inject_styles__$s = function (inject) {
  if (!inject) return;
  inject("data-v-0b83e7c8_0", {
    source: "header.vueHeader[data-v-0b83e7c8]{display:flex;align-items:center;justify-content:space-around;padding:8px 32px;background-color:var(--navBackground);max-width:100vw;z-index:200;height:120px}header.vueHeader>.menuTrigger[data-v-0b83e7c8]{display:none;margin-left:auto}header.vueHeader>nav>ul[data-v-0b83e7c8]{display:flex;flex-direction:row}header.vueHeader>nav>ul>li[data-v-0b83e7c8]{display:flex;justify-content:space-evenly;align-items:flex-start;flex:1}header.vueHeader>nav>ul>li[data-v-0b83e7c8]:first-child{display:none}header.vueHeader>nav>ul>li:first-child>a>img[data-v-0b83e7c8]{display:block;height:64px;margin:auto}header.vueHeader>nav>ul>li:first-child>a>img+h3[data-v-0b83e7c8]{display:flex;flex-direction:column}header.vueHeader>nav>ul>li:first-child>a>img+h3>h5[data-v-0b83e7c8]{align-self:flex-end;color:var(--white)}header.vueHeader>nav>ul>li>a[data-v-0b83e7c8]{margin:0 16px;color:var(--navText);position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}header.vueHeader>nav>ul>li>a>span[data-v-0b83e7c8]{font-size:24px;color:var(--navText);opacity:.64}header.vueHeader>nav>ul>li>a>img[data-v-0b83e7c8]{height:48px}header.vueHeader>nav>ul>li>a>div[data-v-0b83e7c8]{display:flex;flex-direction:column;margin-left:16px}header.vueHeader>nav>ul>li>a>div>h4[data-v-0b83e7c8]{color:var(--navText)}header.vueHeader>nav>ul>li>a>div>h4+span[data-v-0b83e7c8]{font-size:12px;color:var(--navText);opacity:.64}header.vueHeader>nav>ul>li>a.router-link-active[data-v-0b83e7c8]{color:var(--primaryColor)}header.vueHeader>nav>ul>li>a.router-link-active[data-v-0b83e7c8]::before{transform:scale(.8)}header.vueHeader>nav>ul>li>a.router-link-active.router-link-exact-active[data-v-0b83e7c8]{color:var(--primaryColor)}header.vueHeader>nav>ul>li>a.router-link-active>span[data-v-0b83e7c8]{opacity:1}header.vueHeader>nav>ul>li>a.router-link-active>div>h4[data-v-0b83e7c8]{color:var(--primaryColor);font-weight:700}header.vueHeader>nav>ul>li>a.router-link-active>div>h4+span[data-v-0b83e7c8]{color:var(--navText);opacity:1}header.vueHeader>nav>ul>li>a[data-v-0b83e7c8]::before{content:\"\";position:absolute;width:100%;background-color:var(--primaryColor);bottom:-8px;height:2px;transform:scale(0);transition:all .3s cubic-bezier(.55,0,.1,1)}header.vueHeader>nav>ul>li>a[data-v-0b83e7c8]:hover{color:var(--primaryColor)}header.vueHeader>nav>ul>li>a[data-v-0b83e7c8]:hover::before{transform:scale(1.2)}header.vueHeader>nav>ul>li>a:hover>span[data-v-0b83e7c8]{color:var(--navText);opacity:1}header.vueHeader>nav>ul>li>a:hover>div>h4[data-v-0b83e7c8]{color:var(--primaryColor)}header.vueHeader>nav>ul>li>a:hover>div>h4+span[data-v-0b83e7c8]{color:var(--navText);opacity:1}header.vueHeader>nav+div[data-v-0b83e7c8]{display:flex;margin-left:auto;position:relative}header.vueHeader>nav+div>span[data-v-0b83e7c8]{color:var(--primaryColor);padding:8px;border:1px solid var(--primaryColor);border-radius:50%;cursor:pointer}header.vueHeader>nav+div>span+.user[data-v-0b83e7c8]{display:none;position:absolute;border:1px solid var(--primaryColor)}header.vueHeader>nav+div>span+.user>img[data-v-0b83e7c8]{width:80px}header.vueHeader>nav+div>span+.user>.g-signin2[data-v-0b83e7c8]{display:none}header.vueHeader>nav+div:hover>span[data-v-0b83e7c8]{border-radius:50% 50% 0 50%;background-color:var(--primaryColor);color:var(--navBackground);box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:1001}header.vueHeader>nav+div:hover>span+.user[data-v-0b83e7c8]{display:flex;flex-direction:column;background-color:var(--backgroundColor);top:100%;right:0;height:fit-content;width:fit-content;border-radius:4px;padding:16px 32px;box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-webkit-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);-moz-box-shadow:inset 0 0 4px var(--shadowColor),0 1px 2px var(--shadowColor);z-index:1001}@media screen and (max-width:1540px){header.vueHeader[data-v-0b83e7c8]{flex-direction:column;flex-wrap:nowrap;padding:8px 16px;border-bottom-right-radius:8px;height:auto;width:fit-content;position:fixed;left:0;top:0;max-height:100vh;overflow-y:auto}header.vueHeader[data-v-0b83e7c8]::-webkit-scrollbar{width:8px}header.vueHeader[data-v-0b83e7c8]::-webkit-scrollbar-track{background:var(--backgroundColor)}header.vueHeader[data-v-0b83e7c8]::-webkit-scrollbar-thumb{background:var(--primaryColor);border-radius:8px}header.vueHeader>.menuTrigger[data-v-0b83e7c8]{display:flex;align-self:flex-end}header.vueHeader>nav[data-v-0b83e7c8]{display:none}header.vueHeader>nav+div[data-v-0b83e7c8]{display:none}header.vueHeader.showNav[data-v-0b83e7c8]{height:100vh;outline:9999px solid rgba(0,0,0,.5);border-bottom-right-radius:0}header.vueHeader.showNav>nav[data-v-0b83e7c8]{display:flex;flex-direction:column;height:100%}header.vueHeader.showNav>nav>ul[data-v-0b83e7c8]{flex-direction:column;justify-content:space-between;align-items:flex-start}header.vueHeader.showNav>nav>ul>li[data-v-0b83e7c8]{margin-top:16px}header.vueHeader.showNav>nav>ul>li>a>img[data-v-0b83e7c8]{height:32px}header.vueHeader.showNav>nav>ul>li[data-v-0b83e7c8]:first-child{display:flex}header.vueHeader.showNav>nav>ul>li:first-child>a[data-v-0b83e7c8]{flex-direction:column}header.vueHeader.showNav>nav>ul>li:first-child>a>img[data-v-0b83e7c8]{height:96px}header.vueHeader.showNav>nav>ul>li:first-child>a[data-v-0b83e7c8]::before{display:none}header.vueHeader.showNav>nav+div[data-v-0b83e7c8]{display:flex;flex-direction:column;justify-content:space-between}header.vueHeader.showNav>nav+div>button[data-v-0b83e7c8]{margin-bottom:16px}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$s = "data-v-0b83e7c8";
/* module identifier */

const __vue_module_identifier__$s = undefined;
/* functional template */

const __vue_is_functional_template__$s = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$s = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$s,
  staticRenderFns: __vue_staticRenderFns__$s
}, __vue_inject_styles__$s, __vue_script__$s, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, false, createInjector, undefined, undefined);

//
var script$t = {
  name: "sideNav",
  components: {
    vueButton: __vue_component__$4,
    vueImg: __vue_component__$q
  },
  //data
  mixins: [toggle, authentication],
  props: {
    logoLink: {
      required: false,
      type: String,
      default: ""
    },
    title: {
      required: false,
      type: String,
      default: ""
    },
    subTitle: {
      required: false,
      type: String,
      default: ""
    },
    nav: {
      required: true,
      type: Array
    }
  },
  computed: {
    themeIcon: function () {
      return this.activeTheme().icon;
    },
    //themeIcon
    toggleNavIcon: function () {
      if (this.isOpen("nav")) {
        return "fas fa-times";
      }

      return "fas fa-bars";
    } //toggleNavIcon

  },

  //props
  mounted() {
    document.addEventListener("click", this.clickHandler, {
      capture: false,
      // top to bottom bubbling/propogation
      once: false //should work only once

    }); // console.log(this.$router.currentRoute.value.meta.requiresAuth);
  },

  unmounted() {
    document.removeEventListener("click", this.clickHandler, {
      capture: false,
      // top to bottom bubbling/propogation
      once: false //should work only once

    }); // console.log(this.$router.currentRoute.value.meta.requiresAuth);
  },

  methods: {
    clickHandler: function (event) {
      // console.log("modal", !event.target.closest(".sideNav").length);
      if (!event.target.closest(".sideNav") && this.isOpen("nav")) {
        this.toggleNavigation(); // alert("click outside!");
      } // event.stopPropogation(); //stop event bubbling

    },
    //clickHandler
    login: function () {
      this.$router.push({
        name: "login"
      });
    },
    //login
    toggleNavigation: function () {
      this.toggle("nav");
      this.$refs["sideNav"].classList.toggle("showNav");
    } //toggleNavigation

  }
}; //default

/* script */
const __vue_script__$t = script$t;
/* template */

var __vue_render__$t = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('header', {
    ref: "sideNav",
    staticClass: "sideNav"
  }, [_vm.toggleNavIcon ? _c('vue-button', {
    staticClass: "menuTrigger",
    attrs: {
      "tag": "toggleNav",
      "category": "icon-lg",
      "icon": _vm.toggleNavIcon,
      "ctx": _vm.toggleNavigation.bind(this)
    }
  }) : _vm._e(), _vm._v(" "), _c('nav', [_c('ul', _vm._l(_vm.nav, function (navigation, index) {
    return _c('li', {
      key: index + '-' + navigation.name
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: navigation.component
        }
      }
    }, [navigation.id === 0 ? [_c('vue-img', {
      attrs: {
        "src": _vm.logoLink,
        "alt": "Logo"
      }
    }), _vm._v(" "), _c('h3', [_vm._v("\n              " + _vm._s(_vm.title) + "\n              "), _c('h6', [_vm._v(_vm._s(_vm.subTitle))])])] : [_c('span', {
      class: navigation.icon
    }), _vm._v(" "), _c('div', [_c('h4', [_vm._v(_vm._s(navigation.name))]), _vm._v(" "), navigation.tagline ? _c('span', [_vm._v(" " + _vm._s(navigation.tagline))]) : _vm._e()])]], 2), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: navigation.subNav && _vm.$route.path.indexOf(navigation.component) != -1,
        expression: "navigation.subNav && $route.path.indexOf(navigation.component)!=-1"
      }],
      staticClass: "subNav"
    }, _vm._l(navigation.subNav, function (nav2, index) {
      return _c('li', {
        key: index + '-' + nav2.name
      }, [_c('router-link', {
        attrs: {
          "to": {
            name: nav2.component
          }
        }
      }, [_c('span', {
        class: nav2.icon
      }), _vm._v(" "), _c('h4', [_vm._v(_vm._s(nav2.name))])]), _vm._v(" "), nav2.subNav && _vm.$route.path.indexOf(nav2.component) != -1 ? _c('ul', {
        staticClass: "subNav2"
      }, _vm._l(nav2.subNav, function (nav3, index) {
        return _c('li', {
          key: index + '-' + nav3.name
        }, [_c('router-link', {
          attrs: {
            "to": {
              name: nav3.component
            }
          }
        }, [_c('span', {
          class: nav3.icon
        }), _vm._v(" "), _c('h5', [_vm._v(_vm._s(nav3.name))])])], 1);
      }), 0) : _vm._e()], 1);
    }), 0)], 1);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "options"
  }, [_vm._t("options"), _vm._v(" "), _vm.themeIcon ? _c('vue-button', {
    attrs: {
      "tag": "themeToggle",
      "category": "text-sm",
      "text": "Theme",
      "icon": _vm.themeIcon,
      "ctx": _vm.theme.bind(this)
    }
  }) : _vm._e()], 2)], 1);
};

var __vue_staticRenderFns__$t = [];
/* style */

const __vue_inject_styles__$t = function (inject) {
  if (!inject) return;
  inject("data-v-f3e36278_0", {
    source: "header[data-v-f3e36278]{max-height:100vh;overflow-y:auto}header[data-v-f3e36278]::-webkit-scrollbar{width:8px}header[data-v-f3e36278]::-webkit-scrollbar-track{background:var(--backgroundColor)}header[data-v-f3e36278]::-webkit-scrollbar-thumb{background:var(--primaryColor);border-radius:8px}header.sideNav[data-v-f3e36278]{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;padding:16px;background-color:var(--navBackground);max-width:max-content;z-index:200;height:100vh}header.sideNav>nav[data-v-f3e36278]{display:flex;margin-top:16px;height:100%}header.sideNav>nav>ul[data-v-f3e36278]{display:flex;flex-direction:column}header.sideNav>nav>ul>li[data-v-f3e36278]{display:flex;flex-direction:column;margin-bottom:16px}header.sideNav>nav>ul>li[data-v-f3e36278]:first-child{align-self:center}header.sideNav>nav>ul>li:first-child>a[data-v-f3e36278]{display:flex;flex-direction:column}header.sideNav>nav>ul>li:first-child>a>img[data-v-f3e36278]{display:block;height:48px}header.sideNav>nav>ul>li:first-child>a>img+h3[data-v-f3e36278]{display:none}header.sideNav>nav>ul>li:hover>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li:hover>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li:hover>a>span[data-v-f3e36278]{color:var(--accentColor)}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>a[data-v-f3e36278]{display:flex;flex-direction:column;flex-wrap:nowrap;padding:8px 4px}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>a>span[data-v-f3e36278]{align-self:center;font-size:24px;color:#fff}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a>h5[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a>h5[data-v-f3e36278],header.sideNav>nav>ul>li>a>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a>h5[data-v-f3e36278]{display:none}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>.subNav2[data-v-f3e36278]{margin-bottom:8px}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>.subNav2>li[data-v-f3e36278]{display:flex;flex-direction:column}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>.subNav2>li>a[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>a[data-v-f3e36278]{display:flex;padding:8px}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>a>span[data-v-f3e36278]{font-size:20px}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li>a>span+h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>a>span+h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li>a>span+h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>a>span+h4[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>.subNav2>li>a>span+h4[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>a>span+h4[data-v-f3e36278]{display:none}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav>nav>ul>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278]{font-size:12px}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>h5[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>h5[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>h5[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>span[data-v-f3e36278]{color:var(--accentColor)}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>span[data-v-f3e36278]{transform:scale(1.6)}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active.router-link-exact-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active.router-link-exact-active>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active.router-link-exact-active>h5[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active.router-link-exact-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active.router-link-exact-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active.router-link-exact-active>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active.router-link-exact-active>h5[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active.router-link-exact-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active.router-link-exact-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active.router-link-exact-active>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active.router-link-exact-active>h5[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active.router-link-exact-active>span[data-v-f3e36278]{color:var(--accentColor)}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active.router-link-exact-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active.router-link-exact-active>span[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active.router-link-exact-active>span[data-v-f3e36278]{transform:scale(1.2)}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>div>h4[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>div>h4[data-v-f3e36278]{color:#fff;font-weight:700}header.sideNav>nav>ul>li>.subNav>li>.subNav2>li>a.router-link-active>div>h4+span[data-v-f3e36278],header.sideNav>nav>ul>li>.subNav>li>a.router-link-active>div>h4+span[data-v-f3e36278],header.sideNav>nav>ul>li>a.router-link-active>div>h4+span[data-v-f3e36278]{color:#fff}header.sideNav>nav+.options[data-v-f3e36278]{display:flex;position:fixed;top:32px;right:32px}header.sideNav.showNav>.menuTrigger[data-v-f3e36278]{margin-left:auto}header.sideNav.showNav>nav>ul>li[data-v-f3e36278]{align-self:flex-start}header.sideNav.showNav>nav>ul>li[data-v-f3e36278]:first-child{align-self:center}header.sideNav.showNav>nav>ul>li:first-child>a[data-v-f3e36278]{flex-direction:column}header.sideNav.showNav>nav>ul>li:first-child>a>img[data-v-f3e36278]{height:64px}header.sideNav.showNav>nav>ul>li:first-child>a>img+h3[data-v-f3e36278]{display:flex;flex-direction:column;margin-top:8px;color:var(--accentColor)}header.sideNav.showNav>nav>ul>li:first-child>a>img+h3>h6[data-v-f3e36278]{color:var(--navText);align-self:flex-end;color:var(--backgroundColor)}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a[data-v-f3e36278]{display:flex;flex-direction:row;flex-wrap:nowrap}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a>span[data-v-f3e36278]{font-size:20px;margin-right:8px}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a>div>h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a>h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a>h5[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a>div>h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a>h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a>h5[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a>div>h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a>h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a>h5[data-v-f3e36278]{margin:0;display:flex;color:#fff}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li>.subNav2[data-v-f3e36278]{flex-direction:column;margin-left:8px;margin-bottom:0}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li>.subNav2>li[data-v-f3e36278]{flex-direction:column}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li>.subNav2>li>a>span[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li>a>span[data-v-f3e36278]{align-self:center;font-size:12px}header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>.subNav2>li>a>span+h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>.subNav2>li>a+.subNav>li>a>span+h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li>.subNav2>li>a>span+h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>.subNav>li>a+.subNav>li>a>span+h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li>.subNav2>li>a>span+h4[data-v-f3e36278],header.sideNav.showNav>nav>ul>li>a+.subNav>li>a>span+h4[data-v-f3e36278]{color:#fff}@media screen and (max-width:1540px){header.sideNav[data-v-f3e36278]{flex-direction:column;border-bottom-right-radius:8px;height:auto;width:fit-content;position:fixed;left:0;top:0;max-height:100vh;overflow-y:auto}header.sideNav[data-v-f3e36278]::-webkit-scrollbar{width:8px}header.sideNav[data-v-f3e36278]::-webkit-scrollbar-track{background:var(--backgroundColor)}header.sideNav[data-v-f3e36278]::-webkit-scrollbar-thumb{background:var(--primaryColor);border-radius:8px}header.sideNav>.menuTrigger[data-v-f3e36278]{display:flex;align-self:flex-end}header.sideNav>nav[data-v-f3e36278]{display:none}header.sideNav>nav+div[data-v-f3e36278]{display:none}header.sideNav.showNav[data-v-f3e36278]{height:100vh;outline:9999px solid rgba(0,0,0,.5);border-bottom-right-radius:0}header.sideNav.showNav>nav[data-v-f3e36278]{display:flex;flex-direction:column;height:100%}header.sideNav.showNav>nav>ul[data-v-f3e36278]{flex-direction:column;justify-content:space-between;align-items:flex-start}header.sideNav.showNav>nav>ul>li>a>img[data-v-f3e36278]{height:32px}header.sideNav.showNav>nav>ul>li[data-v-f3e36278]:first-child{display:flex}header.sideNav.showNav>nav>ul>li:first-child>a[data-v-f3e36278]{flex-direction:column}header.sideNav.showNav>nav>ul>li:first-child>a>img[data-v-f3e36278]{height:64px}header.sideNav.showNav>nav>ul>li:first-child>a[data-v-f3e36278]::before{display:none}header.sideNav.showNav>nav+div[data-v-f3e36278]{display:flex;flex-direction:column;justify-content:space-between}header.sideNav.showNav>nav+div>button[data-v-f3e36278]{margin-bottom:16px}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$t = "data-v-f3e36278";
/* module identifier */

const __vue_module_identifier__$t = undefined;
/* functional template */

const __vue_is_functional_template__$t = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$t = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$t,
  staticRenderFns: __vue_staticRenderFns__$t
}, __vue_inject_styles__$t, __vue_script__$t, __vue_scope_id__$t, __vue_is_functional_template__$t, __vue_module_identifier__$t, false, createInjector, undefined, undefined);

//
var script$u = {
  name: 'vueWizard',
  mixins: [alerts],

  data() {
    const d_type = 'button';
    const d_tag = 'consoleTextButton';
    const d_text = 'Click Me';
    const d_icon = 'fas fa-registered';
    const d_category = this.$store.state.category;
    const d_booleanTrue = true;
    const d_form = '';
    const d_ctx = this.consoleClickConfirm;
    return {
      d_type: d_type,
      d_tag: d_tag,
      d_text: d_text,
      d_icon: d_icon,
      d_category: d_category,
      d_booleanTrue: d_booleanTrue,
      d_form: d_form,
      d_ctx: d_ctx,
      d_textSubmit: 'Submit',
      d_textNext: 'Next Page',
      d_textPrevious: 'Previous Page',
      d_textConfirm: 'Confirm',
      d_completed: false,
      d_totalSteps: null,
      d_currentStep: null
    };
  },

  //data
  props: {
    steps: {
      type: Array,
      required: true
    },
    alert: {
      type: Object,
      required: true,
      default: () => {
        return {
          error: "",
          warning: ""
        };
      }
    }
  },
  //props
  components: {
    vueButton: __vue_component__$4
  },
  //components
  computed: {
    validInput: function () {
      var alerts = this.alerts;
      var inputs = document.getElementsByTagName('input');

      for (var index = 0; index < inputs.length; ++index) {
        // console.log(inputs[index].name)
        if (!alerts['error'] && !alerts['warning'] && inputs[index].required && !inputs[index].value) {
          // console.log(inputs[index].name, inputs[index].value, '-required')
          return true;
        }
      }

      return false;
    } //validInput

  },
  //computed
  methods: {
    consoleClickNext: function () {
      this.d_currentStep += 1; // console.log("NextPageButtonClick", "Page: ", this.d_currentStep)
    },
    // consoleClickNext
    consoleClickPrevious: function () {
      this.d_currentStep -= 1; // console.log("PreviousPageButtonClick", "Page: ", this.d_currentStep)
    },
    // consoleClickPrevious
    consoleClickSubmit: function () {
      // console.log("Submit")
      this.d_completed = true;
    },
    // consoleClickSubmit
    consoleClickConfirm: function () {// console.log("Close")
    } // consoleClickConfirm

  },

  //methods
  created() {
    // console.log(this.steps.length)
    this.d_totalSteps = this.steps.length;
    this.d_currentStep = 1;
  } //created


}; //default

/* script */
const __vue_script__$u = script$u;
/* template */

var __vue_render__$u = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vueWizard"
  }, [_c('div', {
    staticClass: "wizardSteps"
  }, [_c('ol', {
    staticClass: "step-indicator"
  }, _vm._l(_vm.steps, function (step, index) {
    return _c('li', {
      key: index,
      class: {
        active: index + 1 == _vm.d_currentStep,
        complete: _vm.d_currentStep > index + 1 || _vm.d_completed
      }
    }, [_c('div', {
      staticClass: "step"
    }, [_c('i', {
      class: step.icon_class
    })]), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_vm._v("\n                    Step " + _vm._s(index + 1) + " : " + _vm._s(step.title) + "\n                ")])]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "wizardForm"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.d_currentStep == 1 && !_vm.d_completed,
      expression: "d_currentStep == 1 && !d_completed"
    }]
  }, [_vm._t("1")], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.d_currentStep == 2 && !_vm.d_completed,
      expression: "d_currentStep == 2 && !d_completed"
    }]
  }, [_vm._t("2")], 2), _vm._v(" "), _vm.d_completed ? _c('div', [_c('h3', [_vm._v("Overview")]), _vm._v(" "), _vm._t("1"), _vm._v(" "), _vm._t("2")], 2) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "wizardButtons"
  }, [_vm.d_completed ? _c('div', [_c('vue-button', {
    attrs: {
      "type": _vm.d_type,
      "tag": "ConfirmDetailsButton",
      "text": _vm.d_textConfirm,
      "icon": _vm.d_icon,
      "category": _vm.d_category[3],
      "form": _vm.d_form,
      "ctx": _vm.d_ctx
    }
  })], 1) : _c('div', [_c('div', [_vm.d_currentStep > 1 ? _c('vue-button', {
    attrs: {
      "type": _vm.d_type,
      "text": _vm.steps[_vm.d_currentStep - 1].title,
      "tag": "Previous",
      "category": _vm.d_category[0],
      "icon": "fas fa-angle-double-left",
      "form": _vm.d_form,
      "ctx": _vm.consoleClickPrevious
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', [_vm.d_currentStep < _vm.d_totalSteps ? _c('vue-button', {
    attrs: {
      "type": _vm.d_type,
      "text": _vm.steps[_vm.d_currentStep].title,
      "tag": "Next",
      "category": _vm.d_category[0],
      "icon": "fas fa-angle-double-right",
      "disabled": _vm.validInput,
      "form": _vm.d_form,
      "ctx": _vm.consoleClickNext
    }
  }) : _vm.d_currentStep == _vm.d_totalSteps ? _c('vue-button', {
    attrs: {
      "type": _vm.d_type,
      "tag": "submitDetailsButton",
      "text": _vm.d_textSubmit,
      "icon": "fas fa-check",
      "category": _vm.d_category[0],
      "form": _vm.d_form,
      "ctx": _vm.consoleClickSubmit
    }
  }) : _vm._e()], 1)])])]);
};

var __vue_staticRenderFns__$u = [];
/* style */

const __vue_inject_styles__$u = function (inject) {
  if (!inject) return;
  inject("data-v-2ed7ac55_0", {
    source: ".vueWizard[data-v-2ed7ac55]{display:flex;justify-content:space-between;flex-direction:column;flex-wrap:nowrap}.vueWizard .wizardSteps[data-v-2ed7ac55]{display:flex;flex-direction:row;flex-wrap:nowrap;margin:auto}.vueWizard .wizardSteps .step-indicator[data-v-2ed7ac55]{border-collapse:separate;display:table;margin-left:0;position:relative;table-layout:fixed;text-align:center;vertical-align:middle;padding-left:0}.vueWizard .wizardSteps .step-indicator li[data-v-2ed7ac55]{display:table-cell;position:relative;float:none;padding:0;width:1%}.vueWizard .wizardSteps .step-indicator li[data-v-2ed7ac55]:after{background-color:#ccc;content:\"\";display:block;height:4px;position:absolute;width:100%;top:24px}.vueWizard .wizardSteps .step-indicator li[data-v-2ed7ac55]:after{left:50%}.vueWizard .wizardSteps .step-indicator li[data-v-2ed7ac55]:last-child:after{display:none}.vueWizard .wizardSteps .step-indicator li.active .step[data-v-2ed7ac55]{border-color:#4183d7;color:#4183d7}.vueWizard .wizardSteps .step-indicator li.active .caption[data-v-2ed7ac55]{width:100%;color:#4183d7}.vueWizard .wizardSteps .step-indicator li.complete[data-v-2ed7ac55]:after{background-color:#87d37c}.vueWizard .wizardSteps .step-indicator li.complete .step[data-v-2ed7ac55]{border-color:#87d37c;color:#87d37c}.vueWizard .wizardSteps .step-indicator li.complete .caption[data-v-2ed7ac55]{color:#87d37c}.vueWizard .wizardSteps .step-indicator .step[data-v-2ed7ac55]{background-color:var(--white);border-radius:50%;border:2px solid #ccc;color:#ccc;font-size:20px;height:48px;line-height:48px;margin:0 auto;position:relative;width:48px;z-index:1}.vueWizard .wizardSteps .step-indicator .step[data-v-2ed7ac55]:hover{cursor:pointer}.vueWizard .wizardSteps .step-indicator .caption[data-v-2ed7ac55]{color:#ccc;padding:8px 16px}.vueWizard .wizardFrom[data-v-2ed7ac55]{display:flex;flex-direction:column;flex-wrap:wrap;margin:0 auto;padding:16px 32px}.vueWizard .wizardButtons[data-v-2ed7ac55]{margin-top:16px}.vueWizard .wizardButtons>div[data-v-2ed7ac55]{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$u = "data-v-2ed7ac55";
/* module identifier */

const __vue_module_identifier__$u = undefined;
/* functional template */

const __vue_is_functional_template__$u = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$u = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$u,
  staticRenderFns: __vue_staticRenderFns__$u
}, __vue_inject_styles__$u, __vue_script__$u, __vue_scope_id__$u, __vue_is_functional_template__$u, __vue_module_identifier__$u, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */
 // export { default as vueTable } from "./UIComponents/Table/vueTable.vue";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ComponentLibraryVue2Sample: __vue_component__,
  vueText: __vue_component__$2,
  vuePassword: __vue_component__$3,
  vueCheckbox: __vue_component__$5,
  vueEmail: __vue_component__$6,
  vueFile: __vue_component__$7,
  vueToggle: __vue_component__$8,
  vueNumber: __vue_component__$9,
  vuePhone: __vue_component__$a,
  vueSearchableDropdown: __vue_component__$b,
  vueDate: __vue_component__$c,
  vueForm: __vue_component__$d,
  vueInfo: __vue_component__$e,
  vueTextarea: __vue_component__$f,
  vueInputResponse: __vue_component__$1,
  vueAlert: __vue_component__$g,
  vuePageNotFound: __vue_component__$i,
  vueClipboard: __vue_component__$h,
  enterpriseAppLayout: __vue_component__$l,
  goldenRatioLayout: __vue_component__$m,
  sideBySideLayout: __vue_component__$n,
  vueButton: __vue_component__$4,
  vueFilter: __vue_component__$p,
  vueImage: __vue_component__$q,
  vueModal: __vue_component__$r,
  vueHeader: __vue_component__$s,
  vueSideNav: __vue_component__$t,
  vueScrollIndicator: __vue_component__$j,
  vueBreadcrum: __vue_component__$k,
  vueWizard: __vue_component__$u
});

// Import vue components
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
const install = function installComponentLibraryVue2(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__ as ComponentLibraryVue2Sample, __vue_component__$l as enterpriseAppLayout, __vue_component__$m as goldenRatioLayout, __vue_component__$n as sideBySideLayout, __vue_component__$g as vueAlert, __vue_component__$k as vueBreadcrum, __vue_component__$4 as vueButton, __vue_component__$5 as vueCheckbox, __vue_component__$h as vueClipboard, __vue_component__$c as vueDate, __vue_component__$6 as vueEmail, __vue_component__$7 as vueFile, __vue_component__$p as vueFilter, __vue_component__$d as vueForm, __vue_component__$s as vueHeader, __vue_component__$q as vueImage, __vue_component__$e as vueInfo, __vue_component__$1 as vueInputResponse, __vue_component__$r as vueModal, __vue_component__$9 as vueNumber, __vue_component__$i as vuePageNotFound, __vue_component__$3 as vuePassword, __vue_component__$a as vuePhone, __vue_component__$j as vueScrollIndicator, __vue_component__$b as vueSearchableDropdown, __vue_component__$t as vueSideNav, __vue_component__$2 as vueText, __vue_component__$f as vueTextarea, __vue_component__$8 as vueToggle, __vue_component__$u as vueWizard };
