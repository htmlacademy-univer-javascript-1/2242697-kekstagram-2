import {isEscapeKey} from './util.js';

const COMMENTS_PER_PORTION = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment').cloneNode(true);
const socialCaption = document.querySelector('.social__caption');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

let photos = [];
let comments = [];
let commentsShown = 0;

const setPhotos = (newPhotos) => {
  photos = newPhotos;
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const createComment = ({avatar, name, message}) => {
  const newComment = socialComment.cloneNode(true);
  newComment.querySelector('img').src = avatar;
  newComment.querySelector('img').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};

const createComments = () => {
  commentsShown = Math.min(comments.length, commentsShown + COMMENTS_PER_PORTION);
  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', createComments);
  } else {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', createComments);
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  socialComments.innerHTML = '';
  socialComments.append(fragment);
  socialCommentsCount.textContent = `${commentsShown} из ${comments.length} комментариев`;
};

const createBigPicture = ({url, likes, description}) => {
  bigPictureImg.querySelector('img').src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
};

const openBigPicture = (oncePhoto) => {
  bigPicture.classList.remove('hidden');
  comments = oncePhoto.comments;
  createComments();
  createBigPicture(oncePhoto);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
  commentsShown = 0;
  commentsLoader.removeEventListener('click', createComments);
}

document.addEventListener('click', (evt) => {
  const photoId = evt.target.closest('[data-thumbnail-id]') ?.dataset.thumbnailId;
  if (!photoId) {
    return;
  }
  const oncePhoto = photos.find((photo) => photo.id === +photoId);
  if (oncePhoto) {
    openBigPicture(oncePhoto);
  }
});

bigPictureCloseButton .addEventListener('click', () => {
  closeBigPicture();
});

export {setPhotos};