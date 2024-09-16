import { COUNT_STEP } from '../data.js';

let currentCount = 0;
let comments = [];

const bigPictureModal = document.querySelector('.big-picture');

const commentsList = document.querySelector('.social__comments');
const commentTemplate = bigPictureModal.querySelector('.social__comment');
const commentLoader = bigPictureModal.querySelector('.comments-loader');
const commentCount = bigPictureModal.querySelector('.social__comment-count');

const commentShowCount = bigPictureModal.querySelector('.social__comment-shown-count');
const commentTotalCount = bigPictureModal.querySelector('.social__comment-total-count');

commentsList.innerHTML = '';

// отрисовка части комментариев
const renderPartComments = () => {
  const commentListFragment = document.createDocumentFragment();

  if (comments.length !== 0) {
    const partComments = comments.slice(currentCount, currentCount + COUNT_STEP);
    const partCommentsLength = partComments.length + currentCount;

    partComments.forEach((comment) => {
      const commentItem = commentTemplate.cloneNode(true);

      commentItem.querySelector('.social__picture').src = comment.avatar;
      commentItem.querySelector('.social__picture').alt = comment.name;
      commentItem.querySelector('.social__text').textContent = comment.message;

      commentListFragment.appendChild(commentItem);
    });

    commentsList.appendChild(commentListFragment);

    commentShowCount.textContent = partCommentsLength;
    commentTotalCount.textContent = comments.length;

    if (partCommentsLength >= comments.length) {
      commentLoader.classList.add('hidden');
    }

    currentCount += COUNT_STEP;
  } else {
    commentLoader.classList.add('hidden');
    commentCount.classList.add('hidden');
  }
};

// сброс данных о комментариях
const clearComments = () => {
  currentCount = 0;
  commentsList.innerHTML = '';

  commentLoader.classList.remove('hidden');
  commentCount.classList.remove('hidden');
  commentLoader.removeEventListener('click', renderPartComments);
};

// отрисовка остальных комментариев по клику
const renderCommentsList = (currentPhotoComment) => {
  comments = currentPhotoComment;
  renderPartComments();

  commentLoader.addEventListener('click', renderPartComments);
};

export { renderCommentsList, clearComments };
