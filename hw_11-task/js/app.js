//      5       //
// function checkStr(str){
//     alert(str.startsWith('http: //'));
// }
// let str='http: //good yeah';
// // let str='checkStr http: //';
// checkStr(str);
//////////////////////////////////////////

//      6     //
// function dayOfWeek(i){
//     switch (i) {
//         case '1':
//             alert('Понеділок')
//         break;
//         case '2':
//             alert('Вівторок')
//         break;
//         case '3':
//             alert('Середа')
//         break;
//         case '4':
//             alert('Четвер')
//         break;
//         case '5':
//             alert(`П'ятниця`)
//         break;
//         case '6':
//             alert('Субота')
//         break;
//         case '7':
//             alert('Неділя')
//         break;
            
//         default:
//             alert('Проблема в індексі !')
//         break;
//     }
// }
// let num=prompt('Input index (1-7):');
// dayOfWeek(num);
/////////////////////////////////////////////////

//         7         //
// function getStr(){
//     let str='-';
//     for(let i=1; i<=9; i++){
//         str+=`${i}-`;
//     }
//     return str;
// }
// alert(getStr());
/////////////////////////////////////////////////

//      8       //
// function getRandonNumber(num){
//     for(let i=0; i<num; i++){
//         console.log(Math.floor(Math.random()*100)+1)
//     }
// }
// let num =prompt ("Input number:");
// getRandonNumber(num);
/////////////////////////////////////////////////

//      9       //
// let arr=['a', 'b', 'c'];
// arr.push(1);
// alert(arr);
/////////////////////////////////////////////////

//      10      //
// function addElements(arr){
//     let a=prompt("Скільки елементів хочете додати?");
//     for(let i=0; i<a; i++){
//         let item=prompt("Введіть елемент:");
//         arr.unshift(item);
//     }
//     return arr;
// }
// let arr=[1, 2, 3];
// alert(addElements(arr));
/////////////////////////////////////////////////

//      11      //
// function getLastElement(arr){
//     return arr[arr.length-1];
// }
// let arr=['js', 'css', 'jq'];
// alert(getLastElement(arr));
/////////////////////////////////////////////////

//      12      //
// let arr=[1, 2, 3, 4, 5];
// let newArr = arr.slice(0,3);
// alert(newArr);
/////////////////////////////////////////////////

//      13      //
// let arr=[1, 2, 3, 4, 5];
// arr.splice(2,2,10,11);
// alert(arr);
/////////////////////////////////////////////////

//      14      //
// function getArr(num){
//     let arr=[];

//     for(let i=1; i<=num; i++){
//         let item='';
//         for(let j=0; j<i; j++){
//             item+=i;
//         }
//         arr.push(item);
//     }
//     return(arr);
// }

// let index= prompt("Введіть до скількох утворювати особливий масив:");
// alert(getArr(index));
/////////////////////////////////////////////////

//      15      //
// function arrayFill(item, count){
//     let arr=[];
//     for(let i=0; i<count; i++){
//         arr.push(item);
//     }
//     return arr;
// }

// let item = prompt("Input item:");
// let k=prompt("Input count:");
// alert(arrayFill(item,k));
/////////////////////////////////////////////////

//      16      //
// function countElements(arr){
//     let s=0,i=0;

//     while(s<=10){
//         s+=arr[i];
//         i++;
//     }
//     console.log(s);
//     return i;
// }

// let arr = [3,4,3,2,1];
// alert(countElements(arr));
/////////////////////////////////////////////////

//      17      //
// function fillArray(len){
//     let arr=[];
//     for(let i=0; i<len; i++){
//         arr[i]=Math.floor(Math.random()*10)+1;
//     }
//     return arr;
// }

// let k=prompt("Input length array:");
// alert(fillArray(k));
/////////////////////////////////////////////////

//      18      //
// function tablMult(){
//     for(let i=1; i<=9; i++){
//         for(let k=1; k<=9; k++){
//             console.log(`${i} * ${k} = ${i*k}`);
//         }
//         console.log('----------');
//     }
// }
// tablMult();
/////////////////////////////////////////////////

//      19      //
// function myReverse(arr){
//     let newArr=[];
//     let k=0;
//     for(let i=arr.length-1; i>=0; i--){
//         newArr[k]=arr[i];
//         k++;
//     }
//     return newArr;
// }
// let arr = [1,2,5,8,13];
// alert(myReverse(arr));
/////////////////////////////////////////////////

//      20      //
// function sumArray(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//             sum+=arr[i][j];
//         }
//     }
//     return sum;
// }
// let arr=[[1, 2, 3], [4, 5], [6]];
// alert(sumArray(arr));
/////////////////////////////////////////////////

//      21      //
// function getDigitsSum(num){
//     let sumNum=0;
//     for(let i=0; i<=num; i++){
//         sumNum+=i;
//     }
//     return sumNum;
// }
// let a = prompt('Input number:');
// alert(getDigitsSum(a));
/////////////////////////////////////////////////

//      22      //
// function isPositive(arr){
//     let newArr = [];
//     let k=0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>=0){
//             newArr[k]=arr[i];
//             k++;
//         }
//         else{
//             continue;
//         }
//     }
//     return newArr;
// }
// let arr = [1,-2,-5,8,13,-11,4];
// alert(getArrayPositive(arr));
/////////////////////////////////////////////////

//      23      //
// function getNumber(arr){
//     const item = 9;
//     for(let i=0; i<arr.length; i++){
//         let s=0;
//         let num=arr[i];
//         for(let j=0; j<3; j++){
//             s+=num%10;
//             num=Math.round(num/10);
//         }
//         if(s===item){
//             console.log(arr[i]);
//         }
//     }
// }
// let arr = [123, 234, 444,333,531,567,441];
// getNumber(arr);
/////////////////////////////////////////////////

//      24      //
// function getPeopleOnline(arr){
//     for(let key in arr){
//         if(arr[key].online==true){
//             console.log(key);
//         }
//     }
// }

// let people={
//   Alan: {
//     online: true
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }
// getPeopleOnline(people);
/////////////////////////////////////////////////
