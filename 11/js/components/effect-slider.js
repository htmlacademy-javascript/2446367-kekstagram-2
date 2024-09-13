import { effectPresets, stylePresets } from '../const.js';

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

const resetImgEffectClassName = () => {
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

  resetImgEffectClassName();
  updateEffectSlider(imgEffect);
  updateImgEffect(imgEffect);
};

export {onEffectSlider, resetImgEffect};
