import { getRandomInteger, getRandomArrayElement } from '../util.js';

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// генерация текста комментария
function createCommentMessage() {
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

export { createCommentMessage };
