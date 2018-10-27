function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  } else {
    return value.toFixed(1)
  }
}

console.log(process('aaaaa'))
console.log(process(12345.6789))
