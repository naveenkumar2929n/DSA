let arr=[1,1,0,1,1,1,0,1,1,1,1];

function find(arr){
  let currCount=0;
  let maxCount=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
      currCount++;
    }else{
      maxCount=Math.max(currCount,maxCount);
      currCount=0;
    }
  }
  return Math.max(currCount,maxCount);
}

console.log(find(arr));
