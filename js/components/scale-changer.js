const SCALE_STEP = 0.25;

const image = document.querySelector('.img-upload__preview img');
const scaleControlValue = document.querySelector('.scale__control--value');

let scale = 1;


const isScaleValue = (value) => {
  image.style.transform = `scale(${value})`;
  scaleControlValue.setAttribute('value', `${value * 100}%`);
};

const onSmallerButtonClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    isScaleValue(scale);
  }
};

const onBiggerButtonClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    isScaleValue(scale);
  }
};

const resetScale = () => {
  scale = 1;
  isScaleValue(scale);
  image.removeAttribute('style');
};

export {onSmallerButtonClick, onBiggerButtonClick, resetScale};
