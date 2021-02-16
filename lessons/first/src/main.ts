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
  
  console.log(multiplesOf3and5(1000));
  multiplesOf3and5(1000);