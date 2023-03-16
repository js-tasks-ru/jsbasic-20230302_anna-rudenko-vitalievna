function camelize(str) {
  return str.split('-').map((i,index) => (index == 0) ? i : i[0].toUpperCase() + i.slice(1)).join('');
}
