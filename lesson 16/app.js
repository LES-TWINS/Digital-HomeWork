// დავალება 1

// function getObj(name,lastName,age,meil){
//  return{
//     name:name,
//     lastName:lastName,
//     age:age,
//     meil:meil
//  }
// }
// let newObj = getObj("temo","gagnidze",27,"temogagna@gmail.com");
// console.log(newObj);


// დავალება 2


// function getFullInfo(name,lastName,age,meil,school,university,workName,positionWork,workExperience,country,city,adress){
// return{
//     personalInfo:{
//         name:name,
//         lastName:lastName,
//         age:age,
//         meil:meil
//     },
//     education:{
//         school:school,
//         university:university
//     },
//     workExperience:{
//         companyName:workName,
//         currentPos:positionWork,
//         workExp:workExperience
//     },
//     adress:{
//         country:country,
//         city:city,
//         adress:adress
//     }
// }
// }

// let fullInfo = getFullInfo("temo","gagnidze",27,"temogagna@gmail.com","9-school","tsu","IT Step","lecturer","8 month","GEORGIA","tbilisi","wereteli");
// console.log(fullInfo);


// დავალება 3


// function getAnimal(name,age,breed,gender){
//     return{
//         name:name,
//         age:age,
//         breed:breed,
//         gender:gender
//     }
// }

// let animals = [
//   getAnimal("sem",5,"doberman","male"),
//   getAnimal("Jon",8,"Shepherd","female"),
//   getAnimal("steve",6,"bulldog","male")
// ]

// function getAnimalObj(obj,gender){
//  return obj.filter(anim => anim.gender == gender);
// }
// let filteredAnimal = getAnimalObj(animals,"male");
// console.log(filteredAnimal);





// დავალება 4
//  A


// function getHumanObj(name,lastName,age,gender,meil,phoneNum){
// return{
//     name:name,
//     lastName:lastName,
//     age:age,
//     gender:gender,
//     meil:meil,
//     phoneNum:phoneNum
// }
// }

// let humanArr = [
//     getHumanObj("temo","gagnidze",27,"male",599858585)
// ]


// function getFullObj(collection){
// return collection.map(item => {
//     return {
//         fullName: `${item.name} ${item.lastName}`,
//         meil: `${item.meil}`
//     }
// })
// }
// let fullInfo = getFullObj(humanArr);
// console.log(fullInfo);





// B

// function getContactObj(name,lastName,phoneNum,meil,img){
//   return{
//       name:name,
//       lastName:lastName,
//       phoneNum:phoneNum,
//       meil:meil,
//       img:img
//   }
// }
// let list = [
//     getContactObj("temo","gagnidze",574856212,"temogagna@gmail.com","https://media.istockphoto.com/photos/tbilisi-downtown-georgia-taken-in-april-2019-picture-id1160446488?k=20&m=1160446488&s=612x612&w=0&h=9C-ElsOf5azgVovdU3CarfiWKBlbUTDYKu1ysRAUH4w="),
//     getContactObj("vako","gundishvili",574856312,"vakotest@gmail.com","https://media.istockphoto.com/photos/tbilisi-downtown-georgia-taken-in-april-2019-picture-id1160446488?k=20&m=1160446488&s=612x612&w=0&h=9C-ElsOf5azgVovdU3CarfiWKBlbUTDYKu1ysRAUH4w="),
//     getContactObj("gega","rostomashvili",577856212,"gegarosto@gmail.com","https://media.istockphoto.com/photos/tbilisi-downtown-georgia-taken-in-april-2019-picture-id1160446488?k=20&m=1160446488&s=612x612&w=0&h=9C-ElsOf5azgVovdU3CarfiWKBlbUTDYKu1ysRAUH4w="),
// ]
// function getContactArr(collection,name,lastName){
//  return collection.filter(item => item.name == name || item.lastName == lastName)
// }
// let filteredList = getContactArr(list,"vako","gagnidze");
// console.log(filteredList);



// // დავალება 5


// function createUser(fullName,id,numsList){
// return{
//     fullName:fullName,
//     id:id,
//     numsList:numsList
// }
// }

// let users = [
//     createUser("temo gagnidze",25419854,[1,7,14,4,30,31,5]),
//     createUser("vako gundishvili",25419854,[8,19,20,4,30,37,38]),
//     createUser("gega rostomashvili",25419854,[2,7,12,4,11,37,9]),
//     createUser("tornike rostomashvili",25419854,[3,7,13,45,29,31,5]),
//     createUser("lewis hamilton",25419854,[3,40,6,4,30,31,8])
// ]

// let getLuckyNums = () => {
//     let luckyNumsArr = [];
//      while(luckyNumsArr.length < 7){
//         luckyNumsArr.push(Math.floor(Math.random() * 49))
//      }
//     return luckyNumsArr;
// }
// let winnerNums = getLuckyNums();

// let getWinner = (users,winnerNums) =>{
//  for(let user of users){
//    if(user.numsList.every(num => winnerNums.includes(num))){
//       console.log(`თქვენ მოიგეთ !!! მოგებული ბილეთის სახელი და გვარია  ${user.fullName}`)
// // გიო ვინაიდან რენდომულად ვყრი მომგებიან რიცხვებს მასივში ძაან ნაკლები შანსია რო დაემთხვეს უსერის ციფრებს
// // მაგრამ ხელით რო ჩავყარო იგივე რიცხვები მუშაობს ყველანაირად გავტესტე :D
//    }
//  }
// }
// getWinner(users,winnerNums);


