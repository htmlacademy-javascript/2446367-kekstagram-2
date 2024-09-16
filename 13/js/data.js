// определение адресов сервера
const BASE_URL_GET = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
const BASE_URL_SEND = 'https://31.javascript.htmlacademy.pro/kekstagram';

// определение расширений для загружаемых файлов
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

// определение данных для валидации хэштега
const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAGS_SYMBOLS = 20;

// определение данных для валидации комментария
const MAX_COMMENT_LENGTH = 140;
const ERROR_MESSAGE = `Длина комментария не должна превышать ${MAX_COMMENT_LENGTH} символов`;

// определение шага изменения масштаба изображения
const SCALE_STEP = 0.25;

// определение шага загрузки комментариев
const COUNT_STEP = 5;

// определение времени таймера показа ошибки
const ERROR_SHOW_TIME = 5000;

// определение количества показываемых случайных фото
const RANDOM_PHOTO_COUNT = 10;

// определение задержки перерисовки
const RENDER_DELAY = 500;

// определение объектов данных для работы с эффектами изображения
const CHROME_PRESET = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const SEPIA_PRESET = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const MARVIN_PRESET = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};

const PHOBOS_PRESET = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const HEAT_PRESET = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const EffectPreset = {
  none: MARVIN_PRESET,
  chrome: CHROME_PRESET,
  sepia: SEPIA_PRESET,
  marvin: MARVIN_PRESET,
  phobos: PHOBOS_PRESET,
  heat: HEAT_PRESET,
};

const StylePreset = {
  none: {
    style: 'none',
    unit: '',
  },
  chrome: {
    style: 'grayscale',
    unit: '',
  },
  sepia: {
    style: 'sepia',
    unit: '',
  },
  marvin: {
    style: 'invert',
    unit: '%',
  },
  phobos: {
    style: 'blur',
    unit: 'px',
  },
  heat: {
    style: 'brightness',
    unit: '',
  },
};

export {
  BASE_URL_GET,
  BASE_URL_SEND,
  FILE_TYPES,
  RANDOM_PHOTO_COUNT,
  MAX_HASHTAGS_COUNT,
  MAX_HASHTAGS_SYMBOLS,
  MAX_COMMENT_LENGTH,
  ERROR_MESSAGE,
  SCALE_STEP,
  COUNT_STEP,
  ERROR_SHOW_TIME,
  RENDER_DELAY,
  EffectPreset,
  StylePreset };
