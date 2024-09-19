import { setRandomButtonClick, setDiscussedButtonClick } from './filter.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');

const getActiveFilter = (data) => {
  const imgFiltersContainer = document.querySelector('.img-filters');
  const activeFilterElement = imgFiltersContainer.querySelector('.img-filters__button--active');

  if (activeFilterElement.id === 'filter-random') {
    data = setRandomButtonClick(data);
  }
  if (activeFilterElement.id === 'filter-discussed') {
    data = setDiscussedButtonClick(data);
  }
  return data;
};

const resetPicturesContainer = () => {
  const pictureContainerElements = picturesContainer.querySelectorAll('.picture');
  pictureContainerElements.forEach((item) => item.remove());
};

const renderPictureThumbnails = (pictureThumbnails) => {
  pictureThumbnails = getActiveFilter(pictureThumbnails.slice());
  resetPicturesContainer();

  const thumbnailsListFragment = document.createDocumentFragment();

  pictureThumbnails.forEach(({id, url, description, likes, comments}) => {
    const thumbnailElement = pictureTemplate.cloneNode(true);

    thumbnailElement.dataset.pictureId = id;

    const thumbnailElementImg = thumbnailElement.querySelector('.picture__img');
    thumbnailElementImg.src = url;
    thumbnailElementImg.alt = description;

    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments ? comments.length : 0;

    thumbnailsListFragment.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(thumbnailsListFragment);
};

export { renderPictureThumbnails };
