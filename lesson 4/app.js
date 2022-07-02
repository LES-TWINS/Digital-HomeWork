// დავალება 1 (გამრავლების ტაბულა)

// let first = 1;
// let second = 1;
// let isLooping = true;

// while (isLooping) {
//   if (second == 10) {
//     first++;
//     second = 1;
//   }

//   if (first == 9 && second == 9) {
//     isLooping = false;
//   }
//    let result = first * second;
//   console.log(`${first} * ${second} = ${first * second} `);
//   second++;

// }

//         (გამრავლების ტაბულა ჩადგმული ციკლით)

// for(let i = 1; i < 10; i++){
//   for(let j = 1; j < 10; j++){
//      console.log(` ${i} * ${j} = ${i * j}`)
//   }
// }

// დავალება 2 (ყველა ლუწი რიცხვი 0-დან 20-მდე)

// let num = 0;
// while(num < 20){
//    if(num % 2 == 0 && num != 0){
//    console.log(`ლუწი რიცხვებია : ${num}`);
//    } else if(num == 0){
//      console.log(`${num} არც ლუწია, არც კენტი`)
//    }
//    num++
// }

//                დავალება 3 (რამდენი 4ის ჯერადი რიცხვია მოთავსებული 0-დან 120-მდე)

//  let min = 0;
//  let max = 120;
//  let count = 0;

//  while(min < max){
//  if(min % 4 == 0){
//   count++;
//  }
//    min++;
//  }
//  console.log(` 0-დან 120-მდე მოთავსებულია  ${count} (ცალი)  4-ის ჯერადი რიცხვი`);






//   დავალება 4 (შემოყვანილი რიცხვის გამყოფები)

//  let n = Number(prompt(" შეიყვანეთ რიცხვი "));  
//  let iterate = 0;
//  let count =0;


//  if(!isNaN(n)){
//     while(iterate <= n){
//         if(n % iterate == 0){
//          console.log(`${n} რიცხვის გამყოფია: ${iterate}`)
//          count++
//         }
//         iterate++;
    
//      }
//      console.log(`${n} -ს აქვს ${count} გამყოფი`);
//  } else{
//     console.log("Wrong Command")
//  }









// დავალება 5 (რიცხვები, მომხმარებლის მიერ შემოყვანილ რიცხვებს შორის)

//  let firstNum = Number(prompt("შეიყვანეთ რიცხვი"));
//  let secondNum = Number(prompt("შეიყვანეთ რიცხვი"));

//   if(!isNaN(firstNum) && !isNaN(secondNum)){
//     while(firstNum < secondNum){
//         firstNum++;
//          if(firstNum == secondNum){
//              break;
//           }
//         console.log(firstNum);
//       }
   
//   } else{
//     console.log("Wrong Command")
//   }





//  მეორე ვარიანტი for ციკლით

//  let firstNum = Number(prompt("შეიყვანეთ რიცხვი"));
//  let secondNum = Number(prompt("შეიყვანეთ რიცხვი"));

// if(!isNaN(firstNum) && !isNaN(secondNum)){
//     for (let i = firstNum + 1; i < secondNum; i++) {
//         console.log(`მომხმარებლის მიერ შემოყვანილი რიცხვებია ${i}`);
//       }
//  } else{
//     console.log("Wrong Command")
//  }