!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.editPost}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),o=n(3),i=n(1),a=n(5),u=n(4),l=n(6);Object(l.registerPlugin)("pnp-notes",{icon:Object(r.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(i.Path,{d:"M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"})),render:Object(a.compose)([Object(u.withSelect)((function(e){return{metaFieldValue:(0,e("core/editor").getEditedPostAttribute)("meta")._pnp_field}})),Object(u.withDispatch)((function(e){var t=e("core/editor").editPost;return{setMetaFieldValue:function(e){t({meta:{_pnp_field:e}})}}}))])((function(e){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.PluginSidebarMoreMenuItem,{target:"pnp-notes-sidebar"},Object(c.__)("Notes","page-post-notes")),Object(r.createElement)(o.PluginSidebar,{name:"pnp-notes-sidebar",title:Object(c.__)("Notes","page-post-notes")},Object(r.createElement)(i.PanelBody,null,Object(r.createElement)(i.TextareaControl,{label:Object(c.__)("Keep notes where they're needed most.","page-post-notes"),value:e.metaFieldValue,rows:"25",onChange:function(t){return e.setMetaFieldValue(t)}}))))}))})}]);