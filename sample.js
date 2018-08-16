function showTime(time) {
    if (time === void 0) { time = new Date(); }
    return "\u73FE\u5728\u6642\u523B: " + time.toLocaleString();
}
console.log(showTime());
