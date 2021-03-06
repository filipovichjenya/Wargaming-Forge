/* eslint-disable no-else-return */
/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

const smoosh = function(arr, result = []) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        smoosh(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }

    return result;
  } else {
    throw new SyntaxError('argument should be an array');
  }
};

const squeeze = function(arr) {
  if (Array.isArray(arr)) {
    const flat = function(array, result = []) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].length > 0) {
          flat(array[i], result);
        } else {
          result.push(array[i]);
        }
      }
      return result;
    };

    arr.splice(0, arr.length, ...flat(arr));
    return arr;
  } else {
    throw new SyntaxError('argument should be an array');
  }
};

export { smoosh, squeeze };
