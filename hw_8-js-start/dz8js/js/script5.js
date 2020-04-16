let a=prompt('a:');
let b=prompt('b:');


b>a? checkNoParni(a,b):console.log('a>b');



function checkNoParni(x,y){
    for(let i=x; i<=y; i++){
        if(i%2!=0){
            console.log(i)
        }
        else{
            continue;
        }
    }
}