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






















