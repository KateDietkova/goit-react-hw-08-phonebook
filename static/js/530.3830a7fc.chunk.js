(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{888:function(e,a,r){"use strict";var s=r(9047);function t(){}function i(){}i.resetWarningCache=t,e.exports=function(){function e(e,a,r,t,i,n){if(n!==s){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:t};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3053:function(e,a,r){"use strict";var s=r(1413),t=r(5987),i=r(1694),n=r.n(i),o=r(2791),l=r(323),c=r(162),d=r(184),f=["bsPrefix","className","children","controlId","label"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.children,u=e.controlId,v=e.label,p=(0,t.Z)(e,f);return r=(0,c.vE)(r,"form-floating"),(0,d.jsxs)(l.Z,(0,s.Z)((0,s.Z)({ref:a,className:n()(i,r),controlId:u},p),{},{children:[o,(0,d.jsx)("label",{htmlFor:u,children:v})]}))}));u.displayName="FloatingLabel",a.Z=u},3998:function(e,a,r){"use strict";r.d(a,{Z:function(){return $}});var s=r(1413),t=r(5987),i=r(1694),n=r.n(i),o=r(2007),l=r.n(o),c=r(2791),d=r(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,p=(0,t.Z)(e,f);return(0,d.jsx)(i,(0,s.Z)((0,s.Z)({},p),{},{ref:a,className:n()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var p=v,m=r(6882),x=r(4934),b=r(162),Z=["bsPrefix","className","htmlFor"],h=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,l=(0,t.Z)(e,Z),f=(0,c.useContext)(x.Z).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,s.Z)((0,s.Z)({},l),{},{ref:a,htmlFor:o||f,className:n()(i,r)}))}));h.displayName="FormCheckLabel";var y=h;var N=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,v=void 0!==u&&u,Z=e.disabled,h=void 0!==Z&&Z,P=e.isValid,j=void 0!==P&&P,I=e.isInvalid,k=void 0!==I&&I,w=e.feedbackTooltip,C=void 0!==w&&w,g=e.feedback,F=e.feedbackType,R=e.className,T=e.style,E=e.title,O=void 0===E?"":E,S=e.type,_=void 0===S?"checkbox":S,z=e.label,V=e.children,L=e.as,G=void 0===L?"input":L,H=(0,t.Z)(e,N);i=(0,b.vE)(i,"form-check"),o=(0,b.vE)(o,"form-switch");var U=(0,c.useContext)(x.Z).controlId,M=(0,c.useMemo)((function(){return{controlId:r||U}}),[U,r]),W=!V&&null!=z&&!1!==z||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,y),A=(0,d.jsx)(m.Z,(0,s.Z)((0,s.Z)({},H),{},{type:"switch"===_?"checkbox":_,ref:a,isValid:j,isInvalid:k,disabled:h,as:G}));return(0,d.jsx)(x.Z.Provider,{value:M,children:(0,d.jsx)("div",{style:T,className:n()(R,W&&i,f&&"".concat(i,"-inline"),v&&"".concat(i,"-reverse"),"switch"===_&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[A,W&&(0,d.jsx)(y,{title:O,children:z}),g&&(0,d.jsx)(p,{type:F,tooltip:C,children:g})]})})})}));P.displayName="FormCheck";var j=Object.assign(P,{Input:m.Z,Label:y}),I=r(4942),k=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),w=c.forwardRef((function(e,a){var r,i,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,p=e.className,m=e.isValid,Z=void 0!==m&&m,h=e.isInvalid,y=void 0!==h&&h,N=e.plaintext,P=e.readOnly,j=e.as,w=void 0===j?"input":j,C=(0,t.Z)(e,k),g=(0,c.useContext)(x.Z).controlId;(o=(0,b.vE)(o,"form-control"),N)?r=(0,I.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,I.Z)(i,o,!0),(0,I.Z)(i,"".concat(o,"-").concat(f),f),r=i);return(0,d.jsx)(w,(0,s.Z)((0,s.Z)({},C),{},{type:l,size:u,ref:a,readOnly:P,id:v||g,className:n()(p,r,Z&&"is-valid",y&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));w.displayName="FormControl";var C=Object.assign(w,{Feedback:p}),g=(0,r(6543).Z)("form-floating"),F=r(323),R=r(9439),T=["as","bsPrefix","className"],E=["className"];var O=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,i=e.className,o=(0,t.Z)(e,T);r=(0,b.vE)(r,"col");var l=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return l.forEach((function(e){var a,s,t,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,s=i.offset,t=i.order):a=i;var n=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(n):"".concat(r).concat(n,"-").concat(a)),null!=t&&f.push("order".concat(n,"-").concat(t)),null!=s&&f.push("offset".concat(n,"-").concat(s))})),[(0,s.Z)((0,s.Z)({},o),{},{className:n().apply(void 0,[i].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),i=(0,R.Z)(r,2),o=i[0],l=o.className,c=(0,t.Z)(o,E),f=i[1],u=f.as,v=void 0===u?"div":u,p=f.bsPrefix,m=f.spans;return(0,d.jsx)(v,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:n()(l,!m.length&&p)}))}));O.displayName="Col";var S=O,_=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],z=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,v=e.htmlFor,p=(0,t.Z)(e,_),m=(0,c.useContext)(x.Z).controlId;o=(0,b.vE)(o,"form-label");var Z="col-form-label";"string"===typeof l&&(Z="".concat(Z," ").concat(Z,"-").concat(l));var h=n()(u,o,f&&"visually-hidden",l&&Z);return v=v||m,l?(0,d.jsx)(S,(0,s.Z)({ref:a,as:"label",className:h,htmlFor:v},p)):(0,d.jsx)(i,(0,s.Z)({ref:a,className:h,htmlFor:v},p))}));z.displayName="FormLabel",z.defaultProps={column:!1,visuallyHidden:!1};var V=z,L=["bsPrefix","className","id"],G=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.id,l=(0,t.Z)(e,L),f=(0,c.useContext)(x.Z).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,s.Z)((0,s.Z)({},l),{},{type:"range",ref:a,className:n()(i,r),id:o||f}))}));G.displayName="FormRange";var H=G,U=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],M=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,p=void 0!==v&&v,m=e.id,Z=(0,t.Z)(e,U),h=(0,c.useContext)(x.Z).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,s.Z)((0,s.Z)({},Z),{},{size:o,ref:a,className:n()(l,r,i&&"".concat(r,"-").concat(i),u&&"is-valid",p&&"is-invalid"),id:m||h}))}));M.displayName="FormSelect";var W=M,A=["bsPrefix","className","as","muted"],D=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,t.Z)(e,A);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:n()(i,r,c&&"text-muted")}))}));D.displayName="FormText";var q=D,B=c.forwardRef((function(e,a){return(0,d.jsx)(j,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));B.displayName="Switch";var Y=Object.assign(B,{Input:j.Input,Label:j.Label}),J=r(3053),K=["className","validated","as"],Q={_ref:l().any,validated:l().bool,as:l().elementType},X=c.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,t.Z)(e,K);return(0,d.jsx)(l,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:n()(r,i&&"was-validated")}))}));X.displayName="Form",X.propTypes=Q;var $=Object.assign(X,{Group:F.Z,Control:C,Floating:g,Check:j,Switch:Y,Label:V,Text:q,Range:H,Select:W,FloatingLabel:J.Z})},6882:function(e,a,r){"use strict";var s=r(1413),t=r(5987),i=r(1694),n=r.n(i),o=r(2791),l=r(4934),c=r(162),d=r(184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],u=o.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,u=e.className,v=e.type,p=void 0===v?"checkbox":v,m=e.isValid,x=void 0!==m&&m,b=e.isInvalid,Z=void 0!==b&&b,h=e.as,y=void 0===h?"input":h,N=(0,t.Z)(e,f),P=(0,o.useContext)(l.Z).controlId;return i=(0,c.vE)(i,"form-check-input"),(0,d.jsx)(y,(0,s.Z)((0,s.Z)({},N),{},{ref:a,type:p,id:r||P,className:n()(u,i,x&&"is-valid",Z&&"is-invalid")}))}));u.displayName="FormCheckInput",a.Z=u},4934:function(e,a,r){"use strict";var s=r(2791).createContext({});a.Z=s},323:function(e,a,r){"use strict";var s=r(1413),t=r(5987),i=r(2791),n=r(4934),o=r(184),l=["controlId","as"],c=i.forwardRef((function(e,a){var r=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,t.Z)(e,l),u=(0,i.useMemo)((function(){return{controlId:r}}),[r]);return(0,o.jsx)(n.Z.Provider,{value:u,children:(0,o.jsx)(d,(0,s.Z)((0,s.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c},3161:function(e,a,r){"use strict";r.d(a,{Z:function(){return b}});var s=r(5987),t=r(1413),i=r(1694),n=r.n(i),o=r(2791),l=r(6543),c=r(162),d=r(6882),f=o.createContext(null);f.displayName="InputGroupContext";var u=f,v=r(184),p=["bsPrefix","size","hasValidation","className","as"],m=(0,l.Z)("input-group-text",{Component:"span"}),x=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,l=e.hasValidation,d=e.className,f=e.as,m=void 0===f?"div":f,x=(0,s.Z)(e,p);r=(0,c.vE)(r,"input-group");var b=(0,o.useMemo)((function(){return{}}),[]);return(0,v.jsx)(u.Provider,{value:b,children:(0,v.jsx)(m,(0,t.Z)((0,t.Z)({ref:a},x),{},{className:n()(d,r,i&&"".concat(r,"-").concat(i),l&&"has-validation")}))})}));x.displayName="InputGroup";var b=Object.assign(x,{Text:m,Radio:function(e){return(0,v.jsx)(m,{children:(0,v.jsx)(d.Z,(0,t.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,v.jsx)(m,{children:(0,v.jsx)(d.Z,(0,t.Z)({type:"checkbox"},e))})}})},6543:function(e,a,r){"use strict";r.d(a,{Z:function(){return v}});var s=r(1413),t=r(5987),i=r(1694),n=r.n(i),o=/-(.)/g;var l=r(2791),c=r(162),d=r(184),f=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,i=void 0===r?u(e):r,o=a.Component,v=a.defaultProps,p=l.forwardRef((function(a,r){var i=a.className,l=a.bsPrefix,u=a.as,v=void 0===u?o||"div":u,p=(0,t.Z)(a,f),m=(0,c.vE)(l,e);return(0,d.jsx)(v,(0,s.Z)({ref:r,className:n()(i,m)},p))}));return p.defaultProps=v,p.displayName=i,p}},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=530.3830a7fc.chunk.js.map