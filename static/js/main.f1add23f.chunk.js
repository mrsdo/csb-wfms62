(this["webpackJsonpnucamp-react-router-v6-useparams-demo"]=this["webpackJsonpnucamp-react-router-v6-useparams-demo"]||[]).push([[0],{20:function(A,c,e){},21:function(A,c,e){"use strict";e.r(c);var s=e(0),t=e(9),a=e(4),j=e(2),n=e(1),i=function(A){var c=A.albumsData;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Albums"}),Object(n.jsx)("ul",{children:c.map((function(A){return Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/albums/".concat(A.id),children:A.title})},A.id)}))})]})},b=function(A){var c=A.albumsData,e=Object(j.g)().albumId,s=c.find((function(A){return A.id===parseInt(e)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Album Info"}),s.title," by ",s.artist," - ",s.year]})},r=e(10),E=function(A){var c=A.albumsData,e=Object(r.a)(c).sort((function(A,c){return c.year>A.year?1:-1}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Albums Sorted By Year"}),e.map((function(A){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["year: ",A.year]}),Object(n.jsx)("img",{src:A.thumbnail,alt:A.title}),Object(n.jsxs)("p",{children:["title: ",A.title]}),Object(n.jsxs)(a.b,{to:"/albums/".concat(A.id),children:[A.title," "]}),Object(n.jsxs)("p",{children:["artist: ",A.artist]}),Object(n.jsx)("hr",{})]},A.year)}))]})},B=function(){return Object(n.jsx)("div",{children:"M. Dolce UseParams Demo Homepage"})},N=[{id:0,thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNg3-7huJJvmOUzdz2cyVFdmEh8lJrC3Ox6od&s=0",title:"Mezzanine",artist:"Massive Attack",year:1998},{id:1,thumbnail:"data:image/jpeg;base64,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",title:"Eutopia",artist:"Massive Attack",year:2020},{id:3,thumbnail:"data:image/jpeg;base64,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",title:"Bite Size",artist:"Massive Attack",year:2006},{id:4,thumbnail:"data:image/jpeg;base64,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",title:"100th Window",artist:"Massive Attack",year:2003}],l=function(){var A=N;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/Home",children:"Demo Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/albums",children:"Albums"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/albumsbyyear",children:"Albums By Year"})})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/Home",element:Object(n.jsx)(B,{})}),Object(n.jsx)(j.a,{path:"/albums",element:Object(n.jsx)(i,{albumsData:A})}),Object(n.jsx)(j.a,{path:"/albumsbyyear",element:Object(n.jsx)(E,{albumsData:A})}),Object(n.jsx)(j.a,{path:"/albums/:albumId",element:Object(n.jsx)(b,{albumsData:A})})]})]})},x=(e(20),document.getElementById("root"));Object(t.createRoot)(x).render(Object(n.jsx)(s.StrictMode,{children:Object(n.jsx)(a.a,{children:Object(n.jsx)(l,{})})}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f1add23f.chunk.js.map