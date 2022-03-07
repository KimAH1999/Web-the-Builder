(this["webpackJsonpWeb-the-Builder"]=this["webpackJsonpWeb-the-Builder"]||[]).push([[0],{106:function(e,t,a){e.exports=a(130)},111:function(e,t,a){},118:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n,r,c,l,i,o=a(0),s=a.n(o),u=a(34),m=a.n(u),d=a(19),p=(a(111),a(8)),E=a(140),g=a(92),b=a(150),f=a(141),h=a(142),v=(a(112),a(24)),y=a.n(v),O=a(38),j=a(35),N=a(13),w=a(85),k=a(138),_=a(31),C=a(147),T=Object(C.a)(n||(n=Object(_.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),x=Object(C.a)(r||(r=Object(_.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),S=(Object(C.a)(c||(c=Object(_.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(C.a)(l||(l=Object(_.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),A=Object(C.a)(i||(i=Object(_.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"])));function R(e,t,a){return new Promise((function(n,r){var c,l,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(c=o.result,l=c.transaction(e,"readwrite"),i=l.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":i.put(a),n(a);break;case"get":var s=i.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":i.delete(a._id);break;default:console.log("No valid method")}l.oncomplete=function(){c.close()}}}))}var I,D,P,L=a(16),U=function(e){var t=e.item,a=Object(L.b)();return s.a.createElement("div",{className:"flex-row"},s.a.createElement("div",null,s.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),s.a.createElement("div",null,s.a.createElement("div",null,t.name,", $",t.price),s.a.createElement("div",null,s.a.createElement("span",null,"Qty:"),s.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),R("cart","delete",Object(p.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),R("cart","put",Object(p.a)(Object(p.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),s.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),R("cart","delete",Object(p.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},F=a(87),Q=a(88),M=a(74),$=a.n(M),G=new(function(){function e(){Object(F.a)(this,e)}return Object(Q.a)(e,[{key:"getProfile",value:function(){return $()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return $()(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload("/")}}]),e}()),H=(a(118),Object(w.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),B=function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e})),a=Object(k.a)(x),n=Object(N.a)(a,2),r=n[0],c=n[1].data;function l(){e({type:"TOGGLE_CART"})}return Object(o.useEffect)((function(){c&&H.then((function(e){e.redirectToCheckout({sessionId:c.checkout.session})}))}),[c]),Object(o.useEffect)((function(){function a(){return(a=Object(j.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R("cart","get");case 2:a=t.sent,e({type:"ADD_MULTIPLE_TO_CART",products:Object(O.a)(a)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){a.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?s.a.createElement("div",{className:"cart"},s.a.createElement("div",{className:"close",onClick:l},"[close]"),s.a.createElement("h2",null,"Shopping Cart"),t.cart.length?s.a.createElement("div",null,t.cart.map((function(e){return s.a.createElement(U,{key:e._id,item:e})})),s.a.createElement("div",{className:"flex-row space-between"},s.a.createElement("strong",null,"Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),G.loggedIn()?s.a.createElement("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),r({variables:{products:e}})}},"Checkout"):s.a.createElement("span",null,"(log in to check out)"))):s.a.createElement("h3",null,s.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):s.a.createElement("div",{className:"cart-closed",onClick:l},s.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},J=a(15),q=function(){var e={height:"38em",overflow:"hidden",objectFit:"cover"},t=Object(J.f)();return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{style:{margin:"3em"}},s.a.createElement(g.a,null,s.a.createElement(b.a,null,s.a.createElement(b.a.Item,{interval:900},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/html-basic.png",alt:"HTML",style:e})),s.a.createElement(b.a.Item,{interval:900},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/CSS.png",alt:"CSS",style:e})),s.a.createElement(b.a.Item,{interval:900},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/Java.png",alt:"Java",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/OOP.png",alt:"OOP",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/SQL.png",alt:"SQL",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/ORM.png",alt:"ORM",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/MVC.png",alt:"MVC",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/CS.png",alt:"CS",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/NoSQL.png",alt:"NoSQL",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/PWA.png",alt:"PWA",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/React.png",alt:"CSS",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/MERN.png",alt:"CSS",style:e})),s.a.createElement(b.a.Item,{interval:500},s.a.createElement("img",{fluid:!0,className:"d-block w-100",src:"./images/State.png",alt:"State",style:e})))),s.a.createElement(g.a,null,s.a.createElement(f.a,null,s.a.createElement("h1",null,"Explore the fundamentals that goes into building a website. "),s.a.createElement("br",null),s.a.createElement("h7",null,"Our online learning platform offers courses on various programing languages, including HTML, CSS, Javascript, PHP and more!"),s.a.createElement("hr",null),s.a.createElement("h7",null," To get started, simply sign up and reserve a seat!")),s.a.createElement("div",{className:"d-grid gap-2"},s.a.createElement(h.a,{variant:"primary",size:"lg",onClick:function(){t.push("/products")}},"Learn how to code!")))),s.a.createElement(B,null))},Y=a(46),W=a(143),V=Object(C.a)(I||(I=Object(_.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),z=Object(C.a)(D||(D=Object(_.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),K=Object(C.a)(P||(P=Object(_.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var X=function(e){var t=Object(o.useState)({email:"",password:""}),a=Object(N.a)(t,2),n=a[0],r=a[1],c=Object(W.a)(V),l=Object(N.a)(c,2),i=l[0],u=l[1].error,m=function(){var e=Object(j.a)(y.a.mark((function e(t){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:{email:n.email,password:n.password}});case 4:a=e.sent,r=a.data.login.token,G.login(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,c=t.value;r(Object(p.a)(Object(p.a)({},n),{},Object(Y.a)({},a,c)))},g={width:"30vw"};return s.a.createElement("div",{className:"container my-1",style:{border:"10px solid rgba(0, 0, 0, 0.05)",padding:"10px",minHeight:"50vh"}},s.a.createElement(d.b,{to:"/signup"},"\u2190 Go to Signup"),s.a.createElement("h2",null,"Login"),s.a.createElement("form",{onSubmit:m,style:{width:"40vw"}},s.a.createElement("div",{className:"flex-row justify-space-between my-2"},s.a.createElement("label",{htmlFor:"email"},"Email address:"),s.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E,style:g})),s.a.createElement("div",{className:"flex-row justify-space-between my-2"},s.a.createElement("label",{htmlFor:"pwd"},"Password:"),s.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E,style:g})),u?s.a.createElement("div",null,s.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,s.a.createElement("div",{className:"flex-row flex-end"},s.a.createElement("button",{type:"submit"},"Submit"))))};var Z=function(e){var t=Object(o.useState)({email:"",password:""}),a=Object(N.a)(t,2),n=a[0],r=a[1],c=Object(W.a)(K),l=Object(N.a)(c,1)[0],i=function(){var e=Object(j.a)(y.a.mark((function e(t){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{firstName:n.firstName,lastName:n.lastName,email:n.email,password:n.password}});case 3:a=e.sent,r=a.data.addUser.token,G.login(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,a=t.name,c=t.value;r(Object(p.a)(Object(p.a)({},n),{},Object(Y.a)({},a,c)))},m={width:"30vw"};return s.a.createElement("div",{className:"container my-2",style:{border:"10px solid rgba(0, 0, 0, 0.05)",padding:"10px",minHeight:"50vh"}},s.a.createElement(d.b,{to:"/login"},"\u2190 Go to Login"),s.a.createElement("h2",null,"Signup"),s.a.createElement("form",{onSubmit:i,style:{width:"40vw"}},s.a.createElement("div",{className:"flex-row justify-space-between my-2"},s.a.createElement("label",{htmlFor:"firstName"},"First Name:"),s.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:u,style:m})),s.a.createElement("div",{className:"flex-row justify-space-between my-2"},s.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),s.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:u,style:m})),s.a.createElement("div",{className:"flex-row justify-space-between my-2"},s.a.createElement("label",{htmlFor:"email"},"Email:"),s.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u,style:m})),s.a.createElement("div",{className:"flex-row justify-space-between my-2"},s.a.createElement("label",{htmlFor:"pwd"},"Password:"),s.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u,style:m})),s.a.createElement("div",{className:"flex-row flex-end"},s.a.createElement("button",{type:"submit"},"Submit"))))};var ee=function(e){var t=Object(L.b)(),a=Object(L.c)((function(e){return e})),n=e.image,r=e.name,c=e._id,l=e.price,i=e.quantity,o=a.cart;return s.a.createElement("div",{className:"card px-1 py-1"},s.a.createElement(d.b,{to:"/products/".concat(c)},s.a.createElement("img",{alt:r,src:"/images/".concat(n),style:{width:"30rem",height:"30rem",objectFit:"cover"}}),s.a.createElement("p",null,r)),s.a.createElement("div",null,s.a.createElement("div",null,i," ",function(e,t){return 1===t?e:e+"s"}("item",i)," in stock"),s.a.createElement("span",null,"$",l)),s.a.createElement("button",{onClick:function(){var a=o.find((function(e){return e._id===c}));a?(t({type:"UPDATE_CART_QUANTITY",_id:c,purchaseQuantity:parseInt(a.purchaseQuantity)+1}),R("cart","put",Object(p.a)(Object(p.a)({},a),{},{purchaseQuantity:parseInt(a.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(p.a)(Object(p.a)({},e),{},{purchaseQuantity:1})}),R("cart","put",Object(p.a)(Object(p.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},te=a(89),ae=a(67),ne=a.n(ae);var re=function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e})),a=t.currentCategory,n=Object(te.a)(T),r=n.loading,c=n.data;return Object(o.useEffect)((function(){c?(e({type:"UPDATE_PRODUCTS",products:c.products}),c.products.forEach((function(e){R("products","put",e)}))):r||R("products","get").then((function(t){e({type:"UPDATE_PRODUCTS",products:t})}))}),[c,r,e]),s.a.createElement("div",{className:"my-2"},s.a.createElement("h2",null,"Our Products:"),t.products.length?s.a.createElement("div",{className:"flex-row justify-space-between"},(a?t.products.filter((function(e){return e.category._id===a})):t.products).map((function(e){return s.a.createElement(ee,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):s.a.createElement("h3",null,"You haven't added any products yet!"),r?s.a.createElement("img",{src:ne.a,alt:"loading"}):null)};var ce=function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e})).categories,a=Object(te.a)(S),n=a.loading,r=a.data;return Object(o.useEffect)((function(){r?(e({type:"UPDATE_CATEGORIES",categories:r.categories}),r.categories.forEach((function(e){R("categories","put",e)}))):n||R("categories","get").then((function(t){e({type:"UPDATE_CATEGORIES",categories:t})}))}),[r,n,e]),s.a.createElement("div",null,s.a.createElement("h2",null,"Choose a Category:"),t.map((function(t){return s.a.createElement("button",{key:t._id,onClick:function(){var a;a=t._id,e({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},t.name)})))},le=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(ce,null),s.a.createElement(re,null),s.a.createElement(B,null))};var ie=function(e){var t=e.children;return s.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)};var oe=function(){var e=Object(W.a)(z),t=Object(N.a)(e,1)[0];return Object(o.useEffect)((function(){function e(){return(e=Object(j.a)(y.a.mark((function e(){var a,n,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){R("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),s.a.createElement("div",null,s.a.createElement(ie,null,s.a.createElement("h1",null,"Success!"),s.a.createElement("h2",null,"Thank you for your purchase!"),s.a.createElement("h2",null,"You will now be redirected to the home page")))},se=function(){var e={flex:"row",height:"50vh",width:"25vw",margin:"1rem"},t={height:"40vh",width:"20vw",objectFit:"cover",padding:"1rem"};return s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"MEET THE TEAM"),s.a.createElement("div",{className:"align-center justify-content-center flex-row"},s.a.createElement("div",{style:e},s.a.createElement("div",{className:"card center"},s.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/87666809?v=4",class:"rounded mx-auto d-block",alt:"Jane",style:t}),s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Kimberly Aguilar"),s.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},s.a.createElement("p",null,s.a.createElement("button",{className:"button mr-2"},"GitHub")),s.a.createElement("p",null,s.a.createElement("button",{className:"button"},"Email")))))),s.a.createElement("div",{style:e},s.a.createElement("div",{className:"card center"},s.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/87789140?v=4",class:"rounded mx-auto d-block",alt:"Jane",style:t}),s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Ricardo Crossley"),s.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},s.a.createElement("p",null,s.a.createElement("button",{className:"button mr-2"},"GitHub")),s.a.createElement("p",null,s.a.createElement("button",{className:"button"},"Email")))))),s.a.createElement("div",{style:e},s.a.createElement("div",{className:"card center"},s.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/86133108?v=4",class:"rounded mx-auto d-block",alt:"Jane",style:t}),s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Edgar Fernandez"),s.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},s.a.createElement("p",null,s.a.createElement("button",{className:"button mr-2"},"GitHub")),s.a.createElement("p",null,s.a.createElement("button",{className:"button"},"Email")))))),s.a.createElement("div",{style:e},s.a.createElement("div",{className:"card center"},s.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/87237312?v=4",class:"rounded mx-auto d-block",alt:"Jane",style:t}),s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Thao Nguyen"),s.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},s.a.createElement("p",null,s.a.createElement("button",{className:"button mr-2"},"GitHub")),s.a.createElement("p",null,s.a.createElement("button",{className:"button"},"Email")))))),s.a.createElement("div",{style:e},s.a.createElement("div",{className:"card center"},s.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/88949064?v=4",class:"rounded mx-auto d-block",alt:"Jane",style:t}),s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Denny Jalate"),s.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},s.a.createElement("p",null,s.a.createElement("button",{className:"button mr-2"},"GitHub")),s.a.createElement("p",null,s.a.createElement("button",{className:"button"},"Email"))))))))},ue=a(148),me=a(151),de=a(144),pe=a(96),Ee=a.n(pe);var ge=function(){return s.a.createElement(me.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},s.a.createElement(de.a,null,s.a.createElement(me.a.Brand,{href:"/"},s.a.createElement("img",{alt:"",src:Ee.a,height:"40vh",className:"d-inline-block align-top"})," ","\ud83c\udd66\ud83c\udd54\ud83c\udd51 \ud83c\udd63\ud83c\udd57\ud83c\udd54 \ud83c\udd51\ud83c\udd64\ud83c\udd58\ud83c\udd5b\ud83c\udd53\ud83c\udd54\ud83c\udd61"),s.a.createElement(me.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),s.a.createElement(me.a.Collapse,{id:"responsive-navbar-nav"},s.a.createElement(ue.a,null,G.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(ue.a.Link,{href:"/"},"Home"),s.a.createElement(ue.a.Link,{href:"/products"},"Products"),s.a.createElement(ue.a.Link,{href:"/Contact"},"Contact"),s.a.createElement(ue.a.Link,{href:"/orderHistory"},"Order History"),s.a.createElement(ue.a.Link,{href:"/profile"},"Profile"),s.a.createElement(ue.a.Link,{href:"/",onClick:function(){return G.logout()}},"Logout")):s.a.createElement(s.a.Fragment,null,s.a.createElement(ue.a.Link,{href:"/"},"Home"),s.a.createElement(ue.a.Link,{href:"/products"},"Products"),s.a.createElement(ue.a.Link,{href:"/Contact"},"Contact"),s.a.createElement(ue.a.Link,{href:"/signup"},"Signup"),s.a.createElement(ue.a.Link,{href:"/login"},"Login"))))))};var be=function(){var e,t=Object(te.a)(A).data;t&&(e=t.user);var a={width:"20rem",height:"20rem",objectFit:"cover"};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container my-1"},s.a.createElement(d.b,{to:"/"},"\u2190 Back to Products"),e?s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return s.a.createElement("div",{key:e._id,className:"my-2"},s.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),s.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var n=e._id,r=e.image,c=e.name,l=e.price;return s.a.createElement("div",{key:t,className:"card px-1 py-1"},s.a.createElement(d.b,{to:"/products/".concat(n)},s.a.createElement("img",{alt:c,src:"/images/".concat(r),style:a}),s.a.createElement("p",null,c)),s.a.createElement("div",null,s.a.createElement("span",null,"$",l)))}))))}))):null))};var fe=function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e})),a=Object(J.g)().id,n=Object(o.useState)({}),r=Object(N.a)(n,2),c=r[0],l=r[1],i=Object(te.a)(T),u=i.loading,m=i.data,E=t.products,g=t.cart;return Object(o.useEffect)((function(){E.length?l(E.find((function(e){return e._id===a}))):m?(e({type:"UPDATE_PRODUCTS",products:m.products}),m.products.forEach((function(e){R("products","put",e)}))):u||R("products","get").then((function(t){e({type:"UPDATE_PRODUCTS",products:t})}))}),[E,m,u,e,a]),s.a.createElement(s.a.Fragment,null,c&&g?s.a.createElement("div",{className:"container my-1"},s.a.createElement(d.b,{to:"/"},"\u2190 Back to Products"),s.a.createElement("h2",null,c.name),s.a.createElement("p",null,c.description),s.a.createElement("p",null,s.a.createElement("strong",null,"Price:"),"$",c.price," ",s.a.createElement("button",{onClick:function(){var t=g.find((function(e){return e._id===a}));t?(e({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),R("cart","put",Object(p.a)(Object(p.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:"ADD_TO_CART",product:Object(p.a)(Object(p.a)({},c),{},{purchaseQuantity:1})}),R("cart","put",Object(p.a)(Object(p.a)({},c),{},{purchaseQuantity:1})))}},"Add to Cart"),s.a.createElement("button",{disabled:!g.find((function(e){return e._id===c._id})),onClick:function(){e({type:"REMOVE_FROM_CART",_id:c._id}),R("cart","delete",Object(p.a)({},c))}},"Remove from Cart")),s.a.createElement("img",{src:"/images/".concat(c.image),alt:c.name})):null,u?s.a.createElement("img",{src:ne.a,alt:"loading"}):null,s.a.createElement(B,null))},he=function(){return s.a.createElement("div",null,s.a.createElement(ie,null,s.a.createElement("h1",null,"404 Page Not Found"),s.a.createElement("h1",null,s.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ve=(a(124),a(125),a(126),a(127),a(128),a(97));function ye(e){var t=e.language,a=e.displayName,n=e.value,r=e.onChange,c=Object(o.useState)(!0),l=Object(N.a)(c,2),i=l[0],u=l[1];return s.a.createElement("div",{className:"editor-container ".concat(i?"":"collapsed")},s.a.createElement("div",{className:"editor-title"},a,s.a.createElement("button",{type:"button",className:"expand-collapse-btn",onClick:function(){return u((function(e){return!e}))}})),s.a.createElement(ve.Controlled,{onBeforeChange:function(e,t,a){r(a)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}}))}function Oe(e,t){var a="codepen-clone-"+e,n=Object(o.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(N.a)(n,2),c=r[0],l=r[1];return Object(o.useEffect)((function(){localStorage.setItem(a,JSON.stringify(c))}),[a,c]),[c,l]}a(129);var je=function(){var e=Oe("html",""),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Oe("css",""),c=Object(N.a)(r,2),l=c[0],i=c[1],u=Oe("js",""),m=Object(N.a)(u,2),d=m[0],p=m[1],E=Object(o.useState)(""),g=Object(N.a)(E,2),b=g[0],f=g[1];return Object(o.useEffect)((function(){var e=setTimeout((function(){f("\n        <html>\n          <body>".concat(a,"</body>\n          <style>").concat(l,"</style>\n          <script>").concat(d,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[a,l,d]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"pane top-pane"},s.a.createElement(ye,{language:"xml",displayName:"HTML",value:a,onChange:n}),s.a.createElement(ye,{language:"css",displayName:"CSS",value:l,onChange:i}),s.a.createElement(ye,{language:"javascript",displayName:"JS",value:d,onChange:p})),s.a.createElement("div",{className:"pane"},s.a.createElement("iframe",{srcDoc:b,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))},Ne=a(152),we=a(98),ke=a.n(we),_e=function(){var e=s.a.useRef(null),t=s.a.useRef(null);return s.a.createElement(de.a,null,s.a.createElement(E.a,{style:{width:"19rem",height:"19.4rem",border:"10px solid rgba(0, 0, 0, 0.05)"}},s.a.createElement(Ne.a,{onClick:function(){return t.current.click()}},s.a.createElement("img",{ref:e,variant:"top",src:ke.a,alt:"",style:{height:"18rem"}}),s.a.createElement("input",{ref:t,type:"file",accept:"image",multiple:!1,onChange:function(t){var a=Object(N.a)(t.target.files,1)[0];if(a){var n=new FileReader,r=e.current;r.file=a,n.onload=function(e){r.src=e.target.result},n.readAsDataURL(a)}},style:{display:"none"}}))))},Ce=a(146),Te=function(){return s.a.createElement(Ce.a,{style:{margin:"20px",width:"40vw",padding:"1rem",border:"solid"}},s.a.createElement("h3",{style:{padding:"1rem",justifyContent:"center"}},"My Top Skills"),s.a.createElement(Ce.a.Group,{controlId:"userSkill1"},s.a.createElement(Ce.a.Control,{type:"name",placeholder:"HTML"})),s.a.createElement(Ce.a.Group,{controlId:"userSkill2"},s.a.createElement(Ce.a.Control,{type:"name",placeholder:"CSS"})),s.a.createElement(Ce.a.Group,{controlId:"userSkill3"},s.a.createElement(Ce.a.Control,{type:"name",placeholder:"Javsscript"})),s.a.createElement(Ce.a.Group,{controlId:"userSkill4"},s.a.createElement(Ce.a.Control,{type:"name",placeholder:"React"})))},xe=function(){return s.a.createElement(f.a,null,s.a.createElement(de.a,null,s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome, to your profile page!")),s.a.createElement(E.a,null,s.a.createElement(g.a,null,s.a.createElement(_e,null)),s.a.createElement(g.a,null,s.a.createElement(Te,null))),s.a.createElement(E.a,null,s.a.createElement(g.a,null,s.a.createElement(je,null)))),s.a.createElement(B,null))},Se=a(101),Ae={products:[],categories:[],currentCategory:"",cart:[],cartOpen:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(p.a)(Object(p.a)({},e),{},{products:Object(O.a)(t.products)});case"ADD_TO_CART":return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(O.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(p.a)(Object(p.a)({},e),{},{cart:[].concat(Object(O.a)(e.cart),Object(O.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(p.a)(Object(p.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(p.a)(Object(p.a)({},e),{},{categories:Object(O.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(p.a)(Object(p.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},Ie=Object(Se.a)(Re),De=a(100),Pe=a(103),Le=a(149),Ue=a(145),Fe=a(99),Qe=Object(De.a)({uri:"/graphql"}),Me=Object(Fe.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(p.a)(Object(p.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),$e=new Pe.a({link:Me.concat(Qe),cache:new Le.a});var Ge=function(){return s.a.createElement(Ue.a,{client:$e},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ge,null),s.a.createElement(L.a,{store:Ie},s.a.createElement(J.c,null,s.a.createElement(J.a,{exact:!0,path:"/",component:q}),s.a.createElement(J.a,{exact:!0,path:"/login",component:X}),s.a.createElement(J.a,{exact:!0,path:"/signup",component:Z}),s.a.createElement(J.a,{exact:!0,path:"/products",component:le}),s.a.createElement(J.a,{exact:!0,path:"/Contact",component:se}),s.a.createElement(J.a,{exact:!0,path:"/success",component:oe}),s.a.createElement(J.a,{exact:!0,path:"/orderHistory",component:be}),s.a.createElement(J.a,{exact:!0,path:"/products/:id",component:fe}),s.a.createElement(J.a,{exact:!0,path:"/profile",component:xe}),s.a.createElement(J.a,{component:he}))))))};m.a.render(s.a.createElement(d.a,null,s.a.createElement(Ge,null)),document.getElementById("root"))},67:function(e,t,a){e.exports=a.p+"static/media/spinner.9b54dbe8.gif"},96:function(e,t,a){e.exports=a.p+"static/media/hammer.cd8a8bfc.gif"},98:function(e,t,a){e.exports=a.p+"static/media/blankprofile.ae18a9e6.png"}},[[106,1,2]]]);
//# sourceMappingURL=main.ddf96e2d.chunk.js.map