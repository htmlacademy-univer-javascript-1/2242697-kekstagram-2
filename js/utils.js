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

export {getRandomInteger, getLineLength, isEscapeKey};