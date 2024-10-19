function parseCount(value) {
    let numbers = Number(value);
    if(isNaN(numbers)) {
     throw new Error ("Невалидное значение");
    } else {
    return Number.parseFloat(value);
  }
}


function validateCount(value) {
    try {
        return parseCount(value);
        } catch (error) {
        return error;
        }
}

console.log(validateCount("123"));
console.log(parseCount("привет"));


class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    if ( (sideOne + sideTwo) < sideThree || (sideTwo + sideThree) < sideOne || (sideOne + sideThree) < sideTwo) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }
  get perimeter() {
    this.perimeter = perimeter;
    return perimeter = this.sideOne + this.sideTwo + this.sideThree;
  }
  get area() {
    let p = this.perimeter / 2;
    return (Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree))).toFixed(3);
  }
}

function getTriangle(sideOne, sideTwo, sideThree) {
  try {
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch(error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      }
  }
}


console.log(getTriangle(1, 10, 3));