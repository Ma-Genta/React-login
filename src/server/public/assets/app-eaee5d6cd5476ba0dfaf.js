!function(e){function t(t){for(var a,l,i=t[0],c=t[1],s=t[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);f.length;)f.shift()();return n.push.apply(n,s||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={0:0},n=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;n.push([59,1]),r()}([,,,,,,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"d",(function(){return b}));var a,o=r(42),n=r.n(o);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){return{type:"SET_FAVORITE",payload:e}},s=function(e){return{type:"DELETE_FAVORITE",payload:e}},u=function(e){return{type:"LOGIN_REQUEST",payload:e}},d=function(e){return{type:"LOGOUT_REQUEST",payload:e}},f=function(e){return{type:"REGISTER_REQUEST",payload:e}},p=function(e){return{type:"VIDEO_REQUEST",payload:e}},m=function(e){return{type:"SET_ERROR",payload:e}},b=function(e,t){return{return:function(r){n.a.post("/auth/sign-up",e).then((function(e){var t=e.data;return r(f(t))})).then((function(){window.location.href=t})).catch((function(e){return r(f(m))}))}}};(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"setFavorite","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(s,"deleteFavorite","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(u,"loginRequest","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(d,"logoutRequest","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(f,"registerRequest","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(p,"videoRequest","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(m,"setError","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js"),l.register(b,"registerUser","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\actions\\index.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},,,,,,,,,function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"No encontrado"))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"NotFound","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\NotFound.jsx"),l.register(s,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\NotFound.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o);r(70);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.children,r=e.title;return n.a.createElement("div",null,n.a.createElement("h3",{className:"categories__title"},r),n.a.createElement("section",{className:"carousel"},n.a.createElement("div",{className:"carousel__container"},t)))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Carousel","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Carousel.jsx"),l.register(s,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Carousel.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(5),i=r(9),c=r.n(i),s=r(10),u=(r(88),r(43)),d=r(44),f=r(45),p=r(11);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m=function(e){var t=e.cover,r=e.title,a=e.year,o=e.contentRating,l=e.duration,i=e.id,c=e.isList;return n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"carousel-item__img",src:t,alt:r}),n.a.createElement("div",{className:"carousel-item__details"},n.a.createElement("div",null,n.a.createElement(p.b,{to:"/player/".concat(i)},n.a.createElement("img",{className:"carousel-item__details--img",src:u.a,alt:"Play Icon"})),c?n.a.createElement("img",{className:"carousel-item__details--img",alt:"Remove Icon",src:f.a,onClick:function(){return t=i,void e.deleteFavorite(t);var t}}):n.a.createElement("img",{className:"carousel-item__details--img",src:d.a,alt:"Plus Icon",onClick:function(){e.setFavorite({id:i,cover:t,title:r,year:a,contentRating:o,duration:l})}})),n.a.createElement("p",{className:"carousel-item__details--title"},r),n.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(a," ").concat(o," ").concat(l))))};m.propTypes={cover:c.a.string,title:c.a.string,year:c.a.number,contentRating:c.a.string,duration:c.a.number};var b,y,g={setFavorite:s.e,deleteFavorite:s.a},v=Object(l.b)(null,g)(m);t.a=v,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"CarouselItem","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\CarouselItem.jsx"),b.register(g,"mapsDispatchToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\CarouselItem.jsx"),b.register(v,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\CarouselItem.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,r(3)(e))},,,,,,,,,,,,,,,,,function(e,t,r){"use strict";(function(e){var r;function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,u=function(e,t){switch(t.type){case"SET_FAVORITE":return e.myList.find((function(e){return e.id===t.payload.id}))?l({},e):l(l({},e),{},{myList:[].concat(a(e.myList),[t.payload])});case"DELETE_FAVORITE":return l(l({},e),{},{myList:e.myList.filter((function(e){return e.id!=t.payload}))});case"LOGIN_REQUEST":case"LOGOUT_REQUEST":case"REGISTER_REQUEST":return l(l({},e),{},{user:t.payload});case"VIDEO_REQUEST":return l(l({},e),{},{playing:e.trends.find((function(e){return e.id===Number(t.payload)}))||e.myList.find((function(e){return e.id===Number(t.payload)}))||e.originals.find((function(e){return e.id===Number(t.payload)}))||[]});default:return e}},d=u;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(u,"reducer","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\reducers\\index.js"),c.register(d,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\reducers\\index.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(11),i=r(2),c=r(40),s=r(46),u=r(49),d=r(19),f=r(50),p=r(57);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,b,y=function(){return n.a.createElement(l.a,null,n.a.createElement(f.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:c.a}),n.a.createElement(i.a,{exact:!0,path:"/login",component:s.a}),n.a.createElement(i.a,{exact:!0,path:"/registro",component:u.a}),n.a.createElement(i.a,{exact:!0,path:"/player/:id",component:p.a}),n.a.createElement(i.a,{component:d.a}))))},g=y;t.a=g,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(y,"App","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\routes\\App.js"),m.register(g,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\routes\\App.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(5),i=(r(68),r(41)),c=r(20),s=r(21);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,f,p=function(e){var t=e.myList,r=e.trends,a=e.originals;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null),t.length>0&&n.a.createElement(c.a,{title:"Mi lista"},t.map((function(e){return n.a.createElement(s.a,u({key:e.id},e,{isList:!0}))}))),n.a.createElement(c.a,{title:"Tendencias"},r.map((function(e){return n.a.createElement(s.a,u({key:e.id},e))}))),n.a.createElement("br",null),n.a.createElement(c.a,{title:"Originals"},a.map((function(e){return n.a.createElement(s.a,u({key:e.id},e))}))))},m=function(e){return{myList:e.myList,trends:e.trends,originals:e.originals}},b=Object(l.b)(m,null)(p);t.a=b,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(p,"Home","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Home.jsx"),d.register(m,"mapStateToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Home.jsx"),d.register(b,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Home.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o);r(69);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(){return n.a.createElement("section",{className:"main"},n.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),n.a.createElement("input",{type:"text",className:"input",placeholder:"Buscar..."}))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Search","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Search.jsx"),l.register(s,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Search.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},,function(e,t,r){"use strict";t.a=r.p+"assets/06ea7b66106f1b0c4616b35825897045.png"},function(e,t,r){"use strict";t.a=r.p+"assets/94603de790176f3ad40892521ba109f1.png"},function(e,t,r){"use strict";t.a=r.p+"assets/c9edf0045ea66a34c354e97888364d55.png"},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(5),i=r(10),c=r(11),s=r(47),u=r(48);r(90);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,o=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e){var t=m(Object(o.useState)({email:""}),2),r=t[0],a=t[1],l=function(e){a(f(f({},r),{},p({},e.target.name,e.target.value)))};return n.a.createElement("section",{className:"login"},n.a.createElement("section",{className:"login__container"},n.a.createElement("h2",null,"Inicia sesión"),n.a.createElement("form",{className:"login__container--form",onSubmit:function(){event.preventDefault(),e.loginRequest(r),e.history.push("/")}},n.a.createElement("input",{className:"input",type:"text",placeholder:"Correo",name:"email",onChange:l}),n.a.createElement("input",{className:"input",type:"password",placeholder:"Contraseña",name:"password",onChange:l}),n.a.createElement("button",{className:"button"},"Iniciar sesión"),n.a.createElement("div",{className:"login__container--remember-me"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",id:"cbox1",value:"first_checkbox"}),"Recuérdame"),n.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),n.a.createElement("section",{className:"login__container--social-media"},n.a.createElement("div",null,n.a.createElement("img",{src:s.a})," Inicia sesión con Google"),n.a.createElement("div",null,n.a.createElement("img",{src:u.a})," Inicia sesión con Twitter")),n.a.createElement("p",{className:"login__container--register"},"No tienes ninguna cuenta ",n.a.createElement(c.b,{to:"/registro"},"Regístrate"))))};y(g,"useState{[form, setForm]({\r\n    email: ''\r\n  })}");var v,L,E={loginRequest:i.b},H=Object(l.b)(null,E)(g);t.a=H,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(g,"Login","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Login.jsx"),v.register(E,"mapDispatchToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Login.jsx"),v.register(H,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Login.jsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";t.a=r.p+"assets/138bc206c26716ff3905e9926096f688.png"},function(e,t,r){"use strict";t.a=r.p+"assets/1a609fc4fd84ae366ef60940c9427581.png"},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(5),i=r(11),c=(r(91),r(10));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,o=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=f(Object(o.useState)({email:""}),2),r=t[0],a=t[1],l=function(e){a(u(u({},r),{},d({},e.target.name,e.target.value)))};return n.a.createElement("section",{className:"register"},n.a.createElement("section",{className:"register__container"},n.a.createElement("h2",null,"Regístrate"),n.a.createElement("form",{className:"register__container--form",onSubmit:function(){event.preventDefault(),e.registerUser(r,"/login")}},n.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Nombre",onChange:l}),n.a.createElement("input",{name:"correo",className:"input",type:"text",placeholder:"Correo",onChange:l}),n.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:l}),n.a.createElement("button",{className:"button",type:"submit"},"Registrarme")),n.a.createElement(i.b,{to:"/login"},"Iniciar sesión")))};m(b,"useState{[form, setForm]({\r\n      email: '',\r\n    })}");var y,g,v={registerUser:c.d},L=Object(l.b)(null,v)(b);t.a=L,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(b,"Registro","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Registro.jsx"),y.register(v,"mapDispatchToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Registro.jsx"),y.register(L,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Registro.jsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(51),i=r(56);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,u=function(e){var t=e.children;return n.a.createElement("div",{className:"App"},n.a.createElement(l.a,null),t,n.a.createElement(i.a,null))},d=u;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(u,"Layout","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Layout.jsx"),c.register(d,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Layout.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(11),i=r(5),c=(r(92),r(52)),s=r(53),u=r(54),d=r(10);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,p,m=function(e){var t=e.user,r=Object.keys(t).length>0;return n.a.createElement("header",{className:"header"},n.a.createElement(l.b,{to:"/"},n.a.createElement("img",{className:"header__img",src:c.a,alt:"Platzi Video"})),n.a.createElement("div",{className:"header__menu"},n.a.createElement("div",{className:"header__menu--profile"},r?n.a.createElement("img",{src:Object(u.a)(t.email),alt:"Icono de user"}):n.a.createElement("img",{src:s.a,alt:"Icono de user"}),n.a.createElement("p",null,"Perfil")),n.a.createElement("ul",null,r?n.a.createElement("li",null,n.a.createElement("a",{href:"/"},t.name)):null,r?n.a.createElement("li",null,n.a.createElement("a",{href:"#",onClick:function(){e.logoutRequest({})}},"Cerrar Sesión")):n.a.createElement("li",null,n.a.createElement(l.b,{to:"/login"},"Iniciar Sesión")))))},b=function(e){return{user:e.user}},y={logoutRequest:d.c},g=Object(i.b)(b,y)(m);t.a=g,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"Header","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Header.jsx"),f.register(b,"mapStateToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Header.jsx"),f.register(y,"mapDispatchToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Header.jsx"),f.register(g,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Header.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";t.a=r.p+"assets/435b1bef96c79093c441f263d42d8c23.png"},function(e,t,r){"use strict";t.a=r.p+"assets/f18faacee990ac53ba6982c03ebf9d9f.png"},function(e,t,r){"use strict";(function(e){var a,o=r(55),n=r.n(o);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.trim().toLowerCase(),r=n()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(r)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"gravatar","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\assets\\utils\\gravatar.js"),l.register(s,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\assets\\utils\\gravatar.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},,function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o);r(95);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("a",{href:"/"},"Terminos de uso"),n.a.createElement("a",{href:"/"},"Declaración de privacidad"),n.a.createElement("a",{href:"/"},"Centro de ayuda"))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Footer","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Footer.jsx"),l.register(s,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\components\\Footer.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),l=r(5),i=(r(96),r(10)),c=r(19);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(e){var t=e.match.params.id,r=Object.keys(e.playing).length>0;return Object(o.useLayoutEffect)((function(){e.videoRequest(t)}),[]),r?n.a.createElement("div",{className:"Player"},n.a.createElement("video",{controls:!0,autoPlay:!0},n.a.createElement("source",{src:e.playing.source,type:"video/mp4"})),n.a.createElement("div",{className:"Player-back"},n.a.createElement("button",{onClick:function(){return e.history.goBack()}},"Regresar"))):n.a.createElement(c.a,null)};s(u,"useLayoutEffect{}");var d,f,p=function(e){return{playing:e.playing}},m={videoRequest:i.f},b=Object(l.b)(p,m)(u);t.a=b,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"Player","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Player.jsx"),d.register(p,"mapStateToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Player.jsx"),d.register(m,"mapDispatchToProps","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Player.jsx"),d.register(b,"default","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\containers\\Player.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(3)(e))},,function(e,t,r){e.exports=r(60)},function(e,t,r){"use strict";r.r(t),function(e){var t,a=r(0),o=r.n(a),n=r(15),l=r.n(n),i=r(5),c=r(13),s=r(37),u=r(38),d=r(39),f=r(58),p=r(2);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,b,y=Object(f.a)(),g=window.__PRELOADED_STATE__,v=Object(c.c)(u.a,g,composeEnhancers(Object(c.a)(s.a)));delete window.__PRELOADED_STATE__,l.a.hydrate(o.a.createElement(i.a,{store:v},o.a.createElement(p.b,{history:y},o.a.createElement(d.a,null))),document.getElementById("app")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(y,"history","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\index.js"),m.register(g,"preloadState","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\index.js"),m.register(v,"store","C:\\Users\\aurel\\Desktop\\plaVideo\\src\\frontend\\index.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,r(3)(e))},,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,,,,,,,,,,,,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},,,function(e,t,r){},function(e,t,r){}]);