let n=1121;

function isPalindrome(n){
  let rev=0;
  let original=n;
  while(n>0){
    let rem=n%10;
    rev=rev*10+rem;
    n=Math.floor(n/10);

  }
   return(original==rev)
    
  
  
}


let result=isPalindrome(n);
console.log(result);
