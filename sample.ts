// Car型を定義
interface Car {
  type: string // プロパティのシグネチャ
  run(): void // メソッドのシグネチャ
}

// Car型の変数を宣言 (型注釈としてinterfaceを使う)
const c: Car = {
  type: 'トラック',
  run() {
    console.log(`${this.type}が走ります。`)
  }
}

c.run()
