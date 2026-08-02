const array = [1,2,3,4,5]

const intval = 0;
const result = array.reduce((acc , currval) => acc + currval,intval);

//console.log(result);

const shoppingcart = [

    {
        item : "js",
        price : 2999
    },
    {
        item : "py",
        price : 3999
    },
    {
        iteam : "mobile dev",
        price : 5999
    },
    {
        item: "data science",
        price: 12999
    },
]

const priceTopay = shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log("Grand Total : " ,priceTopay);
