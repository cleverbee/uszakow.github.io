(this["webpackJsonp2020-06-hipotrofia"]=this["webpackJsonp2020-06-hipotrofia"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/picture.207eb183.svg"},,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/contact.d932c289.svg"},function(e,t,a){e.exports=a.p+"static/media/search.b3530932.svg"},function(e,t,a){e.exports=a.p+"static/media/login.02599189.svg"},function(e,t,a){e.exports=a.p+"static/media/up.c0ceee36.svg"},function(e,t,a){e.exports=a.p+"static/media/img1.df9f61f1.svg"},function(e,t,a){e.exports=a.p+"static/media/img2.b46d9aa6.svg"},function(e,t,a){e.exports=a.p+"static/media/img3.7879b630.svg"},function(e,t,a){e.exports=a.p+"static/media/banner.abf40bc0.svg"},function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(19),r=a.n(o),c=(a(34),a(35),a(6)),l=a(1),u=a(9),s=a(10),m=a(12),d=a(11);a(36),a(37),a(38),a(39);var p=function(e){var t=e.href,a=e.cssItem,n=e.closeMenu,o=e.children;return i.a.createElement(c.c,{exact:!0,to:t,activeClassName:"menu-item-active",className:"menu-item "+a,onClick:function(){n&&n()}},o)},f=a(21),h=a.n(f);var v=function(e){var t=e.css,a=e.closeMenu,n="menu-navigation-mobile"===t?"menu-item-mobile":"menu-item-desctop";return i.a.createElement("nav",{className:"menu-navigation"},i.a.createElement(p,{href:"/",cssItem:n,closeMenu:a},"Hipotrofia"),i.a.createElement(p,{href:"/help",cssItem:n,closeMenu:a},"Pomoc"),i.a.createElement(p,{href:"/stories",cssItem:n,closeMenu:a},"Historie dzieci"),i.a.createElement(p,{href:"/blog",cssItem:n,closeMenu:a},"Artyku\u0142y"),i.a.createElement(p,{href:"/cooperation",cssItem:n,closeMenu:a},i.a.createElement("span",null,i.a.createElement("img",{src:h.a,width:"20",className:"mobile-only",alt:"contact"}),"Kontakt")))},E=(a(45),a(22)),g=a.n(E);var b=function(e){var t=e.css,a=e.closeMenu;return i.a.createElement("form",{className:"menu-searcher "+t},i.a.createElement("input",{placeholder:"szukana fraza"}),i.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),a&&a()}},i.a.createElement("img",{src:g.a,width:"18",alt:"search"})))},k=(a(46),a(23)),w=a.n(k);var x=function(e){var t=e.css,a=e.closeMenu,n="menu-login-mobile"===t?"menu-item-mobile":"menu-item-desctop";return i.a.createElement(p,{href:"/login",cssItem:n,closeMenu:a},i.a.createElement("span",null,i.a.createElement("img",{src:w.a,className:"menu-nav-img",width:"16",title:"Zaloguj si\u0119",alt:"Zaloguj si\u0119"}),i.a.createElement("span",{className:"mobile-only"},"Zaloguj si\u0119")))},q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).activeMenu=function(){n.setState((function(e){return{isActive:!e.isActive}}))},n.state={isActive:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.isActive?"active":"";return i.a.createElement("div",{className:"menu-mobile "+e},i.a.createElement("button",{className:"menu-control",onClick:this.activeMenu},i.a.createElement("span",null)),i.a.createElement("div",{className:"menu-mobile-container"},i.a.createElement(b,{css:"menu-searcher-mobile",closeMenu:this.activeMenu}),i.a.createElement(v,{css:"menu-navigation-mobile",closeMenu:this.activeMenu}),i.a.createElement(x,{css:"menu-login-mobile",closeMenu:this.activeMenu})))}}]),a}(n.Component);a(47);var N=function(){return i.a.createElement("div",{className:"menu-desctop"},i.a.createElement(v,{css:"menu-navigation-desctop"}),i.a.createElement(b,{css:"menu-searcher-desctop"}),i.a.createElement(x,{css:"menu-login-desctop"}))},j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).isMobile=function(){n.setState({isMobile:window.innerWidth<992})},n.state={isMobile:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.isMobile(),window.addEventListener("resize",this.isMobile)}},{key:"render",value:function(){var e=this.state.isMobile;return i.a.createElement("div",{className:"menu-container"},e?i.a.createElement(q,null):i.a.createElement(N,null))}}]),a}(n.Component);a(48),a(49);var z=function(e){var t=e.author,a=t.name,n=t.role,o=t.link;return i.a.createElement("span",{className:"footer-item"},i.a.createElement("a",{href:o},a),i.a.createElement("span",null," - ",n))},M=[{name:"Imi\u0119 Nazwisko",role:"funkcja",link:"#"},{name:"D\u0142ugieimi\u0119 D\u0142ugienazwisko",role:"funkcja rola",link:"#"},{name:"D\u0142ugieimi\u0119 D\u0142ugienazwisko",role:"funkcja",link:"#"},{name:"Imi\u0119 Nazwisko",role:"funkcja",link:"#"},{name:"Imi\u0119 Nazwisko",role:"funkcja",link:"#"},{name:"Imi\u0119 Nazwisko",role:"funkcja",link:"#"},{name:"Imi\u0119 Nazwisko",role:"funkcja w projekcie",link:"#"},{name:"D\u0142ugieimi\u0119 D\u0142ugienazwisko",role:"funkcja rola",link:"#"},{name:"D\u0142ugieimi\u0119 D\u0142ugienazwisko",role:"funkcja rola",link:"#"},{name:"Imi\u0119 Nazwisko",role:"funkcja w projekcie",link:"#"}];var y=function(){return i.a.createElement("footer",{className:"footer-container"},i.a.createElement("div",{className:"footer-content"},M.map((function(e,t){return i.a.createElement(z,{key:t,author:e})}))))},D=(a(50),a(24)),I=a.n(D),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).isTop=function(){window.pageYOffset>200?n.setState({top:!1}):n.setState({top:!0})},n.scrollUp=function(){window.scrollTo({top:0,behavior:"smooth"})},n.state={top:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.isTop(),window.addEventListener("scroll",this.isTop)}},{key:"render",value:function(){var e=!1===this.state.top?"button-up-show":"";return i.a.createElement("button",{className:"button-up "+e,onClick:this.scrollUp},i.a.createElement("img",{src:I.a,alt:"Up"}))}}]),a}(n.Component);a(51),a(52);var U=function(e){return i.a.createElement("div",{className:"banner-container"},i.a.createElement("img",{src:e.photo,alt:"background",width:"100%",className:"banner-background"}),i.a.createElement("div",{className:"banner-button-container"},i.a.createElement(c.b,{to:"/pregnancy",className:"banner-button banner-button-pregnancy"},"Hipotrofia w ci\u0105\u017cy"),i.a.createElement(c.b,{to:"/children",className:"banner-button banner-button-baby"},"Hipotrofia u dzieci")))};a(53),a(54);var H=function(e){var t=e.item,a=t.href,n=t.src,o=t.alt,r=t.title,c=t.text;return i.a.createElement("a",{href:a,className:"pictures-item"},i.a.createElement("img",{src:n,alt:o}),i.a.createElement("h4",null,r),i.a.createElement("p",null,c))},L=a(8),C=a.n(L),S=[{href:"#",src:C.a,alt:"image",title:"Wsp\xf3\u0142praca",text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{href:"#",src:C.a,alt:"image",title:"R\xf3\u017cnica mi\u0119dzy SGA a IUGR",text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{href:"#",src:C.a,alt:"image",title:"Programy leczenia hormonem wzrostu w Polsce",text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{href:"#",src:C.a,alt:"image",title:"Historie dzieci",text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{href:"#",src:C.a,alt:"image",title:"Najcz\u0119\u015bciej zadawane pytania o hipotrofi\u0119",text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{href:"#",src:C.a,alt:"image",title:"Magik foundation",text:"https://www.magicfoundation.org/"}];var A=function(){return i.a.createElement("div",{className:"pictures-container"},S.map((function(e,t){return i.a.createElement(H,{key:t,item:e})})))},T=(a(55),a(25)),W=a.n(T),G=a(26),J=a.n(G),P=a(27),Z=a.n(P);var B=function(){return i.a.createElement("div",{className:"text-container"},i.a.createElement("h2",null,"Hipotrofia"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("img",{src:W.a,alt:"img1",width:"330",className:"text-img-float"}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("img",{src:J.a,alt:"img2",width:"100%"}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("h2",null,"Jak mierzy\u0107 dziecko"),i.a.createElement("img",{src:Z.a,alt:"img3"}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},R=a(28),F=a.n(R);var K=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{photo:F.a}),i.a.createElement("div",{className:"home-container"},i.a.createElement(A,null),i.a.createElement(B,null)))};var Y=function(){return i.a.createElement(c.a,null,i.a.createElement(j,null),i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",component:K}),i.a.createElement(l.a,{path:"/help"},i.a.createElement("h2",null,"Gdzie znale\u017a\u0107 pomoc")),i.a.createElement(l.a,{path:"/stories"},i.a.createElement("h2",null,"Historie dzieci")),i.a.createElement(l.a,{path:"/blog"},i.a.createElement("h2",null,"Tutaj mo\u017cna b\u0119dzie co\u015b opublikowa\u0107")),i.a.createElement(l.a,{path:"/cooperation"},i.a.createElement("h2",null,"Opcje wsp\xf3\u0142pracy")),i.a.createElement(l.a,{path:"/login"},i.a.createElement("h2",null,"Strona logowania")),i.a.createElement(l.a,{path:"/pregnancy"},i.a.createElement("h2",null,"Hipotrofia w ci\u0105\u017cy")),i.a.createElement(l.a,{path:"/children"},i.a.createElement("h2",null,"Hipotrofia u dzieci")),i.a.createElement(l.a,null,i.a.createElement("h2",null,"Strona 404"))),i.a.createElement(y,null),i.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.466a8088.chunk.js.map