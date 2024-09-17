import { BASE_URL_GET, BASE_URL_SEND, Method, ErrorText } from './data.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(route, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(BASE_URL_GET, ErrorText.GET_DATA);

const sendData = (body) => load(BASE_URL_SEND, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
