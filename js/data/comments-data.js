import { getRandomInteger, getRandomUniqueInteger, getRandomArrayElement } from '../utils.js';

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

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// генерация текста комментария
const createCommentMessage = () => {
  const counter = getRandomInteger(1, 2);
  let message = getRandomArrayElement(MESSAGE);

  if (counter > 1) {
    const temp = getRandomArrayElement(MESSAGE);
    if (message !== temp) {
      message += ` ${temp}`;
    }
  }

  return message;
};

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
