import { shuffle } from '../utils.js';

const imgFilter = document.querySelector('.img-filters');
const imgFilterForm = imgFilter.querySelector('.img-filters__form');
const imgFilterButtons = imgFilter.querySelectorAll('.img-filters__button');
const activeButtonClass = 'img-filters__button--active';

let currentImgFilter = 'filter-default';

const showImgFilter = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

const updateCurrentImgFilter = (current) => {
  currentImgFilter = current;
};

const onImgFilterButtonClick = (evt) => {
  const activeFilter = evt.target;

  imgFilterButtons.forEach((item) => {
    if (item === activeFilter) {
      item.classList.add(activeButtonClass);
    } else {
      item.classList.remove(activeButtonClass);
    }
  });

  updateCurrentImgFilter(activeFilter.id);
};

const setRandomButtonClick = (data) => {
  const slicedRandomData = shuffle(data).slice(0, 10);
  return slicedRandomData;
};

const setDiscussedButtonClick = (data) => {
  const sortedData = data.sort(compareComments);
  return sortedData;
};

imgFilterForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  onImgFilterButtonClick(evt);
});

function compareComments (elem1, elem2) {
  const commentsA = elem1.comments.length;
  const commentsB = elem2.comments.length;

  return commentsB - commentsA;
}

export {
  showImgFilter,
  currentImgFilter,
  setRandomButtonClick,
  setDiscussedButtonClick,
};
