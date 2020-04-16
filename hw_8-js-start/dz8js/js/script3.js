
function findGreater(a,b){
    return((a>b)?"a>b":"b>a");
}

let a=prompt('Vved chislo a:');
let b=prompt('Vved chislo b:');


let answer=findGreater(a,b);
alert(answer);