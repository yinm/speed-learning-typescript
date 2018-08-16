var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059";
    };
    return Person;
}());
var p = new Person('りお', '女');
console.log(p.show());
console.log(p.name);
