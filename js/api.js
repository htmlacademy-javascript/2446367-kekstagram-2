import { BASE_URL_GET, BASE_URL_SEND } from './data.js';
import { hasDataErrorMessage } from './components/alert-messages/error-message.js';
import { hasSuccessMessage } from './components/alert-messages/success-message.js';

const getData = () => fetch(BASE_URL_GET)
  .then((response) => {
    if (!response.ok) {
      throw new Error;
    }
    return response.json();
  })
  .catch(() => {
    hasDataErrorMessage();
  });

const sendData = (body) => fetch(BASE_URL_SEND, {
  method: 'POST',
  body: body,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error;
    } else {
      hasSuccessMessage();
    }
  });

export { getData, sendData };
