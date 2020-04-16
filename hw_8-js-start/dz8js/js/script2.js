function chainToSwitch(val){
    let answer;

    switch (val) {
        case "bob":
        answer="Marley"
        break;

        case "42":
        answer="One";
        break;

        case "99":
            answer="Two";
        break;
    
        default:
            answer="eror";
        break;
    }

    return answer;
}

let ch=prompt();
let a=chainToSwitch(ch);
alert(a);