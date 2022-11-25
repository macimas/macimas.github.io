(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function k(){}function Y(t){return t()}function K(){return Object.create(null)}function A(t){t.forEach(Y)}function tt(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function V(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function it(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function st(t,e,r){t.insertBefore(e,r||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function rt(t){return document.createTextNode(t)}function f(){return rt(" ")}function X(t,e,r,i){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r,i)}function P(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function at(t){return Array.from(t.childNodes)}function dt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e,r,i){r===null?t.style.removeProperty(e):t.style.setProperty(e,r,i?"important":"")}let j;function w(t){j=t}const v=[],Z=[],S=[],z=[],ct=Promise.resolve();let C=!1;function lt(){C||(C=!0,ct.then(nt))}function N(t){S.push(t)}const B=new Set;let M=0;function nt(){const t=j;do{for(;M<v.length;){const e=v[M];M++,w(e),ut(e.$$)}for(w(null),v.length=0,M=0;Z.length;)Z.pop()();for(let e=0;e<S.length;e+=1){const r=S[e];B.has(r)||(B.add(r),r())}S.length=0}while(v.length);for(;z.length;)z.pop()();C=!1,B.clear(),w(t)}function ut(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const ft=new Set;function ht(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function mt(t,e,r,i){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,r),i||N(()=>{const d=t.$$.on_mount.map(Y).filter(tt);t.$$.on_destroy?t.$$.on_destroy.push(...d):A(d),t.$$.on_mount=[]}),o.forEach(N)}function gt(t,e){const r=t.$$;r.fragment!==null&&(A(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(v.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,r,i,n,o,d,h=[-1]){const u=j;w(t);const s=t.$$={fragment:null,ctx:[],props:o,update:k,not_equal:n,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:K(),dirty:h,skip_bound:!1,root:e.target||u.$$.root};d&&d(s.root);let m=!1;if(s.ctx=r?r(t,e.props||{},(l,g,..._)=>{const p=_.length?_[0]:g;return s.ctx&&n(s.ctx[l],s.ctx[l]=p)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](p),m&&pt(t,l)),g}):[],s.update(),m=!0,A(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const l=at(e.target);s.fragment&&s.fragment.l(l),l.forEach(et)}else s.fragment&&s.fragment.c();e.intro&&ht(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),nt()}w(u)}class yt{$destroy(){gt(this,1),this.$destroy=k}$on(e,r){if(!tt(r))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=["logo.svg","bitter!mc.svg","egg.svg","io.png","frog.png","crow.svg","face_holding_back_tears.svg"],L=["h","hi","hello","hello there","kamusta","bye","goodbye","oyasumi","die","death","piracy","fun","crybaby","macintosh","mcdonalds","mac","AAAAAAAAAAAAAAAAAAAAAAA","router","router chains","sorter","sorter chains","overflow","overflow chains","desktopone","beryllium","ilya256","im gay","eat pant","professional idiot","mac and cheese","mac and cheese leave ;-;","you have beautiful eyes \u{1F440}","brother, i hurt people","i use arch btw. well technically i use endeavouros, which IS arch, but it IS NOT arch linux","also check out adocubes.tk!","also check out skybldev.eu.org!","also check out hyxud.cf!","also check out macimas.github.io!"];function _t(t){let e,r,i,n,o,d,h,u,s=L[t[1]]+"",m,l,g,_,p,D,T,R,E,U,O,q,H,W,G,I,F;return{c(){e=c("main"),r=c("span"),i=f(),n=c("mdt-macimas"),o=c("img"),h=f(),u=c("code"),m=rt(s),l=f(),g=c("mdt-socials"),g.innerHTML=`<a href="https://discord.gg/8V3ch7M"><img src="/icon/discord.svg"/></a> 
			<a href="https://github.com/macimas"><img src="/icon/github.svg"/></a> 
			<a href="https://www.youtube.com/@mdt2"><img src="/icon/youtube.svg"/></a> 
			<a href="https://twitter.com/macdowntwo"><img src="/icon/twitter.svg"/></a> 
			<a href="https://www.reddit.com/user/ZkyLB/"><img src="/icon/reddit.svg"/></a> 
			<a href="https://onlyfans.com/mdtwo"><img src="/icon/onlyfans.svg"/></a>`,_=f(),p=c("b-x"),p.innerHTML=`<h1>\u{1F1EB}\u{1F1F7} what am i</h1> 
		<p>am a 16 introverted boy in the philippines \u{1F1F5}\u{1F1ED} who does random shit</p>`,D=f(),T=c("b-x"),T.innerHTML=`<h1>\u2753 what i do</h1> 
		<p>1. i play minecraft<br/>
			2. i design ui, logos, and stuff<br/>
			3. i sometimes do javascript<br/>
			4. i pirate games and other stuff (don\u2019t tell anyone)</p>`,R=f(),E=c("b-x"),E.innerHTML=`<h1>\u2699\uFE0F projects i do/helped with</h1> 
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
				<td>recurssion</td></tr></table>`,U=f(),O=c("b-x"),O.innerHTML=`<h1>\u{1F4BB} i own two laptops \u{1F4BB}</h1> 
		<p>yes<br/>here are their specs</p> 
		<div style="display:flex;flex-direction:row;margin:16px 0"><table><tr><td></td> 
					<td><b>main</b></td></tr> 
				<tr><td>Model</td> 
					<td>Lenovo G500</td></tr> 
				<tr><td>CPU</td> 
					<td>Intel Core i7-3540M</td></tr> 
				<tr><td>GPU</td> 
					<td>Intel HD Graphics 4000</td></tr> 
				<tr><td>RAM</td> 
					<td>7.7 GiB crucial(?)</td></tr> 
				<tr><td>Storage</td> 
					<td>238.4 GiB<br/>Ramsta S800 SATA SSD</td></tr> 
				<tr><td>OS</td> 
					<td>EndeavourOS</td></tr></table> 
			<table><tr><td></td> 
					<td><b>secondary</b></td></tr> 
				<tr><td>Model</td> 
					<td>dynabook R732/g</td></tr> 
				<tr><td>CPU</td> 
					<td>Intel Core i3-3110M</td></tr> 
				<tr><td>GPU</td> 
					<td>Intel HD Graphics 4000</td></tr> 
				<tr><td>RAM</td> 
					<td>3.6 GiB</td></tr> 
				<tr><td>Storage</td> 
					<td>149 GiB<br/>Samsung(?) SATA HDD</td></tr> 
				<tr><td>OS</td> 
					<td>EndeavourOS<br/>Windows 8.1 (pirated)</td></tr></table></div> 
		<p>impressive, ain&#39;t they??</p>`,q=f(),H=c("b-x"),H.innerHTML=`<h1>\u{1F3F4}\u200D\u2620\uFE0F stuff i&#39;ve pirated (don&#39;t kil pls)</h1> 
		<table><tr><td>Minecraft</td> 
				<td>10/10 infinite cube game. would buy an mc account, but no money</td></tr> 
			<tr><td>WorldBox</td> 
				<td>very cool god game. 10/10 would buy someday</td></tr> 
			<tr><td>Terraria</td> 
				<td>2d minecraft. probably won&#39;t buy it nor play it again for a few years, but fun. 9/10</td></tr></table>`,W=f(),G=c("footer"),G.innerHTML='<code>made with <a href="https://svelte.dev">Svelte</a>  <img src="/icon/svelte.svg"/></code>',P(r,"id","currentLogoDisplay"),y(r,"position","absolute"),y(r,"top","32px"),y(r,"left","50%"),y(r,"transform","translateX(-50%)"),V(o.src,d=t[0])||P(o,"src",d),y(o,"height","96px"),y(u,"user-select","none")},m(b,x){st(b,e,x),a(e,r),a(e,i),a(e,n),a(n,o),a(n,h),a(n,u),a(u,m),a(n,l),a(n,g),a(e,_),a(e,p),a(e,D),a(e,T),a(e,R),a(e,E),a(e,U),a(e,O),a(e,q),a(e,H),a(e,W),a(e,G),I||(F=[X(o,"click",t[2]),X(u,"click",t[3])],I=!0)},p(b,[x]){x&1&&!V(o.src,d=b[0])&&P(o,"src",d),x&2&&s!==(s=L[b[1]]+"")&&dt(m,s)},i:k,o:k,d(b){b&&et(e),I=!1,A(F)}}}function Q(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}function vt(t,e,r){let i=0,n="/logo/logo.svg",o=Q(0,L.length);function d(){switch(i++,currentLogoDisplay.innerHTML=i,i){case 69:r(0,n="/logo/nice.svg");break;case 727:r(0,n="/logo/eyes.svg");break;default:r(0,n="/logo/"+J[i%J.length])}}function h(){r(1,o=Q(0,L.length))}return[n,o,d,h]}class wt extends yt{constructor(e){super(),bt(this,e,vt,_t,ot,{})}}new wt({target:document.getElementById("app")});
