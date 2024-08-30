import { getRandomInteger, getRandomUniqueInteger, getRandomArrayElement } from '../utils.js';
import { createUserComments } from './comments-data.js';

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
const createPhotoDescription = () => ({
  id: generateDescriptionId(),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: createUserComments(),
});

// функция создание массива из 25 сгенерированных объектов
const createDescrArray = () => Array.from({length: 25}, createPhotoDescription);

const mockupPictures = createDescrArray();

export { mockupPictures };
