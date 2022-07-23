// დავალება 1 (5-ის ჯერადი რიცხვები 0-დან მომხმარებლის რიცხვამდე)

// let userInput = Number(prompt("შეიყვანეთ რიცხვი 100-დან 200-მდე"));
// while(isNaN(userInput) || userInput < 100 || userInput > 200){
//     userInput = Number(prompt(" !!!! შეიყვანეთ რიცხვი 100-დან 200-მდე"));
// }

// let filledArray = [...Array(userInput).keys()].filter(item => item % 5 == 0 && item != 0);
// console.log(filledArray);



//  დავალება 2  (რენდომული 10 რიცხვიდან 3-ის ჯერადი რიცხვების დაბეჭდვა)

// let arr = [];
// while(arr.length < 10){
//   let randNum = Math.round(Math.random() * 100);
//   arr.push(randNum);
// }console.log(arr)
// arr.forEach(item => {
//     if (item % 3 == 0 && item != 0){
//       console.log(item);
//     }
// })




// დავალება 3 (0-დან 100-ამდე ყველა მარტივი რიცხვი)

// let arr = [];
// for(let i = 0; i < 100; i++){
//      arr.push(i);
// } 
// let result = arr.filter(item => {
//     let counter = 0;
//     for(let i = 1; i <= item; i++){
//         if(item % i == 0){
//           counter++;
//         }
        
//     }
//     return counter == 2;

// }) 
// console.log(result);



 


// დავალება 4 (შეიცავს თუ არა მასივი მარტივ რიცხვს)

// let arr = [20,15,13,40];
// let result = arr.some(item =>{
//     let counter = 0;
//     for(let i = 1; i <= item; i++){
//         if(item % i == 0){
//              counter++
//         }
//     }
//      return counter == 2;
// }) 
// if(result){
//   console.log("მარტივი რიცხვი ნაპოვნია")
// } else{
//     console.log("მარტივი რიცხვის პოვნა ვერ მოხერხდა")
// }







// დავალება 5 (Შექმენით მასივი რომელიც შეივსება 20 ცალი რენდომული რიცხვით, ამოარჩიეთ ამ რიცხვებიდან 5 ის ჯერადი რიცხვები და გადაიტანეთ მეორე მასივში.)

// let arr = []
// while(arr.length < 20){
//   let randNum = Math.round(Math.random() * 100);
//   arr.push(randNum);
// } 
// let filteredArr = arr.filter(item => item % 5 == 0);
// console.log(filteredArr);


// დავალება 6

// let arr = []
// while(arr.length < 10){
//   let randNum = Math.round(Math.random() * 20);
//   if(arr.indexOf(randNum) == -1){
//     arr.push(randNum);
//   }
  
// }  console.log(arr);






// დავალება 7 (ყველა 3ის ჯერადი რიცხვი 0-დან 100-მდე)

// let filledArray = [...Array(100).keys()].filter(item => item % 3 == 0 && item != 0);
// console.log(filledArray);


// დავალება 8 (მეგობრების სახელები რომლებიც "a"-ზე იწყება)

// let arr = ["ana","gega","tornike","Andro","giorgi","amiran"];
//  arr.forEach(firstName => {
//    if(firstName[0].toLowerCase() == "a"){
//        console.log(firstName);
//    }
//  });


// დავალება 9 (2ის და 5ის ჯერადი რიცხვები თუმცა არა ერთდროულად)

// let filledArray = [...Array(50).keys()].filter(item => item % 2 == 0 || item % 5 == 0);
// let test = filledArray.filter(item => item % 10 != 0 && item != 0);
// console.log(test);
  
// დავალება 10 (თითოეული რიცხვის გამყოფების რაოდენობა)

// let arr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];
// arr.forEach(item => {
//     let counter = 0;
//     for(let i = 1; i <= item; i++){
//        if(item % i == 0){
//          counter++;
//        }
//     }
//     console.log(`${item}-ის გამყოფების რაოდნება არის ${counter}`)
// })




 


