// проверка нажатой клавиши
const isEscapeKey = (evt) => evt.key === 'Escape';

// устранение "дребезга"
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

// тасование Фишера-Йетса
const shuffle = (array) => {
  let m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export { isEscapeKey, debounce, shuffle };
