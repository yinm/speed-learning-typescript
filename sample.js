var MyGenerics = /** @class */ (function () {
    function MyGenerics() {
    }
    // T型の値を返すメソッド
    MyGenerics.prototype.getValue = function () {
        return this.value;
    };
    return MyGenerics;
}());
// MyGenericsクラスにstring型を割り当て
var g = new MyGenerics();
g.value = 'hoge';
console.log(g.getValue());
