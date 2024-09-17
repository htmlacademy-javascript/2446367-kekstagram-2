import { isEscapeKey } from '../utils.js';
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

const renderBigPicture = (data) => {
  bigPictureImg.src = data.url;
  bigPictureImg.alt = data.description;

  bigPictureLikes.textContent = data.likes;
  bigPictureCaption.textContent = data.description;
};

const openBigPictureModal = (pictureId, data) => {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const currentElement = data.find((mockup) => mockup.id === Number(pictureId));
  renderBigPicture(currentElement);
  renderCommentsList(currentElement.comments);

  bigPictureCloseButton.addEventListener('click', onCancelButtonClick, {once: true});
  document.addEventListener('keydown', onEscKeydown, {once: true});
};

// декларативное объявление функции для поднятия
function closeBigPictureModal () {
  clearComments();

  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

export { openBigPictureModal, closeBigPictureModal };
