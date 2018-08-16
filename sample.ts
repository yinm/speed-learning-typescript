class Person {
  constructor(
    protected name: string,
    protected sex: string
  ){
  }

  show(): string {
    return `${this.name}は${this.sex}です。`
  }
}

class BusinessPerson extends Person {
  constructor(
    name: string,
    sex: string,
    protected clazz: string
  ){
    super(name, sex)
  }

  show(): string {
    return super.show() + `${this.clazz}です。`
  }
}

const p = new BusinessPerson('理央', '女', '主任')
console.log(p.show())
