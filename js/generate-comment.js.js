import { createRandomIdFromRangeGenerator, getRandomInteger } from './utils.js';
import { photosQuantity } from './generate-photo.js';
const avatarQuantity = 6;
const messageMaxQuantity = 3;
const messageIdMaxValue = 200;
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
const generateCommentsId = createRandomIdFromRangeGenerator(
  1,
  messageIdMaxValue
);

const messagesQuantity = function () {
  return getRandomInteger(1, messageMaxQuantity);
};
const generateCommentsMessage = () => {
  let previousValues = [];
  let currentValue;
  for (let i = messagesQuantity(); i > 0; i--) {
    currentValue = COMMENTS[getRandomInteger(0, COMMENTS.length - 2)];
    if (previousValues.length <= COMMENTS.length) {
      while (previousValues.includes(currentValue)) {
        currentValue = COMMENTS[getRandomInteger(0, COMMENTS.length - 2)];
      }
      previousValues.push(currentValue);
    }
  }
  return previousValues.join(' ');
};
const createComment = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(1, avatarQuantity)}.svg`,
  message: generateCommentsMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 2)],
});
const createComments = () =>
  Array.from({ length: photosQuantity }, createComment);

export { createComments };
export { messagesQuantity };