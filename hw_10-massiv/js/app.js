function randomNumber(number){
    let arr = [];
    let min=-100 , max=100
    for(let i=0; i<number; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1) ) + min);
    }
    return arr;

}
function moreNumberFilter(arr){
    return arr.filter(function(item){
        return item>10;
    });
}

function Print(a){
    console.log(a);
}

let num=prompt('Vved length massiv:');
let mass=randomNumber(num);

mass=moreNumberFilter(mass);
Print(mass);
