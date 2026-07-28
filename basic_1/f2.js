function checkvowels(str)
{
    let count = 0;
    for(let ch of str.toLowerCase())
    {
        if 
        (
            ch === "a"||
            ch === "e"||
            ch === "i"||
            ch === "o"||
            ch === "u"
        )
        {
            count++;
        }
    }
    return count;
}
console.log("The Total Vowels in the word is : " , checkvowels("Haithem"));

