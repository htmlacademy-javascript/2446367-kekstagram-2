import { FILE_TYPES } from '../data.js';

const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const onUploadFile = () => {
  fileChooser.setAttribute('accept', 'image/png, image/jpeg');

  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;

    effectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url("${url}")`;
    });
  }
};

fileChooser.addEventListener('change', onUploadFile);
