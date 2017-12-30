class Person {
  constructor(private name: string, private sex: string) {
  }

  public show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

let p = new Person('理央', '女');
console.log(p.show());
