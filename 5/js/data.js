import { getRandomInteger, getRandomUniqueInteger, getRandomArrayElement } from './util.js';
import { createUserComments } from './comment/comment-data.js';

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

// получение случайных элементов ID
const generateDescriptionId = getRandomUniqueInteger(1, 25);
const generatePhotoId = getRandomUniqueInteger(1, 25);

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
