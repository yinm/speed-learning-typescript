class Person {
  private name: string
  private sex: string

  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }

  public show(): string {
    return `${this.name}は${this.sex}です`
  }
}

let p = new Person('りお', '女')
console.log(p.show())
console.log(p.name)
