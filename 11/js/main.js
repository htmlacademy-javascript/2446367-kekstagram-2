import { openBigPictureModal } from './components/big-picture-modal.js';
import { picturesContainer } from './components/thumbnails.js';
import { openUploadModal, setUserFormSubmit, closeUploadModal } from './components/upload-form-modal.js';
import { getData, receivedData } from './api.js';
import './components/upload-form-modal.js';

// загрузка и отрисовка превью-изображений пользователей на странице
getData();

// добавление обработчика открытия модального окна на контейнер превью-изображений
picturesContainer.addEventListener('click', (evt) => {
  const currentElement = evt.target.closest('.picture');

  if (currentElement) {
    evt.preventDefault();
    openBigPictureModal(currentElement.dataset.pictureId, receivedData);
  }
});

// открытие модального окна загрузки файла
openUploadModal();
setUserFormSubmit(closeUploadModal);
