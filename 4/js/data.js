import { getRandomInteger, getRandomUniqueInteger, getRandomArrayElement } from './util.js';
import { createCommentMessage } from './comment-text.js';

const DESCRIPTION = [
  'Сегодняшний закат..<3',
  'Наконец-то встретились',
  'Кто молодец?',
  'Семь раз отмерь - один раз отрежь',
  'Даже не верится, что уже прошло 5 лет',
  '#лето2024',
  'Сегодня наш день!',
  'Целых 3 года вместе',
  'Завтрак <3',
];

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
const generateDescriptionId = getRandomUniqueInteger(1, 25);
const generatePhotoId = getRandomUniqueInteger(1, 25);
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

// создание объекта описания фото
function createPhotoDescription () {
  return {
    id: generateDescriptionId(),
    url: `photos/${ generatePhotoId() }.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: createUserComments(),
  };
}

// создание массива из 25 сгенерированных объектов
const createDescrArray = () => Array.from({length: 25}, createPhotoDescription);

export { createDescrArray };
