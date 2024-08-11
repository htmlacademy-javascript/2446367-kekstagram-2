import { getRandomInteger, getRandomUniqueInteger, getRandomArrayElement } from '../util.js';
import { createCommentMessage } from './comment-util.js';

const NAME = [
  'Саша',
  'Сергей',
  'Марина',
  'Вячеслав Владимирович',
  'Ярик',
  'Степа',
  'Наталья',
  'Ирина Александровна',
  'Василий',
  'Юля',
  'Маша',
  'Настя',
  'Никита',
];

// получение случайных элементов ID
const generateUserId = getRandomUniqueInteger(1, 999);

// создание объекта комментария пользователя
function createUserComments() {
  const count = getRandomInteger(0, 30);
  const commentArr = [];

  if (count === 0) {
    return 'Комментариев пока нет';
  }

  for (let i = 0; i <= count; i++) {
    const commentObj = {
      id: generateUserId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: createCommentMessage(),
      name: getRandomArrayElement(NAME),
    };
    commentArr.push(commentObj);
  }

  return commentArr;
}

export { createUserComments };
