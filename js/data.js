import {createRandomIdFromRangeGenerator, getRandomArrayElement, getRandomInteger} from './util.js';

const MIN_PHOTO_ID_COUNT = 1;
const MAX_PHOTO_ID_COUNT = 25;
const MIN_PHOTO_URL_COUNT = 1;
const MAX_PHOTO_URL_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_ID_COUNT = 1;
const MAX_COMMENTS_ID_COUNT = 999;
const MIN_AVATAR_COMMENTS_URL_COUNT = 1;
const MAX_AVATAR_COMMENTS_URL_COUNT = 6;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 20;
const SIMILAR_PHOTO_DESCRIPTIONS_COUNT = 25;  

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Олег',
  'Артем',
  'Кирилл',
  'Вася',
  'Анна',
  'Екатерина',
  'Юлия',
  'Светлана',
];
const DESCRIPTIONS = [
  'Это я в гораях , сейчас дома уже',
  'Это я  на отдыхе , сейчас дома уже',
  'Это я на работе , сейчас дома уже',
  'Это я в гостях , сейчас дома уже',
  'Это я на улице , сейчас дома уже',
  'Это я  размазан , сейчас дома уже',
];
const generatePhotoId = createRandomIdFromRangeGenerator(MIN_PHOTO_ID_COUNT, MAX_PHOTO_ID_COUNT);
const generatePhotoUrl = createRandomIdFromRangeGenerator(MIN_PHOTO_URL_COUNT, MAX_PHOTO_URL_COUNT);
const generateLikesCount = createRandomIdFromRangeGenerator(MIN_LIKES_COUNT, MAX_LIKES_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(MIN_COMMENTS_ID_COUNT, MAX_COMMENTS_ID_COUNT);
const generateCommentAvatarUrl = () => getRandomInteger(MIN_AVATAR_COMMENTS_URL_COUNT, MAX_AVATAR_COMMENTS_URL_COUNT);

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${generateCommentAvatarUrl()}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: generateLikesCount(),
  comments: Array.from({length: getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)}, createComment)
});

const getPhotoDescriptions = () => Array.from({length: SIMILAR_PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

export {getPhotoDescriptions};
