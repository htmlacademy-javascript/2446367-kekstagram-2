const MAX_COMMENT_LENGTH = 140;
const ERROR_MESSAGE = `Длина комментария не должна превышать ${MAX_COMMENT_LENGTH} символов`;

const isValidComment = (value) => {
  const commentValid = value.length <= MAX_COMMENT_LENGTH;
  return commentValid;
};

export {ERROR_MESSAGE, isValidComment};
