function factorial(n) {
  if(n==1 || n==0){
    return 1;
  }else{
    let fac=1;
      for(let i=1;i<=n;i++){
        fac *= i;
      }
      return fac;
  }
}
