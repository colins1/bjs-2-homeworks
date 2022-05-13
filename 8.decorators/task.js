function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.toString(); // получаем правильный хэш
      let idx = cache.findIndex((item)=> item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx].value;
      }

      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({ hash: hash, value: result }) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) {
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
