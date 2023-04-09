import {isEscapeKey} from './util.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги!';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const fileUpload = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const cancelButton = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:  'img-upload__field-wrapper',
});

const showUploadModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadModal = () => {
  form.reset();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt) && !isFieldFocused()) {
    evt.preventDefault();
    closeUploadModal();
  }
}

const onCancelButtonClick = () => {
  closeUploadModal();
};

const onFileInputChange = () => {
  showUploadModal();
};

const isValidTags = (tag) => VALID_SYMBOLS.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};


const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTags);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const onSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileUpload.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onSubmit);
