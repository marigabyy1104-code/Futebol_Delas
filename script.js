const menuToggle=document.getElementById('menuToggle');
const menu=document.getElementById('menu');
menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
document.querySelectorAll('#menu a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));