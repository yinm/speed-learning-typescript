function show(value: number | boolean): void {
  if (typeof value === 'number') {
    console.log(value.toFixed(0))
  } else {
    console.log(value ? '真' : '偽')
  }
}

show(10.53)
show(false)
