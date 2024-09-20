import { ERROR_SHOW_TIME } from '../../data.js';

const dataErrorMessageTemplate = document.querySelector('#data-error').content
  .querySelector('.data-error');

// сообщение об ошибке загрузки данных
const hasDataErrorMessage = () => {
  const messageElement = dataErrorMessageTemplate.cloneNode(true);
  document.body.append(messageElement);

  setTimeout(() => {
    if (messageElement) {
      messageElement.remove();
    }
  }, ERROR_SHOW_TIME);
};

export { hasDataErrorMessage };
