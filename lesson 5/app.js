          // დავალება 1 (დაიბეჭდოს ყველა რიცხვი 0-დან მომხმარებლის რიცხვამდე)


// let userInput = Number(prompt("შეიყვანეთ რიცხვი 1-დან 100-მდე"));

// while(userInput < 1 || userInput > 100 || isNaN(userInput)){
//     userInput = Number(prompt("შეიყვანეთ რიცხვი 1-დან 100-მდე"));
// }
// for(let i = 0; i < userInput; i++){
//     if(i == 0){
//     console.log(`${i} არც ლუწია არც კენტი`)
//     } else if (i % 2 !=0){
//      console.log(`კენტი რიცხვია : ${i}`)
//     }
      
// }


// პირველი დავალების მეორე ვარიანტი... თუ 0 იდან არ დავიწყებდით მაშინ  if აღარ დაგვჭირდებოდა..
// დავიწყებიდით 1იდან და 2ს მივუმატებდით თითო იტერაციაზე

// let userInput = Number(prompt("შეიყვანეთ რიცხვი 1-დან 100-მდე"));

// while(userInput < 1 || userInput > 100 || isNaN(userInput)){
//     userInput = Number(prompt("შეიყვანეთ რიცხვი 1-დან 100-მდე"));
// }
// for(let i = 1; i < userInput; i+=2){
//      console.log(`კენტი რიცხვია : ${i}`)
    
// }




// დავალება 2( 2ის ჯერადი რიცხვი რენდომულ რიცხვსა და შემოყვანილ რიცხვს შორის)

// let userInput = Number(prompt("შეიყვანეთ რიცხვი 300 -დან 500 -მდე"));
// let x = Math.floor(Math.random()* 50) + 50;
// console.log(`rendom ricxvia ${x}`);
// while(userInput < 300 || userInput > 500 || isNaN(userInput)){
//     userInput = Number(prompt("შეიყვანეთ რიცხვი 300 -დან 500 -მდე"));
// }
// for(let i = x; i < userInput; i++){
//  if(i % 2 == 0){
//    console.log(i)
//  } 

// }



// დავალება 3 (საშუალო არითმეტიკული)


//  let userInput = Number(prompt("შეიყვანეთ რიცხვი 70 -დან 100 -მდე"));
// while(userInput < 70 || userInput > 100 || isNaN(userInput)){
//     userInput = Number(prompt("შეიყვანეთ რიცხვი 70 -დან 100 -მდე"));
// }
// let arithmetic = 0;
// let sum = 0
// for(let i = 0; i < userInput; i++){
//      sum += i;
//      arithmetic++;

// }

// console.log(`საშუალო არითმეტიკულია ${sum / arithmetic}`);



// დავალება 4 (5ის ჯერადი რიცხვი 0-დან 1600-მდე,რომელიც არ იყოფა 10-ზე უნაშთოდ)

// for(let i = 0; i < 1600; i+=5){

//   if(i % 10 != 0){
//     console.log(i);
//   }
// }



// დავალება 5 (ფაქტორეალი)

//  let userInput = Number(prompt("შეიყვანეთ რიცხვი 50 -დან 100 -მდე"));
// while(userInput < 50 || userInput > 100 || isNaN(userInput)){
//     userInput = Number(prompt("შეიყვანეთ რიცხვი 50 -დან 100 -მდე"));
// }
// let factorial = 1;

// for(let i = 2; i <= userInput; i++){
//     factorial *= i;
// }

// console.log(`${userInput} ს ფაქტორიალია ${factorial}`);




// დავალება 6 (ყველა ის რიცხვი, რომელიც უნაშთოდ იყოფა)

// let userInput = Number(prompt("შეიყვანეთ რიცხვი 100 -დან 200 -მდე"));
// while(userInput < 100 || userInput > 200 || isNaN(userInput)){
//     userInput = Number(prompt("შეიყვანეთ რიცხვი 100 -დან 200 -მდე"));
// }
// for(let i = 0; i < userInput; i++){
//  if(userInput % i == 0){
//     console.log(i);
//  }
// }



// დავალება 7 (მარტივია თუ შედგენილი)

// let userInput = Number(prompt("შეიყვანეთ რიცხვი"));
// while(isNaN(userInput) || userInput == 0){
//    userInput = Number(prompt(" შეცდომა !!!! შეიყვანეთ რიცხვი"));
// }
// let count = 2; 
// for(let i = 2; i <= userInput / 2; i++){
//     if(userInput % i == 0){
//         count++;
//     }  
// }

// if(count > 2){
//  console.log(`${userInput} არის შედგენილი`);
// } else if(userInput == 1){
//   console.log(`${userInput} არც შედგენილია, არც მარტივი`);
// }
//  else{
//   console.log(`${userInput} არის მარტივი`);
// }
 




// დავალება 8 (ყველა რიცხვის ნამრავლი რეზულტატი)


// let userInput = Number(prompt("შეიყვანეთ რიცხვი"));

// while(isNaN(userInput) || userInput == 0){
//    userInput = Number(prompt(" შეცდომა !!!! შეიყვანეთ რიცხვი"));
// }
// let result =1;
// for(let i = 1; i < userInput; i++){
//   console.log(`${result} * ${i} = ${result * i}`)
//   result *= i;
// }





// დავალება 9 (შემოყვანილი რიცხვის გამრავლების ტაბულა)

// let userInput = Number(prompt("შეიყვანეთ რიცხვი 1-დან 10-მდე"));
//  while(isNaN(userInput) || userInput == 0 || userInput > 9){
//     userInput = Number(prompt(" შეცდომა !!!! შეიყვანეთ რიცხვი"));
//  }
// for(let i = 1; i < 10; i++){
//    console.log(`${userInput} * ${i} = ${userInput * i}`)
// }