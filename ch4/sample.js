var MainApp;
(function (MainApp) {
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    MainApp.Hoge = Hoge;
    function foo() { console.log('foo'); }
    MainApp.foo = foo;
})(MainApp || (MainApp = {}));
var h = new MainApp.Hoge();
console.log(h);
MainApp.foo();
