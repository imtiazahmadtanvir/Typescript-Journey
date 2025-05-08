"use strict";
//Problem 6: Most Expensive Product
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((max, product) => product.price > max.price ? product : max);
}
// Example
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products)); // { name: "Bag", price: 50 }
