import { ERROR_MESSAGE } from '../../data.js';
import { isValidComment } from './validate-comment.js';
import { hasError, isValidHashtag } from './validate-hashtag.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const commentInput = imgUploadForm.querySelector('.text__description');
const hashtagInput = imgUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

const resetPristine = () => {
  pristine.reset();
};

const isValid = () => pristine.validate();

pristine.addValidator(commentInput, isValidComment, ERROR_MESSAGE);
pristine.addValidator(hashtagInput, isValidHashtag, hasError);

export { pristine, resetPristine, isValid };
