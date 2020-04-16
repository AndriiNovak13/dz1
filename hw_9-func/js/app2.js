function Print(a){
    console.log(a);
}
function searchStr(str,word){
    let temp=str.indexOf(word);
    while(temp!==-1){
        Print(temp);
        temp=str.indexOf(word,temp+1);
    }
}


let str='Lorem ipsum dolor sit amet consectetur ipsum elit. Ullam aliquam ipsum recusandae debitis dicta quia ipsum, dolores minima ipsum odio.';
searchStr(str,'ipsum');