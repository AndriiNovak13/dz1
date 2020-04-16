
function stInArr(st){
    return st.split(' ');
}
function sortArr(arr){   
    for(let k=1; k<arr.length; k++){
        for(let i=0; i<arr.length-k; i++){
            if(arr[i].length>arr[i+1].length){
                let b =arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=b;
            }
        }
    }
    return arr;
}
function arrInSt(str){
    return str.join(' ');
}
function Print(date){
    console.log(date);
}

let st='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, enim aliquid. Incidunt, nostrum?';

st=stInArr(st);
Print(st);
st=sortArr(st);
Print(st);
st=arrInSt(st);
Print(st);

