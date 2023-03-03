function factorial(n) {
  if(n==1 || n==0){
    n = 1;
    return n;
  }else{
    let fac=1;
      for(let i=1;i<=n;i++){
        fac *= i;
      }
      return fac;
  }
}
