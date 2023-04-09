import {setPhotos} from './big-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPhoto = ({url, likes, comments, description, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.thumbnailId = id;
  return pictureElement;
};

const drawPhotos = (similarPictures) => {
  const similarListFragment = document.createDocumentFragment();
  similarPictures.forEach((similarPicture) => {
    similarListFragment.appendChild(createPhoto(similarPicture));
  });
  pictures.appendChild(similarListFragment);
  setPhotos(similarPictures);
};

export {drawPhotos};
