import { isEscapeKey } from '../utils.js';
import { ERROR_MESSAGE } from '../data.js';
import { hasError, isValidHashtag } from './validate-hashtag.js';
import { isValidComment } from './validate-comment.js';
import { onSmallerButtonClick, onBiggerButtonClick, resetScale } from './scale-changer.js';
import { onEffectSlider, resetImgEffect } from './effect-changer.js';
import { sendData } from '../api.js';
import { hasPostErrorMessage } from './alert-messages/error-message.js';
import { blockSubmitButton, unblockSubmitButton } from './submit-button.js';

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
  const postErrorMessage = document.querySelector('.error');
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else if (!postErrorMessage) {
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

// закрытие модального окна загрузки файла, hoisting
function closeUploadModal () {
  imgUploadForm.reset();

  document.removeEventListener('keydown', onEscKeydown);

  imgUploadEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imgUploadInput.value = '';

  resetScale();
  resetImgEffect();
}

// изменение масштаба изображения
scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
scaleBiggerButton.addEventListener('click', onBiggerButtonClick);

// изменение эффекта изображения
effectsField.addEventListener('change', onEffectSlider);

// подключение валидации полей хештега и комментария
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

pristine.addValidator(hashtagInput, isValidHashtag, hasError);
pristine.addValidator(commentInput, isValidComment, ERROR_MESSAGE);

// отправка формы
const setUserFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();
      hashtagInput.value = hashtagInput.value.replaceAll(/\s+/g, ' ');
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(() => {
          hasPostErrorMessage();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { openUploadModal, closeUploadModal, setUserFormSubmit };
