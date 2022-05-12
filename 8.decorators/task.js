function cachingDecoratorNew(func) {
  let cache = []
  function wrapper (...arg) {
    cache.push({hash: arg.toString(), value: func(...arg)})
    let result = func(...arg)
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
}

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
