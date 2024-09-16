import { openBigPictureModal } from './components/big-picture-modal.js';
import { openUploadModal, setUserFormSubmit, closeUploadModal } from './components/upload-form-modal.js';
import { getData } from './api.js';
import { renderPictureThumbnails } from './components/thumbnails.js';
import { showImgFilter, changeFilter } from './components/filter.js';
import { debounce } from './utils.js';
import { RENDER_DELAY } from './data.js';

// загрузка и отрисовка превью-изображений пользователей на странице

// переменная для записи данных миниатюр, получаемых с сервера
let receivedData;

getData()
  .then((data) => {
    renderPictureThumbnails(data);
    receivedData = data;
    showImgFilter();
    changeFilter(debounce(() => renderPictureThumbnails(data), RENDER_DELAY));
  });

// добавление обработчика открытия модального окна на контейнер превью-изображений
const picturesContainer = document.querySelector('.pictures');

picturesContainer.addEventListener('click', (evt) => {
  const currentElement = evt.target.closest('.picture');

  if (currentElement) {
    evt.preventDefault();
    openBigPictureModal(currentElement.dataset.pictureId, receivedData);
  }
});

// открытие модального окна загрузки файла
openUploadModal();

// отправка формы и закрытие модального окна загрузки файла
setUserFormSubmit(closeUploadModal);
