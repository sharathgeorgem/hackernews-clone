(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),o=a(1),i=a(2),l=a(3),u=a(6),h=a(7),m=a(9),p=a(8),f=a(10),S=function(e){var t=e.value,a=e.onChange,n=e.onSubmit,c=e.children;return r.a.createElement("form",{onSubmit:n},r.a.createElement("input",{type:"text",value:t,onChange:a}),r.a.createElement("button",{type:"submit"},c))},b=function(e){var t=e.onClick,a=e.className,n=void 0===a?"":a,c=e.children;return r.a.createElement("button",{onClick:t,className:n,type:"button"},c)},v={width:"40%"},E={width:"30%"},d={width:"10%"},y=function(e){var t=e.list,a=e.onDismiss;return r.a.createElement("div",{className:"table"},t.map(function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("span",{style:v},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("span",{style:E},e.author),r.a.createElement("span",{style:d},e.num_comments),r.a.createElement("span",{style:d},e.points),r.a.createElement("span",{style:d},r.a.createElement(b,{onClick:function(){return a(e.objectID)},className:"button-inline"},"Dismiss")))}))},g=(a(16),"react"),j="https://hn.algolia.com/api/v1",T="/search",w="query=",O="page=",C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).needsToSearchTopStories=function(e){return!a.state.results[e]},a.setSearchTopStories=function(e){var t=e.hits,n=e.page,r=a.state,c=r.searchKey,s=r.results,u=s&&s[c]?s[c].hits:[],h=Object(l.a)(u).concat(Object(l.a)(t));a.setState({results:Object(i.a)({},s,Object(o.a)({},c,{hits:h,page:n}))})},a.fetchSearchTopStories=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="".concat(j).concat(T,"?").concat(w).concat(e,"&").concat(O).concat(t);fetch(n).then(function(e){return e.json()}).then(function(e){return a.setSearchTopStories(e)}).catch(function(e){return a.setState({error:e})})},a.onDismiss=function(e){var t=a.state,n=t.searchKey,r=t.results,c=r[n],s=c.hits,l=c.page,u=s.filter(function(t){return t.objectID!==e});a.setState({results:Object(i.a)({},r,Object(o.a)({},n,{hits:u,page:l}))})},a.onSearchSubmit=function(e){var t=a.state.searchTerm;a.setState({searchKey:t}),a.needsToSearchTopStories(t)&&a.fetchSearchTopStories(t),e.preventDefault()},a.onSearchChange=function(e){a.setState({searchTerm:e.target.value})},a.state={results:null,searchKey:"",searchTerm:g,error:null},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchTerm,n=t.results,c=t.searchKey,s=t.error,o=n&&n[c]&&n[c].page||0,i=n&&n[c]&&n[c].hits||[];return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"interactions"},r.a.createElement(S,{value:a,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search")),s?r.a.createElement("div",{className:"interactions"},r.a.createElement("p",null,"Oops. Something went wrong")):r.a.createElement(y,{list:i,onDismiss:this.onDismiss}),r.a.createElement("div",{className:"interactions"},r.a.createElement(b,{onClick:function(){return e.fetchSearchTopStories(c,o+1)}},"More")))}}]),t}(n.Component);a(18);s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.f0568a83.chunk.js.map