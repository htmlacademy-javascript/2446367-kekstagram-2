const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

const renderCommentList = (data) => {
  commentsList.innerHTML = '';
  const commentListFragment = document.createDocumentFragment();

  if (data.comments !== 'Комментариев пока нет') {
    data.comments.forEach((comment) => {
      const commentItem = commentTemplate.cloneNode(true);

      commentItem.querySelector('.social__picture').src = comment.avatar;
      commentItem.querySelector('.social__picture').alt = comment.name;
      commentItem.querySelector('.social__text').textContent = comment.message;

      commentListFragment.appendChild(commentItem);
    });

    commentsList.appendChild(commentListFragment);
  }
};

export {commentsList, renderCommentList};
