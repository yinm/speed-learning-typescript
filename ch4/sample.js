function merge(obj1, obj2) {
    var result = {};
    for (var key in obj1) {
        result[key] = obj1[key];
    }
    for (var key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}
var Book = /** @class */ (function () {
    function Book(title, price) {
        this.title = title;
        this.price = price;
    }
    Book.prototype.toString = function () {
        return this.title + " " + this.price;
    };
    return Book;
}());
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.debug = function () {
        console.log(this.toString());
    };
    return Logger;
}());
var m = merge(new Book('JavaScript本格入門', 2980), new Logger());
console.log(m);
