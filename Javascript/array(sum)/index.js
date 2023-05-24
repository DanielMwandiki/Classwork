function range(start, end, step = 1) {
    let arr = [];
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
    return arr;
  }
  
  function sum(arr) {
    let total = 0;
    for (let num of arr) {
      total += num;
    }
    return total;
  }

let myRange = range(1, 10, 2); 
let mySum = sum(myRange); 
console.log(mySum); 






