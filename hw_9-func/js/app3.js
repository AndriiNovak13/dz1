function diffDate(date1, date2){
    let Year=date2.getFullYear()-date1.getFullYear();
    let Month=date2.getMonth()-date1.getMonth();
    let Day=date2.getDate()-date1.getDate();
    let Hour=date2.getHours()-date1.getHours();
    let Minut=date2.getMinutes()-date1.getMinutes();
    let Seconds=date2.getSeconds()-date1.getSeconds();
    
    PrintTime(Year,Month,Day,Hour,Minut,Seconds);
    
}
function PrintTime(y,m,d,h,mm,s){
    alert(`Year:${y}-Month:${m}-Day:${d}-Hour:${h}-Minut:${mm}-Seconds:${s}`);
}
let date1=new Date(2000,14,12,0,0,0);
let date2=new Date(2020,14,12,8,0,0);
diffDate(date1,date2);
