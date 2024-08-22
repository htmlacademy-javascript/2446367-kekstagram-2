import { isEscapeKey } from '../utils.js';
import { mockupPictures } from '../data/mocks-data.js';
import { renderCommentList } from './comments-list.js';

const bigPictureModal = document.querySelector('.big-picture');

const bigPictureCloseButton = bigPictureModal.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureModal.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureModal.querySelector('.likes-count');
const bigPictureCaption = bigPictureModal.querySelector('.social__caption');

const commentsCount = bigPictureModal.querySelector('.social__comment-count');
const commentsLoader = bigPictureModal.querySelector('.comments-loader');

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

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
  renderCommentList(currentElement);

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onEscKeydown);
};

// закрытие модального окна
function closeBigPictureModal () {
  document.removeEventListener('keydown', onEscKeydown);

  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const onCancelButtonClick = () => {
  closeBigPictureModal();
};

bigPictureCloseButton.addEventListener('click', onCancelButtonClick);

export { openBigPictureModal };
