
import { openBigPictureModal } from './components/big-picture-modal.js';
import { picturesContainer, renderPictureThumbnails } from './components/thumbnails.js';

// отрисовка превью-изображений пользователей на странице
renderPictureThumbnails();

// добавление обработчика открытия модального окна на контейнер превью-изображений
picturesContainer.addEventListener('click', (evt) => {
  const currentElement = evt.target.closest('.picture');

  if (currentElement) {
    evt.preventDefault();
    openBigPictureModal(currentElement.dataset.pictureId);
  }
});
