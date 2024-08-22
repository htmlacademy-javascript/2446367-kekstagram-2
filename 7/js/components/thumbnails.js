import { mockupPictures } from '../data/mocks-data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictureThumbnails = () => {
  const thumbnailsListFragment = document.createDocumentFragment();

  mockupPictures.forEach(({id, url, description, likes, comments}) => {
    const thumbnailElement = pictureTemplate.cloneNode(true);

    thumbnailElement.dataset.pictureId = id;

    const thumbnailElementImg = thumbnailElement.querySelector('.picture__img');
    thumbnailElementImg.src = url;
    thumbnailElementImg.alt = description;

    thumbnailElement.querySelector('.picture__likes').textContent = likes;

    if (comments !== 'Комментариев пока нет') {
      thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
    } else {
      thumbnailElement.querySelector('.picture__comments').textContent = 0;
    }

    thumbnailsListFragment.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(thumbnailsListFragment);
};

export {renderPictureThumbnails, picturesContainer};
