/**
 * @description First challenge: should find the sum of all the multiples of 3 or 5 given a number
 * @param number The number to find the multiples
 */
function fiboEvenSum(n:number) {
    let fibResult:number = 1;
    if(n == 1){
      return fibResult;
    } else if (n ==2) { 
      return fibResult + fiboEvenSum(n-1);
    } else {
        return fiboEvenSum(n-1) + fiboEvenSum(n-2);
    }
}

console.log(fiboEvenSum(1))
console.log(fiboEvenSum(8))
console.log(fiboEvenSum(10))
console.log(fiboEvenSum(34))
console.log(fiboEvenSum(60))