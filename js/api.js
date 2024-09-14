import { hasDataErrorMessage } from './components/alert-messages/error-message.js';
import { hasSuccessMessage } from './components/alert-messages/success-message.js';
import { renderPictureThumbnails } from './components/thumbnails.js';
import { showImgFilter} from './components/filter.js';

const BASE_URL_GET = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
const BASE_URL_SEND = 'https://31.javascript.htmlacademy.pro/kekstagram';

// для записи данных миниатюр, получаемых с сервера
let receivedData;

const getData = () => fetch(BASE_URL_GET)
  .then((response) => {
    if (!response.ok) {
      throw new Error;
    }
    return response.json();
  })
  .then((data) => {
    renderPictureThumbnails(data);
    receivedData = data;
    showImgFilter();
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

export {getData, sendData, receivedData};
