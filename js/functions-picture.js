import { PICTURE_COUNT, LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENT_COUNT, DESCRIPTIONS } from './const.js';

import { getRandomInteger, getRandomArrayElement } from './random-functions';

import { createComment } from './functions-comment.js';

export const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

export const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );