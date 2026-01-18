// anim.js - page transitions and simple link fade
document.documentElement.classList.add('page-enter');
window.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.classList.remove('page-enter');
  document.documentElement.classList.add('page-ready');
  // parallax class for body
  document.body.classList.add('parallax');
});

// fade-out animation on internal link click
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a');
  if(!a) return;
  const href = a.getAttribute('href');
  if(!href || href.startsWith('http') || a.target=='_blank') return; // external or new-tab links skip
  e.preventDefault();
  document.documentElement.style.transition='opacity .45s ease, transform .45s ease';
  document.documentElement.style.opacity='0';
  document.documentElement.style.transform='translateY(8px)';
  setTimeout(()=>{ window.location = href; }, 420);
});
