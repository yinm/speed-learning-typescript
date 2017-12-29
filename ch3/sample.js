function showTime(time) {
    if (time === void 0) { time = new Date(); }
    return '現在時刻:' + time.toLocaleString();
}
console.log(showTime());
