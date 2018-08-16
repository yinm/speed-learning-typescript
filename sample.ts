class MyClass {
  hoge() {}
  foo() {}
}

// オブジェクト型リテラルがなければ、すべてを使える
const y = new MyClass()
y.hoge()
y.foo()

// オブジェクト型リテラルがあれば、不要な機能にアクセスできないようにできる
const x: { hoge() } = new MyClass()
x.hoge()
x.foo()
