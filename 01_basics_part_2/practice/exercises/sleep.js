/**
 * Задание: написать функцию sleep, которая приостанавливает работу потока на
 * время переданное в аргументе. Время задаётся в секундах с точностью до 1 сек.
 * Если передан не валидный аргумент функция должна сразу завершить своё
 * выполнение и вернуть undefined.
 */

export default function sleep(time) {
  if (typeof time === 'number' && time % 1 === 0 && time >= 0) {
    const wakeUpTime = Date.now() + time * 1000;
    for (; wakeUpTime > Date.now(); ) {
      /* slepp*/
    }
  }
}
