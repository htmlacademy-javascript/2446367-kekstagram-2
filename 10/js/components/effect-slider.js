const chromePreset = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const sepiaPreset = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const marvinPreset = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};

const phobosPreset = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const heatPreset = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const effectPresets = {
  none: marvinPreset,
  chrome: chromePreset,
  sepia: sepiaPreset,
  marvin: marvinPreset,
  phobos: phobosPreset,
  heat: heatPreset,
};

const stylePresets = {
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

const effectLevelInput = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const image = document.querySelector('.img-upload__preview img');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

// скрытие слайдера при открытии модального окна редактирования
imgUploadEffectLevel.classList.add('hidden');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  }
});

const resetEffectClassName = () => {
  image.classList.forEach((item) => {
    if (item.includes('effects__preview--')) {
      image.classList.remove(item);
    }
  });
};

const resetImgEffect = () => {
  image.removeAttribute('class');
  image.removeAttribute('style');
  imgUploadEffectLevel.classList.add('hidden');
};

const updateImgEffect = (effect) => {
  if (effect) {
    image.classList.add(`effects__preview--${effect}`);

    effectLevelSlider.noUiSlider.on('update', () => {
      const range = effectLevelSlider.noUiSlider.get();
      image.style.filter = `${stylePresets[effect].style}(${range}${stylePresets[effect].unit})`;
      effectLevelInput.value = range;
    });
  }

  if (effect !== 'none') {
    imgUploadEffectLevel.classList.remove('hidden');
  } else {
    resetImgEffect();
  }
};

const updateEffectSlider = (effect) => {
  effectLevelSlider.noUiSlider.updateOptions(effectPresets[effect]);
};

const onEffectSlider = (evt) => {
  const imgEffect = evt.target.value;

  resetEffectClassName();
  updateEffectSlider(imgEffect);
  updateImgEffect(imgEffect);
};

export {onEffectSlider, resetImgEffect};
