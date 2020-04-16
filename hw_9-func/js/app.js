function trimString(str, maxLength){
    let len = str.length;
    if(len>maxLength){
           str=str.substr(0,maxLength);
       console.log(str);

    }
    else{
        console.log('=');
    }
}

let str="lorem qwerty ui";
trimString(str,8);