function getMinMax(str) {
  // ваш код...
  let numbersOnly = str
  .split(',').join(' ').split(' ')
  .filter(item => Number(item));
  let result = {
    min: Math.min(...numbersOnly),
    max: Math.max(...numbersOnly),
  }
  return result;
}
