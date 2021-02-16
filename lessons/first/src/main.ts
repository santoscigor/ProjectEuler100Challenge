/**
 * @description First challenge: should find the sum of all the multiples of 3 or 5 given a number
 * @param number The number to find the multiples
 */

function multiplesOf3and5(number) {
    let counter = [];
    for(let i = 0; i < number; i++ ){
      if(i%3 === 0){
        counter.push(i);
      } else if(i%5 === 0) {
        counter.push(i);
      }
    }
    return counter.reduce((sum, number) => {
      return sum + number;
    })
}