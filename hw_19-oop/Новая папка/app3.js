let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

let arrS= new Set();

for(let i in values){
    arrS.add(values[i]);
}

arrS.forEach((elem)=>{
    console.log(elem);
})