function show(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed(0));
    }
    else {
        console.log(value ? 'true' : 'false');
    }
}
show(10.33);
show(false);
