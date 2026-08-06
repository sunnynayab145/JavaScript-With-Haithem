let array = ["CaptainAmerica","spiderMan","IronMan","Baky"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
   // console.log(element);
}

let index = 0;
while(index <= 10)
{
    // console.log(`value of index is : ${index}`);
    index = index + 1
}

const arr = [1,2,3,4,5,6]
for(const num of arr)
{  
    //console.log(num);
}

const greet = "hello"
for(const greete of greet)
{
//     console.log(`each char is ${greete}`);
//    console.log("The Char in This String is : ", greete);
}


const map = new Map()
map.set(`IN`,"India")
map.set(`USA`,"United States ")
map.set(`FR`,"France")
map.set(`In`,"India")

for(const [key,value] of map)
{
   // console.log(key, `:-`,value);
}

const myobj = {
    game1 : "NFS",
    game2 : "Spidy"
}

for(const [key,value] of myobj)
{
   // console.log(key,":-",value);
}
 
// for-in loop 
const myobj1 = 
{
    js : "javascript",
    cpp : "c++",
    rb : "swift by apple" 
}
for(const key in myobj1)
{
    console.log(`${key} extension file ---> ${myobj1[key]}`);
}

const myObj = 
{
    js : "javascript",
    cpp : "c++",
    rb : "swift by apple" 
}
for(const value in myObj)
{
    console.log(`---> extension ${myObj[key]}`);
}


const coding = ["javascript","c++","java","python","swift","kotlin","ruby"]
coding.forEach((value) => 
{
    //console.table(value)
})
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.table(item.languageFileName);
} )