import { isEscapeKey } from '../../utils.js';

const postErrorMessageTemplate = document.querySelector('#error').content
  .querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content
  .querySelector('.success');

const MessageTemplate = {
  error: postErrorMessageTemplate,
  success: successMessageTemplate,
};

const getTypeOfMessage = () => {
  const error = document.querySelector('.error');
  const success = document.querySelector('.success');

  const currentMessage = document.body.contains(success) ? success : error;

  return currentMessage;
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeAlertMessage();
  }
};

const onMessageButtonClick = () => closeAlertMessage();

const onOutsideContainerClick = (evt) => {
  const message = getTypeOfMessage();

  if (message) {
    const messageContainer = message.querySelector('div');
    if (!messageContainer.contains(evt.target)) {
      closeAlertMessage();
    }
  }
};

const hasAlertMessage = (message) => {
  const messageElement = MessageTemplate[message].cloneNode(true);
  document.body.append(messageElement);

  if (messageElement) {
    const messageElementButton = messageElement.querySelector('button');

    messageElement.addEventListener('click', onOutsideContainerClick);
    messageElementButton.addEventListener('click', onMessageButtonClick);
    document.addEventListener('keydown', onEscKeydown);
  }
};

// декларативное объявление функции для поднятия
function closeAlertMessage () {
  const message = getTypeOfMessage();

  message.remove();
  document.removeEventListener('keydown', onEscKeydown);
}

export { hasAlertMessage, getTypeOfMessage };
