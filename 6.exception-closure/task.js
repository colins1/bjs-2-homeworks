function parseCount(number) {
  const parsed = parseInt(number);
  if (isNaN(parsed)) {
      const divideError = new Error("Невалидное значение");
      throw divideError;
  } else {
    return parsed;
  }
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
    if (a + b < c || a + c < b || c + b < a) {
      const divideError1 = new Error("Треугольник с такими сторонами не существует");
      throw divideError1;
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
      const tria = new Triangle(a, b, c);
      return tria;
    }
    catch (e1) {
      return e1;
    }
}
