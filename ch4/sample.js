var Wings;
(function (Wings) {
    var MainApp;
    (function (MainApp) {
        var Hoge = /** @class */ (function () {
            function Hoge() {
            }
            return Hoge;
        }());
        MainApp.Hoge = Hoge;
        function foo() { console.log('foooo'); }
        MainApp.foo = foo;
    })(MainApp = Wings.MainApp || (Wings.MainApp = {}));
})(Wings || (Wings = {}));
var h = new Wings.MainApp.Hoge();
console.log(h);
Wings.MainApp.foo();
