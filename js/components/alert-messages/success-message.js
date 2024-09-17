import { isEscapeKey } from '../../utils.js';

const successMessage = document.querySelector('#success').content
  .querySelector('.success');

// функции и сообщение об успешной отправке данных
const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onMessageButtonClick = () => closeSuccessMessage();

const onOutsideContainerClick = (evt, element) => {
  if (!element.contains(evt.target)) {
    closeSuccessMessage();
  }
};

const hasSuccessMessage = () => {
  document.body.append(successMessage);

  if (successMessage) {
    const successMessageContainer = successMessage.querySelector('.success__inner');
    const successMessageButton = successMessage.querySelector('.success__button');

    successMessageButton.addEventListener('click', onMessageButtonClick);
    document.addEventListener('keydown', onEscKeydown);
    document.addEventListener('click', (evt) => onOutsideContainerClick(evt, successMessageContainer));
  }
};

// декларативное объявление функции для поднятия
function closeSuccessMessage () {
  successMessage.remove();
  document.removeEventListener('keydown', onEscKeydown);
}

export {hasSuccessMessage};
