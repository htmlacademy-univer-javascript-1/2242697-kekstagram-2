import { createRandomIdFromRangeGenerator, getRandomInteger } from './utils.js';
// количество генерируемых фотографий в заданном промежутке
const minPhotoQuantity = 1;
const maxPhotoQuantity = 25;
const photosQuantity = maxPhotoQuantity - minPhotoQuantity + 1;
// описание фотографий
const PHOTO_DESCRIPTION = [
  'Это я в гораях , сейчас дома уже',
  'Это я  на отдыхе , сейчас дома уже',
  'Это я на работе , сейчас дома уже',
  'Это я в гостях , сейчас дома уже',
  'Это я на улице , сейчас дома уже',
  'Это я  размазан , сейчас дома уже',
];
const generatePhotoId = createRandomIdFromRangeGenerator(
  minPhotoQuantity,
  maxPhotoQuantity
);
const generatePhotoUrl = createRandomIdFromRangeGenerator(
  minPhotoQuantity,
  maxPhotoQuantity
);
const createPhoto = () => {
  const getPhotoUrl = generatePhotoUrl();
  return {
    id: generatePhotoId(),
    url: `photos/${getPhotoUrl}.jpg`,
    description: PHOTO_DESCRIPTION[getPhotoUrl - 1],
    likes: getRandomInteger(15, 200),
  };
};
const createPhotos = () => Array.from({ length: photosQuantity }, createPhoto);

export { photosQuantity };
export { createPhotos };