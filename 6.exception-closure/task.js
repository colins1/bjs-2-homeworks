function parseCount(number) {
  const parsed = parseInt(number);
  if (isNaN(parsed)) {
      throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(number) {
    try {
      return parseCount(number);
    }
    catch (e) {
        return e;
    }
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}

function getTriangle (a, b, c) {
  if (a + b < c || a + c < b || c + b < a) {
    let triangle = new function() {
      this.getPerimeter = function() { return "Ошибка! Треугольник не существует";};
      this.getArea = function() { return "Ошибка! Треугольник не существует";};
    };
    return triangle;
  }
  try {
      return new Triangle(a, b, c);
    }
    catch (e1) {
      return e1;
    }
}
