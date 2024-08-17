import { createDescrArray } from './data.js';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const picturesThumbnails = createDescrArray();

const thumbnailsListFragment = document.createDocumentFragment();

picturesThumbnails.forEach(({url, description, likes, comments}) => {
  const thumbnailElement = pictureTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

  thumbnailsListFragment.appendChild(thumbnailElement);
});

picturesBlock.appendChild(thumbnailsListFragment);
