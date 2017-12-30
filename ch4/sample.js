var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hoge = /** @class */ (function () {
    function Hoge() {
    }
    return Hoge;
}());
var FooBar = /** @class */ (function (_super) {
    __extends(FooBar, _super);
    function FooBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FooBar;
}(Hoge));
var MyGenerics = /** @class */ (function () {
    function MyGenerics() {
    }
    MyGenerics.prototype.getValue = function () {
        return this.value;
    };
    return MyGenerics;
}());
var g = new MyGenerics();
g.value = new FooBar();
console.log(g.getValue());
