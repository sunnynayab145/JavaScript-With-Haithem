function max(a,b,c)
{
    if(a>b && a > c ) 
        return a;
    else if(b > a && b > c )
        return b;
    else
        return c;
}
console.log("Max Number is : ", max(10,20,30));
