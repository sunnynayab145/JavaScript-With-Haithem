let LibraryName = "----------City Libraray System----------";

function createBook(DataTransferItemList,author = "Unknown Author" , year = 2024)
{
    return {title , author , year , borrowed : false }
}

function addBooktoshelf(shelf,bookobj)
{
    shelf.push(bookobj);
    return shelf;
}

function printInFo({title,author,year})
{
    console.log(`${title} by ${author}, ${year}`);
}

let shelf = [];
shelf = addBooktoshelf(shelf , createBook("Atomic Habits","James Clear"));
shelf = addBooktoshelf(shelf, createBook("1984"));

printInFo(shelf[0]);
printInFo(shelf[1]);

function checkscope()
{
    consloe.log(count);
    var count = 10;
    if(true)
    {
        let count = 20;
        console.log(count);
    }
    console.log(count);
}
function createBorrowTracker()
{
    let borrowcountcount = 0 ;
    return function ()
    {
        borrowcount++;
        return `${LibraryName} : total borrowed = ${borrowcount}`;
    };
}
const trackborrow = createBorrowTracker();
console.log(trackborrow());
console.log(trackborrow());
console.log(trackborrow());

const librarian = {
    name : "Mr.Haithem",
}