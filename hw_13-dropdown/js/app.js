
let btn=document.querySelector('.drop__btn');
let drop__menu=document.querySelector('.drop__list');

btn.addEventListener('click', function(){
    drop__menu.classList.toggle('active');
})