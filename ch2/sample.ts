interface StringMap {
  [index: string]: string;
}

let obj: StringMap = {
  'hoge': 'ほげ',
  'foo': 'ふぅ',
  'bar': 'ばぁ',
};

obj.piyo = 'ぴよ';
console.log(obj);