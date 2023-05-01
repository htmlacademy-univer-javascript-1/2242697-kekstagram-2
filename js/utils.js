const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return -1;
  }
  if (max < min){
    [max, min] = [min, max];
  }
  return Math.ceil(min) + Math.floor(Math.random() * (Math.floor(max) + 1 - Math.ceil(min)));
};

const getLineLength = (line, maxLength) => line.length <= maxLength;

const isEscapeKey = (event) => event.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  for(let i = 0; i < 15; i++){
    array.pop();
  }
  return array;
};

export {
  getRandomInteger,
  isEscapeKey,
  debounce,
  throttle,
  shuffleArray,
  getLineLength
};
