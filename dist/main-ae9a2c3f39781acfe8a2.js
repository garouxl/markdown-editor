webpackJsonp([0],{79:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(22),i=n.n(u),c=n(83),l=n(285),s=n.n(l),f=n(99),p=n.n(f),h=n(85),v=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}());s.a.setOptions({highlight:function(e){return p.a.highlightAuto(e).value}});var d=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:"escreva algum código usando notação markdown..."},e.handleChange=function(t){e.setState({value:t.target.value})},e.getMarkup=function(){return{__html:s()(e.state.value)}},e}return o(t,e),v(t,[{key:"render",value:function(){return i.a.createElement(c.a,{value:this.state.value,handleChange:this.handleChange,getMarkup:this.getMarkup})}}]),t}(u.Component);t.a=d},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(22),r=n.n(a),o=n(80),u=(n.n(o),n(81)),i=(n.n(u),n(79));!function(e){n.i(o.render)(r.a.createElement(u.AppContainer,null,r.a.createElement(e,null)),document.querySelector('[data-js="app"]'))}(i.a)},83:function(e,t,n){"use strict";var a=n(22),r=n.n(a),o=n(289),u=n.n(o),i=function(e){var t=e.value,n=e.handleChange,a=e.getMarkup;return r.a.createElement("div",{className:"editor"},r.a.createElement("textarea",{className:"board",value:t,onChange:n,autoFocus:!0}),r.a.createElement("div",{className:"view crt glow-text",dangerouslySetInnerHTML:a()}))};i.propTypes={value:u.a.string.isRequired,handleChange:u.a.func.isRequired},t.a=i},85:function(e,t){}},[82]);