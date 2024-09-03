"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
   if(discriminant < 0){
    return arr;
  }
   else if(discriminant === 0){
    return [(-b/(2*a))];
   }
   else if(discriminant > 0){
    return [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
 }
}

console.log(solveEquation( 6, 6, 1));



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100/12;
  let backSum = amount - contribution;
  let paymentMonth = backSum * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let totalPayment = paymentMonth * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}

console.log(calculateTotalMortgage(10, 1000, 50000, 12));