import { SUCCESS_ALERT, ERROR_ALERT } from '../data.js';
import { isEscapeKey } from '../utils.js';
import { onSmallerButtonClick, onBiggerButtonClick, resetScale } from './scale-changer.js';
import { onEffectPreview, resetImgEffect } from './effect-changer.js';
import { sendData } from '../api.js';
import { hasAlertMessage, getTypeOfMessage } from './alert-messages/alert-message.js';
import { blockSubmitButton, unblockSubmitButton } from './submit-button.js';
import { resetPristine, isValid } from './validation/pristine-validator.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadEditor = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancelButton = imgUploadForm.querySelector('.img-upload__cancel');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const commentInput = imgUploadForm.querySelector('.text__description');

const scaleSmallerButton = imgUploadForm.querySelector('.scale__control--smaller');
const scaleBiggerButton = imgUploadForm.querySelector('.scale__control--bigger');

const effectsField = imgUploadForm.querySelector('.img-upload__effects');

const onEscKeydown = (evt) => {
  const message = getTypeOfMessage();

  if(isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else if (!message) {
      closeUploadModal();
    }
  }
};

const onCancelButtonClick = () => closeUploadModal();

// открытие модального окна загрузки файла
const openUploadModal = () => {
  imgUploadInput.addEventListener('change', () => {
    imgUploadEditor.classList.remove('hidden');
    document.body.classList.add('modal-open');

    imgUploadCancelButton.addEventListener('click', onCancelButtonClick);
    document.addEventListener('keydown', onEscKeydown);
  });
};

// декларативное объявление функции для поднятия
function closeUploadModal () {
  imgUploadForm.reset();

  document.removeEventListener('keydown', onEscKeydown);

  imgUploadEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imgUploadInput.value = '';

  resetPristine();
  resetScale();
  resetImgEffect();
}

// изменение масштаба изображения
scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
scaleBiggerButton.addEventListener('click', onBiggerButtonClick);

// изменение эффекта изображения
effectsField.addEventListener('change', onEffectPreview);

// отправка формы
const setUserFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
      blockSubmitButton();
      hashtagInput.value = hashtagInput.value.replaceAll(/\s+/g, ' ');

      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(() => {
          hasAlertMessage(SUCCESS_ALERT);
        })
        .catch(() => {
          hasAlertMessage(ERROR_ALERT);
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { openUploadModal, closeUploadModal, setUserFormSubmit };
