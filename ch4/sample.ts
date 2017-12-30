namespace Wings.MainApp {
  export class Hoge {}
  export function foo() { console.log('foooo'); }
}

let h = new Wings.MainApp.Hoge();
console.log(h);
Wings.MainApp.foo();