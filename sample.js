var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.hoge = function () { };
    MyClass.prototype.foo = function () { };
    return MyClass;
}());
var y = new MyClass();
y.hoge();
y.foo();
var x = new MyClass();
x.hoge();
x.foo();
