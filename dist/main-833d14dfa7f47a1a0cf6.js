webpackJsonp([1],{80:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(7),s=n.n(u),c=n(195),f=(n.n(c),n(109)),p=n.n(f),d=n(90),v=n(96),h=(n.n(v),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n.e(0).then(n.bind(null,197)).then(function(e){p.a.setOptions({highlight:function(t,n){return n&&e.getLanguage(n),e.highlightAuto(t).value}})});var g=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return window.localStorage.setItem("markdown-editor",JSON.stringify({})),e.clearState=function(){return{title:"",value:"",id:n.i(c.v4)()}},e.state=h({},e.clearState(),{isSaving:null,files:{}}),e.textareaRef=function(t){e.textarea=t},e.getMarkup=function(){return{__html:p()(e.state.value)}},e.handleChange=function(t){return function(n){var a;e.setState((a={},r(a,t,n.target.value),r(a,"isSaving",!0),a))}},e.handleSave=function(){if(e.state.isSaving){var t=h({},e.state.files,r({},e.state.id,{title:e.state.title.toLowerCase()||"sem título",content:e.state.value}));window.localStorage.setItem("markdown-editor",JSON.stringify(t)),e.setState({isSaving:!1,files:t})}},e.createNew=function(){e.setState(e.clearState()),e.textarea.focus()},e.handleRemove=function(){var t=e.state.files,n=(t[e.state.id],a(t,[e.state.id]));window.localStorage.setItem("markdown-editor",JSON.stringify(n)),e.setState({files:n}),e.createNew()},e.handleCreate=function(){e.createNew()},e.handleOpenFile=function(t){return function(){e.setState({title:e.state.files[t].title,value:e.state.files[t].content,id:t})}},e}return l(t,e),m(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("markdown-editor"));this.setState({files:e})}},{key:"componentDidUpdate",value:function(){var e=this;clearInterval(this.timer),this.timer=setTimeout(function(){return e.handleSave()},1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return s.a.createElement(d.a,{value:this.state.value,isSaving:this.state.isSaving,getMarkup:this.getMarkup,files:this.state.files,textareaRef:this.textareaRef,title:this.state.title,onHandleOpenFile:this.handleOpenFile,onHandleChange:this.handleChange,onHandleRemove:this.handleRemove,onHandleCreate:this.handleCreate})}}]),t}(u.Component);t.a=g},83:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(24),o=(n.n(i),n(92)),l=(n.n(o),function(e){var t=e.onClick,n=e.children,a=e.kind;return r.a.createElement("button",{onClick:t,className:"button "+a},n)});l.getDefaultProps={kind:""},l.propTypes={onClick:i.PropTypes.func.isRequired,children:i.PropTypes.node.isRequired,kind:i.PropTypes.oneOf(["button-create","button-remove"])},t.a=l},84:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(93),o=(n.n(i),function(e){var t=e.files,n=e.onHandleOpenFile;return Boolean(Object.keys(t).length)&&r.a.createElement("div",{className:"files-list"},r.a.createElement("p",{className:"files-title"},1===Object.keys(t).length?"Arquivo:":"Arquivos:"),r.a.createElement("ul",null,Object.keys(t).map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("button",{className:"files-button",onClick:n(e)},t[e].title))})))});t.a=o},85:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=function(){return r.a.createElement("a",{href:"https://github.com/garouxl/markdown-editor",target:"_blank",rel:"noopener noreferrer",alt:"Fork me on GitHub",title:"Fork me on GitHub",style:{position:"absolute",right:"0px",top:"-30px",zIndex:"999",filter:"hue-rotate(-70deg)",width:"72px",height:"100px",background:"url(https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149) -17px 20px no-repeat",backgroundSize:"cover"}})};t.a=i},86:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(94),o=(n.n(i),function(e){var t=e.title,n=e.onHandleChange;return r.a.createElement("input",{className:"file-title",maxLength:"12",type:"text",value:t,onChange:n("title"),placeholder:"sem título"})});t.a=o},87:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(24),o=n.n(i),l=n(95),u=(n.n(l),function(e){var t=e.isSaving;return r.a.createElement("p",{className:"save-message "+(t?"show":"")},null!==t&&r.a.createElement("span",null,t?"Salvando...":"Salvo :)"))});u.getDefaultProps={isSaving:null},u.propTypes={isSaving:o.a.bool},t.a=u},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),r=n.n(a),i=n(81),o=(n.n(i),n(82)),l=(n.n(o),n(80));!function(e){n.i(i.render)(r.a.createElement(o.AppContainer,null,r.a.createElement(e,null)),document.querySelector('[data-js="app"]'))}(l.a)},89:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(24),o=(n.n(i),n(83)),l=n(87),u=n(86),s=function(e){var t=e.isSaving,n=e.title,a=e.onHandleRemove,i=e.onHandleCreate,s=e.onHandleChange;return r.a.createElement("header",{className:"header"},r.a.createElement(u.a,{title:n,onHandleChange:s}),r.a.createElement(l.a,{isSaving:t}),r.a.createElement(o.a,{kind:"button-create",onClick:i},"Criar arquivo"),r.a.createElement(o.a,{kind:"button-remove",onClick:a},"Remover"))};s.propTypes={title:i.PropTypes.string.isRequired,onHandleRemove:i.PropTypes.func.isRequired,onHandleCreate:i.PropTypes.func.isRequired},t.a=s},90:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var r=n(7),i=n.n(r),o=n(24),l=n.n(o),u=n(89),s=n(85),c=n(84),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(e){var t=e.value,n=e.getMarkup,r=e.onHandleChange,o=e.textareaRef,l=e.files,p=e.onHandleOpenFile,d=a(e,["value","getMarkup","onHandleChange","textareaRef","files","onHandleOpenFile"]);return i.a.createElement("section",{className:"editor"},i.a.createElement(s.a,null),i.a.createElement(c.a,{files:l,onHandleOpenFile:p}),i.a.createElement(u.a,f({},d,{onHandleChange:r})),i.a.createElement("main",{className:"main"},i.a.createElement("textarea",{className:"board",value:t,onChange:r("value"),autoFocus:!0,ref:o,style:Object.keys(l).length?{width:"43.8vw"}:{}}),i.a.createElement("article",{className:"view crt glow-text",dangerouslySetInnerHTML:n(),style:Object.keys(l).length?{width:"43.8vw"}:{}})))};p.propTypes={value:l.a.string.isRequired,onHandleChange:l.a.func.isRequired,getMarkup:l.a.func.isRequired,textareaRef:l.a.func.isRequired},t.a=p},92:function(e,t){},93:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t){}},[88]);