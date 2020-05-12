window.onload=function(e){

    let modal=document.querySelector('.modal');
    let modal_in=document.querySelector('.modal__wrapper');
    let body=document.querySelector('body');
    let exit=document.querySelector('.exit')

    let answ=true;

    window.addEventListener('scroll', function() { 
        console.log(this.scrollY);
         if(this.scrollY>300 && answ){
            modal.classList.add('active');
            body.classList.add('no-scroll');
        }

        modal.addEventListener('click',function(){
            this.classList.remove('active')
            body.classList.remove('no-scroll');
            answ=false;
        })
        exit.addEventListener('click',function(){
            modal.classList.remove('active')
            body.classList.remove('no-scroll');
            answ=false;
        })
        modal_in.addEventListener('click',function(e){
           e.stopPropagation();
        })
        
    });

   
    
}