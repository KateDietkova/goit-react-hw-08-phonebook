"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{2868:function(n,e,t){t.r(e),t.d(e,{default:function(){return An}});var r,a,i,o,s,l,c,d,u,x,A,p,m,g,Z,h,f=t(9439),b=t(9434),j=t(2791),N=t(5036),v=t(168),y=t(6444),E=t(6157),C=y.ZP.p(r||(r=(0,v.Z)(["\n    margin: 0;\n"]))),I=(0,y.ZP)(E.Z)(a||(a=(0,v.Z)(["\n  display: inline-flex;\n  gap: 10px;\n  padding: 10px 20px;\n  border: none;\n  text-align: center;\n  cursor: pointer;\n  background-color: #07bad2;\n  border-radius: 5px;\n  min-width: 80px;\n"]))),B=(0,y.ZP)(E.Z)(i||(i=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px 20px;\n  border: none;\n  text-align: center;\n  cursor: pointer;\n  background-color: #07bad2;\n  border-radius: 5px;\n  margin-right: 10px;\n  min-width: 80px;\n"]))),k=t(3767),Q=t(184),w=function(n){var e=n.title,t=n.component,r=n.onClose,a=n.id,i=n.userName,o=n.userNumber;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(k.Z.Header,{closeButton:!0,children:(0,Q.jsx)(k.Z.Title,{children:e})}),(0,Q.jsx)(k.Z.Body,{children:(0,Q.jsx)(t,{onClose:r,id:a,userName:i,userNumber:o})})]})},S=t(3998),G=(0,y.ZP)(S.Z)(o||(o=(0,v.Z)(["\n  margin: 0 auto;\n  padding: 10px;\n  font-weight: 500;\n"]))),K=(0,y.ZP)(E.Z)(s||(s=(0,v.Z)(["\n  display: inline-flex;\n  gap: 10px;\n  width: 120px;\n  padding: 8px;\n  margin: 0 auto;\n"]))),L=t(6916),R=function(n){return n.contacts},F=function(n){return n.filter},z=(0,L.P1)([R,F],(function(n,e){var t=n.items,r=e.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(r)}))})),P=t(9085),V=t(3053),M=t(5243),U=t(3682),D=function(){return(0,Q.jsx)(U.x,{display:"flex",justifyContent:"center",children:(0,Q.jsx)(M.W0,{height:100,width:100,radius:5,color:"#07bad2",ariaLabel:"ball-triangle-loading",visible:!0})})},W=function(){return(0,Q.jsx)(M.iT,{height:20,width:20,color:"#fff",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#fff",strokeWidth:4,strokeWidthSecondary:2})},T=function(n){var e=n.onClose,t=n.id,r=n.userName,a=n.userNumber,i=(0,b.v9)(R).items,o=(0,j.useState)(!1),s=(0,f.Z)(o,2),l=s[0],c=s[1],d=(0,j.useState)(r),u=(0,f.Z)(d,2),x=u[0],A=u[1],p=(0,j.useState)(a),m=(0,f.Z)(p,2),g=m[0],Z=m[1],h=(0,j.useState)(!1),v=(0,f.Z)(h,2),y=v[0],E=v[1],C=(0,b.I0)(),I=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return A(r);case"number":return Z(r);default:return}};return(0,Q.jsxs)(G,{noValidate:!0,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,o=!1;""!==x&&""!==g?(!1===a.checkValidity()&&(n.preventDefault(),n.stopPropagation()),c(!0),i&&i.length>0&&i.forEach((function(n){var e=n.name;x.toLowerCase()===e.toLowerCase()&&x.toLowerCase()!==r.toLowerCase()&&(P.Am.error("".concat(x," is already in contacts")),o=!0,E(!1))})),o||(C((0,N.Tk)({id:t,name:x,number:g})),e(),A(""),Z(""),c(!1),E(!1))):P.Am.error("Please, fill in all fields")},validated:l,children:[(0,Q.jsx)(S.Z.Group,{className:"mb-3",controlId:"formGroupName",children:(0,Q.jsx)(V.Z,{controlId:"floatingName",label:"Name",className:"mb-3",children:(0,Q.jsx)(S.Z.Control,{required:!0,type:"text",placeholder:"Enter your name",onChange:I,name:"name",value:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})})}),(0,Q.jsx)(S.Z.Group,{className:"mb-3",controlId:"formGroupNumber",children:(0,Q.jsx)(V.Z,{controlId:"floatingInput",label:"Number",className:"mb-3",children:(0,Q.jsx)(S.Z.Control,{required:!0,type:"tel",placeholder:"Enter number",onChange:I,name:"number",value:g})})}),(0,Q.jsxs)(K,{type:"submit",onClick:function(){return E(!0)},children:["Save changes",y&&(0,Q.jsx)(W,{})]})]})},O=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,b.I0)(),o=(0,j.useState)(!1),s=(0,f.Z)(o,2),l=s[0],c=s[1],d=(0,j.useState)(""),u=(0,f.Z)(d,2),x=u[0],A=u[1],p=function(){return c(!1)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(C,{children:[r,": ",a]}),(0,Q.jsxs)("div",{children:[(0,Q.jsx)(B,{type:"button",onClick:function(){return c(!0)},children:"Edit"}),(0,Q.jsxs)(I,{type:"button",onClick:function(){A(t),i((0,N.GK)(t))},children:["Delete",x===t&&(0,Q.jsx)(W,{})]})]}),l&&(0,Q.jsx)(k.Z,{show:l,onHide:p,children:(0,Q.jsx)(w,{title:"Edit contact",component:T,onClose:p,id:t,userName:r,userNumber:a,isEdit:!0})})]})},X=y.ZP.ul(l||(l=(0,v.Z)(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n"]))),q=y.ZP.li(c||(c=(0,v.Z)(["\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 15px;\n  min-width: 450px;\n  max-width: 500px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: rgba(255, 255, 255, 0.5);\n"]))),H=function(){var n=(0,b.v9)(z);return(0,Q.jsx)(X,{children:n.map((function(n){return(0,Q.jsx)(q,{children:(0,Q.jsx)(O,{contact:n})},n.id)}))})},Y=t(8846),J=t(3161),_=(0,y.ZP)(V.Z)(d||(d=(0,v.Z)(["\n  margin-bottom: 0;\n"]))),$=(0,y.ZP)(S.Z.Control)(u||(u=(0,v.Z)(["\n  width: 600px;\n"]))),nn=y.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 30px;\n"]))),en=(0,y.ZP)(J.Z)(A||(A=(0,v.Z)(["\n  width: 55%;\n"]))),tn=t(9126),rn=function(){var n=(0,b.I0)(),e=(0,b.v9)(F);return(0,Q.jsx)(nn,{children:(0,Q.jsxs)(en,{children:[(0,Q.jsx)(J.Z.Text,{children:(0,Q.jsx)(tn.dVI,{size:"20"})}),(0,Q.jsx)(_,{controlId:"floatingInput",label:"Find contact by name",children:(0,Q.jsx)($,{type:"text",placeholder:"Enter email",value:e,onChange:function(e){return n((0,Y.x)(e.currentTarget.value))}})})]})})},an=t(8476),on=y.ZP.section(p||(p=(0,v.Z)(["\n  padding: 30px 0;\n  min-height: 700px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: cover;\n"])),an),sn=y.ZP.div(m||(m=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  padding: 10px 30px;\n"]))),ln=y.ZP.div(g||(g=(0,v.Z)(["\n  padding: 30px 15px;\n  text-align: center;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: rgba(255, 255, 255, 0.5);\n"]))),cn=t(4373),dn=(0,y.ZP)(S.Z)(Z||(Z=(0,v.Z)(["\n  margin: 0 auto;\n  padding: 10px;\n  font-weight: 500;\n"]))),un=(0,y.ZP)(E.Z)(h||(h=(0,v.Z)(["\n  display: block;\n  width: 120px;\n  padding: 8px;\n  margin: 0 auto;\n"]))),xn=function(n){var e=n.onClose,t=(0,b.v9)(R).items,r=(0,j.useState)(!1),a=(0,f.Z)(r,2),i=a[0],o=a[1],s=(0,j.useState)(""),l=(0,f.Z)(s,2),c=l[0],d=l[1],u=(0,j.useState)(""),x=(0,f.Z)(u,2),A=x[0],p=x[1],m=(0,j.useState)(""),g=(0,f.Z)(m,2),Z=g[0],h=g[1],v=(0,b.I0)(),y=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return d(r);case"number":return p(r);default:return}};return(0,Q.jsxs)(dn,{noValidate:!0,onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=!1;""!==c&&""!==A?(!1===r.checkValidity()&&(n.preventDefault(),n.stopPropagation()),o(!0),t&&t.length>0&&t.forEach((function(n){var e=n.name;c.toLowerCase()===e.toLowerCase()&&(P.Am.error("".concat(c," is already in contacts")),a=!0,h(!1))})),a||(v((0,N.uK)({name:c,number:A})),e(),d(""),p(""),o(!1),h(!1))):P.Am.error("Please, fill in all fields")},validated:i,children:[(0,Q.jsx)(S.Z.Group,{className:"mb-3",controlId:"formGroupName",children:(0,Q.jsx)(V.Z,{controlId:"floatingName",label:"Name",className:"mb-3",children:(0,Q.jsx)(S.Z.Control,{required:!0,type:"text",placeholder:"Enter your name",onChange:y,name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})})}),(0,Q.jsx)(S.Z.Group,{className:"mb-3",controlId:"formGroupNumber",children:(0,Q.jsx)(V.Z,{controlId:"floatingInput",label:"Number",className:"mb-3",children:(0,Q.jsx)(S.Z.Control,{required:!0,type:"tel",placeholder:"Enter number",onChange:y,name:"number",value:A})})}),(0,Q.jsxs)(un,{type:"submit",onClick:function(){return h(!0)},children:["Add contact",Z&&(0,Q.jsx)(W,{})]})]})},An=function(){var n=(0,b.v9)(R),e=n.items,t=n.isLoading,r=n.error,a=(0,b.I0)(),i=(0,j.useState)(!1),o=(0,f.Z)(i,2),s=o[0],l=o[1],c=function(){return l(!1)};return(0,j.useEffect)((function(){a((0,N.yF)())}),[a]),(0,Q.jsxs)(on,{children:[(0,Q.jsxs)(sn,{children:[(0,Q.jsx)("h2",{children:"Contacts"}),(0,Q.jsx)(E.Z,{type:"button",onClick:function(){return l(!0)},children:(0,Q.jsx)(cn.M0G,{size:"32"})})]}),(0,Q.jsx)(rn,{}),t&&(0,Q.jsx)(D,{}),r&&(0,Q.jsx)("div",{children:"Sorry, something went wrong :( Please try again"}),e.length>0&&!t&&(0,Q.jsx)(H,{}),!t&&0===e.length&&(0,Q.jsx)(ln,{children:"You haven't any contacts yet"}),s&&(0,Q.jsx)(k.Z,{show:s,onHide:c,children:(0,Q.jsx)(w,{title:"Add contact",component:xn,onClose:c})})]})}},8476:function(n){n.exports="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDw0NDg0NDQ8NDQ0NFREWFhURExUYHSggGBolGxMVITEhMSkrLi4uFx8zOD8tNygtLisBCgoKDg0OFQ8PFS0dFR0rKystLSsrKzctLSs3LS03LSstKy0rLS0tKy0tKystLS0tKy03Ky0tLSstKystKzctK//AABEIALEBHAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QAJhABAQEBAAECBQQDAAAAAAAAAAECEQMhQRIxUWGxBHGRoRMiMv/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMFBP/EABsRAQEBAQADAQAAAAAAAAAAAAABEQIhMUES/9oADAMBAAIRAxEAPwD9eqLU47PNRON8OI4xxmx0sM57QsPDj3/h6MpIsidJzis1ssBxzrNdLGLCMYrNarNTNY1XNdXtQsCVa6/pvH29vyn91LNuO/6XxfDO3535/b7PRGI3GXeTJikCBpSBARYixNACKgIqACoCaIqRQXzF4SLx2edIcONcShuRnjrjPEzl0kGtzlOLxZF4NbxIVeCGMVmt1mlmxy1HHy69nfyXkteTX1Mce6CKWYuZ28ezx55ORx8Oeevvfw7wV14mNxuMRuB0UgQFSIsBFiLE0AIqAioAKgJoipFBfOjURXV8EhSRG8h0kakbkZjcZdJBQ6msRmrdMXVTNsNVztNbv2Y3q8/f8NRzvUcvLrrlW6zWnzVnpKipNf5NfWvX4ZZP9r23+vs8/gx29vyn5euCunEvtuNxiNwOykRYDBYEBFiLE0AIqAioAKgJoipFBfPTV9l8l5OucdXwc10jVjOXSM11nky6RzblDUbhU6WhvWaxW6xSzWOdc/LPd6OejnudnGnPrnw8tZremK0+ZlqTt4jt4s89fqjJrric9HSMZbjLvG43GI3E0pAgKkCAixFiaAEVARUAFQE0RUigvk+T4rfleT5ejUl+ldolvXavN5TMbiSrGK+jlVlQDTfU6z06lq2kZtX4ytWsaLtnWkza4+We7jXo64bnq3Hz9T6Yna9EcsOkop5dMtxjNbyHWNxuMRuJpSBAVIEBFiKmgBFQEVABUBNCpFBfO8mvZM1y710y7V5vLpFjMWVl3jR0QNKnQsQRKdZtI0tS0tZtTNS1Z4+z7+yZna7Qs+3nkby15c+/8s5Qkx0jplzy6ZDpG43GI3E0pAgKkCAixFiaAEVARUAFQE0RUigviTy/ZueX7f24SOmXd5PNrtnyNyuUaZfRK6zTTnK3A6Si99BmpVKz0tZTJaytMlmt5nG4xK1Em3K55XWGs9iOMZdIxG4DG43GI3E0pAgMUgQEWIsTQAioCKgAqAmiKkUF8XefdMtSpZx2eXI3G3OVuUOsajcrmvQ1K6WsVOnUdGa0lQZBCGo6Zc46ZBbjpmMRtFjefcjoxziTWXRnMUNCwIipAgIsRYmgBFQEVABUBNEVIoL5HwLxusOzzow1DUSUFrp1np1HWurK59JpDXVYx1eprTbMDiTUdMsZbyC65+qsdaRai8ZjSLSsxoEIERUgQEWIsTQAioCKgAqAmiKkUF8tmtM12ecjNarGqkdTqHENXqWnGambW869l65VvNVh56+Osa4zn1dMQOsTLcpuc9WYk3GoxK1EW40w1A1Go0xGoi0RFgKkAEWIsTQAioCKgAqAmiKkUF8tmtVK7PO1jV45prXauUx+tXg3IXKac6ld84jjvlvp8kLHNZeVri/DPoWfzfbWbx6cvK1PJ6fCy666a12rHONyotxqMStRGVuLGI1A1G2mI1E01Gow1EWiIsZIsRYmgBFQEVABUBNEVIoL5lc/N/zQdnmX088dMIFz5dY17AHWJ7X9r+HCAoOligjBPdBKusagBpqNQEYsaUDUWNQE21FgItRYDJFgJoARUBFQAVATRFAF/9k="}}]);
//# sourceMappingURL=463.49a04d95.chunk.js.map