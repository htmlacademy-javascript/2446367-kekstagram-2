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

export {effectPresets, stylePresets};
