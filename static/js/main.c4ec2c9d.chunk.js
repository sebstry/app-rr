(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(29),a(9)),u=a(10),o=a(12),m=a(11),s=a(13),p=(a(30),a(3)),d=a(1),E=(a(31),a(14)),h=a.n(E),f=a(21),b=a.n(f),g=a(22),v=a.n(g),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"miasto"})}}),r.a.createElement(d.c,{path:"/products",render:function(){return r.a.createElement("img",{src:b.a,alt:"miasto"})}}),r.a.createElement(d.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:v.a,alt:"miasto"})}}),r.a.createElement(d.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:h.a,alt:"miasto"})}}),r.a.createElement(d.c,{render:function(){return r.a.createElement("img",{src:h.a,alt:"miasto"})}})))},j=(a(37),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),k=function(){var e=j.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},x=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:14}},a),r.a.createElement("p",{style:{fontSize:15}},n))},w=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur, repudiandae id doloribus nemo blanditiis sequi quos praesentium inventore ea maiores possimus quibusdam illo rem ad ab ullam quas perferendis."},{id:2,title:"Czym jest paradoks fermiego",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur, repudiandae id doloribus nemo blanditiis sequi quos praesentium inventore ea maiores possimus quibusdam illo rem ad ab ullam quas perferendis."},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur, repudiandae id doloribus nemo blanditiis sequi quos praesentium inventore ea maiores possimus quibusdam illo rem ad ab ullam quas perferendis."}],q=function(){var e=w.map(function(e){return r.a.createElement(x,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},O=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",null,r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",{onClick:this.handleSubmit},"Wy\u015blij")),r.a.createElement(d.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119"}))}}]),t}(r.a.Component)),N=(a(39),["car","bike","motocycle"]),z=function(){var e=N.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},C=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},S=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(C,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},J=function(){return r.a.createElement(d.c,{render:function(){return r.a.createElement(d.b,{to:"/login"})}})},F=function(){return r.a.createElement("div",null,"Strona error")},P=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,component:q}),r.a.createElement(d.c,{path:"/products",component:z}),r.a.createElement(d.c,{path:"/product/:id",component:S}),r.a.createElement(d.c,{path:"/contact",component:O}),r.a.createElement(d.c,{path:"/admin",component:J}),r.a.createElement(d.c,{path:"/login",component:P}),r.a.createElement(d.c,{component:F})))},B=(a(40),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(d.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(d.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page))}}),r.a.createElement(d.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct))}}))}),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(k,null)),r.a.createElement("section",{className:"page"},r.a.createElement(L,null))),r.a.createElement("footer",null,r.a.createElement(B,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c4ec2c9d.chunk.js.map