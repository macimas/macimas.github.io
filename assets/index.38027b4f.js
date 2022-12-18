(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();function k(){}function ot(t){return t()}function X(){return Object.create(null)}function x(t){t.forEach(ot)}function nt(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Z(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function ct(t){return Object.keys(t).length===0}function s(t,e){t.appendChild(e)}function dt(t,e,o){t.insertBefore(e,o||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function it(t){return document.createTextNode(t)}function f(){return it(" ")}function j(t,e,o,r){return t.addEventListener(e,o,r),()=>t.removeEventListener(e,o,r)}function T(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function J(t,e,o){e in t?t[e]=typeof t[e]=="boolean"&&o===""?!0:o:T(t,e,o)}function lt(t){return Array.from(t.childNodes)}function ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,o,r){o===null?t.style.removeProperty(e):t.style.setProperty(e,o,r?"important":"")}let v;function w(t){v=t}function ft(){if(!v)throw new Error("Function called outside component initialization");return v}function ht(t){ft().$$.on_mount.push(t)}function mt(t,e){const o=t.$$.callbacks[e.type];o&&o.slice().forEach(r=>r.call(this,e))}const _=[],Q=[],H=[],tt=[],gt=Promise.resolve();let q=!1;function pt(){q||(q=!0,gt.then(at))}function I(t){H.push(t)}const B=new Set;let S=0;function at(){const t=v;do{for(;S<_.length;){const e=_[S];S++,w(e),bt(e.$$)}for(w(null),_.length=0,S=0;Q.length;)Q.pop()();for(let e=0;e<H.length;e+=1){const o=H[e];B.has(o)||(B.add(o),o())}H.length=0}while(_.length);for(;tt.length;)tt.pop()();q=!1,B.clear(),w(t)}function bt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const yt=new Set;function _t(t,e){t&&t.i&&(yt.delete(t),t.i(e))}function wt(t,e,o,r){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,o),r||I(()=>{const c=t.$$.on_mount.map(ot).filter(nt);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),a.forEach(I)}function kt(t,e){const o=t.$$;o.fragment!==null&&(x(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(_.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(t,e,o,r,n,a,c,h=[-1]){const u=v;w(t);const i=t.$$={fragment:null,ctx:[],props:a,update:k,not_equal:n,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:X(),dirty:h,skip_bound:!1,root:e.target||u.$$.root};c&&c(i.root);let m=!1;if(i.ctx=o?o(t,e.props||{},(l,g,...y)=>{const p=y.length?y[0]:g;return i.ctx&&n(i.ctx[l],i.ctx[l]=p)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](p),m&&vt(t,l)),g}):[],i.update(),m=!0,x(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const l=lt(e.target);i.fragment&&i.fragment.l(l),l.forEach(rt)}else i.fragment&&i.fragment.c();e.intro&&_t(t.$$.fragment),wt(t,e.target,e.anchor,e.customElement),at()}w(u)}class At{$destroy(){kt(this,1),this.$destroy=k}$on(e,o){if(!nt(o))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(o),()=>{const n=r.indexOf(o);n!==-1&&r.splice(n,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const et=["logo.svg","yusof.svg","bitter!mc.svg","nico.png","io.png","egg.svg","frog.png","router.png","sorter.png","junction.png","crow.svg","face_holding_back_tears.svg"],L=["hi","hai","hello","hello there","kamusta","konnichiwa","bye","bai","goodbye","see ya","paalam","sayonara","\u270C\uFE0F","\u{1F1EB}\u{1F1F7}","\u{1F499}\u{1F90D}\u2764\uFE0F","\u{1F499}\u{1F90D}\u{1FAC0}","\u{1F499}\u{1F90D}\u{1F494}","die","death","piracy","fun","crybaby","macintosh","mcdonalds","messily","colo(u)rs","quirky","watermelone","AAAAAAAAAAAAAAAAAAAAAAA","\xAF\\_(\u30C4)_/\xAF","bocchi the rock!","welcome to osu!","click the circles game","play more","see you next time.","everybody edits! :)","nobody edits :(","smiley face game! :)","install linux mint","install endeavouros","btw i use arch. jk i use endeavour","im gay","im stupid and you can't do anything about it","im not french","im from the philippines","eat pant","professional idiot","you have beautiful eyes \u{1F440}","controversial statement","\u30B4\u30FC\u30B0\u30EB\u7FFB\u8A33","mac and cheese","macimas and cheese","brother, i hurt people","i take things for granted","i cause suffering to those around me","i don't understand people","i probably dislike you","the first m in macimas stands for masochist","the first a in macimas stands for arrogant","the c in macimas stands for crybaby","the i in macimas stands for ignorant","the i in macimas can also stand for incompetent","the second m in macimas stands for messily","the second a in macimas stands for inconsistent","the s in macimas stands for stupid","oyasumi ooooyasumi close your eyes and","i see your vocabulary has improved!","yu zo ffuhkin kinda crzy","i kind of like codig and linux stuff","mindustry","Don't send messages without images in the #screenshots channel.","Only send valid schematics in the #schematics channel. You may send them either as clipboard text or as a schematic file.","anuke","anuken","router","router chains","sorter","sorter chains","overflow","overflow chains","oh no","ohno","ono","macimas","macdowntwo","mac","desktopone","desktop","baseduser","beryllium","ilya256","ilya","deltanedas","deltanudes","install debian","install void linux","zestylemonade","zesty","skybldev","iczero","qmelzthevoid","qmelz","macimas with the investment","ifritdiezel","ifrit","ado1928","ado","valtsu41","valtsu","valt","meltdown","macimas and cheese leave ;-;","macimas and cheese dries","eat mosquito","also check out adocubes.tk!","also check out skybldev.eu.org!","also check out hyxud.cf!","also check out macimas.github.io!","also check out ado1928.github.io!","also check out qmelz.deno.dev!","also check out yzffkindacrzy.github.io!"];function Mt(t){let e,o,r,n,a,c,h,u,i,m,l=L[t[1]]+"",g,y,p,F,C,N,z,U,E,W,O,Y,D,K,P,G,V;return{c(){e=d("main"),o=d("p"),r=f(),n=d("mdt-macimas"),a=d("mdt-logo"),c=d("img"),u=f(),i=d("splash-text"),m=d("code"),g=it(l),y=f(),p=d("mdt-socials"),p.innerHTML=`<a href="https://discord.gg/8V3ch7M"><img src="/icon/discord.svg"/></a> 
			<a href="https://github.com/macimas"><img src="/icon/github.svg"/></a> 
			<a href="https://www.youtube.com/@mdt2"><img src="/icon/youtube.svg"/></a> 
			<a href="https://twitter.com/macdowntwo"><img src="/icon/twitter.svg"/></a> 
			<a href="https://www.reddit.com/user/ZkyLB/"><img src="/icon/reddit.svg"/></a> 
			<a href="https://onlyfans.com/mdtwo"><img src="/icon/onlyfans.svg"/></a>`,F=f(),C=d("b-x"),C.innerHTML=`<h1>\u{1F1EB}\u{1F1F7} what am i</h1> 
		<p>am a 16 introverted boy in the philippines \u{1F1F5}\u{1F1ED} who does random shit</p>`,N=f(),z=d("b-x"),z.innerHTML=`<h1>\u2753 what i do</h1> 
		<p>1. i play minecraft<br/>
			2. i design ui, logos, and stuff<br/>
			3. i sometimes do javascript<br/>
			4. i pirate games and other stuff (don\u2019t tell anyone)</p>`,U=f(),E=d("b-x"),E.innerHTML=`<h1>\u2699\uFE0F projects i do/helped with</h1> 
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
				<td>recurssion</td></tr></table>`,W=f(),O=d("b-x"),O.innerHTML=`<h1>\u{1F4BB} i own two laptops \u{1F4BB}</h1> 
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
		<p>impressive, ain&#39;t they??</p>`,Y=f(),D=d("b-x"),D.innerHTML=`<h1>\u{1F3F4}\u200D\u2620\uFE0F stuff i pirated (don&#39;t kil me pls)</h1> 
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
				<td>not bought</td></tr></table>`,K=f(),P=d("footer"),P.innerHTML='<code>made with <a href="https://svelte.dev">Svelte</a>  <img src="/icon/svelte.svg"/></code>',T(o,"id","mdtCount"),$(o,"position","absolute"),$(o,"top","32px"),$(o,"left","50%"),$(o,"transform","translateX(-50%)"),Z(c.src,h=t[0])||T(c,"src",h),J(a,"class","clickMe"),J(i,"class","clickMe")},m(b,A){dt(b,e,A),s(e,o),s(e,r),s(e,n),s(n,a),s(a,c),s(n,u),s(n,i),s(i,m),s(m,g),s(n,y),s(n,p),s(e,F),s(e,C),s(e,N),s(e,z),s(e,U),s(e,E),s(e,W),s(e,O),s(e,Y),s(e,D),s(e,K),s(e,P),G||(V=[j(c,"load",t[4]),j(a,"click",t[2]),j(i,"click",t[3])],G=!0)},p(b,[A]){A&1&&!Z(c.src,h=b[0])&&T(c,"src",h),A&2&&l!==(l=L[b[1]]+"")&&ut(g,l)},i:k,o:k,d(b){b&&rt(e),G=!1,x(V)}}}function R(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}function $t(t,e,o){ht(()=>{navigator.userAgent.includes("Firefox")&&(mdtCount.innerText="this website in firefox may be jank. sorry idk how to fix")});let r=0,n="/logo/logo.svg";function a(){switch(o(0,n="/logo/loading logo.svg"),r++,mdtCount.innerText=r,r){case 69:o(0,n="/logo/nice.svg");break;case 727:o(0,n="/logo/eyes.svg");break;case 1928:o(0,n="/logo/cube.svg");break;default:o(0,n="/logo/"+et[R(0,et.length)])}}let c=R(0,L.length);function h(){o(1,c=R(0,L.length))}function u(i){mt.call(this,t,i)}return[n,c,a,h,u]}class St extends At{constructor(e){super(),xt(this,e,$t,Mt,st,{})}}new St({target:document.getElementById("app")});
