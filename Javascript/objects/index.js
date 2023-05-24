function deepEqual(value1, value2) {
  
    if (value1 === value2) {
      return true;
    }
    

    if (value1 == null || typeof value1 != "object" ||
        value2 == null || typeof value2 != "object") {
      return false;
    }
  

    let props1 = Object.keys(value1);
    let props2 = Object.keys(value2);

    if (props1.length !== props2.length) {
      return false;
    }
  
    for (let prop of props1) {
      if (!props2.includes(prop) || !deepEqual(value1[prop], value2[prop])) {
        return false;
      }
    }
 
    return true;
  }

  let obj1 = {a: 1, b: "hello", c: {d: [2, 4, 6]}};
  let obj2 = {a: 1, b: "hello", c: {d: [2, 4, 6]}};
  let obj3 = {a: 1, b: "hello", c: {d: [2, 4, 8]}};
  
  console.log(deepEqual(obj1, obj2));