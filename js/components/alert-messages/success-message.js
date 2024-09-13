import { isEscapeKey } from '../../utils.js';

const successMessage = document.querySelector('#success').content
  .querySelector('.success');

const closeSuccessMessage = () => {
  successMessage.remove();
};

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
    document.addEventListener('keydown', onEscKeydown, {once: true});
    document.addEventListener('click', (evt) => onOutsideContainerClick(evt, successMessageContainer), {once: true});
  }
};

export {hasSuccessMessage};
