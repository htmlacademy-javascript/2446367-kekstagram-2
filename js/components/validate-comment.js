const isValidComment = (value) => {
  const commentValid = value.length <= 140;
  return commentValid;
};

export {isValidComment};
