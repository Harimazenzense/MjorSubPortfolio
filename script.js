const toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>toTop.classList.toggle('show',window.scrollY>400));
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'}));