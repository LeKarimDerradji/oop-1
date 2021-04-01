class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    show() {
      console.log(`(${this.x}, ${this.y})`)
    }
    isEqual(point) {
      return this.x === point.x && this.y === point.y ? true : false
    }
    distance(point) {
        return Math.sqrt( this.x*this.y + this.x*this.x )
    }
  } 
  
 
exports.Point = Point
