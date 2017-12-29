var Counter = function () {
    var _this = this;
    _this.count = 0;
    setInterval(function () {
        console.log(_this.count);
        _this.count++;
    }, 1000);
};
Counter();
