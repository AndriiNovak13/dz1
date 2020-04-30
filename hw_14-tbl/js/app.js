let items=document.querySelectorAll('.tr .td');

for(let i=0; i<items.length; i++){
    items[i].onmouseover=function(){
        console.log(10);
        items[i].classList.add('active');
    }
    items[i].onmouseout=function(){
        items[i].classList.remove('active');
    }
}