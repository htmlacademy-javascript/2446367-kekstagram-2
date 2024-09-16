import { ERROR_SHOW_TIME } from '../../data.js';
import { isEscapeKey } from '../../utils.js';

const dataErrorMessage = document.querySelector('#data-error').content
  .querySelector('.data-error');
const postErrorMessage = document.querySelector('#error').content
  .querySelector('.error');

// сообщение об ошибке загрузки данных
const hasDataErrorMessage = () => {
  document.body.append(dataErrorMessage);
  setTimeout(() => {
    if (dataErrorMessage) {
      dataErrorMessage.remove();
    }
  }, ERROR_SHOW_TIME);
};

// функции и сообщение об ошибке отправки данных
const closePostErrorMessage = () => {
  postErrorMessage.remove();
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePostErrorMessage();
  }
};

const onMessageButtonClick = () => closePostErrorMessage();

const onOutsideContainerClick = (evt, element) => {
  if (!element.contains(evt.target)) {
    closePostErrorMessage();
  }
};

const hasPostErrorMessage = () => {
  document.body.append(postErrorMessage);

  if (postErrorMessage) {
    const postErrorContainer = postErrorMessage.querySelector('.error__inner');
    const postErrorButton = postErrorMessage.querySelector('.error__button');

    postErrorButton.addEventListener('click', onMessageButtonClick);
    document.addEventListener('keydown', onEscKeydown, {once: true});
    document.addEventListener('click', (evt) => onOutsideContainerClick(evt, postErrorContainer), {once: true});
  }
};

export {hasDataErrorMessage, hasPostErrorMessage, postErrorMessage};
