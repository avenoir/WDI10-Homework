var Triangle = function ( sideA, sideB, sideC ) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;

  this.isValid = function () {
    if ( this.sideA + this.sideB > this.sideC &&
         this.sideB + this.sideC > this.sideA &&
         this.sideC + this.sideA > this.sideB ) {
      return true;
    }
  }

  this.isEquilateral = function () {
    if ( this.sideA === this.sideB && this.sideB === this.sideC ) {
      return "equilateral";
    }
  }

  this.isIsosceles = function () {
    if ( this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideB ) {
      return "isosceles";
    }
  }

  this.isScalene = function () {
    return "scalene";
  }

  if ( this.isValid() ) {
    this.type = this.isEquilateral() || this.isIsosceles() || this.isScalene();
  } else {
    this.type = "Invalid Triangle";
  }
}

var triangle = new Triangle( 4, 4, 4 ); // Equilateral
console.log( triangle );

var triangle2 = new Triangle( 8, 8, 4 ); // Isosceles
console.log( triangle2 );

var triangle3 = new Triangle( 4, 5, 6 ); // Scalene
console.log( triangle3 );

var triangle4 = new Triangle( 400, 4, 4 ); // Invalid
console.log( triangle4 );