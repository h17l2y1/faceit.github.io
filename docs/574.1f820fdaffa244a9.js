"use strict";(self.webpackChunkfaceit=self.webpackChunkfaceit||[]).push([[574],{3068:(p,o,e)=>{e.d(o,{s:()=>g});var t=e(7983),d=e(1465);const v=["vega-flex-grow","vega-flex-shrink","vega-flex-grow-0","vega-flex-shrink-0","vega-flex-basis-0","v-flex-1","v-min-w-min","disabled","v-text-black","v-text-white","v-hidden","vega-loader-container-relative","vega-page-notification-fade-out"];function g(s,a){return t.F.isEnabled("VEGA_COMPONENT.SANITIZE_VEGA_COMPONENT")&&(function r(s,a){var i,l,n;const f=["hydrated"].concat((null===(l=null===(i=s.$attrs$)||void 0===i?void 0:i.class)||void 0===l?void 0:l.split(/\s+/).filter(Boolean))||[]),u=(null===(n=a.dataset.verifiedClasses)||void 0===n?void 0:n.split(" "))||[],b=new Set([...f,...u,...v]),_=Array.from(a.classList).filter(Boolean).filter(h=>{const C=h.replace(/(S|M|L|XL):/,"");return!b.has(C)}).filter(h=>!h.startsWith("ng-"));_.length&&d.L.error(`Found class(es) ${_} added to component:`,a," which is anti vega design pattern and we will forbid this behavior in the future release."," for more details, please refer to: https://heartland1.gitlab.io/vega/tiger/?path=/docs/other-best-practice--page"),"hydrated"!==f.join()&&(a.dataset.verifiedClasses=f.join(" "))}(s,a),function c(s){s.children&&Array.from(s.children).forEach(i=>{i.hasAttribute("data-shrink")&&d.L.error("Found attribute [data-shrink='0'] inside component:",s," which will be deprecated, please use classes of vega-flex-shrink, vega-flex-grow, vega-flex-shrink-0, vega-flex-grow-0, vega-flex-basis-0 instead.")})}(a)),s}},9574:(p,o,e)=>{e.r(o),e.d(o,{vega_badge:()=>l});var t=e(5934),d=e(3068),v=e(3538),g=e(4432),r=e(9377);e(7983),e(8579),e(7607);const l=class{constructor(n){(0,t.r)(this,n),this.currentBreakpoint=(0,r.g)(),this.bgColor="bg-accent6-tertiary",this.textColor="text-danger-link-visited",this.size="default",this.initResizeObserver=()=>{this.resizeObserver=new ResizeObserver(()=>{this.currentBreakpoint!==(0,r.g)()&&(this.currentBreakpoint=(0,r.g)())}),this.resizeObserver.observe(document.body)}}componentDidLoad(){this.initResizeObserver()}render(){const n=["vega-badge",(0,v.d)(this.bgColor,["dark"]),(0,v.j)(this.textColor,["dark"]),r.R.formatCustom(this.size)];return(0,d.s)((0,t.h)(t.H,null,(0,t.h)("div",{class:(0,g.a)(n)},this.text)),this.host)}get host(){return(0,t.g)(this)}};l.style="vega-badge {\n\t@apply v-inline-block;\n}\n\nvega-badge .vega-badge {\n\t@apply v-inline-flex v-items-center v-justify-center v-rounded-full v-box-border;\n\t@apply v-h-size-40 v-px-size-16 v-py-size-8 v-font-field-label-em;\n}\n\nvega-badge .vega-badge.default {\n\t@apply v-h-size-40 v-px-size-16 v-py-size-8 v-font-field-label-em v-min-w-size-40;\n}\n\nvega-badge .vega-badge.large {\n\t@apply v-h-size-64 v-px-size-24 v-py-size-16 v-font-h4 v-min-w-size-64;\n}\n\nvega-badge .vega-badge.small {\n\t@apply v-px-size-12 v-py-size-4 v-font-field-label-sm-em;\n\theight: 26px;\n\tmin-width: 26px;\n}\n"}}]);