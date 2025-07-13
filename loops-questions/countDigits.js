function countDigits(n){
  n=Math.abs(n)
  let count=0;
  if(n==0){
    return 1;
  }
  while(n>0){
    count++;
    n=Math.floor(n/10);
  }
  return count;
}

let num=-101;

let result=countDigits(num);
console.log(result);
