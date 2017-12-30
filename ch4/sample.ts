function merge<T, R>(obj1: T, obj2: R): T & R {
  let result = <T & R>{};

  for (let key in obj1) {
    (<any>result)[key] = obj1[key];
  }

  for (let key in obj2) {
    (<any>result)[key] = obj2[key];
  }

  return result;
}

class Book {
  constructor(private title: string, private price: number) {}

  toString() {
    return `${this.title} ${this.price}`;
  }
}

class Logger {
  debug() {
    console.log(this.toString());
  }
}

let m = merge(new Book('JavaScript本格入門', 2980), new Logger());
console.log(m);