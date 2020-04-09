let a=25, b=99;

while(true){
    let chislo=prompt('Vved chislo:');

    if(chislo==null){
        alert('Bye');
        break;
    }
    else if(chislo<a || chislo>99){
        continue;
    }
    else{
        alert('This chislo '+ chislo + ' is diapazon [25;99]');
        break;
    }
}