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

const effectLevelInput = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const image = document.querySelector('.img-upload__preview img');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

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

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelInput.value = effectLevelSlider.noUiSlider.get();
});

const effectPreset = {
  none: marvinPreset,
  chrome: chromePreset,
  sepia: sepiaPreset,
  marvin: marvinPreset,
  phobos: phobosPreset,
  heat: heatPreset,
};

const stylePreset = {
  none: 'none',
  chrome: `grayscale(${effectLevelInput.value})`,
  sepia: `sepia(${effectLevelInput.value})`,
  marvin: `invert(${effectLevelInput.value}%)`,
  phobos: `blur(${effectLevelInput.value}px)`,
  heat: `brightness(${effectLevelInput.value})`,
};

const resetImgEffect = () => {
  image.classList.forEach((item) => {
    if (item.includes('effects__preview--')) {
      image.classList.remove(item);
    }
  });
};

const updateImgEffect = (effect) => {
  if (effect) {
    image.classList.add(`effects__preview--${effect}`);
    image.style.filter = stylePreset[effect];
  }

  if (effect !== 'none') {
    imgUploadEffectLevel.classList.remove('hidden');
  } else {
    resetEffect();
  }
};

const updateSlider = (effect) => {
  effectLevelSlider.noUiSlider.updateOptions(effectPreset[effect]);
};

const onEffectSlider = (evt) => {
  const effect = evt.target.value;

  resetImgEffect();
  updateSlider(effect);
  updateImgEffect(effect);
};

function resetEffect () {
  image.removeAttribute('class');
  image.removeAttribute('style');
  imgUploadEffectLevel.classList.add('hidden');
}

export {onEffectSlider, resetEffect};
