const ERROR_MESSAGE_DURATION = 5000;

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
  const randomPicturesCount = 10;
  const picturesCount = 25;

  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  for(let i = 0; i < picturesCount - randomPicturesCount; i++){
    array.pop();
  }
  return array;
};

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff4040';
  alertContainer.textContent = 'Не удалось загрузить фотографии с сервера';
  document.body.append(alertContainer);
  setTimeout(() => alertContainer.remove(), ERROR_MESSAGE_DURATION);
};

export {
  isEscapeKey,
  debounce,
  throttle,
  shuffleArray,
  showAlert
};