class MyGenerics<T> {
  // T型のプロパティ
  value: T

  // T型の値を返すメソッド
  getValue(): T {
    return this.value
  }
}

// MyGenericsクラスにstring型を割り当て
const g = new MyGenerics<string>()

g.value = 'hoge'
console.log(g.getValue())
