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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Это я в гораях , сейчас дома уже',
  'Это я  на отдыхе , сейчас дома уже',
  'Это я на работе , сейчас дома уже',
  'Это я в гостях , сейчас дома уже',
  'Это я на улице , сейчас дома уже',
  'Это я  размазан , сейчас дома уже',
];

const SIMILAR_PHOTO_COUNT = 25;

const createNumberGenerator = () => {
  let id = 0;

  return function () {
    id += 1;
    return id;
  };
};

const generatePhotoId = createNumberGenerator();
const generatePhotoUrl = createNumberGenerator();
const generateCommentId = createNumberGenerator();

const getRandomCommentId = () => {
  const commentId = [];
  while (commentId.length < SIMILAR_PHOTO_COUNT) {
    const randomNumber = Math.ceil(Math.random() * SIMILAR_PHOTO_COUNT);
    let found = false;
    for (let i = 0; i < commentId.length; i++) {
      if (commentId[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) {
      commentId[commentId.length] = randomNumber;
    }
  }
  return commentId;
};
const randomIdComment = getRandomCommentId();

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateMessage = (elements) => {
  const messageOne = elements[getRandomInteger(0, elements.length - 1)];
  const messageTwo = elements[getRandomInteger(0, elements.length - 1)];
  let message;
  if (messageOne === messageTwo) {
    message = messageOne;
  } else {
    message = `${messageOne } ${ messageTwo}`;
  }

  return message;
};

const createComment = () => ({
  id: randomIdComment[generateCommentId()],
  avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
  message: generateMessage(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: createComment(),
});
Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);