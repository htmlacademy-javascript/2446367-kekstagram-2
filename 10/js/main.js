import { openBigPictureModal } from './components/big-picture-modal.js';
import { picturesContainer, renderPictureThumbnails } from './data/thumbnails-data.js';
import { openUploadModal } from './components/upload-form-modal.js';

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
// открытие модального окна загрузки файла
openUploadModal();
