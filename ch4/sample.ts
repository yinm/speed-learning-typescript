class Person {
  protected name: string;
  protected sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

class BusinessPerson extends Person {
  work(): string {
    return `${this.name}はテキパキ働きます。`;
  }
}

let p = new BusinessPerson('理央', '女');
console.log(p.show());
console.log(p.work());