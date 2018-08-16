interface Car2 {
  (type: string): string
}

const c2: Car2 = function(type: string): string {
  return `車種は、${type}`
}


console.log(c2('軽自動車'))
