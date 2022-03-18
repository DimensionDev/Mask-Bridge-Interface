var M=Object.defineProperty,I=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&b(e,n,t[n]);if(C)for(var n of C(t))D.call(t,n)&&b(e,n,t[n]);return e},L=(e,t)=>I(e,F(t));var x=(e,t,n)=>(b(e,typeof t!="symbol"?t+"":t,n),n);import{e as m,f as R,g as y,t as g,o as c,h as l,p as w,i as k,j as a,k as z,F as $,l as E,m as N,n as U,q as O,s as H,r as f,u as p}from"./vendor.69dfeeb3.js";import{_ as u}from"./index.390a9030.js";var V={name:"",setup(){console.log("1-\u5F00\u59CB\u521B\u5EFA\u7EC4\u4EF6-setup");const e=m({});R(()=>{console.log("2.\u7EC4\u4EF6\u6302\u8F7D\u9875\u9762\u4E4B\u524D\u6267\u884C----onBeforeMount")}),y(()=>{console.log("3.-\u7EC4\u4EF6\u6302\u8F7D\u5230\u9875\u9762\u4E4B\u540E\u6267\u884C-------onMounted")});const t=g(e);return d({},t)}},j="/assets/logo.72572117.png";const J=e=>(w("data-v-4640ee70"),e=e(),k(),e),Y={class:"header_box"},W=J(()=>a("img",{class:"logo",src:j,alt:""},null,-1)),Z=[W];function q(e,t){return c(),l("div",Y,Z)}var X=u(V,[["render",q],["__scopeId","data-v-4640ee70"]]),G="/assets/btn_bg.d574e1cf.png",K="/assets/hero_img.a9566103.png";const Q={name:"hero",setup(){const e=m({});R(()=>{}),y(()=>{});const t=g(e);return d({},t)}},ee={class:"hero_box"},te=z('<div class="left" data-v-7523f5cf><div class="title_xs" data-v-7523f5cf>Bridge your Mask Token</div><div class="title_md_box" data-v-7523f5cf><div class="title_md" data-v-7523f5cf>CROSS-CHAIN</div><div class="title_bg" data-v-7523f5cf><img src="'+G+'" alt="" data-v-7523f5cf><div class="text" data-v-7523f5cf>BRIDGES</div></div></div><div class="title_sub" data-v-7523f5cf>Using services provided below</div></div><div class="right" data-v-7523f5cf><img class="right_img" src="'+K+'" alt="" data-v-7523f5cf></div>',2),ne=[te];function oe(e,t,n,o,s,i){return c(),l("div",ee,ne)}var se=u(Q,[["render",oe],["__scopeId","data-v-7523f5cf"]]),ie="/assets/item0_arrow.ce5eef5a.svg",ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAeCAYAAAC8AUekAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgB1ZhBSsNAFIb/l9SF0thsXEhBPEqP4A1KXEh1oeIJ9AbVTbuyeAHxBuJJCioIbirahV04z/cKQglSMpPFm3xkSOYNCd8fZsgQoMEQDMjPZwAjby9aZ9Lt/RBfv422H+BJAgOy75SyRTqUy0tpvZTpfu943ocnJvIg0tZZrTjmiW8AE3lmORg3pbJ3ABP513EmU54fpR2WhrwCmCzYP7qDTz0VBLotDXFCVDyP2nfr7jeVV+oEMJdXQgNEIa+EBIhGXvENEJW84hMgOnmlaoAo5ZUqAUg/CM7xUGLkaA7LANQdzKcE3kfTYMwSYu6ggRDxR8LEF/Lmp9Ascbb/kHpyFeWC3Tl5xyZvkRj2Zfs5KQ2zLOLiZSwLFpFRVVw7Ucn7iCvRyPuKK1HIh4gr5vKh4oqpfB1xxUy+rriSwoDdI8YGsf7/CBZXWjCA0i844CBhBIsrJvKyJ9Hpeloqe4kvnwMTnEx197RS8BZXfgEnOg508JRiJAAAAABJRU5ErkJggg==";const re={name:"main",setup(){const e=m({mainItems:[{key:0,icon:new URL("/assets/item0.4b68a75d.svg",self.location),des:"To bridge between ETH and Polygon Chain, click to go to Polygon Bridge.",link:"https://wallet.polygon.technology/"},{key:1,icon:new URL("/assets/item1.21354a53.svg",self.location),des:"To bridge between ETH, BNB Chain, Polygon, Avalanche, etc., click to go to cBridge.",link:"https://cbridge.celer.network/"}]});R(()=>{}),y(()=>{});const t=g(e);return d({},t)}},S=e=>(w("data-v-7a141847"),e=e(),k(),e),ce={class:"main_box"},le=S(()=>a("div",{class:"title"},"Cross-chain services",-1)),de={class:"main_ctx"},_e=["href"],ue={class:"inner"},ve=["src"],fe={class:"ctx"},pe={key:0,class:"ctx_title"},he=U(" ETH "),me=S(()=>a("img",{class:"arrow",src:ie,alt:""},null,-1)),ge=U(" Polygon "),xe=[he,me,ge],ye={key:1,class:"ctx_title"},we={class:"ctx_des"},ke=S(()=>a("div",{class:"ctx_arrow"},[a("img",{src:ae,alt:""})],-1));function Ae(e,t,n,o,s,i){return c(),l("div",ce,[le,a("div",de,[(c(!0),l($,null,E(e.mainItems,r=>(c(),l("a",{class:"item",key:r.key,href:r.link,target:"_blank"},[a("div",ue,[a("img",{class:"chain_icon",src:r.icon,alt:""},null,8,ve),a("div",fe,[r.key==0?(c(),l("div",pe,xe)):(c(),l("div",ye,"cBridge Multichain Services")),a("div",we,N(r.des),1),ke])])],8,_e))),128))])])}var be=u(re,[["render",Ae],["__scopeId","data-v-7a141847"]]),Re={name:"exchange",setup(){const e=m({map:[{key:0,icon:new URL("/assets/biance.31550523.svg",self.location),link:"https://www.binance.com/"},{key:1,icon:new URL("/assets/huobi.b2143215.svg",self.location),link:"https://www.huobi.com/"},{key:2,icon:new URL("/assets/okx.398f32aa.svg",self.location),link:"https://www.okx.com/"},{key:3,icon:new URL("/assets/upbit.f5131769.svg",self.location),link:"https://upbit.com/"},{key:4,icon:new URL("/assets/coinbase.61fed1f7.svg",self.location),link:"https://www.coinbase.com/"},{key:5,icon:new URL("/assets/kucoin.39b74701.svg",self.location),link:"https://www.kucoin.com/"},{key:6,icon:new URL("/assets/gate.21605ae5.svg",self.location),link:"https://www.gate.io/"}]}),t=g(e);return d({},t)}};const $e=e=>(w("data-v-294fda44"),e=e(),k(),e),Ee={class:"ex_box"},Se=$e(()=>a("div",{class:"title"},"Exchanges",-1)),Ce={class:"ex_items"},Le=["href"],Be=["src"];function Ue(e,t){return c(),l("div",Ee,[Se,a("div",Ce,[(c(!0),l($,null,E(e.map,n=>(c(),l("a",{class:"item",key:n.key,href:n.link,target:"_blank"},[a("img",{src:n.icon},null,8,Be)],8,Le))),128))])])}var Te=u(Re,[["render",Ue],["__scopeId","data-v-294fda44"]]);const Me={name:"footer",setup(){const e=m({socialMediaBox:[{key:0,icon:new URL("/assets/twitter.c3b9bb64.svg",self.location),link:"https://twitter.com/realMaskNetwork"},{key:1,icon:new URL("/assets/Telegram.757c6c04.svg",self.location),link:"https://t.me/maskbook_group#telegram"},{key:2,icon:new URL("/assets/Negative.3bad78ec.svg",self.location),link:"https://discord.com/invite/4SVXvj7"},{key:3,icon:new URL("/assets/facebook.fa3e5f2c.svg",self.location),link:"https://www.facebook.com/masknetwork"},{key:4,icon:new URL("/assets/reddit.03f1e47c.svg",self.location),link:"https://www.reddit.com/r/MaskNetwork/"},{key:5,icon:new URL("/assets/github.b68b3851.svg",self.location),link:"https://github.com/DimensionDev"},{key:6,icon:new URL("/assets/Youtube.94ec3b4f.svg",self.location),link:"https://www.youtube.com/c/MaskNetwork"},{key:7,icon:new URL("/assets/Medium.84d9f6bc.svg",self.location),link:""}]}),t=(o,s)=>{o.preventDefault(),s.link&&window.open(s.link,"_blank")},n=g(e);return L(d({},n),{handleClick:t})}},Ie=e=>(w("data-v-34c05bca"),e=e(),k(),e),Fe={class:"footer_box"},Pe=Ie(()=>a("div",{class:"left"},[a("div",{class:"up"},"\xA9 2022 Mask Network"),a("div",{class:"bottom"},"All Rights Reserved")],-1)),De={class:"right"},ze=["onClick"],Ne=["src"];function Oe(e,t,n,o,s,i){return c(),l("div",Fe,[Pe,a("div",De,[(c(!0),l($,null,E(e.socialMediaBox,r=>(c(),l("a",{class:"icon",key:r.key,onClick:_=>o.handleClick(_,r)},[a("img",{src:r.icon},null,8,Ne)],8,ze))),128))])])}var He=u(Me,[["render",Oe],["__scopeId","data-v-34c05bca"]]);function Ve(){const e=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()+e()+e()}`}class je{constructor(t=!0){x(this,"on",t=>this.register(t));x(this,"off",t=>this.deregister(t));x(this,"onTick",()=>{this.raf=window.requestAnimationFrame(this.onTick),this.updateTime(),this.propogate()});this.state=d({},this.defaults),this.stack=[],t&&this.start()}get defaults(){return{isRunning:!1,time:{elapsed:0,delta:0,prev:0,stamp:Date.now()}}}get time(){return d({},this.state.time)}start(){if(this.state.isRunning){console.error("TickManager.js: instance was already running!");return}this.state.isRunning=!0,this.addEvents()}stop(){this.state.isRunning=!1,this.removeEvents()}register(t,n){const o=n!==void 0?n:Ve();return this.stack[o]=t,o}deregister(t){delete this.stack[t]}addEvents(){this.raf=window.requestAnimationFrame(this.onTick)}removeEvents(){window.cancelAnimationFrame(this.raf)}updateTime(){const t=performance.now();this.state.time.elapsed=t,this.state.time.delta=t-this.state.time.prev,this.state.time.prev=t,this.state.time.stamp=Date.now()}propogate(){const{delta:t,elapsed:n,stamp:o}=this.state.time,s=Object.keys(this.stack);for(let i=0,r=s.length;i<r;i++)this.stack[s[i]](t,n,o)}}const Je=`
  attribute vec4 a_position;
  varying vec2 v_pos;

  void main() {
    gl_Position = a_position;
    v_pos = a_position.xy;
  }
`,Ye=`
  precision mediump float;

  uniform float u_time;
  varying vec2 v_pos;

  void main() {
    gl_FragColor = vec4( sin( u_time * 0.001 ) * 0.5 + 0.5, v_pos.x * 0.5 + 0.5, v_pos.y * 0.5 + 0.5, 1.0 );
  }
`;function B(e,t,n){const o=e.createShader(t);if(e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))return o;console.log(`Shader error: Type - ${t} 
 --- 
`,e.getShaderInfoLog(o)),e.deleteShader(o)}function We(e,t,n){const o=e.createProgram();if(e.attachShader(o,t),e.attachShader(o,n),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS))return o;console.log(`Program error: 
 --- 
`,e.getProgramInfoLog(o)),e.deleteProgram(o)}function Ze(e,t){const{type:n,location:o,value:s}=t;switch(n){case"bool":e.uniform1i(o,s===!0?1:0);break;case"int":e.uniform1i(o,s);break;case"float":e.uniform1f(o,s);break;case"vec2":e.uniform2f(o,s.x,s.y);break;case"vec3":e.uniform3f(o,s.x,s.y,s.z);break;case"vec4":e.uniform4f(o,s.x,s.y,s.z,s.w);break}}class qe{constructor(t,n=Je,o=Ye,s={}){const i=t.getContext("webgl");this.gl=i;const r=B(i,i.VERTEX_SHADER,n),_=B(i,i.FRAGMENT_SHADER,o),v=this.program=We(i,r,_);this.positionAttributeLocation=i.getAttribLocation(v,"a_position"),this.uniforms={u_time:{location:i.getUniformLocation(v,"u_time"),value:0,type:"float"},u_resolution:{location:i.getUniformLocation(v,"u_resolution"),value:{x:0,y:0},type:"vec2"}},Object.keys(s).forEach(h=>{this.uniforms[h]=Object.assign({},s[h],{location:i.getUniformLocation(v,h)})}),this.positionBuffer=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer);const A=[-1,-1,-1,3,3,-1];i.bufferData(i.ARRAY_BUFFER,new Float32Array(A),i.STATIC_DRAW),this.resize(),this.render()}resize(t=window.innerWidth,n=window.innerHeight){this.gl.canvas.width=t,this.gl.canvas.height=n,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.updateUniforms({u_resolution:{x:t,y:n}})}updateUniforms(t){Object.keys(t).forEach(n=>{this.uniforms[n].value=t[n]})}render(t){const{gl:n}=this;this.updateUniforms({u_time:3e4+t}),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(this.program),n.enableVertexAttribArray(this.positionAttributeLocation),n.bindBuffer(n.ARRAY_BUFFER,this.positionBuffer),n.vertexAttribPointer(this.positionAttributeLocation,2,n.FLOAT,!1,0,0),Object.keys(this.uniforms).forEach(r=>{const _=this.uniforms[r];Ze(n,_)});const o=n.TRIANGLES,s=0,i=3;n.drawArrays(o,s,i)}}var Xe=`#define GLSLIFY 1
attribute vec4 a_position;

varying vec2 v_pos;

void main() {
  gl_Position = a_position;
  v_pos = a_position.xy;
}
`,Ge=`precision mediump float;
#define GLSLIFY 1

//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform float u_spread;
uniform float u_speed;
uniform float u_warp;
uniform float u_focus;
uniform float u_itensity;

varying vec2 v_pos;

float circle( in vec2 _pos, in vec2 _origin, in float _radius ) {

  float SPREAD = 0.7 * u_spread;
  float SPEED = 0.00055 * u_speed;
  float WARP = 1.5 * u_warp;
  float FOCUS = 1.15 * u_focus;

  vec2 dist = _pos - _origin;

  float distortion = snoise( vec2(
    _pos.x * 1.587 * WARP + u_time * SPEED * 0.5,
    _pos.y * 1.192 * WARP + u_time * SPEED * 0.3
  ) ) * 0.5 + 0.5;

  float feather = 0.01 + SPREAD * pow( distortion, FOCUS );

  return 1.0 - smoothstep(
    _radius - ( _radius * feather ),
    _radius + ( _radius * feather ),
    dot( dist, dist ) * 4.0
  );
}

void main() {

  vec3 green = vec3( 1.0 ) - vec3( 153.0 / 255.0, 211.0 / 255.0, 221.0 / 255.0 );
  vec3 purple = vec3( 1.0 ) - vec3( 195.0 / 255.0, 165.0 / 255.0, 242.0 / 255.0 );
  vec3 orange = vec3( 1.0 ) - vec3( 255.0 / 255.0, 156.0 / 255.0, 136.0 / 255.0 );

  float ratio = u_resolution.x / u_resolution.y;

  vec2 uv = vec2( v_pos.x, v_pos.y / ratio ) * 0.5 + 0.5;

  vec3 color = vec3( 0.0 );

  float greenMix = snoise( v_pos * 1.31 + u_time * 0.8 * 0.00017 ) * 0.5 + 0.5;
  float purpleMix = snoise( v_pos * 1.26 + u_time * 0.8 * -0.0001 ) * 0.5 + 0.5;
  float orangeMix = snoise( v_pos * 1.34 + u_time * 0.8 * 0.00015 ) * 0.5 + 0.5;

  float alphaOne = 0.35 + 0.65 * pow( snoise( vec2( u_time * 0.00012, uv.x ) ) * 0.5 + 0.5, 1.2 );
  float alphaTwo = 0.35 + 0.65 * pow( snoise( vec2( ( u_time + 1561.0 ) * 0.00014, uv.x ) ) * 0.5 + 0.5, 1.2 );
  float alphaThree = 0.35 + 0.65 * pow( snoise( vec2( ( u_time + 3917.0 ) * 0.00013, uv.x ) ) * 0.5 + 0.5, 1.2 );

  color += vec3( circle( uv, vec2( 0.22 + sin( u_time * 0.000201 ) * 0.06, 0.80 + cos( u_time * 0.000151 ) * 0.06 ), 0.15 ) ) * alphaOne * ( purple * purpleMix + orange * orangeMix );
  color += vec3( circle( uv, vec2( 0.90 + cos( u_time * 0.000166 ) * 0.06, 0.42 + sin( u_time * 0.000138 ) * 0.06 ), 0.18 ) ) * alphaTwo * ( green * greenMix + purple * purpleMix );
  color += vec3( circle( uv, vec2( 0.19 + sin( u_time * 0.000112 ) * 0.06, 0.25 + sin( u_time * 0.000192 ) * 0.06 ), 0.09 ) ) * alphaThree * ( orange * orangeMix );

  color *= u_itensity + 1.0 * pow( snoise( vec2( v_pos.y + u_time * 0.00013, v_pos.x + u_time * -0.00009 ) ) * 0.5 + 0.5, 2.0 );

  vec3 background = vec3( 0.9725490196078431 ); // #f8f8f8
  vec3 inverted = vec3( 1.0 ) - color;
  vec3 clamped = min( inverted, background );
  gl_FragColor = vec4( clamped, 1.0 );

}
`;const Ke={name:"canvas",setup(){const e=O(null);y(()=>{const n=typeof window!="undefined"?new je:null;if(!n)return;const o=new qe(e.value,Xe,Ge,{u_mouse:{type:"vec2",value:{x:0,y:0}},u_spread:{type:"float",value:1},u_speed:{type:"float",value:1},u_warp:{type:"float",value:1},u_focus:{type:"float",value:1},u_itensity:{type:"float",value:.5}});function s(i,r){o.render(r)}t(o),n.on(s),window.addEventListener("resize",()=>t(o))});const t=n=>{n.resize(document.documentElement.clientWidth,document.documentElement.clientHeight)};return H(()=>{window.removeEventListener("resize",t)}),{cRef:e}}},Qe={ref:"cRef",id:"flourishCanvas"};function et(e,t,n,o,s,i){return c(),l("canvas",Qe,null,512)}var tt=u(Ke,[["render",et]]);const nt={name:"layout",components:{BridgeHeader:X,Hero:se,Main:be,Exchange:Te,Footer:He,CanvasBg:tt}},ot={class:"box"},st={class:"container"},it={class:"layout"};function at(e,t,n,o,s,i){const r=f("CanvasBg"),_=f("BridgeHeader"),v=f("Hero"),A=f("Main"),h=f("Exchange"),T=f("Footer");return c(),l("div",ot,[p(r,{class:"cvx"}),a("div",st,[a("div",it,[p(_),p(v),p(A),p(h),p(T)])])])}var dt=u(nt,[["render",at],["__scopeId","data-v-a7a14004"]]);export{dt as default};
