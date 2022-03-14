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
