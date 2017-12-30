var MyGenerics = /** @class */ (function () {
    function MyGenerics() {
    }
    MyGenerics.prototype.getValue = function () {
        return this.value;
    };
    return MyGenerics;
}());
var g = new MyGenerics();
g.value = 'Hoge';
console.log(g.getValue());
