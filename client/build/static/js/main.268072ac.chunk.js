(this["webpackJsonpweb-the-builder"]=this["webpackJsonpweb-the-builder"]||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n,r,l=t(0),o=t.n(l),c=t(36),i=t.n(c),u=(t(98),t(28)),s=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"THIS IS OUR HOMEPAGE"))},m=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"THIS IS OUR LOGIN PAGE"))},d=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"THIS IS OUR PRODUCT PAGE"))},p=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"THIS IS OUR PROFILE PAGE"))},E=t(23),b=t(47),g=t(132),v=t(124),f=t(131),h=t(126),w=t(133),O=t(45),k=t.n(O),j=t(56),S=t(43),y=t(127),C=t(122),x=t(123),I=t(134),F=t(71),L=t(129),P=Object(L.a)(n||(n=Object(F.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),T=Object(L.a)(r||(r=Object(F.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),U=t(82),q=t(83),G=t(72),$=t.n(G),H=new(function(){function e(){Object(U.a)(this,e)}return Object(q.a)(e,[{key:"getProfile",value:function(){return $()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return $()(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),D=function(){var e=Object(l.useState)({username:"",email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(!1),c=Object(E.a)(r,1)[0],i=Object(l.useState)(!1),s=Object(E.a)(i,2),m=s[0],d=s[1],p=Object(I.a)(T),b=Object(E.a)(p,2),g=b[0],v=b[1].error;Object(l.useEffect)((function(){d(!!v)}),[v]);var f=function(e){var a=e.target,r=a.name,l=a.value;n(Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},r,l)))},h=function(){var e=Object(j.a)(k.a.mark((function e(a){var r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(u.a)({},t)});case 6:r=e.sent,l=r.data,console.log(l),H.login(l.addUser.token),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{noValidate:!0,validated:c,onSubmit:h},o.a.createElement(C.a,{dismissible:!0,onClose:function(){return d(!1)},show:m,variant:"danger"},"Something went wrong with your signup!"),o.a.createElement(y.a.Group,null,o.a.createElement(y.a.Label,{htmlFor:"username"},"Username"),o.a.createElement(y.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:f,value:t.username,required:!0}),o.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Username is required!")),o.a.createElement(y.a.Group,null,o.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),o.a.createElement(y.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:f,value:t.email,required:!0}),o.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),o.a.createElement(y.a.Group,null,o.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),o.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:f,value:t.password,required:!0}),o.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),o.a.createElement(x.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},_=function(){var e=Object(l.useState)({email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(!1),c=Object(E.a)(r,1)[0],i=Object(l.useState)(!1),s=Object(E.a)(i,2),m=s[0],d=s[1],p=Object(I.a)(P),b=Object(E.a)(p,2),g=b[0],v=b[1].error;Object(l.useEffect)((function(){d(!!v)}),[v]);var f=function(e){var a=e.target,r=a.name,l=a.value;n(Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},r,l)))},h=function(){var e=Object(j.a)(k.a.mark((function e(a){var r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(u.a)({},t)});case 6:r=e.sent,l=r.data,console.log(l),H.login(l.login.token),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:n({email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{noValidate:!0,validated:c,onSubmit:h},o.a.createElement(C.a,{dismissible:!0,onClose:function(){return d(!1)},show:m,variant:"danger"},"Something went wrong with your login credentials!"),o.a.createElement(y.a.Group,null,o.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),o.a.createElement(y.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:f,value:t.email,required:!0}),o.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),o.a.createElement(y.a.Group,null,o.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),o.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:f,value:t.password,required:!0}),o.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),o.a.createElement(x.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},B=function(){var e=Object(l.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{bg:"dark",variant:"dark",expand:"lg"},o.a.createElement(v.a,{fluid:!0},o.a.createElement(g.a.Brand,{as:b.b,to:"/"},"Homepage"),o.a.createElement(g.a.Toggle,{"aria-controls":"navbar"}),o.a.createElement(g.a.Collapse,{id:"navbar"},o.a.createElement(f.a,{className:"ml-auto"},o.a.createElement(f.a.Link,{as:b.b,to:"/"},"Search Videos"),H.loggedIn()?o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a.Link,{as:b.b,to:"/profile"},"See your videos"),o.a.createElement(f.a.Link,{onClick:H.logout},"Logout")):o.a.createElement(f.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),o.a.createElement(h.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},o.a.createElement(w.a.Container,{defaultActiveKey:"login"},o.a.createElement(h.a.Header,{closeButton:!0},o.a.createElement(h.a.Title,{id:"signup-modal"},o.a.createElement(f.a,{variant:"pills"},o.a.createElement(f.a.Item,null,o.a.createElement(f.a.Link,{eventKey:"login"},"Login")),o.a.createElement(f.a.Item,null,o.a.createElement(f.a.Link,{eventKey:"signup"},"Sign Up"))))),o.a.createElement(h.a.Body,null,o.a.createElement(w.a.Content,null,o.a.createElement(w.a.Pane,{eventKey:"login"},o.a.createElement(_,{handleModalClose:function(){return n(!1)}})),o.a.createElement(w.a.Pane,{eventKey:"signup"},o.a.createElement(D,{handleModalClose:function(){return n(!1)}})))))))},N=function(){return o.a.createElement("footer",{className:"w-100 mt-auto text-dark p-4"},o.a.createElement("div",{className:"container text-center mb-5"},o.a.createElement("h4",null,"\xa9 ",(new Date).getFullYear()," - Web-the-Builder")))},R=t(12),Y=t(90),A=t(128),K=t(130),V=t(125),M=t(89),z=Object(Y.a)({uri:"/graphql"}),J=Object(M.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),W=new A.a({link:J.concat(z),cache:new K.a});var Q=function(){return o.a.createElement(V.a,{client:W},o.a.createElement(b.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),o.a.createElement("div",{className:"flex-column justify-flex-start min-100-vh"},o.a.createElement("div",{className:"container"},o.a.createElement(R.c,null,o.a.createElement(R.a,{exact:!0,path:"/",component:s}),o.a.createElement(R.a,{exact:!0,path:"/login",component:m}),o.a.createElement(R.a,{exact:!0,path:"/products",component:d}),o.a.createElement(R.a,{exact:!0,path:"/profile",component:p}))),o.a.createElement(N,null)))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null)),document.getElementById("root"))},93:function(e,a,t){e.exports=t(111)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.268072ac.chunk.js.map