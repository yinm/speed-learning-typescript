var MainApp;
(function (MainApp) {
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    MainApp.Hoge = Hoge;
    function foo() { }
    MainApp.foo = foo;
})(MainApp || (MainApp = {}));
var h = new MainApp.Hoge();
MainApp.foo();
