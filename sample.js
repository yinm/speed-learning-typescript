function process(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(1);
    }
}
console.log(process('aaaaa'));
console.log(process(12345.6789));
