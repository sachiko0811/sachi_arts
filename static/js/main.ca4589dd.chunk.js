(this["webpackJsonpsachi-arts"]=this["webpackJsonpsachi-arts"]||[]).push([[0],{121:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(57),o=n.n(s),i=(n(121),n(16)),a=n(14),l=n(140),u=n(146),h=n(154),j=n(141),d=n(82),b=n(33),p=n.n(b),x=n(52),O=n(61),m=n(62),g=n(107),f=n(106),A=n(98),C=n.n(A),v=n(3),k=r.a.createContext(),w=C.a.buildClient({domain:"sachi-arts.myshopify.com",storefrontAccessToken:"c09e0645c3818b437a3ef252d4ea2e13"}),I=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(O.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={product:{},products:[],checkout:{},isCartOpen:!1,isMenuOpen:!1},e.createCheckout=Object(x.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.checkout.create();case 2:n=t.sent,localStorage.setItem("checkout_id",n.id),e.setState({checkout:n});case 5:case"end":return t.stop()}}),t)}))),e.fetchCheckout=function(t){w.checkout.fetch(t).then((function(t){e.setState({checkout:t})}))},e.addItemToCheckout=function(){var t=Object(x.a)(p.a.mark((function t(n,c){var r,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[{variantId:n,quantity:parseInt(c,10)}],t.next=3,w.checkout.addLineItems(e.state.checkout.id,r);case 3:s=t.sent,e.setState({checkout:s}),e.openCart();case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.removeLineItem=function(){var t=Object(x.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.checkout.removeLineItems(e.state.checkout.id,n);case 2:c=t.sent,e.setState({checkout:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(x.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.product.fetchAll();case 2:n=t.sent,e.setState({products:n});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithHandle=function(){var t=Object(x.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.product.fetchByHandle(n);case 2:c=t.sent,e.setState({product:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e.closeMenu=function(){e.setState({isMenuOpen:!1})},e.openMenu=function(){e.setState({isMenuOpen:!0})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){localStorage.checkout_id?this.fetchCheckout(localStorage.checkout_id):this.createCheckout()}},{key:"render",value:function(){return Object(v.jsx)(k.Provider,{value:Object(d.a)(Object(d.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithHandle:this.fetchProductWithHandle,addItemToCheckout:this.addItemToCheckout,removeLineItem:this.removeLineItem,closeCart:this.closeCart,openCart:this.openCart,closeMenu:this.closeMenu,openMenu:this.openMenu}),children:this.props.children})}}]),n}(c.Component),y=(k.Consumer,I),S=function(){return Object(v.jsxs)(l.a,{backgroundColor:"#DB352E",w:"100%",position:"relative",h:"70vh",children:[Object(v.jsx)(h.a,{src:"https://lh3.googleusercontent.com/proxy/YBEC683s6t-dJVaStd44virJM9e56HLDsKogdNshICpPuf9BlJMneZxd7JuRbnCMCjVpzOhtexvB7HA-Q-oJJiRlSK-BoSRRvNwRY4Fp3tT3Ftf0TWvS46h8tVB414mkktQ-0xh8DHlnRqjd7ckMi3dxeXfdjH4",h:"100%",m:"auto",objectFit:"contain",objectPosition:["top","center"]}),Object(v.jsx)(j.a,{className:"text-focus-in",position:"absolute",bottom:"20%",w:"100%",textAlign:"center",color:"white",fontWeight:"bold",fontSize:"4rem",children:"Sachi Arts"})]})},P=n(142),L=n(143),M=function(e){var t=e.heading,n=e.text;return Object(v.jsx)(l.a,{p:"1rem",children:Object(v.jsxs)(P.a,{display:"flex",flexDir:"column",textAlign:"center",children:[Object(v.jsx)(L.a,{py:"2rem",children:t&&t}),Object(v.jsx)(j.a,{pb:"2rem",children:n&&n})]})})},F=n(144),U=n(151),B=function(e){var t=e.reverse,n=e.image,c=e.heading,r=e.text,s=t?"row-reverse":"row";return Object(v.jsx)(l.a,{children:Object(v.jsxs)(F.a,{flexDir:["column",s],w:"100%",children:[Object(v.jsx)(h.a,{src:n,objectFit:"cover",w:["100%","50%"]}),Object(v.jsxs)(F.a,{w:["100%","50%"],flexDir:"column",justifyContent:"center",alignItems:"center",p:"2rem",children:[Object(v.jsx)(L.a,{p:"2rem",children:c&&c}),Object(v.jsx)(j.a,{p:"2rem",children:r&&r}),Object(v.jsx)(U.a,{w:"10rem",backgroundColor:"#111514",color:"white",_hover:{opacity:"70%"},children:"Buy Now"})]})]})})},J=function(){var e=Object(c.useContext)(k),t=e.fetchAllProducts,n=e.products;return Object(c.useEffect)((function(){t()}),[t]),console.log(n),n?Object(v.jsxs)(l.a,{children:[Object(v.jsx)(S,{}),Object(v.jsx)(M,{heading:"The moment I can't forget.",text:"Post cards "}),Object(v.jsx)(u.a,{templateColumns:"repeat(3, 1fr)",children:n.map((function(e){return Object(v.jsx)(i.b,{to:"/products/".concat(e.handle),children:Object(v.jsxs)(l.a,{_hover:{opacity:"80%"},textAlign:"center",position:"relative",children:[Object(v.jsx)(h.a,{src:e.images[0].src}),Object(v.jsx)(j.a,{position:"absolute",bottom:"15%",w:"100%",fontWeight:"bold",children:e.title}),Object(v.jsxs)(j.a,{position:"absolute",bottom:"5%",w:"100%",color:"gray.500",children:["$",e.variants[0].price]})]})},e.id)}))}),Object(v.jsx)(M,{heading:"Find Your Favorite Photo!"}),Object(v.jsx)(B,{image:"https://cdn.shopify.com/s/files/1/0572/2085/8005/files/blue-nemo.jpg?v=1622670036",heading:"Heading",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(v.jsx)(B,{reverse:!0,image:"https://cdn.shopify.com/s/files/1/0572/2085/8005/files/tokyo-night.jpg?v=1622670167",heading:"Second Heading",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}):Object(v.jsx)("div",{children:"Loadings..."})},Q=function(){var e=Object(a.f)().handle,t=Object(c.useContext)(k),n=t.fetchProductWithHandle,r=t.addItemToCheckout,s=t.product;return Object(c.useEffect)((function(){n(e)}),[n,e]),s.title?Object(v.jsx)(l.a,{p:"2rem",children:Object(v.jsxs)(u.a,{templateColumns:["repeat(1, 1fr)","repeat(2, 1fr)"],m:"auto",children:[Object(v.jsx)(F.a,{justifyContent:"center",alignItems:"center",children:Object(v.jsx)(h.a,{src:s.images[0].src})}),Object(v.jsxs)(F.a,{flexDirection:"column",alignItems:"center",justifyContent:"center",px:"2rem",children:[Object(v.jsx)(L.a,{pb:"2rem",children:s.title}),Object(v.jsx)(j.a,{fontWeight:"bold",pb:"2rem",children:s.variants[0].price}),Object(v.jsx)(j.a,{pb:"2rem",color:"gray.500",children:s.description}),Object(v.jsx)(U.a,{onClick:function(){return r(s.variants[0].id,1)},_hover:{opacity:"70%"},w:"10rem",backgroundColor:"#DB352E",color:"white",children:"Add To Cart"})]})]})}):Object(v.jsx)("div",{children:"Loading..."})},V=n(100),Z=n(147),K=function(){var e,t=Object(c.useContext)(k),n=t.openCart,r=t.openMenu,s=t.checkout;return Object(v.jsxs)(F.a,{backgroundColor:"#FFF",flexDirection:"row",alignItems:"center",justifyContent:"space-between",p:"2rem",children:[Object(v.jsx)(V.a,{fill:"white",cursor:"pointer",w:30,h:30,onClick:function(){return r()}}),Object(v.jsx)(i.b,{to:"/",children:Object(v.jsx)(h.a,{src:"data:image/png;base64,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",w:100,h:100})}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(V.a,{fill:"white",cursor:"pointer",w:30,h:30,onClick:function(){return n()}}),Object(v.jsx)(Z.a,{backgroundColor:"#DB352E",borderRadius:"50%",children:null===(e=s.lineItems)||void 0===e?void 0:e.length})]})]})},N=n(155),W=n(35),E=n(148),q=n(156),T=function(){var e,t,n=Object(c.useContext)(k),r=n.isCartOpen,s=n.closeCart,o=n.checkout,i=n.removeLineItem;return console.log(o),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(N.a,{isOpen:r,placement:"right",onClose:s,size:"sm",children:Object(v.jsx)(W.g,{children:Object(v.jsxs)(N.b,{children:[Object(v.jsx)(W.c,{}),Object(v.jsx)(W.f,{children:"Your Shopping Cart"}),Object(v.jsx)(W.b,{children:(null===(e=o.lineItems)||void 0===e?void 0:e.length)?o.lineItems.map((function(e){return Object(v.jsxs)(u.a,{templateColumns:"repeat(4, 1fr)",gap:1,children:[Object(v.jsx)(F.a,{alignItems:"center",justifyContent:"center",children:Object(v.jsx)(q.a,{cursor:"pointer",onClick:function(){return i(e.id)}})}),Object(v.jsx)(F.a,{alignItems:"center",justifyContent:"center",children:Object(v.jsx)(h.a,{src:e.variant.image.src})}),Object(v.jsx)(F.a,{alignItems:"center",justifyContent:"center",children:Object(v.jsx)(j.a,{children:e.title})}),Object(v.jsx)(F.a,{children:Object(v.jsx)(j.a,{children:e.variant.price})})]},e.id)})):Object(v.jsx)(l.a,{h:"100%",w:"100%",children:Object(v.jsx)(j.a,{h:"100%",display:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",children:"Your Cart is empty!"})})}),(null===(t=o.lineItems)||void 0===t?void 0:t.length)?Object(v.jsx)(W.e,{children:Object(v.jsx)(U.a,{w:"100%",children:Object(v.jsx)(E.a,{w:"100%",href:o.webUrl,children:"Checkout"})})}):null]})})})})},X=n(152),R=function(){var e=Object(c.useContext)(k),t=e.isMenuOpen,n=e.closeMenu;return Object(v.jsx)(N.a,{isOpen:t,onClose:n,placement:"left",size:"sm",children:Object(v.jsx)(W.g,{children:Object(v.jsxs)(N.b,{children:[Object(v.jsx)(W.c,{}),Object(v.jsx)(W.f,{children:"Menu"}),Object(v.jsx)(W.b,{children:Object(v.jsxs)(X.a,{p:"2rem",children:[Object(v.jsx)(i.b,{to:"/",children:"About Us"}),Object(v.jsx)(i.b,{to:"/products/blue-nemo",children:"Nemophila"}),Object(v.jsx)(i.b,{to:"/products/gerbera-daisy",children:"Gerbera"}),Object(v.jsx)(i.b,{to:"/products/singer",children:"A singer"}),Object(v.jsx)(i.b,{to:"/products/tokyo-night",children:"The city night"})]})}),Object(v.jsx)(W.e,{textAlign:"center",children:Object(v.jsx)(j.a,{w:"100%",children:"\xa9\ufe0e Copyright www.workingwithshopify.com"})})]})})})},z=function(){return Object(v.jsxs)(l.a,{backgroundColor:"#DB352E",children:[Object(v.jsxs)(u.a,{templateColumns:["repeat(3, 1fr)","repeat(3, 1fr)"],color:"white",fontWeight:"bold",children:[Object(v.jsx)(h.a,{src:""}),Object(v.jsxs)(X.a,{p:"2rem",children:[Object(v.jsx)(i.b,{to:"/products/blue-nemo",children:"Nemophila"}),Object(v.jsx)(i.b,{to:"/products/gerbera-daisy",children:"Gerbera"}),Object(v.jsx)(i.b,{to:"/products/tokyo-night",children:"The City Night"})]}),Object(v.jsxs)(X.a,{p:"2rem",children:[Object(v.jsx)(i.b,{to:"/",children:"About Us"}),Object(v.jsx)(i.b,{to:"/",children:"Learn More"})]})]}),Object(v.jsx)(l.a,{children:Object(v.jsx)(j.a,{textAlign:"center",color:"white",w:"100%",borderTop:"1px solid white",p:"1rem",children:"\xa9\ufe0e Copyright www.workingwithshopify.com"})})]})};var D=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(i.a,{children:[Object(v.jsx)(K,{}),Object(v.jsx)(T,{}),Object(v.jsx)(R,{}),Object(v.jsxs)(a.c,{children:[Object(v.jsx)(a.a,{path:"/products/:handle",children:Object(v.jsx)(Q,{})}),Object(v.jsx)(a.a,{path:"/",children:Object(v.jsx)(J,{})})]}),Object(v.jsx)(z,{})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))},Y=n(150);o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Y.a,{children:Object(v.jsx)(y,{children:Object(v.jsx)(D,{})})})}),document.getElementById("root")),G()}},[[129,1,2]]]);
//# sourceMappingURL=main.ca4589dd.chunk.js.map