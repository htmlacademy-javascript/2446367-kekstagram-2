import { MAX_HASHTAGS_COUNT, MAX_HASHTAGS_SYMBOLS } from '../../data.js';

// переменная для сообщения об ошибке валидации
let errorMessage = '';

const hasError = () => errorMessage;

const isValidHashtag = (value) => {
  errorMessage = '';

  const validateRegExp = /^[#a-zа-яё0-9]{0,}$/i;
  const inputValue = value.toLowerCase().trim();

  if (inputValue.length === 0) {
    return true;
  }

  const inputValues = inputValue.split(/\s+/);

  const rules = [
    {
      check: inputValues.some((item) => item === '#'),
      error: 'Хэштег не может состоять только из одной решётки',
    },
    {
      check: inputValues.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами',
    },
    {
      check: inputValues.some((item) => item[0] !== '#'),
      error: 'Хэштег начинается с символа # (решётка)',
    },
    {
      check: inputValues.some((item, index, array) => array.includes(item, index + 1)),
      error: 'Один и тот же хэштег не может быть использован дважды',
    },
    {
      check: inputValues.some((item) => item.length > MAX_HASHTAGS_SYMBOLS),
      error: `Максимальная длина одного хештега ${MAX_HASHTAGS_SYMBOLS}, включая решётку`,
    },
    {
      check: inputValues.length > MAX_HASHTAGS_COUNT,
      error: `Нельзя указать больше ${MAX_HASHTAGS_COUNT} хэштегов`,
    },
    {
      check: inputValues.some((item) => !validateRegExp.test(item)),
      error: 'Хэштег содержит недопустимые символы',
    },
  ];

  rules.forEach((rule) => {
    if (rule.check === true) {
      errorMessage +=
      `<div>${rule.error}</div>`;
    }
  });

  return rules.every((rule) => rule.check === false);
};

export { hasError, isValidHashtag };
