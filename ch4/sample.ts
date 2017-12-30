namespace MainApp {
  export class Hoge { name: string; }
  export function foo() { console.log('foo'); }
}

let h = new MainApp.Hoge();
console.log(h);
MainApp.foo();