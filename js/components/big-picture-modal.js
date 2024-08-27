import { isEscapeKey } from '../utils.js';
import { mockupPictures } from '../data/mocks-data.js';
import { renderCommentsList, clearComments } from './comments-list.js';

const bigPictureModal = document.querySelector('.big-picture');

const bigPictureCloseButton = bigPictureModal.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureModal.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureModal.querySelector('.likes-count');
const bigPictureCaption = bigPictureModal.querySelector('.social__caption');

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const onCancelButtonClick = () => closeBigPictureModal();

// отрисовка изображения модального окна
const renderBigPicture = (data) => {
  bigPictureImg.src = data.url;
  bigPictureImg.alt = data.description;

  bigPictureLikes.textContent = data.likes;
  bigPictureCaption.textContent = data.description;
};

// открытие модального окна
const openBigPictureModal = (pictureId) => {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const currentElement = mockupPictures.find((mockup) => mockup.id === Number(pictureId));
  renderBigPicture(currentElement);
  renderCommentsList(currentElement.comments);

  bigPictureCloseButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onEscKeydown);
};

// закрытие модального окна, hoisting
function closeBigPictureModal () {
  clearComments();
  document.removeEventListener('keydown', onEscKeydown);

  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

export { openBigPictureModal };
