import{S as g,i as w,s as H,e as L,b as m,a as d,c as S,d as s,f as k,n as h,g as l,h as M}from"./index-b05c957d.js";import{s as T}from"./socials-05bb149f.js";function q(o,t,i){const a=o.slice();return a[0]=t[i],a}function D(o){let t;return{c(){t=d("a"),t.textContent=`${o[0].label}`,S(t,"href",o[0].url)},m(i,a){s(i,t,a)},p:h,d(i){i&&l(t)}}}function J(o){let t,i,a,c,v,y,b,_,u,x,f,C=L(T),r=[];for(let e=0;e<C.length;e+=1)r[e]=D(q(o,C,e));return{c(){t=m(),i=d("h1"),i.textContent="macimas.github.io",a=m(),c=d("nav"),v=d("b"),v.textContent="socials",y=m(),b=d("div");for(let e=0;e<r.length;e+=1)r[e].c();_=m(),u=d("main"),u.innerHTML='<p>hi! i&#39;m macimas. i&#39;m a terrible programmer that does JavaScript. i use arch, btw.</p> <p><i>site was made with <a href="https://svelte.dev">Svelte</a>. domain provided by github.io.</i></p>',x=m(),f=d("footer"),f.innerHTML='<nav><b>the fuck do i put here</b> <div></div> <b>seriously, idk</b></nav> <div id="footerend"></div>',document.title="mdt::home",S(i,"id","title")},m(e,n){s(e,t,n),s(e,i,n),s(e,a,n),s(e,c,n),k(c,v),k(c,y),k(c,b);for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(b,null);s(e,_,n),s(e,u,n),s(e,x,n),s(e,f,n)},p:h,i:h,o:h,d(e){e&&(l(t),l(i),l(a),l(c),l(_),l(u),l(x),l(f)),M(r,e)}}}class z extends g{constructor(t){super(),w(this,t,null,J,H,{})}}export{z as default};
