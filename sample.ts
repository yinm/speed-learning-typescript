interface Figure {
  getArea(): number
}

class Triangle implements Figure {
  constructor(
    private width: number,
    private height: number
  ) {
  }

  getArea(): number {
    return this.width * this.height / 2
  }
}

const t = new Triangle(10, 5)
console.log(t.getArea())
