var MyClass = /** @class */ (function () {
    function MyClass(_value) {
        this._value = _value;
    }
    Object.defineProperty(MyClass.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.add = function (value) {
        this._value += value;
        return this;
    };
    MyClass.prototype.minus = function (value) {
        this._value -= value;
        return this;
    };
    return MyClass;
}());
var clazz = new MyClass(10);
console.log(clazz.add(10).minus(5).value);
