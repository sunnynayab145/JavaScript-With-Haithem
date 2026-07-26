// let = students = ["haithem","ali","ahamd","norean","shoaib"]
// console.log(students[0]);
// console.log(students.length-1);

// students.push("Bilal");
// students.unshift("Asad");

// students.shift();
// students.pop();

// console.log(students);

// let students = ["haithem","ali","ahamd","norean","shoaib"]
// for(let i = 0 ; i < students.length ; i++)
// {
//     console.log(students[i]);
// }

// let fruits = "apple mango orange pineapple cucumbar";
// let arr = fruits.split(" ");
// console.log(arr);

// // console.log(numbers.slice(0,7));

// numbers.splice(2,100)
// console.log(numbers);

// let result = num.map(function(nums)
// {
//     return nums*2;
// });
// console.log(result);

// let num = [10,11,12,13,14,15,17];
// results = num.map(num => num*2);
// console.log(results);

// console.log(name.trim());

// let name = "Haithem"
// let reverse = name.split("").reverse().join();
// console.log(reverse);

// creating objects 

// console.log(student);
// console.log(typeof student);

// let student = {
//     name : "Haithem",
//     age : 20,
//     Cgpa : 3.46,
//     city : "BahawalNagar"
// };
// let {name,age,Cgpa,city} = student;
// console.log(name);
// console.log(age);
// console.log(Cgpa);
// console.log(city);

let student = {
    name : "Haithem",
    age : 20,
    Cgpa : 3.46,
    city : "BahawalNagar"
};
let {name,...others} = student;

console.log(name);
console.log(others);



