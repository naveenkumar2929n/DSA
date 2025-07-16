function fun(n){
  if(n==6){
    return;
  }
  console.log(n);
  n=n+1;
  fun(n)
  
}

fun(1)

