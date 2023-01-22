"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[506],{3506:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i,o,l,c,s,u,d,p,x=t(9439),m=t(168),h=t(6444),f=t(3998),g=t(6157),b=(0,h.ZP)(f.Z)(r||(r=(0,m.Z)(["\n  margin: 0 auto;\n  padding: 10px;\n  width: 600px;\n  font-weight: 500;\n"]))),Z=h.ZP.h2(a||(a=(0,m.Z)(["\n  font-size: 30px;\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: 15px;\n"]))),j=(0,h.ZP)(g.Z)(i||(i=(0,m.Z)(["\n  display: block;\n  width: 120px;\n  padding: 8px;\n  margin: 0 auto;\n"]))),v=t(9434),y=t(5036),w=t(6916),C=function(n){return n.contacts},P=function(n){return n.filter},k=(0,w.P1)([C,P],(function(n,e){var t=n.items,r=e.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(r)}))})),I=t(2791),N=t(9085),A=t(3053),L=t(184),G=function(){var n=(0,v.v9)(C).items,e=(0,I.useState)(!1),t=(0,x.Z)(e,2),r=t[0],a=t[1],i=(0,I.useState)(""),o=(0,x.Z)(i,2),l=o[0],c=o[1],s=(0,I.useState)(""),u=(0,x.Z)(s,2),d=u[0],p=u[1],m=(0,v.I0)(),h=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return c(r);case"number":return p(r);default:return}};return(0,L.jsxs)(b,{noValidate:!0,onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r=!1;""!==l&&""!==d?(!1===t.checkValidity()&&(e.preventDefault(),e.stopPropagation()),a(!0),n&&n.length>0&&n.forEach((function(n){var e=n.name;l.toLowerCase()===e.toLowerCase()&&(N.Am.error("".concat(l," is already in contacts")),r=!0)})),r||(m((0,y.uK)({name:l,number:d})),c(""),p(""),a(!1))):N.Am.error("Please, fill in all fields")},validated:r,children:[(0,L.jsx)(Z,{children:"Add contact"}),(0,L.jsx)(f.Z.Group,{className:"mb-3",controlId:"formGroupName",children:(0,L.jsx)(A.Z,{controlId:"floatingName",label:"Name",className:"mb-3",children:(0,L.jsx)(f.Z.Control,{required:!0,type:"text",placeholder:"Enter your name",onChange:h,name:"name",value:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})})}),(0,L.jsx)(f.Z.Group,{className:"mb-3",controlId:"formGroupNumber",children:(0,L.jsx)(A.Z,{controlId:"floatingInput",label:"Number",className:"mb-3",children:(0,L.jsx)(f.Z.Control,{required:!0,type:"tel",placeholder:"Enter number",onChange:h,name:"number",value:d})})}),(0,L.jsx)(j,{type:"submit",children:"Add contact"})]})},S=h.ZP.p(o||(o=(0,m.Z)(["\n    margin: 0;\n"]))),z=h.ZP.button(l||(l=(0,m.Z)(["\n  display: inline-block;\n  padding: 10px 20px;\n  border: none;\n  text-align: center;\n  cursor: pointer;\n  background-color: #07bad2;\n  border-radius: 5px;\n\n  :hover {\n    background-color: #1371d6;\n  }\n"]))),E=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,v.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(S,{children:[r,": ",a]}),(0,L.jsx)(z,{type:"button",onClick:function(){return i((0,y.GK)(t))},children:"Delete"})]})},F=h.ZP.ul(c||(c=(0,m.Z)(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n"]))),_=h.ZP.li(s||(s=(0,m.Z)(["\n  border: 1px solid;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 15px;\n  width: 300px;\n"]))),D=function(){var n=(0,v.v9)(k);return(0,L.jsx)(F,{children:n.map((function(n){return(0,L.jsx)(_,{children:(0,L.jsx)(E,{contact:n})},n.id)}))})},q=t(8846),K=h.ZP.input(u||(u=(0,m.Z)(["\n  outline: none;\n  padding: 8px;\n  border-radius: 5px;\n  width: 200px;\n"]))),T=h.ZP.label(d||(d=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 15px;\n"]))),V=function(){var n=(0,v.I0)(),e=(0,v.v9)(P);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(T,{children:["Find contacts by name",(0,L.jsx)(K,{type:"text",value:e,onChange:function(e){return n((0,q.x)(e.currentTarget.value))}})]})})},W=t(5243),Y=t(3682),$=function(){return(0,L.jsx)(Y.x,{display:"flex",justifyContent:"center",children:(0,L.jsx)(W.W0,{height:100,width:100,radius:5,color:"#07bad2",ariaLabel:"ball-triangle-loading",visible:!0})})},B=h.ZP.section(p||(p=(0,m.Z)(["\n  padding: 30px 0;\n"]))),H=function(){var n=(0,v.v9)(C),e=n.items,t=n.isLoading,r=n.error,a=(0,v.I0)();return(0,I.useEffect)((function(){a((0,y.yF)())}),[a]),(0,L.jsxs)(B,{children:[(0,L.jsx)("h2",{children:"Contacts"}),(0,L.jsx)(G,{}),(0,L.jsx)(V,{}),t&&(0,L.jsx)($,{}),r&&(0,L.jsx)("div",{children:"Sorry, something went wrong :( Please try again"}),e.length>0?(0,L.jsx)(D,{}):(0,L.jsx)("div",{children:"You haven't any contacts yet"})]})}}}]);
//# sourceMappingURL=506.9b1c2e6f.chunk.js.map