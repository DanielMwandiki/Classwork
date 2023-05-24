class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(iterable) {
      const group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  }

const group = new Group();

group.add(1);
group.add(2);
group.add(3);

console.log(group.has(2)); 
console.log(group.has(4)); 

group.delete(2);
console.log(group.has(2)); 

const group2 = Group.from([4, 5, 6]);
console.log(group2.has(5)); 


