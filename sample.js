var Counter = function () {
    var _this = this;
    this.count = 0;
    setInterval(function () {
        _this.count++;
        console.log(_this.count);
    }, 1000);
};
Counter();
