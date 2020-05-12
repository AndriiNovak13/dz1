window.onload=function(e){

    let hour= 0;
    let minuts=0;
    let seconds=0;

    let total=0;
    let allTime;

    let h=document.querySelector('.hour');
    let m=document.querySelector(".minute")
    let s=document.querySelector(".seconds")

    function getTime(){
        ++total;

        hour=Math.floor(total/3600);
        minuts=Math.floor((total%3600)/60);
        seconds=Math.floor(total%60);

        h.innerHTML=hour;
        m.innerHTML =minuts;
        s.innerHTML =seconds;
    }

    document.querySelector('.start-btn').addEventListener('click',function(){
        allTime=setInterval(getTime,1000);
    });

    document.querySelector('.stop-btn').addEventListener('click',function(){
        clearInterval(allTime);
    });

    document.querySelector('.reset-btn').addEventListener('click',function(){
        total=0;
        h.innerHTML=0;
        m.innerHTML =0;
       s.innerHTML =0;
    });



}