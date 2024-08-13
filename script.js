// let name = prompt ('What is your name?')
// let age = +prompt('How old are you?')
// let city = prompt('Where do you live?')

// const { log } = require("console")



// alert('Hello' + name + 'Your age' + age + 'Your city' + city)

// alert(`Hello ${name}, Your age ${age}, Your city ${city}`)




//  const sayHello = (name) => {
//    alert(`Hello ${name}`)
//  }

//  sayHello('Uzbek')



// let user = {
//     name: 'Uzbek',
//     surname: 'Uzbekovich'
// }

// user.age = 33
// delete user.name

// console.log(user);



// let num1 = +prompt('write first number')
// let num2 = +prompt('write second number')

// if(num1 > num2) {
//     alert (`first number bigger than second `) 
// }else if(num1 < num2) {
//     alert (`second number bigger than first `) 
// }else  {
//     alert (`equal`)
// }
   




// let number = +prompt('write a number')

// if(number == 0) {
//     alert('number equal to 0')
// } else if(number % 2 == 0) {
//     alert('odd')
// } else {
//     alert('even')
// }




let secretNumber = Math.floor(Math.random() * 11)
let guess = +prompt('Guess a number from 1 to 10')

if(guess == secretNumber) {
    alert('congratulations')
} else {
    alert('Wrong')
} 


