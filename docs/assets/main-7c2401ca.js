(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r=new SpeechSynthesisUtterance("What is thy bidding my master?"),c=speechSynthesis.getVoices();console.log(c);c.length==0&&setTimeout(()=>{const n=speechSynthesis.getVoices();console.log(n);const o=n.find(s=>s.name=="Google UK English Male");o&&(r.voice=o)},1);const d=c.find(n=>n.name=="Google UK English Male");d&&(r.voice=d);document.getElementById("speak")?.addEventListener("click",()=>speechSynthesis.speak(r));
