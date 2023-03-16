function showSalary(users, age) {
  let NewArr = users.filter(i => (i.age <= age));
  return NewArr.map(i => `${i.name}, ${i.age}`).join('\n');
}
