const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes", "electronics"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma", "gym"],
    },
    {
      name: "Chris",
      male: true,
      age: 20,
      hobbies: ["cycling", "football", "pool", "tv"],
    },
    {
      name: "Claire",
      male: false,
      age: 27,
      hobbies: ["jogging", "travelling"],
    },
    {
      name: "Stephanie",
      male: false,
      age: 26,
      hobbies: ["writing", "piano", "books", "opera"],
    },
    {
      name: "Herman",
      male: true,
      age: 31,
      hobbies: ["gym", "weights"],
    },
    {
      name: "Trevor",
      male: true,
      age: 19,
      hobbies: ["parkour"],
    },
  ];
  
  
// Complete the .filter method to filter out only the objects that have an age from
// (and including) 26 to (and including) 28 and at least 3 hobbies


  
const filteredPeople = people.filter(people => people.age >= 26 && people.age <= 28 && people.hobbies.length >= 3)

//console.log(filteredPeople);


//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
// 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 2: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
// length: 3


//////////////////////////////////////////////////////////////////////////////////


//Filter out the objects who are male and have a name of exactly 6 characters


const filteredPeople2 = people.filter(peopl => peopl.male === true && peopl.name.length === 6);


//console.log(filteredPeople2);


//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 2: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
// length: 3


//////////////////////////////////////////////////////////////////////////////////


//Filter out the objects that have "gym" included in their hobbies


const filteredPeople3 = people.filter(people => people.hobbies.includes("gym"));


//console.log(filteredPeople3);


//this should log:
// (2) [{…}, {…}]
// 0: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// length: 2

const fruits = [
    "Banana",
    "Apple",
    "Pear",
    "Mango",
    "Melon",
    "Pineapple",
    "Grapes",
    "Peach",
];


// Complete the .map method to return 1 random character from each element in uppercase


const mappedFruits = fruits.map(fruit => fruit.charAt(Math.floor(Math.random()*fruit.length)).toUpperCase());


//console.log(mappedFruits);


// This should log something like this:


// (8) ['A', 'P', 'E', 'M', 'E', 'E', 'R', 'H']
const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23];

const mappedArray = numArray.map(num => num >= 50 ? num*5 : num*10);


//console.log(mappedArray);


//fullfør .map method funksjonen:
//hvis tallet er over 50, return tallet ganget med 5,
//hvis tallet er under 50, return tallet ganget med 10


// consol skal logge dette hvis du har gjort rett:
// Array(12)
// 0: 320
// 1: 110
// 2: 40
// 3: 335
// 4: 485
// 5: 305
// 6: 260
// 7: 120
// 8: 260
// 9: 80
// 10: 350
// 11: 230

const names = [
    "Bradley",
    "Mae",
    "Oscar",
    "Isac",
    "Alexandra",
    "Margie",
    "Rob",
    "Clay",
    "Timothy",
    "Kennedy",
    "Rita",
    "Scott",
    "Sarah",
    "Felicia",
    "Gill",
    "Gavin",
    "Nellie",
    "Hope",
];


const hobbies = [
    "cycling",
    "football",
    "pool",
    "jogging",
    "travelling",
    "dancing",
    "movies",
    "coffee",
    "skateboarding",
    "guitar",
    "concerts",
    "Dancing",
    "movies",
    "coding",
    "games",
    "Books",
    "memes",
    "electronics",
    "dancing",
    "boxing",
    "wrestling",
    "mma",
    "gym",
    "cycling",
    "football",
    "pool",
    "tv",
    "writing",
    "piano",
    "books",
    "opera",
];


// Use whatever tools you deem necessary to accomplish the following:


// Generate an object for each name in the names array formatted as follows:
// {
//     name: (the name from the name array),
//     age: (generate a random age from 18-50),
//     hobbies: (randomly generate an array of 3 hobbies from the hobbies array. PS make
//               sure the hobbies are 3 unique ones)
// }

const filterdHobbies = hobbies.map(hobby => hobby.toLowerCase())

//console.log(filterdHobbies)

function removeDuplicate(data){
    noDuplicate = []
    data.forEach((element) => {
        if (!noDuplicate.includes(element)){
            noDuplicate.push(element)
        }
    });
    return noDuplicate
}


//console.log(removeDuplicate(filterdHobbies))

function randomHobby(hobbiesArray, hobbyAmount){
  let rndHobbyArray = []
  while(rndHobbyArray.length < hobbyAmount){
    rndHobby = hobbiesArray[Math.floor(Math.random() * hobbiesArray.length)]
    if(!rndHobbyArray.includes(rndHobby)){
      rndHobbyArray.push(rndHobby)
    }
  }
  return rndHobbyArray
}

// example:

function realHumans(names, array){
    let people = []
    for (let name of names){
        let person = {}
        person["name"] = name
        person["age"] = Math.floor(Math.random() * 32 + 18)
        person["hobbies"] =  randomHobby(array, 3)
        people.push(person)
    }
    return people
}

//console.log(realHumans(names, filterdHobbies))


// {
//     name: "Scott"
//     age: 31
//     hobbies: ["books", "electronics", "guitar"]
// }


// PS: The hobbies array has to be cleaned up! Write code to remove duplicates before using it.
// Beware the capitalized duplicates as well.


// Good luck!
//----------------------------------------------------------------  

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}

//console.log(rowSumOddNumbers(6))
//console.log(rowSumOddNumbers(9))
//console.log(rowSumOddNumbers(3))

function descendingOrder(n){
  return n.toString().split("").sort(function(a,b){return b - a}).join("")
}

//console.log(descendingOrder(347384))
//console.log(descendingOrder(123456789))


let my2Promise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("what about reject"); }, 3000);
});

// console.log(my2Promise.then(function(value) {
//   console.log(value);
// }))

// this is a new promise and the value returned is value next this holds
// fetch('http://jsonplaceholder.typicode.com/posts/1')
// .then(response => {console.log(response); return response.json()})
// .then(json => console.log(json))

// myPromise
// .then(value => console.log(value))
// .catch(error => Error(error))

// const my3promise = myPromise
// .then(value=>value)
// .catch(error=>Error(error))


/*so yeah promises are kinda weird and hard. but the important thing is remember to resolve it.
if i ever make something that others need to wait for i must handle reject incase of failure so i can inform other of what has happend*/
const myPromise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    const dice = Math.random()*10
    if(dice <=5){
      resolve("this is me being a success")};
    reject("i have been rejected");
  }, 1000);
});


async function promise(){
  let value = await myPromise
  .catch(error => Error(error))
  console.log(value)
}

promise()

function findEvenIndex(arr)
{
  let leftnum = 0
  let rightnum = 0
  let equalnum = 0
  for (let i = 0; i < arr.length; i++){
    let left = arr.slice(0,i)
    let right = arr.slice(i + 1, arr.length + 1)
    for(let lefti = 0; lefti < left.length; lefti++){
      leftnum += left[lefti]
    }
    for(let righti = 0; righti < right.length; righti++){
      rightnum += right[righti]
    }
    if(rightnum === leftnum){
      equalnum = leftnum + rightnum
      return `total sum ${equalnum}, found index ${i}`
    }
    leftnum = 0
    rightnum = 0
  }
  return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]), "The array was: [1,2,3,4,3,2,1] index 3 correct i want 6 logged");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");

//promp sort trough friends list array and filter out everyone that has a name not of 4 character length.
function friend(friends){
  let realFriends = [];
  for(let i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      realFriends.push(friends[i]);      
    }
  }
  return realFriends;
}

//codewars two integers positive negative find all numbers between them add all of the tgheter return
function getTotalNumBetween(a,b){
  let max = Math.max(a,b)
  console.log(max)
  let min = Math.min(a,b)
  console.log(min)
  //woowie Sum of Integers Formula fancy why is it this inclusive 1
  return (max - min + 1) * (max + min) / 2
}

console.log(getTotalNumBetween(0,1))    // 1
console.log(getTotalNumBetween(-10,-5))   //-45
console.log(getTotalNumBetween(5,-1))   //14

function spinWords(string){
  array = string.split(" ")
  let newString = []
  for (let i = 0; i < array.length; i++) {
    if(array[i].length >= 5){
      newString.push([...array[i]].reverse().join(""))
    }else{
      newString.push(array[i])
    }
  }
  return newString.join(" ")
}

console.log(spinWords( "Hey fellow warriors" )) //=> returns "Hey wollef sroirraw" 
console.log(spinWords( "This is a test")) //=> returns "This is a test" 
console.log(spinWords( "This is another test" )) //=> returns "This is rehtona test"

function likes(names) {
  if(names.length === 1){
  return `${names[0]} likes this`
  }
  else if(names.length === 2){
  return `${names[0]} and ${names[1]} likes this`
  }
  else if(names.length === 3){
  return `${names[0]}, ${names[0]} and ${names[0]} likes this`
  }
  else if(names.length > 3){
  return `${names[0]}, ${names[0]} and ${names.length} likes this`
  }
  else{
  return `no one likes this`
  }
}


// complete the function
function solution(string) {
  let i = 0
  let char = ""
  while (i <= string.length){
    char = string.charAt(i)
    if(char === char.toUpperCase() && char !== char.toLowerCase()){
      string = string.slice(0,i) + " " + string.slice(i)
      i++
    }
    i++
  }
  return string
}

console.log(solution('camelCasing')) // 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest')) // 'camel Casing Test'

function pigIt(string){
  string = string.split(" ")
  let sample = /[a-z]/g
  latin = string.map(word => {
    char = word.charAt(0)
    if (sample.test(word)){
    word += char + "ay"
    word = word.slice(1,word.length)
    return word
    }
  })
  return latin.join(" ")
}

console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay'
console.log(pigIt('Pig latin, is cool!'))

function digPow(n, p){
  let startNum = n
  let totalSum = 0
  let k = 0
  n = (n.toString().split(""))
  for(let i = 0; i < n.length; i++){
    totalSum += Math.pow(n[i], p)
    p++
  }
  k = totalSum / startNum
  if(k % 1 === 0){
    return k
  }
  else {
    return -1
  }
}

console.log(digPow(89, 1))//, 1)
console.log(digPow(92, 1))//, -1)
console.log(digPow(46288, 3))//, 51)

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smily = []
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].charAt(0) === ":" || arr[i].charAt(0) === ";" )){
      if((arr[i].charAt(1) === "-" || arr[i].charAt(1) === "~" )){
        if((arr[i].charAt(2) === "D" || arr[i].charAt(2) === ")" )){
          smily.push(arr[i])
        }
      }
      else if(( arr[i].charAt(1) === "D" || arr[i].charAt(1) === ")" )){
        smily.push(arr[i])
      }
    }
  }  
  return smily
}

console.log(countSmileys([]                             ))//, 0);
console.log(countSmileys([':D',':~)',';~D',':)']        ))//, 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ))//, 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))//, 1);
console.log(countSmileys([":>" , ":(" , ":~>" , ":o)" , ";~D" , ":>" , ";~)"]))//: expected 3 to equal 2
console.log(countSmileys([":D" , ":~)" , ";~D" , ":)", "))"]))//, 4);