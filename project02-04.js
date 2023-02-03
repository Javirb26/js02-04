/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Javier Ballester
      Date: 01/28/2023

      Filename: project02-04.js
 */
 
// Declaring constants 
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Event handler for each input control
document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;



// Display total cost
function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

// Add the cost of each dish
   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   // innerHTML for cost
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   // Combine cost and sales tax
   tax = cost * SALES_TAX;
 
   // innerHTML for tax
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   // combine total cost and tax
   totalCost = cost + tax;

   // innerHTML for totalCost
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);


}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
    
     
 }
