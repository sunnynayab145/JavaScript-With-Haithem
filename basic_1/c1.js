function maxNum(maxmarks)
{
    return students
        .filter(student => student.marks > 80)
        .map(students => ({name : students.name,marks : students.marks}));
}

let students = [
    {name: "Ali", marks: 85},
    {name: "Ahmed", marks: 70},
    {name: "Hamza", marks: 92},
    {name: "Usman", marks: 78}
];
console.log("High score is : " , maxNum(students));



// (function () {
//     console.log("I Run Immediately :");
// })();

// (function ()
// {
//     var x = 10;
//     console.log(x);
// })();
// console.log(typeof x);

// (function (a,b)
// {
//   console.log(a+b);

// })(5,5);

const fun = (function ()
{
    for (let i = 0 ; i < 4 ; i++)
    {
        result = i * 2;
    }
    return result;

})();
console.log(fun);
