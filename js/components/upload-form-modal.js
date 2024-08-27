import { isEscapeKey } from '../utils.js';
import { error, isValidHashtag } from './validate-hashtag.js';
import { isValidComment } from './validate-comment.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadEditor = document.querySelector('.img-upload__overlay');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');

const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
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
  imgUploadCancelButton.removeEventListener('click', onCancelButtonClick);
  imgUploadInput.value = '';
}

// подключение валидации полей хештега и комментария
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

pristine.addValidator(hashtagInput, isValidHashtag, error);
pristine.addValidator(commentInput, isValidComment, 'Длина комментария не должна превышать 140 символов');

// валидация полей и отправка формы
const onFormSubmit = (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    hashtagInput.value = hashtagInput.value.replaceAll(/\s+/g, ' ');
    imgUploadForm.submit();
  }
};

imgUploadForm.addEventListener('submit', onFormSubmit);

export {openUploadModal};
