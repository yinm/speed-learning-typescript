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
var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
    };
    return Person;
}());
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    function BusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessPerson.prototype.work = function () {
        return this.name + "\u306F\u30C6\u30AD\u30D1\u30AD\u50CD\u304D\u307E\u3059\u3002";
    };
    return BusinessPerson;
}(Person));
var p = new BusinessPerson('理央', '女');
console.log(p.show());
console.log(p.work());
