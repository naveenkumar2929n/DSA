function isPowerofTwo(n){
  if(n==1){
    return true;
  }
  else if(n%2!==0||n<1){
    return false;
  }
  return isPowerofTwo(n/2);

}

console.log(isPowerofTwo(-1));
