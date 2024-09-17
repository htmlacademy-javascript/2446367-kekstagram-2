import { shuffle } from '../utils.js';
import { RANDOM_PHOTO_COUNT } from '../data.js';

const imgFiltersContainer = document.querySelector('.img-filters');
const imgFiltersButtons = imgFiltersContainer.querySelectorAll('.img-filters__button');
const activeButtonClass = 'img-filters__button--active';

const showImgFilter = () => {
  imgFiltersContainer.classList.remove('img-filters--inactive');
};

const setRandomButtonClick = (data) => shuffle(data).slice(0, RANDOM_PHOTO_COUNT);

const compareComments = (elementA, elementB) => elementB.comments.length - elementA.comments.length;
const setDiscussedButtonClick = (data) => data.sort(compareComments);

const onFiltersButtonClick = (evt) => {
  const activeFilter = evt.target;

  imgFiltersButtons.forEach((item) => {
    item.classList.remove(activeButtonClass);
    activeFilter.classList.add(activeButtonClass);
  });
};

const changeFilter = (cb) => {
  imgFiltersContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.className === 'img-filters__button') {
      onFiltersButtonClick(evt);
      cb();
    }
  });
};

export {
  showImgFilter,
  changeFilter,
  setRandomButtonClick,
  setDiscussedButtonClick,
};
