(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function k(){}function Q(t){return t()}function K(){return Object.create(null)}function x(t){t.forEach(Q)}function tt(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function V(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function it(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function st(t,e,r){t.insertBefore(e,r||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function rt(t){return document.createTextNode(t)}function f(){return rt(" ")}function X(t,e,r,i){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r,i)}function $(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function at(t){return Array.from(t.childNodes)}function dt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e,r,i){r===null?t.style.removeProperty(e):t.style.setProperty(e,r,i?"important":"")}let j;function v(t){j=t}const w=[],Y=[],L=[],Z=[],ct=Promise.resolve();let z=!1;function lt(){z||(z=!0,ct.then(ot))}function R(t){L.push(t)}const G=new Set;let S=0;function ot(){const t=j;do{for(;S<w.length;){const e=w[S];S++,v(e),ut(e.$$)}for(v(null),w.length=0,S=0;Y.length;)Y.pop()();for(let e=0;e<L.length;e+=1){const r=L[e];G.has(r)||(G.add(r),r())}L.length=0}while(w.length);for(;Z.length;)Z.pop()();z=!1,G.clear(),v(t)}function ut(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const ft=new Set;function ht(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function mt(t,e,r,i){const{fragment:o,after_update:n}=t.$$;o&&o.m(e,r),i||R(()=>{const d=t.$$.on_mount.map(Q).filter(tt);t.$$.on_destroy?t.$$.on_destroy.push(...d):x(d),t.$$.on_mount=[]}),n.forEach(R)}function gt(t,e){const r=t.$$;r.fragment!==null&&(x(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(w.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,r,i,o,n,d,m=[-1]){const l=j;v(t);const s=t.$$={fragment:null,ctx:[],props:n,update:k,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:m,skip_bound:!1,root:e.target||l.$$.root};d&&d(s.root);let g=!1;if(s.ctx=r?r(t,e.props||{},(u,p,..._)=>{const b=_.length?_[0]:p;return s.ctx&&o(s.ctx[u],s.ctx[u]=b)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](b),g&&pt(t,u)),p}):[],s.update(),g=!0,x(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const u=at(e.target);s.fragment&&s.fragment.l(u),u.forEach(et)}else s.fragment&&s.fragment.c();e.intro&&ht(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),ot()}v(l)}class yt{$destroy(){gt(this,1),this.$destroy=k}$on(e,r){if(!tt(r))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(r),()=>{const o=i.indexOf(r);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=["logo.svg","bitter!mc.svg","nico.png","io.png","egg.svg","frog.png","router.png","sorter.png","junction.png","crow.svg","face_holding_back_tears.svg"],H=["hi","hello","hello there","kamusta","bye","goodbye","oyasumi","die","death","piracy","fun","crybaby","macintosh","mcdonalds","AAAAAAAAAAAAAAAAAAAAAAA","router","router chains","sorter","sorter chains","overflow","overflow chains","macimas","macdowntwo","mac","desktopone","desktop","beryllium","baseduser","ilya256","ilya","deltanedas","deltanudes","zestylemonade","zesty","skybldev","iczero","qmelzthevoid","qmelz","ifritdiezel","ifrit","ado1928","ado","oh no","ohno","ono","im gay","eat pant","professional idiot","you have beautiful eyes \u{1F440}","brother, i hurt people","controversial statement","\u30B4\u30FC\u30B0\u30EB\u7FFB\u8A33","mac and cheese","macimas and cheese","macimas and cheese dries","macimas and cheese leave ;-;","the first m in macimas stands for masochist","the first a in macimas stands for arrogance","the c in macimas stands for crybaby","the i in macimas stands for ignorance","the second m in macimas stands for messily","the second a in macimas stands for asshole","the s in macimas stands for stupid","also check out adocubes.tk!","also check out skybldev.eu.org!","also check out hyxud.cf!","also check out macimas.github.io!","also check out ado1928.github.io!","eat mosquito"];function _t(t){let e,r,i,o,n,d,m,l,s=H[t[1]]+"",g,u,p,_,b,I,T,N,C,q,D,F,E,U,O,P,W;return{c(){e=c("main"),r=c("span"),i=f(),o=c("mdt-macimas"),n=c("img"),m=f(),l=c("code"),g=rt(s),u=f(),p=c("mdt-socials"),p.innerHTML=`<a coloronhover="#aaa" href="https://discord.gg/8V3ch7M"><img src="/icon/discord.svg"/></a> 
			<a href="https://github.com/macimas"><img src="/icon/github.svg"/></a> 
			<a href="https://www.youtube.com/@mdt2"><img src="/icon/youtube.svg"/></a> 
			<a href="https://twitter.com/macdowntwo"><img src="/icon/twitter.svg"/></a> 
			<a href="https://www.reddit.com/user/ZkyLB/"><img src="/icon/reddit.svg"/></a> 
			<a href="https://onlyfans.com/mdtwo"><img src="/icon/onlyfans.svg"/></a>`,_=f(),b=c("b-x"),b.innerHTML=`<h1>\u{1F1EB}\u{1F1F7} what am i</h1> 
		<p>am a 16 introverted boy in the philippines \u{1F1F5}\u{1F1ED} who does random shit</p>`,I=f(),T=c("b-x"),T.innerHTML=`<h1>\u2753 what i do</h1> 
		<p>1. i play minecraft<br/>
			2. i design ui, logos, and stuff<br/>
			3. i sometimes do javascript<br/>
			4. i pirate games and other stuff (don\u2019t tell anyone)</p>`,N=f(),C=c("b-x"),C.innerHTML=`<h1>\u2699\uFE0F projects i do/helped with</h1> 
		<table><tr><td>adocubes</td> 
				<td><a href="http://adocubes.tk">adocubes.tk</a><br/> 
					<a href="https://github.com/ado1928/ado-cubes">github repo</a></td> 
				<td>contributed mostly to front-end, back-end a bit</td></tr> 
			<tr><td>smiley face game</td> 
				<td><a href="https://dev-smiley-face-game.sirjosh3917.com">game link</a><br/> 
					<a href="https://sfg.fandom.com/wiki/SFG_Wiki">wiki link</a></td> 
				<td>provided sprites for signs, creator of wiki</td></tr> 
			<tr><td>bitter!mc</td> 
				<td><a href="https://bittermc.github.io">bittermc.github.io</a></td> 
				<td>a dead minecraft server</td></tr> 
			<tr><td>this website</td> 
				<td><a href="https://macimas.github.io">macimas.github.io</a></td> 
				<td>recurssion</td></tr></table>`,q=f(),D=c("b-x"),D.innerHTML=`<h1>\u{1F4BB} i own two laptops \u{1F4BB}</h1> 
		<p>yes<br/>here are their specs</p> 
		<div style="display:flex;align-items:flex-start;flex-direction:row;margin:16px 0"><table><tr><td></td> 
					<td><b>main</b></td></tr> 
				<tr><td>Model</td> 
					<td><a href="https://www.lenovo.com/in/en/inpartsales/laptops/lenovo/g-series/g500/">Lenovo G500</a></td></tr> 
				<tr><td>CPU</td> 
					<td>Intel Core i7-3540M</td></tr> 
				<tr><td>GPU</td> 
					<td>Intel HD Graphics 4000</td></tr> 
				<tr><td>RAM</td> 
					<td>2 \xD7 4GB DDR3 1333MHz<br/> 
						<a href="https://www.amazon.com/Hynix-PC3-10600-DDR3-1333MHz-HMT351S6CFR8C-H9/dp/B00A802OYM">Hynix HMT351S6CFR8C-H9</a></td></tr> 
				<tr><td>Storage</td> 
					<td>256 GB<br/><a href="https://www.ramsta.com/p/25-Inch-ssd-256GB.html">Ramsta S800 SATA SSD</a></td></tr> 
				<tr><td>OS</td> 
					<td>EndeavourOS</td></tr></table> 
			<table><tr><td></td> 
					<td><b>secondary</b></td></tr> 
				<tr><td>Model</td> 
					<td><a href="https://dynabook.com/direct/pc-static/before2016/pc1/catalog/2012/r732g/spec.html">dynabook R732/g</a></td></tr> 
				<tr><td>CPU</td> 
					<td>Intel Core i3-3110M</td></tr> 
				<tr><td>GPU</td> 
					<td>Intel HD Graphics 4000</td></tr> 
				<tr><td>RAM</td> 
					<td>2 \xD7 2 GB<br/>
					Crucial(?)</td></tr> 
				<tr><td>Storage</td> 
					<td>160 GB<br/>Samsung(?) SATA HDD</td></tr> 
				<tr><td>OS</td> 
					<td>EndeavourOS<br/>Windows 8.1 (pirated)</td></tr></table></div> 
		<p>impressive, ain&#39;t they??</p>`,F=f(),E=c("b-x"),E.innerHTML=`<h1>\u{1F3F4}\u200D\u2620\uFE0F stuff i pirated (don&#39;t kil me pls)</h1> 
		<p>i have like <a href="https://www.xe.com/currencyconverter/convert/?Amount=2600&amp;From=PHP&amp;To=USD">\u20B12600</a> that i can&#39;t even use to buy stuff online. i don&#39;t want to anyways, for now
		</p><table style="margin-top:16px"><tr><td>Minecraft</td> 
				<td>infinite cube game. 10/10 would buy an mc account, but it&#39;s a bit too expensive, even if i can spend money</td> 
				<td>not bought</td></tr> 
			<tr><td>WorldBox</td> 
				<td>very cool god game. 10/10 would buy someday</td> 
				<td>not bought</td></tr> 
			<tr><td>Mutilate-a-Doll 2</td> 
				<td>besides killing a lot of dolls, i like making environments with it. 10/10 would buy</td> 
				<td>not bought</td> 
			</tr><tr><td>Terraria</td> 
				<td>2d minecraft. 9/10 probably won&#39;t buy it nor play it again for a few years, but fun</td> 
				<td>not bought</td></tr></table>`,U=f(),O=c("footer"),O.innerHTML='<code>made with <a href="https://svelte.dev">Svelte</a>  <img src="/icon/svelte.svg"/></code>',$(r,"id","currentLogoDisplay"),h(r,"position","absolute"),h(r,"top","32px"),h(r,"left","50%"),h(r,"transform","translateX(-50%)"),$(n,"class","logo"),V(n.src,d=t[0])||$(n,"src",d),h(n,"height","96px"),h(l,"user-select","none"),h(l,"line-height","18px")},m(y,A){st(y,e,A),a(e,r),a(e,i),a(e,o),a(o,n),a(o,m),a(o,l),a(l,g),a(o,u),a(o,p),a(e,_),a(e,b),a(e,I),a(e,T),a(e,N),a(e,C),a(e,q),a(e,D),a(e,F),a(e,E),a(e,U),a(e,O),P||(W=[X(n,"click",t[2]),X(l,"click",t[3])],P=!0)},p(y,[A]){A&1&&!V(n.src,d=y[0])&&$(n,"src",d),A&2&&s!==(s=H[y[1]]+"")&&dt(g,s)},i:k,o:k,d(y){y&&et(e),P=!1,x(W)}}}function B(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}function wt(t,e,r){let i=0,o="/logo/logo.svg",n=B(0,H.length);function d(){switch(i++,currentLogoDisplay.innerHTML=i,i){case 69:r(0,o="/logo/nice.svg");break;case 727:r(0,o="/logo/eyes.svg");break;case 1928:r(0,o="/logo/cube.svg");break;default:r(0,o="/logo/"+J[B(0,J.length)])}}function m(){r(1,n=B(0,H.length))}return[o,n,d,m]}class vt extends yt{constructor(e){super(),bt(this,e,wt,_t,nt,{})}}new vt({target:document.getElementById("app")});
