function showSalary(users, age) {
  let NewArr = users.filter((i,age) => i.age <= ages);
  return NewArr.map(i => `${i.name}, ${i.age}`).join('\n');
}
