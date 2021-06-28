(this["webpackJsonplarvaio-cloud-device-react-demo"]=this["webpackJsonplarvaio-cloud-device-react-demo"]||[]).push([[37],{57:function(t,i,o){"use strict";o.r(i),o.d(i,"lar_inner_range_area",(function(){return c}));var e=o(0),r=o.n(e),a=o(1),n=o(6),s=o(7),l=o(24),c=function(){function t(i){Object(n.a)(this,t),Object(l.i)(this,i),this.output=Object(l.d)(this,"output",7),this.request=Object(l.d)(this,"request",7),this.icon="security",this.color="primary",this.allowIndicationAutoColoring=!1,this.allowNodeAutoColoring=!0,this.log=!1,this.armed=!1,this.alarm=!1,this.loading=!0}return Object(s.a)(t,[{key:"error",value:function(){var t=Object(a.a)(r.a.mark((function t(i){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.node&&this.node.error(i),this.loading=!1;case 2:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}()},{key:"input",value:function(){var t=Object(a.a)(r.a.mark((function t(i){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i&&i.State&&(this.armed="Armed"===i.State,this.loading=!1);case 1:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var t=this.el.shadowRoot||this.el;this.node=t.querySelector("lar-node"),this.loading=!0,this.output.emit()}},{key:"armDisarm",value:function(){if(!1===this.loading)return this.loading=!0,this.output.emit({command:this.armed?"disarm":"arm"})}},{key:"render",value:function(){var t=this;return[Object(l.g)("lar-node",{value:this.armed?"area.armed":"area.disarmed",hideTitles:this.hideTitles,iconSmall:this.armed?"lock":"unlock",icon:this.icon,colorIconSmall:this.alarm&&!0===this.allowIndicationAutoColoring?"danger":this.colorIconSmall,color:this.alarm&&!0===this.allowNodeAutoColoring?"danger":this.color,supTitle:this.supTitle,mainTitle:this.mainTitle,subTitle:this.subTitle,colorModal:this.alarm&&!0===this.allowNodeAutoColoring?"danger":this.colorModal,colorInputs:this.colorInputs,log:this.log,loading:this.loading},Object(l.g)("lar-button",{onClick:function(){return t.armDisarm()},color:this.colorInputs||this.color},this.armed?[Object(l.g)("lar-icon",{icon:"unlock"}),Object(l.g)("lar-translate",{t:"area.disarm"})]:[Object(l.g)("lar-icon",{icon:"lock"}),Object(l.g)("lar-translate",{t:"area.arm"})]))]}},{key:"el",get:function(){return Object(l.f)(this)}}]),t}();c.style=""}}]);
//# sourceMappingURL=37.a8785c47.chunk.js.map