let menutottle=document.querySelector('.menu-toggle');
let menutoggleIcon=document.querySelector('.menu-toggle i');
let menu =document.getElementById('menu');
menutottle.addEventListener('click',e=>{
    menu.classList.toggle('show');
    if(menu.classList.contains('show')){
        menutoggleIcon.setAttribute('class', 'far fa-window-close')
    }else{
        menutoggleIcon.setAttribute('class', 'fa fa-bars')
    }
})


 
