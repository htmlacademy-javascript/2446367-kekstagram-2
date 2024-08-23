const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const bigPictureModal = document.querySelector('.big-picture');

const commentsList = document.querySelector('.social__comments');
const commentTemplate = bigPictureModal.querySelector('.social__comment');
const commentsLoader = bigPictureModal.querySelector('.comments-loader');
const commentsCount = bigPictureModal.querySelector('.social__comment-count');
commentsList.innerHTML = '';

// отрисовка части комментариев
const renderPartComments = () => {
  const commentListFragment = document.createDocumentFragment();

  if (comments !== 'Комментариев пока нет') {
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

    const counter =
    `<span class="social__comment-shown-count">${partCommentsLength}</span>
    из
    <span class="social__comment-total-count">${comments.length}</span> комментариев</div>`;
    commentsCount.innerHTML = counter;

    if (partCommentsLength >= comments.length) {
      commentsLoader.classList.add('hidden');
    }

    currentCount += COUNT_STEP;
  } else {
    commentsLoader.classList.add('hidden');
    commentsCount.classList.add('hidden');
  }
};

// сброс данных о комментариях
const clearComments = () => {
  currentCount = 0;
  commentsList.innerHTML = '';

  commentsLoader.classList.remove('hidden');
  commentsCount.classList.remove('hidden');
  commentsLoader.removeEventListener('click', renderPartComments);
};

// отрисовка всех комментариев по клику
const renderCommentsList = (currentPhotoComment) => {
  comments = currentPhotoComment;
  renderPartComments();

  commentsLoader.addEventListener('click', renderPartComments);
};

export {renderCommentsList, clearComments};
