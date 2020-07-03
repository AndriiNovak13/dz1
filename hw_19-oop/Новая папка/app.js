class User{
    constructor(name, surname){
        this.name=name;
        this.surname=surname;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name= value;
    }

    getFullName(){
        return this.name + ' ' + this.surname
    }
}

class Student extends User{
    constructor(name, surname, year){
        super(name,surname);
        this.year=year;
    }

    get year(){
        return this._year;
    }

    set year(value){
        this._year= value;
    }

    getCourse(){
        // let date = new Date();
        // let nowYear= date.getFullYear();
        // return nowYear - this.year;
          return new Date().getFullYear() - this.year;
    }



}

let student = new Student ('Bob', 'Kenny', 2017);

console.log(student.getFullName());
console.log(student.getCourse());

console.log(student.name)
student.name='Tom';
console.log(student.name)
console.log(student.getFullName());


console.log(student.year);
student.year=2012;
console.log(student.year);
console.log(student.getCourse());

