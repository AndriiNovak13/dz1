class Validator{
    isEmail(value){
        const simvol ='@';
        let answ=false;
        for(let i=0; i<value.length; i++){
            if(value[i]===simvol){
                answ=true;
            }
        }

        return answ;
    }
}

let vald = new Validator();
console.log(vald.isEmail('phphtml@mail.ua'));