(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () {
  var n,u$1,i$1,t$1,o$1,f$1={},e$1=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function p$1(n){return n.children}function d$1(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w$1(n)}}function k$1(l){(!l.__d&&(l.__d=!0)&&u$1.push(l)&&!g$1.__r++||t$1!==n.debounceRendering)&&((t$1=n.debounceRendering)||i$1)(g$1);}function g$1(){for(var n;g$1.__r=u$1.length;)n=u$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),u$1=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=o.__v+1,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j$1(u,o),t!=r&&w$1(o)));});}function m$1(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,g,m,b,A=i&&i.__k||e$1,P=A.length;for(s==f$1&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p$1,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}g=$(n,k,w=w||f$1,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x$1(n,k,w,A,r,g,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a$1(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y]);}function x$1(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type+!1](n.event?n.event(l):l);}function N(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x$1(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function $(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new d$1(g,x),v.constructor=P,v.render=M),b&&b.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),T(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p$1&&null==a.key?a.props.children:a,m$1(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i);}return u.__e}function j$1(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function H(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else {if(null!=o&&(o=e$1.slice.call(n.childNodes)),v=(p=u.props||f$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}A$1(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,m$1(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f$1,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a$1(o);}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o$1)?null:i&&i.__k||u.__k,l=v$1(p$1,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f$1,f$1,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e$1.slice.call(u.childNodes):null,c,i||f$1,t),j$1(c,l);}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l;}throw n},__v:0},d$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k$1(this));},d$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k$1(this));},d$1.prototype.render=p$1,u$1=[],i$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$1.__r=0,o$1=f$1,0;

  /**
   * Removes `-` fron a string and capetalize the letter after
   * example: data-props-hello-world =>  dataPropsHelloWorld
   * Used for props passed from host DOM element
   * @param  {String} str string
   * @return {String} Capetalized string
   */
  var camelcasize = function (str) {
    return str.replace(/-([a-z])/gi, function (all, letter) {
      return letter.toUpperCase();
    });
  };

  /**
   * [getExecutedScript internal widget to provide the currently executed script]
   * @param  {document} document [Browser document object]
   * @return {HTMLElement}     [script Element]
   */
  var getExecutedScript = function () {
    return (
      document.currentScript ||
      (function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
      })()
    );
  };

  /**
   * Get the props from a host element's data attributes
   * @param  {Element} tag The host element
   * @return {Object}  props object to be passed to the component
   */
  var collectPropsFromElement = function (element, defaultProps) {
    if ( defaultProps === void 0 ) defaultProps = {};

    var attrs = element.attributes;

    var props = Object.assign({}, defaultProps);

    // collect from element
    Object.keys(attrs).forEach(function (key) {
      if (attrs.hasOwnProperty(key)) {
        var dataAttrName = attrs[key].name;
        if (!dataAttrName || typeof dataAttrName !== "string") {
          return false;
        }
        var propName = dataAttrName.split(/(data-props?-)/).pop() || '';
        propName = camelcasize(propName);
        if (dataAttrName !== propName) {
          var propValue = attrs[key].nodeValue;
          props[propName] = propValue;
        }
      }
    });

    // check for child script text/props or application/json
    [].forEach.call(element.getElementsByTagName('script'), function (scrp) {
      var propsObj = {};
      if(scrp.hasAttribute('type')) {
        if (
          scrp.getAttribute("type") !== "text/props" &&
          scrp.getAttribute("type") !== "application/json"
        )
          { return; }
        try {
          propsObj = JSON.parse(scrp.innerHTML);
        } catch(e) {
          throw new Error(e)
        }
        Object.assign(props, propsObj);
      }
    });  

    return props;
  };

  var getHabitatSelectorFromClient = function (currentScript) {
    var scriptTagAttrs = currentScript.attributes;
    var selector = null;
    // check for another props attached to the tag
    Object.keys(scriptTagAttrs).forEach(function (key) {
      if (scriptTagAttrs.hasOwnProperty(key)) {
        var dataAttrName = scriptTagAttrs[key].name;
        if (dataAttrName === 'data-mount-in') {
          selector = scriptTagAttrs[key].nodeValue;
        }
      }
    });
    return selector
  };

  /**
   * Return array of 0 or more elements that will host our widget
   * @param  {id} attrId the data widget id attribute the host should have
   * @param  {document} scope  Docuemnt object or DOM Element as a scope
   * @return {Array}        Array of matching habitats
   */
  var widgetDOMHostElements = function (
    ref
  ) {
    var selector = ref.selector;
    var inline = ref.inline;
    var clientSpecified = ref.clientSpecified;

    var hostNodes = [];
    var currentScript = getExecutedScript();

    if (inline === true) {
      var parentNode = currentScript.parentNode;
      hostNodes.push(parentNode);
    }
    if (clientSpecified === true && !selector) {
      // user did not specify where to mount - get it from script tag attributes
      selector = getHabitatSelectorFromClient(currentScript);
    }
    if (selector) {
      [].forEach.call(document.querySelectorAll(selector), function (queriedTag) {
        hostNodes.push(queriedTag);
      });
    }
    return hostNodes;
  };

  /**
   * preact render function that will be queued if the DOM is not ready
   * and executed immeidatly if DOM is ready
   */
  var preactRender = function (widget, hostElements, root, cleanRoot, defaultProps) {
    hostElements.forEach(function (elm) {
      var hostNode = elm;
      if (hostNode._habitat) {
        return; 
      }
      hostNode._habitat = true;
      var props = collectPropsFromElement(elm, defaultProps) || defaultProps;
      if(cleanRoot) {
        hostNode.innerHTML = "";
      }
      return O(v$1(widget, props), hostNode, root);
    });
  };

  var habitat = function (Widget) {
    // Widget represents the Preact component we need to mount
    var widget = Widget;
    // preact root render helper
    var root = null;

    var render$$1 = function (
      ref
    ) {
      if ( ref === void 0 ) ref = {};
      var selector = ref.selector; if ( selector === void 0 ) selector = null;
      var inline = ref.inline; if ( inline === void 0 ) inline = false;
      var clean = ref.clean; if ( clean === void 0 ) clean = false;
      var clientSpecified = ref.clientSpecified; if ( clientSpecified === void 0 ) clientSpecified = false;
      var defaultProps = ref.defaultProps; if ( defaultProps === void 0 ) defaultProps = {};

      var elements = widgetDOMHostElements({
        selector: selector,
        inline: inline,
        clientSpecified: clientSpecified
      });
      var loaded = function () {
        if (elements.length > 0) {
          var elements$1 = widgetDOMHostElements({
            selector: selector,
            inline: inline,
            clientSpecified: clientSpecified
          });

          return preactRender(widget, elements$1, root, clean, defaultProps);
        }
      };
      loaded();
      document.addEventListener("DOMContentLoaded", loaded);
      document.addEventListener("load", loaded);
    };

    return { render: render$$1 };
  };

  var t,u,r,o=0,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function m(t,r){n.__h&&n.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i=[];}n.__b=function(n){u=null,c&&c(n);},n.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[]);},n.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a&&a(t,u);},n.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){n.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return "function"==typeof t?t(n):t}

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  var classnames = createCommonjsModule(function (module) {
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  var css_248z$2 = ".Input {\n    border: 1px solid #ddd;\n    border-radius: 0.25rem;\n    padding: 0.5rem 1rem;\n}\n";

  var Input = function Input(_ref) {
    var className = _ref.className,
        rest = _objectWithoutPropertiesLoose(_ref, ["className"]);

    console.log(css_248z$2);
    return v$1("input", Object.assign({
      "class": classnames('Input', className)
    }, rest));
  };

  var css_248z$1 = ".Foo {\n    padding: 1rem;\n}\n";

  var Foo = function Foo(_ref) {
    var firstName = _ref.firstName;

    var _useState = l('User'),
        lastName = _useState[0],
        setLastName = _useState[1];

    console.log(css_248z$1);
    var onLastNameInput = A(function (event) {
      console.log('last name updated!', event.target.value);
      setLastName(event.target.value);
    }, []);
    return v$1("div", {
      "class": "Foo"
    }, v$1("p", null, "Hello, ", firstName, " ", lastName), v$1("p", null, v$1(Input, {
      value: lastName,
      onInput: onLastNameInput
    })));
  };

  var css_248z = "// TODO\n// apply a full reset/normalize to all child elements inside widget\n// to ensure no styles from the surrounding page bleed in\n.Widget,\n.Widget > * {\n    box-sizing: border-box;\n}\n\nh1 {\n    text-align: center;\n}\n";

  var Widget = function Widget(_ref) {
    var title = _ref.title,
        color = _ref.color;
    console.log(css_248z);
    return v$1("div", {
      "class": "Widget"
    }, v$1("h1", {
      style: {
        color: color
      }
    }, title), v$1(Foo, {
      firstName: "Joe"
    }));
  };

  var _habitat = habitat(Widget);

  _habitat.render({
    selector: '[data-widget-host="preact-ts-widget"]',
    clean: true
  });

})));
//# sourceMappingURL=index.umd.js.map
