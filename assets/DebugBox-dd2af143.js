import{S as X,i as ee,s as te,M as K,z as le,o as z,b as m,a as u,t as x,c as C,p as L,d as _,f as r,l as R,m as se,q as S,v as D,g as p,x as E,r as ne,e as w,A as J,n as M,h as A,y as U}from"./index-b05c957d.js";import{s as v}from"./splash texts-ece4ff4b.js";const Q=["macimas.svg","mac.svg","macdowntwo.svg","mdt.svg","macimas archive.svg","mac!.svg","zzz.svg","macimas old 2.svg","macimas weird font old.svg","macimas old.svg","md2.svg","macdowntwo old.svg","macdowntwo thorium.svg","ZkyLB.png","nico.png","nico megumin.png","nico old.png","nico old aye.png","loading logo.png","404.svg","io.png","qmelz.png","yusof.svg","frog.png","organizer.svg","bitter!mc.svg","apple.mac.svg","ifrit stick.png","ifrit stick old.png","router.png","sorter.png","junction.png","egg.svg","crow.svg","face_holding_back_tears.svg","ALWAYS BE POSITIVE AND LOOK AT THE BRIGHT SIDE OF LIFE.jpg","OLDUCT - みずたま feat. 歌愛ユキ ̶&̶ ̶初̶音̶ミ̶ク̶.png"];function V(i,l,o){const e=i.slice();return e[3]=l[o],e}function W(i,l,o){const e=i.slice();return e[6]=l[o],e[8]=o,e}function oe(i,l,o){const e=i.slice();return e[9]=l[o],e}function ae(i){let l,o,e,a,s,t;return{c(){l=u("div"),l.innerHTML=`<img src="/img/logo/${i[9]}"/>`,o=m(),e=u("div"),a=u("p"),s=u("code"),s.textContent=`${i[9]}`,t=m(),C(l,"class","logo clickity"),C(e,"class","splash-text clickity")},m(n,c){_(n,l,c),_(n,o,c),_(n,e,c),r(e,a),r(a,s),r(e,t)},p:M,d(n){n&&(p(l),p(o),p(e))}}}function ce(i){let l,o,e,a=w(Q),s=[];for(let t=0;t<a.length;t+=1)s[t]=ae(oe(i,a,t));return{c(){l=u("h2"),l.textContent="logos",o=m();for(let t=0;t<s.length;t+=1)s[t].c();e=J()},m(t,n){_(t,l,n),_(t,o,n);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(t,n);_(t,e,n)},p:M,d(t){t&&(p(l),p(o),p(e)),A(s,t)}}}function Y(i){let l,o,e,a,s,t=i[6]+"";return{c(){l=u("div"),o=u("sub"),o.textContent=`${i[8]+1}.`,e=m(),a=u("p"),s=u("code"),C(l,"class","splash-text clickity")},m(n,c){_(n,l,c),r(l,o),r(l,e),r(l,a),r(a,s),s.innerHTML=t},p:M,d(n){n&&p(l)}}}function Z(i){let l,o,e,a,s,t=w(v[i[3]]),n=[];for(let c=0;c<t.length;c+=1)n[c]=Y(W(i,t,c));return{c(){l=u("details"),o=u("summary"),e=u("h2"),e.textContent=`${i[3]}`,a=m();for(let c=0;c<n.length;c+=1)n[c].c();s=m(),l.open=!0},m(c,h){_(c,l,h),r(l,o),r(o,e),r(l,a);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(l,null);r(l,s)},p(c,h){if(h&0){t=w(v[c[3]]);let f;for(f=0;f<t.length;f+=1){const b=W(c,t,f);n[f]?n[f].p(b,h):(n[f]=Y(b),n[f].c(),n[f].m(l,s))}for(;f<n.length;f+=1)n[f].d(1);n.length=t.length}},d(c){c&&p(l),A(n,c)}}}function ie(i){let l,o=w(Object.keys(v)),e=[];for(let a=0;a<o.length;a+=1)e[a]=Z(V(i,o,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=J()},m(a,s){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(a,s);_(a,l,s)},p(a,s){if(s&0){o=w(Object.keys(v));let t;for(t=0;t<o.length;t+=1){const n=V(a,o,t);e[t]?e[t].p(n,s):(e[t]=Z(n),e[t].c(),e[t].m(l.parentNode,l))}for(;t<e.length;t+=1)e[t].d(1);e.length=o.length}},d(a){a&&p(l),A(e,a)}}}function re(i){let l,o,e,a,s,t,n,c,h,f=Q.length+"",b,B,T,I,H,y,q,O,F,$,k,j,N;return l=new K({props:{id:"logos",$$slots:{default:[ce]},$$scope:{ctx:i}}}),e=new K({props:{id:"splash-texts",$$slots:{default:[ie]},$$scope:{ctx:i}}}),$=new le({}),{c(){z(l.$$.fragment),o=m(),z(e.$$.fragment),a=m(),s=u("div"),t=u("h2"),t.textContent="🦀 the debug box 🦀",n=m(),c=u("p"),h=x(`hi hello you beautiful dawg, welcome to the debug box 🦀
		`),b=x(f),B=x(` logos
		`),T=x(i[0]),I=x(" splash texts"),H=m(),y=u("button"),y.textContent="show logos",q=m(),O=u("button"),O.textContent="show splash texts",F=m(),z($.$$.fragment),C(s,"class","box")},m(g,d){L(l,g,d),_(g,o,d),L(e,g,d),_(g,a,d),_(g,s,d),r(s,t),r(s,n),r(s,c),r(c,h),r(c,b),r(c,B),r(c,T),r(c,I),r(s,H),r(s,y),r(s,q),r(s,O),r(s,F),L($,s,null),k=!0,j||(N=[R(y,"click",i[1]),R(O,"click",i[2])],j=!0)},p(g,[d]){const P={};d&4096&&(P.$$scope={dirty:d,ctx:g}),l.$set(P);const G={};d&4096&&(G.$$scope={dirty:d,ctx:g}),e.$set(G),(!k||d&1)&&se(T,g[0])},i(g){k||(S(l.$$.fragment,g),S(e.$$.fragment,g),S($.$$.fragment,g),k=!0)},o(g){D(l.$$.fragment,g),D(e.$$.fragment,g),D($.$$.fragment,g),k=!1},d(g){g&&(p(o),p(a),p(s)),E(l,g),E(e,g),E($),j=!1,ne(N)}}}function ge(i,l,o){let e=0;return Object.keys(v).forEach(t=>{o(0,e+=v[t].length)}),[e,()=>U("logos").show(),()=>U("splash-texts").show()]}class fe extends X{constructor(l){super(),ee(this,l,ge,re,te,{})}}const _e=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{fe as D,_e as a,Q as l};
