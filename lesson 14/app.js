//  დავალება 1

// function randNumArr (arr){
//  while(arr.length < 10){
//     arr.push(Math.round(Math.random() * 100))
//  }
//  return arr;
// }
// let array = [];
// let result = randNumArr(array);
// console.log(result);
// let secArr = [2,3,5,11];
// console.log(secArr);



// function getDivisibleNum(firstArr,secondArr){
// let newArr = []
//   firstArr.forEach(el => {
//      for(let i = 0; i < secondArr.length; i++){
//         if(el % secondArr[i] == 0){
//           newArr.push(el);
//            i = secondArr.length;
//         }
//      }
//   })
// return newArr;
// }
// let done = getDivisibleNum(array,secArr);
// console.log(done);





// დავალება 2


// function getRandNumArr(amount,start,end){
//    let arr = []
//  while(arr.length < amount){
//      arr.push(Math.round(Math.random() * (end - start) + start))
//  }
//  return arr;
// }
// let finishedArr = getRandNumArr(15,20,100);
// console.log(finishedArr);





// დავალება 3


// function getSortedArr(arr){
//     let tmp;
//     for(let i = 0; i < arr.length; i++){
//          for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                tmp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = tmp;
//             }
//          }
//     }
//     return arr;
// }
// let randNumArray = [];
// let sorted = getSortedArr(randNumArr(randNumArray));  // randNumArr ფუნქცია პირველ დავალებაშია შექმნილი
// console.log(sorted);





// დავალება 4


// let makeRandColor = () =>{
//     let r = Math.round(Math.random() * 255);
//     let g = Math.round(Math.random() * 255);
//     let b = Math.round(Math.random() * 255);
//     let rgb = `rgb(${r}, ${g}, ${b})`;
//     return rgb;
// }



// function getRandColor(amount){
// let arr = [];
//     for(let i = 0; i < amount; i++){
//       arr.push(makeRandColor());
//     }
//     return arr;
// }
// let rgbArr = getRandColor(5);
// console.log(rgbArr);




// დავალება 5


// function printRgb(arr){
//     arr.forEach(element => {
//         console.log(`'%c${element}'`, `background:${element}`)
//     });
// }
// printRgb(rgbArr);   // rgbArr მე-4  დავალებაშია








                       // საკლასო სამუშაო
                  // object                      


// let temo = {
//     name:"temo",
//     surname:"gagnidze",
//     age:25,
//     email:"temogagna@gmail.com"
// }
// console.log(temo.name);
// temo.name = "temooo";
// console.log(temo);
// console.log(temo["name"]);


// let human = {
//     personalInfo : {
//         name: "giorgi",
//         lastName:"okruadze",
//         age:25
//     },
//     job:{
//         prof:"full stack developer",
//         company:"space bank",
//         programmingLang:["c#","angular","javascript"]
//     }
// }


// console.log(human);
// console.log(human.job);



// let human = {
//     name:"temo",
//     surname:"gagnidze",
//     age:25,
//     getHumanInfo:function(){
//         return `i am ${this.name} ${this.surname} old`
//     },
//     getInstance:function(){
//         return this;
//     }

// }





// console.log(human.getHumanInfo())
// console.log(human.getInstance())



// function getHuman(name,surname,age,email){
//     return{
//         name:name,
//         surname:surname,
//         age:age,
//         email:email
//     };
// }

// let temo = getHuman("temo","gagnidze",27,"temogagna@gmail.com");
// let dato = getHuman("temo","gagnidze",12,"temogagna@gmail.com");
// let gega = getHuman("temo","gagnidze",13,"temogagna@gmail.com");
// let lewis = getHuman("temo","gagnidze",31,"temogagna@gmail.com");

// let humans = [temo,dato,gega,lewis];

// let filterByAge = humans.filter(item => item.age > 18);

// console.log(filterByAge);




 function human(name,lastName,age,email,gender,adress,country){
    return{
        firstname:name,
        lastname:lastName,
        age:age,
        email:email,
        gender:gender,
        adress:adress,
        country:country
    };
 }
 let humans = [
    human("temo","gagnidze",27,"temogagna@gmail.com","male","batumi","georgia"),
    human("dato","gagnidze",27,"temogagna@gmail.com","male","tbilisi","georgia"),
    human("zura","gagnidze",15,"temogagna@gmail.com","male","tbilisi","georgia"),
    human("temo","gagnidze",13,"temogagna@gmail.com","male","gori","georgia")
]
console.log(humans)


 function getFiltered(arr){
    let filterByAge = arr.filter(item => item.age > 18);
    return filterByAge;
   
 }

 function getFilteredAdress(arr,adress){
    return arr.filter(item => item.adress == adress)
     
   
 }
 let finishedAdd = getFilteredAdress(humans,"tbilisi");


 function getName(arr,name){
    return arr.filter(item => item.firstname == name)

 }
 let finishedName = getName(humans,"temo")

 
 function getCollection (arr){
  return arr.map(item =>{
     return{
        name:`${item.firstname} ${item.lastname}`,
        age:item.age,
        adress:`${item.adress}`,
     }
  })
 }
 let done = getCollection(humans)
 console.log(done)



