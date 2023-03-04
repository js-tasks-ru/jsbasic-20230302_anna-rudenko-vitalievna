function sumSalary(salaries) {
  let sum = 0;
    for(let key in salaries){
      if (isFinite(salaries[key]) && !isNaN(salaries[key]) && typeof salaries[key] !== 'boolean'){
        sum += salaries[key];
      }else if (salaries[key] == 'number'){
        sum = 0;
      }
    }
  return sum;
}
