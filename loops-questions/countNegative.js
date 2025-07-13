let arr=[1,-2,9,-3,7];

function negativeNum(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
      count++;
    }
    
  }
  return count; 
  
}

let ans=negativeNum(arr);
console.log(ans);
