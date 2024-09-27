//change nav color
addEventListener('scroll',function(){
    const nav =document.querySelector('nav');
    nav.classList.toggle('scroll_nav',scrollY > 0)
})
//question answer by onclick
const fqs = document.querySelectorAll('.fq');
fqs.forEach(fq => {
fq.addEventListener('click',()=>{
fq.classList.toggle('open')
const icon = fq.querySelector('.fq__icon i');
if(icon.className==='uil uil-plus'){
    icon.className='uil uil-minus'
}else{
    icon.className='uil uil-plus'
}
})
})
/*open |close menu>links in nav bar with click button*/
const menu = document.querySelector(".nav__menu");
const open_btn = document.querySelector('#open-menu-btn');
const close_btn = document.querySelector('#close-menu-btn');

open_btn.addEventListener('click',()=>{
    // menu.style.display='flex'
    menu.style.scale='1'
    open_btn.style.display='none'
    close_btn.style.display='inline-block'
})

close_btn.addEventListener('click',()=>{
    // menu.style.display='none'
    menu.style.scale='0'
    open_btn.style.display='inline-block'
    close_btn.style.display='none'
})


