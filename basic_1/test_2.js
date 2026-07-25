function loginuser(username)
{
    if(username === undefined)
    {
        console.log("Enter the username");
        return
    }
    return `${username} just looged in`
}
console.log(loginuser());

