
// problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar)
console.log(otherRandomCar)

// the out put for the first log will be 'tesla'
// the output for the second log will be 'mercedes'


// problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);// this is the key to the dict you cant log it by reference you have to log by value 
console.log(otherName);

// this will print nothing for name because the key itself has no value witbhout the value 
// this will log elon 


// problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  // this wont do anything because password is isnt in a dictionary

console.log(password);
console.log(hashedPassword);

// the first log will be '12345'
// the second log will be undefined 


// problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//2
const [,,,second] = numbers;//5
const [,,,,,,,,third] = numbers;//2

console.log(first == second);//false
console.log(first == third);//true


// the first log will log false because the first and second varibe arnt the same value 
// the second log will be true becuase the first and third value are the the same in value therefore default tto true 

// problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// the first thing that will log will be the string value 
// the second thing that gets logged is the array thats second key [ 1, 5, 1, 8, 3, 3 ]
// the third thing thats logged is the secondkey arr at position 0 wihch is 1
// the last thing that is logged is 5 becuase we put one comma it gets the second item in tje array.


