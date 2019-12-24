(window["webpackJsonpreact-reading-list"]=window["webpackJsonpreact-reading-list"]||[]).push([[5],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),l=a(70),i=a(161),c=a(180),m=a(181),u=a(45),s=a(175),d=a(194),E=a(182),b=a(157),h=a(158),f=a(159),v=a(160),g=a(183),p=a(184),y=a(185),k=a(42),w=a(30),I=Object(i.a)(function(e){return{toolbar:e.mixins.toolbar}}),j=function(){var e=I().toolbar;return r.a.createElement("div",{className:e})},x=Object(i.a)(function(){return{appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240}}}),O=function(){var e=x(),t=e.appBar,a=e.drawer,n=e.drawerPaper,o=Object(w.b)().username,i=Object(k.b)().logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:t,position:"fixed"},r.a.createElement(m.a,null,r.a.createElement(u.a,{style:{flexGrow:1},variant:"h6"},o),r.a.createElement(s.a,{color:"inherit",onClick:i},"Logout"))),r.a.createElement(d.a,{anchor:"left",classes:{paper:n},className:a,variant:"permanent"},r.a.createElement(j,null),r.a.createElement(E.a,null),r.a.createElement(b.a,null,r.a.createElement(h.a,{button:!0,component:l.a,to:"/list"},r.a.createElement(f.a,null,r.a.createElement(g.a,null)),r.a.createElement(v.a,{primary:"Reading List"})),r.a.createElement(h.a,{button:!0,component:l.a,to:"/finished"},r.a.createElement(f.a,null,r.a.createElement(p.a,null)),r.a.createElement(v.a,{primary:"Finished Books"})),r.a.createElement(h.a,{button:!0,component:l.a,to:"/discover"},r.a.createElement(f.a,null,r.a.createElement(y.a,null)),r.a.createElement(v.a,{primary:"Discover"})))))},B=a(15),P=a(41),F=a(166),L=a(26),R=function(e){return Object(L.a)("book?query=".concat(encodeURIComponent(e)))},C=a(68),D=function(e){return function(e){return Object(L.a)("book/".concat(e))}(e.bookId).then(function(e){return e.book})},H=function(e){var t=e.bookId,a=Object(P.a)({promiseFn:D,bookId:t}),n=a.data,o=a.isPending,l=a.isRejected,i=a.isResolved,c=a.error,m=Object(B.g)({bookId:t});return o?r.a.createElement(C.e,null):l?r.a.createElement(C.d,{error:c}):i&&!n?r.a.createElement(u.a,{color:"error",gutterBottom:!0,variant:"body1"},"Hmmm... Something's not quite right. Please try another book."):r.a.createElement(F.a,{container:!0,spacing:3},r.a.createElement(F.a,{item:!0,xs:6},r.a.createElement(C.a,{book:n,listItem:m})),m&&r.a.createElement(F.a,{item:!0,xs:6},r.a.createElement(C.c,{listItem:m})))};H.defaultProps={bookId:null};var S=H,q=a(19),G=a(64),N=function(e){var t=e.isPending,a=e.isResolved,n=e.noBooksFound;return r.a.createElement(o.a,{mt:3,textAlign:"center"},r.a.createElement(u.a,{variant:"body1"},"Welcome to the discover page."),r.a.createElement(u.a,{variant:"body1"},"Here, let me load a few books for you..."),t&&r.a.createElement(o.a,{m:"auto",width:1},r.a.createElement(C.i,null)),a&&r.a.createElement(u.a,null,n?"Hmmm... I couldn't find any books to suggest for you. Sorry.":"Here you go! Find more books with the search bar above."))},A=function(e){var t=e.isPending,a=e.query;return t?r.a.createElement(o.a,{m:"auto",width:1},r.a.createElement(C.i,null)):r.a.createElement(u.a,{variant:"body1"},"Hmmm... I couldn't find any books with the query \"",a,'." Please try another.')},J=function(){return R("")},W=function(){var e=Object(n.useState)(""),t=Object(q.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(),i=Object(q.a)(l,2),c=i[0],m=i[1],u=Object(P.a)({promiseFn:J,deferFn:R}),s=u.data,d=u.isPending,E=u.isRejected,b=u.isResolved,h=u.error,f=u.run,v=(s||{books:[]}).books,g=Object(G.a)(v);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(C.h,{handleInputChange:function(e){var t=e.target;o(t.value)},handleSearchClick:function(e){e.preventDefault(),m(!0),f(a)},isPending:d,isRejected:E,error:h})),r.a.createElement("div",null,!c&&r.a.createElement(N,{isPending:d,isResolved:b,noBooksFound:g}),b&&r.a.createElement(r.a.Fragment,null,!g&&r.a.createElement(F.a,{container:!0,spacing:3},v.map(function(e){return r.a.createElement(F.a,{key:e.id,item:!0,xs:3},r.a.createElement(C.b,{book:e}))})),g&&c&&r.a.createElement(A,{isPending:d,query:a}))))},T=function(){return r.a.createElement(C.f,{filterListItems:function(e){var t=e.finishDate;return Boolean(t)},noFilteredListItems:r.a.createElement(u.a,{gutterBottom:!0,variant:"body1"},"Looks like you've got some reading to do! Check them out in your"," ",r.a.createElement(l.a,{to:"/list"},"reading list")," or"," ",r.a.createElement(l.a,{to:"/discover"},"discover more"),"."),noListItems:r.a.createElement(u.a,{gutterBottom:!0,variant:"body1"},"Hey there! This is where books will go when you've finished reading them. Get started by heading over to"," ",r.a.createElement(l.a,{to:"/discover"},"the Discover page")," to add books to your list.")})},U=a(178),z=a(186),K=function(){return r.a.createElement(o.a,{alignItems:"center",components:U.a,display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",textAlign:"center"},r.a.createElement(u.a,{gutterBottom:!0,variant:"h6"},"Sorry... nothing here."),r.a.createElement(z.a,{component:l.a,to:"/",variant:"body1"},"Go home"))},M=function(){return r.a.createElement(C.f,{filterListItems:function(e){return!e.finishDate},noFilteredListItems:r.a.createElement(u.a,{gutterBottom:!0,variant:"body1"},"Looks like you've finished all your books! Check them out in your"," ",r.a.createElement(l.a,{to:"/finished"},"finished books")," or"," ",r.a.createElement(l.a,{to:"/discover"},"discover more"),"."),noListItems:r.a.createElement(u.a,{gutterBottom:!0,variant:"body1"},"Hey there! Welcome to your bookshelf reading list. Get started by heading over to ",r.a.createElement(l.a,{to:"/discover"},"the Discover page")," to add books to your list.")})},Q=function(){return r.a.createElement(l.b,{to:"/list"})},V=function(){return r.a.createElement(B.a,null,r.a.createElement(l.c,null,r.a.createElement(Q,{path:"/"}),r.a.createElement(S,{path:"/book/:bookId"}),r.a.createElement(W,{path:"/discover"}),r.a.createElement(T,{path:"/finished"}),r.a.createElement(M,{path:"/list"}),r.a.createElement(K,{default:!0})))};t.default=function(){return r.a.createElement(o.a,{display:"flex"},r.a.createElement(O,null),r.a.createElement(o.a,{backgroundColor:"palette.background.default",component:"main",flexGrow:1,padding:3},r.a.createElement(j,null),r.a.createElement(V,null)))}}}]);
//# sourceMappingURL=5.c6b00072.chunk.js.map