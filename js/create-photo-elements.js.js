import { createPhotos } from './generate-photo.js';
import { messagesQuantity } from './generate-comment.js';
const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');
const picturesItem = createPhotos();
const picturesListFragment = document.createDocumentFragment();
picturesItem.forEach(({ url, likes }) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent =
    messagesQuantity();
  picturesListFragment.appendChild(photoElement);
});
picturesList.appendChild(picturesListFragment);