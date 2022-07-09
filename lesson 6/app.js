// დავალება 1 (მომხმარებლის მიერ შემოტანილი რიცხვის გამყოვების საშვალო არითმეტიკული)


// let userInput = Number(prompt("შეიყვანეთ დადებითი რიცხვი 50-დან 100-მდე"));

// while(isNaN(userInput) || userInput < 50 || userInput > 100){
//     userInput = Number(prompt("შეიყვანეთ დადებითი რიცხვი 50-დან 100-მდე"));
// }

// let count = 1;
// let sum = userInput;
// for(let i = 1; i <= userInput / 2; i++){
//    if(userInput % i == 0){
//      count++;
//      sum += i;
//    }
   
//  } console.log(` გამყოფების საშუალო არითმეტიკულია ${sum / count}`);




// დავალება 2

// let userInput = Number(prompt("შეიყვანეთ დადებითი რიცხვი 70-დან 140-მდე"));
// let userInput2 = Number(prompt("შეიყვანეთ დადებითი რიცხვი 70-დან 140-მდე"));
// let userInput3 = Number(prompt("შეიყვანეთ დადებითი რიცხვი 70-დან 140-მდე"));

//  let count = 2;
//  let count2 = 2;
//  let count3 = 2;

// function test(input,coun){
    
//     for(let i = 2; i <= input / 2; i++){
//         if(input % i == 0){
//              coun++;
//         }
//       } 
//       return  coun;
      
// }

// let x = test(userInput,count);
// let z = test(userInput2,count);
// let t = test(userInput3,count);

// if(x > z && x > t){
//     console.log(`ყველაზე მეტი გამყოფი აქვს ${userInput} -ს`);
//  }else if(z > x && z > t){
//     console.log(`ყველაზე მეტი გამყოფი აქვს ${userInput2} -ს`);
//  } else if(t > x && t > z){
//     console.log(`ყველაზე მეტი გამყოფი აქვს ${userInput3} -ს`);
//  } else if(x == z && x > t){
//    console.log(`${userInput} -ს და ${userInput2} -ს აქვთ ყველაზე მეტი გამყოფი,თუმცა მათი გამყოფების რაოდენობა ტოლია`)
//  } else if(z == t && z > x){
//     console.log(`${userInput2} -ს და ${userInput3} -ს აქვთ ყველაზე მეტი გამყოფი,თუმცა მათი გამყოფების რაოდენობა ტოლია`)
//   } else if(x == t && x > z){
//     console.log(`${userInput} -ს და ${userInput3} -ს აქვთ ყველაზე მეტი გამყოფი,თუმცა მათი გამყოფების რაოდენობა ტოლია`)
//   }
//  else{
//      console.log(`გამყოფების რაოდენობა ტოლია`);
//  }




// დავალება 3

// let result = 1;
// for(let i = 10; i < 180; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//      result *= i;
//     }
// } console.log(result);


// დავალება 4

//  let userInput = Number(prompt("შეიყვანეთ  რიცხვი "));
//  let userInput2 = Number(prompt("შეიყვანეთ  რიცხვი "));
//  let userInput3 = Number(prompt("შეიყვანეთ  რიცხვი "));
//  let userInput4 = Number(prompt("შეიყვანეთ  რიცხვი "));
 
//  if(userInput > userInput2 && userInput > userInput3 && userInput > userInput4){
//    console.log(`უდიდესი რიცხვია ${userInput}`);
//  } else if(userInput2 > userInput && userInput2 > userInput3 && userInput2 > userInput4){
//     console.log(`უდიდესი რიცხვია ${userInput2}`);
//   }else if(userInput3 > userInput && userInput3 > userInput2 && userInput3 > userInput4){
//     console.log(`უდიდესი რიცხვია ${userInput3}`);
//   } else{
//     console.log(`უდიდესი რიცხვია ${userInput4}`);
//   }


// დავალება 5


//  let fullName = prompt("შეიყვანეთ  სახელი და გვარი ");
//  let mail = prompt("შეიყვანეთ მეილი ");
//  let img = prompt("შეიყვანეთ სურათის ბმული");


//  document.body.innerHTML=`
//  <div class="card" style="width: 18rem;">
//  <img src="${img}" class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">${fullName}</h5>
//    <h6 class="card-title">${mail}</h6>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
// </div>

//  `


// დავალება 6     3x^2 + 2x – 5 = 0


// let a=3;
// let b=2;
// let c=-5;


// let d = Math.sqrt((b**2) - (4*a*c));

// let x1 = (-b + d) / (2*a);
// let x2 =(-b - d) / (2*a);
// console.log(`x1 არის ${x1}  x2 არის ${x2}`);


// დავალება 7


// let a = Number(prompt("შეიყვანეთ ა გვერდის მნიშვნელობა"));
// let b = Number(prompt("შეიყვანეთ ბ გვერდის მნიშვნელობა"));
// let hyp = Math.sqrt(a ** 2 + b ** 2);
// console.log(`მართკუთხა სამკუთხედის ჰიპოთენუზა არის ${hyp}`);


// დავალება 8


// let userInput = Number(prompt("შეიყვანეთ  რიცხვი  0-დან 200-მდე"));
// while(isNaN(userInput) || userInput < 0 || userInput > 200){
//     userInput = Number(prompt(" !!! შეიყვანეთ  რიცხვი 0-დან 200-მდე"));
// }


// let count = 2;

// for(let i = 2; i <= userInput / 2; i++){
//   if(userInput % i == 0){
//      count++;
//   }
// }
//     if(userInput == 1){
//         console.log(`${userInput} არც მარტივია, არც შედგენილი`);
        
//     }
//    else if (count > 2){
//     console.log(`${userInput} არის შედგენილი`)
//   } else if(count == 2 && userInput != 1 && userInput != 0) {
//       console.log(`${userInput} არის მარტივი`)
//   } else{
//       console.log(`${userInput} -ზე გაყოფა არ შეილება`);
//   }


// დავალება 9


// let firstName = prompt("შეიყვანეთ სახელი ");
// let lastName = prompt("შეიყვანეთ გვარი");
// let age = prompt("შეიყვანეთ ასაკი ");
// let mail = prompt("შეიყვანეთ მეილი");

// console.log(`Hello I am ${firstName} ${lastName} I am ${age} year old, my email is ${mail}`);


// დავალება 10


// let min = 10;
// let max = 90;
// let count = 0;
// for(let i = min; i < max; i++){
//  for(let j = 1; j <= i; j++){
//    if(i % j == 0){
//          count++;
//    }
//  }
// if(count == 2){
//     console.log(`მარტივი რიცხვებია : ${i}`);
// }
//    count = 0;
// }




// დავალება 11

// let txt = document.querySelector("h3");
// let btn = document.querySelector("button");
// function change(){
//     btn.addEventListener("click",function(){
//         let newColor = makeRandColor();
//         document.body.style.backgroundColor = newColor;
//         txt.innerHTML = newColor;
//     })
// }
// change();
// let makeRandColor = () => {
//     let r = Math.floor(Math.random()* 255);
//     let g = Math.floor(Math.random()* 255);
//     let b = Math.floor(Math.random()* 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }


// დავალება 12


//  for(let i = 8; i > 0; i--) {
//      let star = ""
//        for(let j = 0; j < i; j++){
//            star+="*";
            
//        }
//        console.log(star)
//  }


// დავალება 13



// for(let i = 10; i > 0; i--){
// let star="";
// for(let j = 9; j > i-1; j--){
//    star+=" ";
// }
// for(let j = i; j > 0; j--){
//  star+="*"
// }
// for(let j = i; j > 1; j--){
//     star+="*"
//    }
// console.log(star)
// }


// დავალება 14


// let userInput = Number(prompt(" შეიყვანეთ იტერაციების რაოდენობა "));
// while(isNaN(userInput) || userInput == 0){
//     userInput = Number(prompt(" !!!! შეიყვანეთ იტერაციების რაოდენობა "));
// }
// let min = 135;
// let max = 371;
// let sum = 0;
// let count = 0;
// for(let i = 0; i < userInput; i++){
//   let randNumber = Math.round(Math.random() * (max-min)) + min;
//   if(randNumber % 2 == 0){
//    console.log(`${randNumber} არის ლუწი რიცხვი`);
//    sum += randNumber;
//    count++;
//   }
// }
// if(isNaN(sum / count)){
//  console.log(`ლუწი რიცხვი არ დაგენერირებულა`);
// } else{
//     console.log(`საშუალო არითმეტიკული არის ${sum / count}`);
// }




// დავალება 15 

// let userInput = Number(prompt("შეიყვანეთ სამკუთხედის 1 გვერდის ფიფქების რაოდენობა"))
// while(isNaN(userInput) || userInput == 0 || userInput == 1){
//     userInput = Number(prompt(" !!!! შეიყვანეთ სამკუთხედის 1 გვერდის ფიფქების რაოდენობა"))
// }
//  for(let i = userInput; i > 0; i--) {
//      let star = ""
//        for(let j = 0; j < i; j++){
//            star+="*";
            
//        }
//        console.log(star)
//  }



// დავალება 16



// let userInput = Number(prompt("შეიყვანეთ თანხა"));

// while(isNaN(userInput) || userInput < 5){
//     userInput = Number(prompt(" !!! შეიყვანეთ თანხა რომელიც 5ის ტოლია ან 5ზე მეტია"));
// }
// let bills = [200,100,50,20,10,5];

// for(let i = 0; i < bills.length; i++){
//  let sum = Math.floor(userInput / bills[i]);
//  let sum2 = userInput % bills[i];
//  if(sum != 0){
//     userInput=sum2;
//     console.log(`თქვენ მიიღებთ ${sum}ცალ ${bills[i]} ლარიანს`) 
//  }

// }   

    





// დავალება 17

// let userInput = Number(prompt(" შეიყვანეთ თანხა "));

// while(isNaN(userInput)){
//     userInput = Number(prompt(" !!! შეიყვანეთ თანხა "));
// }
// let currency = prompt("რომელი ვალუტა გსურთ ?: (usd, rub, gbp)");

// // while(currency != "usd" || currency != "rub" || currency != "gbp"){
// //     currency = prompt(" !!! რომელი ვალუტა გსურთ ?: (usd, rub, gbp)");
// // }

// const usd = 2.8710;
// const rub = 21.44;
// const gbp = 3.4564;
// if(currency == "usd"){
//     console.log(`${userInput} ლარი არის ${userInput / usd} დოლარი `);
// } else if(currency == "rub"){
//     console.log(`${userInput} ლარი არის ${userInput * rub} რუბლი `);
// } else{
//     console.log(`${userInput} ლარი არის ${userInput / gbp} ფუნტი `);
// }


