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

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
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

// получение случайного числа из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// получение случайного уникального числа из диапазона
function getRandomUniqueInteger (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// получение случайного элемента массива
function getRandomArrayElement (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

// получение случайных элементов ID
const generateDescriptionId = getRandomUniqueInteger(1, 25);
const generatePhotoId = getRandomUniqueInteger(1, 25);
const generateUserId = getRandomUniqueInteger(1, 999);

// генерация текста комментария
function createCommentMessage () {
  const counter = getRandomInteger(1, 2);
  let message = getRandomArrayElement(MESSAGE);

  if (counter > 1) {
    const temp = getRandomArrayElement(MESSAGE);
    if (message !== temp) {
      message += ` ${temp}`;
    }
  }

  return message;
}

// создание объекта комментария пользователя
function createUserComments () {
  const count = getRandomInteger(0, 30);
  const commentArr = [];

  if (count === 0) {
    return 'Комментариев пока нет';
  }

  for (let i = 0; i <= count; i++) {
    const commentObj = {
      id: generateUserId(),
      avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
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
// eslint-disable-next-line no-unused-vars
const descrArray = Array.from({length: 25}, createPhotoDescription);
