(this["webpackJsonpbearslairs-react"]=this["webpackJsonpbearslairs-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a(69)},36:function(e,t,a){},37:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),i=(a(36),a(22)),o=a(23),s=a(28),u=a(24),m=a(30),g=a(26),p=a.n(g),h=a(9),d=a.n(h),f=a(6),E=a.n(f),y=a(15),b=a.n(y),v=a(27),w=a.n(v),x=a(10),j=a.n(x),N=(a(37),a(29)),k=a(25).parse(window.location.search),O=new N.a,T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={language:"en",copy:{title:"",subtitle:"",carousel:[],blurbs:[],cards:[]}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;(null===O.get("lang")||void 0===O.get("lang")||void 0!=k.lang&&null!=k.lang)&&(this.state.language=void 0!=k.lang&&null!=k.lang?k.lang:"en",O.set("lang",this.state.language,{path:"/"})),fetch("https://raw.githubusercontent.com/bearslairs/bearslairs-data/master/copy/"+this.state.language+"/home.json").then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{language:e.language,copy:t}}))})).catch(console.log)}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("header",{className:"App-header clearfix"},l.a.createElement("h1",{className:"float-left"},this.state.copy.title),l.a.createElement("h2",{className:"float-left text-muted"},this.state.copy.subtitle),l.a.createElement("span",{className:"float-right text-muted"},l.a.createElement("a",{href:"/?lang=bg",className:"text-muted"},"bg"),l.a.createElement("a",{href:"/?lang=en"},"en"),l.a.createElement("a",{href:"/?lang=ru",className:"text-muted"},"ru"))),l.a.createElement(d.a,{style:{paddingTop:"10px"}},l.a.createElement(j.a,null,this.state.copy.carousel.map((function(e){return l.a.createElement(j.a.Item,null,l.a.createElement(b.a,{src:e.image.url,alt:e.image.alt,fluid:!0,rounded:!0}),l.a.createElement(j.a.Caption,null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description)))})))),l.a.createElement(d.a,{style:{paddingTop:"10px"}},this.state.copy.blurbs.map((function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,e.title),e.copy.map((function(e){return l.a.createElement("p",null,e)})))}))),l.a.createElement(d.a,{style:{paddingTop:"10px"}},this.state.copy.cards.map((function(e){return l.a.createElement(E.a,{style:{width:"30%",marginRight:"10px"}},l.a.createElement(E.a.Header,{as:"h3"},e.title,l.a.createElement(b.a,{src:e.icon.url,alt:e.icon.alt,fluid:!0,rounded:!0,style:{marginRight:"10px"},className:"float-right"})),l.a.createElement(E.a.Img,{variant:"top",src:e.image.url,alt:e.image.alt,fluid:!0,rounded:!0}),l.a.createElement(E.a.Body,null,l.a.createElement(E.a.Title,null,e.description.join(" ")),l.a.createElement("hr",null),l.a.createElement(E.a.Text,null,l.a.createElement("ul",null,e.features.map((function(e){return l.a.createElement("li",null,e.text,l.a.createElement("ul",null,e.details.map((function(e){return l.a.createElement("li",null,e)}))))}))),l.a.createElement(w.a,{variant:"primary",className:"float-right"},e.button.text))))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a23b9aa9.chunk.js.map