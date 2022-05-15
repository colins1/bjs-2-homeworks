function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.toString();
      let idx = cache.findIndex((item)=> item.hash == hash);
      if (idx !== -1 ) {
          console.log("Из кэша: " + cache[idx].value);
          return "Из кэша: " + cache[idx].value;
      }

      let result = func(...args);
      cache.push({ hash: hash, value: result }) ;
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = 'first';

  function wrapper(...args) {
    if (flag === false) {
      flag = true
      timeout = setTimeout (() => {
        func(...args);
        flag = false
      }, ms)
    } else if (flag != 'first') {
      clearTimeout (timeout)
      timeout = setTimeout (() => func(...args), ms)
    } else {
      func(...args)
      flag = false
    }
  }
  return wrapper;
}

function debounceDecorator2(debounceDecoratorNew) {
  let count = 0;
  function wrapper(...args) {
    wrapper.count = count++;
    return debounceDecoratorNew(...args);
  }
  return wrapper;
}
