function showTime(time) {
    if (time === undefined) {
        return "\u73FE\u5728\u6642\u523B: " + (new Date()).toLocaleString();
    }
    else {
        return "\u73FE\u5728\u6642\u523B: " + time.toLocaleString();
    }
}
console.log(showTime());
