(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),s=(n(23),n(9)),l=n(8),u=n(1),i=n(2),m=n(4),d=n(3),p=n(5),b=n(17),v=function(e){var t=e.totalCounters;return console.log("NavBar - Rendered"),o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand"},"Navbar"," ",o.a.createElement("span",{className:"badge badge-pill badge-secondary"},t))))},h=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){console.log("prevProps",e),console.log("prevState",t),e.counter.value,this.props.counter.value}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmount")}},{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),o.a.createElement("div",null,o.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),o.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment"),o.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2",disabled:this.getDisableAttr()},"Decrement"),o.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getDisableAttr",value:function(){return 0===this.props.counter.value}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("Counters - Rendered");var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,r=e.onIncrement,c=e.onDecrement;return o.a.createElement("div",null,o.a.createElement("button",{onClick:t,className:"btn btn-primary btn-sm m-2"},"Reset"),n.map(function(e){return o.a.createElement(h,{key:e.id,onDelete:a,onIncrement:r,onDecrement:c,counter:e})}))}}]),t}(a.Component),g=(n(24),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},n.handleIncrement=function(e){var t=Object(l.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value++,n.setState({counters:t})},n.handleReset=function(){var e=n.state.counters.map(function(e){return e.value=0,e});n.setState({counters:e})},n.handleDecrement=function(e){var t=Object(l.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value--,n.setState({counters:t})},n.handleDelete=function(e){var t=n.state.counters.filter(function(t){return t.id!==e});n.setState({counters:t})},console.log("App- Constructor"),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}},{key:"render",value:function(){return console.log("App - Rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null,o.a.createElement(v,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),o.a.createElement("main",{className:"container"},o.a.createElement(f,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(33);c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.c78b0245.chunk.js.map