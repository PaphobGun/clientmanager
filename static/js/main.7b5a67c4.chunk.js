(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),m=t(5),s=t(6),i=t(8),o=t(7),d=t(9),u=t(32),E=t(31),b=t(30),h=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-5"},l.a.createElement("div",{className:"container py-2"},l.a.createElement(b.a,{to:"/",className:"navbar-brand"},l.a.createElement("span",{className:"text-info"},l.a.createElement("i",{className:"fas fa-users mr-1"})),"  ","Client Manager"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"}," ",l.a.createElement(b.a,{to:"/",className:"nav-link"},"About"))),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item mr-3"},l.a.createElement(b.a,{to:"/",className:"btn btn-danger"},"GG")),l.a.createElement("li",{className:"nav-item"}," ",l.a.createElement(b.a,{to:"/",className:"nav-link"},"Logout"))))))}}]),a}(n.Component),v=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).renderMonth=function(){return["January","February","March","April","May","June","July","August","September","Octobe","November","December"][(new Date).getMonth()].toUpperCase()},t.renderYear=function(){return(new Date).getFullYear()},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-md-7 text-center"},l.a.createElement("div",{className:"card bg-dark card-height mb-resp-card d-flex justify-content-center"},l.a.createElement("div",{className:"text-white text-target-label"},"TARGET"," ",l.a.createElement("span",{className:"d-none d-md-inline"},"IN ",this.renderMonth()," ",this.renderYear())),l.a.createElement("div",{className:"text-target"},"3,000,000.00 THB"),l.a.createElement("div",{className:"text-white text-target-label"},"TOTAL ",l.a.createElement("span",{className:"d-none d-md-inline"},"SALE AMOUNT")),l.a.createElement("div",{className:"text-sale-amount"},"2,850,000.00 THB"))),l.a.createElement("div",{className:"col-md-5 text-center"},l.a.createElement("div",{className:"card bg-dark card-height d-flex justify-content-center"},l.a.createElement("div",{className:"display-4 text-white"},"SALE PROGRESS"),l.a.createElement("div",{className:"percent percent-green"},"95%")," "))))}}]),a}(n.Component),N=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"Client List")),l.a.createElement("table",{className:"table table-responsive w-100 d-md-table table-striped"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"Company"),l.a.createElement("th",null,"Product"),l.a.createElement("th",null,"Sale Amount (THB)"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Sumitomo"),l.a.createElement("td",null,"Cutting Tool"),l.a.createElement("td",null,"5,235,598.00"),l.a.createElement("td",null,l.a.createElement("a",{href:"details.html",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Post Two"),l.a.createElement("td",null,"Tech Gadgets"),l.a.createElement("td",null,"May 9 2018"),l.a.createElement("td",null,l.a.createElement("a",{href:"details.html",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Post Three"),l.a.createElement("td",null,"Web Development"),l.a.createElement("td",null,"May 11 2018"),l.a.createElement("td",null,l.a.createElement("a",{href:"details.html",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Post Four"),l.a.createElement("td",null,"Business"),l.a.createElement("td",null,"May 15 2018"),l.a.createElement("td",null,l.a.createElement("a",{href:"details.html",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Post Five"),l.a.createElement("td",null,"Web Development"),l.a.createElement("td",null,"May 17 2018"),l.a.createElement("td",null,l.a.createElement("a",{href:"details.html",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Post Six"),l.a.createElement("td",null,"Health & Wellness"),l.a.createElement("td",null,"May 28 2018"),l.a.createElement("td",null,l.a.createElement("a",{href:"details.html",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))))))))))}}]),a}(n.Component),f=(t(23),function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"main-body"},l.a.createElement(h,null),l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{path:"/",component:N}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(25),t(28);c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.7b5a67c4.chunk.js.map