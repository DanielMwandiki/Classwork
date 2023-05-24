function divisibleBySix(num) {

    if (num < 6) {
      return false;
    }
    

    if (num === 6) {
      return true;
    }
    

    return divisibleBySix(num - 6);
  }
  console.log(divisibleBySix(8));
  console.log(divisibleBySix(12));