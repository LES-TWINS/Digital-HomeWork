// დავალება 1 


// let userInput = Number(prompt("შეიყვანეთ რიცხვი 100-დან 200-მდე"));
// while(isNaN(userInput) || userInput < 100 || userInput > 200){
//     userInput = Number(prompt(" !!!! შეიყვანეთ რიცხვი 100-დან 200-მდე"));
// }
// let arr = [];

// for(let i = 0; i < userInput; i+=5){
//     if(i == 0){
//     continue;
//     }
//     arr.push(i)
// }
// console.log(arr);


// დავალება 1 მეორე ვარიანტი
// for(let i = 0; i < userInput; i++){
//     if(i == 0){
//        continue;
//     } else{
//         if(i % 5 == 0){
//             arr.push(i)
//          }
//     }
// }
// console.log(arr);




// დავალება 2


// let arr = [];
// for(let i = 0; i < 10; i++){
//  let randNum = Math.round(Math.random() * 200);
//  arr.push(randNum);
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 3 == 0){
//         console.log(arr[i]);
//       }
// }
 


// დავალება 3


// let arr = [];
// let count = 0;
// for(let i = 2; i < 100; i++){
// for(let j = 1; j <= i; j++){
//  if(i % j == 0){
//    count++
//  }
// }
// if(count == 2){
//    arr.push(i);
// }
// count = 0;
// } console.log(arr);


// დავალება 4


// let arr = [11,6,10,20,7];
// let newArr = [];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//  for(let j = 1; j <= arr[i]; j++){
//    if(arr[i] % j == 0){
//    count++
//    }
//  }
// if(count == 2){
//   newArr.push(arr[i]);
// }
// count = 0;
// }
// if(newArr.length >= 1){
//    console.log("მარტივი რიცხვი ნაპოვნია");
// } else{
//   console.log("მარტივი რიცხვის პოვნა ვერ მოხერხდა");
// }


// დავალება 5

// let arr = [];

// for(let i = 0; i < 20; i++){
//   let randNum = Math.round(Math.random() * 100);
//   arr.push(randNum);
// } 

// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] % 5 == 0){
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);



// დავალება 6


// let arr = [];
// while(arr.length < 10){
//     let randNum = Math.floor(Math.random() * 20);
//     if(arr.indexOf(randNum) == -1){
//         arr.push(randNum);
//     } 
// }
//  console.log(arr);