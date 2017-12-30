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
  protected clazz: string;

  constructor(name: string, sex: string, clazz: string) {
    super(name, sex);
    this.clazz = clazz;
  }

  show(): string {
    return super.show() + `${this.clazz}です。`;
  }
}

let p = new BusinessPerson('理央', '女', '主任');
console.log(p.show());