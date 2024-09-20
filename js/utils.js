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
const shuffle = (data) => {
  let m = data.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = data[m];
    data[m] = data[i];
    data[i] = t;
  }

  return data;
};

export { isEscapeKey, debounce, shuffle };
