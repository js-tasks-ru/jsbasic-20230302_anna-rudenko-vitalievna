function getMinMax(str) {
  const Arr = str.split(' ');
  const min = Math.min.apply(null, Arr);
  const max = Math.max.apply(null, Arr);
  return Obj = {
    min,
    max,
  };
}
